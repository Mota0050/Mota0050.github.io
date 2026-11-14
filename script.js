/* Remissnissen – skalets funktioner: laddning av terminer, sökmotor, sökindex, inställningar, navigering och felrapport. */
/* Inloggningen (auth.js) löser RN_AUTH_READY när användaren är inloggad. Inget kursmaterial laddas före det. */
window.RN_AUTH_READY=window.RN_AUTH_READY||new Promise(r=>{window.RN_AUTH_RESOLVE=r;});

/* ===== Laddning av terminer vid behov ===== */
(function(root){
 'use strict';
 const DATA=root.REMISSNISSEN;
 const pending=new Map();
 function loadScript(src){
  return new Promise((resolve,reject)=>{
   const s=document.createElement('script');s.src=src;s.async=false;
   s.onload=()=>resolve();s.onerror=()=>{s.remove();reject(new Error('Kunde inte ladda '+src));};
   document.body.appendChild(s);
  });
 }
 function once(key,fn){
  if(!pending.has(key)){const p=fn();pending.set(key,p);p.catch(()=>pending.delete(key));}
  return pending.get(key);
 }
 const meta=id=>DATA.terminer.find(c=>c.id===id&&!c.link);
 function filesFor(c){const f=['sida','uppslag','tentaradar'];if((c.modules||[]).some(m=>m.id==='os'))f.push('osce');return f.map(x=>'data/terminer/'+c.id+'/'+x+'.js');}
 const loadShared=()=>once('shared',()=>root.RN_AUTH_READY.then(()=>loadScript('data/gemensamt.js')));
 // Filerna läggs in i ordning (async=false), så sida.js körs före uppslag/tentaradar/osce.
 const loadCourse=id=>once(id,()=>loadShared().then(()=>Promise.all(filesFor(meta(id)).map(loadScript))).then(()=>{if(!DATA.html[id])throw new Error('Termin '+id+' saknar innehåll');}));
 const isLoaded=id=>!!(DATA.html[id]&&DATA.shared);
 root.RemissnissenLoader={loadCourse,isLoaded,meta};
})(window);

/* ===== Sökmotor ===== */
(function(root){
 'use strict';
 const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
 const stop=new Set(['vad','ar','hur','en','ett','och','eller','i','pa','av','det','den','de','jag','om','som','for','med','kan','ska','vilka','vilken']);
 const terms=q=>[...new Set(norm(q).split(' ').filter(x=>x&&!stop.has(x)))];
 // Tar bort sidans egen märkning (**fet**, [[id|länk]]) så att den inte syns i utdragen.
 const clean=s=>String(s||'').replace(/\*\*(.+?)\*\*/g,'$1').replace(/\[\[[^|\]]+\|([^\]]+)\]\]/g,'$1');
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
 // Normaliserar och minns var varje tecken kom ifrån, så att utdraget klipps runt rätt ord.
 function normMap(text){let n='',map=[];for(let i=0;i<text.length;i++){const d=text[i].toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');for(const ch of d){if(/[a-z0-9]/.test(ch)){n+=ch;map.push(i);}else if(n&&n[n.length-1]!==' '){n+=' ';map.push(i);}}}return {n,map};}
 function excerpt(item,q){
  if(item.stub)return item.specialty||'Rubrik utan förklarande text.';
  const text=clean(item.text||item.title),{n,map}=normMap(text);
  const hits=terms(q).map(t=>n.indexOf(t)).filter(x=>x>=0).sort((a,b)=>a-b);
  const pos=hits.length?map[hits[0]]:0;
  let start=Math.max(0,pos-65);if(start)start=text.lastIndexOf(' ',start)+1;
  return(start?'…':'')+text.slice(start,start+220).trim()+(text.length>start+220?'…':'');
 }
 const api={norm,terms,near,prepare,search,excerpt,clean,normMap};if(typeof module!=='undefined')module.exports=api;else root.RemissnissenSearchEngine=api;
})(typeof window==='undefined'?globalThis:window);

/* ===== Sökindex (byggs direkt ur terminernas data) ===== */
(function(root){
 'use strict';
 const NOM=/<script id="nom-data" type="application\/json">([\s\S]*?)<\/script>/;
 function strings(o,out=[]){
  if(typeof o==='string'){if(o.trim())out.push(o);}
  else if(Array.isArray(o))for(const v of o)strings(v,out);
  else if(o&&typeof o==='object')for(const v of Object.values(o))strings(v,out);
  return out;
 }
 const clean=s=>String(s||'').replace(/\*\*(.+?)\*\*/g,'$1').replace(/\[\[[^|\]]+\|([^\]]+)\]\]/g,'$1');
 const join=list=>clean([...new Set(list)].join(' ')).replace(/\s+/g,' ').trim();
 const omit=(o,keys)=>Object.fromEntries(Object.entries(o||{}).filter(([k])=>!keys.includes(k)));
 const empty=o=>!o||(typeof o==='object'&&!Object.keys(o).length);
 // id: terminens id, data: REMISSNISSEN.data[id], raw: kurssidans html (bara för nomenklaturen)
 function fromCourse(id,data,raw){
  const out=[];
  const add=(kind,title,hash,text,aliases,specialty,stub)=>out.push({course:id,kind,title:clean(title),hash,text:text||'',aliases:aliases||'',specialty:specialty||'',stub:!!stub});
  const cc=(data&&data.cc)||{};
  for(const t of cc.topics||[]){
   const body=t.cc||{},card=t.card||{};
   const stub=empty(card)&&!Object.keys(body).some(k=>k!=='more'&&k!=='src');
   add('Uppslag',t.name,'#/cc/d/'+t.id,join(strings(body).concat(strings(card))),(t.synonyms||[]).join(' '),t.specialty,stub);
  }
  for(const s of cc.symptoms||[])add('Symtom',s.t,'#/cc/sym/'+s.id,join(strings(omit(s,['id']))),(s.syn||[]).join(' '),'',false);
  for(const k of cc.kursmal||[])add('Kursmål',k.name,'#/info',join(strings(omit(k,['id','spec','src']))),'',k.name,false);
  for(const t of (data&&data.tr&&data.tr.topics)||[]){
   const text=join(strings(t.card||{}).concat(strings((t.examined||[]).map(e=>omit(e,['k'])))));
   add('Tentaradar',t.name,'#/tr/topic/'+t.id,text,(t.synonyms||[]).join(' '),t.specialty,!text);
  }
  const os=data&&data.os,x=(os&&os.x)||{},guides=x.guides||{};
  for(const t of (os&&os.topics)||[]){
   const g=guides[t.id];
   const text=join(strings(t.card||{}).concat(strings(g?omit(g,['id','rub']):{})));
   add('OSCE',t.name,'#/os/g/'+t.id,text,(t.synonyms||[]).join(' '),t.specialty,!text);
  }
  for(const s of Object.values(x.stations||{}))add('OSCE',s.title+' · '+s.session+' station '+s.stn,'#/os/s/'+String(s.key).replace('|','~'),join(strings(omit(s,['key','source','page','comp']))),[s.topic,s.family].filter(Boolean).join(' '),s.spec,false);
  for(const c of x.checklists||[])add('OSCE',c.title,'#/os/check/'+c.id,join(strings(omit(c,['id']))),'','',false);
  const nm=raw&&raw.match(NOM);if(nm)try{for(const term of JSON.parse(nm[1]).terms||[])add('Nomenklatur',term,'#/nom',term,'','',false);}catch{}
  return out;
 }
 const api={fromCourse};
 if(typeof module!=='undefined')module.exports=api;else root.RemissnissenSearchIndex=api;
})(typeof window==='undefined'?globalThis:window);

/* ===== Inställningar och sökdialog ===== */
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
  storageError(){saveFailed=true;const n=$('#storageNotice');if(n)n.hidden=false;},
  // anropas av auth.js när progress från en annan enhet har hämtats
  reloadFromStorage(){try{const p=JSON.parse(localStorage.getItem(KEY)||'null');if(p&&typeof p==='object'){prefs=validate(p);paint();syncControls();}}catch{}}
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

 // Sökningen hämtar text ur sidans eget material. Varje termin indexeras först när den behövs.
 const engine=window.RemissnissenSearchEngine,loader=window.RemissnissenLoader,DATA=window.REMISSNISSEN;
 const courses=DATA.terminer.filter(c=>!c.link);
 const indexes=new Map();let lastResults=[],limit=40,timer=0,runId=0;
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function indexFor(id){if(!indexes.has(id)){const recs=window.RemissnissenSearchIndex.fromCourse(id,DATA.data[id],DATA.html[id]);indexes.set(id,engine.prepare(recs));}return indexes.get(id);}
 // Terminsväljaren byggs ur terminslistan, så en ny termin syns automatiskt.
 const sel=$('#searchCourse');
 const label=c=>c.term+(courses.filter(x=>x.term===c.term).length>1&&c.short?' · '+c.short:'');
 sel.innerHTML='<option value="">Alla terminer</option>'+courses.map(c=>'<option value="'+escape(c.id)+'">'+escape(label(c))+'</option>').join('');
 const t3=DATA.terminer.find(c=>c.link&&c.del);
 function courseLabel(item){
  const c=courses.find(x=>x.id===item.course);if(!c)return item.course;
  if(c.del&&t3&&/^2\./.test(item.specialty))return t3.term+' · '+(t3.short||t3.title);
  return label(c);
 }
 function renderResults(){
  $('#searchCount').textContent=lastResults.length?lastResults.length+' träffar'+(lastResults.some(x=>x.fuzzy)?' · ungefärliga träffar ingår':''):'Inga träffar. Prova ett kortare sökord eller välj alla terminer.';
  $('#searchResults').innerHTML=lastResults.slice(0,limit).map(({item,fuzzy})=>{const route='#/'+item.course+item.hash.slice(1);return '<li><a href="'+escape(route)+'" data-search-route="'+escape(route)+'"><span class="result-meta">'+escape(courseLabel(item)+' · '+item.kind+(item.specialty?' · '+item.specialty:''))+(fuzzy?' · liknande stavning':'')+'</span><b>'+escape(item.title)+'</b><p>'+escape(engine.excerpt(item,$('#searchInput').value))+'</p>'+(item.stub?'<small class="result-warning">Endast rubrik finns i originalmaterialet.</small>':'')+'</a></li>';}).join('');
  $('#searchMore').hidden=lastResults.length<=limit;
 }
 async function run(){
  clearTimeout(timer);const my=++runId;
  const course=sel.value,ids=course?[course]:courses.map(c=>c.id);
  const missing=ids.filter(id=>!loader.isLoaded(id));
  if(missing.length){
   let done=ids.length-missing.length;
   $('#searchCount').textContent='Laddar material … '+done+' av '+ids.length+' terminer';
   try{await Promise.all(missing.map(id=>loader.loadCourse(id).then(()=>{done++;if(my===runId)$('#searchCount').textContent='Laddar material … '+done+' av '+ids.length+' terminer';})));}
   catch{if(my===runId)$('#searchCount').textContent='Materialet kunde inte laddas. Kontrollera din internetanslutning och försök igen.';return;}
   if(my!==runId)return;
  }
  const query=$('#searchInput').value.trim();
  const index=ids.flatMap(indexFor);
  if(!query){$('#searchCount').textContent='Sök i '+index.length+' poster'+(course?' från '+label(courses.find(c=>c.id===course))+'.':' från alla terminer.');$('#searchResults').innerHTML='';$('#searchMore').hidden=true;return;}
  limit=40;lastResults=engine.search(index,query,{kind:$('#searchKind').value});renderResults();
 }
 $('#searchInput').addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(run,120);});
 for(const id of ['searchCourse','searchKind'])$('#'+id).addEventListener('change',run);
 $('#searchForm').addEventListener('submit',e=>{e.preventDefault();run();});
 $('#searchMore').addEventListener('click',()=>{limit+=40;renderResults();});
 $('#searchResults').addEventListener('click',e=>{const a=e.target.closest('[data-search-route]');if(!a)return;e.preventDefault();search.close();window.HubNavigate(a.dataset.searchRoute);});
 let lastActive=null;
 function openSearch(query){
  // Står man i en termin söker man i den först; "Alla terminer" laddar resten.
  const active=window.HubActiveCourse?.()||'';
  if(active!==lastActive){sel.value=active;lastActive=active;}
  openDialog(search);if(typeof query==='string')$('#searchInput').value=query;run();$('#searchInput').focus();
 }
 window.HubOpenSearch=openSearch;
 $('#hubAsk').addEventListener('click',()=>openSearch());
 window.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(settings.open)settings.close();openSearch();}});
})();

/* ===== Navigering och kursramar ===== */
(()=>{
 'use strict';
 const DATA=window.REMISSNISSEN,IMG=new URL('images/',location.href).href,loader=window.RemissnissenLoader;
 // Terminslistan och ordningen finns i data/terminer.js; innehållet laddas från data/terminer/<id>/ först när terminen öppnas.
 const allCourses=DATA.terminer,courses=allCourses.filter(c=>!c.link),links=Object.fromEntries(allCourses.filter(c=>c.link).map(c=>[c.id,c]));
 // Gemensam motor, CSS och nisse finns en gång i data/gemensamt.js; varje termin lagrar bara sina skillnader.
 const applyDelta=(base,ops)=>{const b=base.split('\n'),out=[];let i=0;for(const o of ops){if(o[0]==='='){for(let k=0;k<o[1];k++)out.push(b[i++]);}else if(o[0]==='-')i+=o[1];else for(const l of o[1])out.push(l);}return out.join('\n');};
 const expandShared=html=>html.replace(/@@SHARED:(css|core|da):(\[[\s\S]*?\])@@/g,(_,k,o)=>applyDelta(DATA.shared[k],JSON.parse(o)));
 // Uppslag, tentaradar och OSCE ligger i egna filer och fogas in i kurssidan först när den byggs.
 const fillData=(id,html)=>html.replace(/@@DATA:(cc|tr|os)@@/g,(_,k)=>JSON.stringify(DATA.data[id][k]??null).replace(/</g,'\\u003c'));
 const built=new Map();
 const courseHtml=c=>{if(!built.has(c.id))built.set(c.id,fillData(c.id,expandShared(DATA.html[c.id])));return built.get(c.id);};
 const byId=Object.fromEntries(courses.map(c=>[c.id,c])),frames=new Map(),STORE='remissnissen.hub.v1';
 let saved={};try{saved=JSON.parse(localStorage.getItem(STORE)||'{}');}catch{}
 if(!saved||typeof saved!=='object'||Array.isArray(saved))saved={};
 saved.courses=saved.courses&&typeof saved.courses==='object'&&!Array.isArray(saved.courses)?saved.courses:{};
 const persist=()=>{try{localStorage.setItem(STORE,JSON.stringify(saved));}catch{}};
 const $=s=>document.querySelector(s);
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const safePath=p=>typeof p==='string'&&p.startsWith('#/')?p:'#/';
 let active=null;
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
 :focus-visible{outline:3px solid var(--accent)!important;outline-offset:2px}
 @media(max-width:640px){header.top{padding:0 8px}header.top nav.areas a{padding:8px 10px}
  .hero .lead,.hero h1{position:relative;z-index:3}
  .hero .heroacts{position:relative;z-index:3}}
 @media print{header.top{display:none!important}}
 @media(max-width:640px){header.top,nav.mob{transition:transform .25s ease}html.rn-bars-hidden header.top,html.rn-bars-hidden nav.mob{transform:translateY(-130px)}}
 @media(prefers-reduced-motion:reduce){header.top,nav.mob,.filt,.letters{transition:none!important}}
 @media(max-width:640px){.filt,.letters{transition:transform .25s ease,opacity .2s ease}html.rn-bars-hidden .filt,html.rn-bars-hidden .letters{transform:translateY(calc(-100% - var(--hdr) - 24px));opacity:0;pointer-events:none}}
 </style><script>(()=>{const mq=matchMedia('(max-width:640px)');let last=0,acc=0,hidden=false;
 const set=h=>{if(h===hidden)return;hidden=h;document.documentElement.classList.toggle('rn-bars-hidden',h);try{parent.postMessage({app:'remissnissen-hub-v1',kind:'bars',id:(window.__REMISSNISSEN_COURSE__||{}).id,hidden:h},'*');}catch(e){}};
 addEventListener('scroll',()=>{const y=(document.scrollingElement||document.documentElement).scrollTop,d=y-last;last=y;
  if(!mq.matches||y<80){acc=0;set(false);return;}
  if((d>0)!==(acc>0))acc=0;acc+=d;if(acc>24)set(true);else if(acc<-24)set(false);},{passive:true});
 mq.addEventListener('change',()=>{if(!mq.matches)set(false);});})();</script>`;
 function parseRoute(hash){const m=String(hash||'').match(/^#\/(t(?:1[0-2]|[1-9])b?)(?:\/(.*))?$/);if(m&&!byId[m[1]]&&links[m[1]])return parseRoute('#/'+links[m[1]].link);if(!m||!byId[m[1]])return null;return {id:m[1],hash:m[2]===undefined?safePath(saved.courses[m[1]]?.hash):'#/'+m[2]};}
 function hubHash(id,hash){return '#/'+id+(safePath(hash)==='#/'?'':'/'+safePath(hash).slice(2));}
 // Quizdelarna (Tentaquiz och Uppslagsquiz) är tillfälligt stängda under omarbetning. Ta bort quizLock ur injection för att öppna dem igen.
 const quizLock=en=>{const T=en?{badge:'Being rebuilt',tq:'Exam quiz',cq:'Card quiz',h:' is being rebuilt',p:'The quiz is being rebuilt and is not available right now. It will be back as soon as it is ready.',bt:'Back to the exam radar',bc:'Back to the reference book'}:{badge:'Omarbetas',tq:'Tentaquiz',cq:'Uppslagsquiz',h:' är under omarbetning',p:'Quizet byggs om och går inte att nå för tillfället. Det kommer tillbaka så snart det är klart.',bt:'Tillbaka till Tentaradarn',bc:'Tillbaka till Uppslagsboken'};
  return `<style id="rn-quiz-lock">a[href="#/tr/quiz"],a[href="#/cc/quiz"],[data-trtab="quiz"]{opacity:.6}a[href="#/tr/quiz"]::after,a[href="#/cc/quiz"]::after,[data-trtab="quiz"]::after{content:"${T.badge}";margin-left:.45em;padding:.08em .5em;border-radius:999px;font-size:.68em;font-weight:600;letter-spacing:.02em;white-space:nowrap;background:var(--warn-soft,#fbeed3);color:var(--ink,#1b2a35);vertical-align:middle}.rn-wip{max-width:560px;margin:48px auto;padding:28px 26px;text-align:center;background:var(--surface,#fff);border:1px solid var(--line,#dbe4ea);border-radius:var(--r,14px);box-shadow:var(--shadow,none)}.rn-wip .rn-wip-ic{font-size:2.2rem;line-height:1;margin-bottom:10px}.rn-wip h2{margin:0 0 8px}.rn-wip p{margin:0 0 18px;color:var(--ink2,#43545f)}</style><script>(function(){var T=${JSON.stringify(T)};var RX=/^#\\/(tr|cc)\\/quiz(?:[\\/?]|$)/;function html(){var tr=/^#\\/tr\\//.test(location.hash),n=tr?T.tq:T.cq,back=tr?'#/tr':'#/cc';var box='<div class="rn-wip" role="status"><div class="rn-wip-ic" aria-hidden="true">🛠️</div><h2>'+n+T.h+'</h2><p>'+T.p+'</p><a class="btn" href="'+back+'">'+(tr?T.bt:T.bc)+'</a></div>';return tr?'<div class="trv" id="trv">'+box+'</div>':box;}function lock(){if(!RX.test(location.hash))return;var v=document.getElementById('view');if(!v||v.querySelector('.rn-wip'))return;v.innerHTML=html();}document.addEventListener('DOMContentLoaded',function(){lock();new MutationObserver(lock).observe(document.body,{childList:true,subtree:true});});addEventListener('hashchange',function(){setTimeout(lock,0);});})();</`+'script>';};
 function sourceFor(course,hash){
  const settings=JSON.stringify({id:course.id,hash:safePath(hash),preferences:HubSettings.snapshot()}).replaceAll('<','\\u003c');
  const injection='<base href="about:srcdoc"><script>window.__REMISSNISSEN_COURSE__='+settings+';'+DATA.bridge+'</'+'script>'+quizLock(course.lang==='en');
  return courseHtml(course).replaceAll('{{BILDER}}',IMG)
   .replace(/^(?:const fsOK=|const isFs=|function toggleFs\(\))[^\n]*/gm,line=>line.replace(/\bdocument\b/g,'window.parent.document'))
   .replace(/(\['fullscreenchange','webkitfullscreenchange'\]\.forEach\(ev=>)document\.addEventListener/g,'$1window.parent.document.addEventListener')
   .replace(/<head\b[^>]*>/i,m=>m+injection).replace(/<\/head>/i,frameLayout+'</head>');
 }
 const resumeText=id=>'Fortsätt i '+byId[id].term+(byId[id].short?' · '+byId[id].short:'')+' →';
 function updateResume(){const resume=$('#resume');resume.hidden=!byId[saved.last];if(!resume.hidden){resume.href=hubHash(saved.last,saved.courses[saved.last]?.hash);resume.textContent=resumeText(saved.last);}}
 function setHubBars(h){const hh=$('#hubHeader');h=!!h&&matchMedia('(max-width:640px)').matches;hh.style.marginTop=h?(-hh.offsetHeight)+'px':'';hh.inert=h;}
 // Visas när en adress inte leder någonstans, i stället för att tyst hamna på startsidan.
 const isAuthHash=h=>/access_token=|error_description=|[#&]error=|type=recovery/.test(h);
 function showOverview(){
  setHubBars(false);updateResume();
  const h=location.hash,notice=$('#hubNotice');
  notice.hidden=!(h&&h!=='#'&&h!=='#/'&&!isAuthHash(h));
  $('#hubHeader').hidden=false;
  active=null;$('#overview').hidden=false;$('#workspace').hidden=true;$('#hubStatus').textContent='Alla terminer';{const ht=$('#hubTerm');ht.hidden=true;ht.textContent='';}document.title='Remissnissen · Termin 1–12';
  for(const frame of frames.values())frame.hidden=true;
  $('#courseLoading').hidden=true;
  $('#overviewLink').setAttribute('aria-current','page');
 }
 // Laddningsruta medan en termins filer hämtas, med "Försök igen" om det misslyckas.
 function showLoading(c,error){
  const box=$('#courseLoading');box.hidden=false;
  box.innerHTML=error
   ?'<div class="rn-load" role="alert"><h2>'+esc(c.term)+' kunde inte laddas</h2><p>Kontrollera din internetanslutning och försök igen.</p><button class="btn primary" type="button" data-retry>Försök igen</button></div>'
   :'<div class="rn-load" role="status"><span class="rn-spin" aria-hidden="true"></span><p>Laddar '+esc(c.term)+' …</p></div>';
  const b=box.querySelector('[data-retry]');if(b)b.addEventListener('click',()=>route());
 }
 function route(){
  const r=parseRoute(location.hash);if(!r){showOverview();return;}
  $('#hubHeader').hidden=false;$('#hubNotice').hidden=true;
  const c=byId[r.id];active=c.id;requested.set(c.id,r.hash);$('#overview').hidden=true;$('#workspace').hidden=false;$('#hubStatus').textContent=c.term+' · '+c.title;{const ht=$('#hubTerm');ht.textContent=c.term+' · '+c.title;ht.title=c.term+' · '+c.title;ht.style.setProperty('--tc',c.color||'var(--accent)');ht.hidden=false;}document.title='Remissnissen · '+c.term;
  $('#overviewLink').removeAttribute('aria-current');
  saved.courses[c.id]={...saved.courses[c.id],hash:r.hash};saved.last=c.id;persist();
  for(const [id,item]of frames)item.hidden=id!==active;
  setHubBars(false);
  let frame=frames.get(c.id);
  if(!frame&&!loader.isLoaded(c.id)){
   showLoading(c);
   loader.loadCourse(c.id).then(()=>{if(active===c.id)route();},()=>{if(active===c.id)showLoading(c,true);});
   return;
  }
  $('#courseLoading').hidden=true;
  if(!frame){frame=document.createElement('iframe');frame.className='course-frame';frame.title='Remissnissen '+c.term;frame.name='remissnissen-'+c.id;frames.set(c.id,frame);$('#workspace').appendChild(frame);frame.srcdoc=sourceFor(c,r.hash);}
  else if(ready.has(c.id))frame.contentWindow.postMessage({app:'remissnissen-hub-v1',kind:'navigate',id:c.id,hash:r.hash},'*');
  frame.hidden=false;
 }
 window.addEventListener('message',e=>{
  const msg=e.data;if(!msg||msg.app!=='remissnissen-hub-v1'||!byId[msg.id])return;
  const frame=frames.get(msg.id);if(!frame||e.source!==frame.contentWindow)return;
  if(msg.kind==='bars'){if(msg.id===active)setHubBars(msg.hidden);return;}
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
   state.hash=safePath(msg.hash);persist();
   if(active===msg.id){const next=hubHash(msg.id,state.hash);if(location.hash!==next)history.replaceState(null,'',next);}
  }
  if(msg.kind==='search')window.HubOpenSearch(msg.query);
  if(msg.kind==='settings-open')document.getElementById('hubSettings').click();
  if(msg.kind==='storage-error')HubSettings.storageError();
  if(msg.kind==='title'&&active===msg.id&&typeof msg.title==='string')document.title='Remissnissen · '+byId[msg.id].term+' · '+msg.title.replace(/\s*[–-]\s*(?:Remissnissen )?(?:Termin |Semester |T)(?:[1-9]|1[0-2])(?: · [^–]+)?\s*$/,'');
 });
 $('#courseGrid').innerHTML=(()=>{const card=(c,half)=>{const en=c.lang==='en';return '<a class="acard'+(half?' half':'')+'" href="#/'+(c.link||c.id)+'"'+(en?' lang="en"':'')+'><span class="aic">'+c.term+'</span>'+(c.status?'<span class="astatus">'+esc(c.status)+'</span>':'')+'<b>'+esc(c.cardTitle||c.title)+'</b><span>'+c.subjects+(en?' subjects · ':' ämnesområden · ')+c.headings+(en?' cards':' uppslag')+'</span><span class="alinks"><span>'+(en?'Open ':'Öppna ')+esc(c.short||c.term)+'</span><span aria-hidden="true">→</span></span></a>';};const out=[],seen=new Set();for(const c of allCourses){if(seen.has(c.term))continue;seen.add(c.term);const g=allCourses.filter(x=>x.term===c.term);out.push(g.length>1?'<div class="acard-pair" role="group" aria-label="'+esc(c.term)+'">'+g.map(x=>card(x,true)).join('')+'</div>':card(c,false));}return out.join('');})();
 $('.skip').addEventListener('click',e=>{e.preventDefault();if(active){frames.get(active)?.focus();frames.get(active)?.contentWindow.focus();}else $('#courseGrid').focus();});
 window.HubNavigate=hash=>{if(location.hash===hash)route();else location.hash=hash;};
 window.HubActiveCourse=()=>active;
 // anropas av auth.js när progress från en annan enhet har hämtats: bygg om öppna kurser med de nya värdena
 window.HubReloadCourses=()=>{for(const [id,frame] of frames){ready.delete(id);frame.srcdoc=sourceFor(byId[id],saved.courses[id]?.hash);}try{saved=JSON.parse(localStorage.getItem(STORE)||'{}')||{};saved.courses=saved.courses||{};}catch{}updateResume();};
 window.addEventListener('hub:settings',e=>{for(const [id,frame]of frames)frame.contentWindow.postMessage({app:'remissnissen-hub-v1',id,kind:'settings',preferences:e.detail},'*');});
 window.addEventListener('hashchange',route);route();
})();

/* ===== Felrapport ===== */
// Sparas i Supabase-tabellen reports när den finns (se supabase/felrapporter.sql). Annars öppnas besökarens e-postprogram.
(()=>{
 const TO='mohammadtayeb570@gmail.com';
 const dlg=document.getElementById('globalReport'),form=document.getElementById('reportForm');
 if(!dlg||!form)return;
 const where=document.getElementById('reportWhere'),text=document.getElementById('reportText'),type=document.getElementById('reportType'),fb=document.getElementById('reportFeedback'),copy=document.getElementById('reportCopy'),send=form.querySelector('[type="submit"]');
 let returnFocus=null;
 const place=()=>{const parts=((document.getElementById('hubStatus')?.textContent||'')+' · '+document.title).split(' · ').map(x=>x.trim()).filter(x=>x&&x!=='Remissnissen'&&x!=='Alla terminer');return [...new Set(parts)].join(' · ');};
 const body=()=>'Typ: '+type.value+'\nVar: '+(where.value.trim()||'(ej angivet)')+'\nAdress: '+location.href+'\n\nBeskrivning:\n'+text.value.trim()+'\n\n— Skickat från Remissnissen ('+new Date().toLocaleString('sv-SE')+')';
 const setInvalid=on=>{text.setAttribute('aria-invalid',String(on));if(on)text.setAttribute('aria-describedby','reportFeedback');else text.removeAttribute('aria-describedby');};
 document.getElementById('hubReport').addEventListener('click',()=>{if(dlg.open)return;returnFocus=document.activeElement;fb.textContent='';copy.hidden=true;setInvalid(false);where.value=place();dlg.showModal();text.focus();});
 dlg.querySelector('[data-dialog-close]').addEventListener('click',()=>dlg.close());
 dlg.addEventListener('click',e=>{if(e.target===dlg){const r=dlg.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dlg.close();}});
 dlg.addEventListener('close',()=>{if(returnFocus?.isConnected)returnFocus.focus();});
 function viaMail(){
  const subject='Remissnissen – '+type.value+(where.value.trim()?': '+where.value.trim():'');
  copy.hidden=false;
  location.href='mailto:'+TO+'?subject='+encodeURIComponent(subject.slice(0,150))+'&body='+encodeURIComponent(body());
  fb.textContent='Rapporten kunde inte skickas direkt, så ditt e-postprogram öppnas i stället. Öppnas inget? Tryck på "Kopiera texten" och mejla till '+TO+'.';
 }
 form.addEventListener('submit',async e=>{
  e.preventDefault();
  if(!text.value.trim()){fb.textContent='Skriv en kort beskrivning av felet först.';setInvalid(true);text.focus();return;}
  setInvalid(false);
  const sb=window.RemissnissenAuth?.client;
  if(!sb){viaMail();return;}
  send.disabled=true;fb.textContent='Skickar …';
  try{
   const {error}=await sb.from('reports').insert({kind:type.value,place:where.value.trim().slice(0,200),url:location.href.slice(0,500),description:text.value.trim().slice(0,3000)});
   if(error)throw error;
   fb.textContent='Tack! Rapporten är skickad.';text.value='';
  }catch{viaMail();}
  finally{send.disabled=false;}
 });
 copy.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText('Till: '+TO+'\n'+body());fb.textContent='Texten är kopierad. Klistra in den i ett mejl till '+TO+'.';}
  catch{fb.textContent='Det gick inte att kopiera. Mejla gärna direkt till '+TO+'.';}
 });
})();

/* ===== Offline: service worker ===== */
if('serviceWorker' in navigator&&location.protocol==='https:')addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
