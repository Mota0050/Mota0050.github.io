# Remissnissen

Öppna `index.html` för att starta sidan. Det går att dubbelklicka på den direkt, och den fungerar också på GitHub Pages.

```
index.html              Skalet: startsidan, sökdialogen och inställningsdialogen
style.css               Skalets design (färgteman, layout)
script.js               Skalets funktioner: sökning, inställningar, navigering mellan terminer
images/                 Nissens bilder
data/
  terminer.js           Listan över terminer: namn, färg och ordning på startsidan
  gemensamt.js          Motor, CSS och nisse som alla terminer delar
  terminer/
    t11/
      sida.js           Kurssidans kod, design och kursmål (sällan något du behöver röra)
      uppslag.js        Uppslagsboken
      tentaradar.js     Tentaradarn
      osce.js           OSCE (finns bara i T6, T8 och T11)
    t1/ … t12/          Samma upplägg för varje termin
```

## Redigera innehåll

`uppslag.js`, `tentaradar.js` och `osce.js` är vanlig JSON med en rad JavaScript runt. Öppna dem gärna i VS Code, som färgar texten och varnar för fel.

- Ändra bara texten **mellan citattecknen**.
- Behåll kommatecken, `[ ]` och `{ }` som de är. Ett kommatecken som saknas eller är för mycket gör att terminen inte laddar.
- Citattecken inuti en text skrivs `\"`.
- Ändra inte `id`-fälten. Din progress, dina favoriter och länkarna är kopplade till dem.

Om en termin plötsligt är tom efter en ändring kan du öppna webbläsarens konsol (F12). Där står vilken fil och rad som har ett fel.

## Lägga till en termin

1. Lägg till terminen i `data/terminer.js`.
2. Skapa mappen `data/terminer/<id>/` med filerna.
3. Lägg till en `<script src="…">` per fil längst ner i `index.html`.

Datan ligger i `.js` och inte i `.json`, så att sidan fungerar även när den öppnas direkt från datorn. Webbläsare blockerar `.json`-filer från `file://`.
