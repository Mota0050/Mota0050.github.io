/* Remissnissen · service worker.
   Gör att sidan fungerar utan nät och kan installeras på hemskärmen.
   Allt hämtas från nätet först, så att du alltid ser senaste versionen när du har internet.
   Utan nät (eller när nätet är mycket segt) används den senast hämtade kopian.
   Höj VERSION när listan med grundfiler ändras. */
const VERSION='2026-11-14';
const CACHE='remissnissen-'+VERSION;
const SHELL=['./','index.html','style.css','script.js','auth.js','config.js','vendor/supabase.js','data/terminer.js','integritet.html','manifest.webmanifest','favicon.ico','images/logo.webp','images/favicon-192.png','images/nisse.webp','images/nisse-ortoped.webp'];
// Kurssidorna lagrar bara skillnader mot motorn i gemensamt.js, så de måste alltid komma från samma version.
// De väntar därför alltid på nätet och använder kopian bara när nätet saknas helt.
const STRICT=/\/data\/(gemensamt|terminer\/[^/]+\/sida)\.js$/;
const TIMEOUT=6000;

self.addEventListener('install',e=>{
 e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
 e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('remissnissen-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

async function store(req,res){
 if(!res||!res.ok||res.type!=='basic')return;
 const c=await caches.open(CACHE);
 // Ny motor: släng sparade kurssidor, så att en gammal kurssida aldrig kombineras med en ny motor utan nät.
 if(/\/data\/gemensamt\.js$/.test(new URL(req.url).pathname)){
  const old=await c.match(req);
  if(old&&old.headers.get('etag')!==res.headers.get('etag')){
   for(const k of await c.keys())if(/\/data\/terminer\/[^/]+\/sida\.js$/.test(new URL(k.url).pathname))await c.delete(k);
  }
 }
 await c.put(req,res);
}

self.addEventListener('fetch',e=>{
 const req=e.request,url=new URL(req.url);
 if(req.method!=='GET'||url.origin!==location.origin)return;
 const key=req.mode==='navigate'?new Request(new URL('./',location).href):new Request(url.origin+url.pathname);
 const strict=STRICT.test(url.pathname);
 e.respondWith((async()=>{
  const net=fetch(req).then(async res=>{await store(key,res.clone());return res;});
  try{
   if(strict)return await net;
   return await Promise.race([net,new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),TIMEOUT))]);
  }catch(err){
   const hit=await caches.match(key);
   if(hit){e.waitUntil(net.catch(()=>{}));return hit;}
   return net;
  }
 })());
});
