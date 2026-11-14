/* Verktyg för kurssidornas kod.
   Varje data/terminer/<id>/sida.js lagrar bara sina skillnader mot den gemensamma motorn i
   data/gemensamt.js (@@SHARED:css|core|da:[ändringar]@@). Det här verktyget packar upp
   kurssidorna till fullständig kod, låter dig ändra i den och räknar sedan om skillnaderna.

   Används från Node:
     const K=require('./tools/kurskod');
     const kod=K.load();                       // läser gemensamt.js och alla sida.js
     kod.replaceAll('core','gammal text','ny text');  // ändrar motorn och alla kurser som har texten
     kod.save();                               // skriver tillbaka och räknar om skillnaderna
*/
'use strict';
const fs=require('fs'),path=require('path');
const ROOT=path.join(__dirname,'..');
const KINDS=['css','core','da'];
const PH=/@@SHARED:(css|core|da):(\[[\s\S]*?\])@@/g;

function applyDelta(base,ops){const b=base.split('\n'),out=[];let i=0;for(const o of ops){if(o[0]==='='){for(let k=0;k<o[1];k++)out.push(b[i++]);}else if(o[0]==='-')i+=o[1];else for(const l of o[1])out.push(l);}return out.join('\n');}

// Myers-diff på rader. Ger ändringslistan i samma format som applyDelta läser.
function makeDelta(base,target){
 const a=base.split('\n'),b=target.split('\n');
 let pre=0;while(pre<a.length&&pre<b.length&&a[pre]===b[pre])pre++;
 let suf=0;while(suf<a.length-pre&&suf<b.length-pre&&a[a.length-1-suf]===b[b.length-1-suf])suf++;
 const A=a.slice(pre,a.length-suf),B=b.slice(pre,b.length-suf);
 const N=A.length,M=B.length,MAX=N+M,off=MAX+1;
 const V=new Int32Array(2*MAX+3);const trace=[];
 let done=false;
 for(let d=0;d<=MAX&&!done;d++){
  trace.push(V.slice());
  for(let k=-d;k<=d;k+=2){
   let x=(k===-d||(k!==d&&V[off+k-1]<V[off+k+1]))?V[off+k+1]:V[off+k-1]+1;
   let y=x-k;while(x<N&&y<M&&A[x]===B[y]){x++;y++;}
   V[off+k]=x;if(x>=N&&y>=M){done=true;break;}
  }
 }
 // spåra bakåt
 const edits=[];let x=N,y=M;
 for(let d=trace.length-1;d>=0;d--){
  const Vd=trace[d],k=x-y;
  const prevK=(k===-d||(k!==d&&Vd[off+k-1]<Vd[off+k+1]))?k+1:k-1;
  const px=Vd[off+prevK],py=px-prevK;
  while(x>px&&y>py){edits.push(['=',A[x-1]]);x--;y--;}
  if(d>0){if(x===px)edits.push(['+',B[y-1]]);else edits.push(['-',A[x-1]]);}
  x=px;y=py;
 }
 edits.reverse();
 const ops=[];const push=(t,v)=>{const last=ops[ops.length-1];if(t==='+'){if(last&&last[0]==='+')last[1].push(v);else ops.push(['+',[v]]);}else{if(last&&last[0]===t)last[1]++;else ops.push([t,1]);}};
 for(let i=0;i<pre;i++)push('=');
 // skriv borttagningar före tillägg inom varje ändrat block
 let i=0;while(i<edits.length){if(edits[i][0]==='='){push('=');i++;continue;}const del=[],add=[];while(i<edits.length&&edits[i][0]!=='='){(edits[i][0]==='-'?del:add).push(edits[i][1]);i++;}if(del.length)ops.push(['-',del.length]);if(add.length)ops.push(['+',add]);}
 for(let i=0;i<suf;i++)push('=');
 if(applyDelta(base,ops)!==target)throw new Error('makeDelta: kontrollen misslyckades');
 return ops;
}

function load(){
 const gemFile=path.join(ROOT,'data/gemensamt.js');
 const gemLines=fs.readFileSync(gemFile,'utf8').split('\n');
 const shared={};
 for(const k of KINDS){const i=gemLines.findIndex(l=>l.startsWith('"'+k+'": '));const l=gemLines[i];shared[k]=JSON.parse(l.slice(k.length+4).replace(/,$/,''));}
 const bi=gemLines.findIndex(l=>l.startsWith('REMISSNISSEN.bridge='));
 let bridge=JSON.parse(gemLines[bi].slice('REMISSNISSEN.bridge='.length).replace(/;$/,''));
 const courses={};
 for(const id of fs.readdirSync(path.join(ROOT,'data/terminer'))){
  const file=path.join(ROOT,'data/terminer',id,'sida.js');if(!fs.existsSync(file))continue;
  const lines=fs.readFileSync(file,'utf8').split('\n');
  const li=lines.findIndex(l=>l.startsWith('REMISSNISSEN.html['));
  const prefix=lines[li].slice(0,lines[li].indexOf('=')+1);
  const html=JSON.parse(lines[li].slice(prefix.length).replace(/;$/,''));
  const segs=[];let last=0,m;PH.lastIndex=0;
  while((m=PH.exec(html))){segs.push({text:html.slice(last,m.index)});segs.push({kind:m[1],code:applyDelta(shared[m[1]],JSON.parse(m[2]))});last=m.index+m[0].length;}
  segs.push({text:html.slice(last)});
  courses[id]={file,lines,li,prefix,segs};
 }
 const api={shared,courses,
  get bridge(){return bridge},set bridge(v){bridge=v},
  // kör fn(kod, {id, kind}) på motorn (id null) och på varje kurs fullständiga kod
  edit(kind,fn){
   if(kind==='html'){for(const [id,c] of Object.entries(courses))for(const s of c.segs)if('text' in s)s.text=fn(s.text,{id,kind});return api;}
   shared[kind]=fn(shared[kind],{id:null,kind});
   for(const [id,c] of Object.entries(courses))for(const s of c.segs)if(s.kind===kind)s.code=fn(s.code,{id,kind});
   return api;
  },
  // ersätter text; varnar om den inte hittas någonstans. only = lista med kurs-id om bara vissa ska ändras
  replaceAll(kind,from,to,{only=null,expect=null}={}){
   let n=0;const hits=[];
   const f=(code,ctx)=>{if(only&&!only.includes(ctx.id))return code;if(!code.includes(from))return code;const parts=code.split(from);n+=parts.length-1;hits.push(ctx.id||'gemensamt');return parts.join(typeof to==='function'?to(ctx):to);};
   if(kind==='html'){for(const [id,c] of Object.entries(courses))for(const s of c.segs)if('text' in s)s.text=f(s.text,{id});}
   else api.edit(kind,f);
   if(!n)throw new Error('Hittade inte: '+from.slice(0,80));
   if(expect!==null&&n!==expect)throw new Error('Väntade '+expect+' träffar men fick '+n+' för: '+from.slice(0,60)+' i '+hits.join(','));
   return hits;
  },
  full(id){return courses[id].segs.map(s=>'text' in s?s.text:s.code).join('');},
  save(){
   gemLines[gemLines.findIndex(l=>l.startsWith('"css": '))]='"css": '+JSON.stringify(shared.css)+',';
   gemLines[gemLines.findIndex(l=>l.startsWith('"core": '))]='"core": '+JSON.stringify(shared.core)+',';
   gemLines[gemLines.findIndex(l=>l.startsWith('"da": '))]='"da": '+JSON.stringify(shared.da);
   gemLines[bi]='REMISSNISSEN.bridge='+JSON.stringify(bridge)+';';
   fs.writeFileSync(gemFile,gemLines.join('\n'));
   for(const c of Object.values(courses)){
    const html=c.segs.map(s=>'text' in s?s.text:'@@SHARED:'+s.kind+':'+JSON.stringify(makeDelta(shared[s.kind],s.code))+'@@').join('');
    c.lines[c.li]=c.prefix+JSON.stringify(html)+';';
    fs.writeFileSync(c.file,c.lines.join('\n'));
   }
  }
 };
 return api;
}
module.exports={load,applyDelta,makeDelta};
