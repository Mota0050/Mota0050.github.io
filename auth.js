/* Remissnissen · inloggning (Supabase) och synk av studieprogress.
   Sidan är låst bakom #authGate tills användaren är inloggad.
   All progress som sidan sparar i localStorage under "remissnissen." speglas
   till public.progress (en rad per användare). Nycklar under "remissnissen.auth."
   hör till inloggningen och synkas inte. */
(()=>{
 'use strict';
 const PREFIX='remissnissen.',AUTH='remissnissen.auth.',OWNER=AUTH+'owner',SYNCED=AUTH+'synced',RELOADED=AUTH+'reloaded';
 const SITE='https://remissnissen.se/';
 const cfg=window.REMISSNISSEN_SUPABASE||{};
 const root=document.documentElement;

 /* ---------- Stil ---------- */
 const css=`
html:not(.rn-authed) body>*:not(#authGate){display:none!important}
html.rn-authed #authGate{display:none!important}
#authGate{position:fixed;inset:0;z-index:2147483000;overflow:auto;background:var(--bg,#f4f7f9);color:var(--ink,#1b2a35);font:16px/1.55 var(--body,system-ui,sans-serif);display:flex;align-items:flex-start;justify-content:center;padding:max(24px,env(safe-area-inset-top)) 16px 32px}
#authGate *{box-sizing:border-box}
.ag-card{width:100%;max-width:440px;margin:auto 0;background:var(--surface,#fff);border:2px solid var(--line,#dbe4ea);border-radius:26px;box-shadow:var(--shadow);padding:28px}
.ag-brand{display:flex;align-items:center;gap:12px;margin-bottom:6px}
.ag-brand img{width:52px;height:52px;border-radius:50%;background:var(--surface2,#e9eff3);object-fit:cover}
.ag-brand b{font:800 22px/1.2 var(--head,system-ui,sans-serif)}
.ag-lead{margin:4px 0 18px;color:var(--ink2,#43545f);font-size:14px}
.ag-tabs{display:grid;grid-template-columns:1fr 1fr;gap:6px;padding:5px;background:var(--surface2,#e9eff3);border-radius:999px;margin-bottom:18px}
.ag-tabs button{border:0;border-radius:999px;padding:9px 10px;background:transparent;color:var(--ink2,#43545f);font:inherit;font-weight:800;cursor:pointer;min-height:42px}
.ag-tabs button[aria-selected="true"]{background:var(--surface,#fff);color:var(--ink,#1b2a35);box-shadow:0 1px 3px rgba(0,0,0,.12)}
.ag-form{display:flex;flex-direction:column;gap:12px}
.ag-form[hidden]{display:none}
.ag-field{display:flex;flex-direction:column;gap:5px;font-size:14px;font-weight:700}
.ag-field input{width:100%;border:2px solid var(--line,#dbe4ea);border-radius:12px;background:var(--bg,#f4f7f9);color:var(--ink,#1b2a35);font:inherit;font-weight:400;padding:11px 12px;min-height:46px}
.ag-field input:focus{outline:none;border-color:var(--accent,#2f6f99)}
.ag-field small{font-weight:400;color:var(--ink3,#6c7d88);font-size:12.5px}
.ag-check{display:flex;gap:10px;align-items:flex-start;font-size:14px}
.ag-check input{width:20px;height:20px;margin:2px 0 0;flex:none;accent-color:var(--accent,#2f6f99)}
.ag-btn{border:0;border-radius:999px;padding:12px 18px;min-height:46px;background:var(--accent,#2f6f99);color:var(--surface,#fff);font:inherit;font-weight:800;cursor:pointer}
.ag-btn[disabled]{opacity:.6;cursor:wait}
.ag-link{align-self:flex-start;border:0;background:none;padding:2px 0;color:var(--accent,#2f6f99);font:inherit;font-size:14px;font-weight:700;text-decoration:underline;cursor:pointer}
.ag-msg{margin:0;font-size:14px;padding:10px 12px;border-radius:12px;background:var(--surface2,#e9eff3)}
.ag-msg:empty{display:none}
.ag-msg.err{background:var(--warn-soft,#fbeed3);border:2px solid var(--warn,#d4952a)}
.ag-msg.ok{background:var(--ok-soft,#dcf1e8);border:2px solid var(--ok,#2b8f71)}
.ag-about{margin-top:20px;border-top:1px solid var(--line,#dbe4ea);padding-top:12px;font-size:13.5px;color:var(--ink2,#43545f)}
.ag-about summary{cursor:pointer;font-weight:800;color:var(--ink,#1b2a35)}
.ag-about p{margin:8px 0 0}
.ag-wait{text-align:center;color:var(--ink2,#43545f);padding:20px 0}
@media(max-width:480px){.ag-card{padding:20px;border-radius:20px}}
.rn-account-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px}
.rn-account-actions button{cursor:pointer;font-family:inherit;font-size:inherit}
.rn-account-info{margin:0;font-size:14px;color:var(--ink2)}
.rn-account-info b{color:var(--ink)}
.rn-danger{border-color:var(--akut)!important;color:var(--akut)!important}
.rn-delete{margin-top:12px;padding:12px;border:2px solid var(--akut);border-radius:14px}
.rn-delete[hidden]{display:none}
.rn-delete p{margin:0 0 8px;font-size:14px}
.rn-delete input{width:100%}
#rnAccountMsg{font-size:14px;color:var(--ink2);margin:10px 0 0}
#rnAccountMsg:empty{display:none}`;
 const style=document.createElement('style');style.id='authStyle';style.textContent=css;document.head.appendChild(style);

 /* ---------- Inloggningsskärm ---------- */
 const gate=document.createElement('div');
 gate.id='authGate';
 gate.innerHTML=`
<div class="ag-card" role="main">
 <div class="ag-brand"><img src="images/logo.webp" alt=""><b>Remissnissen</b></div>
 <p class="ag-lead" id="agLead">Logga in för att använda studieplatsen. Din progress sparas på ditt konto.</p>
 <p class="ag-wait" id="agWait">Laddar…</p>
 <div id="agMain" hidden>
  <div class="ag-tabs" role="tablist">
   <button type="button" role="tab" id="agTabLogin" aria-selected="true" aria-controls="agLogin">Logga in</button>
   <button type="button" role="tab" id="agTabSignup" aria-selected="false" aria-controls="agSignup">Skapa konto</button>
  </div>
  <form class="ag-form" id="agLogin" novalidate>
   <label class="ag-field">E-post<input type="email" id="agLoginEmail" autocomplete="username" required></label>
   <label class="ag-field">Lösenord<input type="password" id="agLoginPw" autocomplete="current-password" required></label>
   <button class="ag-btn" type="submit">Logga in</button>
   <button class="ag-link" type="button" id="agForgot">Glömt lösenord?</button>
   <button class="ag-link" type="button" id="agResend" hidden>Skicka bekräftelsemejlet igen</button>
  </form>
  <form class="ag-form" id="agSignup" novalidate hidden>
   <label class="ag-field">Användarnamn<input id="agUser" autocomplete="nickname" maxlength="24" required><small>3–24 tecken: bokstäver (även åäö), siffror, _ . -</small></label>
   <label class="ag-field">E-post<input type="email" id="agEmail" autocomplete="email" required></label>
   <label class="ag-field">Lösenord<input type="password" id="agPw" autocomplete="new-password" minlength="8" required><small>Minst 8 tecken.</small></label>
   <label class="ag-field">Upprepa lösenord<input type="password" id="agPw2" autocomplete="new-password" required></label>
   <label class="ag-check"><input type="checkbox" id="agConsent"><span>Jag har läst <a href="#" id="agAboutLink">hur mina uppgifter sparas</a>.</span></label>
   <button class="ag-btn" type="submit">Skapa konto</button>
  </form>
  <form class="ag-form" id="agForgotForm" novalidate hidden>
   <p class="ag-lead" style="margin:0">Skriv din e-post så skickar vi en länk där du kan välja ett nytt lösenord.</p>
   <label class="ag-field">E-post<input type="email" id="agForgotEmail" autocomplete="email" required></label>
   <button class="ag-btn" type="submit">Skicka länk</button>
   <button class="ag-link" type="button" id="agBack">Tillbaka till inloggningen</button>
  </form>
 </div>
 <form class="ag-form" id="agRecover" novalidate hidden>
  <p class="ag-lead" style="margin:0">Välj ett nytt lösenord för ditt konto.</p>
  <label class="ag-field">Nytt lösenord<input type="password" id="agNewPw" autocomplete="new-password" minlength="8" required><small>Minst 8 tecken.</small></label>
  <label class="ag-field">Upprepa nytt lösenord<input type="password" id="agNewPw2" autocomplete="new-password" required></label>
  <button class="ag-btn" type="submit">Spara nytt lösenord</button>
 </form>
 <p class="ag-msg" id="agMsg" role="status" aria-live="polite"></p>
 <details class="ag-about" id="agAbout">
  <summary>Om dina uppgifter</summary>
  <p>Vi sparar ditt användarnamn, din e-postadress och din studieprogress – inget annat.</p>
  <p>Uppgifterna lagras hos Supabase i EU.</p>
  <p>Du kan ta bort ditt konto när som helst under Inställningar.</p>
  <p><a href="integritet.html" target="_blank" rel="noopener">Läs hela integritetspolicyn</a></p>
 </details>
</div>`;
 document.body.prepend(gate);
 const $=id=>document.getElementById(id);
 const msg=$('agMsg');
 const say=(t,kind='')=>{msg.textContent=t||'';msg.className='ag-msg'+(kind?' '+kind:'');};

 if(!window.supabase?.createClient||!cfg.url||!cfg.key){
  $('agWait').textContent='Inloggningen kunde inte laddas. Kontrollera din internetanslutning och ladda om sidan.';
  return;
 }

 /* ---------- Supabase ---------- */
 const sb=window.supabase.createClient(cfg.url,cfg.key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,storageKey:AUTH+'token'}});
 const urlHash=location.hash;
 const fromLink=/access_token=|error_description=|[#&]error=/.test(urlHash);
 const linkError=(()=>{if(!/error/.test(urlHash))return null;const p=new URLSearchParams(urlHash.replace(/^#/,''));return p.get('error_code')||p.get('error_description')||p.get('error');})();
 const linkIsRecovery=/type=recovery/.test(urlHash);
 const linkIsLogin=/access_token=/.test(urlHash)&&!linkIsRecovery;

 /* ---------- Felmeddelanden på svenska ---------- */
 function sv(err){
  if(!err)return 'Något gick fel. Försök igen.';
  const m=String(err.message||err.error_description||err||'').toLowerCase(),code=String(err.code||'').toLowerCase(),status=err.status;
  if(code==='invalid_credentials'||m.includes('invalid login credentials'))return 'Fel e-post eller lösenord.';
  if(code==='email_not_confirmed'||m.includes('email not confirmed'))return 'Du har inte bekräftat din e-post ännu. Klicka på länken i mejlet vi skickade (kolla även skräpposten).';
  if(code==='user_already_exists'||m.includes('already registered')||m.includes('already been registered'))return 'Det finns redan ett konto med den e-postadressen. Logga in i stället, eller välj "Glömt lösenord?".';
  if(status===429||code.includes('rate_limit')||m.includes('rate limit')||m.includes('for security purposes')||m.includes('too many'))return 'För många försök. Vänta en stund och försök igen.';
  if(code==='weak_password'||m.includes('password should')||m.includes('weak password'))return 'Lösenordet är för svagt. Använd minst 8 tecken, gärna en blandning av bokstäver och siffror.';
  if(code==='same_password'||m.includes('different from the old'))return 'Det nya lösenordet måste skilja sig från det gamla.';
  if(code==='email_address_invalid'||m.includes('invalid format')||m.includes('is invalid'))return 'E-postadressen ser inte giltig ut.';
  if(m.includes('database error saving new user'))return 'Kontot kunde inte skapas. Användarnamnet kan vara upptaget eller ogiltigt – prova ett annat.';
  if(code==='signup_disabled'||m.includes('signups not allowed'))return 'Det går inte att skapa nya konton just nu.';
  if(code==='otp_expired'||m.includes('expired')||m.includes('invalid or has expired'))return 'Länken har gått ut eller redan använts. Be om en ny.';
  if(m.includes('failed to fetch')||m.includes('network'))return 'Ingen kontakt med servern. Kontrollera din internetanslutning.';
  if(code==='session_not_found'||m.includes('auth session missing'))return 'Din inloggning har gått ut. Logga in igen.';
  return 'Något gick fel: '+(err.message||'okänt fel')+'.';
 }

 /* ---------- Vyer ---------- */
 const forms=['agLogin','agSignup','agForgotForm'];
 function showForm(id){
  for(const f of forms)$(f).hidden=f!==id;
  $('agTabLogin').setAttribute('aria-selected',String(id==='agLogin'));
  $('agTabSignup').setAttribute('aria-selected',String(id==='agSignup'));
  say('');
 }
 function showGate(view){
  root.classList.remove('rn-authed');
  $('agWait').hidden=true;
  $('agMain').hidden=view==='recover';
  $('agRecover').hidden=view!=='recover';
  $('agLead').textContent=view==='recover'?'Återställ ditt lösenord.':'Logga in för att använda studieplatsen. Din progress sparas på ditt konto.';
 }
 $('agTabLogin').addEventListener('click',()=>showForm('agLogin'));
 $('agTabSignup').addEventListener('click',()=>showForm('agSignup'));
 $('agForgot').addEventListener('click',()=>{$('agForgotEmail').value=$('agLoginEmail').value;showForm('agForgotForm');$('agForgotEmail').focus();});
 $('agBack').addEventListener('click',()=>showForm('agLogin'));
 $('agAboutLink').addEventListener('click',e=>{e.preventDefault();$('agAbout').open=true;$('agAbout').scrollIntoView({block:'nearest'});});
 const busy=(form,on)=>{const b=form.querySelector('.ag-btn');if(b)b.disabled=on;};

 /* ---------- Logga in ---------- */
 let freshLogin=linkIsLogin;
 $('agLogin').addEventListener('submit',async e=>{
  e.preventDefault();
  const email=$('agLoginEmail').value.trim(),password=$('agLoginPw').value;
  $('agResend').hidden=true;
  if(!email||!password){say('Fyll i e-post och lösenord.','err');return;}
  busy(e.target,true);say('Loggar in…');
  freshLogin=true;
  const {error}=await sb.auth.signInWithPassword({email,password});
  busy(e.target,false);
  if(error){
   freshLogin=false;say(sv(error),'err');
   if(error.code==='email_not_confirmed'||/not confirmed/i.test(error.message||''))$('agResend').hidden=false;
  }
 });
 $('agResend').addEventListener('click',async()=>{
  const email=$('agLoginEmail').value.trim();if(!email)return;
  const {error}=await sb.auth.resend({type:'signup',email,options:{emailRedirectTo:SITE}});
  say(error?sv(error):'Ett nytt bekräftelsemejl är skickat. Kolla din inkorg.',error?'err':'ok');
 });

 /* ---------- Skapa konto ---------- */
 const USER_RE=/^[A-Za-z0-9ÅÄÖåäö_.-]{3,24}$/;
 $('agSignup').addEventListener('submit',async e=>{
  e.preventDefault();
  const username=$('agUser').value.trim(),email=$('agEmail').value.trim(),pw=$('agPw').value,pw2=$('agPw2').value;
  if(!USER_RE.test(username)){say('Användarnamnet måste vara 3–24 tecken och får bara innehålla bokstäver (även åäö), siffror och _ . -','err');return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){say('E-postadressen ser inte giltig ut.','err');return;}
  if(pw.length<8){say('Lösenordet måste vara minst 8 tecken.','err');return;}
  if(pw!==pw2){say('Lösenorden är inte likadana.','err');return;}
  if(!$('agConsent').checked){say('Kryssa i att du har läst hur dina uppgifter sparas.','err');return;}
  busy(e.target,true);say('Kontrollerar användarnamnet…');
  try{
   const {data:free,error:rpcErr}=await sb.rpc('username_available',{name:username});
   if(rpcErr){say(sv(rpcErr),'err');return;}
   if(!free){say('Användarnamnet är upptaget. Välj ett annat.','err');return;}
   say('Skapar konto…');
   const {data,error}=await sb.auth.signUp({email,password:pw,options:{data:{username},emailRedirectTo:SITE}});
   if(error){say(sv(error),'err');return;}
   if(data?.user&&Array.isArray(data.user.identities)&&data.user.identities.length===0){say('Det finns redan ett konto med den e-postadressen. Logga in i stället, eller välj "Glömt lösenord?".','err');return;}
   e.target.reset();
   say('Kolla din e-post och klicka på länken för att aktivera kontot. Hittar du inget mejl, titta i skräpposten.','ok');
  }finally{busy(e.target,false);}
 });

 /* ---------- Glömt lösenord ---------- */
 $('agForgotForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const email=$('agForgotEmail').value.trim();
  if(!email){say('Skriv din e-postadress.','err');return;}
  busy(e.target,true);
  const {error}=await sb.auth.resetPasswordForEmail(email,{redirectTo:SITE});
  busy(e.target,false);
  say(error?sv(error):'Om det finns ett konto med den adressen har vi skickat en länk. Kolla din e-post.',error?'err':'ok');
 });
 let recovering=linkIsRecovery;
 $('agRecover').addEventListener('submit',async e=>{
  e.preventDefault();
  const pw=$('agNewPw').value,pw2=$('agNewPw2').value;
  if(pw.length<8){say('Lösenordet måste vara minst 8 tecken.','err');return;}
  if(pw!==pw2){say('Lösenorden är inte likadana.','err');return;}
  busy(e.target,true);
  const {error}=await sb.auth.updateUser({password:pw});
  busy(e.target,false);
  if(error){say(sv(error),'err');return;}
  say('Lösenordet är bytt.','ok');
  recovering=false;freshLogin=true;
  const {data}=await sb.auth.getSession();
  if(data?.session)onSignedIn(data.session);
 });

 /* ---------- Progress i localStorage ---------- */
 const progressKeys=()=>{const out=[];try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith(PREFIX)&&!k.startsWith(AUTH))out.push(k);}}catch{}return out;};
 function collect(){const o={};for(const k of progressKeys().sort()){try{o[k]=localStorage.getItem(k);}catch{}}return o;}
 const sig=o=>{const s=JSON.stringify(o);let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return s.length+':'+h;};
 function clearProgress(){for(const k of progressKeys())try{localStorage.removeItem(k);}catch{}}
 function clearAll(){const ks=[];try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith(PREFIX))ks.push(k);}}catch{}for(const k of ks)try{localStorage.removeItem(k);}catch{}}
 const get=k=>{try{return localStorage.getItem(k);}catch{return null;}};
 const set=(k,v)=>{try{localStorage.setItem(k,v);}catch{}};

 let user=null,lastSig=get(SYNCED),timer=null,pushing=false;
 async function push(force=false){
  if(!user||pushing)return;
  const data=collect(),s=sig(data);
  if(!force&&s===lastSig)return;
  pushing=true;
  try{
   const {error}=await sb.from('progress').upsert({user_id:user.id,data,updated_at:new Date().toISOString()});
   if(!error){lastSig=s;set(SYNCED,s);set(OWNER,user.id);}
  }catch{}finally{pushing=false;}
 }
 async function firstSync(){
  const {data:row,error}=await sb.from('progress').select('data').eq('user_id',user.id).maybeSingle();
  if(error)return false;
  if(row&&row.data&&typeof row.data==='object'){
   clearProgress();
   for(const [k,v] of Object.entries(row.data))if(k.startsWith(PREFIX)&&!k.startsWith(AUTH)&&typeof v==='string')set(k,v);
   set(OWNER,user.id);
   const s=sig(collect());lastSig=s;set(SYNCED,s);
   if(sessionStorage.getItem(RELOADED)!==user.id){sessionStorage.setItem(RELOADED,user.id);history.replaceState(null,'',location.pathname+location.search+'#/');location.reload();return true;}
   return false;
  }
  const owner=get(OWNER);
  if(owner&&owner!==user.id)clearProgress();
  set(OWNER,user.id);
  await push(true);
  return false;
 }

 /* ---------- Konto i Inställningar ---------- */
 let profileName=null;
 function buildAccountSection(){
  const dlg=document.getElementById('globalSettings');
  if(!dlg||document.getElementById('rnAccount'))return;
  const sec=document.createElement('section');sec.id='rnAccount';
  sec.innerHTML=`<h3>Konto</h3>
<p class="rn-account-info">Användarnamn: <b id="rnUser">–</b></p>
<p class="rn-account-info">E-post: <b id="rnEmail">–</b></p>
<div class="rn-account-actions"><button type="button" class="ib" id="rnLogout">Logga ut</button><button type="button" class="ib rn-danger" id="rnDelete">Ta bort konto</button></div>
<div class="rn-delete" id="rnDeleteBox" hidden>
 <p><b>Det här tar bort ditt konto och all sparad progress för alltid.</b></p>
 <label class="pref-row" style="display:block"><span id="rnDeleteLabel">Skriv ditt användarnamn för att bekräfta:</span><input id="rnDeleteInput" autocomplete="off" style="max-width:100%!important;width:100%;margin-top:6px"></label>
 <div class="rn-account-actions"><button type="button" class="ib rn-danger" id="rnDeleteConfirm">Ta bort mitt konto</button><button type="button" class="ib" id="rnDeleteCancel">Avbryt</button></div>
</div>
<p id="rnAccountMsg" role="status" aria-live="polite"></p>`;
  const first=dlg.querySelector('section');
  if(first)first.before(sec);else dlg.appendChild(sec);
  const amsg=t=>{document.getElementById('rnAccountMsg').textContent=t||'';};
  document.getElementById('rnLogout').addEventListener('click',async()=>{
   amsg('Loggar ut…');
   await push();
   stopSync();
   await sb.auth.signOut();
   clearAll();
   location.replace(location.pathname+'#/');location.reload();
  });
  const box=document.getElementById('rnDeleteBox');
  document.getElementById('rnDelete').addEventListener('click',()=>{box.hidden=false;document.getElementById('rnDeleteInput').value='';document.getElementById('rnDeleteInput').focus();});
  document.getElementById('rnDeleteCancel').addEventListener('click',()=>{box.hidden=true;amsg('');});
  document.getElementById('rnDeleteConfirm').addEventListener('click',async()=>{
   const typed=document.getElementById('rnDeleteInput').value.trim();
   const expected=profileName||user?.email||'';
   if(!expected||typed.toLowerCase()!==expected.toLowerCase()){amsg(profileName?'Användarnamnet stämmer inte.':'E-postadressen stämmer inte.');return;}
   amsg('Tar bort kontot…');
   stopSync();
   const {error}=await sb.rpc('delete_own_account');
   if(error){amsg(sv(error));startSync();return;}
   try{await sb.auth.signOut({scope:'local'});}catch{}
   clearAll();
   location.replace(location.pathname+'#/');location.reload();
  });
 }
 async function fillAccount(){
  buildAccountSection();
  const e=document.getElementById('rnEmail');if(e)e.textContent=user?.email||'–';
  const {data}=await sb.from('profiles').select('username').eq('id',user.id).maybeSingle();
  profileName=data?.username||null;
  const u=document.getElementById('rnUser');if(u)u.textContent=profileName||'(inget användarnamn)';
  const l=document.getElementById('rnDeleteLabel');if(l)l.textContent=profileName?'Skriv ditt användarnamn för att bekräfta:':'Skriv din e-postadress för att bekräfta:';
 }

 /* ---------- Synk-loop ---------- */
 const onHide=()=>{if(document.visibilityState==='hidden')push();};
 function startSync(){stopSync();timer=setInterval(push,10000);document.addEventListener('visibilitychange',onHide);}
 function stopSync(){clearInterval(timer);timer=null;document.removeEventListener('visibilitychange',onHide);}

 /* ---------- Inloggad / utloggad ---------- */
 let active=null;
 async function onSignedIn(session){
  if(recovering){showGate('recover');return;}
  if(active===session.user.id)return;
  active=session.user.id;user=session.user;
  if(get(OWNER)&&get(OWNER)!==user.id)lastSig=null;
  if(freshLogin){
   freshLogin=false;
   say('Hämtar din progress…');
   const reloading=await firstSync();
   if(reloading)return;
  }else{try{sessionStorage.removeItem(RELOADED);}catch{}}
  root.classList.add('rn-authed');
  say('');
  if(fromLink&&/access_token|error/.test(location.hash))history.replaceState(null,'',location.pathname+location.search+'#/');
  if(fromLink)window.HubNavigate?.('#/');
  startSync();
  fillAccount();
 }
 function onSignedOut(){
  active=null;user=null;stopSync();showGate('login');
 }

 sb.auth.onAuthStateChange((event,session)=>{
  if(event==='PASSWORD_RECOVERY'){recovering=true;showGate('recover');return;}
  if(session?.user){
   setTimeout(()=>onSignedIn(session),0);
  }else if(event==='INITIAL_SESSION'||event==='SIGNED_OUT'){
   setTimeout(onSignedOut,0);
  }
 });

 // Fel från en e-postlänk (t.ex. utgången länk).
 if(linkError){
  history.replaceState(null,'',location.pathname+location.search+'#/');
  setTimeout(()=>{if(!user){showGate('login');say(sv({code:linkError,message:linkError}),'err');}},50);
 }
})();
