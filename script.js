/* Remissnissen – skalets funktioner: sökmotor, sökindex, inställningar och navigering. */
/* ===== Sökmotor ===== */
(function(root){
 'use strict';
 const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
 const stop=new Set(['vad','ar','hur','en','ett','och','eller','i','pa','av','det','den','de','jag','om','som','for','med','kan','ska','vilka','vilken']);
 const terms=q=>[...new Set(norm(q).split(' ').filter(x=>x&&!stop.has(x)))];
 function near(a,b){if(a.length<5||Math.abs(a.length-b.length)>1)return false;let i=0,j=0,n=0;while(i<a.length&&j<b.length){if(a[i]===b[j]){i++;j++;continue;}if(++n>1)return false;if(a.length>=b.length)i++;if(a.length<=b.length)j++;}return n+(a.length-i)+(b.length-j)<=1;}
 function prepare(rows){return rows.map(item=>({item,title:norm(item.title),aliases:norm(item.aliases),body:norm(item.text),meta:norm(item.specialty),words:[...new Set(norm(item.title+' '+item.aliases).split(' '))]}));}
 function search(index,q,{course='',kind=''}={}){
  const ts=terms(q);if(!ts.length)return [];const phrase=norm(q),out=[];
  for(const row of index){const {item}=row;if(course&&item.course!==course||kind&&item.kind!==kind)continue;let score=0,fuzzy=false,ok=true;
   for(const t of ts){if(row.title===t)score+=60;else if(row.title.split(' ').includes(t))score+=30;else if(row.title.includes(t))score+=18;else if(row.aliases.split(' ').includes(t))score+=26;else if(row.aliases.includes(t))score+=16;else if(row.meta.includes(t))score+=9;else if(row.body.includes(t))score+=3;else if(row.words.some(w=>near(t,w))){score+=2;fuzzy=true;}else{ok=false;break;}}
   if(ok){if(row.title===phrase)score+=100;else if(row.title.includes(phrase))score+=35;if(item.stub)score-=1;out.push({item,score,fuzzy});}
  }
  return out.sort((a,b)=>b.score-a.score||a.item.title.localeCompare(b.item.title,'sv'));
 }
 function excerpt(item,q){if(item.stub)return item.specialty||'Rubrik utan förklarande text.';const text=item.text||item.title;const ts=terms(q),n=norm(text);const pos=ts.map(t=>n.indexOf(t)).filter(x=>x>=0).sort((a,b)=>a-b)[0]||0;let start=Math.max(0,pos-65);if(start)start=text.lastIndexOf(' ',start)+1;return(start?'…':'')+text.slice(start,start+220).trim()+(text.length>start+220?'…':'');}
 const api={norm,terms,near,prepare,search,excerpt};if(typeof module!=='undefined')module.exports=api;else root.RemissnissenSearchEngine=api;
})(typeof window==='undefined'?globalThis:window);

/* ===== Sökindex (byggs från terminernas data) ===== */
(function(root){
 'use strict';
 // Builds the search records from the course pages' own data blocks, so the search can never drift from the content.
 const BLOCK=/<script id="(cc|tr|os|nom)-data" type="application\/json">([\s\S]*?)<\/script>/g;
 function expand(o){
  if(!o||!o.$dict)return o;const D=o.$dict;
  const x=v=>typeof v==='string'?(v.charCodeAt(0)===0xE000?D[parseInt(v.slice(1),36)]:v):Array.isArray(v)?(v.forEach((e,i)=>{v[i]=x(e);}),v):v&&typeof v==='object'?(Object.keys(v).forEach(k=>{v[k]=x(v[k]);}),v):v;
  return x(o.$data);
 }
 function strings(o,out=[]){
  if(typeof o==='string'){if(o.trim())out.push(o);}
  else if(Array.isArray(o))for(const v of o)strings(v,out);
  else if(o&&typeof o==='object')for(const v of Object.values(o))strings(v,out);
  return out;
 }
 const join=list=>[...new Set(list)].join(' ').replace(/\s+/g,' ').trim();
 const omit=(o,keys)=>Object.fromEntries(Object.entries(o||{}).filter(([k])=>!keys.includes(k)));
 const empty=o=>!o||(typeof o==='object'&&!Object.keys(o).length);
 function fromCourse(id,html){
  const db={},out=[];let m;BLOCK.lastIndex=0;
  while((m=BLOCK.exec(html)))try{db[m[1]]=expand(JSON.parse(m[2]));}catch{}
  const add=(kind,title,hash,text,aliases,specialty,stub)=>out.push({course:id,kind,title:String(title||''),hash,text:text||'',aliases:aliases||'',specialty:specialty||'',stub:!!stub});
  const cc=db.cc||{};
  for(const t of cc.topics||[]){
   const body=t.cc||{},card=t.card||{};
   const stub=empty(card)&&!Object.keys(body).some(k=>k!=='more'&&k!=='src');
   add('Uppslag',t.name,'#/cc/d/'+t.id,join(strings(body).concat(strings(card))),(t.synonyms||[]).join(' '),t.specialty,stub);
  }
  for(const s of cc.symptoms||[])add('Symtom',s.t,'#/cc/sym/'+s.id,join(strings(omit(s,['id']))),(s.syn||[]).join(' '),'',false);
  for(const k of cc.kursmal||[])add('Kursmål',k.name,'#/info',join(strings(omit(k,['id','spec']))),'',k.name,false);
  for(const t of (db.tr&&db.tr.topics)||[]){
   const text=join(strings(t.card||{}).concat(strings((t.examined||[]).map(e=>omit(e,['k'])))));
   add('Tentaradar',t.name,'#/tr/topic/'+t.id,text,(t.synonyms||[]).join(' '),t.specialty,!text);
  }
  const os=db.os,x=(os&&os.x)||{},guides=x.guides||{};
  for(const t of (os&&os.topics)||[]){
   const g=guides[t.id];
   const text=join(strings(t.card||{}).concat(strings(g?omit(g,['id']):{})));
   add('OSCE',t.name,'#/os/g/'+t.id,text,(t.synonyms||[]).join(' '),t.specialty,!text);
  }
  for(const s of Object.values(x.stations||{}))add('OSCE',s.title+' · '+s.session+' station '+s.stn,'#/os/s/'+String(s.key).replace('|','~'),join(strings(omit(s,['key']))),[s.topic,s.family].filter(Boolean).join(' '),s.spec,false);
  for(const c of x.checklists||[])add('OSCE',c.title,'#/os/check/'+c.id,join(strings(omit(c,['id']))),'','',false);
  for(const term of (db.nom&&db.nom.terms)||[])add('Nomenklatur',term,'#/nom',term,'','',false);
  return out;
 }
 function build(courses){return courses.flatMap(c=>fromCourse(c.id,c.html));}
 const api={build,fromCourse,expand};
 if(typeof module!=='undefined')module.exports=api;else root.RemissnissenSearchIndex=api;
})(typeof window==='undefined'?globalThis:window);

/* ===== Inställningar och sökdialog ===== */
/* Shared preferences and local search. This runs before any course is loaded. */
(()=>{
 'use strict';
 const $=s=>document.querySelector(s),KEY='remissnissen.settings.v2';
 const defaults={palette:'sorbet',theme:matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light',still:false,name:'',goal:10,walk:true,show:true,talk:true,inkShow:true};
 const legacyMap={'t8.palette':'palette','t8.theme':'theme','t8.still':'still','t8.name':'name','t8.goal':'goal','t8.nwalk':'walk','t8.ink.show':'inkShow','t8.ink.ui':'inkUI','da-hide':'show','da-quiet':'talk','da-still':'walk'};
 const canonical=k=>/^t(?:[1-9]|1[0-2])\.goal$/.test(k)?'goal':legacyMap[k];
 let prefs={...defaults},saveFailed=false;
 try{
  const previous=JSON.parse(localStorage.getItem(KEY)||'null');
  if(previous&&typeof previous==='object'&&!Array.isArray(previous))Object.assign(prefs,previous);
  else for(const [key,field]of Object.entries(legacyMap)){
   const raw=localStorage.getItem('remissnissen.courses.v1:t8:'+key)??localStorage.getItem(key);
   if(raw!==null)try{prefs[field]=key.startsWith('da-')?raw!=='1':JSON.parse(raw);}catch{}
  }
 }catch{saveFailed=true;}
 function validate(p){
  p={...defaults,...p};
  if(!['sorbet','tropisk','konfetti','lugn'].includes(p.palette))p.palette='sorbet';
  if(!['light','dark'].includes(p.theme))p.theme=defaults.theme;
  p.name=String(p.name||'').slice(0,24);p.goal=[5,10,15,20].includes(+p.goal)?+p.goal:10;
  for(const k of ['still','walk','show','talk','inkShow'])p[k]=typeof p[k]==='boolean'?p[k]:defaults[k];
  if(!p.inkUI||typeof p.inkUI!=='object'||Array.isArray(p.inkUI))delete p.inkUI;
  return p;
 }
 prefs=validate(prefs);
 function paint(){const r=document.documentElement;r.style.cssText='';r.setAttribute('data-theme',prefs.theme);if(prefs.palette==='lugn')r.removeAttribute('data-palette');else r.setAttribute('data-palette',prefs.palette);r.toggleAttribute('data-still',prefs.still);}
 function save(){try{localStorage.setItem(KEY,JSON.stringify(prefs));saveFailed=false;}catch{saveFailed=true;}const n=$('#storageNotice');if(n)n.hidden=!saveFailed;}
 let notifyQueued=false;
 function update(patch){const next=validate({...prefs,...patch});if(JSON.stringify(next)===JSON.stringify(prefs))return;prefs=next;paint();save();syncControls();if(!notifyQueued){notifyQueued=true;queueMicrotask(()=>{notifyQueued=false;window.dispatchEvent(new CustomEvent('hub:settings',{detail:{...prefs}}));});}}
 window.HubSettings={snapshot:()=>({...prefs}),update,has:k=>!!canonical(k),
  getRaw(k){const c=canonical(k);if(!c)return null;if(k==='da-still')return prefs.still||!prefs.walk?'1':'0';if(k==='da-hide')return prefs.show?'0':'1';if(k==='da-quiet')return prefs.talk?'0':'1';return prefs[c]===undefined?null:JSON.stringify(prefs[c]);},
  setRaw(k,v){const c=canonical(k);if(!c)return;try{update({[c]:k.startsWith('da-')?String(v)!=='1':JSON.parse(v)});}catch{}},
  storageError(){saveFailed=true;const n=$('#storageNotice');if(n)n.hidden=false;}
 };
 paint();
 const settings=$('#globalSettings'),search=$('#globalSearch');
 let returnFocus=null;
 function openDialog(el){if(el.open)return;returnFocus=document.activeElement;el.showModal();}
 for(const el of [settings,search]){
  el.querySelector('[data-dialog-close]').addEventListener('click',()=>el.close());
  el.addEventListener('click',e=>{if(e.target===el){const r=el.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)el.close();}});
  el.addEventListener('close',()=>{if(returnFocus?.isConnected)returnFocus.focus();});
 }
 function syncControls(){for(const input of settings.querySelectorAll('[data-pref]')){const k=input.dataset.pref;if(input.type==='checkbox')input.checked=!!prefs[k];else input.value=prefs[k];}$('#pref-walk').disabled=prefs.still;}
 settings.addEventListener('change',e=>{const input=e.target.closest('[data-pref]');if(input)update({[input.dataset.pref]:input.type==='checkbox'?input.checked:input.value});});
 $('#pref-name').addEventListener('input',e=>update({name:e.target.value}));
 $('#globalFullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{$('#settingsFeedback').textContent='Helskärm stöds inte här. Prova i en egen webbläsarflik.';}});
 document.addEventListener('fullscreenchange',()=>{$('#globalFullscreen').textContent=document.fullscreenElement?'Avsluta helskärm':'Visa i helskärm';});
 $('#hubSettings').addEventListener('click',()=>{syncControls();$('#storageNotice').hidden=!saveFailed;openDialog(settings);});
 syncControls();
 // The search is text retrieval only: excerpts come from the included material.
 // The index is built from the course data the first time the search is opened.
 const engine=window.RemissnissenSearchEngine;let records=null,index=null,lastResults=[],limit=40,timer=0;
 function ensureIndex(){if(index)return;records=window.RemissnissenSearchIndex.build(window.HubCourses());index=engine.prepare(records);}
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function renderResults(){
  $('#searchCount').textContent=lastResults.length?lastResults.length+' träffar'+(lastResults.some(x=>x.fuzzy)?' · ungefärliga träffar ingår':''):'Inga träffar. Prova ett kortare sökord eller välj alla terminer.';
  $('#searchResults').innerHTML=lastResults.slice(0,limit).map(({item,fuzzy})=>'<li><a href="'+escape('#/'+item.course+item.hash.slice(1))+'" data-search-route="'+escape('#/'+item.course+item.hash.slice(1))+'"><span class="result-meta">'+escape((item.course==='t3b'?'Termin 3 · Attack och försvar':item.course==='t3'?'Termin 3 · OSoF':'Termin '+item.course.slice(1))+' · '+item.kind+(item.specialty?' · '+item.specialty:''))+(fuzzy?' · liknande stavning':'')+'</span><b>'+escape(item.title)+'</b><p>'+escape(engine.excerpt(item,$('#searchInput').value))+'</p>'+(item.stub?'<small class="result-warning">Endast rubrik finns i originalmaterialet.</small>':'')+'</a></li>').join('');
  $('#searchMore').hidden=lastResults.length<=limit;
 }
 function run(){clearTimeout(timer);if(!index){$('#searchCount').textContent='Förbereder sökningen …';timer=setTimeout(()=>{ensureIndex();run();},30);return;}const query=$('#searchInput').value.trim();if(!query){$('#searchCount').textContent='Sök i '+records.length+' poster från alla terminer.';$('#searchResults').innerHTML='';$('#searchMore').hidden=true;return;}limit=40;lastResults=engine.search(index,query,{course:$('#searchCourse').value,kind:$('#searchKind').value});renderResults();}
 $('#searchInput').addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(run,120);});
 for(const id of ['searchCourse','searchKind'])$('#'+id).addEventListener('change',run);
 $('#searchForm').addEventListener('submit',e=>{e.preventDefault();run();});
 $('#searchMore').addEventListener('click',()=>{limit+=40;renderResults();});
 $('#searchResults').addEventListener('click',e=>{const a=e.target.closest('[data-search-route]');if(!a)return;e.preventDefault();search.close();window.HubNavigate(a.dataset.searchRoute);});
 function openSearch(query){openDialog(search);if(typeof query==='string')$('#searchInput').value=query;run();$('#searchInput').focus();}
 window.HubOpenSearch=openSearch;
 $('#hubAsk').addEventListener('click',()=>openSearch());
 window.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(settings.open)settings.close();openSearch();}});
})();

/* ===== Navigering och kursramar ===== */
(()=>{
 'use strict';
 const DATA=window.REMISSNISSEN,IMG=new URL('images/',location.href).href;
 // Terminernas innehåll ligger i data/terminer/<id>/; listan och ordningen i data/terminer.js.
 const allCourses=DATA.terminer.map(c=>c.link?c:{...c,html:DATA.html[c.id]}),courses=allCourses.filter(c=>!c.link),links=Object.fromEntries(allCourses.filter(c=>c.link).map(c=>[c.id,c])),bridge=DATA.bridge;
 // Gemensam motor, CSS och nisse finns en gång; varje termin lagrar bara sina skillnader.
 const SHARED=DATA.shared;
 const applyDelta=(base,ops)=>{const b=base.split('\n'),out=[];let i=0;for(const o of ops){if(o[0]==='='){for(let k=0;k<o[1];k++)out.push(b[i++]);}else if(o[0]==='-')i+=o[1];else for(const l of o[1])out.push(l);}return out.join('\n');};
 const expandShared=html=>html.replace(/@@SHARED:(css|core|da):(\[[\s\S]*?\])@@/g,(_,k,o)=>applyDelta(SHARED[k],JSON.parse(o)));
 // Uppslag, tentaradar och OSCE ligger i egna filer och fogas in i kurssidan först när den behövs.
 const fillData=(id,html)=>html.replace(/@@DATA:(cc|tr|os)@@/g,(_,k)=>JSON.stringify(DATA.data[id][k]).replace(/</g,'\\u003c'));
 for(const c of courses){const raw=c.html;let built=null;Object.defineProperty(c,'html',{enumerable:true,get(){return built??=fillData(c.id,expandShared(raw));}});}
 window.HubCourses=()=>courses;
 const byId=Object.fromEntries(courses.map(c=>[c.id,c])),frames=new Map(),STORE='remissnissen.hub.v1';
 let saved={};try{saved=JSON.parse(localStorage.getItem(STORE)||'{}');}catch{}
 if(!saved||typeof saved!=='object'||Array.isArray(saved))saved={};
 saved.courses=saved.courses&&typeof saved.courses==='object'&&!Array.isArray(saved.courses)?saved.courses:{};
 const persist=()=>{try{localStorage.setItem(STORE,JSON.stringify(saved));}catch{}};
 const $=s=>document.querySelector(s);
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const safePath=p=>typeof p==='string'&&p.startsWith('#/')?p:'#/';
 let active=null,pendingAction=null;
 const requested=new Map();
 const ready=new Set();
 const frameLayout=`<style id="shared-frame-layout">
 :root{--hdr:52px!important}
 header.top{display:flex!important;height:52px!important;min-height:52px;position:sticky;top:0;padding:0 18px;gap:8px;flex-wrap:nowrap!important;background:var(--bg);border-bottom:1px solid var(--line);overflow:visible!important;z-index:80}
 header.top>.brand,header.top #setBtn{display:none!important}
 header.top nav.areas{display:flex!important;align-items:center;flex:1;min-width:0;gap:2px;order:initial;width:auto;margin:0;padding:0;overflow-x:auto;scrollbar-width:none}
 header.top nav.areas a{display:inline-flex;flex:none;padding:8px 12px;white-space:nowrap}
 header.top nav.areas a .l{display:inline!important}header.top nav.areas a .s{display:none!important}
 @media(max-width:980px){header.top nav.areas a .l{display:none!important}header.top nav.areas a .s{display:inline!important}}
 header.top nav.areas a[aria-current="page"]::after{bottom:0;height:3px}
 header.top .hbtns{flex:none;margin-left:auto;gap:6px}
 header.top #da-tools .da-tl{max-width:calc(100vw - 70px)}
 .shell{min-height:calc(100dvh - 52px)!important}
 nav.side{top:52px!important;height:calc(100dvh - 52px)!important}nav.mob{top:52px!important}
 #setMenu{position:fixed!important;top:10px!important;right:16px!important;left:auto!important;z-index:150!important;max-height:calc(100dvh - 24px)!important;max-width:calc(100vw - 32px)!important;overflow-y:auto!important}
 @media(max-width:640px){header.top{padding:0 8px}header.top nav.areas a{padding:8px 10px}}
 @media print{header.top{display:none!important}}
 </style>`;
 function parseRoute(hash){const m=String(hash||'').match(/^#\/(t(?:1[0-2]|[1-9])b?)(?:\/(.*))?$/);if(m&&!byId[m[1]]&&links[m[1]])return parseRoute('#/'+links[m[1]].link);if(!m||!byId[m[1]])return null;return {id:m[1],hash:m[2]===undefined?safePath(saved.courses[m[1]]?.hash):'#/'+m[2]};}
 function hubHash(id,hash){return '#/'+id+(safePath(hash)==='#/'?'':'/'+safePath(hash).slice(2));}
 function sourceFor(course,hash){
  const settings=JSON.stringify({id:course.id,hash:safePath(hash),preferences:HubSettings.snapshot()}).replaceAll('<','\\u003c');
  const injection='<base href="about:srcdoc"><script>window.__REMISSNISSEN_COURSE__='+settings+';'+bridge+'</'+'script>';
  return course.html.replaceAll('{{BILDER}}',IMG)
   .replace(/^(?:const fsOK=|const isFs=|function toggleFs\(\))[^\n]*/gm,line=>line.replace(/\bdocument\b/g,'window.parent.document'))
   .replace(/(\['fullscreenchange','webkitfullscreenchange'\]\.forEach\(ev=>)document\.addEventListener/g,'$1window.parent.document.addEventListener')
   .replace(/<head\b[^>]*>/i,m=>m+injection).replace(/<\/head>/i,frameLayout+'</head>');
 }
 function updateResume(){const resume=$('#resume');resume.hidden=!byId[saved.last];if(!resume.hidden){resume.href=hubHash(saved.last,saved.courses[saved.last]?.hash);resume.textContent='Fortsätt i '+byId[saved.last].term+(byId[saved.last].short?' · '+byId[saved.last].short:'')+' →';}}
 function showOverview(){
  pendingAction=null;updateResume();
  $('#hubHeader').hidden=false;
  
  active=null;$('#overview').hidden=false;$('#workspace').hidden=true;$('#hubStatus').textContent='Alla terminer';document.title='Remissnissen · Termin 1–12';
  for(const frame of frames.values())frame.hidden=true;
  $('#overviewLink').setAttribute('aria-current','page');
 }
 function route(){
  const r=parseRoute(location.hash);if(!r){showOverview();return;}
  $('#hubHeader').hidden=false;
  const c=byId[r.id];if(active!==c.id)pendingAction=null;active=c.id;requested.set(c.id,r.hash);$('#overview').hidden=true;$('#workspace').hidden=false;$('#hubStatus').textContent=c.term+' · '+c.title;document.title='Remissnissen · '+c.term;
  $('#overviewLink').removeAttribute('aria-current');
  let frame=frames.get(c.id);
  if(!frame){frame=document.createElement('iframe');frame.className='course-frame';frame.title='Remissnissen '+c.term;frame.name='remissnissen-'+c.id;frames.set(c.id,frame);$('#workspace').appendChild(frame);frame.srcdoc=sourceFor(c,r.hash);}
  else if(ready.has(c.id))frame.contentWindow.postMessage({app:'remissnissen-hub-v1',kind:'navigate',id:c.id,hash:r.hash},'*');
  for(const [id,item]of frames)item.hidden=id!==active;
  saved.courses[c.id]={...saved.courses[c.id],hash:r.hash};saved.last=c.id;persist();
  
 }
 window.addEventListener('message',e=>{
  const msg=e.data;if(!msg||msg.app!=='remissnissen-hub-v1'||!byId[msg.id])return;
  const frame=frames.get(msg.id);if(!frame||e.source!==frame.contentWindow)return;
  if(msg.kind==='switch'){
   if(msg.target==='overview')location.hash='#/';
   else if(byId[msg.target])location.hash=msg.hash?hubHash(msg.target,msg.hash):'#/'+msg.target;
   return;
  }
  const state=saved.courses[msg.id]??={};
  if(msg.kind==='route'||msg.kind==='ready'){
   if(msg.kind==='ready'){
    ready.add(msg.id);
    const wanted=requested.get(msg.id);
    if(wanted&&wanted!==safePath(msg.hash)){
     frame.contentWindow.postMessage({app:'remissnissen-hub-v1',id:msg.id,kind:'navigate',hash:wanted},'*');
     return;
    }
   }
   if(msg.kind==='route'&&!ready.has(msg.id))return;
   if(pendingAction&&active===msg.id&&ready.has(msg.id)){
    frame.contentWindow.postMessage({app:'remissnissen-hub-v1',id:msg.id,kind:'action',action:pendingAction},'*');pendingAction=null;
   }
   state.hash=safePath(msg.hash);persist();
   if(active===msg.id){const next=hubHash(msg.id,state.hash);if(location.hash!==next)history.replaceState(null,'',next);}
  }
  if(msg.kind==='search')window.HubOpenSearch(msg.query);
  if(msg.kind==='settings-open')document.getElementById('hubSettings').click();
  if(msg.kind==='storage-error')HubSettings.storageError();
  if(msg.kind==='title'&&active===msg.id&&typeof msg.title==='string')document.title='Remissnissen · '+byId[msg.id].term+' · '+msg.title.replace(/\s*[–-]\s*(?:Remissnissen )?(?:Termin |T)(?:[1-9]|1[0-2])(?: · [^–]+)?\s*$/,'');
 });
 $('#courseGrid').innerHTML=(()=>{const card=(c,half)=>{const en=c.lang==='en';return '<a class="acard'+(half?' half':'')+'" href="#/'+(c.link||c.id)+'"'+(en?' lang="en"':'')+'><span class="aic">'+c.term+'</span><b>'+esc(c.title)+'</b><span>'+c.subjects+(en?' subjects · ':' ämnesområden · ')+c.headings+(en?' cards':' uppslag')+'</span><span class="alinks"><span>'+(en?'Open ':'Öppna ')+esc(c.short||c.term)+'</span><span aria-hidden="true">→</span></span></a>';};const out=[],seen=new Set();for(const c of allCourses){if(seen.has(c.term))continue;seen.add(c.term);const g=allCourses.filter(x=>x.term===c.term);out.push(g.length>1?'<div class="acard-pair" role="group" aria-label="'+esc(c.term)+'">'+g.map(x=>card(x,true)).join('')+'</div>':card(c,false));}return out.join('');})();
 if(saved.last&&byId[saved.last]){const resume=$('#resume');resume.hidden=false;resume.href='#/'+saved.last;resume.textContent='Fortsätt i '+byId[saved.last].term+(byId[saved.last].short?' · '+byId[saved.last].short:'')+' →';}
 $('.skip').addEventListener('click',e=>{e.preventDefault();if(active){frames.get(active)?.focus();frames.get(active)?.contentWindow.focus();}else $('#courseGrid').focus();});
 $('.skip').textContent='Hoppa till innehållet';
 
 
 
 window.HubNavigate=hash=>{if(location.hash===hash)route();else location.hash=hash;};
 window.addEventListener('hub:settings',e=>{for(const [id,frame]of frames)frame.contentWindow.postMessage({app:'remissnissen-hub-v1',id,kind:'settings',preferences:e.detail},'*');});
 window.addEventListener('hashchange',route);route();
})();

// Felrapport: öppnar besökarens e-postprogram med ett färdigt mejl.
(()=>{
 const TO='mohammadtayeb570@gmail.com';
 const dlg=document.getElementById('globalReport'),form=document.getElementById('reportForm');
 if(!dlg||!form)return;
 const where=document.getElementById('reportWhere'),text=document.getElementById('reportText'),type=document.getElementById('reportType'),fb=document.getElementById('reportFeedback');
 let returnFocus=null;
 const place=()=>{const parts=((document.getElementById('hubStatus')?.textContent||'')+' · '+document.title).split(' · ').map(x=>x.trim()).filter(x=>x&&x!=='Remissnissen'&&x!=='Alla terminer');return [...new Set(parts)].join(' · ');};
 const body=()=>'Typ: '+type.value+'\nVar: '+(where.value.trim()||'(ej angivet)')+'\nAdress: '+location.href+'\n\nBeskrivning:\n'+text.value.trim()+'\n\n— Skickat från Remissnissen ('+new Date().toLocaleString('sv-SE')+')';
 document.getElementById('hubReport').addEventListener('click',()=>{if(dlg.open)return;returnFocus=document.activeElement;fb.textContent='';where.value=place();dlg.showModal();text.focus();});
 dlg.querySelector('[data-dialog-close]').addEventListener('click',()=>dlg.close());
 dlg.addEventListener('click',e=>{if(e.target===dlg){const r=dlg.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dlg.close();}});
 dlg.addEventListener('close',()=>{if(returnFocus?.isConnected)returnFocus.focus();});
 form.addEventListener('submit',e=>{
  e.preventDefault();
  if(!text.value.trim()){fb.textContent='Skriv en kort beskrivning av felet först.';text.focus();return;}
  const subject='Remissnissen – '+type.value+(where.value.trim()?': '+where.value.trim():'');
  location.href='mailto:'+TO+'?subject='+encodeURIComponent(subject.slice(0,150))+'&body='+encodeURIComponent(body());
  fb.textContent='Ditt e-postprogram öppnas. Öppnas inget? Tryck på "Kopiera texten" och mejla till '+TO+'.';
 });
 document.getElementById('reportCopy').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText('Till: '+TO+'\n'+body());fb.textContent='Texten är kopierad. Klistra in den i ett mejl till '+TO+'.';}
  catch{fb.textContent='Det gick inte att kopiera. Mejla gärna direkt till '+TO+'.';}
 });
})();
