# Remissnissen

Studieplatsen på [remissnissen.se](https://remissnissen.se). Sidan körs på GitHub Pages direkt från grenen `main`.

```
index.html              Skalet: startsidan, sökdialogen, inställningar och felrapport
style.css               Skalets design (färgteman, layout)
script.js               Skalets funktioner: laddar terminer vid behov, sökning, inställningar, navigering, felrapport
auth.js                 Inloggning (Supabase) och synk av progress mellan enheter
config.js               Supabase-adress och publik nyckel (får ligga öppet)
sw.js                   Service worker: gör att sidan fungerar utan nät
manifest.webmanifest    Gör att sidan kan installeras på hemskärmen
integritet.html         Integritetspolicyn
404.html                Visas för adresser som inte finns
images/                 Nissens bilder och ikoner
vendor/supabase.js      Supabase JS-klienten (version 2.45.4)
data/
  terminer.js           Listan över terminer: namn, färg, antal och ordning på startsidan
  gemensamt.js          Motor, CSS och nisse som alla terminer delar
  terminer/
    t11/
      sida.js           Kurssidans kod och design, lagrad som skillnader mot gemensamt.js
      uppslag.js        Uppslagsboken
      tentaradar.js     Tentaradarn
      osce.js           OSCE (finns bara i T6, T8 och T11)
    t1/ … t12/          Samma upplägg för varje termin
tools/
  kontrollera.js        Kontrollerar att data och filer hänger ihop (körs automatiskt på GitHub)
  kurskod.js            Verktyg för att ändra i motorn och kurssidornas kod
supabase/
  felrapporter.sql      Skapar tabellen för felrapporter (körs en gång i Supabase)
  kontroll.sql          Frågor som visar databasens säkerhetsregler
```

Startsidan laddar bara `data/terminer.js`. En termins filer hämtas först när någon öppnar terminen, och inget kursmaterial hämtas före inloggningen.

## Redigera innehåll

`uppslag.js`, `tentaradar.js` och `osce.js` är vanlig JSON med en rad JavaScript runt. Öppna dem gärna i VS Code, som färgar texten och varnar för fel.

- Ändra bara texten **mellan citattecknen**.
- Behåll kommatecken, `[ ]` och `{ }` som de är. Ett kommatecken som saknas eller är för mycket gör att terminen inte laddar.
- Citattecken inuti en text skrivs `\"`.
- Ändra inte `id`-fälten. Din progress, dina favoriter och länkarna är kopplade till dem.

När du pushar kör GitHub automatiskt `tools/kontrollera.js`. Ett rött kryss vid commiten betyder att något är fel; klicka på krysset så står det vilken fil och vad som behöver rättas. Du kan också köra kontrollen själv med `node tools/kontrollera.js`.

## Ändra i motorn eller kurssidornas kod

`sida.js` innehåller inte hela kurssidan utan bara skillnaderna mot `gemensamt.js`. Ändra därför aldrig `gemensamt.js` för hand: då passar skillnaderna inte längre och terminerna går sönder. Använd verktyget i stället:

```js
// node -e "..." eller i en egen fil i repots rot
const kod=require('./tools/kurskod').load();
kod.replaceAll('core','gammal text','ny text');          // i motorn och alla terminer som har texten
kod.replaceAll('core','gammal','ny',{only:['t8']});       // bara i T8
kod.save();                                                // skriver tillbaka och räknar om skillnaderna
```

`'css'`, `'core'` och `'da'` (nissen) är motorns tre delar; `'html'` är resten av kurssidan.

## Lägga till en termin

1. Lägg till terminen i `data/terminer.js` med rätt antal i `subjects` och `headings`.
2. Skapa mappen `data/terminer/<id>/` med `sida.js`, `uppslag.js`, `tentaradar.js` (och `osce.js` om terminen har modulen `os`).

Sökningen och laddningen hittar terminen själva.

## Supabase

- `progress`: en rad per användare med all progress. Synken slår ihop ändringar per nyckel, så att två enheter inte skriver över varandra.
- `profiles`: användarnamn.
- `reports`: felrapporter. Skapas med `supabase/felrapporter.sql` (Dashboard → SQL Editor). Tills tabellen finns skickas rapporter som mejl.

Kör `supabase/kontroll.sql` i SQL Editor för att se att radskyddet är påslaget och att reglerna bara ger åtkomst till egen rad.

## Service worker

`sw.js` hämtar allt från nätet först och använder sparade kopior bara utan nät. Höj `VERSION` i `sw.js` om du ändrar listan med grundfiler (`SHELL`).
