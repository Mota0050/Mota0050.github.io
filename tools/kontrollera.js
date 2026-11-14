#!/usr/bin/env node
/* Kontrollerar att sidans filer och data hänger ihop. Körs automatiskt av GitHub Actions vid varje push
   (.github/workflows/kontroll.yml) och kan köras lokalt med:  node tools/kontrollera.js
   Fel (✗) stoppar kontrollen. Varningar (!) visas men stoppar inget. */
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const ROOT=path.join(__dirname,'..');
const errors=[],warnings=[];
const err=(where,m)=>errors.push(where+': '+m),warn=(where,m)=>warnings.push(where+': '+m);
const read=f=>fs.readFileSync(path.join(ROOT,f),'utf8');
const exists=f=>fs.existsSync(path.join(ROOT,f));

// 1. Ladda datan precis som webbläsaren gör
const ctx={};ctx.window=ctx;ctx.globalThis=ctx;vm.createContext(ctx);
function run(f){
 try{vm.runInContext(read(f),ctx,{filename:f});return true;}
 catch(e){
  const m=String(e.stack||e).match(/:(\d+)(?::(\d+))?/);
  err(f,'filen går inte att läsa'+(m?' (rad '+m[1]+')':'')+': '+e.message+'. Kontrollera kommatecken, citattecken och klamrar runt den raden.');
  return false;
 }
}
if(!run('data/terminer.js'))finish();
const D=ctx.REMISSNISSEN;
run('data/gemensamt.js');
const applyDelta=(base,ops)=>{const b=base.split('\n'),out=[];let i=0;for(const o of ops){if(o[0]==='='){for(let k=0;k<o[1];k++){if(i>=b.length)throw new Error('skillnaderna pekar utanför motorn');out.push(b[i++]);}}else if(o[0]==='-')i+=o[1];else for(const l of o[1])out.push(l);}if(i!==b.length)throw new Error('skillnaderna täcker inte hela motorn ('+i+' av '+b.length+' rader)');return out.join('\n');};

const ids=new Set();
for(const c of D.terminer){
 const W='data/terminer.js ('+c.id+')';
 if(ids.has(c.id))err(W,'id används två gånger');ids.add(c.id);
 for(const k of ['id','term','title','subjects','headings'])if(c[k]===undefined)err(W,'saknar fältet "'+k+'"');
 if(c.link)continue;
 const dir='data/terminer/'+c.id+'/';
 const files=['sida','uppslag','tentaradar'].concat((c.modules||[]).some(m=>m.id==='os')?['osce']:[]);
 let ok=true;for(const f of files){if(!exists(dir+f+'.js')){err(W,'filen '+dir+f+'.js saknas');ok=false;}else ok=run(dir+f+'.js')&&ok;}
 if(!ok)continue;
 // 2. Bygg kurssidan och kontrollera att den gemensamma motorn och datablocken passar
 let html=D.html[c.id];
 if(typeof html!=='string'){err(dir+'sida.js','sätter inte REMISSNISSEN.html["'+c.id+'"]');continue;}
 try{html=html.replace(/@@SHARED:(css|core|da):(\[[\s\S]*?\])@@/g,(_,k,o)=>applyDelta(D.shared[k],JSON.parse(o)));}
 catch(e){err(dir+'sida.js','passar inte ihop med data/gemensamt.js: '+e.message+'. Ändra motorn med tools/kurskod.js.');continue;}
 const data=D.data[c.id]||{};
 for(const k of (html.match(/@@DATA:(\w+)@@/g)||[]).map(x=>x.slice(7,-2)))if(data[k]===undefined)err(dir+'sida.js','behöver data "'+k+'" som ingen fil sätter');
 html=html.replace(/@@DATA:(\w+)@@/g,(_,k)=>JSON.stringify(data[k]??null));
 for(const m of html.matchAll(/<script id="([\w-]+)" type="application\/json">([\s\S]*?)<\/script>/g)){try{JSON.parse(m[2]);}catch(e){err(dir+'sida.js','datablocket '+m[1]+' är inte giltig JSON: '+e.message);}}
 checkCourse(c,data);
}

function dups(list){const s=new Set(),d=new Set();for(const x of list){if(s.has(x))d.add(x);s.add(x);}return [...d];}
function checkCourse(c,{cc,tr,os}){
 const U='data/terminer/'+c.id+'/uppslag.js',T='data/terminer/'+c.id+'/tentaradar.js',O='data/terminer/'+c.id+'/osce.js';
 if(!cc||!Array.isArray(cc.topics)){err(U,'saknar "topics"');return;}
 const specNames=new Set((cc.specs||[]).map(s=>s.name)),ccIds=new Set();
 for(const t of cc.topics){
  if(!t.id||!t.name)err(U,'ett uppslag saknar id eller namn ('+JSON.stringify(t).slice(0,60)+')');
  if(ccIds.has(t.id))err(U,'id "'+t.id+'" används två gånger');ccIds.add(t.id);
  if(!specNames.has(t.specialty))err(U,'"'+t.name+'" har specialiteten "'+t.specialty+'" som inte finns i specs');
 }
 for(const d of dups(cc.topics.map(t=>t.specialty+' › '+t.name.trim().toLowerCase())))warn(U,'två uppslag heter likadant: '+d);
 for(const t of cc.topics)for(const r of t.related||[]){const id=typeof r==='string'?r:r&&r.id;if(!ccIds.has(id))err(U,'"'+t.id+'" länkar till uppslaget "'+id+'" som inte finns');}
 // Antalen på startsidans kort
 const del=c.del,inDel=t=>!del||String(t.specialty).startsWith(del+'.'),specs=(cc.specs||[]).filter(s=>!del||String(s.id).startsWith('s'+del+'-'));
 if(c.headings!==cc.topics.filter(inDel).length)err('data/terminer.js ('+c.id+')','"headings" är '+c.headings+' men det finns '+cc.topics.filter(inDel).length+' uppslag');
 if(c.subjects!==specs.length)err('data/terminer.js ('+c.id+')','"subjects" är '+c.subjects+' men det finns '+specs.length+' specialiteter');
 const link=D.terminer.find(x=>x.link&&x.link.startsWith(c.id+'/')&&x.del);
 if(link){const n=cc.topics.filter(t=>String(t.specialty).startsWith(link.del+'.')).length,s=(cc.specs||[]).filter(x=>String(x.id).startsWith('s'+link.del+'-')).length;
  if(link.headings!==n)err('data/terminer.js ('+link.id+')','"headings" är '+link.headings+' men del '+link.del+' har '+n+' uppslag');
  if(link.subjects!==s)err('data/terminer.js ('+link.id+')','"subjects" är '+link.subjects+' men del '+link.del+' har '+s+' specialiteter');}
 for(const k of cc.kursmal||[]){const sp=(cc.specs||[]).find(s=>s.id===k.spec);if(!sp&&k.spec!=null&&!['course','info'].includes(k.spec))warn(U,'kursmålet "'+k.name+'" pekar på specialiteten "'+k.spec+'" som inte finns');}

 if(tr){
  const exams=(tr.meta&&tr.meta.exams)||[],examIds=new Set(exams.map(e=>e.exam)),trIds=new Set();
  if(tr.meta&&tr.meta.n_sessions_analyzed!==exams.length)err(T,'n_sessions_analyzed är '+tr.meta.n_sessions_analyzed+' men '+exams.length+' tentor är listade');
  for(const d of dups(exams.map(e=>e.exam)))err(T,'tentan "'+d+'" finns två gånger');
  for(const t of tr.topics||[]){
   if(trIds.has(t.id))err(T,'id "'+t.id+'" används två gånger');trIds.add(t.id);
   if(!['karnan','vanliga','enstaka'].includes(t.category))err(T,'"'+t.name+'" har okänd kategori "'+t.category+'"');
   if(!specNames.has(t.specialty))warn(T,'"'+t.name+'" har specialiteten "'+t.specialty+'" som inte finns i Uppslagsboken');
   for(const e of t.exams||[]){const k=typeof e==='string'?e:e&&(e.exam||e.e);if(k&&!examIds.has(k))err(T,'"'+t.id+'" hänvisar till tentan "'+k+'" som inte finns i meta.exams');}
   for(const r of t.xcc||[]){const id=typeof r==='string'?r:r&&r.id;if(!ccIds.has(id))err(T,'"'+t.id+'" länkar till uppslaget "'+id+'" som inte finns');}
  }
  for(const t of tr.topics||[])for(const r of t.related||[]){const id=typeof r==='string'?r:r&&r.id;if(!trIds.has(id))err(T,'"'+t.id+'" länkar till tentaämnet "'+id+'" som inte finns');}
  const hasTr=(c.modules||[]).some(m=>m.id==='tr');
  if(hasTr&&!(tr.topics||[]).length)err('data/terminer.js ('+c.id+')','har modulen Tentaradar men tentaradar.js är tom');
 }
 if(os){
  const exams=(os.meta&&os.meta.exams)||[],sess=new Set(exams.map(e=>e.exam)),osIds=new Set((os.topics||[]).map(t=>t.id)),x=os.x||{};
  if(os.meta&&os.meta.n_sessions_analyzed!==exams.length)err(O,'n_sessions_analyzed är '+os.meta.n_sessions_analyzed+' men '+exams.length+' tillfällen är listade');
  for(const d of dups((os.topics||[]).map(t=>t.id)))err(O,'id "'+d+'" används två gånger');
  for(const [k,s] of Object.entries(x.stations||{})){if(s.key!==k)err(O,'stationen "'+k+'" har key "'+s.key+'"');if(!sess.has(s.session))err(O,'stationen "'+k+'" hör till tillfället "'+s.session+'" som inte finns');}
  for(const t of os.topics||[])if(!(x.guides||{})[t.id]&&t.n_sessions>0)warn(O,'stationstypen "'+t.id+'" ('+t.n_sessions+' tillfällen) saknar guide');
  for(const g of Object.keys(x.guides||{}))if(!osIds.has(g))warn(O,'guiden "'+g+'" hör inte till någon stationstyp');
  for(const d of dups((x.checklists||[]).map(c=>c.id)))err(O,'checklistan "'+d+'" finns två gånger');
 }
}

// 3. Filer som sidan och service workern förutsätter
for(const m of read('index.html').matchAll(/(?:src|href)="([^"#:]+)"/g)){const f=m[1].replace(/^\//,'');if(f&&!exists(f))err('index.html','hänvisar till '+m[1]+' som inte finns');}
const sw=read('sw.js').match(/const SHELL=(\[[^\]]*\])/);
if(sw)for(const f of JSON.parse(sw[1].replace(/'/g,'"')))if(f!=='./'&&!exists(f))err('sw.js','grundfilen '+f+' finns inte');
try{const m=JSON.parse(read('manifest.webmanifest'));for(const i of m.icons||[])if(!exists(i.src))err('manifest.webmanifest','ikonen '+i.src+' finns inte');}catch(e){err('manifest.webmanifest','är inte giltig JSON: '+e.message);}

finish();
function finish(){
 for(const w of warnings)console.log('! '+w);
 for(const e of errors)console.log('✗ '+e);
 console.log(errors.length?'\n'+errors.length+' fel, '+warnings.length+' varningar. Rätta felen innan du publicerar.':'\nAllt ser bra ut ('+warnings.length+' varningar).');
 if(process.env.GITHUB_ACTIONS){for(const e of errors)console.log('::error::'+e);for(const w of warnings)console.log('::warning::'+w);}
 process.exit(errors.length?1:0);
}
