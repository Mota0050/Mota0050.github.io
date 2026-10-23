/* Remissnissen · inloggning och synk av studieframsteg via Supabase.
   Allt som sidan sparar i localStorage under "remissnissen." speglas till
   tabellen public.progress (en rad per användare, kolumnen data). */
(()=>{
 'use strict';
 const SUPABASE_URL='https://kotdinocmvdqfwbckhrz.supabase.co';
 const SUPABASE_KEY='sb_publishable_V--bEBLNTgKk2ux9vTbAjA_D3fPG_1I';
 const PREFIX='remissnissen.',META='remissnissen-sync.meta';
 const $=s=>document.querySelector(s);
 const btn=$('#hubAccount'),dlg=$('#globalAccount');
 if(!btn||!dlg)return;
 const label=btn.querySelector('.action-text'),form=$('#accountForm'),email=$('#accountEmail'),fb=$('#accountFeedback'),
  outView=$('#accountSignedOut'),inView=$('#accountSignedIn'),who=$('#accountWho'),state=$('#accountState');
 let returnFocus=null;
 btn.addEventListener('click',()=>{if(dlg.open)return;returnFocus=document.activeElement;fb.textContent='';dlg.showModal();(user?$('#accountSyncNow'):email).focus();});
 dlg.querySelector('[data-dialog-close]').addEventListener('click',()=>dlg.close());
 dlg.addEventListener('click',e=>{if(e.target===dlg){const r=dlg.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dlg.close();}});
 dlg.addEventListener('close',()=>{if(returnFocus?.isConnected)returnFocus.focus();});

 if(!window.supabase?.createClient){btn.hidden=true;return;}
 const sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY,{auth:{flowType:'pkce',persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});

 // ---- localStorage-hjälp ----
 const readMeta=()=>{try{return JSON.parse(localStorage.getItem(META)||'{}')||{};}catch{return {};}};
 const writeMeta=m=>{try{localStorage.setItem(META,JSON.stringify(m));}catch{}};
 function snapshot(){
  const out={};
  try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith(PREFIX))out[k]=localStorage.getItem(k);}}catch{}
  return out;
 }
 const same=(a,b)=>{const ka=Object.keys(a),kb=Object.keys(b);return ka.length===kb.length&&ka.every(k=>a[k]===b[k]);};
 function applyRemote(data){
  let changed=false;
  for(const [k,v] of Object.entries(data||{})){
   if(!k.startsWith(PREFIX)||typeof v!=='string')continue;
   if(localStorage.getItem(k)!==v){try{localStorage.setItem(k,v);changed=true;}catch{}}
  }
  return changed;
 }

 // ---- synk ----
 let user=null,last={},timer=null,busy=false;
 const show=t=>{state.textContent=t;};
 async function push(){
  if(!user||busy)return;
  const now=snapshot();
  if(same(now,last))return;
  busy=true;
  try{
   const {error}=await sb.from('progress').upsert({user_id:user.id,data:now,updated_at:new Date().toISOString()});
   if(error)throw error;
   last=now;writeMeta({user:user.id,dirty:false,at:Date.now()});
   show('Sparat i molnet '+new Date().toLocaleTimeString('sv-SE',{hour:'2-digit',minute:'2-digit'}));
  }catch(e){writeMeta({user:user.id,dirty:true,at:readMeta().at||0});show('Kunde inte synka just nu. Försöker igen snart.');}
  finally{busy=false;}
 }
 const schedule=(ms=4000)=>{clearTimeout(timer);timer=setTimeout(push,ms);};
 function markDirty(){if(!user)return;const m=readMeta();if(!m.dirty)writeMeta({...m,user:user.id,dirty:true});schedule();}

 async function firstSync(){
  show('Hämtar dina framsteg…');
  const {data,error}=await sb.from('progress').select('data').eq('user_id',user.id).maybeSingle();
  if(error){show('Kunde inte hämta dina framsteg.');return;}
  const meta=readMeta();
  const localWins=meta.user===user.id&&meta.dirty;   // osparade ändringar på den här enheten
  let changed=false;
  if(data&&data.data&&!localWins){
   changed=applyRemote(data.data);
  }
  last=localWins?{}:(data?.data||{});
  await push();
  if(!last||!Object.keys(last).length)last=snapshot();
  if(state.textContent.startsWith('Hämtar'))show('Allt är synkat.');
  if(changed&&!sessionStorage.getItem('remissnissen-sync.reloaded')){
   sessionStorage.setItem('remissnissen-sync.reloaded','1');
   location.reload();
  }
 }

 function render(){
  const inside=!!user;
  outView.hidden=inside;inView.hidden=!inside;
  label.textContent=inside?'Konto':'Logga in';
  btn.setAttribute('aria-label',inside?'Konto':'Logga in');
  btn.classList.toggle('signed-in',inside);
  if(inside)who.textContent=user.email||'';
 }

 sb.auth.onAuthStateChange((event,session)=>{
  const next=session?.user||null;
  const was=user?.id;
  user=next;render();
  if(user&&user.id!==was)setTimeout(firstSync,0);
  if(!user){clearTimeout(timer);last={};}
 });

 // Rensa ?code=… ur adressen efter inloggningslänken.
 if(new URLSearchParams(location.search).has('code')){
  sb.auth.getSession().finally(()=>{const u=new URL(location.href);u.searchParams.delete('code');history.replaceState(null,'',u.pathname+u.search+u.hash);});
 }

 // Ändringar: från kurssidorna (iframes) kommer storage-händelser; navet själv kollas med intervall.
 window.addEventListener('storage',e=>{if(!e.key||e.key.startsWith(PREFIX))markDirty();});
 setInterval(()=>{if(user&&!same(snapshot(),last))markDirty();},15000);
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')push();});
 window.addEventListener('pagehide',()=>push());

 form.addEventListener('submit',async e=>{
  e.preventDefault();
  const addr=email.value.trim();if(!addr)return;
  fb.textContent='Skickar…';
  const {error}=await sb.auth.signInWithOtp({email:addr,options:{emailRedirectTo:location.origin+'/',shouldCreateUser:true}});
  fb.textContent=error?('Det gick inte att skicka länken: '+error.message):'Kolla din e-post! Klicka på länken i mejlet för att logga in. Öppna den i samma webbläsare.';
 });
 $('#accountSyncNow').addEventListener('click',async()=>{last={};await push();});
 $('#accountSignOut').addEventListener('click',async()=>{await push();await sb.auth.signOut();fb.textContent='Du är utloggad. Dina framsteg finns kvar på den här enheten.';writeMeta({});});
 render();
})();
