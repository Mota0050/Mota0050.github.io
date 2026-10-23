/* Termin 9 · Uppslagsboken. Vanlig JSON: ändra texten mellan citattecknen, och behåll kommatecken och klamrar. */
REMISSNISSEN.data["t9"].cc={
 "specs": [
  {
   "id": "neuro",
   "name": "Neurologi",
   "short": "Neurologi",
   "color": "#7c4ddb"
  },
  {
   "id": "psyk",
   "name": "Psykiatri",
   "short": "Psykiatri",
   "color": "#c23f8f"
  },
  {
   "id": "ogon",
   "name": "Ögonsjukdomar",
   "short": "Ögon",
   "color": "#1c7fb0"
  },
  {
   "id": "onh",
   "name": "Öron-, näs- och halssjukdomar",
   "short": "ÖNH",
   "color": "#23966b"
  },
  {
   "id": "farm",
   "name": "Klinisk farmakologi",
   "short": "Klinisk farmakologi",
   "color": "#d9822b"
  },
  {
   "id": "bfm",
   "name": "Bild- och funktionsmedicin",
   "short": "Bild- och funktionsmedicin",
   "color": "#4a6f86"
  }
 ],
 "topics": [
  {
   "id": "t9-001",
   "name": "Neurologisk anamnes",
   "specialty": "Neurologi",
   "sub": "Neurologiskt status och anamnes",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Neurologisk anamnes** är grunden för den neurologiska diagnostiken. Kompendiet ger ingen generell mall men anger vad som är viktigt att fråga om vid **huvudvärk**, **första krampanfall**, **vakenhetssänkning** och **kognitiv svikt**.",
    "klin": [
     {
      "h": "Huvudvärk"
     },
     "Fråga om **debut**, **karaktär**, **lokalisation**, **associerade symtom**, **tidsförlopp** och **läkemedel** (överförbrukning/biverkan).",
     "Mångårig sjukhistoria talar för primär huvudvärk. Molande/tryckande runt hela huvudet → spänningshuvudvärk; bultande, ensidig men sidoväxlande → migrän; strikt ensidig, skärande/sprängande → Hortons.",
     "Huvudvärk som förvärras vid hoststöt talar för intrakraniell orsak.",
     {
      "h": "Första krampanfall"
     },
     "Tidigare sjukdomar och **provocerande faktorer** (alkohol, sömnbrist, feber/infektion).",
     "**Vittnesbeskrivning** av anfallet är mycket viktig eftersom patienten har amnesi för det.",
     {
      "h": "Vakenhetssänkt eller konfusorisk patient"
     },
     "**MATAS**: Mediciner, Allergier, Tidigare sjukdom, Aktuellt, Senaste måltid – komplettera med **sekundäranamnes** och vittnesbeskrivning.",
     {
      "h": "Kognitiv svikt och motorneuronsjukdom"
     },
     "Vid misstänkt demens tas anamnes från både patient och anhöriga: vilka symtom (glöm inte t.ex. inkontinens), när de började, hur de utvecklats, var hjälp behövs och vilka förväntningar som finns; bedöm stämningsläget.",
     "Vid misstänkt ALS: fråga alltid hur det var i början och hur symtomen spred sig."
    ],
    "diag": [
     "Anamnesen skiljer primär från sekundär huvudvärk – åskknallshuvudvärk, nydebuterad huvudvärk efter 50 års ålder, host-/nys-/krysthuvudvärk och för migrän atypisk aura är varningstecken.",
     "Vid myastenia gravis är **dygnsvariationen** central: bäst på morgonen, alltid sämst på kvällen.",
     "[[t9-063|Restless legs]] diagnostiseras oftast anamnestiskt: rörelsebehov i benen, debut i vila, lindring vid rörelse och värre kväll/natt."
    ],
    "hand": [
     "Anamnesen används tillsammans med nervstatus för att lokalisera skadan och värdera sannolik diagnos – se [[t9-004|anatomiska skadenivåer]]."
    ],
    "flagg": [
     "Utan vittne går viktig information om ett krampanfall förlorad – patienten minns inte anfallet.",
     "Glöm inte läkemedelsanamnesen: analgetikaöverförbrukning ger läkemedelsutlöst huvudvärk och läkemedel är en vanlig orsak till konfusion."
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 6, 9, 12, 20, 25, 33, 35, 47, 49"
    ]
   },
   "card": {},
   "km": [
    "neuro:0",
    "neuro:2",
    "neuro:5"
   ]
  },
  {
   "id": "t9-002",
   "name": "Neurologisk statusundersökning inklusive ögonbottenspegling",
   "specialty": "Neurologi",
   "sub": "Neurologiskt status och anamnes",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Neurologiskt status** syftar till att påvisa och lokalisera fokala eller diffusa skador i nervsystemet. **Ögonbottenspegling (oftalmoskopi)** ingår bl.a. för att upptäcka **staspapill** vid förhöjt intrakraniellt tryck.",
    "klin": [
     {
      "h": "Moment som lyfts i kompendierna"
     },
     "Vakenhetsgrad (RLS/GCS), pupiller, ögonmotorik, motorik, reflexer och Babinski – se [[t9-003|undersökning av vakenhetssänkt patient]].",
     "**Central pares**: reflexstegring, spasticitet och positiv Babinski. Perifer pares (t.ex. polyneuropati): hypoton pares, ev. atrofi och bortfall av djupa senreflexer.",
     "Parkinsonism: rigiditet = ökat motstånd i båda riktningarna, opåverkat av hastighet; kugghjulsfenomen vid långsam passiv rörelse. Bedöm även gångmönster (steglängd, start, vändning), postural instabilitet, diadokokinesi och fingerspel.",
     "**Facialispares**: central ger svaghet endast i nedre ansiktshalvan (övre halvan har bilateral innervering); perifer drabbar hela ansiktshalvan.",
     "Vid huvudvärk: kontrollera **nackstyvhet, papillödem, feber** och fokalneurologi.",
     "Vid yrsel: nystagmus (blickriktningsnystagmus under fixation och vertikal nystagmus talar för bakre skallgropslesion) och Dix–Hallpike med Frenzelglasögon.",
     "Vid kraftig kognitiv nedsättning används enklare test: grov synfältsprövning med hotrörelser, stereognosi, apraxi vid på- och avklädning samt frikopplade primitiva reflexer (labial- och gripreflex) vid utbredd, särskilt bilateral frontal skada.",
     {
      "h": "Ögonbottenspegling"
     },
     "**Staspapill**: svullen, hyperemisk papill med utsuddade gränser och utebliven spontan venpulsation; senare peripapillära flamblödningar och bomullsexsudat. Nästan alltid bilateral.",
     "Vid staspapill kontrolleras även ögonmotorik (n. abducens påverkas först vid förhöjt ICP) och pupillreflex (normal).",
     "Optikusneurit: vid papillit är papillen svullen och hyperemisk, vid retrobulbär neurit normal; oftast relativ afferent pupilldefekt (swinging flashlight-test)."
    ],
    "diag": [
     "Fokalneurologi talar för strukturell skada; upprepade nervstatus visar progress.",
     "Staspapill → misstänk intrakraniell process och remittera till neurolog/neurokirurg för snabb utredning med MR.",
     "Swinging flashlight-test påvisar afferent pupilldefekt vid t.ex. optikusneurit, AION och temporalisarterit."
    ],
    "flagg": [
     "Visus kan vara normalt tidigt vid staspapill – spegla ögonbotten även när synen är normal.",
     "Vid uttalad psykisk/kognitiv nedsättning försvåras undersökningen – anpassa testerna."
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 7, 20, 23, 26, 33, 45",
     "Ögonboken – sammanfattning (T9), s. 20, 22, 23",
     "Kompendium ÖNH (T9), s. 11, 13"
    ]
   },
   "card": {},
   "km": [
    "neuro:1",
    "neuro:2",
    "neuro:5"
   ]
  },
  {
   "id": "t9-003",
   "name": "Neurologisk undersökning av vakenhetssänkt patient",
   "specialty": "Neurologi",
   "sub": "Neurologiskt status och anamnes",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Den vakenhetssänkta patienten undersöks strukturerat enligt **ABCDE**, där D bedöms med **VAPÖR** (Vakenhetsgrad, Andningsmönster, Pupiller, Ögonmotorik, Rörelse/Babinski). Undersökningen kompletteras med **MATAS**-anamnes och etiologisk genomgång enligt **HUSK-MIDAS**.",
    "klin": [
     {
      "h": "VAPÖR"
     },
     "**Vakenhetsgrad**: RLS eller Glasgow Coma Scale.",
     "**Andningsmönster**: hypo-/hyperventilation, Kussmaul (acidos), Cheyne–Stokes.",
     "**Pupiller**: likstora och reagerande → i första hand metabolisk-toxisk orsak; olikstora och icke-reagerande → strukturell. Pupillreflexen är oftast intakt vid metabola tillstånd, och lesioner ovan thalamus eller nedom pons påverkar inte pupillen.",
     {
      "tbl": [
       [
        "Pupillfynd",
        "Tolkning enligt källan"
       ],
       [
        "Vida, reagerande",
        "Sympatikuspåslag, delirium, smärta, atropin, epileptiska anfall"
       ],
       [
        "Vida eller medelvida, ljusstela",
        "Mesencefalonskada, total hjärninfarkt"
       ],
       [
        "Små, reagerande",
        "Pons, metabolt, opiater"
       ],
       [
        "En vid ljusstel pupill",
        "Okulomotoriuspares (parasympatikus) – inklämning"
       ],
       [
        "En liten pupill (Horner)",
        "Karotisdissektion, hjärnstamsinfarkt"
       ]
      ]
     },
     "**Ögonmotorik**: spontana eller utlösta rörelser (doll's eye). Konjugerad deviation mot intrakraniell lesion (bort från paresen). Dyskonjugerade ögon vid t.ex. hjärnstams- eller nervskada: ögat ut – N III; ögat in – abducenspares/inklämning; vertikal skew – N III/IV, cerebellum eller hjärnstam.",
     "**Rörelse/Babinski**: viljemässig, reflexmässig eller involontär motorik; viloställning, spontanmotorik och kramper; smärtstimulera centralt och perifert bilateralt; tonus och Babinski."
    ],
    "diag": [
     "Ca 66 % av fallen har metabolt-toxisk orsak, 33 % strukturell och 1 % psykogen. **Fokalneurologi talar för strukturell skada.**",
     "Prover: snabbtest P-glukos, intox, elektrolyter/kreatinin, lever-, koagulations- och blodstatus, TnT, CRP, blodgas, temp och EKG.",
     "**HUSK-MIDAS**: Herpesencefalit, Urosepsis, Status epilepticus, Korsakoff–Wernicke, Meningit, Intox, Diabetes, Andningsinsufficiens, Subdural-/subaraknoidalblödning.",
     "Neuroradiologi (oftast DT, ev. med kontrast), ev. LP och EEG."
    ],
    "hand": [
     "Upprepa nervstatus för att följa förloppet. Vid skalltrauma övervakas RLS/GCS, pupillreaktion, motorik, BT, puls och andningsfrekvens var 15:e min de första 2 h, var 30:e min följande 2 h och därefter varje timme i minst 12 h.",
     "Ta ställning till vårdnivå: IVA, HIA, MIVA, NIVA eller vårdavdelning.",
     "Före klinisk hjärndödsdiagnostik ska intox, grav metabol störning och hypotermi vara uteslutna och orsaken känd – se [[t9-055|fastställande av total hjärninfarkt]]."
    ],
    "flagg": [
     "Inklämningstecken: sjunkande medvetande, böj-/sträckkramper, ensidigt vidgad ljusstel pupill (N III-pares), ändrat andningsmönster och högt BT (Cushingeffekt).",
     "Vid uncusherniering vidgas först den ipsilaterala pupillen, i slutstadiet bilateralt; reaktionen på smärta blir sämre i kontralateral kroppshalva.",
     "Ge **tiamin före glukos** vid misstänkt Wernicke–Korsakoff."
    ],
    "ddx": [
     [
      "t9-052",
      "Vakenhetssänkning och medvetslöshet, initial handläggning",
      "Hela handläggningskedjan vid medvetslöshet."
     ],
     [
      "t9-045",
      "Hotande intrakraniell inklämning",
      "Pupill-, motorik- och andningsfynd kan tyda på herniering."
     ],
     [
      "t9-055",
      "Fastställande av total hjärninfarkt",
      "Kräver att reversibla orsaker är uteslutna."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 14, 16, 20, 21"
    ]
   },
   "card": {},
   "km": [
    "neuro:3",
    "neuro:39"
   ]
  },
  {
   "id": "t9-004",
   "name": "Anatomiska skadenivåer, differentialdiagnostik och sannolik diagnos",
   "specialty": "Neurologi",
   "sub": "Neurologiskt status och anamnes",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "L": {
     "klin": "Skadenivåer och typiska fynd",
     "diag": "Lokaliserande ledtrådar"
    },
    "def": "Neurologisk diagnostik bygger på att utifrån symtom och statusfynd avgöra **var** skadan sitter (hjärna, hjärnstam, ryggmärg, nervrot/perifer nerv, muskel) och därefter **vad** som är sannolik orsak.",
    "klin": [
     {
      "h": "Hjärna och hjärnstam"
     },
     "**Karotisterritoriet**: pares, känselnedsättning, afasi, amaurosis fugax. **Vertebralisterritoriet**: synfältspåverkan, balansrubbning, yrsel, dubbelseende, dysartri.",
     "**Wallenbergs syndrom** (PICA-ocklusion, lateral medulla): ipsilateralt Horner, dissocierad känselnedsättning i ansiktet, svalg-/stämbandspares och hemiataxi; kontralateralt dissocierad känselnedsättning i arm och ben.",
     "Central facialispares drabbar endast nedre ansiktshalvan, perifer hela ansiktshalvan.",
     "Kortikal demens ger afasi, apraxi och spatiala svårigheter; subkortikal ger minnesnedsättning och långsamt tankeförlopp. Parietallobsskada → agnosi, neglekt, apraxi; frontallobsskada → personlighetsförändring.",
     "Blickriktningsnystagmus under fixation och vertikal nystagmus talar för lesion i bakre skallgropen (central yrsel).",
     {
      "h": "Ryggmärg"
     },
     "Lokaliserad ryggmärgsskada ger segmentella symtom i nivån och bortfall av långa banor nedanför – typiskt **känselnedsättning med bålnivå**.",
     "**Främre ryggmärgssyndrom**: nedre motorneuronpåverkan i skadade segment, spastiska pareser och nedsatt smärt-/temperaturkänsel nedanför.",
     "**Bakre ryggmärgssyndrom**: nedsatt beröring, vibration och proprioception; Lhermitte.",
     "**Brown-Séquard**: ipsilateral spastisk pares och kontralateral nedsättning av smärt- och temperaturkänsel nedom nivån.",
     "Lumbal spinal stenos ger perifer pares, cervikal stenos central pares.",
     {
      "h": "Perifert nervsystem och muskel"
     },
     "Polyneuropati: oftast symmetrisk, börjar distalt i benen, hypoton pares, bortfall av senreflexer och sensoriska bortfall/parestesier.",
     "ALS: kombination av perifera (atrofi, slappa pareser, fascikulationer) och centrala (spasticitet, livliga reflexer, Babinski) fynd utan känselbortfall.",
     "Myopati ger proximal svaghet, medan ALS och andra neuromuskulära sjukdomar är sämre distalt."
    ],
    "diag": [
     "Grundregel: **akut debut + fokala symtom = TIA eller stroke**; diffusa symtom → misstänk annan diagnos.",
     "Fokalneurologi hos vakenhetssänkt patient talar för strukturell orsak.",
     "Vid samtidig övre och nedre motorneuronskada döljer den slappa paresen mer eller mindre den centrala.",
     "Vid misstänkt spinal tumör: gör nivådiagnostik – central eller perifer klinik?"
    ],
    "hand": [
     "Klinisk nivåbestämning styr val av undersökning, t.ex. MR vid misstänkt ryggmärgsprocess och akut DT-hjärna vid akut fokalneurologi."
    ],
    "flagg": [
     "Om dysfagi kommer före dysartri ska man tänka på myastenia gravis eller muskelsjukdom snarare än progressiv bulbär pares.",
     "Vid spinalt trauma kan pareser döljas av vakenhetssänkning."
    ],
    "ddx": [
     [
      "t9-099",
      "Orsaker till perifer nervpåverkan inklusive kranialnerver",
      "Perifer nivå: slappa pareser, areflexi."
     ],
     [
      "t9-084",
      "Akut debuterande ryggmärgssjukdom",
      "Bålnivå, para-/tetrapares."
     ],
     [
      "t9-054",
      "Strukturellt betingad vakenhetssänkning",
      "Fokala fynd hos medvetandesänkt patient."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 2, 3, 16, 20, 28, 29, 39, 43, 44, 45, 49, 50",
     "Kompendium ÖNH (T9), s. 11, 13"
    ]
   },
   "card": {},
   "km": [
    "neuro:2",
    "neuro:4"
   ]
  },
  {
   "id": "t9-005",
   "name": "Indikationer och kontraindikationer för lumbalpunktion",
   "specialty": "Neurologi",
   "sub": "Lumbalpunktion",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Lumbalpunktion (LP)** ger likvor för analys (celler, odling, PCR, antikroppar, biomarkörer, cytologi) och används framför allt vid misstänkt **CNS-infektion**, **SAH med negativ DT** och vid inflammatoriska och neurodegenerativa sjukdomar.",
    "klin": [
     "Tappningstest vid normaltryckshydrocefalus: ca 40 ml likvor tappas och sensomotoriken bedöms före och efter – se [[t9-008|tapptest och tryckmätning]].",
     "Vid SAH-misstanke med negativ DT görs LP om > 12 h förflutit; man letar efter xantokromi/bilirubin."
    ],
    "diag": [
     {
      "h": "Indikationer enligt kompendiet"
     },
     "Misstänkt **bakteriell eller viral meningit** och **encefalit** (odling, mikroskopi, PCR).",
     "**SAH**-misstanke trots negativ DT.",
     "**MS** (oligoklonala band), **Guillain–Barré**, akut **myelit** och **neuroborrelios** (intratekal antikroppsproduktion).",
     "Demensutredning (tau, P-tau, betaamyloid) samt vid konfusion/koma när meningit eller encefalit misstänks.",
     "Tumörer som sprids via likvorvägarna, t.ex. ependymom (cytologi), och pinealistumörer (AFP, hCG)."
    ],
    "beh": [
     "**Cerebral abscess**: LP är kontraindicerat.",
     "**Epidural abscess**: ta inte LP – kan orsaka direkt meningit.",
     "Postpunktionell huvudvärk – se [[t9-007|huvudvärk efter lumbalpunktion]]."
    ],
    "hand": [
     "Vid bakteriell meningit ska alla odlingar vara tagna och vätska samt bredspektrumantibiotika (och betametason) insatta inom 60 min.",
     "HSV-PCR kan vara negativ de första 3 dygnen – gör ny LP vid kvarstående misstanke."
    ],
    "flagg": [
     "Gör inte LP vid misstänkt cerebral eller epidural abscess.",
     "En tidig negativ PCR utesluter inte herpesencefalit."
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 4, 18, 27, 30, 38, 39, 40, 41, 42, 44, 46"
    ]
   },
   "card": {},
   "km": [
    "neuro:6"
   ]
  },
  {
   "id": "t9-006",
   "name": "Analys och tolkning av cerebrospinalvätska",
   "specialty": "Neurologi",
   "sub": "Lumbalpunktion",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Likvoranalys** (cerebrospinalvätska) används för att påvisa **infektion, blödning, inflammation** och **neurodegeneration** i CNS.",
    "klin": [
     {
      "tbl": [
       [
        "Tillstånd",
        "Likvorfynd enligt kompendiet"
       ],
       [
        "Subaraknoidalblödning",
        "Xantokromi (gul likvor), högt bilirubin"
       ],
       [
        "Bakteriell meningit",
        "Odling, mikroskopi och analys (meningokocker = gramnegativa diplokocker)"
       ],
       [
        "Listeriameningit",
        "Atypisk likvor med monocytövervikt"
       ],
       [
        "Viral (serös) meningit",
        "Klar och färglös likvor; PCR för agens"
       ],
       [
        "HSV-encefalit",
        "PCR (kan vara negativ första 3 dygnen)"
       ],
       [
        "Neuroborrelios",
        "Intratekal antikroppsproduktion"
       ],
       [
        "MS",
        "Oligoklonala band"
       ],
       [
        "Alzheimers sjukdom",
        "Förhöjt tau och P-tau, sänkt betaamyloid"
       ],
       [
        "Pinealistumör av embryonalt ursprung",
        "AFP och hCG"
       ],
       [
        "Ependymom",
        "Cytologi"
       ]
      ]
     },
     "Vid akut myelit analyseras celler, albumin, laktat, glukos, elfores och infektionsprover."
    ],
    "diag": [
     "Vid Alzheimers sjukdom är rutinlikvor normal; tau/P-tau och betaamyloid ingår däremot i diagnoskriterierna.",
     "Likvoranalys ingår även i utredningen av Guillain–Barré och vid misstänkt ALS."
    ],
    "flagg": [
     "Negativ HSV-PCR tidigt i förloppet utesluter inte encefalit – upprepa LP.",
     "Vid SAH-misstanke görs LP först om > 12 h förflutit sedan debut."
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 4, 27, 30, 38, 39, 40, 41, 42, 44, 46, 50"
    ]
   },
   "card": {},
   "km": [
    "neuro:7"
   ]
  },
  {
   "id": "t9-007",
   "name": "Huvudvärk efter lumbalpunktion",
   "specialty": "Neurologi",
   "sub": "Lumbalpunktion",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Postpunktionell huvudvärk** är huvudvärk efter lumbalpunktion som typiskt är **lägesberoende** – värre i upprätt läge och bättre i liggande.",
    "klin": [
     "Dov och molande, men kan ha sprängande/skärande inslag.",
     "Sitter i bakhuvudet eller över hela huvudet.",
     "Förvärras vid resning och lindras i liggande."
    ],
    "diag": [
     "Diagnosen bygger på den typiska lägesberoende bilden efter genomgången LP."
    ],
    "beh": [
     "Försvinner i regel inom några dagar.",
     "Kan behandlas med **koffein** eller **blood patch**."
    ],
    "flagg": [
     "Huvudvärk som förbättras i liggande ses också vid överdränage hos shuntopererade.",
     "Andra orsaker till sekundär huvudvärk (t.ex. meningit, SAH) ska övervägas om bilden inte är typisk."
    ],
    "ddx": [
     [
      "t9-051",
      "Likvorshunt och shuntkomplikation",
      "Shuntöverfunktion ger också huvudvärk som förbättras i liggande."
     ],
     [
      "t9-080",
      "Bakteriell meningit",
      "Feber, meningism och medvetandepåverkan."
     ],
     [
      "t9-019",
      "Subaraknoidalblödning",
      "Åskknallshuvudvärk med meningism."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 9, 19, 40"
    ]
   },
   "card": {},
   "km": [
    "neuro:8"
   ]
  },
  {
   "id": "t9-008",
   "name": "Tapptest och tryckmätning",
   "specialty": "Neurologi",
   "sub": "Lumbalpunktion",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Tappningstest** och **infusionstest/tryckmätning** används främst i utredningen av **normaltryckshydrocefalus (NPH)** för att förutsäga effekt av shunt. Kontinuerlig **ICP-mätning** används vid neurointensivvård.",
    "klin": [
     "Tappningstest: ca **40 ml** likvor tas ut och sensomotoriken (gång, balans m.m.) utvärderas före och efter.",
     "Kompletterande **infusionstest (Katzmantest)** kan göras.",
     "NPH-kriterierna inkluderar **ICP < 20 mmHg (24 cmH2O)**, vidgade ventriklar (Evans index > 0,3) och fri kommunikation mellan ventriklar och subaraknoidalrum.",
     "ICP monitoreras med tryckgivare i hjärnparenkymet eller via ventrikeldränage; vid intraventrikulär mätning kan likvor dräneras för att sänka trycktoppar."
    ],
    "diag": [
     "**Positivt tapptest** predikterar gott resultat av shuntoperation; negativt utfall utesluter det inte.",
     "ICP: < 15 mmHg normalt, > 20 mmHg kapillärkompression, > 30 mmHg venös stas. Perfusionstryck (MAP – ICP) > 60 mmHg normalt, < 40 mmHg kritiskt.",
     "Utredning av ICP-stegring kan omfatta DT-angio, MR och likvordynamik."
    ],
    "hand": [
     "Vid NPH är standardbehandlingen **ventrikuloperitoneal shunt**, som förbättrar ca 80 %."
    ],
    "flagg": [
     "Ett negativt tapptest utesluter inte nytta av shunt.",
     "Shuntkomplikationer är relativt vanliga men lättbehandlade: över-/underdränage, mekaniska fel, subduralhematom, infektion."
    ],
    "ddx": [
     [
      "t9-049",
      "Kommunicerande hydrocefalus",
      "NPH är en kommunicerande hydrocefalus."
     ],
     [
      "t9-051",
      "Likvorshunt och shuntkomplikation",
      "Behandlingen som tapptestet ska förutsäga effekten av."
     ],
     [
      "t9-043",
      "Intrakraniell tryckstegring",
      "Kontinuerlig ICP-monitorering styr behandlingen."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 14, 16, 17, 18"
    ]
   },
   "card": {},
   "km": [
    "neuro:9"
   ]
  },
  {
   "id": "t9-009",
   "name": "Elektroneurografi (ENeG)",
   "specialty": "Neurologi",
   "sub": "Klinisk neurofysiologi",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Elektroneurografi (neurografi, ENeG)** mäter **nervledningshastighet** och **amplitud** i perifera nerver och används för att påvisa och karakterisera neuropati.",
    "klin": [
     "Mäter nervledningshastighet, latens och amplitud i perifera nerver.",
     "Används tillsammans med EMG vid misstänkt neuromuskulär sjukdom."
    ],
    "diag": [
     "**Axonal polyneuropati**: väsentligen normal eller lätt sänkt nervledningshastighet, **sänkt amplitud**.",
     "**Demyeliniserande polyneuropati**: **sänkt nervledningshastighet**.",
     "Neurografi är första steget i utredningen av polyneuropati, följt av blodprover.",
     "Guillain–Barré: neurofysiologisk undersökning ingår i diagnostiken.",
     "ALS: väsentligen normal latens, ev. sänkt motorisk amplitud."
    ],
    "hand": [
     "Indikationer enligt kompendiet: misstänkt polyneuropati, Guillain–Barré och motorneuronsjukdom."
    ],
    "flagg": [
     "Normal ledningshastighet utesluter inte neuropati – vid axonal skada är det amplituden som sjunker."
    ],
    "ddx": [
     [
      "t9-092",
      "Polyneuropati",
      "Huvudindikation för neurografi."
     ],
     [
      "t9-093",
      "Guillain-Barrés syndrom",
      "Demyeliniserande, akut."
     ],
     [
      "t9-010",
      "Elektromyografi (EMG)",
      "Kompletterande undersökning av muskeln."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 45, 46, 50"
    ]
   },
   "card": {},
   "km": [
    "neuro:10"
   ]
  },
  {
   "id": "t9-010",
   "name": "Elektromyografi (EMG)",
   "specialty": "Neurologi",
   "sub": "Klinisk neurofysiologi",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Elektromyografi (EMG)** registrerar muskelns elektriska aktivitet och används för att påvisa **neurogena förändringar** och **störd neuromuskulär transmission**.",
    "klin": [
     "Vid myastenia gravis görs **repetitiv stimulering** för att påvisa uttröttbarhet.",
     "EMG ingår också i polysomnografi vid sömnutredning."
    ],
    "diag": [
     "**ALS**: ökad spontanaktivitet, stora motoriska enheter, polyfasi och sprouting.",
     "**Myastenia gravis**: uttröttbarhet vid repetitiv stimulering."
    ],
    "hand": [
     "Används vid misstänkt motorneuronsjukdom och myastenia gravis, tillsammans med neurografi, antikroppar och klinik."
    ],
    "flagg": [
     "ALS är en uteslutningsdiagnos – EMG-fynd ska tolkas tillsammans med anamnes, klinik och övriga undersökningar."
    ],
    "ddx": [
     [
      "t9-098",
      "Amyotrofisk lateralskleros (ALS)",
      "Neurogena EMG-fynd."
     ],
     [
      "t9-094",
      "Myastenia gravis",
      "Uttröttbarhet vid repetitiv stimulering."
     ],
     [
      "t9-009",
      "Elektroneurografi (ENeG)",
      "Mäter nervledning i stället för muskelaktivitet."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 47, 50",
     "Kompendium ÖNH (T9), s. 31"
    ]
   },
   "card": {},
   "km": [
    "neuro:10"
   ]
  },
  {
   "id": "t9-011",
   "name": "Elektroencefalografi (EEG)",
   "specialty": "Neurologi",
   "sub": "Klinisk neurofysiologi",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Elektroencefalografi (EEG)** registrerar hjärnans elektriska aktivitet och används främst i **epilepsidiagnostik**, men också vid **vakenhetssänkning**, **hjärndödsdiagnostik** och för att styra viss neurointensivvård.",
    "klin": [
     "Generaliserad epilepsi ger generaliserad EEG-bild (både höger–vänster och fram–bak); fokal epilepsi ger fokal bild vid anfallsstart.",
     "Absenser har typiskt **3/s-mönster**.",
     "Barbituratbehandling (tiopental) vid förhöjt ICP styrs med EEG: deltaaktivitet vid lågdos, **burst suppression** vid högdos."
    ],
    "diag": [
     "Ingår i utredningen efter första krampanfall; är det normalt upprepas det efter **sömndeprivation**.",
     "EEG är ofta normalt mellan anfallen men kan visa aktivitet eller avvikande mönster i fritt intervall.",
     "Vid koma övervägs EEG, t.ex. vid misstänkt status epilepticus.",
     "Hjärndöd: klinisk neurologisk undersökning, ev. med EEG.",
     "Alzheimers sjukdom: tidigt normalt EEG, senare långsam aktivitet.",
     "Vid psykos bör EEG övervägas, eftersom temporallobsepilepsi kan ge schizofreniliknande bild."
    ],
    "flagg": [
     "Ett normalt EEG utesluter inte epilepsi.",
     "Anfallsbeskrivningen är fortfarande central – EEG ersätter inte vittnesuppgifter."
    ],
    "ddx": [
     [
      "t9-035",
      "Nydebuterad epilepsi",
      "Huvudindikation för EEG."
     ],
     [
      "t9-034",
      "Status epilepticus",
      "EEG vid oklar medvetandesänkning."
     ],
     [
      "t9-055",
      "Fastställande av total hjärninfarkt",
      "EEG kan komplettera den kliniska undersökningen."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 11, 12, 17, 20, 21, 30",
     "Kompendium Psykiatri (T9), s. 10"
    ]
   },
   "card": {},
   "km": [
    "neuro:10",
    "neuro:26"
   ]
  },
  {
   "id": "t9-012",
   "name": "Indikationer för DT och MR av nervsystemet",
   "specialty": "Neurologi",
   "sub": "Neuroradiologi",
   "ty": "img",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**DT** är förstahandsmetod i akuta lägen (stroke, blödning, trauma, medvetandesänkning), medan **MR** är känsligare för bl.a. demyelinisering, ryggmärg, skallbas och tidiga inflammatoriska förändringar och används i den mer elektiva utredningen.",
    "klin": [
     "DT skalle påvisar > 95 % av alla SAH inom 24 h.",
     "Vid diffus axonal skada (DAI) kan DT vara normal eller visa mikroblödningar; MR kan vara bättre.",
     "Vid HSV-encefalit kan både DT och MR vara negativa de första ca 4 dygnen.",
     "Vid cerebral abscess är MR känsligare än DT i cerebritstadiet."
    ],
    "diag": [
     {
      "tbl": [
       [
        "Situation",
        "Metod enligt kompendiet"
       ],
       [
        "TIA/hjärninfarkt",
        "Akut DT-skalle för att utesluta blödning; MR och DT-angio i utredningen"
       ],
       [
        "SAH-misstanke",
        "Akut DT; vid fynd komplettera med angiografi"
       ],
       [
        "Skalltrauma",
        "DT-hjärna vid lätt (efter medvetandeförlust), medelsvår och svår skallskada; ny DT efter 6–12 h eller vid försämring"
       ],
       [
        "Första krampanfall",
        "Akut DT om påverkad patient eller fokalneurologi; MR helst på alla inom ca 1 v"
       ],
       [
        "Vakenhetssänkning",
        "Oftast DT, ev. med kontrast"
       ],
       [
        "Hjärntumör",
        "DT med kontrast först; MR vid skallbasförändringar eller kvarstående misstanke; hypofys- och pinealistumör alltid MR"
       ],
       [
        "MS",
        "MR (lesioner skilda i tid och rum)"
       ],
       [
        "Ryggmärgskompression, myelit, spinal tumör, ryggmärgsinfarkt",
        "MR"
       ],
       [
        "Demensutredning",
        "DT i första hand (utesluta expansivitet); MR hos yngre och när mer information behövs"
       ],
       [
        "Central yrsel",
        "DT/MR vid misstanke"
       ],
       [
        "Staspapill",
        "Snabb utredning med MR"
       ]
      ]
     },
     "Vid Parkinsons sjukdom och demens med Lewykroppar bidrar DT/MR inte till diagnosen.",
     "Vid typisk transitorisk global amnesi behövs ingen bildundersökning."
    ],
    "hand": [
     "Akut fokalneurologi, misstänkt blödning eller trauma → DT; frågeställningar om demyelinisering, ryggmärg, hypofys eller detaljerad tumörkartläggning → MR.",
     "Abducenspares hos äldre med kärlriskfaktorer anses mikrovaskulär; annars går man vidare med DT."
    ],
    "flagg": [
     "Negativ DT utesluter inte SAH – LP vid kvarstående misstanke.",
     "Tidig DT/MR kan vara normal vid HSV-encefalit och DAI.",
     "Hjärnmetastaser: glöm inte lungröntgen/DT thorax."
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 2, 3, 4, 12, 14, 15, 18, 20, 23, 27, 30, 31, 33, 36, 37, 38, 39, 41, 42, 44",
     "Kompendium ÖNH (T9), s. 11",
     "Ögonboken – sammanfattning (T9), s. 23, 26"
    ]
   },
   "card": {},
   "km": [
    "neuro:11",
    "bfm:0"
   ]
  },
  {
   "id": "t9-013",
   "name": "Neuroanatomiska strukturer och patologiska fynd i bild",
   "specialty": "Neurologi",
   "sub": "Neuroradiologi",
   "ty": "img",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Kompendiet beskriver **typiska bildfynd** vid flera neurologiska sjukdomar men ger ingen systematisk genomgång av normal neuroanatomi i bild.",
    "klin": [
     "**SAH**: klassisk distribution prepontint, i fissura Sylvii och basalt i hjärnan.",
     "**Lakunära infarkter**: centrala områden med penetrerande ändartärer (basala ganglier, capsula interna, pons); omvandlas efter veckor–månader till vätskefyllda hålrum.",
     "**Intracerebral blödning**: lobära (ca 1/3), centrala i thalamus/putamen/basala ganglier (ca 1/2, typiska hypertoniblödningar) och infratentoriella (15–20 %).",
     "**Kontusioner** sitter oftast frontotemporalt (contre-coup); vid DAI kan DT vara normal eller visa mikroblödningar.",
     "**NPH**: vidgade ventriklar med **Evans index > 0,3** utan kortikal atrofi.",
     "**MS**: inflammatoriska lesioner (**Dawsons fingrar**) och juxtakortikala lesioner; nya lesioner kontrastladdar.",
     "**Alzheimer**: atrofi, särskilt av **mediala temporalloben**; **frontotemporal demens**: frontal kortikal atrofi; **subkortikal vaskulär demens**: vitsubstansförändringar, främst periventrikulärt.",
     "**Tumörer**: oligodendrogliom med förkalkningar och cystor; meningeom tydligt kontrastladdande (kärlrikt); kraniofaryngeom med förkalkning/cystor."
    ],
    "diag": [
     "Lobär blödning är inte typisk för hypertoni – misstänk t.ex. AVM.",
     "En tumör kan komprimera ena sidoventrikeln och med tiden ge vidgning på kontralaterala sidan.",
     "Vid MS kan en enda MR-bild visa både gamla och nya lesioner i olika lokaler och därmed spridning i tid och rum."
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 2, 4, 5, 15, 18, 19, 27, 30, 32, 37, 38, 39"
    ]
   },
   "card": {},
   "km": [
    "neuro:12"
   ]
  },
  {
   "id": "t9-014",
   "name": "Intravenös kontrastförstärkning vid DT och MR",
   "specialty": "Neurologi",
   "sub": "Neuroradiologi",
   "ty": "img",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Intravenös kontrast** vid DT och MR används för att framhäva kärlrika processer och skadad blod–hjärnbarriär, t.ex. **tumörer** och **aktiv inflammation**.",
    "klin": [
     "Hjärntumör: **DT med kontrast** i första hand; **MR med kontrast** vid skallbasförändringar på DT eller vid kvarstående misstanke trots normal DT.",
     "Meningeom syns mycket tydligt på DT med kontrast tack vare kraftig vaskularisering.",
     "Vid stroke och vakenhetssänkning görs DT, ev. med kontrast.",
     "Spinala tumörer utreds bäst med MR, ev. DT med intraspinal kontrast."
    ],
    "diag": [
     "**MS**: ett nytt skov motsvaras av en **ny kontrastladdande lesion** i förenlig lokalisation.",
     "**Akut myelit**: kontrastuppladdning på MR är tecken på inflammation."
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 3, 20, 26, 37, 38, 39, 44"
    ]
   },
   "card": {},
   "km": [
    "neuro:13"
   ]
  },
  {
   "id": "t9-015",
   "name": "Undersökning av nervsystemets blodkärl, blodflöde och funktion",
   "specialty": "Neurologi",
   "sub": "Neuroradiologi",
   "ty": "img",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Nervsystemets kärl och blodflöde undersöks enligt kompendiet med **ultraljud av halskärlen (karotisduplex)**, **DT-angiografi**, **angiografi** och funktionella metoder som **SPECT/PET**; trycket följs med **ICP-mätning**.",
    "klin": [
     "**Karotisduplex/ultraljud halskärl** och/eller **DT-angio** vid utredning av TIA och hjärninfarkt.",
     "**Angiografi** efter positiv DT vid SAH för att lokalisera blödningskällan.",
     "**Cerebral fyrkärlsangiografi** är ett direkt kriterium på upphörd hjärnfunktion.",
     "**Cerebralt blodflöde** mäts med SPECT eller PET vid osäker demensdiagnos (specialistnivå) – flödet minskar i drabbade områden.",
     "ICP och perfusionstryck (CPP) monitoreras med tryckgivare; ICP-stegring utreds med DT-angio, MR och likvordynamik."
    ],
    "diag": [
     "Karotisutredningen avgör indikation för **karotiskirurgi** (symtomgivande stenos 70–99 % efter TIA/stroke inom 6 mån).",
     "Hjärt-eko och kontinuerligt EKG kompletterar vid misstänkt kardiell emboli.",
     "Frontotemporal demens kan visa sänkt blodflöde frontalt; vid Alzheimer görs flödes- och glukosmetabolismmätning utanför klinisk rutin."
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 2, 3, 4, 16, 17, 21, 30, 32, 33"
    ]
   },
   "card": {},
   "km": [
    "neuro:14"
   ]
  },
  {
   "id": "t9-016",
   "name": "Transitorisk ischemisk attack (TIA)",
   "specialty": "Neurologi",
   "sub": "Cerebrovaskulära sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**TIA** är akut insättande **fokal neurologi eller amaurosis fugax** som går över inom **24 h**, utan symtomvandring. Det är en ”varningsstroke” med ca **10 % risk för stroke inom 7 dagar**.",
    "klin": [
     "Orsakas oftast av storkärlssjukdom, främst från **karotisbifurkationen**, men även hemodynamisk mekanism och kardiell emboli förekommer.",
     {
      "h": "Karotisterritoriet"
     },
     "Övergående pares, känselnedsättning, afasi, amaurosis fugax.",
     {
      "h": "Vertebralisterritoriet"
     },
     "Övergående synfältspåverkan, balansrubbning, yrsel, dubbelseende, dysartri.",
     {
      "h": "Amaurosis fugax"
     },
     "Plötslig, smärtfri synnedsättning på ett öga som en ”rullgardin” som dras ned och efter någon minut upp igen; orsakas av fibrinemboli, oftast från karotisbifurkationen. Ögonstatus är normalt."
    ],
    "diag": [
     "Grundregel: akut debut med fokala symtom = TIA eller stroke; diffusa symtom → misstänk annan diagnos.",
     "Akut **DT-skalle** för att utesluta blödning.",
     "Utredning med **EKG, karotisduplex och hjärt-eko**; därtill fP-glukos, HbA1c, lipidstatus, SR och urinsticka, ev. DT-angio, kontinuerligt EKG och MR.",
     "Vid amaurosis fugax: palpera temporalisartärerna, ta SR och CRP, auskultera karotiderna och kontrollera hjärtrytmen."
    ],
    "beh": [
     "Laddningsdos **ASA 300–320 mg** alternativt **klopidogrel 75 mg**.",
     "Sekundärprofylax och ev. karotiskirurgi – se [[t9-020|riskfaktorer och sekundärprofylax]]."
    ],
    "hand": [
     "**Omedelbar inläggning** och akut DT.",
     "Amaurosis fugax handläggs akut på medicin- eller neuroakut, inte på ögonklinik."
    ],
    "flagg": [
     "Hög risk för stroke de närmaste dagarna – utred skyndsamt.",
     "Recidiverande amaurosis fugax kan föregå stroke.",
     "Temporalisarterit kan ge amaurosis fugax – ta alltid SR och CRP."
    ],
    "ddx": [
     [
      "t9-017",
      "Hjärninfarkt",
      "Symtomen kvarstår > 24 h."
     ],
     [
      "t9-030",
      "Temporalisarterit",
      "Äldre patient med huvudvärk, tinningömhet, tuggclaudicatio och förhöjd SR/CRP."
     ],
     [
      "t9-026",
      "Migrän",
      "Auran växer och sprider sig successivt; ögonmigrän ger synfenomen utan huvudvärk."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 2, 3",
     "Ögonboken – sammanfattning (T9), s. 23, 24"
    ]
   },
   "card": {},
   "km": [
    "neuro:15",
    "neuro:16",
    "ogon:27",
    "ogon:28"
   ]
  },
  {
   "id": "t9-017",
   "name": "Hjärninfarkt",
   "specialty": "Neurologi",
   "sub": "Cerebrovaskulära sjukdomar",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Hjärninfarkt** (ischemisk stroke) innebär plötsligt debuterande, icke-traumatiska **fokalneurologiska** ”negativa” symtom med maximal intensitet vid insjuknandet och duration **> 24 h**. Det är den vanligaste orsaken till stroke.",
    "klin": [
     {
      "h": "Orsaker"
     },
     "**Kardiell emboli** (25–35 %): vanligaste orsaken i högre åldrar; huvuddelen från kroniskt förmaksflimmer, oftast drabbas MCA; blir hemorragisk i 10–20 %.",
     "**Storkärlssjukdom** (25–30 %): ca 10 % föregås av TIA.",
     "**Lakunär infarkt** (ca 20 %): förträngning i arterioler (mikroaterom) i basala ganglier, capsula interna och pons; ger lakunära syndrom – ”pure motor stroke” vanligast, även ”pure sensory stroke”.",
     {
      "h": "Wallenbergs syndrom (PICA-ocklusion)"
     },
     "Ipsilateralt Horner, dissocierad känselnedsättning i ansiktet, svalg-/stämbandspares och hemiataxi; kontralateralt dissocierad känselnedsättning i arm och ben; rotatorisk yrsel, kräkning, nystagmus och sväljningsproblem."
    ],
    "diag": [
     "Akutprover: Hb, LPK, TPK, elektrolyter/kreatinin, glukos, CRP, SR, temp, TnT, INR, APTT och EKG.",
     "Anamnes och nervstatus; **DT-hjärna** (ev. med kontrast) för att utesluta blödning.",
     "Dagen efter: fP-glukos, HbA1c, lipidstatus, SR, urinsticka, EKG, ultraljud halskärl och/eller DT-angio; kontinuerligt EKG, hjärt-eko och MR."
    ],
    "beh": [
     "Överväg **intravenös trombolys** vid infarkt **≤ 4,5 h** efter insjuknandet.",
     "Sekundärprofylax: ASA 75 mg eller klopidogrel 75 mg, blodtryckssänkning, statin och warfarin (PK-INR 2–3) vid kardiell emboli – se [[t9-020|sekundärprofylax]].",
     "Vid malign mediainfarkt kan dekompressiv kraniektomi övervägas när ICP inte kan kontrolleras konventionellt."
    ],
    "hand": [
     "1) ABC, 2) akutprover, 3) anamnes och nervstatus, 4) DT-hjärna, 5) ställningstagande till trombolys.",
     "Blodtryckssänkning påbörjas 4–7 dagar efter hjärninfarkten.",
     "Total hjärninfarkt (hjärndöd) fastställs enligt särskilda kriterier – se [[t9-055|fastställande av total hjärninfarkt]]."
    ],
    "flagg": [
     "Tidsfönstret för trombolys är ≤ 4,5 h – fastställ insjuknandetidpunkten.",
     "Diffusa symtom talar emot stroke – tänk på annan diagnos.",
     "Warfarin är kontraindicerat vid infektiös endokardit."
    ],
    "ddx": [
     [
      "t9-016",
      "Transitorisk ischemisk attack (TIA)",
      "Symtomen går över inom 24 h."
     ],
     [
      "t9-018",
      "Intracerebral blödning",
      "Skiljs med DT; ofta huvudvärk, kräkning och medvetandesänkning."
     ],
     [
      "t9-019",
      "Subaraknoidalblödning",
      "Åskknallshuvudvärk och meningism."
     ],
     [
      "",
      "Cerebellär blödning",
      "Nämns bland viktiga differentialdiagnoser; kan trycka på likvorvägar och ge hydrocefalus."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 2, 3, 17, 21"
    ]
   },
   "card": {},
   "km": [
    "neuro:15",
    "neuro:16",
    "neuro:19",
    "neuro:41",
    "ogon:27"
   ]
  },
  {
   "id": "t9-018",
   "name": "Intracerebral blödning",
   "specialty": "Neurologi",
   "sub": "Cerebrovaskulära sjukdomar",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Intracerebral blödning** utgör ca **10 % av all stroke** och ger akuta, ibland progredierande symtom genom **lokal vävnadsskada** och **expansion med ICP-stegring**.",
    "klin": [
     "Vävnadssönderslitning och lokal tryckeffekt → **fokalneurologiska bortfall**.",
     "ICP-höjning → **huvudvärk, kräkning, högt BT och medvetandesänkning**.",
     "Mer än 1/3 växer i volym under första 24 h; ca 1/4 är vakna initialt men sjunker i medvetande under första dygnet.",
     {
      "h": "Lokalisation"
     },
     "**Lobära hematom** (ca 1/3): inte typiska hypertoniblödningar – misstänk t.ex. AVM.",
     "**Centrala hematom** (thalamus, putamen, basala ganglier; ca 1/2): typiska hypertoniblödningar.",
     "**Infratentoriella** (15–20 %): små volymer räcker för masseffekt på hjärnstam och fjärde ventrikeln; 25–30 % mortalitet trots behandling."
    ],
    "diag": [
     "Akut DT; ta PK-INR vid pågående warfarin- eller trombolysbehandling.",
     "Ny DT om patienten försämras och intervention planeras."
    ],
    "beh": [
     "**Reversera** blodförtunnande effekt enligt PM vid blödning under antikoagulantia/trombolys.",
     "**Sänk blodtrycket**; överväg mannitol vid försämring.",
     "Ingen säkerställd förbättrad outcome av kirurgisk utrymning, men evidens för vård på neurointensivvårdsavdelning.",
     "Hos yngre kan centrala hematom på 30–80 ml utrymmas p.g.a. masseffekt; infratentoriellt hematom > 3 cm → utrymning/dekompression och ev. ventrikeldränage."
    ],
    "hand": [
     "Ordning: ABC → PK-INR och akut DT → reversering → ställningstagande till kirurgi → övervakning av ICP → BT-sänkning → fortsatt behandling i princip som vid infarkt.",
     "I akutskedet avgör framför allt graden av ICP-stegring prognosen."
    ],
    "flagg": [
     "Risk för hematomtillväxt och medvetandesänkning första dygnet – övervaka noga.",
     "Lobär blödning → tänk kärlmissbildning.",
     "Infratentoriell blödning kan snabbt ge hjärnstamskompression och hydrocefalus."
    ],
    "ddx": [
     [
      "t9-017",
      "Hjärninfarkt",
      "Skiljs säkert endast med DT."
     ],
     [
      "t9-024",
      "Kärlmissbildning",
      "Bakomliggande orsak vid framför allt lobära hematom."
     ],
     [
      "t9-019",
      "Subaraknoidalblödning",
      "Åskknallshuvudvärk och meningism, blod i subaraknoidalrummet."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 5, 17"
    ]
   },
   "card": {},
   "km": [
    "neuro:15",
    "neuro:16",
    "neuro:19"
   ]
  },
  {
   "id": "t9-019",
   "name": "Subaraknoidalblödning",
   "specialty": "Neurologi",
   "sub": "Cerebrovaskulära sjukdomar",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Subaraknoidalblödning (SAH)** utgör 5–10 % av all stroke; **85 % beror på ett intrakraniellt aneurysm**, resten på okänd orsak eller AVM.",
    "klin": [
     "Plötsligt insjuknande med **åskknallshuvudvärk** – intensiv, skärande/sprängande, förvärras av huvudrörelser.",
     "Illamående, kräkning och medvetandeförlust; fokala neurologiska symtom kan förekomma.",
     "**Meningism/nackstelhet** (retning av duran), ljus- och ljudkänslighet, ofta motorisk oro.",
     "Klassisk distribution (aneurysmal SAH): prepontint, i fissura Sylvii och basalt i hjärnan."
    ],
    "diag": [
     "**DT skalle** påvisar > 95 % av SAH inom 24 h; vid positivt fynd kompletteras med **angiografi** för att lokalisera blödningskällan.",
     "Kvarstående misstanke trots negativ DT → **LP (om > 12 h)**: **xantokromi** och högt bilirubin."
    ],
    "beh": [
     "Kontakta **neurokirurg** direkt vid verifierad SAH.",
     "Överväg intubation vid somnolens (Hunt–Hess ≥ 3, motsvarar ungefär RLS 3).",
     "Oftast sätts **ventrikeldränage** – majoriteten har akut resorptionsstörning.",
     "**Endovaskulär coiling** är förstahandsval, bäst vid aneurysm med smal hals och för de flesta i bakre cirkulationen; ca 20 % risk för rekanalisering.",
     "**Klipsligatur** (öppen operation) främst vid bredbasiga aneurysm i främre cirkulationen eller aneurysm med åtgärdskrävande hematom.",
     "**Nimodipin** (Nimotop) i 2–3 veckor mot vasospasm."
    ],
    "hand": [
     "Tills SAH uteslutits: höjd huvudända 20–30°, RLS, pupiller, puls, BT, pulsoxymetri och EKG var 30:e minut.",
     "Efteråt: rehabilitering, **6 månaders körförbud**, uteslut hydrocefalusutveckling och följ ögonsymtom (glaskropps-/retinalblödning hos ca 40 %)."
    ],
    "flagg": [
     "**Vasospasm** är största orsaken till morbiditet postoperativt (kliniskt hos 20–30 %) och kan ge fördröjd ischemisk neurologisk skada (DIND).",
     "Negativ DT utesluter inte SAH.",
     "Akut hydrocefalus är vanlig."
    ],
    "ddx": [
     [
      "t9-025",
      "Akut huvudvärk",
      "Systematiskt omhändertagande av plötslig huvudvärk."
     ],
     [
      "t9-080",
      "Bakteriell meningit",
      "Feber och allmänpåverkan; nackstyvhet förekommer vid båda."
     ],
     [
      "t9-026",
      "Migrän",
      "Återkommande attacker med känt mönster, ofta ensidig."
     ],
     [
      "t9-022",
      "Sinustrombos",
      "Annan viktig orsak till plötslig huvudvärk."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 4, 7, 9"
    ]
   },
   "card": {},
   "km": [
    "neuro:15",
    "neuro:19",
    "neuro:20"
   ]
  },
  {
   "id": "t9-020",
   "name": "Riskfaktorer och sekundärprofylax vid TIA och hjärninfarkt",
   "specialty": "Neurologi",
   "sub": "Cerebrovaskulära sjukdomar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Efter TIA eller hjärninfarkt ska **riskfaktorer saneras** och patienten få **trombocythämmare, blodtrycks- och lipidsänkning** samt vid indikation **karotiskirurgi** eller **antikoagulation**.",
    "klin": [
     {
      "h": "Riskfaktorer att sanera"
     },
     "Hypertoni, hyperlipidemi, diabetes, rökning, övervikt, alkoholöverkonsumtion och för lite motion.",
     "Förmaksflimmer (kardiell emboli) och symtomgivande karotisstenos.",
     {
      "h": "Läkemedel"
     },
     "**ASA 75 mg** eller **klopidogrel 75 mg** (endast ett av dem).",
     "**Blodtryck**: tiaziddiuretikum + ACE-hämmare (t.ex. enalapril + Salures), start **4–7 dagar** efter hjärninfarkt; mål **< 140/90**.",
     "**Statin** (simvastatin 20 mg x 1 initialt) och livsstilsråd; mål totalkolesterol **< 5** och LDL **< 3**.",
     "Vid kardiell emboli ges antikoagulation – enligt kompendiet **warfarin** med PK-INR **2–3**.",
     "Vid hemgång har patienten i regel fyra preparat: en trombocythämmare, tiazid, ACE-hämmare och statin."
    ],
    "diag": [
     "Vid diabetes gäller lägre målvärden: BT **< 130/80** och kolesterol/LDL 0,5 lägre.",
     "Underlag: fP-glukos, HbA1c, lipidstatus, EKG/kontinuerligt EKG, ultraljud halskärl eller DT-angio och hjärt-eko."
    ],
    "beh": [
     "**Karotiskirurgi** om TIA/stroke inom 6 månader och symtomgivande stenos **70–99 %**; operation inom **2 veckor**."
    ],
    "hand": [
     "Uppmana till mer motion, rökstopp, viktminskning och minskat alkoholintag.",
     "Samma prevention (förmaksflimmer, arytmier, hypertoni, halskärlsstenoser) är också enda åtgärden mot vaskulär demens."
    ],
    "flagg": [
     "Påbörja inte blodtryckssänkningen direkt – vänta 4–7 dagar efter hjärninfarkt.",
     "Warfarin är kontraindicerat vid infektiös endokardit.",
     "Kombinera inte ASA och klopidogrel – välj ett av dem."
    ],
    "ddx": [
     [
      "t9-016",
      "Transitorisk ischemisk attack (TIA)",
      "Utlöser samma utredning och profylax."
     ],
     [
      "t9-017",
      "Hjärninfarkt",
      "Akut behandling före sekundärprofylax."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 2, 3, 32"
    ]
   },
   "card": {},
   "km": [
    "neuro:16"
   ]
  },
  {
   "id": "t9-021",
   "name": "Rehabilitering efter stroke och strokeenhetens arbetssätt",
   "specialty": "Neurologi",
   "sub": "Cerebrovaskulära sjukdomar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-022",
   "name": "Sinustrombos",
   "specialty": "Neurologi",
   "sub": "Cerebrovaskulära sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Sinustrombos** tas i kompendiet upp som en viktig orsak till **plötsligt debuterande huvudvärk** och till **förhöjt intrakraniellt tryck med staspapill**.",
    "klin": [
     "Ingår bland viktiga diagnoser vid plötsligt debuterande huvudvärk, tillsammans med SAH, meningit/encefalit och arteriell dissektion.",
     "Kan ge förhöjt ICP med **staspapill**; vid staspapill kan obskurationer förekomma (kortvarig dimsyn vid lägesändring)."
    ],
    "diag": [
     "Akut huvudvärk utreds med anamnes och status (nackstyvhet, papillödem, feber, neurologi) samt akut DT vid misstanke på allvarlig orsak.",
     "Vid staspapill: remiss till neurolog/neurokirurg för snabb utredning med MR."
    ],
    "beh": [
     "**Dekompressiv kraniektomi** kan övervägas när patienten försämras och ICP inte kan kontrolleras på konventionellt sätt (nämns för bl.a. sinustrombos)."
    ],
    "flagg": [
     "Huvudvärk med staspapill eller andra tecken på intrakraniell tryckstegring kräver akut utredning."
    ],
    "ddx": [
     [
      "t9-019",
      "Subaraknoidalblödning",
      "Åskknallsdebut och blod på DT."
     ],
     [
      "t9-025",
      "Akut huvudvärk",
      "Sinustrombos ingår i differentialdiagnostiken."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 6, 7, 17",
     "Ögonboken – sammanfattning (T9), s. 23"
    ]
   },
   "card": {},
   "km": [
    "neuro:18"
   ]
  },
  {
   "id": "t9-023",
   "name": "Arteriell dissektion",
   "specialty": "Neurologi",
   "sub": "Cerebrovaskulära sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Karotis- och vertebralisdissektion** nämns i kompendiet som en viktig orsak till **plötsligt debuterande huvudvärk**. Karotisdissektion kan ge **Horners syndrom**.",
    "klin": [
     "Ingår bland de viktiga diagnoserna vid plötslig huvudvärk.",
     "**Horners syndrom** (ensidig mios och ptos p.g.a. sympatikusbortfall) talar för karotisdissektion eller hjärnstamsinfarkt.",
     "Horner skiljs från okulomotoriuspares genom ptos och mios utan ögonmuskelpares."
    ],
    "diag": [
     "Akut huvudvärk: tänk ”first, worst or different” – anamnes och status (nackstyvhet, papillödem, neurologiska fynd) och akut bildundersökning vid misstanke på allvarlig orsak."
    ],
    "flagg": [
     "Ny huvudvärk och Horners syndrom → tänk karotisdissektion."
    ],
    "ddx": [
     [
      "t9-025",
      "Akut huvudvärk",
      "Dissektion ingår i differentialdiagnostiken."
     ],
     [
      "t9-017",
      "Hjärninfarkt",
      "Dissektion kan ge ischemi; Horner ses även vid hjärnstamsinfarkt."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 7, 20",
     "Ögonboken – sammanfattning (T9), s. 27"
    ]
   },
   "card": {},
   "km": [
    "neuro:18"
   ]
  },
  {
   "id": "t9-024",
   "name": "Kärlmissbildning",
   "specialty": "Neurologi",
   "sub": "Cerebrovaskulära sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Intrakraniella kärlmissbildningar** – framför allt **aneurysm** och **arteriovenösa missbildningar (AVM)** – kan ge subaraknoidal- eller intracerebral blödning.",
    "klin": [
     "85 % av SAH beror på intrakraniellt aneurysm; resten har okänd orsak eller beror på AVM.",
     "Lobära intracerebrala hematom är inte typiska hypertoniblödningar – misstänk t.ex. AVM.",
     "Aneurysm kan ge **okulomotoriuspares med påverkad pupill** (mydriasis), eftersom pupillfibrerna löper ytligt i nerven. Vid mikrovaskulär orsak (diabetes, hypertoni) är paresen ofta pupillsparande."
    ],
    "diag": [
     "Vid SAH: DT och vid positivt fynd angiografi för att lokalisera blödningskällan.",
     "Okulomotoriuspares: skilj mellan pupillsparande och komplett pares eftersom handläggningen skiljer sig; nytillkomna symtom → MR."
    ],
    "beh": [
     "Blödande aneurysm: **coiling** (förstahandsval, särskilt vid smal hals och bakre cirkulation) eller **klipsligatur** (bredbasiga i främre cirkulationen, hematom)."
    ],
    "flagg": [
     "Okulomotoriuspares med påverkad pupill → akut remiss; aneurysm ger sämre prognos.",
     "Lobär hjärnblödning → leta efter kärlmissbildning."
    ],
    "ddx": [
     [
      "t9-019",
      "Subaraknoidalblödning",
      "Vanligaste presentationen av aneurysm."
     ],
     [
      "t9-018",
      "Intracerebral blödning",
      "AVM kan ge lobära hematom."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 4, 5",
     "Ögonboken – sammanfattning (T9), s. 27"
    ]
   },
   "card": {},
   "km": [
    "neuro:18"
   ]
  },
  {
   "id": "t9-025",
   "name": "Akut huvudvärk",
   "specialty": "Neurologi",
   "sub": "Huvudvärk",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid **akut huvudvärk** ska farliga sekundära orsaker uteslutas – tänk **”first, worst or different”**.",
    "klin": [
     "Viktiga diagnoser vid plötslig debut: **SAH**, migrän, Hortons huvudvärk, ansträngningsutlöst vaskulär huvudvärk, **akut ICP-stegring**, **meningit/encefalit**, **karotis-/vertebralisdissektion** och **sinustrombos**.",
     {
      "h": "Klinik på farlig huvudvärk"
     },
     "**Åskknallshuvudvärk** eller huvudvärk som debuterat inom minuter.",
     "Misstänkt intrakraniell tryckstegring eller process: fokalneurologi, epileptiskt anfall eller personlighetsförändring, sänkt medvetande eller staspapill, nydebuterad huvudvärk efter 50 års ålder, host-/nys-/krysthuvudvärk, kortvarig huvudvärk (minuter) eller atypisk aura.",
     "Misstänkt CNS-infektion eller systemisk inflammation: allmänpåverkan, feber, förhöjt CRP/SR, nackstyvhet, förtjockad eller öm temporalartär."
    ],
    "diag": [
     "Anamnes och status med fokus på **nackstyvhet, papillödem, feber** och neurologiska fynd.",
     "**Akut DT-hjärna** vid misstänkt SAH; LP vid kvarstående misstanke trots negativ DT.",
     "Lab: blodstatus, elektrolyter/kreatinin, CRP, SR, P-glukos, temp och urinprov."
    ],
    "hand": [
     "ABC.",
     "Övervakning tills SAH uteslutits: höjd huvudända 20–30°, RLS, pupiller, puls, BT, pulsoxymetri och EKG var 30:e min.",
     "SAH → neurokirurg; bakteriell meningit → odlingar och antibiotika inom 60 min."
    ],
    "flagg": [
     "Negativ DT utesluter inte SAH.",
     "Feber och nackstyvhet → misstänk meningit och fördröj inte behandlingen.",
     "Äldre med huvudvärk och öm temporalartär → misstänk temporalisarterit och sätt in kortison direkt."
    ],
    "ddx": [
     [
      "t9-019",
      "Subaraknoidalblödning",
      "Åskknallshuvudvärk, meningism."
     ],
     [
      "t9-080",
      "Bakteriell meningit",
      "Feber, nackstyvhet, medvetandepåverkan."
     ],
     [
      "t9-026",
      "Migrän",
      "Återkommande attacker med pulserande ensidig värk."
     ],
     [
      "t9-031",
      "Hortons huvudvärk",
      "Strikt ensidiga attacker runt ögat med tårflöde och nästäppa."
     ],
     [
      "t9-022",
      "Sinustrombos",
      "Kan ge tryckstegring med staspapill."
     ],
     [
      "t9-030",
      "Temporalisarterit",
      "Äldre, tinningömhet, hög SR/CRP."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 6, 7, 9, 10, 40"
    ]
   },
   "card": {},
   "km": [
    "neuro:20",
    "neuro:15",
    "neuro:22"
   ]
  },
  {
   "id": "t9-026",
   "name": "Migrän",
   "specialty": "Neurologi",
   "sub": "Huvudvärk",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Migrän** är en ärftlig primär huvudvärk med återkommande attacker på **4–72 h**, **med eller utan aura**; den debuterar oftast före 40 års ålder.",
    "klin": [
     "Förälder eller syskon med samma besvär hos 60–80 %; prevalens ca 15 %.",
     "Minst två av: **ensidig** (ofta sidoväxlande), **pulserande/bultande**, **måttlig–svår intensitet**, **försämring vid fysisk aktivitet**.",
     "Ofta illamående/kräkningar och ljus-/ljudkänslighet; vid svåra anfall blek, kallsvettig och luktkänslig.",
     "Ibland förkänningar (irritation, trötthet, lätta depressiva symtom); börjar ofta på morgonen med ensidig värk över ögat, i pannan eller tinningen.",
     {
      "h": "Aura (15–20 %)"
     },
     "Vanligast **flimmerskotom**: en fläck intill fixationspunkten som successivt växer halvmåneformat med blixtrande sicksacklinjer i kanten.",
     "Även halvsidiga parestesier som startar i fingrarna och sprider sig uppåt till läppar, kind och tunga.",
     "Under auran är blodflödet reducerat i bakre hjärnan kontralateralt och hypoperfusionen sprider sig långsamt (**spreading depression**); trigeminovaskulära systemet är inblandat."
    ],
    "diag": [
     "Klinisk diagnos utifrån anamnesen.",
     "**Huvudvärksdagbok** för att utvärdera behandlingen."
    ],
    "beh": [
     "Steg 1: **ASA, paracetamol, NSAID** och **metoklopramid** (Primperan) – tidigt, i hög dos, gärna som brustablett; NSAID är bra vid mensmigrän.",
     "Steg 2: **triptan** (sumatriptan 50 mg) – selektiv effekt på neurovaskulär huvudvärk.",
     "Profylax: **propranolol** (Inderal Retard 160 mg), trappas upp.",
     "Svårt akut anfall: **sumatriptan 6 mg s.c.** och **metoklopramid 20 mg** i.v./s.c./i.m. mot illamåendet; ge vätska, eftersom dehydrering bidrar till långdragna anfall."
    ],
    "hand": [
     "Sätt ut ineffektiva läkemedel efter 3 månader.",
     "Försök sätta ut även effektiva läkemedel efter 6 månader för att se om sjukdomen klingat av."
    ],
    "flagg": [
     "Ge **inte triptan under aurafasen** – vasokonstriktionen kan tillsammans med aurans hypoperfusion ge kraftig hypoperfusion i hjärnan.",
     "Huvudvärk med för migrän atypisk aura är ett varningstecken för sekundär orsak."
    ],
    "ddx": [
     [
      "t9-027",
      "Huvudvärk av spänningstyp",
      "Bilateral, tryckande, bandformad, utan illamående."
     ],
     [
      "t9-031",
      "Hortons huvudvärk",
      "Strikt ensidig, kortare attacker (15–180 min) med autonoma symtom."
     ],
     [
      "t9-028",
      "Läkemedelsutlöst huvudvärk",
      "Daglig huvudvärk vid analgetikaöverförbrukning."
     ],
     [
      "t9-016",
      "Transitorisk ischemisk attack (TIA)",
      "Plötsliga negativa fokala symtom utan successiv spridning."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 6, 7, 8"
    ]
   },
   "card": {},
   "km": [
    "neuro:21",
    "ogon:49"
   ]
  },
  {
   "id": "t9-027",
   "name": "Huvudvärk av spänningstyp",
   "specialty": "Neurologi",
   "sub": "Huvudvärk",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Huvudvärk av spänningstyp** är den vanligaste huvudvärksformen (prevalens ca 65 %) och delas in i **episodisk** och **kronisk** form.",
    "klin": [
     "Debuterar oftast mellan 15 och 50 år och är vanligare hos kvinnor.",
     "Molande, ihållande, åtstramande/tryckande värk som ett **band runt hela huvudet**; svårighetsgraden kan växla under dagen.",
     "Ofta ett psykiskt spänningstillstånd med oförmåga att slappna av i stressade situationer.",
     "Somatiskt bidragande faktorer: refraktionsfel med synbesvär, bettanomali och cervikal påverkan."
    ],
    "diag": [
     "Fördjupad anamnes kring symtom och eventuell psykisk/social bakgrund.",
     "Status: inspektion och palpation av huvud- och nackmuskulatur; leta efter tandimpressioner."
    ],
    "beh": [
     "**Lugnande besked** – många är rädda för hjärntumör.",
     "Ibland fysioterapeut, kurator eller arbetsterapeut: avslappning, KBT, stresshantering.",
     "Analgetika endast i enstaka fall.",
     "Vid frekventa besvär icke-farmakologisk behandling: biofeedback, TNS, akupunktur.",
     "I utvalda fall lågdos amitriptylin (Saroten)."
    ],
    "flagg": [
     "Analgetikaintag > 10 dagar/månad i > 3 månader kan ge [[t9-028|läkemedelsutlöst huvudvärk]].",
     "Varningstecken för sekundär huvudvärk ska uteslutas innan diagnosen ställs."
    ],
    "ddx": [
     [
      "t9-026",
      "Migrän",
      "Pulserande, ofta ensidig, med illamående och ljuskänslighet."
     ],
     [
      "t9-028",
      "Läkemedelsutlöst huvudvärk",
      "Daglig huvudvärk som förvärras över tid vid hög analgetikaanvändning."
     ],
     [
      "t9-029",
      "Sekundär (symtomatisk) huvudvärk",
      "Varningstecken som feber, fokalneurologi eller morgonhuvudvärk med kräkning."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 6, 8, 9"
    ]
   },
   "card": {},
   "km": [
    "neuro:21",
    "ogon:55"
   ]
  },
  {
   "id": "t9-028",
   "name": "Läkemedelsutlöst huvudvärk",
   "specialty": "Neurologi",
   "sub": "Huvudvärk",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Läkemedelsutlöst huvudvärk** är daglig eller nästan daglig huvudvärk vid **analgetikaintag > 10 dagar/månad i > 3 månader**. Den har förvärrats över tid och förbättras när läkemedlet sätts ut.",
    "klin": [
     "Daglig eller nästan daglig huvudvärk.",
     "Huvudvärken har förvärrats gradvis.",
     "Varningssymtom: patienten måste gå upp på natten för att ta läkemedel."
    ],
    "diag": [
     "Anamnes om läkemedelsförbrukning – överförbrukning/biverkan ingår i varje huvudvärksanamnes.",
     "Diagnosen bekräftas av att huvudvärken förbättras efter utsättning."
    ],
    "beh": [
     "Läkemedlen **måste seponeras**.",
     "Understödjande behandling med **amitriptylin** eller **naproxen**, tillsammans med **metoklopramid** (Primperan) mot illamående."
    ],
    "flagg": [
     "Fråga alltid om analgetikaanvändning hos patienter med kronisk huvudvärk.",
     "Besvären blir bättre först efter utsättning – informera patienten."
    ],
    "ddx": [
     [
      "t9-026",
      "Migrän",
      "Avgränsade attacker 4–72 h."
     ],
     [
      "t9-027",
      "Huvudvärk av spänningstyp",
      "Bandformad tryckande värk; kan övergå i läkemedelsutlöst vid överförbrukning."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 6, 9"
    ]
   },
   "card": {},
   "km": [
    "neuro:21"
   ]
  },
  {
   "id": "t9-029",
   "name": "Sekundär (symtomatisk) huvudvärk",
   "specialty": "Neurologi",
   "sub": "Huvudvärk",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Sekundär (symtomatisk) huvudvärk** orsakas av en bakomliggande sjukdom – t.ex. infektion, blödning, tumör eller kärlmissbildning – till skillnad från primär huvudvärk där sådan saknas.",
    "klin": [
     {
      "tbl": [
       [
        "Orsak",
        "Typisk huvudvärk enligt källan"
       ],
       [
        "Meningit/meningoencefalit",
        "Bilateral, dov, molande och sprängande, förvärras av huvudrörelser; ljus-/ljudskygghet, illamående/kräkning, meningism"
       ],
       [
        "SAH",
        "Åskknall, intensiv, skärande/sprängande; meningism, motorisk oro eller medvetslöshet"
       ],
       [
        "Postpunktionell",
        "Dov/molande, bakhuvud eller hela huvudet; värre i upprätt, bättre i liggande"
       ],
       [
        "Intrakraniell expansivitet",
        "Intermittent, värst efternatt/morgon, dov och tryckande, ofta bilateral; värre vid host/nysning/ansträngning; illamående och kräkning"
       ],
       [
        "Temporalisarterit",
        "Äldre; tinning- och hårbottenömhet, tuggclaudicatio, förhöjd SR/CRP"
       ]
      ]
     },
     "Smärtkänsliga strukturer: n. trigeminus innerverar intrakraniella artärer och supratentoriell dura; n. glossopharyngeus, n. vagus och de tre övre cervikalrötterna innerverar infratentoriell dura. Inflammation, dilatation, förskjutning eller dragning av kärl kan utlösa huvudvärk."
    ],
    "diag": [
     "Leta efter varningstecken: åskknallsdebut, fokalneurologi, epileptiskt anfall, personlighetsförändring, sänkt medvetande, staspapill, debut efter 50 år, host-/krysthuvudvärk, feber, nackstyvhet och öm temporalartär.",
     "Lab (blodstatus, CRP, SR m.m.) och DT vid misstanke; LP vid misstänkt infektion eller SAH med negativ DT."
    ],
    "hand": [
     "Behandla grundorsaken: SAH → neurokirurg; meningit → antibiotika; temporalisarterit → kortison direkt.",
     "Postpunktionell huvudvärk går i regel över inom några dagar; koffein eller blood patch kan hjälpa."
    ],
    "flagg": [
     "Morgonhuvudvärk med kräkning som förvärras vid hostning talar för intrakraniell expansivitet.",
     "Nydebuterad huvudvärk efter 50 års ålder ska utredas."
    ],
    "ddx": [
     [
      "t9-019",
      "Subaraknoidalblödning",
      "Åskknallshuvudvärk."
     ],
     [
      "t9-080",
      "Bakteriell meningit",
      "Feber, nackstyvhet."
     ],
     [
      "t9-007",
      "Huvudvärk efter lumbalpunktion",
      "Lägesberoende efter LP."
     ],
     [
      "t9-077",
      "Primära tumörer som engagerar nervsystemet",
      "Tryckrelaterad huvudvärk med illamående och staspapill."
     ],
     [
      "t9-030",
      "Temporalisarterit",
      "Äldre med hög SR/CRP."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 4, 6, 9, 10, 37, 40"
    ]
   },
   "card": {},
   "km": [
    "neuro:22"
   ]
  },
  {
   "id": "t9-030",
   "name": "Temporalisarterit",
   "specialty": "Neurologi",
   "sub": "Huvudvärk",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Temporalisarterit (jättecellsarterit)** är en granulomatös, nekrotiserande arterit i stora och medelstora kärl, ofta a. temporalis och a. ophthalmica. Den drabbar patienter **> 60 år** och är associerad med **polymyalgia rheumatica (PMR)**.",
    "klin": [
     "Huvudvärk, ömhet över tinning och hjässa (hårbottenömhet) och **tuggclaudicatio**.",
     "Allmänsymtom: trötthet, avmagring, feber, dålig aptit och proximal muskelvärk.",
     "Allvarligast är **ögonsymtomen**: plötslig synnedsättning vid arteritisk AION, central-/grenartärocklusion, amaurosis fugax och ögonmuskelpareser (oftast pupillsparande okulomotoriuspares).",
     "Ögonstatus: blek, svullen papill med små blödningar i kanten; afferent pupilldefekt på det drabbade ögat."
    ],
    "diag": [
     "**SR och CRP**.",
     "Palpera temporalisartären; **temporalisbiopsi**.",
     "Visus, swinging flashlight-test och oftalmoskopi."
    ],
    "beh": [
     "Misstanke kräver att **kortison sätts in direkt**.",
     "Neurologikompendiet: start med 60–80 mg och titrering till lägsta möjliga dos. Ögonboken: prednisolon 1 mg/kg innan patienten skickas vidare; iv steroider följt av peroral nedtrappning."
    ],
    "hand": [
     "Akut remiss till neurolog, reumatolog eller medicinakut – från vårdcentral inte till ögonklinik.",
     "Uppföljning hos ögonläkare (ögonsjukdomen) och reumatolog (arteriten)."
    ],
    "flagg": [
     "Behandlingen syftar till att **rädda synen på andra ögat** – det drabbade ögats syn är redan förlorad.",
     "Vänta inte med kortison till biopsisvar.",
     "Tänk på temporalisarterit (ta SR och CRP) vid amaurosis fugax, AION och kranialnervspareser hos äldre."
    ],
    "ddx": [
     [
      "",
      "Icke-arteritisk AION",
      "Kärlriskfaktorer, normal SR/CRP; ingen behandling finns."
     ],
     [
      "t9-016",
      "Transitorisk ischemisk attack (TIA)",
      "Amaurosis fugax kan vara TIA – men temporalisarterit ska alltid övervägas."
     ],
     [
      "",
      "Optikusneurit",
      "Yngre patient, smärta vid ögonrörelser."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 10",
     "Ögonboken – sammanfattning (T9), s. 19, 20, 22, 23, 26"
    ]
   },
   "card": {},
   "km": [
    "neuro:23",
    "ogon:26"
   ]
  },
  {
   "id": "t9-031",
   "name": "Hortons huvudvärk",
   "specialty": "Neurologi",
   "sub": "Huvudvärk",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Hortons huvudvärk** är en primär huvudvärk med **strikt ensidiga**, mycket intensiva smärtattacker bakom eller runt ena ögat, som kommer i **perioder**. Prevalensen är ca 0,1 %.",
    "klin": [
     "Attacker som varar **15–180 minuter**, från varannan dag till **8 per dygn**.",
     "Perioder som vanligen varar 2 veckor–3 månader och oftast återkommer årligen eller vartannat år.",
     "Attackerna kommer något oftare nattetid, ofta vid samma tid varje natt.",
     "Smärtan håller sig till samma huvudhalva under hela perioden; den är skärande/sprängande och kan spridas till tinning, käke, näsa, haka eller tänder.",
     "På smärtsidan under attack: tårflöde och/eller röd ögonvita, ibland hängande ögonlock och mindre pupill, nästäppa eller näsdropp.",
     "Attacker kan utlösas av **alkohol och nitroglycerin**.",
     "Det trigeminovaskulära systemet är inblandat i patofysiologin."
    ],
    "diag": [
     "I huvudvärksanamnesen talar strikt ensidig, skärande/sprängande smärta för Hortons."
    ],
    "flagg": [
     "Hortons ingår bland differentialdiagnoserna vid plötslig huvudvärk – farliga orsaker måste uteslutas.",
     "Ptos och mindre pupill under attack kan likna Horners syndrom, som också ses vid karotisdissektion."
    ],
    "ddx": [
     [
      "t9-026",
      "Migrän",
      "Längre attacker (4–72 h), sidoväxlande, illamående."
     ],
     [
      "t9-032",
      "Trigeminusneuralgi",
      "Sekundkorta elektriska attacker som utlöses från triggerzon."
     ],
     [
      "t9-023",
      "Arteriell dissektion",
      "Akut ensidig huvudvärk med Horners syndrom."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 6, 7, 10"
    ]
   },
   "card": {},
   "km": [
    "neuro:23"
   ]
  },
  {
   "id": "t9-032",
   "name": "Trigeminusneuralgi",
   "specialty": "Neurologi",
   "sub": "Huvudvärk",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Trigeminusneuralgi** ger korta, mycket intensiva, **”elektriska”** smärtattacker inom trigeminusområdet, vanligen ensidigt och oftast i 2:a grenen.",
    "klin": [
     "Attacker som varar från delar av en sekund till 2 minuter och kommer åtskilliga gånger per dygn.",
     "Besvärsperioder på veckor–månader som kan återkomma efter ett halvår till några år.",
     "Vanligen ensidig och skiftar aldrig sida; börjar oftast i **2:a trigeminusgrenen**, ibland spridning till 3:e.",
     "Utlöses av beröring, tryck, vibration, kyla och ibland värme mot en avgränsad **triggerzon** i hud eller slemhinna.",
     "Neurologstatus är normalt vid den idiopatiska formen."
    ],
    "diag": [
     "Diagnosen bygger på den typiska kliniska bilden och normalt neurologstatus.",
     "Trigeminusneuralgi är den klassiska neurogena smärtan vid **MS**."
    ],
    "beh": [
     "Vid MS behandlas kortvariga paroxysmala symtom som trigeminusneuralgi med **karbamazepin** (lägre dos än vid epilepsi)."
    ],
    "flagg": [
     "Neurologiska bortfall passar inte med idiopatisk trigeminusneuralgi – tänk på sekundär orsak, t.ex. MS."
    ],
    "ddx": [
     [
      "t9-031",
      "Hortons huvudvärk",
      "Längre attacker (15–180 min) runt ögat med autonoma symtom."
     ],
     [
      "t9-068",
      "Multipel skleros, symtom och diagnostik",
      "Kan ge sekundär trigeminusneuralgi."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 10, 26, 27"
    ]
   },
   "card": {},
   "km": [
    "neuro:23"
   ]
  },
  {
   "id": "t9-033",
   "name": "Akut handläggning av epileptiskt anfall",
   "specialty": "Neurologi",
   "sub": "Epilepsi",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid ett **epileptiskt anfall** skyddas patienten mot skada tills anfallet upphör. Anfall som varar **> 5 minuter** och **första anfallet** ska leda till sjukhusbesök.",
    "klin": [
     {
      "h": "Generaliserat tonisk-kloniskt anfall (grand mal)"
     },
     "Tonisk fas (sträckkramp) i regel 15–30 s (< 60 s), sedan symmetriska ryckningar (klonus) i några minuter och därefter medvetslöshet en tid.",
     "Svettning, urin- och avföringsavgång och tungbett kan förekomma.",
     {
      "h": "Fokala anfall"
     },
     "Oftast 1–3 min; motoriska, sensoriska (parestesier, syn-, hörsel-, lukt-, smakfenomen), autonoma, kognitiva, affektiva och psykomotoriska symtom.",
     "Enkla fokala anfall är utan, komplexa med medvetandepåverkan; Jacksonanfall sprider sig från t.ex. en hand till hela kroppshalvan."
    ],
    "diag": [
     "**Vittnesbeskrivning** av anfallet; tidigare sjukdom och provocerande faktorer (alkohol, sömnbrist, feber/infektion).",
     "Nervstatus, hjärta, BT, EKG och hudinspektion.",
     "Rutinprover: blodstatus, elektrolyter, B-glukos, CRP, temp och urinsticka. **Prolaktin** stiger kraftigt vid grand mal och klingar av inom 30–60 min – prov tidigt och efter 2 h skiljer mot psykogena anfall.",
     "Akut DT-hjärna om patienten är påverkad eller har fokalneurologi."
    ],
    "beh": [
     "Undvik att patienten slår sig: mjukt under huvudet, lossa runt halsen.",
     "Lägg patienten i **framstupa sidoläge** när det går.",
     "Kramper eller medvetslöshet vid ankomst till sjukhus → behandla som [[t9-034|status epilepticus]]."
    ],
    "hand": [
     "I princip läggs alla in för utredning och observation – stor risk för nytt anfall inom ett dygn.",
     "Totalt **körförbud** åtminstone tills utredningen är klar.",
     "Vid känd epilepsi individuell handläggning; ta koncentration av antiepileptika.",
     "Fortsatt utredning – se [[t9-035|nydebuterad epilepsi]]."
    ],
    "flagg": [
     "Anfall > 5 min utan förbättring → ambulans och sjukhus.",
     "Profylax sätts inte in efter första anfallet.",
     "Kontrollera blodsocker – hypoglykemi är en utlösande faktor som ska korrigeras."
    ],
    "ddx": [
     [
      "",
      "Psykogena icke-epileptiska anfall",
      "Ingen prolaktinstegring efter anfallet."
     ],
     [
      "t9-074",
      "Transitorisk global amnesi",
      "Isolerad minnesstörning i timmar; fokalt anfall är differentialdiagnos."
     ],
     [
      "t9-034",
      "Status epilepticus",
      "Anfall som inte upphör eller upprepas utan återhämtning."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 11, 12, 13"
    ]
   },
   "card": {},
   "km": [
    "neuro:24"
   ]
  },
  {
   "id": "t9-034",
   "name": "Status epilepticus",
   "specialty": "Neurologi",
   "sub": "Epilepsi",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Status epilepticus** definieras traditionellt som anfall **≥ 30 min** eller upprepade kortare anfall utan fullständig återhämtning emellan. Statistiskt är sannolikheten för spontant upphörande låg redan efter **ca 5 min**, och fysiologiskt börjar syrebrist i kortex efter 20 min.",
    "klin": [
     "Pågående kramper eller medvetslöshet vid ankomst till sjukhus behandlas enligt status epilepticus-schemat.",
     "Status epilepticus ingår i HUSK-MIDAS vid oklar vakenhetssänkning – tänk på icke-konvulsivt status."
    ],
    "diag": [
     "Prover helst innan läkemedel ges: CRP, SR, blodstatus med diff, B-glukos, elektrolyter/kreatinin, ev. blodgas.",
     "EEG vid misstanke på pågående anfallsaktivitet hos medvetandesänkt patient."
    ],
    "beh": [
     "**ABCDE**: O2 7–10 l/min, EKG, pulsoxymeter, BT, nål; påbörja infusion NaCl 100 ml/h.",
     "Korrigera utlösande faktorer: hypoglykemi → **50 ml 30 % glukos i.v.**; alkoholmissbruk → **tiamin i.m.** (Neurobion 3 ml).",
     "**Lorazepam 4 mg i.v.** (1–2 mg/min); utebliven effekt inom 5 min → ytterligare 2–4 mg.",
     "Saknas lorazepam: **diazepam 10–20 mg i.v.**, alltid kombinerat med fosfenytoin, eftersom diazepam har kortare duration och anfallet kan komma tillbaka efter 5–10 min.",
     "Fortsatt anfall: **fosfenytoin 20 mg/kg** i.v., 100–150 mg/min; vid fortsatt anfall ytterligare 5 mg/kg. Kontrollera koncentrationen efter ca 2 h.",
     "Fortsatt anfall trots optimal behandling eller anfall > 60 min → kontakta **IVA** för propofolnarkos."
    ],
    "hand": [
     "Utredning av orsak och fortsatt antiepileptisk behandling enligt [[t9-035|nydebuterad epilepsi]] respektive känd epilepsi."
    ],
    "flagg": [
     "Hög dos eller snabb infusion av fosfenytoin kan ge **bradykardi, BT-fall och andningsdepression**.",
     "Diazepam ensamt ger risk för återfall – kombinera med fosfenytoin.",
     "Glöm inte glukos och tiamin vid hypoglykemi respektive alkoholmissbruk."
    ],
    "ddx": [
     [
      "t9-033",
      "Akut handläggning av epileptiskt anfall",
      "Enstaka anfall som upphör spontant."
     ],
     [
      "t9-052",
      "Vakenhetssänkning och medvetslöshet, initial handläggning",
      "Status epilepticus ingår i den etiologiska genomgången."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 12, 13, 20"
    ]
   },
   "card": {},
   "km": [
    "neuro:25"
   ]
  },
  {
   "id": "t9-035",
   "name": "Nydebuterad epilepsi",
   "specialty": "Neurologi",
   "sub": "Epilepsi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Epilepsi** innebär oprovocerade, upprepade anfall – **två oprovocerade anfall** krävs för diagnos. Prevalensen är 0,6–0,7 %.",
    "klin": [
     "Provocerade anfall har högre mortalitet men bättre anfallsprognos på sikt; vid oprovocerade anfall är fortsatta anfall betydligt vanligare.",
     {
      "h": "Generaliserad epilepsi"
     },
     "Okänd etiologi, generaliserad EEG-bild och anfallsbild: tonisk-kloniska anfall, **absenser** (2–15 s total medvetandeförlust, debut 3–5 år, 3/s-mönster) och **myoklona anfall** (juvenil myoklon epilepsi, debut ca 15 år, ryckningar i armarna, samband med sömnbrist, god prognos med behandling).",
     {
      "h": "Fokal epilepsi"
     },
     "2/3 av alla med epilepsi och 3/4 av vuxna som insjuknar. Vuxna som debuterar med grand mal antas ha fokal epilepsi med sekundär spridning tills motsatsen bevisats."
    ],
    "diag": [
     "Primärvård/akutmottagning: anamnes med vittnesbeskrivning och provocerande faktorer, nervstatus, hjärta/BT/EKG, hudinspektion, rutinprover (± prolaktin), remiss till neurolog eller medicin.",
     "Neurolog: **EEG** (normalt → upprepa efter sömndeprivation), **MR** helst på alla inom ca 1 v (ej akut) och labpaket för ovanliga metabola orsaker."
    ],
    "beh": [
     "Profylax sätts **inte in efter första anfallet**.",
     {
      "tbl": [
       [
        "Anfallstyp",
        "1:a hand",
        "2:a hand"
       ],
       [
        "Primärgeneraliserad",
        "Valproat",
        "Lamotrigin m.fl."
       ],
       [
        "Fokala anfall",
        "Karbamazepin",
        "Valproat"
       ],
       [
        "Absenser",
        "Etosuximid",
        "Valproat"
       ]
      ]
     },
     "Eftersträva monoterapi i lägsta dos som ger anfallsfrihet, styrd av koncentrationsbestämning. Vid utebliven effekt byt i första hand preparat, lägg till först om fortsatt utan effekt. Ca 70 % blir anfallsfria.",
     "**Epilepsikirurgi** (oftast främre temporallobsresektion) vid svår läkemedelsresistent epilepsi med identifierbart fokus."
    ],
    "hand": [
     "**Körkort** grupp B: 1 anfall → 6 månaders körförbud; 2 anfall (epilepsidiagnos) → 12 månaders anfallsfrihet krävs. Yrkesförare: 1 anfall → 5 år, 2 anfall → 10 år.",
     "Utsättningsförsök: barn efter 2 års anfallsfrihet (2/3 utan återfall), vuxna efter 5 år (50 % utan återfall).",
     "Planera graviditet, fortsätt medicineringen under graviditeten och eftersträva monoterapi.",
     "Depression är vanlig – SSRI är bättre än TCA."
    ],
    "flagg": [
     "Undvik valproat till flickor och kvinnor i fertil ålder (risk för fosterskador, bl.a. myelomeningocele).",
     "Totalt körförbud åtminstone tills utredningen är klar.",
     "Ett normalt EEG utesluter inte epilepsi."
    ],
    "ddx": [
     [
      "t9-036",
      "Läkemedelsbehandling och uppföljning av epilepsi",
      "Fortsatt farmakologisk behandling."
     ],
     [
      "t9-037",
      "Epilepsi hos fertila kvinnor",
      "Läkemedelsval och graviditet."
     ],
     [
      "t9-038",
      "Epilepsi och körkort",
      "Regler för körförbud."
     ],
     [
      "t9-074",
      "Transitorisk global amnesi",
      "Fokalt anfall är differentialdiagnos; anfallets duration skiljer."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 11, 12, 13"
    ]
   },
   "card": {},
   "km": [
    "neuro:26"
   ]
  },
  {
   "id": "t9-036",
   "name": "Läkemedelsbehandling och uppföljning av epilepsi",
   "specialty": "Neurologi",
   "sub": "Epilepsi",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Antiepileptisk **profylax** väljs efter anfallstyp (fokal resp. primärgeneraliserad epilepsi) och ges som **monoterapi** i lägsta dos som ger anfallsfrihet, styrd med **koncentrationsbestämning**. Med rätt behandling blir ca **70 %** anfallsfria.",
    "klin": [
     {
      "h": "Indikation"
     },
     "Profylax sätts **inte** in efter ett första anfall – diagnosen epilepsi kräver två oprovocerade anfall.",
     {
      "h": "Läkemedelsval enligt källan"
     },
     {
      "tbl": [
       [
        "Anfallstyp",
        "1:a hand",
        "2:a hand"
       ],
       [
        "Fokala anfall",
        "Karbamazepin (t.ex. Tegretol)",
        "Valproat"
       ],
       [
        "Primärgeneraliserad epilepsi",
        "Valproat (t.ex. Ergenyl)",
        "T.ex. lamotrigin"
       ],
       [
        "Absenser",
        "Etosuximid",
        "Valproat"
       ]
      ]
     },
     "Vuxna som insjuknar med generaliserade tonisk-kloniska anfall antas ha fokal epilepsi med sekundär spridning tills motsatsen är visad – relevant för läkemedelsvalet."
    ],
    "diag": [
     "Dosen ställs in inom **terapeutiskt intervall** med hjälp av blodprov (koncentration).",
     "Vid känd epilepsi och nytt anfall: ta **koncentration** av antiepileptika.",
     "Utvärdera effekt mot målet anfallsfrihet med lägsta möjliga dos."
    ],
    "beh": [
     "Fungerar inte första preparatet: **byt** i första hand till annat läkemedel (fortsatt monoterapi).",
     "Fortsatt utebliven effekt: **lägg till** ett andra läkemedel.",
     "Undvik **valproat** till kvinnor i fertil ålder som planerar graviditet (risk för myelomeningocele)."
    ],
    "hand": [
     {
      "h": "Utsättningsförsök"
     },
     "**Barn:** efter 2 års anfallsfrihet – ca 2/3 får inte återfall.",
     "**Vuxna:** efter 5 års anfallsfrihet – ca 50 % får inte återfall.",
     {
      "h": "Vid otillräcklig effekt"
     },
     "Svår epilepsi utan effekt av läkemedel och med identifierbart fokus kan bli aktuell för **epilepsikirurgi** (oftast främre temporallobsresektion), se [[t9-040|svårbehandlad epilepsi]].",
     "Vid samtidig depression är **SSRI** lämpligare än TCA (TCA ger EEG-förändringar)."
    ],
    "flagg": [
     "Starta inte profylax efter första anfallet.",
     "Valproat till fertila kvinnor som planerar graviditet – risk för fosterskada (myelomeningocele).",
     "Okontrollerade anfall under graviditet är farligare för mor och foster än läkemedlen – sätt inte ut, se [[t9-037|epilepsi hos fertila kvinnor]].",
     "Kom ihåg körkortsreglerna, se [[t9-038|epilepsi och körkort]]."
    ],
    "ddx": [
     [
      "t9-035",
      "Nydebuterad epilepsi",
      "Utredning av första anfallet; profylax sätts ännu inte in."
     ],
     [
      "t9-034",
      "Status epilepticus",
      "Akut anfallsbrytning med bensodiazepin och fosfenytoin, inte långtidsprofylax."
     ],
     [
      "t9-040",
      "Ökad anfallsfrekvens och svårbehandlad epilepsi",
      "Byte/tillägg av läkemedel och ev. epilepsikirurgi."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 11–13"
    ]
   },
   "card": {},
   "km": [
    "neuro:27"
   ]
  },
  {
   "id": "t9-037",
   "name": "Epilepsi hos fertila kvinnor",
   "specialty": "Neurologi",
   "sub": "Epilepsi",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Epilepsi hos kvinnor i fertil ålder kräver **planerad graviditet** och genomtänkt läkemedelsval. Antiepileptika ger **2–3 gånger ökad risk för fosterskador**, men **okontrollerade anfall** är farligare för både mor och foster – läkemedlen ska inte sättas ut.",
    "klin": [
     "Grundsjukdomen **försämras i regel inte** av graviditet.",
     "**Ökad anfallsrisk i samband med förlossningen.**",
     "Antiepileptika kan ge **rubbade menstruationer**, vilket kan göra det svårare att bli gravid."
    ],
    "diag": [
     "Planera graviditeten i förväg: gå igenom vilka läkemedel som är lämpliga och vilka patienten har god effekt av."
    ],
    "beh": [
     "Eftersträva **monoterapi**.",
     "Undvik valproat till flickor och kvinnor i fertil ålder (risk för fosterskador, bl.a. myelomeningocele).",
     "Vid menstruationsrubbning orsakad av läkemedlet: **byt läkemedel**."
    ],
    "hand": [
     "Patienten ska **inte sluta** med sina antiepileptika vid graviditet.",
     "Avvägning: risken för fosterskada av läkemedel är mindre än risken med okontrollerade anfall.",
     "Fortsatt behandling enligt principerna för [[t9-036|läkemedelsbehandling av epilepsi]]: lägsta dos som ger anfallsfrihet, koncentrationsstyrd."
    ],
    "flagg": [
     "Undvik valproat till flickor och kvinnor i fertil ålder (risk för fosterskador, bl.a. myelomeningocele).",
     "Utsättning av antiepileptika vid graviditet – okontrollerade anfall är farligast.",
     "Ökad anfallsrisk vid förlossning."
    ],
    "ddx": [
     [
      "t9-036",
      "Läkemedelsbehandling och uppföljning av epilepsi",
      "Allmänna principer för val och uppföljning av antiepileptika."
     ],
     [
      "t9-039",
      "Psykosociala konsekvenser av epilepsi",
      "Andra särskilda problem vid epilepsi."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 12–13"
    ]
   },
   "card": {},
   "km": [
    "neuro:28"
   ]
  },
  {
   "id": "t9-038",
   "name": "Epilepsi och körkort",
   "specialty": "Neurologi",
   "sub": "Epilepsi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Epileptiska anfall medför **körförbud** under en bestämd tid efter senaste anfallet. Kraven är betydligt strängare för **yrkeschaufförer** än för B-körkort, och efter ett första anfall gäller **totalt körförbud** åtminstone tills utredningen är klar.",
    "klin": [
     {
      "tbl": [
       [
        "Situation",
        "B-körkort",
        "Yrkeschaufförer"
       ],
       [
        "1 anfall",
        "6 månaders körförbud",
        "5 års körförbud"
       ],
       [
        "2 anfall (= epilepsidiagnos)",
        "12 månaders anfallsfrihet krävs innan förbudet hävs",
        "10 års körförbud"
       ]
      ]
     }
    ],
    "diag": [
     "Två oprovocerade anfall krävs för diagnosen epilepsi; det styr vilken spärrtid som gäller.",
     "Ta noggrann anamnes om anfallen (gärna från vittne) – avgör anfallsantal och provokation."
    ],
    "beh": [
     "Informera om körförbudet redan vid **första anfallet**: totalt körförbud tills utredningen är klar."
    ],
    "hand": [
     "Körförbudet är **psykosocialt påfrestande** för många patienter, se [[t9-039|psykosociala konsekvenser]].",
     "Närliggande körkortsregler i kompendiet: **6 månaders körförbud** efter subaraknoidalblödning; patient med **dåligt reglerad narkolepsi** får inte inneha körkort."
    ],
    "flagg": [
     "Glöm inte körförbud vid första anfallet – gäller till utredningen är färdig.",
     "Yrkeschaufförer har mycket längre spärrtider (5 resp. 10 år).",
     "Andra tillstånd med vakenhetsstörning (t.ex. narkolepsi) påverkar också körlämplighet."
    ],
    "ddx": [
     [
      "t9-035",
      "Nydebuterad epilepsi",
      "Utredning av första anfallet; körförbud gäller under utredningen."
     ],
     [
      "t9-057",
      "Narkolepsi",
      "Dåligt reglerad narkolepsi utesluter körkort."
     ],
     [
      "t9-125",
      "Anmälningsskyldighet gällande körkort och vapeninnehav",
      "Läkarens skyldigheter kring körkort (psykiatrin)."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 4, 12–13, 22"
    ]
   },
   "card": {},
   "km": [
    "neuro:28",
    "psyk:23"
   ]
  },
  {
   "id": "t9-039",
   "name": "Psykosociala konsekvenser av epilepsi",
   "specialty": "Neurologi",
   "sub": "Epilepsi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Epilepsi påverkar livet utöver anfallen: **depression** är vanligt förekommande och sjukdomens **nyckfullhet**, **körförbud** och **omgivningens attityder** är påfrestande.",
    "klin": [
     "**Depression** förekommer vid epilepsi.",
     "**Rädsla för anfall** till följd av sjukdomens oförutsägbarhet.",
     "**Bilkörningsförbud** upplevs påfrestande, se [[t9-038|epilepsi och körkort]].",
     "Påfrestande **attityder hos omgivningen**."
    ],
    "diag": [
     "Fråga aktivt efter nedstämdhet och rädsla för anfall vid uppföljning."
    ],
    "beh": [
     "Vid depression: **SSRI** är bättre än **TCA** (TCA ger EEG-förändringar och är olämpliga)."
    ],
    "hand": [
     "Informera tidigt om körkortsregler och om sjukdomen för att minska oro.",
     "Hos kvinnor i fertil ålder: planera graviditet, se [[t9-037|epilepsi hos fertila kvinnor]]."
    ],
    "flagg": [
     "Missa inte depression hos patienter med epilepsi.",
     "Välj inte TCA som antidepressivt läkemedel vid epilepsi."
    ],
    "ddx": [
     [
      "t9-038",
      "Epilepsi och körkort",
      "Körförbud är en av de största psykosociala belastningarna."
     ],
     [
      "t9-037",
      "Epilepsi hos fertila kvinnor",
      "Annat särskilt problem vid epilepsi."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 13"
    ]
   },
   "card": {},
   "km": [
    "neuro:28"
   ]
  },
  {
   "id": "t9-040",
   "name": "Ökad anfallsfrekvens och svårbehandlad epilepsi",
   "specialty": "Neurologi",
   "sub": "Epilepsi",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid **ökad anfallsfrekvens** eller **svårbehandlad epilepsi** kontrolleras läkemedelskoncentration och provocerande faktorer; därefter **byte** och vid behov **tillägg** av antiepileptika, och vid svår epilepsi med identifierbart fokus övervägs **epilepsikirurgi**.",
    "klin": [
     {
      "h": "Tänk på provocerande faktorer"
     },
     "**Alkohol**, **sömnbrist** och **feber/infektion**.",
     {
      "h": "Läkemedelsstrategi"
     },
     "Utebliven effekt: **byt** i första hand till annat läkemedel – sträva efter monoterapi.",
     "Fortsatt utan effekt: **lägg till** ytterligare ett läkemedel.",
     "Rätt behandlad blir ca **70 %** anfallsfria – övriga räknas som svårbehandlade."
    ],
    "diag": [
     "Ta **koncentration** av patientens antiepileptika (ska ligga inom terapeutiskt intervall).",
     "Vid nya anfallsmönster eller påverkad patient: utred som nytt anfall (nervstatus, prover, EEG, neuroradiologi; akut DT vid påverkan eller fokalneurologi)."
    ],
    "beh": [
     "**Epilepsikirurgi:** vid svår epilepsi utan effekt av läkemedel och med identifierbart, borttagbart fokus – oftast **främre temporallobsresektion**."
    ],
    "hand": [
     "Anfall >5 min eller upprepade anfall utan återhämtning: hantera som [[t9-034|status epilepticus]].",
     "Fortsatt uppföljning och utsättningsprinciper: se [[t9-036|läkemedelsbehandling av epilepsi]]."
    ],
    "flagg": [
     "Kontrollera koncentration innan läkemedlet bedöms som verkningslöst.",
     "Glöm inte alkohol, sömnbrist och infektion som orsak till ökad anfallsfrekvens.",
     "Anfall som inte upphör inom 5 min – behandla som status epilepticus."
    ],
    "ddx": [
     [
      "t9-034",
      "Status epilepticus",
      "Anfall utan återhämtning – akut anfallsbrytning."
     ],
     [
      "t9-036",
      "Läkemedelsbehandling och uppföljning av epilepsi",
      "Grundprinciperna för val och dosering."
     ],
     [
      "t9-033",
      "Akut handläggning av epileptiskt anfall",
      "Omhändertagande av det enskilda anfallet."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 12–13"
    ]
   },
   "card": {},
   "km": [
    "neuro:29"
   ]
  },
  {
   "id": "t9-041",
   "name": "Skalltrauma",
   "specialty": "Neurologi",
   "sub": "Neurotrauma",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Skalltrauma** är vanligaste orsaken till död och invaliditet hos personer <40 år. **Oro/konfusion** och framför allt **medvetandesänkning** är kardinalsymtom vid allvarligt skalltrauma; handläggningen styrs av anamnes och **medvetandegrad (RLS/GCS)**.",
    "klin": [
     {
      "h": "Tidsfördelning av dödsfall"
     },
     "Ca 50 % inom 30 min (hjärnstam, hjärna, hjärta, stora kärl); ca 30 % inom 4 h (SDH, EDH, pneumo-/hemothorax, blödning, syresättning – här finns många att rädda); ca 20 % inom veckor (organsvikt, sepsis).",
     {
      "h": "Skadepanorama"
     },
     "**Commotio** (kort medvetslöshet, ev. amnesi), **kontusion** (oftast frontotemporalt, kan expandera under timmar–dygn), **DAI** (DT kan vara normal, MR bättre).",
     "**Epiduralhematom:** yngre, ofta temporalbensfraktur med skada på a. meningea media; klassiskt fritt intervall och sedan försämring (”talk and die”) – bara hos ca 1/3.",
     "**Akut subduralhematom:** bryggvensavslitning eller arteriellt, inom 3 d; medvetandesänkt patient som försämras ytterligare; hög mortalitet.",
     "**Skallbasfraktur:** likvorré, blödning ur öra, hematotympanon, brillenhematom, Battle sign, facialispares, nystagmus, hörselnedsättning."
    ],
    "diag": [
     {
      "tbl": [
       [
        "Grad",
        "Fynd",
        "Åtgärd"
       ],
       [
        "Minimal (RLS 1/GCS 15)",
        "Ingen medvetandeförlust, normalt nervstatus",
        "Hem med skriftlig information"
       ],
       [
        "Lätt (RLS 1–2/GCS 14–15)",
        "Hjärnskakning, medvetandeförlust <5 min",
        "DT hjärna + nervstatus; utan anmärkning hem med skriftlig information"
       ],
       [
        "Medelsvår (RLS 3/GCS 9–13)",
        "Även medvetslöshet >5 min eller neurologiska bortfall",
        "DT, inläggning och övervakning, undvik sedering; ny DT om oförändrat efter 6–12 h"
       ],
       [
        "Svår (RLS 4–8)",
        "Även de som vaknat och sedan sjunkit tillbaka",
        "Övervakning på neurokirurgisk enhet"
       ]
      ]
     }
    ],
    "beh": [
     "Svår skallskada: **ABCDE** → provtagning → **DT hjärna** → vid behov sedering, muskelrelaxation och smärtlindring → **normotermi, normoglykemi, normala elektrolyter**.",
     "Vid **hotande inklämning**: hyperventilera, ge **200–300 ml mannitol**, överväg intubation inför transport. **Inte Betapred.**",
     "Blödande skallsår: bedöva huden (akta hjärnan vid fraktur), spola rikligt med NaCl, ta bort lösa benbitar men lämna fastsittande, sy i galea."
    ],
    "hand": [
     "**Övervakning:** RLS/GCS, pupillreaktion, motorik, BT, puls, andningsfrekvens – var 15:e min första 2 h, var 30:e min följande 2 h, därefter 1 gång/h i minst 12 h.",
     {
      "h": "Före transport"
     },
     "Kontakta mottagande enhet; två grova infarter med vätska; ta ställning till intubation och om du måste följa med (risk för försämring); höjd huvudända; Neurobion; antibiotika.",
     "Commotio: observation minst 12 h."
    ],
    "flagg": [
     "Fritt intervall följt av försämring – epiduralhematom (”talk and die”).",
     "Sjunkande medvetande, ensidigt vidgad ljusstel pupill – hotande inklämning, se [[t9-045|inklämning]].",
     "Kroniskt subduralhematom kan debutera veckor–månader efter banalt trauma, se [[t9-046|kroniskt SDH]].",
     "Ge inte Betapred vid skalltrauma."
    ],
    "ddx": [
     [
      "t9-046",
      "Kroniskt subduralhematom",
      "Debut veckor–månader efter ett ofta banalt trauma, tilltagande huvudvärk/konfusion."
     ],
     [
      "t9-042",
      "Spinalt trauma och åtgärder inför transport",
      "Samtidig nack-/ryggskada måste misstänkas och immobiliseras."
     ],
     [
      "t9-043",
      "Intrakraniell tryckstegring",
      "Huvudvärk, kräkning, sjunkande medvetande vid expansiv skada eller ödem."
     ],
     [
      "t9-054",
      "Strukturellt betingad vakenhetssänkning",
      "Fokalneurologi och olika pupiller talar för strukturell orsak."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 14–15"
    ]
   },
   "card": {},
   "km": [
    "neuro:30",
    "neuro:35"
   ]
  },
  {
   "id": "t9-042",
   "name": "Spinalt trauma och åtgärder inför transport",
   "specialty": "Neurologi",
   "sub": "Neurotrauma",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Spinalt trauma** med ryggmärgsskada uppstår framför allt vid **luxationsfrakturer**, oftast cervikalt eller vid **Th10–L1**. **Stabilisering av nacke och rygg** redan på olycksplatsen är grundläggande, och vid hög skada är andningsövervakning avgörande.",
    "klin": [
     "Ofta noterat redan på olycksplatsen att patienten inte kan röra en extremitet – kan döljas av vakenhetssänkning.",
     "Trafikolyckor står för ca 50 %, dykolyckor för ca 30 %.",
     "Skada **ovan C4** ger andningssvikt.",
     "Initialt **spinal chock**; spasticitet i varierande grad utvecklas inom veckor.",
     {
      "h": "Centralt ryggmärgssyndrom"
     },
     "Vid kraftigt **extensionsvåld** mot nacken: blödning inom några segment med **slappa pareser och dissocierad känselnedsättning i händerna**; sido- och baksträngar påverkas inte."
    ],
    "diag": [
     "**Trauma-DT** efter primär bedömning.",
     "**Klinisk nivåbestämning** av skadan.",
     "Kompletterande utredning med klinisk bedömning och DT/MR.",
     "Skilj **blödningschock** från **neurogen chock** i akutskedet."
    ],
    "beh": [
     "Vid **neurogen chock**: sänkt huvudända och vid behov pressoraminer.",
     "Initial behandling med **iv kortison** kan övervägas men är **ifrågasatt**.",
     "Avlasta urinblåsan med **KAD/RIK**."
    ],
    "hand": [
     {
      "h": "Handläggningsordning enligt källan"
     },
     "1) Immobilisera rygg och nacke → 2) ABCDE → 3) trauma-DT → 4) neurogen chock? → 5) klinisk nivåbestämning → 6) kontakt med neurokirurg och ev. transport → 7) ev. iv kortison → 8) kompletterande utredning → 9) avlasta urin.",
     "Inför transport gäller samma principer som vid skalltrauma: kontakt med mottagande enhet, grova infarter, ställningstagande till intubation och om läkare behöver följa med, se [[t9-041|skalltrauma]]."
    ],
    "flagg": [
     "Missa inte ryggmärgsskada hos vakenhetssänkt traumapatient – immobilisera.",
     "Hög cervikal skada (ovan C4) – risk för andningssvikt.",
     "Neurogen chock feltolkad som blödning – risk för övervätskning."
    ],
    "ddx": [
     [
      "t9-086",
      "Ryggmärgskompression",
      "Icke-traumatisk kompression (tumör, diskbråck, abscess) med smygande eller snabb debut."
     ],
     [
      "t9-084",
      "Akut debuterande ryggmärgssjukdom",
      "T.ex. myelit eller spinal infarkt utan trauma."
     ],
     [
      "t9-041",
      "Skalltrauma",
      "Ofta samtidigt; kan dölja spinal skada genom vakenhetssänkning."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 14, 16"
    ]
   },
   "card": {},
   "km": [
    "neuro:30"
   ]
  },
  {
   "id": "t9-043",
   "name": "Intrakraniell tryckstegring",
   "specialty": "Neurologi",
   "sub": "Neurotrauma",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Intrakraniell tryckstegring** uppstår när en komponent i det konstanta intrakraniella utrymmet ökar utan att kunna kompenseras. Normalt **ICP <15 mmHg**; **CPP = MAP – ICP** bör vara >60 mmHg, <40 mmHg är kritiskt.",
    "klin": [
     {
      "h": "Tryckgränser enligt källan"
     },
     "ICP >20 mmHg ger kapillärkompression, >30 mmHg venös stas.",
     {
      "h": "Symtom"
     },
     "**Huvudvärk**, plötsligt **illamående/kräkning**, **staspapill** (skotom, visusnedsättning).",
     "Motorisk oro/delirium, **sjunkande medvetande**, böj-/sträckkramper.",
     "**Ensidigt vidgad ljusstel pupill** (oculomotoriuspares), **ändrat andningsmönster**, **högt BT** (Cushingeffekt).",
     "Staspapill är nästan alltid bilateral; synen kan initialt vara normal, obskurationer förekommer, n. abducens påverkas först av förhöjt ICP."
    ],
    "diag": [
     "Utreds med **DT/DT-angio**, MR och likvordynamik.",
     "Monitorering med **tryckgivare i hjärnparenkymet** eller via **ventrikeldrän**.",
     "Synfältsundersökning vid staspapill visar förstorad blind fläck."
    ],
    "beh": [
     {
      "h": "Neurointensivvård enligt källan"
     },
     "1) Åtgärda grundorsaken om möjligt (t.ex. hematom, hydrocefalus).",
     "2) Monitorera **ICP och CPP** – styr behandlingen.",
     "3) Optimera: normoventilation (pCO2 4,5–5,5 kPa, pO2 >12 kPa), normotension, normovolemi, lätt negativ vätskebalans, Hb >110 g/l, albumin 40 g/l, normoglykemi (<8 mmol/l), normotermi, tidig enteral nutrition.",
     "4) Vid behov: **mannitol** och **hyperventilation**, tiopental, **likvordränage**, Lundamodellen (BT-sänkning med metoprolol och klonidin).",
     "Sista steget: **dekompressiv kraniektomi** när ICP inte kan kontrolleras konventionellt.",
     "Vasogent tumörödem: mannitol och kortikosteroider."
    ],
    "hand": [
     "Påverkad eller vakenhetssänkt patient med ökat ICP ska i regel vårdas på **neurointensivvårdsavdelning**.",
     "Höjd huvudända (20–30°) för förbättrat venöst återflöde (anges vid akut huvudvärk)."
    ],
    "flagg": [
     "Sjunkande medvetande + ensidigt vidgad pupill = hotande inklämning, se [[t9-045|inklämning]].",
     "Huvudvärk värst på efternatt/morgon som förvärras av hosta – misstänk intrakraniell expansivitet.",
     "Bilateral staspapill ska remitteras snabbt till neurolog/neurokirurg för MR."
    ],
    "ddx": [
     [
      "t9-045",
      "Hotande intrakraniell inklämning",
      "Sent stadium med herniering och hjärnstamskompression."
     ],
     [
      "t9-050",
      "Icke-kommunicerande hydrocefalus",
      "Obstruktion av likvorvägarna som orsak till tryckstegring."
     ],
     [
      "t9-077",
      "Primära tumörer som engagerar nervsystemet",
      "Tryckrelaterade symtom är vanligast vid hjärntumör."
     ],
     [
      "t9-022",
      "Sinustrombos",
      "Annan orsak till förhöjt ICP och staspapill."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 9, 14, 16–17, 37",
     "Ögonboken – sammanfattning (T9), s. 23"
    ]
   },
   "card": {},
   "km": [
    "neuro:31",
    "neuro:34",
    "ogon:66"
   ]
  },
  {
   "id": "t9-044",
   "name": "Intrakraniella tryck-volymkurvan",
   "specialty": "Neurologi",
   "sub": "Neurotrauma",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Det **intrakraniella utrymmet är konstant**: ökar en komponent (hjärnvävnad, blod, likvor eller en expansiv process) måste den **kompenseras av en minskning i en annan**, annars stiger ICP.",
    "klin": [
     "Normalt **ICP <15 mmHg**; >20 mmHg ger kapillärkompression; >30 mmHg venös stas.",
     "**Perfusionstryck (CPP) = MAP – ICP**: >60 mmHg normalt, <40 mmHg kritiskt."
    ],
    "diag": [
     "ICP mäts med tryckgivare i hjärnparenkymet eller via ventrikeldrän; behandlingen styrs av ICP, CPP och klinisk bild."
    ],
    "beh": [
     "Snabb volymökning (t.ex. traumatisk blödning) ger snabb symtomutveckling; trycktoppar kan sänkas genom att dränera likvor via ventrikeldrän."
    ],
    "hand": [
     "Tillämpning: se [[t9-043|intrakraniell tryckstegring]] och [[t9-045|hotande inklämning]]."
    ],
    "flagg": [
     "Lågt CPP (<40 mmHg) är kritiskt – högt ICP och lågt MAP samverkar.",
     "Snabbt expanderande processer ger snabbare försämring än långsamma."
    ],
    "ddx": [
     [
      "t9-043",
      "Intrakraniell tryckstegring",
      "Klinisk bild och behandling när kompensationen inte räcker."
     ],
     [
      "t9-045",
      "Hotande intrakraniell inklämning",
      "Slutstadiet med herniering."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 14, 16–17"
    ]
   },
   "card": {},
   "km": [
    "neuro:31"
   ]
  },
  {
   "id": "t9-045",
   "name": "Hotande intrakraniell inklämning",
   "specialty": "Neurologi",
   "sub": "Neurotrauma",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Inklämning (herniering)** innebär att hjärnvävnad pressas förbi tentoriet eller nedåt mot hjärnstammen vid tryckstegring. Snabbt **sjunkande medvetande** och **ensidigt vidgad ljusstel pupill** är varningstecken som kräver omedelbar tryckreducerande åtgärd och neurokirurgisk kontakt.",
    "klin": [
     {
      "h": "Uncusherniering"
     },
     "Orsakas av snabbt expanderande fokala hemisfärlesioner (t.ex. traumatisk blödning, stroke). Mediala temporalloben pressas mot tentoriet → **CN III**, a. cerebri posterior och hjärnstammen komprimeras.",
     "Snabb utveckling: oro/konfusion → avvärjning → böj-/sträckkramper → reaktionslös.",
     "**Ipsilateral pupill dilateras**, i slutstadiet bilateralt; sämre reaktion i kontralateral kroppshalva och ev. Babinski.",
     {
      "h": "Central transtentoriell herniering"
     },
     "Ofta slutstadiet av uncusherniering men också vid generellt hjärnödem; tidigt **Cheyne–Stokes-andning**, senare hela bilden av ICP-stegring.",
     {
      "h": "Infratentoriell tryckstegring"
     },
     "T.ex. lillhjärnsblödning med tryck på likvorvägar och hydrocefalus – krävs mindre volymer för masseffekt."
    ],
    "diag": [
     "Akut **DT hjärna**; vid försämring hos patient där intervention planeras är ny DT indicerad.",
     "Upprepade kontroller av RLS/GCS, pupiller, motorik, BT, puls och andning."
    ],
    "beh": [
     "**Hyperventilera** patienten.",
     "Ge **200–300 ml mannitol**.",
     "Överväg **intubation** inför transport.",
     "Infratentoriell tryckstegring: identifiera riskpatienter snabbt – **ventrikeldrän** och **kirurgisk dekompression**.",
     "Hyperventilation och mannitol är åtgärden när kirurgi för att lätta trycket inte finns tillgänglig. **Inte Betapred** vid trauma."
    ],
    "hand": [
     "Kontakta **neurokirurg** omgående och planera transport (se [[t9-041|skalltrauma]]).",
     "Vård på neurokirurgisk enhet/neurointensivvård."
    ],
    "flagg": [
     "Ensidigt vidgad ljusstel pupill + sjunkande medvetande.",
     "Cheyne–Stokes-andning, högt BT och böj-/sträckkramper.",
     "Lillhjärnsprocesser kan ge snabb hjärnstamskompression redan vid små volymer."
    ],
    "ddx": [
     [
      "t9-043",
      "Intrakraniell tryckstegring",
      "Tidigare stadium utan herniering."
     ],
     [
      "t9-054",
      "Strukturellt betingad vakenhetssänkning",
      "Olikstora, icke-reagerande pupiller och fokalneurologi."
     ],
     [
      "t9-053",
      "Metabolt betingad vakenhetssänkning",
      "Likstora reagerande pupiller och avsaknad av fokalneurologi."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 5, 14, 16–17"
    ]
   },
   "card": {},
   "km": [
    "neuro:31",
    "neuro:34"
   ]
  },
  {
   "id": "t9-046",
   "name": "Kroniskt subduralhematom",
   "specialty": "Neurologi",
   "sub": "Neurotrauma",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Kroniskt subduralhematom** är en venös blödning från skadade **bryggvener** som debuterar **veckor till månader** (>3 v) efter ett ofta **till synes banalt trauma**. Det är en svår klinisk diagnos som ställs med **DT**.",
    "klin": [
     "Drabbar främst **äldre**, ofta alkoholmissbrukare.",
     "Hematomet expanderar genom **upprepade blödningar** och **osmotisk diffusion av vatten**.",
     "**Tilltagande huvudvärk** och **fokala funktionsbortfall**.",
     "Hos vissa dominerar **mentala förändringar och konfusion** – tolkas inte ovanligt som ett **snabbt progredierande demenstillstånd**.",
     "Subakut SDH debuterar 3 d–3 v efter trauma, kroniskt >3 v."
    ],
    "diag": [
     "**DT hjärna** ställer diagnosen.",
     "Vid demensutredning görs DT i första hand för att utesluta expansivitet.",
     "Vid vakenhetssänkning ingår subduralblödning i HUSK-MIDAS (”S”) – DT hjärna."
    ],
    "beh": [
     "Behandlingen är enkel: utrymning via **mindre kraniotomi**, ibland i **lokalbedövning**."
    ],
    "hand": [
     "Remiss/kontakt neurokirurg vid verifierat hematom.",
     "Tänk på diagnosen hos äldre med subakut kognitiv försämring eller konfusion."
    ],
    "flagg": [
     "Snabbt progredierande ”demens” – uteslut kroniskt SDH med DT.",
     "Traumat kan vara banalt eller bortglömt.",
     "Äldre och alkoholmissbrukare är riskgrupper."
    ],
    "ddx": [
     [
      "t9-072",
      "Demensliknande tillstånd",
      "Långsammare förlopp; DT utesluter expansivitet."
     ],
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Ofta somatisk orsak; fluktuerande förlopp."
     ],
     [
      "t9-041",
      "Skalltrauma",
      "Akut SDH debuterar inom 3 d efter större trauma med dålig prognos."
     ],
     [
      "t9-049",
      "Kommunicerande hydrocefalus",
      "Gångrubbning, kognitiv svikt och inkontinens; vidgade ventriklar på DT."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 15, 17, 20, 33–34"
    ]
   },
   "card": {},
   "km": [
    "neuro:32"
   ]
  },
  {
   "id": "t9-047",
   "name": "Neurokirurgisk behandling vid traumatisk skada på hjärna och ryggmärg",
   "specialty": "Neurologi",
   "sub": "Neurotrauma",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Neurokirurgisk behandling vid trauma syftar till att **utrymma expansiva hematom**, **avlasta förhöjt ICP** och åtgärda **impressionsfrakturer**; vid ryggmärgsskada sker tidig **kontakt med neurokirurg** för fortsatt handläggning.",
    "klin": [
     {
      "h": "Hjärna"
     },
     "**Akut subduralhematom:** dålig prognos, bättre vid **tidig operation <4 h**.",
     "**Epiduralhematom:** försämring efter fritt intervall kräver snabb åtgärd.",
     "**Impressionsfraktur** mer än en benbredd = operationsfall (kan annars ge glios och posttraumatisk epilepsi).",
     "Linjära frakturer är oftast inte behandlingskrävande; vid samtidig durarift ges antibiotikaprofylax.",
     "Pannbensfraktur: Claforan profylaktiskt vid misstänkt duraskada; operation om sinus frontalis är engagerad.",
     {
      "h": "Tryckstegring"
     },
     "**Ventrikeldrän/likvordränage**, framför allt för att sänka trycktoppar.",
     "**Dekompressiv kraniektomi** när patienten försämras och ICP inte kan kontrolleras konventionellt."
    ],
    "diag": [
     "DT hjärna styr indikationen; ny DT vid försämring eller oförändrat tillstånd efter 6–12 h vid medelsvår skada."
    ],
    "beh": [
     "Medelsvår–svår skallskada och hotande inklämning: överväg intubation, hyperventilation och mannitol i väntan på/inför transport till neurokirurgi."
    ],
    "hand": [
     "Svår skallskada övervakas på neurokirurgisk enhet.",
     "Spinalt trauma: immobilisering, nivåbestämning, **kontakt med neurokirurg** och transport; ev. iv kortison (ifrågasatt).",
     "Kroniskt SDH: utrymning via mindre kraniotomi, ibland i lokalbedövning."
    ],
    "flagg": [
     "Fördröjd operation av akut SDH försämrar prognosen.",
     "Impressionsfraktur kan ge posttraumatisk epilepsi.",
     "Skallbasfraktur med durarift – risk för meningit."
    ],
    "ddx": [
     [
      "t9-041",
      "Skalltrauma",
      "Primär bedömning och gradering."
     ],
     [
      "t9-042",
      "Spinalt trauma och åtgärder inför transport",
      "Initial handläggning av ryggmärgsskada."
     ],
     [
      "t9-043",
      "Intrakraniell tryckstegring",
      "Konservativa trycksänkande åtgärder före kirurgi."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 14–17",
     "Kompendium ÖNH (T9), s. 22"
    ]
   },
   "card": {},
   "km": [
    "neuro:33"
   ]
  },
  {
   "id": "t9-048",
   "name": "Vanliga symtom efter skalltrauma",
   "specialty": "Neurologi",
   "sub": "Neurotrauma",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Efter skalltrauma är **huvudvärk, illamående och kräkning** vanliga i efterförloppet av hjärnskakning, och ett **postkommotionellt syndrom** kan kvarstå i månader–år. Vid svårare skador förekommer kognitiva följder, epilepsi och kranialnervssymtom.",
    "klin": [
     {
      "h": "Akut efter hjärnskakning"
     },
     "Kortare medvetslöshet, ev. **amnesi**; därefter ev. **illamående, kräkning och huvudvärk**.",
     {
      "h": "Postkommotionellt syndrom"
     },
     "Huvudvärk, yrsel, öronsus, ljus- och ljudkänslighet, ångest, irritabilitet, närminnesstörning, koncentrationssvårigheter, uttröttbarhet, sömnstörning och nedsatt sexuell förmåga.",
     {
      "h": "Övriga följder"
     },
     "**DAI:** minnes- och koncentrationsproblem och generell kognitionspåverkan; mer eller mindre läkning över tid med rehabilitering.",
     "**Neurasteniskt syndrom** efter lindrig hjärnskada: abnorm trötthet, koncentrationssvårigheter, emotionell instabilitet.",
     "**Posttraumatisk epilepsi** (glios efter impressionsfraktur).",
     "**Anosmi** (avslitning av fila olfactoria); skalltrauma står för 10–20 % av luktrubbningar.",
     "Skallbasfraktur: likvorré, blödning ur öra, hematotympanon, brillenhematom, Battle sign, facialispares, nystagmus, hörselnedsättning."
    ],
    "diag": [
     "Lätt skallskada: DT hjärna och nervstatus; utan anmärkning hem med skriftlig information.",
     "Medvetslöshet >5 min eller neurologiska bortfall: DT, inläggning och övervakning."
    ],
    "beh": [
     "Rehabilitering vid kognitiva följder efter DAI."
    ],
    "hand": [
     "Commotio: observation minst 12 h.",
     "Ge skriftlig information vid hemgång."
    ],
    "flagg": [
     "Tilltagande huvudvärk, konfusion eller fokala bortfall veckor senare – [[t9-046|kroniskt subduralhematom]].",
     "Försämring efter fritt intervall – epiduralhematom.",
     "Likvorré efter trauma – duraskada med meningitrisk."
    ],
    "ddx": [
     [
      "t9-046",
      "Kroniskt subduralhematom",
      "Tilltagande symtom veckor–månader efter traumat; DT."
     ],
     [
      "t9-074",
      "Transitorisk global amnesi",
      "Kan utlösas av måttligt skalltrauma; övergående anterograd amnesi."
     ],
     [
      "t9-029",
      "Sekundär (symtomatisk) huvudvärk",
      "Annan bakomliggande orsak till huvudvärk."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 14–15, 28, 36",
     "Kompendium ÖNH (T9), s. 14"
    ]
   },
   "card": {},
   "km": [
    "neuro:35"
   ]
  },
  {
   "id": "t9-049",
   "name": "Kommunicerande hydrocefalus",
   "specialty": "Neurologi",
   "sub": "Hydrocefalus",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid **kommunicerande hydrocefalus** finns fritt likvorflöde mellan ventriklar och subaraknoidalrum men störd transport/absorption av likvor. Huvudexemplet är **normaltryckshydrocefalus (NPH)** med triaden **gångrubbning, kognitiv svikt och urinträngningar/inkontinens**.",
    "klin": [
     "NPH drabbar främst **65–75 år**; patofysiologin anses vara defekt absorption i pacchioniska granulationer.",
     "Kan vara idiopatisk eller sekundär (t.ex. efter subaraknoidalblödning eller infektion).",
     "**Gångapraxi:** bredbasig, kort steglängd, utåtroterade fötter – stel, hasande, vaggande gång, ”fötterna sitter som med magneter i backen”.",
     "**Paratoni.**",
     "**Kognitiv påverkan:** trött, långsam, demensliknande – förbättras ofta markant av shunt.",
     "**Blåsstörning** kommer vanligen senare (trängningar, inkontinens).",
     "Att skilja från hydrocefalus ex vacuo (vidgning till följd av hjärnatrofi)."
    ],
    "diag": [
     {
      "h": "Kriterier för NPH"
     },
     "Gång-/balansstörning och kognitiv svikt och/eller urinträngningar/inkontinens.",
     "Vidgade ventriklar – **Evans index >0,3**.",
     "Fri kommunikation mellan ventriklar och subaraknoidalrum; ingen känd orsak; **ICP <20 mmHg** (24 cm H2O).",
     {
      "h": "Undersökningar"
     },
     "**DT/MR:** ventrikelvidgning utan kortikal atrofi.",
     "**Tapptest:** ca 40 ml likvor tappas och sensomotorik utvärderas före och efter – positivt utfall förutsäger gott shuntresultat, negativt utesluter det inte.",
     "Ev. **infusionstest** (Katzmantest)."
    ],
    "beh": [
     "Standard är **ventrikuloperitoneal shunt**, som förbättrar ca 80 %.",
     "Komplikationer är relativt vanliga men lättbehandlade, se [[t9-051|likvorshunt]]."
    ],
    "hand": [
     "Vid SAH har majoriteten akut resorptionsstörning – ventrikeldrän sätts oftast; uteslut hydrocefalusutveckling i efterförloppet.",
     "Om kognitiv nedsättning tillkommer efter infektion: misstänk sekundär hydrocefalus."
    ],
    "flagg": [
     "NPH är en behandlingsbar orsak till demensliknande bild – uteslut vid demensutredning.",
     "Negativt tapptest utesluter inte shunteffekt.",
     "Kognitiv försämring efter SAH eller CNS-infektion – tänk sekundär hydrocefalus."
    ],
    "ddx": [
     [
      "t9-060",
      "Differentialdiagnoser till Parkinsons sjukdom",
      "Atypisk parkinsonism/PSP kan likna NPH-gången."
     ],
     [
      "",
      "Subkortikal vaskulär demens (SVD)",
      "Vitsubstansförändringar periventrikulärt på MR, ofta abrupt debut."
     ],
     [
      "",
      "Alzheimers sjukdom",
      "Smygande närminnesstörning och medial temporallobsatrofi på DT/MR."
     ],
     [
      "t9-050",
      "Icke-kommunicerande hydrocefalus",
      "Obstruktion av likvorvägarna, oftare tryckstegringssymtom."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 4, 18, 34"
    ]
   },
   "card": {},
   "km": [
    "neuro:36",
    "neuro:37"
   ]
  },
  {
   "id": "t9-050",
   "name": "Icke-kommunicerande hydrocefalus",
   "specialty": "Neurologi",
   "sub": "Hydrocefalus",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid **icke-kommunicerande (obstruktiv) hydrocefalus** hindras likvorflödet av en **obstruktion**, t.ex. akveduktstenos, tumör, kolloidcysta vid foramen Monroi eller blodkoagel. Ger **ökat ICP** och vid snabbt förlopp **medvetandepåverkan** – kan kräva akut neurokirurgisk åtgärd.",
    "klin": [
     {
      "h": "Orsaker"
     },
     "Akveduktstenos, tumör, foramen Monroi-cysta, blodkoagel.",
     "En tumör kan komprimera ena sidoventrikeln och över tid ge vidgning på kontralaterala sidan.",
     "Lillhjärnsblödning/infratentoriella processer, tallkottkörteltumörer (ofta med Parinauds syndrom) och kraniofaryngeom kan ge sekundär hydrocefalus.",
     {
      "h": "Symtom"
     },
     "**Fokalneurologi** beroende på lesionstyp och läge.",
     "**Ökat ICP:** huvudvärk, illamående, kräkningar (framför allt vid långsamt förlopp).",
     "**Medvetandepåverkan** vid snabbt förlopp.",
     "Ögonmuskelpareser; staspapill om tillståndet pågått ett tag."
    ],
    "diag": [
     "**DT eller MR skalle**: vidgade ventriklar och ev. synlig orsak.",
     "Vid tallkottkörteltumör: MR inklusive spinalkanal."
    ],
    "beh": [
     "**Ventrikeldrän** (gärna några veckor innan shuntinsättning).",
     "**Likvorshunt**, vanligen ventrikuloperitoneal.",
     "**Ventrikulocisternostomi:** hål i tredje ventrikelns botten så att likvor rinner ned i prepontina cisternen."
    ],
    "hand": [
     "Akut insjuknande (t.ex. shuntdysfunktion): **ABCDE**, kontrollera ev. shunt.",
     "**DT/MR**, ring **neurokirurgjouren** och begär överflyttning.",
     "**Antibiotika** vid infektionstecken kring shunt.",
     "Övervakning på **neurointensivvårdsavdelning**."
    ],
    "flagg": [
     "Snabbt sjunkande medvetande – akut obstruktion som kräver ventrikeldrän.",
     "Huvudvärk, kräkning och medvetandepåverkan hos shuntbärare – shuntdysfunktion.",
     "Infratentoriell blödning kan snabbt ge hydrocefalus och hjärnstamskompression."
    ],
    "ddx": [
     [
      "t9-049",
      "Kommunicerande hydrocefalus",
      "Fritt likvorflöde, ofta normalt tryck och långsam triadutveckling."
     ],
     [
      "t9-043",
      "Intrakraniell tryckstegring",
      "Generell bild; hydrocefalus är en av orsakerna."
     ],
     [
      "t9-077",
      "Primära tumörer som engagerar nervsystemet",
      "Tumör som obstruerar likvorvägarna."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 5, 17, 19, 39"
    ]
   },
   "card": {},
   "km": [
    "neuro:36",
    "neuro:37"
   ]
  },
  {
   "id": "t9-051",
   "name": "Likvorshunt och shuntkomplikation",
   "specialty": "Neurologi",
   "sub": "Hydrocefalus",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "En **likvorshunt** – oftast **ventrikuloperitoneal** – leder likvor från ventriklarna subkutant till bukhålan vid hydrocefalus. Komplikationer är **relativt vanliga men lättbehandlade**: över-/underdränage, mekaniska fel, subduralhematom och infektion.",
    "klin": [
     "Standardbehandling vid NPH; förbättrar ca 80 %.",
     "Vid icke-kommunicerande hydrocefalus sitter gärna ett ventrikeldrän några veckor innan shunt sätts in; alternativ är ventrikulocisternostomi.",
     {
      "h": "Komplikationer"
     },
     "Över-/underdränage, mekaniska shuntproblem, subduralhematom, infektioner."
    ],
    "diag": [
     {
      "h": "Underfunktion"
     },
     "Orsaker: för högt ställd ventil, mekaniskt fel, dislokation, infektion.",
     "**Shuntberoende** patient (vanligen obstruktiv hydrocefalus): huvudvärk, illamående, kräkningar, trötthet, medvetandepåverkan.",
     "**Relativt shuntberoende** patient (vanligen kommunicerande hydrocefalus): långsam symtomprogress, ev. återkomst av tidigare symtom (gångrubbning).",
     {
      "h": "Överfunktion"
     },
     "Orsaker: för lågt ställd ventil, otillfredsställande shuntmekanik, trasig antisifonventil. Symtom: **huvudvärk som förbättras i liggande**."
    ],
    "beh": [
     "Shuntdysfunktion åtgärdas neurokirurgiskt; vid infektionstecken kring shunten ges antibiotika."
    ],
    "hand": [
     "Akut misstänkt shuntdysfunktion: **ABCDE**, kontrollera shunten, **DT/MR** (vidgade ventriklar?).",
     "Ring **neurokirurgjouren**, begär överflyttning; övervakning på **NIVA**."
    ],
    "flagg": [
     "Shuntberoende patient med huvudvärk, kräkning och sänkt medvetande – akut underfunktion.",
     "Lägesberoende huvudvärk (bättre i liggande) – tänk överdränage.",
     "Subduralhematom är en känd komplikation."
    ],
    "ddx": [
     [
      "t9-050",
      "Icke-kommunicerande hydrocefalus",
      "Grundtillståndet hos shuntberoende patienter."
     ],
     [
      "t9-049",
      "Kommunicerande hydrocefalus",
      "Relativt shuntberoende – långsam symtomåterkomst vid underfunktion."
     ],
     [
      "t9-007",
      "Huvudvärk efter lumbalpunktion",
      "Också lägesberoende, värre i upprätt läge."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 9, 18–19"
    ]
   },
   "card": {},
   "km": [
    "neuro:38"
   ]
  },
  {
   "id": "t9-052",
   "name": "Vakenhetssänkning och medvetslöshet, initial handläggning",
   "specialty": "Neurologi",
   "sub": "Vakenhetssänkning och medvetslöshet",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid **vakenhetssänkning/koma** är ca **66 % metabolt-toxiska**, **33 % strukturella** och ca 1 % psykogena. Handläggningen följer **ABC → VAPÖR → prover → MATAS → HUSK-MIDAS**, och **fokalneurologi** talar för strukturell skada.",
    "klin": [
     {
      "h": "Bedömning – VAPÖR"
     },
     "**V**akenhetsgrad (GCS/RLS).",
     "**A**ndningsmönster: hypo-/hyperventilation, Kussmaul (acidos), Cheyne–Stokes.",
     "**P**upiller: likstora och reagerande → i första hand metabolt-toxiskt; olikstora och icke-reagerande → strukturellt.",
     "**Ö**gonmotorik: spontana/utlösta (doll's eye); konjugerad deviation mot lesionen (bort från paresen); dyskonjugerade ögon vid t.ex. hjärnstamsskada.",
     "**R**örelse: viljemässig, reflexmässig eller involontär; viloställning, kramper; smärtstimulera centralt och perifert bilateralt; tonus, Babinski."
    ],
    "diag": [
     "**Prover:** snabbtest P-glukos, intox, El-krea, lever-, koagulations- och blodstatus, TnT, CRP, blodgas, temp, EKG.",
     "**Anamnes:** MATAS (mediciner, allergier, tidigare sjukdom, aktuellt, senaste måltid) och sekundäranamnes.",
     "**Neuroradiologi:** oftast DT, ev. med kontrast; ev. LP och EEG.",
     "Upprepade nervstatus ger bild av progress."
    ],
    "beh": [
     {
      "h": "HUSK-MIDAS – orsaker och åtgärd"
     },
     {
      "tbl": [
       [
        "Orsak",
        "Åtgärd att överväga"
       ],
       [
        "Herpesencefalit",
        "Aciklovir"
       ],
       [
        "Urosepsis",
        "Antibiotika, KAD"
       ],
       [
        "Status epilepticus",
        "Antiepileptika, EEG"
       ],
       [
        "Korsakoff–Wernicke",
        "Tiamin före glukos"
       ],
       [
        "Meningit",
        "LP, antibiotika"
       ],
       [
        "Intox",
        "Antidot, magsköljning"
       ],
       [
        "Diabetes",
        "30 ml 30 % glukos"
       ],
       [
        "Andningsinsufficiens",
        "Blodgas, intubation"
       ],
       [
        "Subdural-/subaraknoidalblödning",
        "DT hjärna"
       ]
      ]
     }
    ],
    "hand": [
     "Bestäm fortsatt vårdnivå: IVA, HIA, MIVA, NIVA eller vårdavdelning.",
     "Vid skalltrauma styrs handläggningen av RLS/GCS, se [[t9-041|skalltrauma]].",
     "Undersökningsteknik: se [[t9-003|neurologisk undersökning av vakenhetssänkt patient]]."
    ],
    "flagg": [
     "Ge **tiamin före glukos** vid misstänkt alkoholism/Wernicke.",
     "Fokalneurologi eller olikstora pupiller – strukturell orsak, akut DT.",
     "Kontrollera alltid glukos tidigt."
    ],
    "ddx": [
     [
      "t9-053",
      "Metabolt betingad vakenhetssänkning",
      "Likstora reagerande pupiller, ingen fokalneurologi."
     ],
     [
      "t9-054",
      "Strukturellt betingad vakenhetssänkning",
      "Fokalneurologi, olikstora pupiller, konjugerad deviation."
     ],
     [
      "t9-034",
      "Status epilepticus",
      "Kan ge kvarstående medvetslöshet; EEG."
     ],
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Vaken men medvetandegrumlad patient med fluktuerande bild."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 14, 20"
    ]
   },
   "card": {},
   "km": [
    "neuro:39"
   ]
  },
  {
   "id": "t9-053",
   "name": "Metabolt betingad vakenhetssänkning",
   "specialty": "Neurologi",
   "sub": "Vakenhetssänkning och medvetslöshet",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Metabolt-toxisk** orsak står för ca **2/3 av vakenhetssänkningar**. Typiskt är **likstora, reagerande pupiller** och avsaknad av fokalneurologi.",
    "klin": [
     {
      "h": "Kliniska kännetecken"
     },
     "**Pupillreflexen** är oftast **intakt** vid metabolt tillstånd.",
     "Likstora och reagerande pupiller talar i första hand för metabolt-toxisk genes.",
     "Ingen fokalneurologi (fokalneurologi talar för strukturell skada).",
     "Andningsmönster kan ge ledtråd, t.ex. **Kussmaulandning** vid acidos.",
     "Lätt vakenhetssänkning gör patienten långsam och passiv med sekundärt försämrad uppmärksamhet och minne.",
     {
      "h": "Orsaker i HUSK-MIDAS"
     },
     "Urosepsis, Wernicke–Korsakoff, intox, diabetes (hypo-/hyperglykemi), andningsinsufficiens; även infektioner och status epilepticus ingår i ramsan."
    ],
    "diag": [
     "Snabbtest **P-glukos**, intox, El-krea, leverstatus, koagulation, blodstatus, TnT, CRP, **blodgas**, temp, EKG.",
     "DT ändå oftast för att utesluta strukturell orsak; ev. LP och EEG."
    ],
    "beh": [
     "**Diabetes/hypoglykemi:** 30 ml 30 % glukos iv.",
     "**Misstänkt Wernicke:** tiamin **före** glukos.",
     "**Intox:** antidot, ev. magsköljning.",
     "**Andningsinsufficiens:** blodgas, ställningstagande till intubation."
    ],
    "hand": [
     "Följ ABC → VAPÖR → prover → anamnes (MATAS) → HUSK-MIDAS, se [[t9-052|initial handläggning]]."
    ],
    "flagg": [
     "Tiamin före glukos vid alkoholanamnes.",
     "Icke-konvulsivt status epilepticus kan likna metabol vakenhetssänkning – överväg EEG.",
     "Tillkommande fokalneurologi eller pupillasymmetri – tänk om och gör DT."
    ],
    "ddx": [
     [
      "t9-054",
      "Strukturellt betingad vakenhetssänkning",
      "Fokalneurologi, olikstora och icke-reagerande pupiller."
     ],
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Samma somatiska orsaker men patienten är vaken och fluktuerande."
     ],
     [
      "t9-034",
      "Status epilepticus",
      "Medvetslöshet utan återhämtning mellan anfall."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 20, 28, 35"
    ]
   },
   "card": {},
   "km": [
    "neuro:40"
   ]
  },
  {
   "id": "t9-054",
   "name": "Strukturellt betingad vakenhetssänkning",
   "specialty": "Neurologi",
   "sub": "Vakenhetssänkning och medvetslöshet",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Strukturell** orsak (blödning, infarkt, tumör, abscess, hydrocefalus m.m.) står för ca **1/3 av vakenhetssänkningar**. **Fokalneurologi**, **olikstora icke-reagerande pupiller** och ögonmotoriska avvikelser talar för strukturell skada.",
    "klin": [
     {
      "h": "Kliniska kännetecken"
     },
     "**Fokalneurologi** (pares, Babinski, asymmetrisk smärtreaktion).",
     "**Olikstora och icke-reagerande pupiller** – t.ex. ensidigt vidgad ljusstel pupill vid uncusherniering.",
     "Lesioner ovan thalamus eller nedanför pons påverkar inte pupillen.",
     "**Konjugerad deviation** mot den intrakraniella lesionen (bort från paresen).",
     "**Dyskonjugerade ögon**: ögat ut vid t.ex. CN III-pares, ögat in vid abducenspares/inklämning; vertikal ”skew” vid CN III/IV-, cerebellum- eller hjärnstamslesion.",
     "Ändrat andningsmönster (t.ex. Cheyne–Stokes vid central herniering).",
     {
      "h": "Exempel på orsaker"
     },
     "Subdural- och subaraknoidalblödning, intracerebral och cerebellär blödning, expansiva kontusioner, hjärntumör, cerebral abscess, akut hydrocefalus."
    ],
    "diag": [
     "**Akut DT hjärna**, ev. med kontrast.",
     "Upprepade nervstatus för att följa progress.",
     "LP är kontraindicerat vid cerebral abscess (masseffekt)."
    ],
    "beh": [
     "Vid hotande inklämning: hyperventilation, mannitol, ev. intubation och neurokirurgisk kontakt, se [[t9-045|inklämning]].",
     "Behandla orsaken (hematomutrymning, ventrikeldrän, dekompression)."
    ],
    "hand": [
     "Vårdnivå oftast NIVA/neurokirurgi.",
     "Följ i övrigt [[t9-052|initial handläggning av vakenhetssänkning]]."
    ],
    "flagg": [
     "Fokalneurologi hos medvetandesänkt patient = strukturell orsak tills motsatsen bevisats.",
     "Ensidigt vidgad ljusstel pupill – hotande uncusherniering.",
     "Infratentoriella processer kan ge snabb försämring vid små volymer."
    ],
    "ddx": [
     [
      "t9-053",
      "Metabolt betingad vakenhetssänkning",
      "Likstora reagerande pupiller och avsaknad av fokalneurologi."
     ],
     [
      "t9-045",
      "Hotande intrakraniell inklämning",
      "Slutstadium av strukturell expansiv process."
     ],
     [
      "t9-050",
      "Icke-kommunicerande hydrocefalus",
      "Strukturell orsak med vidgade ventriklar på DT."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 5, 15–17, 20, 42"
    ]
   },
   "card": {},
   "km": [
    "neuro:40"
   ]
  },
  {
   "id": "t9-055",
   "name": "Fastställande av total hjärninfarkt",
   "specialty": "Neurologi",
   "sub": "Vakenhetssänkning och medvetslöshet",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Enligt **lagen om bestämmande av människans död** är en människa död när **hjärnans samtliga funktioner totalt och oåterkalleligt har fallit bort**. Det är **läkarens** uppgift att fastställa att döden inträtt, med **indirekta** eller **direkta** kriterier.",
    "klin": [
     {
      "h": "Indirekta kriterier"
     },
     "Används när andning och cirkulation har upphört: varaktigt andnings- och cirkulationsstillestånd **>20 min vid normal kroppstemperatur**.",
     "Längre och skärpt observation krävs hos **nedkylda** och **nyfödda**.",
     {
      "h": "Direkta kriterier"
     },
     "Används när andning och cirkulation upprätthålls konstgjort (respirator).",
     "**Klinisk neurologisk undersökning** (ev. kompletterad med EEG).",
     "**Cerebral fyrkärlsangiografi**."
    ],
    "diag": [
     {
      "h": "Förutsättningar för klinisk undersökning"
     },
     "**Intox** och grav **metabol störning** utesluten.",
     "**Ingen hypotermi.**",
     "**Känd orsak** till det misstänkta totala hjärnfunktionsbortfallet."
    ],
    "beh": [
     "Undersökningen kan inte genomföras om förutsättningarna inte är uppfyllda – då krävs t.ex. fyrkärlsangiografi."
    ],
    "hand": [
     "Direkta kriterier blir aktuella hos respiratorbehandlade patienter, där dödens inträde fastställs genom att undersökning av hjärnan med säkerhet visar totalt bortfall av hjärnans funktioner."
    ],
    "flagg": [
     "Hypotermi, intoxikation eller grav metabol störning kan efterlikna hjärndöd.",
     "Utan känd orsak till hjärnskadan kan den kliniska undersökningen inte användas.",
     "Nyfödda och nedkylda kräver längre observation."
    ],
    "ddx": [
     [
      "t9-052",
      "Vakenhetssänkning och medvetslöshet, initial handläggning",
      "Reversibla orsaker till koma måste uteslutas först."
     ],
     [
      "t9-053",
      "Metabolt betingad vakenhetssänkning",
      "Intox och metabol rubbning är potentiellt reversibla."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 21"
    ]
   },
   "card": {},
   "km": [
    "neuro:41"
   ]
  },
  {
   "id": "t9-056",
   "name": "Hypersomni",
   "specialty": "Neurologi",
   "sub": "Sömnstörningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Hypersomni** innebär överdriven sömnighet/dagtrötthet och räknas till dyssomnierna. **Sömnapnésyndrom** är den **vanligaste orsaken**; **narkolepsi** är en viktig neurologisk orsak.",
    "klin": [
     {
      "h": "Orsaker enligt källorna"
     },
     "**Obstruktivt sömnapnésyndrom (OSAS):** habituell snarkning, apnéer, rastlös sömn, nykturi; dagtrötthet, morgontrötthet/sömnattacker, koncentrationssvårigheter, irritabilitet.",
     "**Narkolepsi:** patologisk insomningsbenägenhet i perioder om 5–15 min, ofta i monotona situationer; kataplexi.",
     "**CNS-stimulantia** kan ge hypersomni."
    ],
    "diag": [
     "Noggrann anamnes om sömn, snarkning och dagsymtom.",
     "Misstänkt sömnapné: **polysomnografi** (EEG, EMG, EKG, pulsoximetri, luftflöde, andningsrörelser m.m.) eller polygrafi.",
     "Misstänkt narkolepsi: **MSLT** (tidigt REM-inträde, hög insomningsfrekvens)."
    ],
    "beh": [
     "Sömnapné: viktnedgång, livsstilsåtgärder, positionsträning; **CPAP** eller apnéskena; ev. kirurgi.",
     "Narkolepsi: sömnhygien, modafinil, se [[t9-057|narkolepsi]]."
    ],
    "hand": [
     "Sömnapné handläggs inom ÖNH, se [[t9-348|sömnapnésyndrom]]."
    ],
    "flagg": [
     "Obehandlat OSAS ökar risken för trafikolycka 2–7 gånger.",
     "Dåligt reglerad narkolepsi – får inte inneha körkort.",
     "Tänk på läkemedel som orsak."
    ],
    "ddx": [
     [
      "t9-057",
      "Narkolepsi",
      "Sömnattacker med kataplexi; MSLT."
     ],
     [
      "t9-348",
      "Sömnapnésyndrom och snarkning",
      "Snarkning och apnéer; vanligaste orsaken till hypersomni."
     ],
     [
      "t9-154",
      "Vanliga sömnstörningar",
      "Insomni och dygnsrytmstörningar (psykiatri)."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 22",
     "Kompendium ÖNH (T9), s. 31",
     "Kompendium Psykiatri (T9), s. 15"
    ]
   },
   "card": {},
   "km": [
    "neuro:42"
   ]
  },
  {
   "id": "t9-057",
   "name": "Narkolepsi",
   "specialty": "Neurologi",
   "sub": "Sömnstörningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Narkolepsi** är en sömnsjukdom med **patologisk insomningsbenägenhet** och ofta **kataplexi** (plötslig tonusförlust i tvärstrimmig muskulatur vid kraftig affekt). Diagnosen ställs med **MSLT**.",
    "klin": [
     "Sömnattacker om **5–15 min**, oftast i monotona situationer; patienten är oftast alert vid uppvaknandet.",
     "**Kataplexi** utlöses framför allt av kraftig affekt.",
     {
      "h": "Narkoleptiska tetraden"
     },
     "Insomningsbenägenhet, kataplexi, sömnparalys, hypnagoga hallucinationer.",
     "Hela tetraden finns bara hos ca 10 %, men de två första hos ca 70 %.",
     "Parasomnier som sömnparalys och livliga hypnagoga hallucinationer förekommer även separat."
    ],
    "diag": [
     "**HLA-DQB1:** ca 90 % av patienterna är positiva.",
     "**MSLT** (multipelt sömnlatenstest): tidigt inträde i REM-sömn och hög insomningsfrekvens = diagnos.",
     "Viss evidens för **hypokretinbrist**."
    ],
    "beh": [
     "1:a hand **sömnhygien**.",
     "Bekräftad narkolepsi: vakenhetsstimulerande **modafinil 100–400 mg/d**.",
     "2:a hand **metylfenidat/amfetamin 10–50 mg/d**.",
     "Dominerande eller kvarstående kataplexi: **klomipramin**."
    ],
    "hand": [
     "Informera om körkort: patient med dåligt reglerad narkolepsi får **inte inneha körkort**."
    ],
    "flagg": [
     "Dåligt reglerad narkolepsi – körkortshinder.",
     "Sömnapné är vanligaste orsaken till hypersomni – utred även den.",
     "Kataplexi kan misstolkas som andra attacker med tonusförlust."
    ],
    "ddx": [
     [
      "t9-056",
      "Hypersomni",
      "Bredare begrepp; sömnapné vanligaste orsaken."
     ],
     [
      "t9-348",
      "Sömnapnésyndrom och snarkning",
      "Dagtrötthet med snarkning och apnéer, utan kataplexi."
     ],
     [
      "t9-033",
      "Akut handläggning av epileptiskt anfall",
      "Anfall med medvetandepåverkan och kramper, inte affektutlöst tonusförlust."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 22",
     "Kompendium ÖNH (T9), s. 31"
    ]
   },
   "card": {},
   "km": [
    "neuro:42"
   ]
  },
  {
   "id": "t9-058",
   "name": "Parkinsons sjukdom",
   "specialty": "Neurologi",
   "sub": "Rörelsestörningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Parkinsons sjukdom** är en oftast idiopatisk neurodegenerativ sjukdom med **degeneration av nigrostriatala dopaminerga banor** och dopaminbrist i neostriatum. Den kännetecknas av triaden **tremor, hypokinesi och rigiditet** och är en **klinisk diagnos**.",
    "klin": [
     "Prevalens ca 15/10 000; vanligaste debutålder ca 60 år. Vissa familjära former finns.",
     {
      "h": "Tremor"
     },
     "Ca 70 % debuterar med **ensidig handtremor** som efter ½–1 år engagerar hela extremiteten och några år senare blir bilateral.",
     "Långsam (4–8 Hz) **vilotremor** som minskar vid viljemässig rörelse och ökar vid stress.",
     {
      "h": "Hypokinesi"
     },
     "Förlångsamning särskilt vid finmotorik/alternerande rörelser, **mikrografi**, **hypomimi**, entonig röst.",
     "Korta, hasande steg, nedsatt medpendling av armen, **freezing** vid start, vändning och trånga passager.",
     {
      "h": "Rigiditet"
     },
     "Statusfynd: ökat motstånd i båda riktningar, oberoende av hastighet; **kugghjulsfenomen**.",
     {
      "h": "Övrigt"
     },
     "**Postural instabilitet**, depression i off-perioder, **hyposmi/anosmi**; oral dysfagi förekommer."
    ],
    "diag": [
     "Diagnosen är **klinisk** – DT, MR, blod- och likvorprover har ingen plats i diagnostiken.",
     "Status: gångmönster (steglängd, start, vändning), diadokokinesi, fingerspel, muskeltonus/rigiditet, mikrografi.",
     "Bekräftas av **svar på L-dopa**."
    ],
    "beh": [
     "Syftar till att öka dopaminerg transmission vid funktionsinskränkande sjukdom.",
     "**L-dopa (Madopark):** start 50–100 mg, dosökning 50–100 mg/vecka till måldos 300–400 mg/d fördelat på tre doser; bromsa upptrappningen vid illamående eller psykiska biverkningar.",
     "**Dopaminagonist** (maxdos kabergolin 4 mg, ropinirol 8 mg): sämre effekt än L-dopa men kan skjuta upp L-dopa hos yngre.",
     "**Enzymhämmare:** COMT-hämmare (entakapon), MAO-hämmare (selegilin)."
    ],
    "hand": [
     {
      "h": "Strategi enligt källan"
     },
     "Ingen/ringa funktionsinskränkning: ev. avvakta.",
     "Lindrig behandlingskrävande: MAO-hämmare eller dopaminagonist.",
     "Behandlingskrävande: dopaminagonist om yngre, **L-dopa om äldre**.",
     "Senare problem: se [[t9-061|avancerad Parkinsons sjukdom]]."
    ],
    "flagg": [
     "Plötslig debut, stegvis förlopp eller utebliven L-dopa-effekt – tänk vaskulär eller atypisk parkinsonism.",
     "Kognitiv svikt inom ett år från motorisk debut talar för Lewy body-demens (ettårsregeln).",
     "Neuroleptika kan ge läkemedelsutlöst parkinsonism – gå igenom läkemedelslistan."
    ],
    "ddx": [
     [
      "t9-060",
      "Differentialdiagnoser till Parkinsons sjukdom",
      "Vaskulär parkinsonism, PSP, MSA, LM-utlöst parkinsonism, DLB."
     ],
     [
      "t9-062",
      "Tremor",
      "Essentiell tremor är postural/aktionstremor som lindras av alkohol."
     ],
     [
      "",
      "Demens med Lewykroppar",
      "Fluktuerande vakenhet, synhallucinationer och kognitiv debut inom ett år."
     ],
     [
      "t9-049",
      "Kommunicerande hydrocefalus",
      "Gångapraxi, kognitiv svikt och inkontinens; vidgade ventriklar."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 23–24, 31",
     "Kompendium ÖNH (T9), s. 32"
    ]
   },
   "card": {},
   "km": [
    "neuro:43",
    "neuro:47",
    "neuro:48"
   ],
   "prog": [
    [
     "t4",
     "Termin 4",
     "t4-202",
     "Parkinsons sjukdom"
    ]
   ]
  },
  {
   "id": "t9-059",
   "name": "Parkinsonism",
   "specialty": "Neurologi",
   "sub": "Rörelsestörningar",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Parkinsonism** är samlingsnamnet för den kliniska bilden med **hypokinesi, rigiditet, tremor** och **postural instabilitet**, oavsett orsak. Vanligast är idiopatisk Parkinsons sjukdom, men även **läkemedel (neuroleptika)**, vaskulär sjukdom och atypiska degenerativa sjukdomar ger parkinsonism.",
    "klin": [
     {
      "h": "Symtom"
     },
     "Vilotremor, hypokinesi (mikrografi, hypomimi, hasande gång, freezing), rigiditet med kugghjulsfenomen, postural instabilitet (”faller som en tennsoldat”, semiflexion, propulsion).",
     {
      "h": "Orsaker"
     },
     "**Parkinsons sjukdom** (idiopatisk).",
     "**Läkemedelsutlöst parkinsonism:** utvecklas successivt under doshöjning av neuroleptika; nästan identiska symtom men mindre uttalad tremor, ofta med högre frekvens.",
     "**Vaskulär parkinsonism:** plötslig debut, icke-progredierande/stegvis förlopp, ingen L-dopa-effekt.",
     "**PSP:** supranukleär blickpares, postural instabilitet bakåt, axial rigiditet.",
     "**MSA:** tidig dysautonomi, rigiditet och akinesi med lite tremor, dystoni och antekollis.",
     "**Demens med Lewykroppar:** hypokinesi, rigiditet, postural instabilitet + fluktuerande uppmärksamhet och synhallucinationer."
    ],
    "diag": [
     "Klinisk bedömning med neurologstatus; L-dopa-svar talar för Parkinsons sjukdom.",
     "Gå igenom **läkemedelslistan** (neuroleptika).",
     "Vid DLB bidrar DT/MR och lab inte till diagnosen."
    ],
    "beh": [
     "Parkinsons sjukdom: L-dopa, dopaminagonist, enzymhämmare, se [[t9-058|Parkinsons sjukdom]].",
     "**Läkemedelsutlöst parkinsonism:** antikolinergika – sätts inte in profylaktiskt och bör försöka sättas ut efter 1–2 månader."
    ],
    "hand": [
     "Vid DLB: sätt ut dopaminerga läkemedel som satts in på misstanke om Parkinson (kan utlösa hallucinationer)."
    ],
    "flagg": [
     "Ingen L-dopa-effekt – ifrågasätt diagnosen Parkinsons sjukdom.",
     "Neuroleptikabehandling – tänk läkemedelsorsak.",
     "Tidiga hallucinationer eller fluktuerande vakenhet – tänk Lewy body-demens."
    ],
    "ddx": [
     [
      "t9-058",
      "Parkinsons sjukdom",
      "Ensidig debut, vilotremor, god L-dopa-effekt."
     ],
     [
      "t9-060",
      "Differentialdiagnoser till Parkinsons sjukdom",
      "Översikt över atypisk och sekundär parkinsonism."
     ],
     [
      "t9-062",
      "Tremor",
      "Essentiell tremor saknar hypokinesi och rigiditet."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 23–24, 31–32"
    ]
   },
   "card": {},
   "km": [
    "neuro:44",
    "neuro:47"
   ]
  },
  {
   "id": "t9-060",
   "name": "Differentialdiagnoser till Parkinsons sjukdom",
   "specialty": "Neurologi",
   "sub": "Rörelsestörningar",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Viktiga **differentialdiagnoser till Parkinsons sjukdom** är **vaskulär parkinsonism**, **progressiv supranukleär paralys (PSP)**, **multipel systematrofi (MSA)**, **läkemedelsutlöst parkinsonism**, **demens med Lewykroppar** och **essentiell tremor**. Utebliven **L-dopa-effekt** talar mot Parkinsons sjukdom.",
    "klin": [
     {
      "tbl": [
       [
        "Diagnos",
        "Skiljande drag"
       ],
       [
        "Vaskulär parkinsonism",
        "Plötslig debut, ej progredierande/stegvis försämring, ingen L-dopa-effekt"
       ],
       [
        "PSP",
        "Supranukleär blickpares, postural instabilitet bakåt, axial rigiditet; lätta–måttliga kognitiva nedsättningar"
       ],
       [
        "MSA",
        "Tidig dysautonomi, rigiditet och akinesi men lite tremor, dystoni och antekollis"
       ],
       [
        "LM-utlöst parkinsonism",
        "Under neuroleptikabehandling; mindre uttalad tremor med högre frekvens"
       ],
       [
        "Demens med Lewykroppar",
        "Fluktuerande uppmärksamhet, synhallucinationer, kognitiv debut inom ett år från motorisk (ettårsregeln)"
       ],
       [
        "Essentiell tremor",
        "Postural tremor 5–7 Hz och aktionstremor, sällan vilotremor; dämpas av alkohol"
       ],
       [
        "Normaltryckshydrocefalus",
        "Gångapraxi, kognitiv svikt, urininkontinens; vidgade ventriklar"
       ]
      ]
     }
    ],
    "diag": [
     "Parkinsons sjukdom är en klinisk diagnos som bekräftas av **L-dopa-svar**.",
     "Neurologstatus: gång, ögonmotorik (blickpares vid PSP), postural instabilitet, autonoma symtom.",
     "Om kognitiv nedsättning kommer mer än ett år efter motorisk debut talar man om Parkinsons sjukdom med demens."
    ],
    "beh": [
     "LM-utlöst parkinsonism: antikolinergika, ej profylaktiskt, försök utsätta efter 1–2 mån.",
     "Essentiell tremor: betablockerare (propranolol 120–160 mg), ev. DBS mot VIM-kärnan i thalamus.",
     "DLB: sätt ut dopaminerga läkemedel; kolinesterashämmare kan ha viss effekt."
    ],
    "hand": [
     "Vid osäker diagnos och dålig L-dopa-effekt: ompröva diagnosen."
    ],
    "flagg": [
     "Ingen L-dopa-effekt – inte typisk Parkinsons sjukdom.",
     "Dopaminerga läkemedel kan utlösa hallucinationer vid DLB.",
     "Tidig dysautonomi eller blickpares – atypisk parkinsonism."
    ],
    "ddx": [
     [
      "t9-058",
      "Parkinsons sjukdom",
      "Ensidig debut med vilotremor och god L-dopa-effekt."
     ],
     [
      "t9-062",
      "Tremor",
      "Essentiell tremor – vanligaste rörelsestörningen."
     ],
     [
      "t9-049",
      "Kommunicerande hydrocefalus",
      "NPH med gångapraxi; tapptest."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 18, 23–24, 31–32"
    ]
   },
   "card": {},
   "km": [
    "neuro:47"
   ]
  },
  {
   "id": "t9-061",
   "name": "Avancerad Parkinsons sjukdom",
   "specialty": "Neurologi",
   "sub": "Rörelsestörningar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid **avancerad Parkinsons sjukdom** avtar L-dopa-effekten med **dosglapp** och **on–off-fenomen**, och **L-dopa-resistenta symtom** tillkommer. Behandlingen optimeras med fler dostillfällen, tillägg av agonist eller enzymhämmare, och i utvalda fall **intestinal L-dopa-gel** eller **DBS**.",
    "klin": [
     {
      "h": "L-dopa-resistenta symtom"
     },
     "Dysartri, **freezing**, **postural instabilitet**, dysautonoma symtom, viktminskning, sensoriska symtom inklusive smärta, depression, **demens**.",
     {
      "h": "Fluktuationer"
     },
     "”On” = patienten fungerar bra; ”off” = parkinsonismperiod (depression kan förekomma i off).",
     "Oral dysfagi förekommer vid Parkinson."
    ],
    "diag": [
     "Kartlägg när under dosintervallet symtomen uppträder (dosglapp vs on–off).",
     "Notera psykiska biverkningar och illamående vid doshöjning."
    ],
    "beh": [
     {
      "tbl": [
       [
        "Problem",
        "Åtgärd enligt källan"
       ],
       [
        "Otillräcklig effekt",
        "Höj dos (L-dopa/agonist); kombinera L-dopa och agonist"
       ],
       [
        "Dosglapp",
        "Tillägg entakapon (200 mg till varje L-dopados), fler dostillfällen, tillägg agonist"
       ],
       [
        "On–off-fenomen",
        "Fördela dygnsdosen på fler tillfällen, tillägg agonist eller enzymhämmare, intestinal L-dopa-gelinfusion"
       ]
      ]
     }
    ],
    "hand": [
     "Kirurgiskt alternativ: **DBS** med mål i thalamus, pallidum eller subthalamicus, se [[t9-067|neurokirurgisk behandling]].",
     "Intestinal L-dopa-gel är dyr och reserveras för svåra fluktuationer."
    ],
    "flagg": [
     "Hallucinationer under dopaminerg behandling – tänk även Lewy body-demens.",
     "Depression i off-perioder kan förväxlas med primär depression.",
     "Freezing och postural instabilitet svarar dåligt på L-dopa – fallrisk."
    ],
    "ddx": [
     [
      "t9-058",
      "Parkinsons sjukdom",
      "Tidigt skede med god och stabil L-dopa-effekt."
     ],
     [
      "t9-067",
      "Neurokirurgisk behandling vid rörelserubbningar",
      "DBS vid fluktuationer."
     ],
     [
      "t9-060",
      "Differentialdiagnoser till Parkinsons sjukdom",
      "Dålig L-dopa-respons kan bero på felaktig diagnos."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 23–24, 31",
     "Kompendium ÖNH (T9), s. 32"
    ]
   },
   "card": {},
   "km": [
    "neuro:48"
   ]
  },
  {
   "id": "t9-062",
   "name": "Tremor",
   "specialty": "Neurologi",
   "sub": "Rörelsestörningar",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Tremor** är rytmiska ofrivilliga rörelser. Kliniskt skiljer man **vilotremor** (typiskt Parkinsons sjukdom, 4–8 Hz) från **postural/aktionstremor** (typiskt **essentiell tremor**, 5–7 Hz). **Fysiologisk tremor** förekommer hos alla.",
    "klin": [
     {
      "tbl": [
       [
        "Typ",
        "Kännetecken"
       ],
       [
        "Essentiell tremor",
        "Vanligaste motorikstörningen (troligen >5 % över 65 år); debut i ena handen, snart bilateral; postural tremor 5–7 Hz och ofta aktionstremor, sällan vilotremor; dämpas av små mängder alkohol; mycket långsam progress"
       ],
       [
        "Parkinsons sjukdom",
        "Ensidig vilotremor 4–8 Hz som minskar vid viljemässig rörelse och ökar vid stress; åtföljs av hypokinesi och rigiditet"
       ],
       [
        "LM-utlöst parkinsonism",
        "Neuroleptika; tremor mindre uttalad och med högre frekvens"
       ],
       [
        "Alkoholabstinens",
        "Handtremor med autonom hyperaktivitet; kraftigare tremor vid delirium tremens"
       ]
      ]
     }
    ],
    "diag": [
     "Anamnes: debut, sida, alkoholeffekt, läkemedel (neuroleptika), alkoholbruk.",
     "Status: vilo- vs postural/aktionstremor, hypokinesi, rigiditet.",
     "Vid essentiell tremor kan inga strukturella förändringar påvisas."
    ],
    "beh": [
     "**Essentiell tremor:** betablockerare kan minska besvären men full symtomfrihet nås sällan; **propranolol 120–160 mg** mest effektivt, används främst t.ex. hos yrkesmusiker.",
     "Mycket svår essentiell tremor: **DBS** mot VIM-området i thalamus.",
     "Parkinsontremor: dopaminerg behandling, se [[t9-058|Parkinsons sjukdom]]."
    ],
    "hand": [
     "Tremor kan tidigt bli socialt handikappande – värdera behovet av behandling."
    ],
    "flagg": [
     "Vilotremor med hypokinesi – tänk Parkinsons sjukdom.",
     "Neuroleptikabehandling – läkemedelsorsak.",
     "Tremor, svettning och takykardi efter alkoholstopp – abstinens med risk för delirium."
    ],
    "ddx": [
     [
      "t9-058",
      "Parkinsons sjukdom",
      "Vilotremor och hypokinesi."
     ],
     [
      "t9-059",
      "Parkinsonism",
      "Läkemedelsutlöst och atypisk parkinsonism."
     ],
     [
      "t9-157",
      "Alkoholabstinens",
      "Handtremor med autonom hyperaktivitet."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 23–25",
     "Kompendium Psykiatri (T9), s. 22–23"
    ]
   },
   "card": {},
   "km": [
    "neuro:45"
   ]
  },
  {
   "id": "t9-063",
   "name": "Restless legs",
   "specialty": "Neurologi",
   "sub": "Rörelsestörningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Restless legs (RLS)** ger främst **obehagliga sensoriska fenomen i benen** med **behov av att röra på benen**, värst i vila och kvälls-/nattetid, och leder ofta till **insomningssvårigheter**. Diagnosen ställs **anamnestiskt**.",
    "klin": [
     "Prevalens ca 10 %, ökar med åldern.",
     "Rökning ökar risken; alkohol (särskilt färgade drycker) och koffein förvärrar.",
     {
      "h": "Primär och sekundär (ca 50/50)"
     },
     "**Primär:** okänd orsak, ev. dopaminerg förändring; hereditet i 40–50 %.",
     "**Sekundär:** bristtillstånd (järn, B12, folat), sjukdom (nedsatt njurfunktion, perifer neuropati, radikulopati, myelopati), läkemedel (SSRI, SNRI, TCA, antiepileptika, statiner m.fl.), **graviditet** (ca 30 % får RLS).",
     {
      "h": "Symtom"
     },
     "Svårbeskrivna känslor: myrkrypningar, ”sockerdricka”, klåda, sveda, elektricitet; ca hälften upplever djup smärta.",
     "Sömnstörning med insomningssvårigheter, ytlig sömn och uppvaknanden – ofta orsaken till vårdkontakt."
    ],
    "diag": [
     {
      "h": "Diagnostiska kriterier"
     },
     "Behov att röra på benen, oftast med obehagliga känselförnimmelser.",
     "Symtomen börjar eller förvärras i vila/inaktivitet.",
     "Lindras delvis eller helt av rörelse.",
     "Värre eller enbart kväll/natt (åtminstone initialt).",
     "Skilj primär från sekundär: somatiskt status och lab – **järnstatus, B12, folat, kreatinin, B-glukos, Hb**."
    ],
    "beh": [
     "**Sömnhygien.**",
     "**Järn** vid järnbrist – alltid om **ferritin <45**.",
     "**Dopaminagonister** vid svårare symtom eller otillräcklig effekt av icke-farmakologisk behandling.",
     "Svår smärta: gabapentinoider, bensodiazepiner eller opiater."
    ],
    "hand": [
     "Gå igenom läkemedelslistan (antidepressiva, antiepileptika, statiner) och minska alkohol/koffein."
    ],
    "flagg": [
     "Missa inte järnbrist – kontrollera ferritin.",
     "Läkemedel (t.ex. SSRI) kan utlösa eller förvärra RLS.",
     "Tänk på njursvikt och neuropati som sekundär orsak."
    ],
    "ddx": [
     [
      "t9-092",
      "Polyneuropati",
      "Diffus symmetrisk perifer nervpåverkan; kan också ge sekundär RLS."
     ],
     [
      "t9-091",
      "Radikulopati",
      "Dermatombunden smärta; kan även ge sekundär RLS."
     ],
     [
      "t9-154",
      "Vanliga sömnstörningar",
      "Insomni av andra orsaker."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 25"
    ]
   },
   "card": {},
   "km": [
    "neuro:46"
   ]
  },
  {
   "id": "t9-064",
   "name": "Fokal dystoni",
   "specialty": "Neurologi",
   "sub": "Rörelsestörningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "neuro:50"
   ]
  },
  {
   "id": "t9-065",
   "name": "Ataxi",
   "specialty": "Neurologi",
   "sub": "Rörelsestörningar",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Ataxi** är en koordinationsstörning (t.ex. gång-, bål- eller extremitetsataxi) som i kompendierna framför allt nämns vid **cerebellära och hjärnstamslesioner**, **MS** och **Wernickes encefalopati**.",
    "klin": [
     {
      "h": "Orsaker som nämns i källorna"
     },
     "**Cerebellär blödning/infratentoriell process** – kan snabbt ge hydrocefalus och hjärnstamskompression.",
     "**Wallenbergs syndrom** (PICA-ocklusion): ipsilateral **hemiataxi**, rotatorisk yrsel, nystagmus, Horner.",
     "Vertebralis-TIA: övergående balansrubbning, yrsel, dubbelseende.",
     "**MS:** cerebellär debut (koordination, balans) i fåtal fall; primärprogressiv MS ibland med ataxi; koordinationsnedsättning.",
     "**Wernickes encefalopati:** **gångataxi** med bredspårig gång och korta släpande steg, diplopi, konfusion."
    ],
    "diag": [
     "Akut ataxi med huvudvärk, kräkning eller sänkt medvetande: akut DT hjärna (blödning, infarkt).",
     "Misstänkt MS: MR och LP (oligoklonala band)."
    ],
    "beh": [
     "Misstänkt Wernicke: ge **tiamin** (före glukos)."
    ],
    "hand": [
     "Infratentoriell blödning >3 cm: kirurgisk utrymning/dekompression, ventrikeldrän."
    ],
    "flagg": [
     "Akut ataxi med huvudvärk – cerebellär blödning eller infarkt.",
     "Ataxi, diplopi och konfusion hos alkoholist – Wernicke, ge tiamin."
    ],
    "ddx": [
     [
      "t9-017",
      "Hjärninfarkt",
      "Akut fokal debut, t.ex. Wallenbergs syndrom."
     ],
     [
      "t9-068",
      "Multipel skleros, symtom och diagnostik",
      "Cerebellära symtom i skov eller progressiv form."
     ],
     [
      "t9-075",
      "Akut yrsel",
      "T.ex. vestibularisneuronit: balansstörning och spontannystagmus utan övriga neurologiska symtom."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 2–3, 5, 17, 26",
     "Kompendium Psykiatri (T9), s. 25",
     "Kompendium ÖNH (T9), s. 12"
    ]
   },
   "card": {},
   "km": [
    "neuro:50"
   ]
  },
  {
   "id": "t9-066",
   "name": "Huntingtons sjukdom",
   "specialty": "Neurologi",
   "sub": "Rörelsestörningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Huntingtons sjukdom** nämns i kompendiet som en sjukdom som ger **koreatiska rörelser** och **kognitiv nedsättning**, och tas upp i anslutning till frontotemporal demens.",
    "klin": [
     "**Koreatiska (ofrivilliga) rörelser.**",
     "**Kognitiv nedsättning** – sjukdomen ingår bland tillstånd med demensbild och frontala symtom."
    ],
    "diag": [
     "Ingår bland differentialdiagnoserna vid demens med frontala symtom."
    ],
    "beh": [
     "Kompendiet anger ingen behandling."
    ],
    "hand": [
     "Utred enligt sedvanlig demensutredning, se [[t9-072|demensliknande tillstånd]]."
    ],
    "flagg": [
     "Kombination av ofrivilliga rörelser och kognitiv svikt ska väcka misstanke."
    ],
    "ddx": [
     [
      "",
      "Frontotemporal demens",
      "Exekutiv dysfunktion och personlighetsförändring utan korea."
     ],
     [
      "t9-060",
      "Differentialdiagnoser till Parkinsons sjukdom",
      "PSP ger också kognitiv nedsättning men med blickpares och hypokinesi."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 32"
    ]
   },
   "card": {},
   "km": [
    "neuro:51"
   ],
   "prog": [
    [
     "t4",
     "Termin 4",
     "t4-205",
     "Huntingtons sjukdom"
    ]
   ]
  },
  {
   "id": "t9-067",
   "name": "Neurokirurgisk behandling vid rörelserubbningar",
   "specialty": "Neurologi",
   "sub": "Rörelsestörningar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Djup hjärnstimulering (DBS)** är det kirurgiska alternativet vid rörelserubbningar: vid **Parkinsons sjukdom** med mål i thalamus, pallidum eller subthalamicus och vid **mycket svår essentiell tremor** med mål i **VIM-kärnan i thalamus**.",
    "klin": [
     {
      "h": "Parkinsons sjukdom"
     },
     "Kirurgiskt alternativ vid behandlingssvikt med fluktuationer; mål: **thalamus, pallidum, subthalamicus**.",
     {
      "h": "Essentiell tremor"
     },
     "Vid mycket svår tremor där betablockerare inte räcker; mål: **VIM-området i thalamus**."
    ],
    "diag": [
     "Indikation bedöms utifrån svårighetsgrad och otillräcklig effekt av läkemedel."
    ],
    "beh": [
     "Före DBS vid Parkinson har läkemedelsoptimering prövats (dosfördelning, agonist, enzymhämmare, ev. intestinal L-dopa-gel)."
    ],
    "hand": [
     "Se [[t9-061|avancerad Parkinsons sjukdom]] och [[t9-062|tremor]] för läkemedelsstegen."
    ],
    "flagg": [
     "DBS är ett sista steg efter optimerad läkemedelsbehandling."
    ],
    "ddx": [
     [
      "t9-061",
      "Avancerad Parkinsons sjukdom",
      "Fluktuationer som kan motivera DBS."
     ],
     [
      "t9-062",
      "Tremor",
      "Essentiell tremor – DBS mot VIM vid svår tremor."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 24"
    ]
   },
   "card": {},
   "km": [
    "neuro:49"
   ]
  },
  {
   "id": "t9-068",
   "name": "Multipel skleros, symtom och diagnostik",
   "specialty": "Neurologi",
   "sub": "Multipel skleros",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Multipel skleros (MS)** är en autoimmun sjukdom där **myelin** angrips (inflammation → demyelinisering → axonskada). Diagnosen kräver **minst två CNS-lesioner skilda i tid och rum**, påvisade kliniskt eller med **MR**.",
    "klin": [
     "Prevalens ca 1,5 ‰, insjuknande vid **20–40 år**, kvinnor:män ca 2:1; familjär i nästan 20 %; miljöfaktorer: EBV, rökning, solljusexponering.",
     {
      "h": "Debutsymtom"
     },
     "**Optikusneurit** (ensidig synnedsättning, ögonrörelsesmärta) ca 20 %; **sensorisk störning** ca 40–50 %; **muskulära symtom** ca 30–40 %; i fåtal fall hjärnstam (yrsel, dubbelseende) eller cerebellärt.",
     "**Primärprogressiv MS** (minoritet) debuterar oftast med gradvis tilltagande **spastisk pares**, ibland ataxi.",
     {
      "h": "Sjukdomsbild"
     },
     "Sensorik: parestesier i ansikte, arm eller båda benen; **Lhermittes tecken** (elektriska känslor ned längs ryggen vid nackflexion).",
     "Motorik: **centrala pareser** (reflexstegring, spasticitet, Babinski), mono-/parapares.",
     "Smärta: trigeminusneuralgi (neurogen), smärtsam spasticitet.",
     "Övrigt: uttalad trötthet, blåsdysfunktion, koordinationsnedsättning, kognitiv nedsättning, sexuell dysfunktion, depression och ökad suicidrisk.",
     {
      "h": "Optikusneurit"
     },
     "Synnedsättning under några dygn med rörelsesmärta; papillit eller retrobulbär neurit (ögonbotten kan då vara normal); **RAPD** och nedsatt färgseende; ca 50 % utvecklar MS inom 15 år."
    ],
    "diag": [
     "**MR:** inflammatoriska lesioner (”Dawsons fingrar”), juxtakortikala lesioner; en enda MR kan visa spridning i tid och rum (gamla och nya lesioner).",
     "**LP:** oligoklonala band.",
     "Optikusneurit: visus, färgseende (Ishihara), swinging flashlight-test, oftalmoskopi; remiss till neurolog för MS-utredning."
    ],
    "beh": [
     "Starta behandling **direkt** vid MS-misstanke, se [[t9-070|långsiktig behandling]].",
     "Skov: kortison lindrar och förkortar, se [[t9-069|akut försämring]]."
    ],
    "hand": [
     "Information och handläggning av **multidisciplinärt team**."
    ],
    "flagg": [
     "Ensidig synnedsättning med ögonrörelsesmärta hos ung vuxen – optikusneurit, utred för MS.",
     "Depression och ökad suicidrisk vid MS.",
     "Akut para-/tetrapares med sensorisk nivå – myelit (hos unga oftast MS)."
    ],
    "ddx": [
     [
      "t9-071",
      "Differentialdiagnoser till multipel skleros",
      "Andra inflammatoriska eller strukturella CNS-sjukdomar."
     ],
     [
      "",
      "Neuromyelitis optica (Devics syndrom)",
      "Höga cervikala myeliter med ödem och kraftiga bortfall."
     ],
     [
      "t9-193",
      "Optikusneurit",
      "Kan vara första MS-manifestation men även isolerad."
     ],
     [
      "t9-084",
      "Akut debuterande ryggmärgssjukdom",
      "Akut tvärsnittsmyelit med annan orsak."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 26–27, 44",
     "Ögonboken – sammanfattning (T9), s. 20"
    ]
   },
   "card": {},
   "km": [
    "neuro:52"
   ]
  },
  {
   "id": "t9-069",
   "name": "Akut försämring vid multipel skleros",
   "specialty": "Neurologi",
   "sub": "Multipel skleros",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Ett **MS-skov** beror på en **ny inflammation i CNS** med symtom som motsvarar lokalisationen. Återkomst av tidigare symtom är oftare ett **pseudoskov**. Skov behandlas med **högdos metylprednisolon iv**, vid utebliven effekt **plasmaferes**.",
    "klin": [
     "Nya symtom för patienten = troligen nytt skov (MR visar ny kontrastladdande lesion på förenlig plats).",
     "**Återkomst av tidigare symtom = troligare pseudoskov.**",
     "Över 90 % av nya inflammationer ger inga skov; i början kommer skov ungefär en gång per år, sedan glesare.",
     "**Uhthoffs fenomen:** synen blir suddig vid förhöjd kroppstemperatur (feber, träning) efter optikusneurit.",
     "Kortvariga paroxysmala symtom: t.ex. Lhermitte, trigeminusneuralgi."
    ],
    "diag": [
     "**MR** med kontrast för ny kontrastladdande lesion.",
     "Optikusneurit: visus, färgseende, RAPD, oftalmoskopi."
    ],
    "beh": [
     "**Solu-Medrol 1 g/dag iv i 3 dagar**, därefter nedtrappning.",
     "**Plasmaferes** kan övervägas när upprepade Solu-Medrol-kurer inte haft effekt.",
     "Kortison **lindrar och förkortar** skovet men påverkar inte sjukdomsutvecklingen.",
     "Kortvariga paroxysmala symtom: **karbamazepin** (lägre dos än vid epilepsi).",
     "Optikusneurit: lättare synnedsättning – expektans; djup synnedsättning (visus 0,1–0,2) – iv pulsbehandling med kortison via neurolog."
    ],
    "hand": [
     "Akut myelit med blås-/tarmrubbning: glöm inte KAD.",
     "Säkerställ att långsiktig immunmodulerande behandling är optimal, se [[t9-070|långsiktig behandling]]."
    ],
    "flagg": [
     "Skilj skov från pseudoskov innan högdos kortison.",
     "Akut para-/tetrapares med sensorisk nivå – akut myelit, MR och snabb behandling.",
     "Kortison ändrar inte långtidsförloppet."
    ],
    "ddx": [
     [
      "t9-068",
      "Multipel skleros, symtom och diagnostik",
      "Grundsjukdom och diagnostiska kriterier."
     ],
     [
      "t9-084",
      "Akut debuterande ryggmärgssjukdom",
      "Akut tvärsnittsmyelit av annan orsak."
     ],
     [
      "t9-193",
      "Optikusneurit",
      "Isolerad optikusneurit utan MS."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 26–27, 44",
     "Ögonboken – sammanfattning (T9), s. 20"
    ]
   },
   "card": {},
   "km": [
    "neuro:53"
   ]
  },
  {
   "id": "t9-070",
   "name": "Långsiktig behandling av multipel skleros",
   "specialty": "Neurologi",
   "sub": "Multipel skleros",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Långsiktig behandling av MS syftar till att med **immunmodulerande/immunsuppressiva läkemedel** påverka sjukdomsutvecklingen och ska **startas direkt vid MS-misstanke**. I **Umeåmodellen** ges **rituximab** var 6:e månad och **D-vitamin**.",
    "klin": [
     {
      "h": "Läkemedel enligt källan"
     },
     "**Rituximab (Mabthera):** infusion en gång per 6 månader (Umeåmodellen).",
     "**D-vitamin 2000 IE dagligen** (Umeåmodellen).",
     "**Betainterferon:** ca 30 % färre skov, bättre utläkning.",
     "**Natalizumab:** förhindrar lymfocytmigration till CNS.",
     "**Fingolimod:** första perorala; 55–60 % färre skov, 30 % minskad progression."
    ],
    "diag": [
     "Fingolimod kräver **hjärtövervakning** vid insättning."
    ],
    "beh": [
     "Kortison i skov lindrar men påverkar inte sjukdomsutvecklingen – långsiktig sjukdomsmodifierande behandling krävs."
    ],
    "hand": [
     "Information och handläggning av **multidisciplinärt team**.",
     "Uppmärksamma trötthet, blåsdysfunktion, smärta/spasticitet, kognitiv nedsättning, sexuell dysfunktion och depression.",
     "Paroxysmala symtom (t.ex. trigeminusneuralgi): karbamazepin."
    ],
    "flagg": [
     "Fördröj inte behandlingsstart vid MS-misstanke.",
     "Fingolimod: hjärtövervakning vid insättning.",
     "Depression och ökad suicidrisk – följ upp psykiskt mående."
    ],
    "ddx": [
     [
      "t9-069",
      "Akut försämring vid multipel skleros",
      "Skovbehandling med högdos kortison."
     ],
     [
      "t9-068",
      "Multipel skleros, symtom och diagnostik",
      "Diagnostiska kriterier och symtom."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 26–27"
    ]
   },
   "card": {},
   "km": [
    "neuro:54"
   ]
  },
  {
   "id": "t9-071",
   "name": "Differentialdiagnoser till multipel skleros",
   "specialty": "Neurologi",
   "sub": "Multipel skleros",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid misstänkt MS måste andra orsaker till **CNS-lesioner** och skovvisa neurologiska symtom övervägas. Diagnosen kräver minst två CNS-lesioner **skilda i tid och rum** – fynd som inte passar detta mönster bör väcka misstanke om annan diagnos.",
    "klin": [
     {
      "h": "Skov eller inte?"
     },
     "**Pseudoskov**: återkomst av tidigare symtom talar mer för pseudoskov än för nytt skov; nya symtom för patienten talar för äkta skov (ny kontrastladdande lesion på MR).",
     {
      "h": "Myelit och optikusneurit av annan orsak"
     },
     "**Akut tvärsnittsmyelit**: hos unga är MS vanligaste orsaken, hos äldre systemsjukdom eller idiopatisk; kan också vara infektiös/postinfektiös (det senare vanligare).",
     "**Neuromyelitis optica (Devics syndrom)**: höga cervikala myeliter med ödem, ofta kraftiga bortfall med restsymtom och dålig prognos obehandlad.",
     "Vid **optikusneurit** – differentialdiagnoser är centralserös retinopati och (vid papillit) infektiösa (t.ex. borrelia), autoimmuna (t.ex. SLE) och toxiska orsaker (metanol, bly); ischemisk optikusneuropati drabbar oftare äldre.",
     {
      "h": "Övrigt"
     },
     "**Central facialispares** (endast nedre ansiktshalvan) kan orsakas av stroke, MS eller tumör.",
     "**Neuroborrelios** kan ge kranialnervspares, radikuliter och lymfocytär meningit – i regel med asymmetriska symtom och påtaglig allmänpåverkan."
    ],
    "diag": [
     "**MR** hjärna (och ryggmärg vid myelit): utbredning, ödem, kontrastladdning och förekomst av hjärnförändringar.",
     "**Likvor**: oligoklonala band talar för MS; vid myelit även celler, albumin, laktat, glukos, elfores och infektionsprover.",
     "Borreliaserologi och LP vid misstanke om neuroborrelios (intratekal antikroppsproduktion)."
    ],
    "hand": [
     "Vid optikusneurit: remiss till neurolog för MS-utredning.",
     "Myelit behandlas med kortison (Solu-Medrol 1 g x 1 med nedtrappning), plasmaferes eller cytostatika; glöm inte blås- och tarmrubbning."
    ],
    "flagg": [
     "Höga cervikala myeliter med ödem och kraftiga bortfall – tänk **NMO**, dålig prognos obehandlad.",
     "Återkomst av gamla symtom (t.ex. vid feber) är ofta pseudoskov, inte nytt skov.",
     "Asymmetrisk kranialnervspares/radikulit efter fästingexponering – ta borreliaserologi och LP."
    ],
    "ddx": [
     [
      "t9-068",
      "Multipel skleros, symtom och diagnostik",
      "Minst två lesioner skilda i tid och rum, oligoklonala band."
     ],
     [
      "t9-193",
      "Optikusneurit",
      "Unilateral synnedsättning med rörelsesmärta; vanligare vid MS."
     ],
     [
      "t9-083",
      "Neuroborrelios",
      "Fästinganamnes, lymfocytär meningoradikulit, intratekala antikroppar."
     ],
     [
      "t9-084",
      "Akut debuterande ryggmärgssjukdom",
      "Akut tvärsnittsmyelit, NMO och vaskulära ryggmärgssyndrom."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 26–27",
     "Kompendium Neurologi (T9), s. 42",
     "Kompendium Neurologi (T9), s. 44",
     "Ögonboken – sammanfattning (T9), s. 20–21",
     "Kompendium ÖNH (T9), s. 13"
    ]
   },
   "card": {},
   "km": [
    "neuro:55"
   ]
  },
  {
   "id": "t9-072",
   "name": "Demensliknande tillstånd",
   "specialty": "Neurologi",
   "sub": "Demens och konfusion",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Demens** är en förvärvad och stadigvarande nedsättning av kognitiva funktioner. Demensliknande bilder kan uppstå av primärdegenerativa och vaskulära sjukdomar men också av **behandlingsbara sekundära orsaker** som alltid ska uteslutas.",
    "klin": [
     {
      "h": "Symtombilder"
     },
     "**Neurasteniskt syndrom**: abnorm trötthet, koncentrationssvårigheter, emotionell instabilitet – vid lindrig hjärnskada eller tidig degenerativ process.",
     "**Frontallobssyndrom**: personlighetsförändring, konativa störningar, frikopplingssymtom (distanslöshet, ohämmat beteende).",
     "**Korsakovtyp**: närminnesstörning, konfabulation och bristande insikt (tiaminbrist, bilateral temporallobsskada).",
     "**Perceptionsstörning** vid parietallobsskada: agnosi, neglekt, spatial desorientering, afasi, apraxi.",
     "Subkortikal demens: långsamt tankeförlopp och minnesnedsättning; kortikal demens: afasi, apraxi, spatiala svårigheter.",
     {
      "h": "Vanliga orsaker"
     },
     "**Alzheimers sjukdom** (vanligast; temporoparietal, smygande närminnesstörning), **Lewy body-demens** (fluktuationer, synhallucinationer, parkinsonism), **frontotemporal demens** (debut 45–65 år, exekutiva svårigheter) och **vaskulär demens** (SVD eller trappstegsförlopp).",
     "Sekundära orsaker: hydrocefalus, tumör, B12-brist, hypotyreos, hyperparatyreoidism, depression, läkemedelsbiverkan, ihållande konfusion, kroniskt subduralhematom och infektioner (t.ex. herpes, TB, tertiär neuroborrelios)."
    ],
    "diag": [
     "**Anamnes** från patient och anhöriga: symtom, debut, utveckling, stämningsläge (glöm inte inkontinens).",
     "**Status**: somatiskt, psykiskt och neurologiskt; **MMT** och klocktest; leta tecken på fokal eller diffus skada (primitiva reflexer, apraxi, stereognosi).",
     "**Basal lab**: SR, Hb, LPK, TPK, TSH, B12 (ev. homocystein/metylmalonat), folat, elektrolyter/kreatinin (hyperkalcemi), lever- och gallstatus samt serologi för syfilis, borrelia och hiv.",
     "**DT hjärna** i första hand för att utesluta expansivitet; MR hos yngre eller vid behov av mer information.",
     "Alzheimer: medial temporallobsatrofi samt förhöjt tau/P-tau och sänkt betaamyloid i likvor.",
     "Vid osäkerhet specialistremiss (t.ex. SPECT/PET för cerebralt blodflöde)."
    ],
    "beh": [
     "Alzheimer lindrig–medelsvår: **acetylkolinesterashämmare** (donepezil, rivastigmin, galantamin); medelsvår–svår: **memantin**.",
     "Vaskulär demens: ingen behandling när kognitiv nedsättning väl utvecklats – primär- och sekundärprevention (FF, arytmier, hypertoni, halskärlsstenos).",
     "Symtom: depression/ångest → SSRI; paranoida vanföreställningar/hallucinationer → risperidon eller olanzapin; sömnstörning → miljöåtgärder, vid behov zopiklon/zolpidem."
    ],
    "hand": [
     "Närståendeinformation, känd och lugn miljö, noggrann läkemedelsgenomgång (undvik antikolinergika), kost och vätska.",
     "Funktionsbedömning av arbetsterapeut (resurser, vårdplanering, körkort).",
     "Boende efter grad: hemtjänst → gruppboende → institutionsvård."
    ],
    "flagg": [
     "Uteslut alltid **behandlingsbar sekundär demens** (NPH, tumör, B12-brist, hypotyreos, depression, läkemedel).",
     "Kognitiv svikt efter infektion – misstänk sekundär hydrocefalus, abscess eller septiska embolier.",
     "Lewy body-demens: dopaminerga läkemedel kan utlösa hallucinationer – sätt ut vid korrekt diagnos.",
     "Kroniskt subduralhematom kan tolkas som snabbt progredierande demens."
    ],
    "ddx": [
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Akut debut och fluktuerande uppmärksamhet."
     ],
     [
      "t9-049",
      "Kommunicerande hydrocefalus",
      "NPH: gångapraxi, kognitiv svikt och urinträngningar; förbättras med shunt."
     ],
     [
      "t9-046",
      "Kroniskt subduralhematom",
      "Veckor–månader efter banalt trauma; DT ställer diagnosen."
     ],
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Depression kan ge demensliknande bild."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 17–18",
     "Kompendium Neurologi (T9), s. 28–34"
    ]
   },
   "card": {},
   "km": [
    "neuro:56",
    "neuro:58"
   ]
  },
  {
   "id": "t9-073",
   "name": "Akuta konfusionstillstånd",
   "specialty": "Neurologi",
   "sub": "Demens och konfusion",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Akut konfusion (delirium)** är en akut debuterande uppmärksamhetsstörning och kognitiv svikt med nedsatt medvetandeklarhet. Det är ett **symtom** – i ca 90 % finns en somatisk orsak som alltid ska utredas.",
    "klin": [
     "Debut över timmar–dagar med **fluktuationer** över dygnet, ofta förvärrat nattetid.",
     "Förvirring, oförmåga att fokusera, minnesstörning, störd sömnrytm, splittrad tankeverksamhet, utåtagerande eller motorisk oro.",
     "Talet kan bli inadekvat men med korrekt grammatik (skiljer från sensorisk afasi).",
     "Psykomotoriken kan vara stegrad eller sänkt; hallucinationer och vanföreställningar förekommer.",
     "Predisponerande: hög ålder och demens (sänkt förvirringströskel).",
     {
      "h": "Vanliga utlösande orsaker"
     },
     "Hypoglykemi, intox, icke-konvulsiv epilepsi, infektion (meningit, encefalit, pneumoni, UVI, sepsis), trauma, större kirurgi, organsvikt, läkemedel, urinstämma/förstoppning, smärta, malnutrition/elektrolytrubbning, cirkulationsstörning."
    ],
    "diag": [
     "Vittnesbeskrivning, läkemedelslista, sjukdomshistoria och insjuknande; tänk **HUSK-MIDAS**.",
     "Allmänstatus: urinstämma, temperatur, nackstelhet.",
     "Kontakt: dröjande och osäker talar för konfusion; snabb men inadekvat med flyktiga associationer talar för psykos.",
     "Prover: blodbild, CRP, leverprover, elektrolyter, kreatinin, intox, EKG; **LP** vid misstanke om meningit/encefalit.",
     "Vid stark misstanke om fokal epilepsi kan diazepam 10 mg iv prövas."
    ],
    "beh": [
     "Kontrollera blodglukos direkt; vid hypoglykemi ge 30 ml 30 % glukos iv (vid misstänkt alkoholöverkonsumtion ges tiamin/B-vitaminer iv **före** glukos).",
     "Vid misstänkt alkoholabstinens/delirium: ge **tiamin**.",
     "Korrigera somatisk sjukdom, sanera läkemedelslistan (antikolinerga, sederande, psykoaktiva), god smärtlindring, behandla förstoppning, undvik KAD.",
     "Undvik läkemedel om möjligt; vid svår oro **haloperidol** (låg antikolinerg effekt), vid svår sömnproblematik klometiazol (Heminevrin)."
    ],
    "hand": [
     "Lugn, trygg miljö med ljussättning efter dygnet, mobilisering och anpassad omvårdnad.",
     "I typfallet går konfusionen över inom några dagar."
    ],
    "flagg": [
     "Delirium är ett symtom – leta alltid bakomliggande orsak.",
     "Glöm inte hypoglykemi, icke-konvulsivt status och CNS-infektion.",
     "Lugnande läkemedel kan förvärra konfusionen; undvik högdosneuroleptika."
    ],
    "ddx": [
     [
      "t9-072",
      "Demensliknande tillstånd",
      "Smygande förlopp utan uttalad fluktuation av vakenhet."
     ],
     [
      "t9-133",
      "Schizofreni",
      "Relativt konstant tillstånd, hörselhallucinationer, minne och orientering opåverkade."
     ],
     [
      "t9-157",
      "Alkoholabstinens",
      "Delirium tremens 1–4 dygn efter upphört intag."
     ],
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Depression är en viktig differentialdiagnos."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 29",
     "Kompendium Neurologi (T9), s. 35–36",
     "Kompendium Psykiatri (T9), s. 20"
    ]
   },
   "card": {},
   "km": [
    "neuro:57"
   ]
  },
  {
   "id": "t9-074",
   "name": "Transitorisk global amnesi",
   "specialty": "Neurologi",
   "sub": "Demens och konfusion",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Transitorisk global amnesi (TGA)** är en akut insättande, övergående minnesstörning med **anterograd amnesi** och retrograd amnesi, i övrigt med helt adekvat patient. Patogenesen är oklar, troligen en lokal kärlreaktion bilateralt i mediala temporallober (snarare migränlik än TIA).",
    "klin": [
     "Attack som håller i några **timmar**; oförmåga att bilda nya minnen – frågar samma frågor upprepat och verkar förvirrad.",
     "Retrograd amnesi som sträcker sig timmar, dagar eller veckor bakåt.",
     "Känner igen närstående och miljöer, äldre minnen bevarade, kan räkna och köra bil.",
     "Uppträder vanligen spontant, ibland efter måttligt skalltrauma.",
     "Klingar successivt av; fullständig amnesi kvarstår för attacken och tiden precis innan."
    ],
    "diag": [
     "Klinisk diagnos; vid **typisk TGA** behövs ingen avbildning av hjärnan.",
     "Tänk på attackens duration vid differentiering mot fokalt epileptiskt anfall."
    ],
    "hand": [
     "Information till patient och anhöriga om diagnosen och den **goda prognosen**.",
     "Attacken återkommer sällan mer än en gång."
    ],
    "flagg": [
     "Atypisk bild (fokalneurologi, nedsatt vakenhet) – då är det inte typisk TGA och utredning krävs.",
     "Fokalt epileptiskt anfall är viktigaste differentialdiagnosen."
    ],
    "ddx": [
     [
      "t9-033",
      "Akut handläggning av epileptiskt anfall",
      "Fokala anfall kan ge amnesi men är oftast kortare."
     ],
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Global förvirring och fluktuerande uppmärksamhet, inte isolerad minnesstörning."
     ],
     [
      "t9-016",
      "Transitorisk ischemisk attack (TIA)",
      "Fokala neurologiska bortfall."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 36"
    ]
   },
   "card": {},
   "km": [
    "neuro:59"
   ]
  },
  {
   "id": "t9-075",
   "name": "Akut yrsel",
   "specialty": "Neurologi",
   "sub": "Yrsel och balansstörning",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Yrsel** uppstår vid dyssynkroni mellan sinnen (balans, proprioception, känsel, syn). Vid akut yrsel ska man skilja **perifer (otogen)** yrsel, från vestibularisorganet eller n. vestibularis, från **central** yrsel i hjärnan.",
    "klin": [
     {
      "h": "Perifer eller central"
     },
     "Perifer: utlöst av rörelse/huvudvridning, patologiskt impulstest, ofta mer uttalat illamående och kräkning.",
     "Central: blickriktningsnystagmus under fixation och vertikal nystagmus (bakre skallgropen), ofta mer uttalad balansrubbning.",
     "Rotatorisk yrsel talar för otogen orsak men utesluter inte central; nautisk yrsel förekommer vid alla orsaker.",
     {
      "h": "Vanliga orsaker"
     },
     "**BPPV** – vanligaste orsaken till akut yrsel: yrsel med 2–3 s latens efter huvudrörelse, klingar av efter 15–30 s, uttröttbar.",
     "**Vestibularisneuronit**: plötslig karusellyrsel, falltendens mot sjuk sida, illamående; spontannystagmus mot frisk sida, utan hörsel- eller neurologiska symtom.",
     "**Mb Ménière**: attacker med rotatorisk yrsel, hörselnedsättning i basfrekvenser, tinnitus och lockkänsla.",
     "Centralt: vertebralis-TIA/stroke, t.ex. **Wallenbergs syndrom** (rotatorisk yrsel, kräkning, nystagmus, ipsilateral Horner och hemiataxi).",
     "Glöm inte ångest och missbruk som orsak."
    ],
    "diag": [
     "Anamnes: hur, när, var, karaktär, förlopp, utlösande faktorer, medvetandepåverkan, gångsvårigheter, neurologiska symtom.",
     "Status: cirkulation, neurologi, nystagmus, **Dix-Hallpike** (med Frenzelglasögon) och öronstatus.",
     "Lab: blodstatus, elstatus, TSH, glukos, infektionsprover och EKG.",
     "**DT/MR** vid misstanke om central orsak."
    ],
    "beh": [
     "BPPV i bakre båggången: **Epleys manöver** vid positiv Dix-Hallpike; lateral båggång: barbecuerotation; sedan träningsprogram i 14 dagar.",
     "Vestibularisneuronit: vanligen inläggning, antihistamin (åksjukemedel) initialt, steroider de första tre dagarna kan förbättra återhämtningen, därefter träningsprogram.",
     "Akut Ménière-attack behandlas som vestibularisneuronit."
    ],
    "hand": [
     "BPPV som inte blir bra efter två manöverförsök: remiss till ÖNH (nystagmografi och/eller MR).",
     "Vid TIA/stroke i vertebralisterritoriet: inläggning och DT enligt strokehandläggning."
    ],
    "flagg": [
     "Vertikal nystagmus, blickriktningsnystagmus och uttalad balansrubbning talar för **central** orsak.",
     "Yrsel med neurologiska symtom (dubbelseende, dysartri, ataxi) – tänk vertebralis-TIA/stroke.",
     "Yrsel tillsammans med facialispares och öronsmärta/blåsor – tänk zoster oticus."
    ],
    "ddx": [
     [
      "t9-311",
      "Benign lägesyrsel",
      "Kortvarig lägesutlöst yrsel, positiv Dix-Hallpike."
     ],
     [
      "t9-312",
      "Vestibularisneuronit",
      "Ihållande karusellyrsel, spontannystagmus mot frisk sida, normal hörsel."
     ],
     [
      "t9-313",
      "Mb Ménière",
      "Attacker med hörselnedsättning, tinnitus och lockkänsla."
     ],
     [
      "t9-016",
      "Transitorisk ischemisk attack (TIA)",
      "Yrsel med dubbelseende, dysartri eller balansrubbning i vertebralisterritoriet."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 2–3",
     "Kompendium ÖNH (T9), s. 6",
     "Kompendium ÖNH (T9), s. 11–12"
    ]
   },
   "card": {},
   "km": [
    "neuro:60"
   ]
  },
  {
   "id": "t9-076",
   "name": "Kronisk yrsel",
   "specialty": "Neurologi",
   "sub": "Yrsel och balansstörning",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Långvarig eller återkommande yrsel kan bero på **återkommande vestibulära sjukdomar**, ofullständig återhämtning efter vestibulär skada, nackbesvär eller psykiska faktorer. Grundprincipen är densamma som vid akut yrsel: skilj perifer från central orsak.",
    "klin": [
     "**Mb Ménière**: attacker i perioder (månader–år) med rotatorisk yrsel, basfrekvent hörselnedsättning, tinnitus, lockkänsla och diplakusi; hörselnedsättningen blir så småningom permanent; ”droppattacker” kan förekomma.",
     "**Efter vestibularisneuronit**: återkommer inte full funktion kan lillhjärnan kalibrera om; patienten kan då ha tillfällig ostadighetsyrsel vid stress/trötthet och blir lättare uttröttad upp till ¾ år.",
     "**Nackyrsel/whiplash** (omtvistad diagnos): ostadighetsyrsel där nackbesvären föregick yrseln.",
     "Ångest och missbruk som orsak.",
     "Central orsak (bakre skallgropen) ger ofta mer uttalad balansrubbning."
    ],
    "diag": [
     "Anamnes om debut, förlopp, utlösande faktorer och associerade symtom (hörsel, tinnitus, neurologi).",
     "Status inkl. nystagmus, Dix-Hallpike och öronstatus; lab (blodstatus, elstatus, TSH, glukos) och EKG.",
     "DT/MR vid misstanke om central orsak; nackyrsel får diagnosen först när annan orsak uteslutits och yrseln försvinner vid behandling av nackbesvären."
    ],
    "beh": [
     "Ménière milda–måttliga besvär: vätskedrivande (tiazid/furosemid), antihistamin (Betaserc), rör i trumhinnan; måttliga–svåra: remiss ÖNH (t.ex. ureabehandling, lokal tryckbehandling, labyrintdestruktion).",
     "Kvarstående vestibulär nedsättning: träningsprogram.",
     "Nackyrsel: fysioterapi och uppföljning."
    ],
    "flagg": [
     "Yrsel med hörselnedsättning, tinnitus eller facialispares – tänk även akustikusneurinom (vestibularis-schwannom).",
     "Tillkomst av neurologiska symtom kräver DT/MR."
    ],
    "ddx": [
     [
      "t9-313",
      "Mb Ménière",
      "Episodisk yrsel med hörselnedsättning och tinnitus."
     ],
     [
      "t9-314",
      "Whiplash och nackyrsel",
      "Nackbesvär före yrsel, ostadighetskaraktär."
     ],
     [
      "t9-075",
      "Akut yrsel",
      "Akut insjuknande – BPPV, neuronit, vertebralis-TIA."
     ],
     [
      "t9-077",
      "Primära tumörer som engagerar nervsystemet",
      "Akustikusneurinom: hörselnedsättning, tinnitus, ev. facialispares."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 11–13",
     "Kompendium Neurologi (T9), s. 38",
     "Kompendium Neurologi (T9), s. 51"
    ]
   },
   "card": {},
   "km": [
    "neuro:60"
   ]
  },
  {
   "id": "t9-077",
   "name": "Primära tumörer som engagerar nervsystemet",
   "specialty": "Neurologi",
   "sub": "Tumörer i nervsystemet",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Primära CNS-tumörer utgår från nervsystemets vävnader och hinnor; hos vuxna ligger 90 % **supratentoriellt**. Ca 48 % är neuroepiteliala (gliom m.fl.) och 15 % meningeom. Klassifikation och diagnos ställs alltid **histopatologiskt**.",
    "klin": [
     "**Tryckrelaterade** symtom: huvudvärk, illamående, kräkning, staspapill.",
     "**Fokala** symtom: pareser, sensibilitetsstörning, synfältsbortfall, kramper (ofta Jackson-anfall).",
     "Huvudvärk vid expansivitet: svårast efternatt/morgon, förvärras av host/nysning och ansträngning.",
     {
      "h": "Tumörformer"
     },
     "**Astrocytom** grad I–IV (III–IV maligna, grad IV = glioblastom); låggradiga vanligare hos yngre (20–50 år); infiltrativt växtsätt.",
     "**Oligodendrogliom**: 40–50 år, oftast låggradigt; förkalkningar och cystor på CT.",
     "**Ependymom**: vid likvorrummen, vanligast hos barn/tonåringar, kan spridas via likvorvägarna.",
     "**Meningeom**: extraaxialt, oftast benignt, ffa. trycksymtom, kraftigt kontrastladdande.",
     "**Akustikusneurinom** (schwannom): hörselnedsättning, tinnitus, facialispares.",
     "**Hypofysadenom**: hormonella syndrom (prolaktinom, Cushing, akromegali) och bitemporal hemianopsi.",
     "**Kraniofaryngeom** (hälften < 18 år) och **pinealistumörer** (Parinauds syndrom) ger ofta sekundär hydrocefalus."
    ],
    "diag": [
     "Anamnes och nervstatus inkl. ögonbottenspegling.",
     "**CT med kontrast** i första hand; **MR med kontrast** vid skallbasförändringar, blank CT med kvarstående misstanke och inför operation (obligat vid hypofystumör).",
     "Ependymom: LP för cytologi; pinealistumör: AFP och hCG i likvor/serum, MR inkl. spinalkanal."
    ],
    "beh": [
     "Vasogent hjärnödem: **kortikosteroider** och mannitol; kramper: antiepileptika (t.ex. karbamazepin).",
     "Astrocytom grad III–IV: extirpation om möjligt, strålbehandling (56–60 Gy fraktionerat) och temozolomid.",
     "Meningeom: extirpation; maligna former alltid strålning; kärlrika tumörer kan embolisera preoperativt.",
     "Akustikusneurinom: kirurgi vid masseffekt eller stereotaktisk strålning (gammakniv).",
     "Prolaktinom: bromokriptin; övriga hypofystumörer transsfenoidal kirurgi, akut operation vid hotad syn."
    ],
    "hand": [
     "Prognos: astrocytom grad III–IV medelöverlevnad 4 → 16 mån med full behandling; grad I–II ca 50 % 10-årsöverlevnad.",
     "Kirurgi krävs alltid i någon form för histologisk diagnos."
    ],
    "flagg": [
     "Nytillkommen epilepsi eller progredierande fokalneurologi hos vuxen – utred för tumör.",
     "Hypofystumör med synpåverkan kan kräva **akut** operation.",
     "Germinom har tendens till droppmetastaser – MR av hela CNS."
    ],
    "ddx": [
     [
      "t9-078",
      "Sekundära tumörer som engagerar nervsystemet",
      "Metastaser, ofta multipla, med känd primärtumör."
     ],
     [
      "t9-082",
      "Cerebral abscess",
      "Expansiv process med infektionstecken."
     ],
     [
      "t9-043",
      "Intrakraniell tryckstegring",
      "Gemensam slutväg vid expansivitet."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 9",
     "Kompendium Neurologi (T9), s. 37–39"
    ]
   },
   "card": {},
   "km": [
    "neuro:61",
    "neuro:62"
   ]
  },
  {
   "id": "t9-078",
   "name": "Sekundära tumörer som engagerar nervsystemet",
   "specialty": "Neurologi",
   "sub": "Tumörer i nervsystemet",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Metastaser** utgör ca 20 % av CNS-tumörerna. De sprids **hematogent**, ca hälften är solitära och incidensen ökar med åldern. I ryggen ger extradurala metastaser risk för **ryggmärgskompression**.",
    "klin": [
     "Trycksymtom (huvudvärk, illamående, kräkning) och fokala symtom (pareser, kramper, sensibilitetsstörning) beroende på läge.",
     "Ofta samtidiga lungmetastaser.",
     {
      "h": "Spinala metastaser"
     },
     "Extradurala tumörer är ofta metastaser från **bröst-, prostata- och lungcancer** samt myelom.",
     "Symtom: lokal och radierande smärta, pareser, spasticitet, sensibilitetspåverkan och blås-/tarmpåverkan."
    ],
    "diag": [
     "CT med kontrast i första hand, MR vid behov.",
     "Glöm inte **lungröntgen/CT** vid hjärnmetastaser.",
     "Spinalt: nivådiagnostik (central vs. perifer klinik) och **MR**."
    ],
    "beh": [
     "Oftast **palliativ** behandling.",
     "Solitär, lättåtkomlig metastas med masseffekt (> 3 cm): kirurgi + helhjärnsbestrålning (WBRT).",
     "Små, djupt belägna lesioner (< 3 st): gammakniv/stereotaktisk strålning + WBRT.",
     "Multipla lesioner (≥ 3): WBRT.",
     "Kemoterapi beror på primärtumör och stadium.",
     "Spinala extradurala: ev. operation (dekompression, laminektomi, stabilisering), strålning, ev. kemoterapi; **steroider** i avsvällande syfte kan vara mycket behjälpligt."
    ],
    "hand": [
     "Prognos vanligen endast 3–6 månader – patienten dör ofta av systemsjukdomen."
    ],
    "flagg": [
     "Ryggsmärta + pareser/blåspåverkan hos cancerpatient – misstänk ryggmärgskompression och gör akut MR.",
     "Leta primärtumör och lungmetastaser."
    ],
    "ddx": [
     [
      "t9-077",
      "Primära tumörer som engagerar nervsystemet",
      "Oftast solitära, histologisk diagnos."
     ],
     [
      "t9-086",
      "Ryggmärgskompression",
      "Komplikation till spinala metastaser."
     ],
     [
      "t9-082",
      "Cerebral abscess",
      "Ringladdande expansivitet med infektionstecken."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 37",
     "Kompendium Neurologi (T9), s. 39",
     "Kompendium Neurologi (T9), s. 44"
    ]
   },
   "card": {},
   "km": [
    "neuro:61",
    "neuro:62"
   ]
  },
  {
   "id": "t9-079",
   "name": "Encefalit",
   "specialty": "Neurologi",
   "sub": "Infektioner i nervsystemet",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Encefalit** är en inflammation i hjärnparenkymet, oftast viral. **HSV-1** ger den allvarligaste formen och drabbar ofta **temporalloberna** med inflammation och nekros. Alla åldrar drabbas; barn och äldre får allvarligare förlopp.",
    "klin": [
     "Huvudvärk och **hög feber**.",
     "**Kramper**.",
     "**Personlighetsförändring** och konfusion.",
     "Fokalneurologi.",
     "TBE kan ge en blandbild av meningit och encefalit med beteendeförändringar."
    ],
    "diag": [
     "**PCR från likvor** – kan vara negativ de första 3 dagarna efter symtomdebut, då behövs ny LP.",
     "CT och MR – kan vara negativa de första ca 4 dagarna.",
     "Vid vakenhetssänkning: tänk HUSK-MIDAS där H = herpesencefalit."
    ],
    "beh": [
     "**Aciklovir iv tidigt**, därefter i totalt 21 dagar; kompendiet anger även högdos steroider.",
     "Kan bakteriell meningit inte uteslutas: lägg till **bredspektrumantibiotika**."
    ],
    "hand": [
     "Starta behandling på misstanke – vänta inte på PCR eller bilddiagnostik.",
     "Encefalit kan efterlämna en demensliknande bild."
    ],
    "flagg": [
     "Negativ PCR och normal MR tidigt utesluter **inte** herpesencefalit.",
     "Feber + konfusion/kramper/personlighetsförändring – starta aciklovir direkt."
    ],
    "ddx": [
     [
      "t9-080",
      "Bakteriell meningit",
      "Snabbt förlopp, meningism, purulent likvor."
     ],
     [
      "t9-081",
      "Serös meningit",
      "Mindre medvetandepåverkan, benignt förlopp."
     ],
     [
      "t9-082",
      "Cerebral abscess",
      "Expansivitet på DT/MR; LP kontraindicerat."
     ],
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Konfusion av annan somatisk orsak."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 20",
     "Kompendium Neurologi (T9), s. 34",
     "Kompendium Neurologi (T9), s. 41"
    ]
   },
   "card": {},
   "km": [
    "neuro:63"
   ],
   "prog": [
    [
     "t4",
     "Termin 4",
     "t4-200",
     "Encefalit"
    ]
   ]
  },
  {
   "id": "t9-080",
   "name": "Bakteriell meningit",
   "specialty": "Neurologi",
   "sub": "Infektioner i nervsystemet",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Bakteriell meningit** är ett högakut tillstånd. **Pneumokocker** och **meningokocker** är vanligast; äldre kan också infekteras med E. coli, Listeria och Haemophilus. Inom **60 minuter** ska odlingar tagits, vätska och bredspektrumantibiotika givits och infektionsjour kontaktats.",
    "klin": [
     "Feber, huvudvärk (bilateral, sprängande, värre vid huvudrörelse), illamående/kräkning, ljuskänslighet och **nackstyvhet**.",
     "**Meningokocker**: snabbt aggressivt förlopp, medvetandepåverkan, petekier, DIC och septisk chock.",
     "**Pneumokocker**: vanligast hos äldre vuxna; något långsammare insjuknande, hög feber, sänkt medvetande, ibland fokalneurologi och kramper; allvarligast vid aspleni.",
     "**Haemophilus**: äldre och ovaccinerade barn, föregås av sepsis, tecken på intrakraniell tryckstegring.",
     "**Listeria**: nyfödda, gravida, immunsupprimerade och äldre; likvor med monocytövervikt."
    ],
    "diag": [
     "**Blododling**, LP-odling, likvormikroskopi och likvoranalys.",
     "Status: nackstyvhet, hudblödningar, medvetandegrad."
    ],
    "beh": [
     "Empiriskt: ofta **cefotaxim** (Claforan) + ampicillin, eller meropenem som singelbehandling, samt samtidigt **betametason** (Betapred).",
     "Meningokock: bensylpenicillin i totalt 7 dagar (cefotaxim om ej fullt känslig); nål, Ringer-acetat, syrgas.",
     "Pneumokock: bensylpenicillin 10–14 dagar (cefotaxim eller meropenem om ej fullt känslig).",
     "Haemophilus: cefotaxim eller ampicillin 10 dagar.",
     "Listeria: ampicillin ± gentamicin; trimetoprim-sulfa vid pc-allergi."
    ],
    "hand": [
     "Meningokockmeningit är **anmälningspliktig**; personer i samma hushåll ska få profylax med ciprofloxacin.",
     "Vaccin finns mot meningokocker (ges splenektomerade) och pneumokocker.",
     "Kvarstående neurologiska restsymtom och hörselskador är inte ovanliga efter pneumokockmeningit."
    ],
    "flagg": [
     "**Petekier** + feber = meningokocksepsis tills motsatsen bevisats.",
     "Fördröj inte antibiotika – mål inom 60 min.",
     "Kognitiv svikt efter meningit: tänk sekundär hydrocefalus, abscess eller septiska embolier."
    ],
    "ddx": [
     [
      "t9-081",
      "Serös meningit",
      "Klar likvor, mindre allmänpåverkan."
     ],
     [
      "t9-079",
      "Encefalit",
      "Personlighetsförändring, kramper och fokalneurologi."
     ],
     [
      "t9-019",
      "Subaraknoidalblödning",
      "Åskknallshuvudvärk med meningism."
     ],
     [
      "t9-082",
      "Cerebral abscess",
      "Expansivitet; LP kontraindicerat."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 7",
     "Kompendium Neurologi (T9), s. 9",
     "Kompendium Neurologi (T9), s. 34",
     "Kompendium Neurologi (T9), s. 40–41"
    ]
   },
   "card": {},
   "km": [
    "neuro:63"
   ]
  },
  {
   "id": "t9-081",
   "name": "Serös meningit",
   "specialty": "Neurologi",
   "sub": "Infektioner i nervsystemet",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Serös (viral) meningit** orsakas oftast av **enterovirus** (t.ex. coxsackie, polio); TBE och HSV-2 är andra agens. Likvor förblir **klar och färglös** och förloppet är oftast benignt.",
    "klin": [
     "Föregås av en oftast subklinisk viremi.",
     "Huvudvärk, feber, ljusskygghet och nackstyvhet.",
     "Mindre påverkat medvetande och allmäntillstånd jämfört med purulent meningit.",
     "TBE kan ge en blandbild mellan meningit och encefalit med beteendeförändringar."
    ],
    "diag": [
     "LP: klar, färglös likvor.",
     "**PCR från likvor** för agensdiagnostik."
    ],
    "beh": [
     "Symtomatisk behandling."
    ],
    "hand": [
     "Oftast fullt tillfrisknande efter 7–10 dagar."
    ],
    "flagg": [
     "Påverkat medvetande, kramper eller fokalneurologi talar för encefalit – starta aciklovir.",
     "Kan bakteriell meningit inte uteslutas ska antibiotika ges."
    ],
    "ddx": [
     [
      "t9-080",
      "Bakteriell meningit",
      "Snabbt förlopp, uttalad allmänpåverkan, grumlig likvor."
     ],
     [
      "t9-079",
      "Encefalit",
      "Personlighetsförändring, kramper, fokalneurologi."
     ],
     [
      "t9-083",
      "Neuroborrelios",
      "Lymfocytär meningoradikulit med kranialnervspares."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 41"
    ]
   },
   "card": {},
   "km": [
    "neuro:63"
   ]
  },
  {
   "id": "t9-082",
   "name": "Cerebral abscess",
   "specialty": "Neurologi",
   "sub": "Infektioner i nervsystemet",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Cerebral abscess** är en lokaliserad purulent infektion i hjärnan orsakad av septisk emboli eller penetrerande skada. Initialt ses en diffust avgränsad inflammation (**cerebrit**) som sedan kapslas in; ödem runt abscessen bidrar till masseffekten.",
    "klin": [
     "Framför allt symtom av **expansivitet**: huvudvärk, psykiska symtom, epileptiska anfall och fokala bortfallssymtom."
    ],
    "diag": [
     "**DT** i första hand; **MR** är känsligare i cerebritstadiet.",
     "**LP är kontraindicerat**."
    ],
    "beh": [
     "**Cefotaxim iv**, + **metronidazol** vid anaerob infektion.",
     "ICP-sänkande åtgärder kan vara nödvändiga."
    ],
    "hand": [
     "Epilepsi som följdtillstånd är inte ovanligt.",
     "Kognitiv svikt efter infektion kan bero på abscess – utred med avbildning."
    ],
    "flagg": [
     "Gör inte LP vid misstänkt abscess.",
     "Tecken på intrakraniell tryckstegring kräver akut åtgärd."
    ],
    "ddx": [
     [
      "t9-077",
      "Primära tumörer som engagerar nervsystemet",
      "Expansivitet utan infektionsbild."
     ],
     [
      "t9-078",
      "Sekundära tumörer som engagerar nervsystemet",
      "Metastaser, ofta känd primärtumör."
     ],
     [
      "t9-079",
      "Encefalit",
      "Diffus parenkyminflammation, PCR i likvor."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 34",
     "Kompendium Neurologi (T9), s. 42"
    ]
   },
   "card": {},
   "km": [
    "neuro:63"
   ]
  },
  {
   "id": "t9-083",
   "name": "Neuroborrelios",
   "specialty": "Neurologi",
   "sub": "Infektioner i nervsystemet",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Neuroborrelios** är borreliainfektion i nervsystemet (några tusen fall/år), ofta men inte alltid föregången av **erythema migrans** och fästingexponering. Den klassiska bilden är **Bannwarths syndrom** – lymfocytär meningoradikulit.",
    "klin": [
     "Svåra regionala smärtor i proximala kroppsdelar och **radikuliter**.",
     "**Kranialnervspåverkan**, oftast **facialispares** (kan vara bilateral; vanligare hos barn).",
     "Mononeuropatier.",
     "I regel **asymmetriska** symtom.",
     "Påtaglig allmänpåverkan och trötthet.",
     "Tertiärt stadium kan ge neuropsykologiska symtom."
    ],
    "diag": [
     "Fästinganamnes, klinisk bild och **serologi**; vid misstänkt neurologisk engagemang tas **LP**.",
     "**Intratekal antikroppsproduktion** talar för neuroborrelios.",
     "Borreliaserologi ingår i utredning av perifer facialispares, polyneuropati och demens."
    ],
    "beh": [
     "Erythema migrans: fenoximetylpenicillin (Kåvepenin) 1 g x 3 eller doxycyklin 0,1 g x 2 i 10 dagar p.o. – skyddar mot progress.",
     "Neuroborrelios: **doxycyklin 0,2 g x 1 i 2 veckor** eller 0,2 g x 2 i 10 dagar.",
     "Borreliautlöst facialispares hos barn: PcV x 3 i 10 dagar (ÖNH-kompendiet)."
    ],
    "hand": [
     "Facialispares med positiv borreliaserologi: remiss till neurolog/infektion, kontroll efter 1 och 6 veckor, LP vid progress.",
     "Fokala restsymtom kan finnas efter svår sjukdom; trötthet kan kvarstå."
    ],
    "flagg": [
     "Fråga alltid om fästingbett vid facialispares – borrelia är en vanlig orsak.",
     "Bilateral facialispares: tänk borrelia (samt GBS och sarkoidos).",
     "Serologi är ett enkelt prov – tänk på det även vid kognitiv svikt."
    ],
    "ddx": [
     [
      "t9-096",
      "Perifer facialispares",
      "Bells pares är en uteslutningsdiagnos."
     ],
     [
      "t9-081",
      "Serös meningit",
      "Viral meningit utan radikulit."
     ],
     [
      "t9-093",
      "Guillain-Barrés syndrom",
      "Symmetrisk ascenderande pares med areflexi."
     ],
     [
      "t9-091",
      "Radikulopati",
      "Rotpåverkan av mekanisk orsak, t.ex. diskbråck."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 34",
     "Kompendium Neurologi (T9), s. 42",
     "Kompendium Neurologi (T9), s. 51",
     "Kompendium ÖNH (T9), s. 13",
     "Ögonboken – sammanfattning (T9), s. 25"
    ]
   },
   "card": {},
   "km": [
    "neuro:64"
   ]
  },
  {
   "id": "t9-084",
   "name": "Akut debuterande ryggmärgssjukdom",
   "specialty": "Neurologi",
   "sub": "Ryggmärgssjukdomar och spinala tillstånd",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Akut debuterande ryggmärgssjukdom ger **para- eller tetrapares** med sensorisk nivå på bålen och ofta blås-/tarmrubbning. Orsaker är bl.a. trauma, snabb **kompression**, **akut myelit** och **ryggmärgsinfarkt** – alla kräver skyndsam **MR**.",
    "klin": [
     "Lokaliserad ryggmärgsskada ger typiskt **känselnedsättning med bålnivå**; funktion nedanför skadenivån faller bort.",
     "Akut skada: initialt **spinal chock**, spasticitet utvecklas inom veckor.",
     {
      "h": "Orsaker"
     },
     "**Ryggmärgskompression** (tumör, diskbråck, epiduralblödning/-abscess): snabb volymutveckling ger kraftigare symtom, bortfall kan uppstå inom timmar.",
     "**Akut tvärsnittsmyelit**: akut/subakut para-/tetrasyndrom, oftast gravt motoriskt bortfall, sensorisk bålnivå och tecken på inflammation; hos unga ofta MS.",
     "**Neuromyelitis optica**: höga cervikala myeliter med ödem.",
     "**Spinalis anterior-syndrom**: tetrapares och känselnedsättning för smärta/temperatur; ofta slappa pareser i armar och spastiska i ben.",
     "**Adamkiewicz-syndrom**: slappa benpareser och dissocierad känselstörning från L1, t.ex. vid aortadissektion/aortakirurgi.",
     "**Spinalt trauma**: ovan C4 risk för andningssvikt; centralt ryggmärgssyndrom efter extensionsvåld (slappa pareser och dissocierad känselnedsättning i händerna)."
    ],
    "diag": [
     "Nivådiagnostik kliniskt.",
     "**MR ryggmärg + hjärna**: utbredning, ödem, kontrastladdning, hjärnförändringar.",
     "Likvor vid myelit: celler, albumin, laktat, glukos, elfores, infektionsprover (inte vid misstänkt epidural abscess)."
    ],
    "beh": [
     "Myelit: **Solu-Medrol 1 g x 1** med nedtrappning, plasmaferes, cytostatika (cyklofosfamid, mitoxantron, rituximab).",
     "Kompression: åtgärd efter orsak (kirurgi, strålning, steroider, antibiotika vid abscess).",
     "Trauma: immobilisering, ABCDE, trauma-DT, bedöm neurogen chock, kontakt med neurokirurg."
    ],
    "hand": [
     "Glöm inte **blås- och tarmrubbning** – KAD/RIK.",
     "Andningsövervakning vid hög halsryggsskada."
    ],
    "flagg": [
     "Bortfall kan utvecklas inom timmar vid kompression – **akut MR**.",
     "Ta inte LP vid misstänkt epidural abscess.",
     "Neurogen chock: risk för övervätskning om den misstas för blödningschock."
    ],
    "ddx": [
     [
      "t9-086",
      "Ryggmärgskompression",
      "Mekanisk orsak, ofta smärta i nivån."
     ],
     [
      "t9-093",
      "Guillain-Barrés syndrom",
      "Perifer slapp pares med areflexi, ingen sensorisk bålnivå."
     ],
     [
      "t9-042",
      "Spinalt trauma och åtgärder inför transport",
      "Traumaanamnes."
     ],
     [
      "t9-085",
      "Långsamt debuterande ryggmärgssjukdom",
      "Smygande spastisk pares."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 16",
     "Kompendium Neurologi (T9), s. 43–44"
    ]
   },
   "card": {},
   "km": [
    "neuro:65"
   ]
  },
  {
   "id": "t9-085",
   "name": "Långsamt debuterande ryggmärgssjukdom",
   "specialty": "Neurologi",
   "sub": "Ryggmärgssjukdomar och spinala tillstånd",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Långsamt debuterande ryggmärgssjukdom yttrar sig mest karaktäristiskt som **spastiska pareser** (para- eller tetrapares) med känselnedsättning under en nivå. Orsaker är bl.a. långsam kompression (spinal stenos, tumör) och progressiv MS.",
    "klin": [
     "Segmentella symtom i nivå med skadan och bortfall av långa banor nedanför; vid samtidig skada på nedre motorneuron kan slapp pares dölja den centrala.",
     "Långsam volymutveckling ger mildare symtom än snabb.",
     "**Spinal stenos**: cervikal stenos ger central pares, lumbal stenos perifer pares.",
     "**Spinala tumörer** (15 % av CNS-tumörer): lokal och radierande smärta, spasticitet, sensibilitetspåverkan, pareser och blås-/tarmpåverkan.",
     "**Primärprogressiv MS** debuterar oftast med gradvis tilltagande spastisk pares, ibland ataxi.",
     {
      "h": "Ryggmärgssyndrom"
     },
     "Främre: spastiska pareser och nedsatt smärt-/temperaturkänsel.",
     "Bakre: nedsatt beröring, vibration och proprioception, Lhermitte-fenomen.",
     "Brown-Séquard: ipsilateral spastisk pares och kontralateral nedsatt smärt-/temperaturkänsel."
    ],
    "diag": [
     "Noggrann **nivådiagnostik** (central vs. perifer klinik).",
     "**MR** är bästa undersökningen (ev. CT med intraspinal kontrast)."
    ],
    "beh": [
     "Spinal stenos: smärtlindring vid behov och dekompression vid persisterande symtom.",
     "Intradurala extramedullära tumörer (schwannom, meningeom): vanligen extirpation; intramedullära: biopsi/ev. strålning; extradurala: ev. dekompression, strålning, kemoterapi."
    ],
    "flagg": [
     "Plötslig försämring av känd långsam process (t.ex. metastas) – akut MR.",
     "ALS kan misstas för cervikal spinal stenos – men ALS har inga känselbortfall."
    ],
    "ddx": [
     [
      "t9-084",
      "Akut debuterande ryggmärgssjukdom",
      "Debut över timmar–dagar."
     ],
     [
      "t9-098",
      "Amyotrofisk lateralskleros (ALS)",
      "Centrala + perifera pareser och fascikulationer utan känselnedsättning."
     ],
     [
      "t9-092",
      "Polyneuropati",
      "Distala symmetriska perifera symtom, areflexi."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 26",
     "Kompendium Neurologi (T9), s. 39",
     "Kompendium Neurologi (T9), s. 43–44",
     "Kompendium Neurologi (T9), s. 50"
    ]
   },
   "card": {},
   "km": [
    "neuro:65"
   ]
  },
  {
   "id": "t9-086",
   "name": "Ryggmärgskompression",
   "specialty": "Neurologi",
   "sub": "Ryggmärgssjukdomar och spinala tillstånd",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Ryggmärgskompression** kan orsakas av tumör/metastas, diskbråck, spinal stenos, epiduralblödning, epidural abscess eller reumatisk sjukdom. Kompressionen skadar ryggmärgen direkt och via **venös stas**; snabb volymökning ger kraftigare symtom.",
    "klin": [
     "Bortfallssymtom kan uppkomma **inom timmar**.",
     "Smärta i nivån kan förekomma men saknas inte sällan; radierande smärta vid rotpåverkan.",
     "Spastiska pareser, sensibilitetsnedsättning med bålnivå och **blås-/tarmpåverkan**.",
     "Extradurala metastaser från bröst-, prostata- och lungcancer samt myelom är vanliga orsaker."
    ],
    "diag": [
     "Klinisk nivådiagnostik.",
     "Diagnos med neuroradiologi – **MR**."
    ],
    "beh": [
     "Tumör/metastas: kirurgi (dekompression, laminektomi, stabilisering), strålning, kemoterapi och **steroider** (avsvällande).",
     "Epidural abscess: antibiotika, dekompression vid hotad neurologi.",
     "Diskbråck: smärtlindring vid behov, operation (laminektomi) vid hotad neurologi.",
     "Spinal stenos: smärtlindring och dekompression vid persisterande symtom."
    ],
    "hand": [
     "Avlasta blåsan (KAD) vid blåsrubbning.",
     "Snabb kontakt med neurokirurg/onkolog beroende på orsak."
    ],
    "flagg": [
     "Ryggsmärta + nytillkommen pares eller blåspåverkan = **akut MR**.",
     "**Ta inte LP** vid misstänkt epidural abscess – kan orsaka meningit.",
     "Smärta i nivån kan saknas."
    ],
    "ddx": [
     [
      "t9-084",
      "Akut debuterande ryggmärgssjukdom",
      "Myelit och ryggmärgsinfarkt utan kompression på MR."
     ],
     [
      "t9-078",
      "Sekundära tumörer som engagerar nervsystemet",
      "Vanlig orsak via extradurala metastaser."
     ],
     [
      "t9-093",
      "Guillain-Barrés syndrom",
      "Perifer pares utan sensorisk nivå."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 39",
     "Kompendium Neurologi (T9), s. 44"
    ]
   },
   "card": {},
   "km": [
    "neuro:65"
   ]
  },
  {
   "id": "t9-087",
   "name": "Cauda equina-syndrom",
   "specialty": "Neurologi",
   "sub": "Ryggmärgssjukdomar och spinala tillstånd",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "prog": [
    [
     "t8",
     "Termin 8",
     "o-ces",
     "Cauda equina-syndrom (CES)"
    ]
   ]
  },
  {
   "id": "t9-088",
   "name": "Orsaker till ryggmärgspåverkan",
   "specialty": "Neurologi",
   "sub": "Ryggmärgssjukdomar och spinala tillstånd",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Ryggmärgen kan påverkas av **trauma**, **kompression**, **inflammation**, **ischemi** och **tumör**, samt av degenerativa sjukdomar. Symtombilden följer den segmentella organisationen med nivåsymtom och bortfall av långa banor.",
    "klin": [
     {
      "h": "Orsaker"
     },
     "**Trauma**: ffa. luxationsfrakturer cervikalt eller T10–L1; trafik- och dykolyckor.",
     "**Kompression**: tumör, diskbråck, spinal stenos, epiduralblödning/-abscess, reumatisk sjukdom.",
     "**Inflammation**: akut tvärsnittsmyelit (MS hos unga, systemsjukdom/idiopatisk hos äldre, infektiös/postinfektiös), neuromyelitis optica, MS (t.ex. baksträngsdemyelinisering med Lhermitte).",
     "**Vaskulärt**: spinalis anterior-syndrom, Adamkiewicz-syndrom (aortadissektion/aortakirurgi).",
     "**Tumörer**: intradurala (extramedullära: schwannom, meningeom; intramedullära: ependymom, astrocytom) och extradurala (metastaser, myelom).",
     "**Motorneuronsjukdom** (ALS) påverkar framhornsceller och kortikospinala banor.",
     {
      "h": "Syndrom"
     },
     "Främre, bakre och Brown-Séquards syndrom samt centralt ryggmärgssyndrom."
    ],
    "diag": [
     "Nivådiagnostik och **MR** av ryggmärg (och hjärna vid misstänkt inflammation).",
     "Likvor vid misstänkt myelit."
    ],
    "flagg": [
     "Snabbt progredierande pares eller blåspåverkan – akut MR.",
     "Hög halsryggsskada (ovan C4) ger andningssvikt."
    ],
    "ddx": [
     [
      "t9-084",
      "Akut debuterande ryggmärgssjukdom",
      "Akuta orsaker och handläggning."
     ],
     [
      "t9-085",
      "Långsamt debuterande ryggmärgssjukdom",
      "Smygande orsaker."
     ],
     [
      "t9-086",
      "Ryggmärgskompression",
      "Kompressionsorsaker."
     ],
     [
      "t9-042",
      "Spinalt trauma och åtgärder inför transport",
      "Traumatisk skada."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 16",
     "Kompendium Neurologi (T9), s. 26",
     "Kompendium Neurologi (T9), s. 39",
     "Kompendium Neurologi (T9), s. 43–44",
     "Kompendium Neurologi (T9), s. 49"
    ]
   },
   "card": {},
   "km": [
    "neuro:67"
   ]
  },
  {
   "id": "t9-089",
   "name": "Spasticitet",
   "specialty": "Neurologi",
   "sub": "Ryggmärgssjukdomar och spinala tillstånd",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Spasticitet** är ett tecken på **central (övre motorneuron-) pares** och ingår tillsammans med reflexstegring och positiv Babinski i bilden av central pares.",
    "klin": [
     "Central pares = **reflexstegring, spasticitet och Babinski**.",
     "Vid ALS ses **fällknivsfenomen** vid passiv rörelse.",
     "Efter akut ryggmärgsskada föreligger initialt **spinal chock**; spasticitet i varierande grad uppkommer inom veckor.",
     "Spastiska pareser (tetra-/parapares) är det mest karaktäristiska vid kronisk ryggmärgsskada.",
     "Vid MS ger spasticitet muskelsammandragningar som kan vara mycket smärtsamma; primärprogressiv MS debuterar ofta med gradvis tilltagande spastisk pares.",
     "Vid samtidig skada på nedre motorneuron kan slappa pareser dölja spasticiteten (t.ex. ALS)."
    ],
    "diag": [
     "Kliniskt i neurologstatus (tonus vid passiv rörelse, reflexer, Babinski).",
     "Spasticitet pekar på skada i CNS – nivådiagnostik och MR av hjärna/ryggmärg."
    ],
    "flagg": [
     "Spasticitet saknas i akutfasen av ryggmärgsskada (spinal chock).",
     "Cervikal stenos ger central pares, lumbal stenos perifer."
    ],
    "ddx": [
     [
      "t9-085",
      "Långsamt debuterande ryggmärgssjukdom",
      "Vanlig orsak till spastisk parapares."
     ],
     [
      "t9-068",
      "Multipel skleros, symtom och diagnostik",
      "Spasticitet och smärtsamma kramper."
     ],
     [
      "t9-098",
      "Amyotrofisk lateralskleros (ALS)",
      "Kombination av spasticitet och perifera pareser."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 16",
     "Kompendium Neurologi (T9), s. 26",
     "Kompendium Neurologi (T9), s. 43–44",
     "Kompendium Neurologi (T9), s. 50"
    ]
   },
   "card": {},
   "km": [
    "neuro:68"
   ]
  },
  {
   "id": "t9-090",
   "name": "Neurogen blåsrubbning",
   "specialty": "Neurologi",
   "sub": "Ryggmärgssjukdomar och spinala tillstånd",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Neurogen blåsrubbning** är störd blåsfunktion orsakad av skada i nervsystemet – i hjärna, ryggmärg eller perifera/autonoma nerver.",
    "klin": [
     {
      "h": "Förekomst"
     },
     "**Ryggmärgssjukdom**: blås-/tarmpåverkan vid kompression, spinala tumörer, myelit och spinalt trauma.",
     "**MS**: nedsatt urinblåsefunktion och sexuell dysfunktion är vanligt.",
     "**Normaltryckshydrocefalus**: urinträngningar och inkontinens, oftast senare än gång- och kognitiva symtom.",
     "**Demens**: inkontinens vid ffa. främre medial frontallobsskada eller sekundär demens; senare i Alzheimer.",
     "**GBS**: autonom dysfunktion med urin- och tarmdysfunktion."
    ],
    "diag": [
     "Fråga om inkontinens och miktionsbesvär i anamnesen (glöms lätt).",
     "Blåsskanning (bladderscan) vid övervakning av autonoma funktioner, t.ex. vid GBS."
    ],
    "beh": [
     "Avlasta blåsan med **KAD/RIK** vid spinalt trauma och myelit."
    ],
    "flagg": [
     "Nytillkommen blåsrubbning med ryggsmärta eller benpares – misstänk ryggmärgskompression och gör akut MR.",
     "Vid akut konfusion: tänk på urinstämma som utlösande orsak, men undvik KAD om möjligt."
    ],
    "ddx": [
     [
      "t9-086",
      "Ryggmärgskompression",
      "Blåspåverkan är ett varningstecken."
     ],
     [
      "t9-049",
      "Kommunicerande hydrocefalus",
      "NPH: gång, kognition och inkontinens."
     ],
     [
      "t9-068",
      "Multipel skleros, symtom och diagnostik",
      "Blåsstörning är ett vanligt MS-symtom."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 16",
     "Kompendium Neurologi (T9), s. 18",
     "Kompendium Neurologi (T9), s. 26",
     "Kompendium Neurologi (T9), s. 33",
     "Kompendium Neurologi (T9), s. 35–36",
     "Kompendium Neurologi (T9), s. 39",
     "Kompendium Neurologi (T9), s. 44",
     "Kompendium Neurologi (T9), s. 46"
    ]
   },
   "card": {},
   "km": [
    "neuro:68"
   ],
   "prog": [
    [
     "t7",
     "Termin 7",
     "t7-196",
     "Neurogen blåsrubbning"
    ]
   ]
  },
  {
   "id": "t9-091",
   "name": "Radikulopati",
   "specialty": "Neurologi",
   "sub": "Ryggmärgssjukdomar och spinala tillstånd",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Radikulopati** är påverkan på en **nervrot**. Ryggmärgen har på varje sida en bakre sensorisk och en främre motorisk rot, och rotpåverkan ger därför segmentella symtom med **radierande smärta**.",
    "klin": [
     "Radierande smärta och segmentell funktionsnedsättning motsvarande påverkad rot.",
     "Orsaker i kompendiet: **diskbråck**, spinal stenos, spinala tumörer och **neuroborrelios** (radikuliter med svår regional smärta, lymfocytär meningoradikulit).",
     "Radikulopati kan ge sekundär restless legs."
    ],
    "diag": [
     "Klinisk nivådiagnostik; **MR** vid misstänkt kompression.",
     "Borreliaserologi och LP vid misstänkt neuroborrelios."
    ],
    "beh": [
     "Diskbråck: smärtlindring vid behov, operation (laminektomi) vid hotad neurologi.",
     "Neuroborrelios: doxycyklin."
    ],
    "flagg": [
     "Pareser, blås-/tarmpåverkan eller myelopatitecken – akut MR.",
     "Asymmetrisk radikulär smärta med facialispares efter fästingbett – neuroborrelios."
    ],
    "ddx": [
     [
      "t9-083",
      "Neuroborrelios",
      "Radikulit med lymfocytär meningit."
     ],
     [
      "t9-086",
      "Ryggmärgskompression",
      "Långa banor påverkade, bålnivå."
     ],
     [
      "t9-102",
      "Plexusskada",
      "Bortfall från flera rötter/nerver i en extremitet."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 25",
     "Kompendium Neurologi (T9), s. 39",
     "Kompendium Neurologi (T9), s. 42–44"
    ]
   },
   "card": {},
   "km": [
    "neuro:69"
   ]
  },
  {
   "id": "t9-092",
   "name": "Polyneuropati",
   "specialty": "Neurologi",
   "sub": "Neuromuskulära sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Polyneuropati** är en diffus, oftast **symmetrisk** funktionsstörning i många perifera nerver. Den delas in i **axonal** (vanligast) och **demyeliniserande** polyneuropati.",
    "klin": [
     "Börjar **distalt i benen**, sämst distalt i ben och armar.",
     "Motoriskt: hypoton pares, ev. atrofi, bortfall av djupa senreflexer.",
     "Sensoriskt: nedsatt känsel för en eller flera modaliteter, ofta parestesier.",
     "Varierande prognos, ofta långsam progress.",
     {
      "h": "Orsaker"
     },
     "Axonal: metabola (diabetes, uremi, porfyri), brist (B12), intox, ärftlig (CMT), paraneoplastisk (myelom, lymfom).",
     "Demyeliniserande: ofta sekundär till immunopati.",
     "**Diabetesneuropati**: 50 % av diabetiker inom 25 år; vanligast distal sensorisk, smygande debut (vibrationssinnet försvinner först), ofta smärtsamma parestesier, ökad risk för bensår och infektion."
    ],
    "diag": [
     "**Neurografi**: axonal – normal/lätt sänkt ledningshastighet med sänkt amplitud; demyeliniserande – sänkt ledningshastighet.",
     "Blodprover: blodstatus med diff, SR, CRP, elstatus, glukos, HbA1c, P-proteinelfores (M-komponent), homocystein, borrelia- och ev. hiv-serologi, tyreoideastatus.",
     "Vid behov vaskulit- och intoxprover, DNA-test (CMT) och LP."
    ],
    "beh": [
     "Hereditär form: symtomatisk behandling.",
     "Diabetesneuropati: god **glukoskontroll**; smärta behandlas med gabapentin, karbamazepin, pregabalin eller amitriptylin."
    ],
    "flagg": [
     "Snabbt progredierande, ascenderande pares med areflexi – tänk **GBS**.",
     "Glöm inte M-komponent (myelom) och B12-brist i utredningen.",
     "Diabetesneuropati ökar risken för bensår och infektion."
    ],
    "ddx": [
     [
      "t9-093",
      "Guillain-Barrés syndrom",
      "Akut demyeliniserande, snabb progress."
     ],
     [
      "t9-097",
      "Mononeuropatier",
      "En enskild nerv, asymmetriskt."
     ],
     [
      "t9-098",
      "Amyotrofisk lateralskleros (ALS)",
      "Rent motorisk, fascikulationer, centrala tecken."
     ],
     [
      "t9-085",
      "Långsamt debuterande ryggmärgssjukdom",
      "Centrala tecken och sensorisk nivå."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 45"
    ]
   },
   "card": {},
   "km": [
    "neuro:70"
   ]
  },
  {
   "id": "t9-093",
   "name": "Guillain-Barrés syndrom",
   "specialty": "Neurologi",
   "sub": "Neuromuskulära sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Guillain-Barrés syndrom (GBS)** är en reversibel autoimmun sjukdom med **demyelinisering** av motoriska och ibland (⅔) sensoriska banor i PNS, ofta efter infektion, vaccination, operation eller graviditet. Incidens ca 2/100 000/år; akut GBS kan bli **dödligt**.",
    "klin": [
     "Progressiv, oftast symmetrisk perifer **para- till tetrapares** som sprider sig distalt → proximalt.",
     "**Areflexi**, ev. fascikulationer.",
     "**Autonom dysfunktion**: urin- och tarmdysfunktion, hjärtarytmi, blodtrycksvariationer.",
     "Kan ge facialispares (inte sällan bilateral) och neurogen smärta."
    ],
    "diag": [
     "Anamnes (nyligen genomgången infektion) och klinik.",
     "Lab: blodstatus med diff, vätskestatus, leverstatus, SR, tyreoideastatus, CRP; F-analys för Campylobacter jejuni.",
     "**Likvor** och **neurofysiologi**."
    ],
    "beh": [
     "**Plasmaferes x 3–5 eller IVIG i 5 dagar**.",
     "Neurogen smärta: amitriptylin, gabapentin, pregabalin och/eller kortison.",
     "Symtomatisk behandling (DVT-, arytmirisk) och långvarig sjukgymnastik."
    ],
    "hand": [
     "**Alltid IVA**.",
     "Övervaka m. biceps och m. deltoideus – korrelerar med diafragmafunktionen.",
     "Lungfunktion: PEF, spirometri, pulsoximetri, ev. blodgas; autonoma funktioner: bladderscan, EKG, temp.",
     "Prognos: 84 % friska inom 12 mån, 13 % sequelae, 3 % dör."
    ],
    "flagg": [
     "**Andningssvikt** kan utvecklas utan föregående cyanos, ortopné eller dyspné.",
     "Autonom instabilitet med arytmier.",
     "Snabb progress av pares med areflexi – lägg in direkt."
    ],
    "ddx": [
     [
      "t9-094",
      "Myastenia gravis",
      "Uttröttbarhet med dygnsvariation, reflexer bevarade."
     ],
     [
      "t9-084",
      "Akut debuterande ryggmärgssjukdom",
      "Sensorisk bålnivå och centrala tecken."
     ],
     [
      "t9-092",
      "Polyneuropati",
      "Långsamt förlopp."
     ],
     [
      "t9-095",
      "Andningssvikt vid neuromuskulär sjukdom",
      "Fruktad komplikation."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 46",
     "Kompendium ÖNH (T9), s. 13"
    ]
   },
   "card": {},
   "km": [
    "neuro:71",
    "neuro:74"
   ]
  },
  {
   "id": "t9-094",
   "name": "Myastenia gravis",
   "specialty": "Neurologi",
   "sub": "Neuromuskulära sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Myastenia gravis (MG)** ger smygande debut av abnorm **muskulär uttröttbarhet** i tvärstrimmig muskulatur, oftast asymmetriskt. Ca 15 % har enbart okulär myasteni. Snabb försämring är **akut livshotande**.",
    "klin": [
     "Symtomen varierar mycket i svårighetsgrad och utbredning mellan patienter.",
     "**Dygnsrytm**: bäst på morgonen, alltid sämst på kvällen.",
     "Spontana remissioner och försämringar förekommer.",
     "Försämrande faktorer: vissa läkemedel, infektion, mens, operation/trauma, hyper-/hypotyreos, psykiska eller fysiska påfrestningar.",
     "Läkemedel som ger uttalad försämring: verapamil, morfin, kurare, pankuron; bensodiazepiner och kortikosteroider kan ge försämring.",
     {
      "h": "Kriser"
     },
     "**Myasten kris**: muskelsvaghet och sekundärt (CO2-retention) hypersalivation, dyspné, ångest, takykardi, konfusion.",
     "**Kolinerg kris**: muskelsvaghet, muskelryckningar, ökad svettning/salivation/tårflöde, bradykardi, diarré, bronkkonstriktion, ångest, konfusion."
    ],
    "diag": [
     "Anamnes (särskilt dygnsrytm) och uttröttbarhetstest.",
     "**EMG** med repetitiv stimulering.",
     "**Anti-AChR-antikroppar** (> 90 %); anti-MuSK hos 5–7 %.",
     "Tensilontest (edrofonium) – ökad muskelkraft?",
     "**CT thorax** – tymom?",
     "Lab: blodstatus, vätskestatus, leverstatus, SR, autoimmunprover."
    ],
    "beh": [
     "**Mestinon** (eller annan AChE-hämmare) 4–7 doseringstillfällen per dygn (max 6 x 180 mg/dygn).",
     "Kaliumtillskott till S-kalium 4,5–5,2 mmol/l.",
     "**Tymektomi** i lugnt skede (ej kortison eller azatioprin preoperativt).",
     "Därefter immunsuppression (azatioprin, ciklosporin, mykofenolat).",
     "Myasten kris: **akut till IVA** för andningsövervakning – plasmaferes, IVIG, högdos kortison (kan initialt **försämra**)."
    ],
    "hand": [
     "Vid försämring: optimera Mestinon-dos och kalium, sök infektion.",
     "Behandlingen justeras efter anamnes, klinik, tensilontest, PEF, pulsoximetri och blodgas."
    ],
    "flagg": [
     "Skilj **myasten** från **kolinerg** kris (muskelryckningar, svettning, bradykardi, diarré).",
     "Undvik läkemedel som försämrar MG (t.ex. verapamil, morfin, muskelrelaxantia).",
     "Kortison kan initialt försämra patienten."
    ],
    "ddx": [
     [
      "t9-093",
      "Guillain-Barrés syndrom",
      "Areflexi och ascenderande pares."
     ],
     [
      "t9-098",
      "Amyotrofisk lateralskleros (ALS)",
      "Bulbär ALS: dysartri före dysfagi; om dysfagi kommer först tänk MG."
     ],
     [
      "t9-205",
      "Ögonmuskelpares",
      "Abducenspares; MG ger mer besvär kvällstid och ofta ptos."
     ],
     [
      "t9-095",
      "Andningssvikt vid neuromuskulär sjukdom",
      "Myasten kris."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 47",
     "Kompendium Neurologi (T9), s. 49",
     "Ögonboken – sammanfattning (T9), s. 26"
    ]
   },
   "card": {},
   "km": [
    "neuro:71",
    "neuro:74"
   ]
  },
  {
   "id": "t9-095",
   "name": "Andningssvikt vid neuromuskulär sjukdom",
   "specialty": "Neurologi",
   "sub": "Neuromuskulära sjukdomar",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Neuromuskulära sjukdomar som **GBS**, **myastenia gravis** och **ALS** kan ge svaghet i andningsmuskulaturen med **hyperkapnisk** andningssvikt. Den kan utvecklas smygande och utan klassiska tecken på andnöd.",
    "klin": [
     "GBS: respirationssvikt kan utvecklas **utan föregående cyanos, ortopné eller dyspné**.",
     "MG – **myasten kris**: muskelsvaghet med CO2-retention, dyspné, hypersalivation, takykardi, ångest och konfusion.",
     "ALS: **hyperkapni** med normalt eller nära normalt pO2; ger morgonhuvudvärk, trötthet, störd nattsömn; dödsorsak är i regel andningssvikt och terminal pneumoni.",
     "Hög halsryggsskada (ovan C4) ger andningssvikt."
    ],
    "diag": [
     "Klinisk övervakning av **m. biceps och m. deltoideus** (korrelerar med diafragma vid GBS).",
     "**PEF**, spirometri, pulsoximetri och **blodgas** (pCO2)."
    ],
    "beh": [
     "GBS och myasten kris: **IVA** för andningsövervakning; plasmaferes eller IVIG.",
     "ALS: extern ventilator (t.ex. BiPAP), aspirationsprofylax (hostmaskin, PEG, acetylcystein) och aggressiv infektionsbehandling."
    ],
    "hand": [
     "Lägg in tidigt för övervakning vid progredierande svaghet.",
     "Vid MG: sök utlösande infektion och optimera behandlingen."
    ],
    "flagg": [
     "Normal saturation utesluter **inte** hyperkapni.",
     "Avsaknad av dyspné utesluter inte hotande andningssvikt vid GBS.",
     "Högdos kortison kan initialt försämra myasten kris."
    ],
    "ddx": [
     [
      "t9-093",
      "Guillain-Barrés syndrom",
      "Akut ascenderande pares med areflexi."
     ],
     [
      "t9-094",
      "Myastenia gravis",
      "Uttröttbarhet, myasten kris."
     ],
     [
      "t9-098",
      "Amyotrofisk lateralskleros (ALS)",
      "Långsamt progredierande hyperkapni."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 16",
     "Kompendium Neurologi (T9), s. 46–47",
     "Kompendium Neurologi (T9), s. 50–51"
    ]
   },
   "card": {},
   "km": [
    "neuro:71"
   ]
  },
  {
   "id": "t9-096",
   "name": "Perifer facialispares",
   "specialty": "Neurologi",
   "sub": "Neuromuskulära sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid **perifer facialispares** blir hela ansiktshalvan svag (även pannan), till skillnad från central pares där pannan sparas pga. bilateral innervation. Vanligast är **Bells pares** – idiopatisk akut facialisförlamning, troligen av inflammation vid ganglion geniculi; en **uteslutningsdiagnos**.",
    "klin": [
     "Svaghet i alla mimiska muskler i ena ansiktshalvan: utslätad nasolabialfåra, hängande mungipa, oförmåga att sluta ögat (**lagoftalmus**).",
     "Bells pares: föregås ofta av värk bakom örat, sensibilitet bevarad, ljudöverkänslighet (stapedius) hos ca 50 %, progress till total pares inom 3 d–1 v.",
     {
      "h": "Orsaker"
     },
     "Bells pares, **borrelia** (vanligare hos barn, kan vara bilateral), **zoster oticus** (smärta, blåsor i hörselgång/svalg), tumör (parotistumör, kolesteatom – gradvis progress), temporalbensfraktur, otit, GBS och sarkoidos (inte sällan bilateralt)."
    ],
    "diag": [
     "Bedöm perifer/central och komplett/partiell; övriga kranialnerver och smak.",
     "Hos ÖNH: otomikroskopi, hörselmätning, ev. stapediusreflex, Schirmers test och **borreliaserologi**.",
     "Ögat: lagoftalmus, ektropion och **fluoresceinfärgning** för expositionskeratit."
    ],
    "beh": [
     "Bells pares: **prednisolon 60 mg x 1 i 5 dagar** och nedtrappning 5 dagar, inom 72 h.",
     "Ögonskydd: **fuktkammare** (urglasförband) och ögonsalva/ögondroppar.",
     "Borrelia: doxycyklin i 2 veckor till vuxna, PcV x 3 i 10 dagar till barn.",
     "Zoster oticus: antiviral behandling."
    ],
    "hand": [
     "Positiv borrelia: remiss neurolog/infektion, kontroll efter 1 och 6 veckor, LP vid progress.",
     "Pares direkt efter temporalbensfraktur: överväg kirurgisk exploration.",
     "Utebliven regress inom 1–2 (högst 6) månader: utred för intrakraniell orsak, t.ex. ponsvinkeltumör.",
     "Vanligaste resttillstånd: synkinesi (munnen rör sig vid blinkning)."
    ],
    "flagg": [
     "Skydda hornhinnan – risk för **expositionskeratit**.",
     "Gradvis progredierande pares talar för tumör.",
     "Bilateral pares: borrelia, GBS, sarkoidos."
    ],
    "ddx": [
     [
      "t9-318",
      "Perifer och central facialispares",
      "Central pares sparar pannan (stroke, MS, tumör)."
     ],
     [
      "t9-083",
      "Neuroborrelios",
      "Fästingbett, ev. bilateral, positiv serologi."
     ],
     [
      "t9-290",
      "Zoster oticus",
      "Öronsmärta och blåsor, ofta yrsel och hörselnedsättning."
     ],
     [
      "t9-093",
      "Guillain-Barrés syndrom",
      "Ofta bilateral, med extremitetspareser."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 48",
     "Kompendium Neurologi (T9), s. 51",
     "Kompendium ÖNH (T9), s. 6",
     "Kompendium ÖNH (T9), s. 13",
     "Ögonboken – sammanfattning (T9), s. 25–26"
    ]
   },
   "card": {},
   "km": [
    "neuro:72",
    "ogon:65"
   ]
  },
  {
   "id": "t9-097",
   "name": "Mononeuropatier",
   "specialty": "Neurologi",
   "sub": "Neuromuskulära sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "En **mononeuropati** är skada på en enskild perifer nerv, ofta genom kompression/entrapment, vilket ger bortfall inom nervens motoriska och sensoriska område.",
    "klin": [
     "**Radialispares** (”Saturday night palsy”): **dropphand**.",
     "**Ulnaris-entrapment**: **klohand**.",
     "**Meralgia paresthetica**: n. cutaneus femoris lateralis kläms i ljumsken (t.ex. av skärp eller bukfetma).",
     "**Facialispares** (Bells pares) – se ÖNH-avsnittet.",
     "Mononeuropati i n. oculomotorius pga. nervinfarkt vid diabetes: smärtsam, med bevarad pupillfunktion.",
     "**Neuroborrelios** kan ge mononeuropatier."
    ],
    "diag": [
     "Klinisk bedömning av nervens motoriska och sensoriska utbredningsområde.",
     "Borreliaserologi vid misstanke."
    ],
    "hand": [
     "Meralgia paresthetica: avlasta trycket (släpp på skärpet, viktnedgång)."
    ],
    "flagg": [
     "Oculomotoriuspares med påverkad pupill och smärta – misstänk aneurysm (a. communicans posterior).",
     "Flera mononeuropatier asymmetriskt – tänk neuroborrelios."
    ],
    "ddx": [
     [
      "t9-096",
      "Perifer facialispares",
      "Mononeuropati i n. facialis."
     ],
     [
      "t9-092",
      "Polyneuropati",
      "Symmetrisk, distal och diffus."
     ],
     [
      "t9-102",
      "Plexusskada",
      "Bortfall från flera nerver i extremiteten."
     ],
     [
      "t9-091",
      "Radikulopati",
      "Segmentell utbredning och radierande smärta."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 42",
     "Kompendium Neurologi (T9), s. 48",
     "Kompendium Neurologi (T9), s. 51"
    ]
   },
   "card": {},
   "km": [
    "neuro:72"
   ]
  },
  {
   "id": "t9-098",
   "name": "Amyotrofisk lateralskleros (ALS)",
   "specialty": "Neurologi",
   "sub": "Neuromuskulära sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Amyotrofisk lateralskleros (ALS)** är ett samlingsnamn för sjukdomar som drabbar både **övre och nedre motorneuron** (kortikospinala/-bulbära banor samt framhornsceller och motoriska kranialnervskärnor). Den ger tilltagande pareser, atrofi och fascikulationer **utan känselnedsättning**; 5–10 % är familjär.",
    "klin": [
     {
      "h": "Klassisk ALS"
     },
     "Progredierande förlopp utan skov med både **centrala och perifera pareser**.",
     "Debut ofta i en distal småmuskel (handen – svårt kamma håret, tappar nyckeln), med uttalad **asymmetri** initialt och spridning till andra extremiteter inom månader.",
     "Perifert: muskelatrofi, slappa pareser, **fascikulationer**; centralt: livliga reflexer, positiv Babinski, fällknivsfenomen.",
     {
      "h": "Bulbära former"
     },
     "**Progressiv bulbär pares**: slapp dysartri med nasalt tal kommer först, dysfagi senare; tungfascikulationer och tungatrofi.",
     "**Pseudobulbär pares**: spastisk dysartri och affektlabilitet (tvångsgråt/-skratt).",
     "20–40 % får kognitiva symtom; 3–8 % pannlobsdemens.",
     "**Flail arm**: slapp pares proximalt i båda armarna, ffa. män kring 40 år."
    ],
    "diag": [
     "**Uteslutningsdiagnos**; feldiagnostik vanligt, ofta 13–16 mån till diagnos.",
     "Anamnes: initial asymmetrisk lokaliserad pares med atrofi, tilltagande symtom.",
     "**EMG**: ökad spontanaktivitet, stora enheter, polyfasi; neurografi: väsentligen normal latens, ev. sänkt motorisk amplitud.",
     "Blodprover, likvor och DNA-analys vid familjär disposition."
    ],
    "beh": [
     "Bromsmedicin **riluzol** (morgon och kväll med mat): kan förlänga livet med upp mot 10–15 mån; störst effekt ju tidigare.",
     "Hypersalivation: lågdosstrålning mot parotis, antikolinergika (atropin, skopolaminplåster), botulinumtoxin.",
     "Nutrition via **PEG**; ventilation med **BiPAP**; aggressiv infektionsbehandling, influensavaccination, aspirationsprofylax, sjukgymnastik."
    ],
    "hand": [
     "Multiprofessionellt **ALS-team**.",
     "Prognos sämre ju äldre vid debut och vid slapp pares; död i regel av andningssvikt och terminal pneumoni."
    ],
    "flagg": [
     "**Hyperkapni** (morgonhuvudvärk, trötthet, störd sömn) med normal saturation.",
     "Dysfagi före dysartri talar för MG eller muskelsjukdom snarare än ALS.",
     "Fråga alltid hur symtomen började och spred sig."
    ],
    "ddx": [
     [
      "t9-094",
      "Myastenia gravis",
      "Uttröttbarhet, dygnsvariation, ofta ögonsymtom."
     ],
     [
      "t9-100",
      "Förvärvade och hereditära myopatier",
      "Proximal svaghet; muskelbiopsi."
     ],
     [
      "t9-085",
      "Långsamt debuterande ryggmärgssjukdom",
      "Cervikal spinal stenos med central pares och känselstörning."
     ],
     [
      "t9-092",
      "Polyneuropati",
      "Sensoriska symtom och areflexi."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 49–51"
    ]
   },
   "card": {},
   "km": [
    "neuro:73",
    "neuro:77"
   ]
  },
  {
   "id": "t9-099",
   "name": "Orsaker till perifer nervpåverkan inklusive kranialnerver",
   "specialty": "Neurologi",
   "sub": "Neuromuskulära sjukdomar",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Perifer nervpåverkan kan vara **diffus** (polyneuropati), **akut inflammatorisk** (GBS), **fokal** (mononeuropati, plexusskada, radikulopati) eller drabba **kranialnerver**. Kompendiet sammanfattar typiska orsaker per kranialnerv.",
    "klin": [
     {
      "h": "Perifera nerver"
     },
     "Polyneuropati: diabetes, uremi, porfyri, B12-brist, intox, ärftlig (CMT), paraneoplastisk (myelom, lymfom), immunmedierad.",
     "GBS efter infektion/vaccination; neuroborrelios med radikuliter och mononeuropatier.",
     "Mononeuropatier av kompression (radialis, ulnaris, n. cutaneus femoris lateralis).",
     "Plexusskada: trauma, cancerinväxt, skulderneurit, strålfibros, TOS."
    ],
    "diag": [
     {
      "tbl": [
       [
        "Kranialnerv",
        "Typiska orsaker till påverkan"
       ],
       [
        "I olfactorius",
        "Lokala slemhinneförändringar, skalltrauma, parkinsonism, virus, nässpray"
       ],
       [
        "II opticus",
        "Optikusneurit (MS); chiasmaskada av hypofystumör; bakom chiasma t.ex. mediainfarkt"
       ],
       [
        "III oculomotorius",
        "Aneurysm a. communicans posterior (smärtsam), tentoriuminklämning (vid ljusstel pupill), nervinfarkt vid diabetes (pupill bevarad)"
       ],
       [
        "IV trochlearis",
        "Liknande panorama som III; dubbelseende i trappor"
       ],
       [
        "VI abducens",
        "Långt förlopp – påverkas tidigt av förhöjt ICP; mikrovaskulärt (DM, hypertoni)"
       ],
       [
        "VII facialis",
        "Central vid hemipares; perifer: idiopatisk, neuroborrelios, inflammatorisk polyneuropati"
       ],
       [
        "VIII vestibulocochlearis",
        "Vestibularis-schwannom"
       ],
       [
        "IX glossopharyngeus",
        "Smakbortfall ovanligt – kräver bilateral skada"
       ],
       [
        "X vagus",
        "Central skada, recurrenspares"
       ],
       [
        "XI accessorius",
        "Trapeziuspares med vingskapula"
       ],
       [
        "XII hypoglossus",
        "ALS: tungatrofi; pseudobulbär pares med stegrade reflexer"
       ]
      ]
     },
     "Neurografi skiljer axonal från demyeliniserande skada; lab enligt polyneuropatiutredning."
    ],
    "flagg": [
     "Smärtsam oculomotoriuspares med vid pupill – **aneurysm** eller inklämning.",
     "Abducenspares kan vara tecken på förhöjt ICP.",
     "Bilateral facialispares: borrelia, GBS, sarkoidos."
    ],
    "ddx": [
     [
      "t9-092",
      "Polyneuropati",
      "Diffus symmetrisk nervpåverkan."
     ],
     [
      "t9-097",
      "Mononeuropatier",
      "Enskild nerv."
     ],
     [
      "t9-096",
      "Perifer facialispares",
      "Vanligaste kranialnervspåverkan."
     ],
     [
      "t9-205",
      "Ögonmuskelpares",
      "III-, IV- och VI-pareser."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 45–46",
     "Kompendium Neurologi (T9), s. 48",
     "Kompendium Neurologi (T9), s. 51",
     "Kompendium ÖNH (T9), s. 13",
     "Ögonboken – sammanfattning (T9), s. 26"
    ]
   },
   "card": {},
   "km": [
    "neuro:75"
   ]
  },
  {
   "id": "t9-100",
   "name": "Förvärvade och hereditära myopatier",
   "specialty": "Neurologi",
   "sub": "Neuromuskulära sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "neuro:76"
   ]
  },
  {
   "id": "t9-101",
   "name": "Polymyosit",
   "specialty": "Neurologi",
   "sub": "Neuromuskulära sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "neuro:76"
   ]
  },
  {
   "id": "t9-102",
   "name": "Plexusskada",
   "specialty": "Neurologi",
   "sub": "Neuromuskulära sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Plexusskada** avser skada på plexus brachialis. En total skada ger fullständigt funktionsbortfall i armen, men **partiella** skador där flera perifera nerver är involverade är vanligare. Ofta orsakas den av **slitvåld**, t.ex. vid förlossning eller MC-olycka.",
    "klin": [
     "**Övre plexusskada** (C5–C6, truncus superior): trauma som spränger isär huvud och skuldra; svag abduktion och utåtrotation i axeln, armbågsflexion och pro-/supination; uttalade atrofier.",
     "**Nedre plexusskada** (C8–Th1): kraftigt hyperabduktionsvåld; svaghet och atrofi i ulnarisområdet (handens små muskler, handflexorer) och känselnedsättning ulnart.",
     {
      "h": "Differentialdiagnoser"
     },
     "**Invasiv cancerväxt** (apikal lungcancer, farynxtumör, lymfom): smärtsam, dålig prognos.",
     "**Skulderneurit** (troligen autoimmun): vaknar med svår axelvärk, sedan bortfall; smärtan släpper inom någon vecka, god men långsam läkning; ev. prednisolon akut.",
     "**Strålfibros** efter strålning mot bröstcancer/axillärt lymfom: oftast inte så smärtsam, latens månader–år.",
     "**Thoraxapertursyndrom (TOS)**: förlängt C7-tvärutskott med fibröst band; ulnar smärta, parestesier och atrofier i C8–Th1."
    ],
    "diag": [
     "Klinisk kartläggning av bortfall per rot/nerv.",
     "Radiologisk utredning vid misstänkt cancerväxt; **MR** vid strålfibros för att utesluta recidiv."
    ],
    "beh": [
     "Traumatisk skada: **kirurgisk exploration med nervsutur**, ev. autolog nervtransplantation.",
     "TOS: kirurgisk delning av det fibrösa bandet."
    ],
    "hand": [
     "Mycket dålig prognos obehandlad; avslitna nervrötter från märgen ger ännu sämre prognos – spontan regeneration utesluten."
    ],
    "flagg": [
     "Smärtsam plexuspåverkan – misstänk **cancerinväxt** (t.ex. apikal lungcancer).",
     "Strålfibros: glöm inte recidivrisken – MR."
    ],
    "ddx": [
     [
      "t9-091",
      "Radikulopati",
      "Segmentell utbredning från en rot."
     ],
     [
      "t9-097",
      "Mononeuropatier",
      "Bortfall från en enskild nerv."
     ],
     [
      "",
      "Skulderneurit",
      "Akut svår axelvärk följd av pares, god prognos."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 48"
    ]
   },
   "card": {},
   "km": [
    "neuro:78"
   ]
  },
  {
   "id": "t9-103",
   "name": "Neuropatisk smärta",
   "specialty": "Neurologi",
   "sub": "Neuropatisk smärta",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Neuropatisk (neurogen) smärta** uppstår vid skada eller sjukdom i nervsystemet. I kompendiet förekommer den vid bl.a. diabetesneuropati, GBS och MS.",
    "klin": [
     "**Diabetesneuropati**: ofta smärtsamma parestesier distalt.",
     "**GBS**: neurogen smärta under förloppet.",
     "**MS**: både neurogen och nociceptiv smärta; klassiskt neurogen är **trigeminusneuralgi**; paroxysmala symtom som Lhermitte.",
     "**Restless legs**: ca hälften upplever att det aktivt gör ont djupt i benen.",
     "Plexusskada vid cancerinväxt är smärtsam."
    ],
    "diag": [
     "Smärta med nervrelaterad utbredning och parestesier; utred grundorsaken (t.ex. polyneuropatiutredning)."
    ],
    "beh": [
     "Diabetesneuropati: **gabapentin**, **karbamazepin**, **pregabalin** eller **amitriptylin**; god glukoskontroll.",
     "GBS: amitriptylin, gabapentin, pregabalin och/eller kortison.",
     "MS – kortvariga paroxysmala symtom (Lhermitte, trigeminusneuralgi): karbamazepin i lägre dos än vid epilepsi.",
     "RLS med svår smärta: gabapentin, bensodiazepiner eller opiater."
    ],
    "flagg": [
     "Behandla grundsjukdomen – t.ex. glukoskontroll vid diabetes.",
     "Smärtsam plexuspåverkan kan vara tecken på cancerinväxt."
    ],
    "ddx": [
     [
      "t9-092",
      "Polyneuropati",
      "Vanlig orsak (diabetes)."
     ],
     [
      "t9-032",
      "Trigeminusneuralgi",
      "Klassisk neurogen smärta, t.ex. vid MS."
     ],
     [
      "t9-063",
      "Restless legs",
      "Rörelsebehov, värre i vila och kväll."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 25–27",
     "Kompendium Neurologi (T9), s. 45–46",
     "Kompendium Neurologi (T9), s. 48"
    ]
   },
   "card": {},
   "km": [
    "neuro:79"
   ]
  },
  {
   "id": "t9-104",
   "name": "Funktionella tillstånd med neurologisk symtombild",
   "specialty": "Neurologi",
   "sub": "Funktionella tillstånd med neurologisk symtombild",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Funktionella tillstånd ger kroppsliga – här neurologiska – symtom utan påvisbar strukturell sjukdom. Psykiatrikompendiet beskriver **somatisering**: att reagera på påfrestningar med kroppsliga besvär, ffa. vid psykosocial stress och stora livsförändringar.",
    "klin": [
     "Symtomen stämmer sällan med någon identifierbar sjukdomsbild; vanligt är stressymtom (spänningshuvudvärk, klumpkänsla i halsen, tryck över bröstet, hjärtklappning, snabb andning, sömnstörning).",
     "Anamnestiska tecken: kaotisk sjukdomsberättelse med blandning av triviala och hypotetiskt allvarliga symtom; stark ovilja att ta till sig annan förklaring än kroppslig sjukdom.",
     "Kan bli kroniskt hos vissa – viktigt att fånga upp **kronisk somatisering**.",
     {
      "h": "Neurologiska exempel i kompendiet"
     },
     "**Psykogena kramper**: differentiera mot epileptiska anfall – prolaktin stiger kraftigt vid generaliserat anfall (klingar av inom 30–60 min).",
     "**Psykogent koma** står för ca 1 % av vakenhetssänkningar."
    ],
    "diag": [
     "Uteslut strukturell och metabol orsak med anamnes, status och riktad utredning.",
     "Prolaktin tidigt och efter 2 h kan hjälpa att skilja epileptiskt från psykogent anfall."
    ],
    "beh": [
     "Hygglig evidens för **KBT**; samsjuklighet med depression och ångest behandlas med SSRI."
    ],
    "flagg": [
     "Funktionell diagnos kräver att organisk orsak övervägts – men undvik upprepade onödiga utredningar.",
     "Spänningshuvudvärk: många tror att de har hjärntumör – lugnande besked."
    ],
    "ddx": [
     [
      "t9-151",
      "Kroppssyndrom och relaterade syndrom",
      "Psykiatrisk ram för somatiska symtom."
     ],
     [
      "t9-105",
      "Dissociativa syndrom med neurologisk symtombild",
      "Dissociativa anfall och koma."
     ],
     [
      "t9-035",
      "Nydebuterad epilepsi",
      "Epileptiska anfall – prolaktin, EEG."
     ],
     [
      "t9-213",
      "Funktionell synpåverkan",
      "Funktionella synsymtom."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 9",
     "Kompendium Neurologi (T9), s. 9",
     "Kompendium Neurologi (T9), s. 12",
     "Kompendium Neurologi (T9), s. 20"
    ]
   },
   "card": {},
   "km": [
    "neuro:80"
   ]
  },
  {
   "id": "t9-105",
   "name": "Dissociativa syndrom med neurologisk symtombild",
   "specialty": "Neurologi",
   "sub": "Funktionella tillstånd med neurologisk symtombild",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "neuro:80"
   ]
  },
  {
   "id": "t9-106",
   "name": "Biomedicinskt och psykologiskt-socialt kunskapsområde",
   "specialty": "Psykiatri",
   "sub": "Psykiatrins grunder",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-107",
   "name": "Farmakologiska behandlingar inom psykiatrin",
   "specialty": "Psykiatri",
   "sub": "Psykiatrins grunder",
   "ty": "lm",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Psykofarmaka som tas upp i kompendiet: **antidepressiva** (SSRI, SNRI, NaSSA, TCA m.fl.), **stämningsstabiliserare**, **antipsykotika/neuroleptika**, **bensodiazepiner och hypnotika**, **ADHD-läkemedel** och **läkemedel vid alkohol-/opioidberoende**. Valet styrs av diagnos och svårighetsgrad.",
    "klin": [
     {
      "h": "Antidepressiva"
     },
     "Depression: börja med **SSRI** → doshöj → byt till **SNRI**; ev. **mirtazapin** till kvällen (sövande). Vid lindrig–medelsvår depression ingen skillnad mellan olika antidepressiva.",
     "Melankoli: kan kräva intensifierad behandling/kombination; äldre **TCA** (klomipramin) kan ha plats. Atypisk depression: dopamin/noradrenalin viktigare mål – effekt av **bupropion** och **agomelatin**.",
     "Ångestsyndrom (paniksyndrom, GAD, PTSD, svårare tvångssyndrom): **SSRI**, vid GAD även **venlafaxin**; vid tvångssyndrom krävs relativt höga doser.",
     {
      "h": "Stämningsstabiliserare"
     },
     "Bipolär sjukdom: **litium** (förstahand både förebyggande och akut), valproat, quetiapin; vid BP typ 2 är **lamotrigin** viktigaste medlet.",
     {
      "h": "Antipsykotika"
     },
     "Schizofreni: lågdos vid förstagångsbehandling (t.ex. risperidon 2–4 mg eller olanzapin), undvik depåpreparat akut; **klozapin** vid behandlingsrefraktär sjukdom (minst två preparat utan effekt).",
     "Akut psykos med agitation/aggressivitet: sederande högdosneuroleptika (klorpromazin, levomepromazin), ev. med bensodiazepin.",
     {
      "h": "Övrigt"
     },
     "Bensodiazepiner som tillägg vid bipolär sjukdom, ångest/sömnstörning vid psykos och tillfälligt vid initial ångeststegring av SSRI.",
     "Sömnmedel: zolpidem, zopiklon (beroendeframkallande); propiomazin, melatonin, prometazin (ej beroendeframkallande).",
     "ADHD: centralstimulantia (metylfenidat, amfetamin) bäst dokumenterade; atomoxetin (Strattera) eller venlafaxin som alternativ."
    ],
    "beh": [
     {
      "tbl": [
       [
        "Preparat (klass)",
        "Styrka/dos angiven i kompendiet"
       ],
       [
        "Mianserin (tetracyklisk)",
        "10 mg"
       ],
       [
        "Mirtazapin (NaSSA)",
        "30 mg"
       ],
       [
        "Venlafaxin (SNRI)",
        "75 mg"
       ],
       [
        "Agomelatin/Valdoxan",
        "25 mg"
       ],
       [
        "Risperidon (förstagångspsykos)",
        "2–4 mg"
       ],
       [
        "Klozapin (refraktär schizofreni)",
        "12,5 mg/dag initialt, upp till 300 mg/dag"
       ],
       [
        "Propranolol (social fobi, v.b.)",
        "20–40 mg"
       ],
       [
        "Diazepam (akut lugnande vid psykos)",
        "< 50 mg/dygn"
       ]
      ]
     }
    ],
    "hand": [
     "Vid ångest: SSRI startas i låg dos med gradvis ökning; initial ångestförsämring hanteras med bensodiazepin (Stesolid, Sobril) eller antihistamin (Atarax, Lergigan – ej till äldre).",
     "Långtidsbehandling av depression med samma läkemedel som gav effekt, t.ex. vid tidig/sen debut, täta recidiv eller allvarliga tillstånd.",
     "Sömnmedel: lägsta möjliga dos under kortast möjliga tid; äldre ges halv startdos.",
     "Schizofreni på längre sikt: sträva efter monoterapi."
    ],
    "flagg": [
     "**Alla antidepressiva kan inducera ”rapid cycling”** vid långtidsbehandling av bipolär sjukdom.",
     "SSRI ger ofta initialt **ökad ångest** veckorna efter insättning.",
     "Äldre är mycket känsliga för **extrapyramidala biverkningar**; valproat ger fler biverkningar hos äldre; personer med autism kan ha ökad neuroleptikakänslighet.",
     "Bensodiazepiner har hög beroendepotential (särskilt flunitrazepam, lorazepam, diazepam) och bör undvikas hos äldre annat än tillfälligt."
    ],
    "ddx": [
     [
      "t9-142",
      "Litiumbehandling",
      "Stämningsstabiliserande förstahandsmedel vid bipolär sjukdom."
     ],
     [
      "t9-171",
      "Psykofarmakologisk behandling av äldre",
      "Särskild känslighet och dosanpassning hos äldre."
     ],
     [
      "t9-108",
      "Hjärnstimulerande behandlingar",
      "Icke-farmakologiskt alternativ (ECT) vid svår melankoli/terapiresistens."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 3–4",
     "Kompendium Psykiatri (T9), s. 6–10",
     "Kompendium Psykiatri (T9), s. 13–15",
     "Kompendium Psykiatri (T9), s. 18–19",
     "Kompendium Psykiatri (T9), s. 28"
    ]
   },
   "card": {},
   "km": [
    "psyk:1"
   ]
  },
  {
   "id": "t9-108",
   "name": "Hjärnstimulerande behandlingar",
   "specialty": "Psykiatri",
   "sub": "Psykiatrins grunder",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Hjärnstimulerande behandling i kompendiet avser **elektrokonvulsiv behandling (ECT)**, som nämns som alternativ vid **svår melankoli**, **behandlingsresistenta cykloida psykoser** och vissa **psykotiska reaktioner** vid kris.",
    "klin": [
     "Kompendiet beskriver inte själva genomförandet av behandlingen."
    ],
    "diag": [
     "Indikationsbedömningen utgår från depressionens svårighetsgrad (skattas med **MADRS**) och om melankoliska drag föreligger."
    ],
    "hand": [
     "**Svår egentlig depression**: antidepressiva och/eller ECT – vid melankoli används ofta båda.",
     "**Svår melankoli** kan i sig indicera ECT.",
     "**Cykloida syndrom**: ECT är ett alternativ vid behandlingsresistens efter sömn/bensodiazepiner och ev. neuroleptika.",
     "**Akuta kristillstånd** med psykotiska reaktioner: ECT kan vara behjälpligt."
    ],
    "flagg": [
     "Psykoterapi saknar evidens vid svår egentlig depression – fördröj inte biologisk behandling (läkemedel/ECT) hos svårt sjuka.",
     "Tänk på ECT tidigt vid melankoli, som är en specifik och svårare form av depression."
    ],
    "ddx": [
     [
      "t9-143",
      "Elektrokonvulsiv behandling (ECT)",
      "Fördjupat uppslag om ECT."
     ],
     [
      "t9-144",
      "Transkraniell magnetstimulering (TMS)",
      "Annan hjärnstimulerande metod, tas ej upp i kompendiet."
     ],
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Främsta indikationsområdet (svår depression/melankoli)."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 3",
     "Kompendium Psykiatri (T9), s. 5",
     "Kompendium Psykiatri (T9), s. 11"
    ]
   },
   "card": {},
   "km": [
    "psyk:1",
    "psyk:39"
   ]
  },
  {
   "id": "t9-109",
   "name": "Det psykiatriska teamets arbetssätt",
   "specialty": "Psykiatri",
   "sub": "Psykiatrins grunder",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "psyk:3"
   ]
  },
  {
   "id": "t9-110",
   "name": "Primärvård och specialistnivå inom psykiatrin",
   "specialty": "Psykiatri",
   "sub": "Psykiatrins grunder",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vårdnivån styrs av **svårighetsgrad, suicidrisk och behov av specialiserad utredning**. Lättare ångest- och stresstillstånd hanteras gärna i **primärvården (HC)**, medan svåra tillstånd och neuropsykiatrisk utredning sköts av **specialistpsykiatrin**.",
    "klin": [
     {
      "h": "Primärvård"
     },
     "Det är generellt bra om första kontakten vid ångest sker på HC.",
     "Lättare stressrelaterade problem: livsstilsråd och fysisk aktivitet på recept; ev. kurator/psykolog, KBT i grupp, sjukskrivning.",
     "Lindrig alkoholabstinens utan riskfaktorer för delirium/kramper kan skötas i öppenvård."
    ],
    "diag": [
     {
      "h": "Behandlingstrappa vid ångest"
     },
     "1) aktiv expektans 10–14 dagar, 2) fysisk aktivitet, 3) KBT, 4) IPT, 5) antidepressiva, 6) kombination KBT + SSRI, 7) **remiss till psykiatrin**."
    ],
    "hand": [
     {
      "h": "Specialistnivå"
     },
     "ADHD-utredning: barn → **BUP**, vuxna → **vuxenpsykiatrin**.",
     "Djupa depressiva tillstånd hos äldre bör behandlas av specialist.",
     "Uttalad alkoholabstinens och delirium tremens kräver inläggning; vid uppenbar risk för kramper eller delirium hänvisas till **medicinklinik**, medan psykiatrisk indikation ger inläggning inom psykiatrin.",
     "Bensodiazepinnedtrappning sker i slutenvård vid t.ex. psykiatrisk samsjuklighet, blandmissbruk, social instabilitet eller upprepade misslyckade öppenvårdsförsök."
    ],
    "flagg": [
     "Suicidalitet, psykos och allvarlig intoxikation är skäl till akut inläggning (anges vid bensodiazepinabstinens).",
     "Inläggningskriterier vid alkohol: promille > 3, tidigare kramper/hallucinos/delirium, puls > 115, komplicerad blandintox, daglig konsumtion > 75 cl/dygn, samtidig somatisk sjukdom."
    ],
    "ddx": [
     [
      "t9-147",
      "Ångestsyndrom",
      "Vanligaste tillståndet som handläggs i primärvård."
     ],
     [
      "t9-157",
      "Alkoholabstinens",
      "Inläggningskriterier styr vårdnivå."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 5",
     "Kompendium Psykiatri (T9), s. 9",
     "Kompendium Psykiatri (T9), s. 13",
     "Kompendium Psykiatri (T9), s. 19",
     "Kompendium Psykiatri (T9), s. 24",
     "Kompendium Psykiatri (T9), s. 29"
    ]
   },
   "card": {},
   "km": [
    "psyk:4"
   ]
  },
  {
   "id": "t9-111",
   "name": "Ålders-, köns- och kulturella faktorers påverkan",
   "specialty": "Psykiatri",
   "sub": "Psykiatrins grunder",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Psykisk sjukdom kan **ta sig olika uttryck beroende på ålder**, och flera tillstånd har **olika förekomst hos män och kvinnor**. Kompendiet behandlar framför allt äldres och barns symtombild samt könsskillnader i prevalens.",
    "klin": [
     {
      "h": "Ålder – barn och unga"
     },
     "Depression hos barn/ungdomar visar sig ofta som irritabilitet, sviktande skolprestationer och social tillbakadragenhet.",
     "ADHD-kriterierna är utformade för barn – vid vuxendiagnos måste barndomen kartläggas; hyperaktiviteten blir ofta mer subtil med åren medan uppmärksamhetsproblem kvarstår.",
     {
      "h": "Ålder – äldre"
     },
     "Depression hos äldre visar sig ofta inte som sänkt stämningsläge utan som hopplöshet, meningslöshet, ångest, oro och hypokondriska tankar; **nydebuterad ångest i hög ålder talar starkt för depression**.",
     "Mani hos äldre: ofta utåtagerande, aggressivitet, konfusion och blandbilder som misstas för depression med ångest.",
     "Schizofreni hos äldre: mer förföljelsetankar och hallucinationer, färre negativa symtom.",
     "Sömn: yngre har främst insomningsproblem, äldre täta/tidiga uppvaknanden.",
     {
      "h": "Kön"
     },
     "Livstidsrisk för ångest ca 15 % hos män och 30 % hos kvinnor; insomni vanligare hos kvinnor.",
     "ADHD ca 3:1 pojkar/flickor; autism vanligare hos pojkar.",
     "Allvarliga alkoholproblem hos 10–15 % av vuxna män och 5–10 % av kvinnor; riskgränser för alkohol är lägre för kvinnor.",
     "Manligt kön är en riskfaktor för suicid."
    ],
    "diag": [
     "Hos äldre saknas egna diagnoskriterier för depression → underdiagnostik; diagnosen bygger på klinisk bild och skattningsskala som **GDS-20**."
    ],
    "beh": [
     "Äldre: SSRI fungerar oftast bra vid depression; litium effektivt vid bipolär sjukdom; bensodiazepiner bör undvikas annat än tillfälligt; ge halv startdos av sömnmedel."
    ],
    "flagg": [
     "Vid psykotiska symtom hos äldre ska i första hand organisk orsak, framför allt **demens**, uteslutas.",
     "Äldre är mycket känsliga för extrapyramidala biverkningar av neuroleptika."
    ],
    "ddx": [
     [
      "t9-169",
      "Psykiatriska störningar hos äldre",
      "Fördjupning kring äldres symtombild."
     ],
     [
      "t9-173",
      "Kulturella faktorers betydelse för diagnostik och behandling",
      "Kulturaspekten saknas i kompendiet."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 2",
     "Kompendium Psykiatri (T9), s. 5",
     "Kompendium Psykiatri (T9), s. 13–15",
     "Kompendium Psykiatri (T9), s. 17",
     "Kompendium Psykiatri (T9), s. 19–21"
    ]
   },
   "card": {},
   "km": [
    "psyk:5",
    "psyk:62"
   ]
  },
  {
   "id": "t9-112",
   "name": "Psykiatriskt status",
   "specialty": "Psykiatri",
   "sub": "Psykiatrins grunder",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "psyk:7"
   ]
  },
  {
   "id": "t9-113",
   "name": "Samtalskontakt med personer med psykisk sjukdom",
   "specialty": "Psykiatri",
   "sub": "Psykiatrins grunder",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "En förtroendefull samtalskontakt bygger enligt kompendiet på att **tala med, inte till** patienten, att **bygga allians** och att stödja patientens **egen förmåga**, samt att undvika maktspråk i laddade situationer.",
    "klin": [
     {
      "h": "Vid kris"
     },
     "Ha ett brett perspektiv, fokusera på det aktuella problemet och patientens egen förmåga att ta sig förbi det – ta inte över ansvaret från patienten.",
     {
      "h": "Vid ätstörning"
     },
     "Första steget är att skapa initial kontakt och **allians** – patienten saknar ofta sjukdomsinsikt.",
     {
      "h": "Vid neuropsykiatri"
     },
     "Många med autism hjälps av att få en diagnos som förklaring; vid ADHD ingår utbildning om funktionsnedsättningen.",
     {
      "h": "Vid hot och aggressivitet"
     },
     "Mimik, kroppshållning och tonläge ska minska patientens upplevelse av kränkning eller rädsla.",
     "Anklagande eller förmanande maktspråk ökar hotfullheten och ska inte förekomma."
    ],
    "diag": [
     "Vid somatisering är sjukdomsberättelsen ofta kaotisk och svår att ordna, och patienten är ovillig att ta till sig annan förklaring än kroppslig sjukdom."
    ],
    "hand": [
     "Vid misstänkt depression: fråga strukturerat enligt suicidtrappan (se [[t9-127|strukturerad suicidriskbedömning]])."
    ],
    "flagg": [
     "Hindra aldrig en potentiellt ilsken patient från att lämna rummet.",
     "Vid okontrollerbar aggressivitet: agera på säkerhet – inga ”pseudoterapeutiska” eller förklarande manövrer.",
     "Vid krisstöd finns risk att patientens behov av medicinsk behandling förbises."
    ],
    "ddx": [
     [
      "t9-114",
      "Krisbearbetning och stödsamtal",
      "Samtalsstöd vid akut kris."
     ],
     [
      "t9-168",
      "Handläggning av hot, aggressivt beteende och manifest våld",
      "Förhållningssätt vid hot."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 5",
     "Kompendium Psykiatri (T9), s. 9",
     "Kompendium Psykiatri (T9), s. 12–14",
     "Kompendium Psykiatri (T9), s. 17–18"
    ]
   },
   "card": {},
   "km": [
    "psyk:8",
    "psyk:9"
   ]
  },
  {
   "id": "t9-114",
   "name": "Krisbearbetning och stödsamtal",
   "specialty": "Psykiatri",
   "sub": "Psykiatrins grunder",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "En **krisreaktion** är en **naturlig reaktion** på en påfrestning (t.ex. relationskonflikt, ångest, depression). Stödet fokuserar på det aktuella problemet och patientens **egen förmåga** att hantera det; läkemedel är inte primärt.",
    "klin": [
     "Konsultationen ska ha ett brett perspektiv – ansvaret övertas inte från patienten. **Tala med, inte till!**",
     "Undvik anxiolytika; sömntabletter kan behövas en period.",
     "Sjukskrivning och stödterapi vid behov.",
     "Vid lindrig egentlig depression rekommenderas **stödsamtal och expektans**."
    ],
    "diag": [
     {
      "h": "Maladaptiv stressreaktion (anpassningsstörning)"
     },
     "Emotionella symtom eller beteendeförändring som debuterar **inom 3 månader** efter identifierbar stressfaktor.",
     "Kliniskt signifikant: lidande större än förväntat och/eller försämrad social/arbetsfunktion.",
     "Uppfyller inte kriterier för annan psykiatrisk störning och motsvarar inte okomplicerad sorg.",
     "Symtomen varar **högst 6 månader** efter att påfrestningen upphört."
    ],
    "beh": [
     "Lättare stressrelaterade besvär: livsstilsråd och fysisk aktivitet på recept.",
     "Vid behov psykolog/kurator och fokuserad gruppbehandling enligt KBT, ev. sjukskrivning.",
     "Vid psykotiska reaktioner kan ECT vara behjälpligt."
    ],
    "flagg": [
     "Risk att för höga förväntningar läggs på patienten och att **behov av medicinsk behandling förbises**.",
     "Suicidtankar vid depression talar för läkemedelsbehandling i stället för enbart stödsamtal."
    ],
    "ddx": [
     [
      "t9-146",
      "Akuta kristillstånd",
      "Närliggande uppslag om akut kris."
     ],
     [
      "t9-149",
      "Trauma- och stressrelaterade syndrom",
      "PTSD efter exceptionellt hot/katastrof, latens upp till 10 år."
     ],
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Uppfyller depressionskriterier i stället för stressreaktion."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 3",
     "Kompendium Psykiatri (T9), s. 5"
    ]
   },
   "card": {},
   "km": [
    "psyk:10",
    "psyk:41"
   ]
  },
  {
   "id": "t9-115",
   "name": "Diagnostik enligt DSM och utrednings- och behandlingsplan",
   "specialty": "Psykiatri",
   "sub": "Psykiatrins grunder",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Psykiatriska diagnoser ställs enligt **DSM-kriterier** (symtom, varaktighet, funktionspåverkan och uteslutning av annan orsak), kompletterat med **skattningsskalor**, **somatisk utredning** och kartläggning av sociala förhållanden.",
    "klin": [
     {
      "h": "Gemensam struktur i DSM-kriterierna"
     },
     "Ett visst antal karakteristiska symtom under en minsta tid (t.ex. depression: 5 av 9 under 2 veckor; schizofreni: minst 2 A-kriterier under 1 månad).",
     "Kliniskt signifikant lidande och/eller nedsatt funktion.",
     "Tillståndet förklaras inte bättre av droger/alkohol, somatisk sjukdom eller annan psykiatrisk diagnos."
    ],
    "diag": [
     {
      "h": "Utredning"
     },
     "Depression: rutinlab, missbruksanamnes, kognitiv funktionsbedömning, ev. CT/MR.",
     "Psykos: anamnes (missbruk, hereditet, trauma, suicidtankar, tidigare funktionsnivå), nervstatus, CT hjärna, gärna EEG, lab (blodstatus, leverstatus, elstatus/kreatinin, thyroideastatus), ADL-bedömning, socialt nätverk.",
     "Bipolär sjukdom: anamnes inkl. ”livslinje” och anhöriganamnes, rutinlab, suicidbedömning.",
     {
      "h": "Skattningsskalor i kompendiet"
     },
     {
      "tbl": [
       [
        "Skala",
        "Användning"
       ],
       [
        "MADRS",
        "Djup hos redan diagnostiserad depression"
       ],
       [
        "MDQ",
        "Bipolär sjukdom"
       ],
       [
        "PANSS",
        "Svårighetsgrad och förlopp vid psykos"
       ],
       [
        "ASRS",
        "Självskattning, screening för ADHD"
       ],
       [
        "GDS-20",
        "Depression hos äldre"
       ],
       [
        "CAGE",
        "Alkoholproblem (≥ 2 ja indikerar missbruk)"
       ]
      ]
     }
    ],
    "hand": [
     "Behandlingen väljs efter diagnos och svårighetsgrad, t.ex. depression: lindrig → stödsamtal/expektans, medelsvår → psykoterapi och/eller läkemedel, svår → antidepressiva/ECT."
    ],
    "flagg": [
     "Uteslut alltid substans- och somatisk orsak innan psykiatrisk diagnos ställs.",
     "Hos äldre täcker vanliga depressionskriterier inte alla tillstånd → risk för underdiagnostik."
    ],
    "ddx": [
     [
      "t9-116",
      "Psykiatrisk terminologi",
      "Begrepp som används i kriterierna."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 2–4",
     "Kompendium Psykiatri (T9), s. 10",
     "Kompendium Psykiatri (T9), s. 13",
     "Kompendium Psykiatri (T9), s. 19",
     "Kompendium Psykiatri (T9), s. 21"
    ]
   },
   "card": {},
   "km": [
    "psyk:11"
   ]
  },
  {
   "id": "t9-116",
   "name": "Psykiatrisk terminologi",
   "specialty": "Psykiatri",
   "sub": "Arbete inom psykiatrisk verksamhet",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Grundläggande psykiatriska termer som definieras eller används i kompendiet, framför allt kring **ångest, förstämning, psykos, sömn och beroende**.",
    "klin": [
     {
      "tbl": [
       [
        "Term",
        "Innebörd enligt kompendiet"
       ],
       [
        "Ångest",
        "Rädsla när man varken kan undvika eller övervinna hotet; förknippat med uppgivenhet och hjälplöshet"
       ],
       [
        "Melankoli",
        "Svår depressionsform med distinkt nedstämdhet, morgonförsämring, tidigt uppvaknande, uttalad hämning/agitation"
       ],
       [
        "Hypomani/mani",
        "Ökad aktivitet, minskat sömnbehov, försämrat omdöme; skiljer sig i svårighetsgrad"
       ],
       [
        "Blandepisod",
        "Kriterier för depression och mani samtidigt"
       ],
       [
        "Somatisering",
        "Att reagera på påfrestningar med kroppsliga besvär"
       ],
       [
        "Vanföreställning (icke bisarr)",
        "Kärnsymtom vid vanföreställningssyndrom"
       ],
       [
        "Tics",
        "Plötsliga, snabba, återkommande, icke-rytmiska, stereotypa rörelser"
       ],
       [
        "Koprolali",
        "Ofrivilligt svärande vid Tourettes syndrom"
       ],
       [
        "Konfusion (delirium)",
        "Akut, fluktuerande förändring av psykiska funktioner orsakad av hjärninsufficiens"
       ],
       [
        "Dyssomni",
        "Avvikelse i mängd, kvalitet eller tidpunkt för sömn"
       ],
       [
        "Tolerans",
        "Behov av större dos för samma effekt"
       ],
       [
        "Abstinens",
        "Specifika symtom vid avbruten tillförsel av drog"
       ],
       [
        "Psykiskt/fysiskt beroende",
        "Drift att återuppleva belöning / kroppens kemi har anpassat sig till substansen"
       ],
       [
        "Konfabulation",
        "Utfyllnad av minnesluckor, typiskt vid Korsakows psykos"
       ]
      ]
     }
    ],
    "diag": [
     "Begreppen används som byggstenar i DSM-kriterierna, t.ex. A-kriterierna vid schizofreni: vanföreställningar, hallucinationer, desorganiserat tal, desorganiserat/katatont beteende och negativa symtom."
    ],
    "flagg": [
     "Skilj **mani** från **hypomani** (svårighetsgrad) och **konfusion** från **psykos** (fluktuerande förlopp, påverkad orientering och minne vid konfusion)."
    ],
    "ddx": [
     [
      "t9-115",
      "Diagnostik enligt DSM och utrednings- och behandlingsplan",
      "Hur begreppen används i diagnostiken."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 3–4",
     "Kompendium Psykiatri (T9), s. 6",
     "Kompendium Psykiatri (T9), s. 9–10",
     "Kompendium Psykiatri (T9), s. 13",
     "Kompendium Psykiatri (T9), s. 15",
     "Kompendium Psykiatri (T9), s. 20–21",
     "Kompendium Psykiatri (T9), s. 25"
    ]
   },
   "card": {},
   "km": [
    "psyk:18"
   ]
  },
  {
   "id": "t9-117",
   "name": "Yrkesgrupper och läkarens roll i det psykiatriska teamet",
   "specialty": "Psykiatri",
   "sub": "Arbete inom psykiatrisk verksamhet",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-118",
   "name": "Lagen om psykiatrisk tvångsvård (LPT)",
   "specialty": "Psykiatri",
   "sub": "Lagar och förordningar",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-119",
   "name": "Lagen om rättspsykiatrisk vård (LRV)",
   "specialty": "Psykiatri",
   "sub": "Lagar och förordningar",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-120",
   "name": "Offentlighets- och sekretesslagen",
   "specialty": "Psykiatri",
   "sub": "Lagar och förordningar",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "psyk:22"
   ]
  },
  {
   "id": "t9-121",
   "name": "Socialtjänstlagen",
   "specialty": "Psykiatri",
   "sub": "Lagar och förordningar",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "psyk:22"
   ]
  },
  {
   "id": "t9-122",
   "name": "Lagen om vård av missbrukare i vissa fall (LVM)",
   "specialty": "Psykiatri",
   "sub": "Lagar och förordningar",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-123",
   "name": "Lagen med särskilda bestämmelser om vård av unga (LVU)",
   "specialty": "Psykiatri",
   "sub": "Lagar och förordningar",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-124",
   "name": "Lagen om stöd och service till vissa funktionshindrade (LSS)",
   "specialty": "Psykiatri",
   "sub": "Lagar och förordningar",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-125",
   "name": "Anmälningsskyldighet gällande körkort och vapeninnehav",
   "specialty": "Psykiatri",
   "sub": "Lagar och förordningar",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vissa sjukdomstillstånd utgör **medicinska hinder för körkort**. I T9-kompendierna nämns **alkoholberoende**, **epilepsi**, **dåligt reglerad narkolepsi** och otillräcklig **synskärpa**.",
    "klin": [
     "**Alkoholberoende** är ett hinder för att inneha körkort enligt Vägverkets författningssamling.",
     "En patient med **dåligt reglerad narkolepsi** får inte inneha körkort.",
     "Körkortskrav på syn: **binokulär visus 0,5**; vid glaukom med utbredda synfältsdefekter kan körkortet dras in.",
     "Demensutredning inkluderar körkortsbedömning (funktionsdiagnostik via arbetsterapeut)."
    ],
    "diag": [
     {
      "tbl": [
       [
        "Epilepsi",
        "B-körkort",
        "Yrkeschaufförer"
       ],
       [
        "1 anfall",
        "6 mån körförbud",
        "5 års körförbud"
       ],
       [
        "2 anfall (= epilepsidiagnos)",
        "12 mån anfallsfrihet krävs",
        "10 års körförbud"
       ]
      ]
     }
    ],
    "flagg": [
     "Fråga om alkoholvanor (t.ex. CAGE) – alkoholberoende påverkar körkortsinnehav.",
     "Kompendiet tar inte upp anmälningsförfarandet eller vapeninnehav – se andra källor."
    ],
    "ddx": [
     [
      "t9-038",
      "Epilepsi och körkort",
      "Detaljerade körförbudsregler vid epilepsi."
     ],
     [
      "t9-250",
      "Synkrav för körkort",
      "Synkrav enligt ögonboken."
     ],
     [
      "t9-155",
      "Alkoholbrukssyndrom",
      "Alkoholberoende som körkortshinder."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 21",
     "Kompendium Neurologi (T9), s. 13",
     "Kompendium Neurologi (T9), s. 22",
     "Kompendium Neurologi (T9), s. 33",
     "Ögonboken – sammanfattning (T9), s. 4",
     "Ögonboken – sammanfattning (T9), s. 16"
    ]
   },
   "card": {},
   "km": [
    "psyk:23",
    "psyk:6"
   ]
  },
  {
   "id": "t9-126",
   "name": "Riskpersoner för suicid",
   "specialty": "Psykiatri",
   "sub": "Suicidologi",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Riskpersoner för suicid** identifieras genom kända **riskfaktorer** (tidigare försök, manligt kön, hög ålder, psykisk störning, missbruk, social isolering m.fl.) vägda mot **friskfaktorer**. I Sverige dör årligen **1400–1500 personer** i suicid.",
    "klin": [
     {
      "h": "Riskfaktorer"
     },
     "**Tidigare suicidförsök**.",
     "Man, äldre, arbetslös, ensamboende, frånskild/änka/änkling.",
     "Missbruk, svagt socialt nätverk, hereditet för suicid.",
     "Psykisk störning och kronisk somatisk sjukdom.",
     {
      "h": "Särskilt utsatta grupper i kompendiet"
     },
     "**Depression** medför ökad suicidrisk; **bipolär sjukdom** har hög suicidrisk.",
     "**Ensamstående man i övre medelåldern med alkoholproblem** har störst risk för suicid.",
     "Paniksyndrom: lika många försök som vid depression men färre fullbordade.",
     "Autism: suicidförsök vanligare än i normalbefolkningen; MS: depression och ökad suicid.",
     {
      "h": "Friskfaktorer"
     },
     "God interpersonell förmåga, stabila relationer, god problemlösningsförmåga, upplevelse av mening/sammanhang, **begränsade möjligheter att ta sitt liv**."
    ],
    "diag": [
     "Värdera risk med **suicidtrappan** (nedstämdhet → livsleda → dödstankar → dödsönskan → suicidtankar → planer → försök).",
     "Suicidbedömning ingår i utredningen vid bipolär sjukdom och psykos (fråga om suicidtankar)."
    ],
    "hand": [
     "Suicidtankar vid depression talar för **läkemedelsbehandling** snarare än enbart stödsamtal.",
     "Suicidalitet vid bensodiazepinabstinens är indikation för **akut inläggning**."
    ],
    "flagg": [
     "Vid terapiresistent depression – tänk **alkohol**, som också ökar suicidrisken.",
     "Tidigare suicidförsök är en central riskfaktor – fråga alltid.",
     "Äldre visar ofta inte nedstämdhet direkt utan hopplöshet och meningslöshet."
    ],
    "ddx": [
     [
      "t9-127",
      "Strukturerad suicidriskbedömning",
      "Själva bedömningen med suicidtrappan."
     ],
     [
      "t9-128",
      "Begrepp och epidemiologi inom suicidologi",
      "Begrepp och siffror."
     ],
     [
      "t9-155",
      "Alkoholbrukssyndrom",
      "Kraftigt ökad suicidrisk."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 2",
     "Kompendium Psykiatri (T9), s. 3–4",
     "Kompendium Psykiatri (T9), s. 7",
     "Kompendium Psykiatri (T9), s. 14",
     "Kompendium Psykiatri (T9), s. 17",
     "Kompendium Psykiatri (T9), s. 21",
     "Kompendium Psykiatri (T9), s. 29",
     "Kompendium Neurologi (T9), s. 26"
    ]
   },
   "card": {},
   "km": [
    "psyk:25"
   ]
  },
  {
   "id": "t9-127",
   "name": "Strukturerad suicidriskbedömning",
   "specialty": "Psykiatri",
   "sub": "Suicidologi",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "En **strukturerad suicidriskbedömning** kombinerar stegvisa frågor om suicidalitet (**suicidtrappan**) med en genomgång av **risk- och friskfaktorer**.",
    "klin": [
     {
      "h": "Suicidtrappan – exempel på frågor"
     },
     {
      "tbl": [
       [
        "Steg",
        "Fråga"
       ],
       [
        "Nedstämd",
        "Känner du dig deprimerad?"
       ],
       [
        "Livsleda",
        "Känns det hopplöst?"
       ],
       [
        "Dödstankar",
        "Har du tänkt att du inte vill leva?"
       ],
       [
        "Dödsönskan",
        "Har du tänkt att du vill dö?"
       ],
       [
        "Suicidtankar",
        "Har du tänkt ta ditt liv?"
       ],
       [
        "Suicidplaner",
        "Hur, när, var?"
       ],
       [
        "Suicidförsök",
        "Har du försökt någon gång?"
       ]
      ]
     }
    ],
    "diag": [
     "Väg in **riskfaktorer**: tidigare försök, man, äldre, arbetslös, ensamboende, frånskild/änka/änkling, missbruk, svagt socialt nätverk, hereditet, psykisk störning, kronisk somatisk sjukdom.",
     "Väg in **friskfaktorer**: god interpersonell förmåga, stabila relationer, problemlösningsförmåga, upplevelse av mening, begränsad tillgång till medel.",
     "Ingår i handläggningen vid bipolär sjukdom, depression och nyinsjuknad psykos."
    ],
    "hand": [
     "Klättra i trappan stegvis – ju högre steg patienten bekräftar, desto högre risk.",
     "Suicidtankar vid depression → läkemedelsbehandling förordas; suicidalitet vid bensodiazepinabstinens → akut inläggning."
    ],
    "flagg": [
     "Stanna inte vid ”nedstämd” – fråga konkret om planer (hur, när, var) och tidigare försök.",
     "Äldre uttrycker ofta hopplöshet snarare än nedstämdhet – risk att missa depression och suicidrisk."
    ],
    "ddx": [
     [
      "t9-126",
      "Riskpersoner för suicid",
      "Vilka som ska bedömas."
     ],
     [
      "t9-129",
      "Uppföljning efter suicidförsök",
      "Handläggning efter försök (tas ej upp i kompendiet)."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 3–4",
     "Kompendium Psykiatri (T9), s. 10",
     "Kompendium Psykiatri (T9), s. 17",
     "Kompendium Psykiatri (T9), s. 19",
     "Kompendium Psykiatri (T9), s. 29"
    ]
   },
   "card": {},
   "km": [
    "psyk:25"
   ]
  },
  {
   "id": "t9-128",
   "name": "Begrepp och epidemiologi inom suicidologi",
   "specialty": "Psykiatri",
   "sub": "Suicidologi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Suicidologi omfattar en **trappa av begrepp** från nedstämdhet och livsleda till suicidplaner och suicidförsök. I Sverige dör årligen **1400–1500 personer** av självmord.",
    "klin": [
     {
      "h": "Begrepp (suicidtrappan)"
     },
     "**Livsleda** – hopplöshetskänsla.",
     "**Dödstankar** – tankar på att inte vilja leva.",
     "**Dödsönskan** – önskan att dö.",
     "**Suicidtankar** – tankar på att ta sitt liv.",
     "**Suicidplaner** – konkretiserade tankar (hur, när, var).",
     "**Suicidförsök** – genomfört försök."
    ],
    "diag": [
     {
      "h": "Epidemiologiska samband i kompendiet"
     },
     "Riskgrupper: män, äldre, ensamboende, missbrukare, personer med psykisk störning eller kronisk somatisk sjukdom.",
     "Störst risk: ensamstående man i övre medelåldern med alkoholproblem.",
     "Paniksyndrom: lika många försök som vid depression men färre fullbordade (”rop på hjälp”)."
    ],
    "flagg": [
     "Självmordstankar ingår som ett av de nio DSM-kriterierna för egentlig depression."
    ],
    "ddx": [
     [
      "t9-126",
      "Riskpersoner för suicid",
      "Risk- och friskfaktorer."
     ],
     [
      "t9-127",
      "Strukturerad suicidriskbedömning",
      "Tillämpning av begreppen."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 2",
     "Kompendium Psykiatri (T9), s. 7",
     "Kompendium Psykiatri (T9), s. 17",
     "Kompendium Psykiatri (T9), s. 21"
    ]
   },
   "card": {},
   "km": [
    "psyk:26",
    "psyk:27"
   ]
  },
  {
   "id": "t9-129",
   "name": "Uppföljning efter suicidförsök",
   "specialty": "Psykiatri",
   "sub": "Suicidologi",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "psyk:28"
   ]
  },
  {
   "id": "t9-130",
   "name": "ADHD hos vuxna",
   "specialty": "Psykiatri",
   "sub": "Utvecklingsrelaterade funktionsavvikelser",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**ADHD** är en neuropsykiatrisk funktionsnedsättning med kärnsymtomen **ouppmärksamhet, hyperaktivitet och impulsivitet**. Drabbar ca 5 % av barn i tidig skolålder (3:1 pojkar/flickor); hos vuxna kvarstår ofta **uppmärksamhetsproblemen** medan överaktiviteten blir mer subtil.",
    "klin": [
     "Vuxna domineras av nedsatt **planerings- och genomförandeförmåga**, oförmåga att strukturera vardagen, ökad stresskänslighet och koncentrationssvårigheter.",
     "Överaktivitet kan yttra sig som att starta projekt som aldrig slutförs.",
     "Uppfattas av omgivningen som struliga/slarviga; i samtal lättdistraherade med bristande tålamod.",
     "Missbruk/beroende förekommer.",
     "**DAMP**: ADHD-symtom plus motoriskt-perceptuella svårigheter; kräver mer stöd och har sämre prognos."
    ],
    "diag": [
     "Ställ frågor baserade på **DSM-kriterierna**.",
     "Kriterierna är utformade för barn → vuxendiagnos kräver kartläggning av hur individen var **i barndomen**.",
     "Screeninginstrument: **ASRS** (självskattning).",
     "Utredning: barn → BUP, vuxna → vuxenpsykiatri."
    ],
    "beh": [
     "Psykoedukation om funktionsnedsättningen och hur omgivningen påverkas.",
     "Arbetsterapeutiskt stöd, t.ex. hjälpmedel för att strukturera vardagen; psykoterapi för bättre impulskontroll.",
     "**Centralstimulantia** har bäst dokumenterad effekt: metylfenidat (Concerta, Ritalin) eller amfetaminberedningar.",
     "**Atomoxetin (Strattera)**, icke-centralstimulerande – bra när missbruk ligger för nära i tiden för centralstimulantia.",
     "Noradrenergt verkande antidepressiva (venlafaxin) har viss dokumenterad effekt på ADHD-symtom."
    ],
    "flagg": [
     "Glöm inte **missbruk** – påverkar valet mellan centralstimulantia och atomoxetin.",
     "Utan barndomsanamnes kan diagnosen inte ställas säkert hos vuxna."
    ],
    "ddx": [
     [
      "t9-132",
      "Autism hos vuxna",
      "Social interaktions- och kommunikationsnedsättning snarare än uppmärksamhet/impulsivitet."
     ],
     [
      "t9-140",
      "Bipolära syndrom",
      "Episodisk ökad aktivitet och minskat sömnbehov, inte livslångt mönster."
     ],
     [
      "t9-155",
      "Alkoholbrukssyndrom",
      "Missbruk kan ge koncentrations- och impulsproblem och är vanlig samsjuklighet."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 13"
    ]
   },
   "card": {},
   "km": [
    "psyk:29",
    "psyk:30"
   ]
  },
  {
   "id": "t9-131",
   "name": "Tourettes syndrom",
   "specialty": "Psykiatri",
   "sub": "Utvecklingsrelaterade funktionsavvikelser",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Tourettes syndrom** är ett neuropsykiatriskt tillstånd med **tics** – plötsliga, snabba, återkommande, icke-rytmiska, stereotypa motoriska rörelser – som funnits **minst ett år** utan ticsfri period längre än 3 månader.",
    "klin": [
     "Varierande grad av **empatistörning** och **uppmärksamhetsstörning** är vanligt.",
     "Många med fullt utvecklat syndrom har **koprolali** (ofrivilligt svärande).",
     "Förloppet kan vara fluktuerande."
    ],
    "diag": [
     "Symtom under minst ett år utan ticsfri period > 3 månader."
    ],
    "beh": [
     "**Neuroleptika har god effekt** (risperidon).",
     "Vid fluktuerande förlopp: behandla under topparna.",
     "Oklart om psykoterapi/KBT har en roll."
    ],
    "flagg": [
     "Leta efter samtidig uppmärksamhets- och empatistörning (överlapp mot ADHD/autism)."
    ],
    "ddx": [
     [
      "t9-130",
      "ADHD hos vuxna",
      "Uppmärksamhetsstörning utan tics."
     ],
     [
      "t9-132",
      "Autism hos vuxna",
      "Repetitiva/stereotypa beteenden men även nedsatt social interaktion och kommunikation."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 13"
    ]
   },
   "card": {},
   "km": [
    "psyk:29",
    "psyk:30"
   ]
  },
  {
   "id": "t9-132",
   "name": "Autism hos vuxna",
   "specialty": "Psykiatri",
   "sub": "Utvecklingsrelaterade funktionsavvikelser",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Autism** kännetecknas av kvalitativt nedsatt förmåga till **social interaktion** och **kommunikation** samt **begränsade, repetitiva och stereotypa** beteenden, intressen och aktiviteter, med debut av avvikande funktion **före tre års ålder**. Asperger (utan språkliga svårigheter) utgår som egen diagnos i DSM-5.",
    "klin": [
     "Pojkar drabbas oftare än flickor.",
     "Som vuxna har de flesta förhållandevis god psykosocial funktion, men ”egensinnighet” kan kvarstå.",
     "I andra änden förekommer **suicidförsök, alkoholism och depression** oftare än i normalbefolkningen."
    ],
    "diag": [
     "Två delar i diagnostiken: **symtomaspekten** (social interaktion, kommunikation, repetitiva mönster) och **funktions-/tidsaspekten** (försenad/avvikande funktion i social interaktion, socialt kommunikativt språk eller symbolisk lek/fantasilek före 3 år).",
     "Diagnoskriterierna är svåra att tillämpa kliniskt; **Gillbergs kriterier** anges som användbara.",
     "Kartlägg barndomsutvecklingen – debut före 3 år krävs."
    ],
    "beh": [
     "Många hjälps redan av att få en **diagnos som förklaring**.",
     "Stöd vid behov från team med autismkunnighet.",
     "**SSRI** vid tvångs- eller depressiva symtom."
    ],
    "flagg": [
     "**Annorlunda läkemedelskänslighet** – särskilt vanligt med neuroleptikakänslighet.",
     "Var uppmärksam på samsjuklig depression, alkoholism och suicidrisk."
    ],
    "ddx": [
     [
      "t9-130",
      "ADHD hos vuxna",
      "Ouppmärksamhet/impulsivitet utan kvalitativ social kommunikationsnedsättning."
     ],
     [
      "t9-148",
      "Tvångssyndrom",
      "Tvångstankar och ritualer som väcker/minskar ångest, utan social kommunikationsstörning."
     ],
     [
      "t9-133",
      "Schizofreni",
      "Negativa symtom kan likna autism men psykotiska symtom och senare debut."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 14"
    ]
   },
   "card": {},
   "km": [
    "psyk:29",
    "psyk:30"
   ]
  },
  {
   "id": "t9-133",
   "name": "Schizofreni",
   "specialty": "Psykiatri",
   "sub": "Schizofrenispektrumsyndrom och andra psykoser",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Schizofreni** diagnostiseras enligt DSM med **minst två A-kriterier under minst 1 månad** – vanföreställningar, hallucinationer, desorganiserat tal, desorganiserat/katatont beteende eller negativa symtom – samt **social/yrkesmässig dysfunktion under minst 6 månader**. Livstidsrisk ca **1 %**.",
    "klin": [
     "A-symtom: **vanföreställningar, hallucinationer, desorganiserat tal, desorganiserat eller katatont beteende, negativa symtom**.",
     "Incidens 0,1–0,5/1000, prevalens 3–5/1000 (30 000–50 000 i Sverige).",
     "Hos äldre: mer förföljelsetankar och hallucinationer, mindre negativa symtom.",
     "Vid schizofreni är tillståndet relativt konstant, hörselhallucinationer vanligare än synhallucinationer och minne/orientering opåverkade."
    ],
    "diag": [
     "Uteslut att annan diagnos passar bättre: **affektivt syndrom, organisk etiologi, drogmissbruk**.",
     "Anamnes: missbruk, hereditet, tidigare psykiskt/somatiskt trauma mot huvudet, suicidtankar, tidigare funktionsnivå.",
     "**Nervstatus, CT hjärna och gärna EEG** (temporallobsepilepsi kan ge schizofrent uttryck).",
     "Lab: blodstatus, leverstatus, elektrolyter/kreatinin, thyroideastatus.",
     "**PANSS** för svårighetsgrad och förlopp; ADL-bedömning via arbetsterapeut; kartlägg familj och nätverk."
    ],
    "beh": [
     "Akut: lugnande kan behövas, diazepam (Stesolid) < 50 mg/dygn.",
     "Förstagångsbehandling: **lågdos antipsykotika** (risperidon 2–4 mg) alt. olanzapin – ca ⅔ av dosen som krävs vid senare återinsjuknande.",
     "Undvik depåpreparat i akutskedet.",
     "Behandlingsrefraktär (≥ 2 preparat utan effekt): **klozapin** 12,5 mg/dag initialt, trappas upp till 300 mg/dag.",
     "Ångest och sömnstörning behandlas med bensodiazepiner."
    ],
    "hand": [
     "Vid nyinsjuknande: var **återhållsam med antipsykotika de första 1–2 veckorna**.",
     "Långsiktigt: sträva efter **monoterapi** och arbeta med livssituationen.",
     "Prognos: ¼ blir helt/delvis återställda, ¼ får bestående symtom och funktionshinder, ½ har kvarvarande symtom som kräver långtidsbehandling.",
     "Gynnsamma faktorer: stressutlöst debut, affektiva symtom, god premorbid funktion, högre debutålder."
    ],
    "flagg": [
     "Missa inte **organisk orsak** (temporallobsepilepsi, tumör, CNS-infektion m.fl.) och drogutlöst psykos.",
     "Akut psykos med hög ångest och fientlighet ökar våldsrisken; ”oprovocerade” överfall är vanliga vid schizofreni i akut psykiatrisk vård.",
     "Äldre är mycket känsliga för extrapyramidala biverkningar."
    ],
    "ddx": [
     [
      "",
      "Schizofreniformt syndrom",
      "Samma kriterier men funktionsnedsättning endast 1–6 månader."
     ],
     [
      "t9-134",
      "Schizoaffektivt syndrom",
      "Förstämningsepisoder under stor del av förloppet."
     ],
     [
      "t9-136",
      "Vanföreställningssyndrom",
      "Icke-bisarra vanföreställningar utan övriga A-kriterier och utan påtaglig funktionspåverkan."
     ],
     [
      "t9-135",
      "Kortvarig psykos",
      "Varar 1 dag–1 månad med full återhämtning."
     ],
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Akut debut, fluktuerande, påverkad orientering och minne."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 10–11",
     "Kompendium Psykiatri (T9), s. 18",
     "Kompendium Psykiatri (T9), s. 19–20"
    ]
   },
   "card": {},
   "km": [
    "psyk:31",
    "psyk:33"
   ]
  },
  {
   "id": "t9-134",
   "name": "Schizoaffektivt syndrom",
   "specialty": "Psykiatri",
   "sub": "Schizofrenispektrumsyndrom och andra psykoser",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Schizoaffektivt syndrom** innebär **depression och/eller mani** under en stor del av sjukdomsförloppet, samt **minst 2 veckor** då A-kriterierna för schizofreni är uppfyllda **utan samtidig förstämning**.",
    "klin": [
     "Kombinerar psykotiska symtom enligt schizofrenins A-kriterier (vanföreställningar, hallucinationer, desorganisation, negativa symtom) med förstämningsepisoder."
    ],
    "diag": [
     "Kräver perioder av psykos utan förstämningssymtom (≥ 2 veckor) för att skiljas från psykotisk depression/mani.",
     "Utredning som vid nyinsjuknad psykos: anamnes, nervstatus, CT hjärna, EEG, lab."
    ],
    "hand": [
     "Affektiva symtom är en prognostiskt gynnsam faktor vid insjuknande i psykossjukdom.",
     "Hos äldre är schizoaffektivt syndrom en av differentialdiagnoserna vid nydebuterade psykotiska symtom."
    ],
    "flagg": [
     "Uteslut organisk eller substansutlöst orsak innan diagnos."
    ],
    "ddx": [
     [
      "t9-133",
      "Schizofreni",
      "Förstämning inte framträdande under stor del av förloppet."
     ],
     [
      "t9-140",
      "Bipolära syndrom",
      "Psykotiska symtom endast under förstämningsepisoderna."
     ],
     [
      "t9-137",
      "Cykloida syndrom",
      "Periodiskt förlopp och tillfrisknande utan sequelae."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 10",
     "Kompendium Psykiatri (T9), s. 20"
    ]
   },
   "card": {},
   "km": [
    "psyk:31",
    "psyk:33"
   ]
  },
  {
   "id": "t9-135",
   "name": "Kortvarig psykos",
   "specialty": "Psykiatri",
   "sub": "Schizofrenispektrumsyndrom och andra psykoser",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Kortvarig psykos** innebär **minst ett psykotiskt symtom** (vanföreställning, hallucination, desorganiserat tal/beteende) under **minst 1 dag och högst 1 månad**, varefter **full hälsa och funktion återfås**.",
    "klin": [
     "Akut insjuknande med ett eller flera psykotiska symtom.",
     "Stressutlöst debut är prognostiskt gynnsamt vid psykosinsjuknande."
    ],
    "diag": [
     "Tidskriteriet (1 dag–1 månad) och full återhämtning skiljer från schizofreniformt syndrom och schizofreni.",
     "Utred som vid nyinsjuknad psykos: missbruk, somatisk orsak (nervstatus, CT hjärna, EEG, lab)."
    ],
    "beh": [
     "**Tid och sömn** är viktigast och räcker ofta för att normalisera tillståndet."
    ],
    "hand": [
     "Var återhållsam med antipsykotika de första 1–2 veckorna vid nyinsjuknande; ångest och sömnstörning kan behandlas med bensodiazepiner."
    ],
    "flagg": [
     "Uteslut drogutlöst psykos och **somatisk orsak** (t.ex. temporallobsepilepsi, CNS-infektion).",
     "Om symtomen kvarstår > 1 månad: omvärdera mot schizofreniformt syndrom/schizofreni."
    ],
    "ddx": [
     [
      "t9-137",
      "Cykloida syndrom",
      "Periodiskt återkommande förlopp med växlande stämningsläge."
     ],
     [
      "t9-133",
      "Schizofreni",
      "Symtom ≥ 1 månad och dysfunktion ≥ 6 månader."
     ],
     [
      "t9-138",
      "Psykotiska tillstånd vid somatisk sjukdom",
      "Bakomliggande neurologisk/endokrin/infektiös orsak."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 10–11"
    ]
   },
   "card": {},
   "km": [
    "psyk:32"
   ]
  },
  {
   "id": "t9-136",
   "name": "Vanföreställningssyndrom",
   "specialty": "Psykiatri",
   "sub": "Schizofrenispektrumsyndrom och andra psykoser",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Vanföreställningssyndrom** domineras av **icke-bisarra vanföreställningar** utan att övriga A-kriterier för schizofreni är eller har varit uppfyllda, och **utan påtaglig funktionspåverkan**. Eventuella hallucinationer är inte dominerande.",
    "klin": [
     "Icke-bisarra vanföreställningar är huvudsymtomet.",
     "Hallucinationer, om de finns, är inte framträdande.",
     "Paranoida och systematiserade vanföreställningar ökar med åldern."
    ],
    "diag": [
     "Uppfyller inte kriterierna för schizofreni.",
     "Hos äldre: uteslut i första hand organisk orsak, framför allt **demens**."
    ],
    "beh": [
     "Påverkas i **ringa utsträckning av antipsykotika** enligt kompendiet; hos äldre anges att det svarar på neuroleptika men med stor känslighet för extrapyramidala biverkningar."
    ],
    "hand": [
     "Utred som vid övriga psykotiska tillstånd (anamnes, somatisk utredning).",
     "Behandling hos äldre utgår från orsaken."
    ],
    "flagg": [
     "Äldre är mycket känsliga för **extrapyramidala biverkningar**.",
     "Upplevelse av förföljelse ökar långsiktig våldsrisk oavsett psykos."
    ],
    "ddx": [
     [
      "t9-133",
      "Schizofreni",
      "Fler A-kriterier och påtaglig funktionsnedsättning."
     ],
     [
      "t9-072",
      "Demensliknande tillstånd",
      "Kognitiv svikt; demens ska uteslutas vid psykotiska symtom hos äldre."
     ],
     [
      "t9-138",
      "Psykotiska tillstånd vid somatisk sjukdom",
      "Organisk orsak."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 10",
     "Kompendium Psykiatri (T9), s. 18",
     "Kompendium Psykiatri (T9), s. 19–20"
    ]
   },
   "card": {},
   "km": [
    "psyk:32"
   ]
  },
  {
   "id": "t9-137",
   "name": "Cykloida syndrom",
   "specialty": "Psykiatri",
   "sub": "Schizofrenispektrumsyndrom och andra psykoser",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Cykloida syndrom** är psykotiska störningar med **periodiskt förlopp**, där **nedstämdhet eller upprymdhet** förekommer tillsammans med vanföreställningar, hallucinationer, schizofrena symtom eller förvirring. Tillfrisknande sker **utan sequelae**.",
    "klin": [
     "Vanligen ”bipolära” i den meningen att nedstämdhet och upprymdhet växlar inom och mellan episoderna.",
     "Kan inkludera förvirring utöver psykotiska symtom.",
     "Utlöses av **längre tids svår psykisk press inklusive sömnlöshet**."
    ],
    "diag": [
     "Episodiskt förlopp med blandning av affektiva och psykotiska symtom och full återhämtning mellan episoderna.",
     "Uteslut somatisk orsak som vid annan nyinsjuknad psykos."
    ],
    "beh": [
     "**Starka sömnmediciner och bensodiazepiner**.",
     "Många blir betydligt bättre av **en veckas regelbunden sömn**.",
     "Därefter ev. atypiskt neuroleptikum (klozapin enligt kompendiet) en period.",
     "Vid behandlingsresistens kan **ECT** vara ett alternativ."
    ],
    "flagg": [
     "Fråga efter sömnbrist och långvarig psykisk belastning – viktiga utlösande faktorer.",
     "Förvirring vid cykloid psykos kräver att konfusion av somatisk orsak uteslutits."
    ],
    "ddx": [
     [
      "t9-135",
      "Kortvarig psykos",
      "Enstaka episod utan periodiskt förlopp eller tydlig stämningsväxling."
     ],
     [
      "t9-140",
      "Bipolära syndrom",
      "Förstämningsepisoder där psykos inte dominerar."
     ],
     [
      "t9-134",
      "Schizoaffektivt syndrom",
      "Psykos även utan samtidig förstämning, sämre återhämtning."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 11"
    ]
   },
   "card": {},
   "km": [
    "psyk:32"
   ]
  },
  {
   "id": "t9-138",
   "name": "Psykotiska tillstånd vid somatisk sjukdom",
   "specialty": "Psykiatri",
   "sub": "Schizofrenispektrumsyndrom och andra psykoser",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Psykotiska tillstånd vid somatisk sjukdom** innebär hallucinationer och vanföreställningar orsakade av underliggande **neurologisk, endokrin/metabol, infektiös eller autoimmun** sjukdom. Organisk orsak ska alltid uteslutas vid psykotiska symtom.",
    "klin": [
     {
      "h": "Vanligaste orsaker"
     },
     "**Temporallobsepilepsi**, hjärntumör, stroke, traumatisk hjärnskada.",
     "Endokrina/metabola störningar, CNS-infektion, MS, autoimmun sjukdom.",
     "Hos äldre: **demens** (särskilt Lewy body-demens), konfusion (delirium), substansbetingat psykotiskt syndrom.",
     {
      "h": "Ledtrådar till somatisk orsak"
     },
     "**Lukthallucinationer** (obehaglig lukt).",
     "Framträdande **religiösa vanföreställningar**."
    ],
    "diag": [
     "Nervstatus, **CT hjärna** och gärna **EEG** (temporallobsepilepsi kan ge schizofrent uttryck).",
     "Lab: blodstatus, leverstatus, elektrolyter/kreatinin, thyroideastatus.",
     "Anamnes på trauma mot huvudet och missbruk.",
     "Konfusion talar för somatisk orsak: akut debut, fluktuerande förlopp, påverkad orientering/minne och synhallucinationer – till skillnad från schizofreni."
    ],
    "beh": [
     "Behandla grundorsaken.",
     "Vid konfusion: lugn och trygg miljö, sätt ut konfusionsframkallande läkemedel; vid uttalad konfusion risperidon eller haloperidol, undvik högdosneuroleptika (levomepromazin)."
    ],
    "hand": [
     "Uteslut ”egentlig” psykos (t.ex. schizofreni) först efter att somatisk utredning gjorts.",
     "Hos äldre ska bakomliggande organisk orsak, framför allt demens, uteslutas i första hand."
    ],
    "flagg": [
     "**Lukthallucinationer** och religiösa vanföreställningar ska väcka misstanke om organisk genes.",
     "Vid alkoholmissbruk: tänk Wernicke-Korsakow – **B-vitamin före glukos**.",
     "Äldre är mycket känsliga för extrapyramidala biverkningar."
    ],
    "ddx": [
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Fluktuerande medvetande och desorientering."
     ],
     [
      "t9-133",
      "Schizofreni",
      "Konstant förlopp, opåverkad orientering, hörselhallucinationer."
     ],
     [
      "t9-165",
      "Somatiska sjukdomar som kan ge psykiska symtom",
      "Bredare uppslag om somatiska orsaker."
     ],
     [
      "",
      "Abstinenshallucinos",
      "Synhallucinationer vid alkoholabstinens med bevarad orientering."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 10–11",
     "Kompendium Psykiatri (T9), s. 20",
     "Kompendium Psykiatri (T9), s. 23",
     "Kompendium Psykiatri (T9), s. 26"
    ]
   },
   "card": {},
   "km": [
    "psyk:32",
    "psyk:59"
   ]
  },
  {
   "id": "t9-139",
   "name": "Unipolära förstämningssyndrom",
   "specialty": "Psykiatri",
   "sub": "Förstämningssjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Unipolära förstämningssyndrom** omfattar **egentlig depression** (med specifikationerna **melankoli** och **atypisk depression**) samt **dystymi**. Egentlig depression kräver enligt DSM **5 av 9 symtom under minst 2 veckor**, med påtaglig förändring och funktionspåverkan. Prevalensen för depressiva tillstånd är ca **10 %**.",
    "klin": [
     "DSM-symtom: nedstämdhet, minskat intresse/glädje, vikt-/aptitförändring, sömnstörning, psykomotorisk agitation/hämning, energibrist, värdelöshets-/skuldkänslor, koncentrationssvårigheter/obeslutsamhet, återkommande död-/självmordstankar.",
     "Ofta även ångest, kronisk trötthet, IBS-liknande magbesvär, somatisering, konfusion/”pseudodemens”.",
     "Barn/unga: irritabilitet, sviktande skolprestationer, social tillbakadragenhet.",
     "Äldre: hopplöshet, ångest och hypokondri snarare än uttalad nedstämdhet; vid svår depression ofta depressivt färgade vanföreställningar.",
     {
      "h": "Undergrupper"
     },
     {
      "tbl": [
       [
        "Typ",
        "Kännetecken"
       ],
       [
        "Melankoli",
        "≥ 3 av: distinkt nedstämdhet, morgonförsämring, tidigt uppvaknande, uttalad hämning/agitation, aptitlöshet/viktminskning, överdrivna skuldkänslor"
       ],
       [
        "Atypisk depression",
        "≥ 2 av: ökad aptit/vikt, hypersomni, tyngdkänsla i armar/ben, långvarig känslighet för avvisande; stämningen kan förbättras tillfälligt"
       ],
       [
        "Dystymi",
        "Nedstämd större delen av dagen, flertalet dagar i minst 2 år utan uppehåll > 2 mån; aldrig mani/blandepisod"
       ]
      ]
     }
    ],
    "diag": [
     "Inte orsakat av droger/alkohol, somatisk sjukdom eller sorgereaktion; orsakar signifikant lidande/funktionsnedsättning.",
     "Utredning: **rutinlab, missbruksanamnes, kognitiv funktionsbedömning**, ev. CT/MR.",
     "**MADRS** mäter djupet hos en diagnostiserad depression; **GDS-20** hos äldre.",
     "Fråga efter tidigare hypomani (även via anhöriga) – 72 % av atypiska depressioner har BP typ 2."
    ],
    "beh": [
     "**Lindrig**: stödsamtal och expektans (suicidtankar talar för läkemedel).",
     "**Medelsvår**: psykoterapi (KBT, IPT) och/eller läkemedel; ingen skillnad mellan antidepressiva vid lindrig–medelsvår depression.",
     "**Svår**: antidepressiva och/eller **ECT** (vid melankoli ofta båda); psykoterapi saknar evidens.",
     "Läkemedel: börja med **SSRI** → doshöj → **SNRI**; ev. mirtazapin till kvällen. Melankoli kan kräva kombination eller TCA (klomipramin). Atypisk depression: bupropion, agomelatin.",
     "Antidepressiva bör sättas in vid melankoli, oförmåga att klara skolarbete, suicidtankar, svår sömnstörning, anhedoni/hopplöshet eller otillräcklig effekt av psykoterapi.",
     "Äldre svarar oftast bra på SSRI; djupa depressioner hos äldre bör skötas av specialist."
    ],
    "hand": [
     "Långtidsbehandling med samma läkemedel vid effekt, särskilt vid debut < 20 eller > 60 år, täta recidiv, snabba insjuknanden eller allvarliga tillstånd.",
     "Gör suicidriskbedömning med suicidtrappan."
    ],
    "flagg": [
     "Depression ger **ökad suicidrisk** – fråga alltid om suicidtankar.",
     "Missa inte **bipolär sjukdom** – antidepressiva kan inducera rapid cycling.",
     "Vid terapiresistent depression: tänk **alkohol**.",
     "Nydebuterad ångest hos äldre talar starkt för depression."
    ],
    "ddx": [
     [
      "t9-140",
      "Bipolära syndrom",
      "Anamnes på hypomani/mani; BP 2 söker nästan alltid i depressiv fas."
     ],
     [
      "t9-155",
      "Alkoholbrukssyndrom",
      "Drogmissbruk, särskilt i abstinensfas, kan ge depressiv bild."
     ],
     [
      "t9-149",
      "Trauma- och stressrelaterade syndrom",
      "PTSD/stressreaktion med identifierbar utlösande händelse."
     ],
     [
      "t9-072",
      "Demensliknande tillstånd",
      "Pseudodemens vid depression kontra kognitiv svikt."
     ],
     [
      "t9-227",
      "Thyroideasjukdom",
      "Hypo-/hypertyreos kan ge depressiva symtom."
     ],
     [
      "t9-166",
      "Läkemedel som kan ge psykiska symtom",
      "Läkemedelsutlösta depressiva symtom."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 2–4",
     "Kompendium Psykiatri (T9), s. 9",
     "Kompendium Psykiatri (T9), s. 17",
     "Kompendium Psykiatri (T9), s. 19",
     "Kompendium Psykiatri (T9), s. 21"
    ]
   },
   "card": {},
   "km": [
    "psyk:35"
   ]
  },
  {
   "id": "t9-140",
   "name": "Bipolära syndrom",
   "specialty": "Psykiatri",
   "sub": "Förstämningssjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Bipolära syndrom** kännetecknas av minst en episod av **hypomani eller mani** som förr eller senare växlar med depressiva perioder. Allvarligare tillstånd än unipolär depression, med **hög suicidrisk** och stark ärftlighet (hereditär faktor ca 50 %).",
    "klin": [
     "**Hypomani/mani**: ökad aktivitet, minskat sömnbehov (vid uttalad mani ingen sömn alls) och försämrat omdöme (t.ex. köpbeteende, sexuellt). Skillnaden mellan hypomani och mani är svårighetsgraden.",
     {
      "h": "Undertyper"
     },
     "**Bipolär typ 1**: minst en fullt utvecklad manisk episod följd av egentlig depression; debut ca 20 år; depressionsskov 6–12 mån, maniska skov < 3 mån.",
     "**Bipolär typ 2**: hypomani (> 3 dagar) som växlar med egentliga depressioner; debut ca 18 år; mer kroniskt förlopp, blandtillstånd mycket vanliga; söker nästan alltid i depressiv fas.",
     "Vid atypisk depression ska BP 2 misstänkas (72 % enligt kompendiet); typiskt är omvänd dygnsvariation (sämre på kvällen).",
     "**Cyklotymi**: ständiga humörfluktuationer, subdepressivt omväxlande med hypomani under > 2 år; 15–50 % övergår i BP 1/BP 2.",
     "**Manisk blandepisod**: kriterier för depression och mani uppfylls samtidigt (”gas och broms”). **Bipolärt syndrom UNS**: snabba växlingar och psykotiska symtom.",
     "Hos **äldre** är utåtagerande beteende, aggressivitet och konfusion vanligt; blandbild missbedöms ofta som ren depression med ångest."
    ],
    "diag": [
     "Ofta feldiagnostiserat – vanligaste feldiagnoserna är **recidiverande depressioner** och **ångestsyndrom**; ca hälften är obehandlade 5 år efter symtomdebut.",
     "Anamnes med **”livslinje”** för att se periodicitet; **anhöriganamnes** viktigt för att fånga hypomana symtom.",
     "Rutinlab, **suicidbedömning** och skattningsskala (t.ex. **MDQ**).",
     "Uteslut sekundär mani: droger/läkemedel (psykofarmaka, kortikosteroider, L-dopa, alkohol), neurologiskt (epilepsi, MS, efter stroke) och metabolt (hypertyreos, postoperativt, dialys)."
    ],
    "beh": [
     "Läkemedelsbehandling, vanligen **livslång**; KBT kan vara till nytta men räcker inte ensamt.",
     "Förstahandsval är **stämningsstabiliserare**: [[t9-142|litium]], antiepileptika (valproat) eller atypiska neuroleptika (quetiapin).",
     "**Litium** är förstahandsval både förebyggande och vid akut symtombehandling.",
     "Vid **BP 2** är **lamotrigin** det viktigaste medlet.",
     "Bensodiazepiner som tilläggsbehandling oavsett grundbehandling.",
     "Cyklotymi har god hjälp av stämningsstabiliserare.",
     "Äldre: samma riktlinjer; litium effektivt, ofta komplettering med atypiskt neuroleptikum; valproat ger fler biverkningar."
    ],
    "flagg": [
     "**Alla antidepressiva** kan inducera **”rapid cycling”** vid långtidsbehandling – fråga alltid efter hypomani innan depression behandlas.",
     "Hög suicidrisk – suicidbedömning ingår i handläggningen.",
     "Patienten söker oftast i depressiv fas; hypomani missas om inte anhöriga tillfrågas."
    ],
    "ddx": [
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Ingen hypomani/mani i anamnesen; vanligaste feldiagnosen vid BP."
     ],
     [
      "t9-147",
      "Ångestsyndrom",
      "Saknar episoder med förhöjt stämningsläge och minskat sömnbehov."
     ],
     [
      "t9-134",
      "Schizoaffektivt syndrom",
      "Minst 2 veckor med schizofrena A-symtom utan samtidig förstämning."
     ],
     [
      "t9-137",
      "Cykloida syndrom",
      "Periodiskt förlopp med psykotiska symtom/förvirring, ofta utlöst av sömnbrist; tillfrisknar utan restsymtom."
     ],
     [
      "t9-165",
      "Somatiska sjukdomar som kan ge psykiska symtom",
      "Mani kan orsakas av t.ex. hypertyreos, MS, epilepsi eller läkemedel."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 4",
     "Kompendium Psykiatri (T9), s. 19"
    ]
   },
   "card": {},
   "km": [
    "psyk:36",
    "psyk:38"
   ]
  },
  {
   "id": "t9-141",
   "name": "Behandlingsalternativ vid terapisvikt",
   "specialty": "Psykiatri",
   "sub": "Förstämningssjukdomar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Terapisvikt** innebär otillräcklig effekt av given behandling. Kompendiet beskriver stegvis **byte, doshöjning och kombination** av läkemedel samt **ECT** vid svåra tillstånd, och påminner om att leta efter bakomliggande orsaker som **alkohol**.",
    "klin": [
     {
      "h": "Depression"
     },
     "Starta med SSRI → **doshöj** → byt till **SNRI** → ev. tillägg av **mirtazapin** till kvällen (sövande).",
     "Vid svår depression kan medel som angriper **flera transmittorsystem** vara till nytta.",
     "**Melankoli** kan kräva intensifierad antidepressiv behandling, ibland **kombinationsbehandling**; äldre TCA (t.ex. **klomipramin**) kan ha en plats.",
     "Svår melankoli kan indicera [[t9-143|ECT]]; vid svår depression med melankoli ges antidepressiva och ECT.",
     {
      "h": "Ångest"
     },
     "Behandlingstrappa vid ångest: aktiv expektans → fysisk aktivitet → KBT → IPT → antidepressiva → kombination (KBT + SSRI) → **remiss till psykiatrin**.",
     "Vid GAD är venlafaxin (SNRI) ett bra alternativ; hos äldre kan låg dos pregabalin fungera när antidepressiva är otillräckliga.",
     {
      "h": "Psykos"
     },
     "Behandlingsrefraktär schizofreni (minst 2 preparat utan effekt): **klozapin**, start 12,5 mg/dag med upptrappning till 300 mg/dag under tre veckor.",
     "Cykloida syndrom: vid behandlingsresistens kan **ECT** vara ett alternativ."
    ],
    "diag": [
     "Vid **terapiresistent depression – tänk alkohol**.",
     "Värdera svårighetsgrad med **MADRS** inför och under behandling.",
     "Depressionsutredning: rutinlab, missbruksanamnes, kognitiv funktionsbedömning, ev. CT/MR."
    ],
    "hand": [
     "Djupa depressiva tillstånd hos äldre bör behandlas av specialist.",
     "Vid fortsatt svikt i primärvård: remiss till psykiatrin (sista steget i behandlingstrappan)."
    ],
    "flagg": [
     "Missa inte **alkoholöverkonsumtion** eller oupptäckt **bipolaritet** som orsak till utebliven effekt – antidepressiva kan inducera rapid cycling.",
     "Sätt inte in klomipramin (Anafranil) som första preparat."
    ],
    "ddx": [
     [
      "t9-143",
      "Elektrokonvulsiv behandling (ECT)",
      "Alternativ vid svår melankoli och behandlingsresistens."
     ],
     [
      "t9-155",
      "Alkoholbrukssyndrom",
      "Vanlig orsak till terapiresistent depression."
     ],
     [
      "t9-140",
      "Bipolära syndrom",
      "Kan döljas bakom recidiverande depressioner."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 3",
     "Kompendium Psykiatri (T9), s. 9–11",
     "Kompendium Psykiatri (T9), s. 19",
     "Kompendium Psykiatri (T9), s. 21"
    ]
   },
   "card": {},
   "km": [
    "psyk:37"
   ]
  },
  {
   "id": "t9-142",
   "name": "Litiumbehandling",
   "specialty": "Psykiatri",
   "sub": "Förstämningssjukdomar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Litium** är en **stämningsstabiliserare** och förstahandsval vid bipolär sjukdom, både **förebyggande** och vid **akut symtombehandling**.",
    "klin": [
     "Indikation: bipolära syndrom – förstahandsval bland stämningsstabiliserare (alternativ: valproat, quetiapin; vid BP 2 är lamotrigin viktigast).",
     "Behandlingen av bipolär sjukdom är vanligen **livslång**.",
     "Cyklotymi har god hjälp av stämningsstabiliserare.",
     "Hos **äldre** är stabiliserande behandling med litium effektiv; ofta behövs komplettering med atypiskt neuroleptikum."
    ],
    "hand": [
     "Bensodiazepiner kan ges som tilläggsbehandling oavsett grundbehandling.",
     "KBT kan vara nyttigt som komplement men räcker inte ensamt vid bipolär sjukdom."
    ],
    "flagg": [
     "Antidepressiva i långtidsbehandling vid bipolär sjukdom kan inducera **rapid cycling** – stämningsstabiliserare är grunden.",
     "Valproat (alternativet) ger fler biverkningar hos äldre."
    ],
    "ddx": [
     [
      "t9-140",
      "Bipolära syndrom",
      "Huvudindikationen för litium."
     ],
     [
      "t9-171",
      "Psykofarmakologisk behandling av äldre",
      "Litium effektivt även hos äldre."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 4",
     "Kompendium Psykiatri (T9), s. 19"
    ]
   },
   "card": {},
   "km": [
    "psyk:39",
    "psyk:38"
   ]
  },
  {
   "id": "t9-143",
   "name": "Elektrokonvulsiv behandling (ECT)",
   "specialty": "Psykiatri",
   "sub": "Förstämningssjukdomar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Elektrokonvulsiv behandling (ECT)** nämns i kompendiet som behandling vid **svår depression/melankoli** och vid vissa **psykotiska och behandlingsresistenta** tillstånd.",
    "klin": [
     {
      "h": "Indikationer enligt kompendiet"
     },
     "**Svår melankoli** kan indicera ECT.",
     "Svår egentlig depression: antidepressiva och/eller ECT – vid **melankoli** ges båda.",
     "Akuta kristillstånd med **psykotiska reaktioner**: ECT kan vara behjälpligt.",
     "**Cykloida syndrom** vid behandlingsresistens."
    ],
    "hand": [
     "Används när läkemedelsbehandling inte räcker eller vid svåra tillstånd – se [[t9-141|behandlingsalternativ vid terapisvikt]]."
    ],
    "flagg": [
     "Melankoli är en egen svårighetsgrad av depression som kan kräva intensifierad behandling – tänk på ECT vid svår melankoli."
    ],
    "ddx": [
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Svår melankolisk depression är huvudindikation."
     ],
     [
      "t9-137",
      "Cykloida syndrom",
      "ECT vid behandlingsresistens."
     ],
     [
      "t9-146",
      "Akuta kristillstånd",
      "ECT vid psykotiska reaktioner."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 3",
     "Kompendium Psykiatri (T9), s. 5",
     "Kompendium Psykiatri (T9), s. 11"
    ]
   },
   "card": {},
   "km": [
    "psyk:1",
    "psyk:39"
   ]
  },
  {
   "id": "t9-144",
   "name": "Transkraniell magnetstimulering (TMS)",
   "specialty": "Psykiatri",
   "sub": "Förstämningssjukdomar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-145",
   "name": "Psykoterapeutisk behandling vid förstämningssjukdom",
   "specialty": "Psykiatri",
   "sub": "Förstämningssjukdomar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Psykoterapeutisk behandling vid förstämningssjukdom styrs av **svårighetsgrad**: stödsamtal vid lindrig depression, **KBT eller IPT** vid medelsvår, medan läkemedel/ECT krävs vid svår depression och vid bipolär sjukdom.",
    "klin": [
     "**Lindrig egentlig depression**: stödsamtal och expektans.",
     "**Medelsvår depression**: psykoterapi (**KBT, IPT**) och/eller läkemedel.",
     "**Svår depression**: psykoterapi har ingen evidens – antidepressiva/ECT.",
     "**Bipolär sjukdom**: KBT kan vara nyttigt men räcker inte ensamt; läkemedel är grunden."
    ],
    "diag": [
     "Svårighetsgrad bedöms med **MADRS**, vilket styr val mellan psykoterapi och läkemedel.",
     "Antidepressiva bör sättas in om psykoterapi gett bristande resultat."
    ],
    "hand": [
     "Läkemedel förordas framför enbart samtal vid suicidtankar, melankoli, svår sömnstörning, anhedoni/hopplöshet eller oförmåga att klara skolarbete.",
     "I behandlingstrappan vid ångest/depression i primärvård: aktiv expektans → fysisk aktivitet → KBT → IPT → antidepressiva → kombination → remiss psykiatri."
    ],
    "flagg": [
     "Förlita dig inte på enbart psykoterapi vid svår depression eller vid suicidtankar.",
     "Vid bipolär sjukdom är KBT endast ett komplement."
    ],
    "ddx": [
     [
      "t9-172",
      "Vanligaste psykoterapiformerna",
      "Översikt över KBT, IPT m.fl."
     ],
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Svårighetsgrad styr valet av behandling."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 3",
     "Kompendium Psykiatri (T9), s. 4",
     "Kompendium Psykiatri (T9), s. 9"
    ]
   },
   "card": {},
   "km": [
    "psyk:39",
    "psyk:65"
   ]
  },
  {
   "id": "t9-146",
   "name": "Akuta kristillstånd",
   "specialty": "Psykiatri",
   "sub": "Ångest-, tvång-, trauma- och stressrelaterade syndrom",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Ett **akut kristillstånd** är en **naturlig reaktion** på en påfrestning, t.ex. relationskonflikter eller ångest-/depressionsproblematik. När reaktionen ger lidande eller funktionsnedsättning utöver det förväntade talar man om **maladaptiv stressreaktion** (anpassningsstörning).",
    "klin": [
     "Klinisk bild präglad av ångest med **nervositet, oro och rastlöshet**.",
     {
      "h": "Kriterier för maladaptiv stressreaktion"
     },
     "Emotionella symtom eller beteendeförändringar efter identifierbar stressfaktor, debut **inom 3 månader** efter påfrestningen.",
     "Kliniskt signifikant: påtagligt lidande (mer än förväntat) eller försämrad social/arbetsmässig funktion.",
     "Uppfyller inte kriterier för annan psykisk störning och är inte bara en förvärring av tidigare störning; motsvarar inte okomplicerad sorg.",
     "Varar **inte längre än 6 månader** efter att påfrestningen upphört."
    ],
    "beh": [
     "**Undvik anxiolytika**; sömntabletter kan vara nödvändigt en period.",
     "Sjukskrivning och stödterapi vid behov.",
     "Lättare stressrelaterade problem: livsstilsråd och **fysisk aktivitet på recept**.",
     "Vid behov psykolog/kurator och fokuserad gruppbehandling enligt KBT.",
     "Vid **psykotiska reaktioner** kan ECT vara behjälpligt."
    ],
    "hand": [
     "Ha ett **brett perspektiv** vid konsultationen; ta inte över ansvaret från patienten – fokus på aktuellt problem och patientens egen förmåga att ta sig förbi det.",
     "**Tala med, inte till** patienten; förskriven behandling är inte primär."
    ],
    "flagg": [
     "Risk med förhållningssättet: för höga förväntningar på patienten så att **behov av medicinsk behandling förbises**.",
     "Krisreaktionen är normal – medikalisera inte i onödan.",
     "Psykotiska reaktioner kräver aktiv behandling."
    ],
    "ddx": [
     [
      "t9-149",
      "Trauma- och stressrelaterade syndrom",
      "PTSD kräver exceptionellt hot/katastrof och ger återupplevande; kan debutera upp till 10 år senare."
     ],
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Fem av nio DSM-kriterier under minst 2 veckor; sorgereaktion utesluts."
     ],
     [
      "t9-114",
      "Krisbearbetning och stödsamtal",
      "Samtalsmetodik vid kris."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 5"
    ]
   },
   "card": {},
   "km": [
    "psyk:41"
   ]
  },
  {
   "id": "t9-147",
   "name": "Ångestsyndrom",
   "specialty": "Psykiatri",
   "sub": "Ångest-, tvång-, trauma- och stressrelaterade syndrom",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Ångestsyndrom** är tillstånd med **rädsla och ångest** av en intensitet som gör vanliga livsuppgifter svåra eller omöjliga. Livstidsrisken är ca **15 % för män och 30 % för kvinnor**; enligt **stress–sårbarhetsmodellen** syftar behandlingen till att minska både sårbarhet och stress.",
    "klin": [
     "Allmänna tecken: ängslan, panikångest, social ångest, **undvikande beteende**, uttröttbarhet, irritabilitet, koncentrationssvårigheter, störd sömn, muskelvärk, dålig matsmältning.",
     "Ökad förekomst av ulcus och hypertoni samt 2–4 gånger ökad kardiovaskulär mortalitet.",
     {
      "h": "Former"
     },
     "**Paniksyndrom**: debut 20–25 år (ovanligt efter 40); dramatiska attacker med yrsel, tryck över bröstet, dyspné.",
     "**Social fobi**: rädsla att granskas och göra bort sig; rodnad, darrning, svettning, hjärtklappning, urinträngningar.",
     "**Specifik fobi**: avgränsad rädsla, i övrigt inga besvär.",
     "**Generaliserat ångestsyndrom (GAD)**: överdriven oro flertalet dagar i **≥ 6 månader**, svår att kontrollera, med ≥ 3 av: rastlöshet, uttröttbarhet, koncentrationssvårigheter, irritabilitet, muskelspänning, sömnstörning (hos barn räcker ett).",
     "Grubblar patienten **framåt** – tänk GAD; grubblar bakåt – tänk depressiv ångest."
    ],
    "diag": [
     "Uteslut **drogabstinens** (vanligaste tillståndet som simulerar panikångest) och **alkoholöverkonsumtion** (vanlig orsak till GAD).",
     "GAD får inte bero på substans eller somatisk sjukdom och ska inte vara bundet till förstämningssyndrom eller psykos."
    ],
    "beh": [
     "**Behandlingstrappa**: aktiv expektans 10–14 dagar → fysisk aktivitet → KBT → IPT → antidepressiva → kombination KBT + SSRI → remiss psykiatri.",
     "**Paniksyndrom/agorafobi**: KBT (exponering, kognitiva interventioner, beteendeexperiment) + **SSRI**, som verkar synergistiskt.",
     "**Social fobi**: KBT och gruppterapi i första hand; inför avgränsad situation **propranolol 20–40 mg** vid behov, eller bensodiazepin (alprazolam/diazepam) vid behov.",
     "**Specifik fobi**: systematisk exponering, ofta få sessioner; SSRI har ingen plats.",
     "**GAD**: SSRI (lägre startdos än vid depression) + KBT (avslappning, kognitiv omstrukturering); venlafaxin är ett bra alternativ; hälsosamma vanor."
    ],
    "hand": [
     "Första kontakt med ångest bör gärna ske på **vårdcentral**.",
     "SSRI startas med låg dos och gradvis ökning – initial ångestförsämring hanteras tillfälligt med bensodiazepin (Stesolid, Sobril) eller antihistamin (Atarax, Lergigan – inte till äldre)."
    ],
    "flagg": [
     "Ångestsyndrom är ofta startpunkt för **missbruk** av alkohol/lugnande medel (paniksyndrom: ca 30 % missbruk).",
     "Paniksyndrom ger lika många suicidförsök som depression – gör suicidbedömning.",
     "Nydebuterad ångest hos äldre talar starkt för **depression**."
    ],
    "ddx": [
     [
      "t9-148",
      "Tvångssyndrom",
      "Tvångstankar och ritualer som tar > 1 h/dag."
     ],
     [
      "t9-149",
      "Trauma- och stressrelaterade syndrom",
      "Utlöst av trauma eller identifierbar stressor."
     ],
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Vanlig komplikation till GAD; båda behandlas med SSRI."
     ],
     [
      "t9-157",
      "Alkoholabstinens",
      "Drog-/alkoholabstinens kan simulera panikångest."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 5–9"
    ]
   },
   "card": {},
   "km": [
    "psyk:42"
   ]
  },
  {
   "id": "t9-148",
   "name": "Tvångssyndrom",
   "specialty": "Psykiatri",
   "sub": "Ångest-, tvång-, trauma- och stressrelaterade syndrom",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Tvångssyndrom** innebär **tvångstankar och/eller tvångshandlingar** som tar **> 1 timme per dag** eller orsakar lidande/funktionsnedsättning. Förekommer hos ca **2 %** av befolkningen.",
    "klin": [
     "**Tvångstankar** väcker ångest, olust eller oro.",
     "**Tvångshandlingar** och undvikande beteende utförs för att minska ångest och oro.",
     "Nästan alla patienter har både tvångstankar och ritualer.",
     "Typer: **rengöringstvång, kontrolltvång**, religiösa/sexuella tvångstankar, **upprepningstvång**.",
     "Symtomens innehåll kan variera över åren.",
     "Vanligast debut vid ca **15 års ålder**; sällan debut efter 35 år."
    ],
    "diag": [
     "Diagnosen bygger på tidsåtgång (> 1 h/dag) eller lidande/funktionsnedsättning.",
     "Bristande sjukdomsinsikt kan förekomma."
    ],
    "beh": [
     "Framför allt **KBT med exponering**.",
     "Svårare tillstånd kan kompletteras med **SSRI**, där **relativt höga doser** krävs."
    ],
    "flagg": [
     "Debut efter 35 år är ovanligt.",
     "Bristande insikt kan göra att tillståndet döljs.",
     "Vid autism kan SSRI ges för tvångssymtom, men tänk på ändrad läkemedelskänslighet."
    ],
    "ddx": [
     [
      "t9-147",
      "Ångestsyndrom",
      "Ångest utan tvångstankar/ritualer."
     ],
     [
      "t9-132",
      "Autism hos vuxna",
      "Repetitiva och stereotypa beteenden ingår i autism."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 5",
     "Kompendium Psykiatri (T9), s. 8",
     "Kompendium Psykiatri (T9), s. 14"
    ]
   },
   "card": {},
   "km": [
    "psyk:42"
   ]
  },
  {
   "id": "t9-149",
   "name": "Trauma- och stressrelaterade syndrom",
   "specialty": "Psykiatri",
   "sub": "Ångest-, tvång-, trauma- och stressrelaterade syndrom",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Trauma- och stressrelaterade syndrom omfattar **posttraumatiskt stressyndrom (PTSD)**, som följer på exceptionellt hot eller katastrof, och **maladaptiva stressreaktioner** (anpassningsstörning) efter identifierbara påfrestningar.",
    "klin": [
     {
      "h": "PTSD"
     },
     "Utlöses av trauma – exceptionellt hot eller katastrof, att uppleva/bevittna död, skada eller hot.",
     "Latens mellan trauma och PTSD kan vara **upp till 10 år**.",
     "Symtom: rädsla, vanmakt, minnesluckor, störd sömn, **återupplevande**, överkänslighet, vaksamhet, lättskrämdhet, irritabilitet, likgiltighet, alienation.",
     "Indelning: **undvikande, återupplevande, inre anspänning**.",
     "Riskfaktorer: bristande familjestöd, dåligt socialt nätverk, låg/hög ålder, kön, låg begåvningsgrad.",
     {
      "h": "Maladaptiv stressreaktion"
     },
     "Emotionella/beteendemässiga symtom inom **3 månader** efter stressor, med lidande utöver det förväntade eller funktionsnedsättning; varar högst **6 månader** efter att påfrestningen upphört; inte okomplicerad sorg."
    ],
    "beh": [
     "**PTSD**: KBT med inriktning på **emotionell bearbetning**; farmakologiskt **SSRI**.",
     "**Stressreaktion**: livsstilsråd, **fysisk aktivitet på recept**; vid behov psykolog/kurator, KBT i grupp och sjukskrivning."
    ],
    "hand": [
     "Primära, okomplicerade fall handläggs gärna först i primärvård; följ behandlingstrappan och remittera vid otillräcklig effekt.",
     "Vid akut kris: undvik anxiolytika, sömnmedel kan behövas en period – se [[t9-146|akuta kristillstånd]]."
    ],
    "flagg": [
     "PTSD kan debutera långt efter traumat – fråga efter tidigare trauman.",
     "Maladaptiv stressreaktion ska inte diagnostiseras om kriterier för annan psykisk störning är uppfyllda.",
     "SSRI kan initialt öka ångesten – starta lågt."
    ],
    "ddx": [
     [
      "t9-146",
      "Akuta kristillstånd",
      "Naturlig reaktion på påfrestning utan påtagligt avvikande lidande."
     ],
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "PTSD och stress är differentialdiagnoser till depression."
     ],
     [
      "t9-147",
      "Ångestsyndrom",
      "Ångest utan koppling till trauma eller stressor."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 2",
     "Kompendium Psykiatri (T9), s. 5",
     "Kompendium Psykiatri (T9), s. 9"
    ]
   },
   "card": {},
   "km": [
    "psyk:42"
   ]
  },
  {
   "id": "t9-150",
   "name": "Komplicerade ångesttillstånd",
   "specialty": "Psykiatri",
   "sub": "Ångest-, tvång-, trauma- och stressrelaterade syndrom",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Med komplicerade ångesttillstånd avses här ångest som kompliceras av **depression, missbruk, suicidalitet eller somatisk sjukdom**, eller som inte svarar på primärvårdens behandlingstrappa. Kompendiet beskriver dessa komplikationer men inte begreppet som sådant.",
    "klin": [
     "Komplikationer till **paniksyndrom**: missbruk (ca 30 %), social isolering/arbetsoförmåga, suicid (lika många försök som vid depression men färre fullbordade), depression, rädsla för kroppslig sjukdom.",
     "**GAD** kompliceras ofta av depression och kan utvecklas som komplikation till allvarlig fysisk ohälsa; orsakas ofta av alkoholöverkonsumtion (även självmedicinering).",
     "Ångeststörningar är ofta startpunkt för **missbruk** av alkohol/lugnande medel.",
     "Hos äldre är ångest vanligt som komorbiditet vid depression."
    ],
    "diag": [
     "Uteslut sekundär ångest: alkohol, drogabstinens, depression samt hos äldre konfusion, mani eller demens."
    ],
    "beh": [
     "Kombinationsbehandling **KBT + SSRI**; SSRI fungerar både vid ångest och depression.",
     "**Venlafaxin** (SNRI) är ett bra alternativ vid GAD.",
     "Hos äldre: antidepressiva; bensodiazepiner bara tillfälligt; låg dos **pregabalin** när antidepressiva inte räcker."
    ],
    "hand": [
     "Sista steget i behandlingstrappan är **remiss till psykiatrin**.",
     "Vid samtidigt missbruk: se [[t9-155|alkoholbrukssyndrom]] och [[t9-160|nedtrappning vid bensodiazepinbrukssyndrom]]."
    ],
    "flagg": [
     "Gör suicidbedömning vid paniksyndrom och samtidig depression.",
     "Förskriv bensodiazepiner restriktivt – risk för beroende."
    ],
    "ddx": [
     [
      "t9-147",
      "Ångestsyndrom",
      "Primära okomplicerade former."
     ],
     [
      "t9-155",
      "Alkoholbrukssyndrom",
      "Orsak eller komplikation till ångest."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 6–9",
     "Kompendium Psykiatri (T9), s. 19"
    ]
   },
   "card": {},
   "km": [
    "psyk:43"
   ]
  },
  {
   "id": "t9-151",
   "name": "Kroppssyndrom och relaterade syndrom",
   "specialty": "Psykiatri",
   "sub": "Kroppssyndrom och relaterade syndrom",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Somatoforma syndrom** (kroppssyndrom) innebär att man reagerar på påfrestningar med **kroppsliga besvär (somatisering)**, särskilt vid psykosocial stress och stora livsförändringar. Tillståndet är vanligt och kan bli kroniskt.",
    "klin": [
     "Symtomen stämmer sällan med någon identifierbar sjukdomsbild.",
     "Vanliga **stressymtom**: spänningshuvudvärk, klumpkänsla i halsen, tryck över bröstet, pulsstegring, snabb andning, sömnstörning.",
     "Somatisering ingår också i den kliniska bilden vid depression."
    ],
    "diag": [
     {
      "h": "Anamnestiska tecken"
     },
     "Kaotisk kommunikation om sjukligheten – blandning av **triviala och hypotetiskt allvarliga** symtom.",
     "Mycket svårt att få ordning på sjukdomsberättelsen.",
     "Stark **ovilja att ta till sig annan förklaring** än kroppslig sjukdom."
    ],
    "beh": [
     "Hygglig evidens för **KBT**.",
     "Samsjuklighet med depression och ångestsyndrom behandlas med **SSRI**."
    ],
    "hand": [
     "Viktigt att fånga upp **kronisk somatisering** (ofta ”problempatienter”) tidigt."
    ],
    "flagg": [
     "Missa inte samtidig depression eller ångest som kan behandlas.",
     "Tillståndet kan bli kroniskt vid fortsatt psykosocial stress."
    ],
    "ddx": [
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Somatisering, magbesvär och trötthet är vanliga depressionssymtom."
     ],
     [
      "t9-147",
      "Ångestsyndrom",
      "GAD-patienter söker ofta för fysiska besvär."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 2",
     "Kompendium Psykiatri (T9), s. 7",
     "Kompendium Psykiatri (T9), s. 9"
    ]
   },
   "card": {},
   "km": [
    "psyk:45"
   ]
  },
  {
   "id": "t9-152",
   "name": "Lättare ätstörningar",
   "specialty": "Psykiatri",
   "sub": "Ätstörningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Bland ätstörningarna beskriver kompendiet **bulimia nervosa** – återkommande **hetsätning** med **kompensatoriskt beteende** – och **ätstörning UNS**. Patienten är medveten om problemet men försöker dölja det.",
    "klin": [
     "Förlopp: upplevelse av övervikt → intensiva hungerkänslor → kontrollförlust → hetsätning.",
     "Kompensation: kräkning, laxermedel, lavemang, fasta, överdriven motion.",
     "Samtidig **depression och missbruk** är vanligt.",
     "Sekundär bulimi kan uppkomma efter viktnormalisering vid anorexi och kvarstå länge."
    ],
    "diag": [
     "Upprepade kräkningar ger **frätskador på emaljen**, esofagit och **alkalos med hypokalemi och hypokloremi** – kontrollera elektrolyter.",
     "Vanligaste differentialdiagnosen till anorexi är ospecifik ätstörning."
    ],
    "beh": [
     "Först stoppa hetsätning och kompensatoriska beteenden.",
     "Korrigera medicinska komplikationer, ev. **remiss till tandläkare**.",
     "Terapi: **familjeterapi/KBT**.",
     "**SSRI** som komplement med effekt på hetsätandet.",
     "**Ätstörning UNS**: KBT."
    ],
    "flagg": [
     "Hypokalemi vid upprepade kräkningar.",
     "Patienten döljer ofta beteendet – fråga aktivt.",
     "Var uppmärksam på samtidig depression och missbruk."
    ],
    "ddx": [
     [
      "t9-153",
      "Svårare ätstörningar",
      "Anorexia nervosa: viktnedgång, saknar sjukdomsinsikt, amenorré."
     ],
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Vanlig samsjuklighet."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 12"
    ]
   },
   "card": {},
   "km": [
    "psyk:47"
   ]
  },
  {
   "id": "t9-153",
   "name": "Svårare ätstörningar",
   "specialty": "Psykiatri",
   "sub": "Ätstörningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Anorexia nervosa** är den svåra ätstörning som kompendiet beskriver: bantning från en **upplevelse av övervikt**, ofta med fysisk överaktivitet, och **avsaknad av sjukdomsinsikt**. Debut vanligen vid **12–20 år**.",
    "klin": [
     "Överdriven fysisk aktivitet kan vara första tecknet; att motstå hunger upplevs initialt positivt (svälteufori).",
     "Mat- och kalorifixering, ibland framkallade kräkningar.",
     "Saknar både **sjukdomsinsikt och sjukdomskänsla**, åtminstone initialt.",
     "Tecken: utmärglad, tunt hår, torr hud, kalla underben, sköra naglar, senare cyanotiska händer och fötter.",
     "**Amenorré** och påverkan på LH/FSH, anemi, **bradykardi och hypotoni**, buksmärtor och förstoppning, koncentrations- och minnesstörning.",
     "Utvecklar ofta bulimiskt beteende på sikt."
    ],
    "diag": [
     "Huvudsakligen en enkel diagnos; förekommer också som samsjuklighet vid depression.",
     "Vanligaste differentialdiagnos: ospecifik ätstörning."
    ],
    "beh": [
     "Först och främst **skapa kontakt och allians**.",
     "Första behandlingsmål: **viktuppgång (BMI > 19)** och att menstruationen återkommer.",
     "Därefter normalt ätmönster, eliminera somatiska komplikationer och ändra dysfunktionella tankemönster.",
     "Konkret stöd, samtalsbehandling, **familjeterapi**.",
     "**Läkemedel har ingen plats** vid anorexi, om inte samtidig depression/ångest."
    ],
    "hand": [
     "Bäst prognos vid tidig debut och lindrigare former."
    ],
    "flagg": [
     "Bradykardi, hypotoni och anemi är tecken på somatisk påverkan.",
     "Bristande insikt försvårar behandlingen – alliansen är avgörande.",
     "Sekundär bulimi kan uppkomma efter viktnormalisering."
    ],
    "ddx": [
     [
      "t9-152",
      "Lättare ätstörningar",
      "Bulimi: normal vikt, hetsätning, patienten medveten om problemet."
     ],
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Anorexi förekommer som samsjuklighet vid depression."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 12"
    ]
   },
   "card": {},
   "km": [
    "psyk:48"
   ]
  },
  {
   "id": "t9-154",
   "name": "Vanliga sömnstörningar",
   "specialty": "Psykiatri",
   "sub": "Sömnstörningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Insomni** – upplevelse av otillräcklig sömntid eller låg sömnkvalitet som påverkar välbefinnande och funktion – dominerar bland sömnstörningarna. Punktprevalensen är **10–15 %**; vanligare hos kvinnor och med stigande ålder, och **depression är den vanligaste orsaken till långvariga sömnproblem**.",
    "klin": [
     "Insomningsbesvär (> 30 min), nattliga uppvaknanden (> 45 min eller > 5 ggr/natt), för tidigt uppvaknande eller kombination.",
     "Yngre: främst insomningsproblem; äldre: täta uppvaknanden, svårt att somna om, tidigt uppvaknande.",
     "Insomningsstörning → oftare psykologiska besvär, dålig sömnhygien, sömnstörare; avbruten sömn → oftare somatiska orsaker.",
     "Dyssomnier: insomni, hypersomni, dygnsrytmstörningar (förskjutning, jetlag, skiftarbete).",
     "Orsaker: psykiska besvär, smärta, hjärt-kärlsjukdom, obstruktiv lungsjukdom, nokturi, Parkinson, RLS, GERD; läkemedel: CNS-stimulantia, SSRI/SNRI, blodtryckssänkare.",
     "**Sömnapnésyndrom** är vanligaste orsaken till hypersomni; **narkolepsi** ger insomningsattacker, kataplexi, sömnparalys och hypnagoga hallucinationer."
    ],
    "diag": [
     "**Kartlägg**: typ av sömnstörning, inverkan på dagfunktion, frekvens, varaktighet, sömnhygien, underliggande sjukdom/läkemedel/missbruk.",
     "Misstänkt sömnapné: polysomnografi/polygrafi; misstänkt narkolepsi: MSLT."
    ],
    "beh": [
     "Först utred och åtgärda **sömnhygien** och sömnstörare.",
     "Icke-farmakologiskt: **KBT**, information om sömnhygien, **sömnrestriktion**.",
     "Sömnhygien: regelbunden dygnsrytm, undvik dagsömn, varva ner, undvik koffein/alkohol, fysisk aktivitet och dagsljus, mörkt/tyst/svalt sovrum.",
     "Beroendeframkallande: **zolpidem** (insomning, undvik till äldre), **zopiklon** (lämpligare till äldre), flunitrazepam/nitrazepam (endast slutenvård).",
     "Icke beroendeframkallande: propiomazin (Propavan; lång halveringstid, hang-over, kan kombineras med insomningstablett), melatonin (Circadin; återupprättar dygnsrytm), prometazin (Lergigan; lång insättning och halveringstid, hang-over).",
     "Sömnfasförskjutning: melatonin/melatoninagonist."
    ],
    "hand": [
     "Akut situationsbetingad insomni: **kortvarig, tidsbegränsad** läkemedelsbehandling för insomning.",
     "Princip: **lägsta möjliga dos under kortast möjliga tid**; ge äldre **halv startdos**."
    ],
    "flagg": [
     "Leta efter **depression** bakom långvarig insomni.",
     "Hypnotika är beroendeframkallande – tidsbegränsa.",
     "Obehandlat obstruktivt sömnapnésyndrom ger 2–7 gånger ökad risk för trafikolycka."
    ],
    "ddx": [
     [
      "t9-348",
      "Sömnapnésyndrom och snarkning",
      "Snarkning, apnéer och dagtrötthet."
     ],
     [
      "t9-057",
      "Narkolepsi",
      "Insomningsattacker och kataplexi."
     ],
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Vanligaste orsaken till långvarig sömnstörning."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 15–16",
     "Kompendium Neurologi (T9), s. 22",
     "Kompendium ÖNH (T9), s. 31"
    ]
   },
   "card": {},
   "km": [
    "psyk:49"
   ]
  },
  {
   "id": "t9-155",
   "name": "Alkoholbrukssyndrom",
   "specialty": "Psykiatri",
   "sub": "Substanssyndrom",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Alkoholbrukssyndrom (beroende)** föreligger när minst **tre av sju** beroendekriterier uppfylls under samma 12-månadersperiod. **10–15 % av vuxna män och 5–10 % av kvinnor** har allvarliga alkoholproblem.",
    "klin": [
     {
      "h": "Beroendekriterier (≥ 3 inom 12 mån)"
     },
     "Toleransutveckling; abstinens.",
     "Kontrollförlust (större mängd/längre tid än avsett); varaktig önskan eller misslyckade försök att minska.",
     "Mycket tid går åt till att skaffa, konsumera och återhämta sig; viktiga aktiviteter ges upp.",
     "Fortsatt bruk trots fysiska/psykiska skador.",
     "Psykiskt beroende = drift att återuppleva belöning; fysiskt beroende = tolerans och abstinens.",
     "Ökad risk för suicid och samsjuklighet (bipolära syndrom, schizofreni, paniksyndrom, tvång)."
    ],
    "diag": [
     "**CAGE** (senaste halvåret): Cut down, Annoyance, Guilt, Eye-opener – **≥ 2 ja** indikerar vanligen missbruk.",
     "Mät konsumtionen i **standardglas** – se [[t9-156|riskbruk av alkohol]].",
     "Vid **terapiresistent depression – tänk alkohol**."
    ],
    "beh": [
     "**Disulfiram (Antabus)**: hämmar aldehyddehydrogenas → illamående, rodnad, huvudvärk, palpitationer, BT-fall vid alkoholintag. Absoluta KI: graviditet, demens, svår hjärt-kärlsjukdom, arytmirisk; relativa: diabetes, hypertyreos, psykos, epilepsi, allvarlig leverskada.",
     "**Naltrexon (Revia)**: opioidantagonist, ingen eufori vid alkoholintag; ca 6 mån + KBT; KI grav leverskada.",
     "**Akamprosat (Campral)**: verkar via NMDA-receptorn, minskar sug och återfallsrisk; 1–2 år + psykosocial behandling.",
     "Avgiftning: se [[t9-157|alkoholabstinens]]."
    ],
    "hand": [
     "Alkoholberoende är hinder för **körkort** – se [[t9-125|anmälningsskyldighet]].",
     "Vid behov tvångsvård enligt [[t9-122|LVM]]."
    ],
    "flagg": [
     "**Ensamstående man i övre medelåldern med alkoholproblem** har störst suicidrisk.",
     "**Wernicke–Korsakoff**: diplopi/ögonmuskelpares, nystagmus, ataxi, konfusion – ge **tiamin före glukos**.",
     "Patienten kan dricka under disulfiram om antihistamin tas samtidigt."
    ],
    "ddx": [
     [
      "t9-156",
      "Riskbruk av alkohol",
      "Hög konsumtion utan att beroendekriterierna uppfylls."
     ],
     [
      "t9-234",
      "Alkoholskador",
      "Neurologiska följder av långvarigt bruk."
     ],
     [
      "t9-139",
      "Unipolära förstämningssyndrom",
      "Alkohol kan orsaka eller vidmakthålla depression."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 21–22",
     "Kompendium Psykiatri (T9), s. 25–26"
    ]
   },
   "card": {},
   "km": [
    "psyk:50"
   ]
  },
  {
   "id": "t9-156",
   "name": "Riskbruk av alkohol",
   "specialty": "Psykiatri",
   "sub": "Substanssyndrom",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Riskbruk** innebär en alkoholkonsumtion som ökar risken för skada utan att beroendekriterierna behöver vara uppfyllda. Kompendiet anger riskkonsumtion som **210 g alkohol/vecka för män** (ca 3 flaskor vin) och **140 g/vecka för kvinnor** (ca 2 flaskor vin); **berusningsdrickande** är ett riskbeteende.",
    "klin": [
     {
      "h": "Ett standardglas motsvarar"
     },
     "45 cl folköl, 33 cl starköl, 16 cl vin, 8 cl starkvin eller 4 cl sprit.",
     {
      "tbl": [
       [
        "Risknivå (standardglas/vecka)",
        "Män",
        "Kvinnor"
       ],
       [
        "Låg",
        "0–10",
        "0–7"
       ],
       [
        "Ökad",
        "11–18",
        "8–13"
       ],
       [
        "Skadlig",
        "≥ 19",
        "≥ 14"
       ]
      ]
     },
     "Bingedrickning är ett riskbeteende även vid låg veckokonsumtion."
    ],
    "diag": [
     "Fråga om konsumtion i standardglas per vecka och berusningstillfällen.",
     "**CAGE**: ≥ 2 jakande svar indikerar vanligen alkoholmissbruk.",
     "Tänk på alkohol vid terapiresistent depression, ångest (särskilt GAD) och insomni."
    ],
    "hand": [
     "Bedöm om kriterierna för [[t9-155|alkoholbrukssyndrom]] är uppfyllda.",
     "Hos personer med ångest används alkohol ofta som självmedicinering."
    ],
    "flagg": [
     "Ca **30 %** av sängbeläggningen beror enligt kompendiet på alkoholrelaterad sjukdom.",
     "Alkohol ökar suicidrisken – särskilt hos ensamstående medelålders män."
    ],
    "ddx": [
     [
      "t9-155",
      "Alkoholbrukssyndrom",
      "≥ 3 beroendekriterier inom 12 månader."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 7",
     "Kompendium Psykiatri (T9), s. 21–22"
    ]
   },
   "card": {},
   "km": [
    "psyk:50"
   ]
  },
  {
   "id": "t9-157",
   "name": "Alkoholabstinens",
   "specialty": "Psykiatri",
   "sub": "Substanssyndrom",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Alkoholabstinens** uppstår när ett intensivt alkoholbruk upphör eller minskar, med minst två abstinenssymtom inom timmar till dygn. Den kan fortskrida via **predelirium** och **abstinenshallucinos** till **delirium tremens**, med 15–30 % letalitet obehandlat.",
    "klin": [
     "Abstinens börjar när bakfyllan sätter in, förvärras och avtar sedan; varar upp till 7 dagar.",
     "Symtom (≥ 2): autonom hyperaktivitet (svettning, puls > 100), handtremor, sömnsvårigheter, illamående/kräkning, övergående hallucinationer/illusioner, psykomotorisk agitation, ångest, grand mal-anfall.",
     "**Predelirium**: tremor, svettning, takykardi, ångest, sömnstörning.",
     "**Abstinenshallucinos**: som predelirium + hallucinationer, främst syn; patienten är klar och orienterad.",
     "**Delirium tremens**: debut **1–4 dygn** efter upphört intag (0 promille); kraftigare tremor, högre puls och BT, **desorientering**; ofta föregånget av mardrömmar; **kindling** – kommer snabbare nästa gång."
    ],
    "diag": [
     {
      "h": "Inläggningskriterier"
     },
     "Promille > 3; tidigare/pågående kramper, hallucinos eller delirium; puls > 115.",
     "Komplicerad blandintox; långvarig daglig konsumtion > 75 cl/dygn; andra sjukdomar (pneumoni, pankreatit); somatiska/psykiatriska komplikationer."
    ],
    "beh": [
     "**Lindrig abstinens** (öppenvård): B-vitamin (Oralovite), disulfiram 400 mg × 1 i 3 dagar sedan var 3:e dag, propiomazin (Propavan) till natten, alimemazin (Theralen) vb, ev. karbamazepin.",
     "**Uttalad abstinens**: inläggning, kontroll av puls, BT, temp; tiamininjektioner (Betabion); oxazepam (Sobril) med nedtrappning; karbamazepin vid tidigare epilepsi/riskfaktorer.",
     "**Krampprofylax**: karbamazepin (Tegretol) 200 mg × 3 vid tidigare anamnes eller långvarigt/stort bruk.",
     "**Delirium tremens**: inläggning; karbamazepin mixtur 20 ml på akuten sedan 200 mg × 2 i 7 dygn; B-vitamin iv; högdos oxazepam med nedtrappning alt. **diazepamschema** (10 mg × 4 dag 1, sedan successiv halvering); vätske- och elektrolytkorrektion; ljust rum med personal nära.",
     "Klometiazol (Heminevrin) endast vid delirium – risk för BT-fall; kompendiet noterar osäkerhet om det fortfarande används.",
     "Behandlingen pågår totalt **4–6 dagar**; god sömn de första dagarna viktigast."
    ],
    "hand": [
     "Vid uppenbar risk för kramper eller delirium: hänvisa till **medicinklinik**; psykiatrisk indikation → inläggning på psykiatrin.",
     "Vid 2–3 veckors anamnes på hög konsumtion: tiamin (Betabion 50 mg/ml) 2 ml im i 5 dagar."
    ],
    "flagg": [
     "**Ge aldrig glukos till medvetslös missbrukare innan B-vitamin (tiamin)** – risk för Wernicke.",
     "Allvarlig prognos vid dehydrering, hypertermi, cirkulationssvikt; svåra fall får hjärnstamspåverkan.",
     "Tidigare delirium tremens → snabbare och svårare nästa gång (kindling)."
    ],
    "ddx": [
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Delirium av annan somatisk orsak; delirium tremens är en viktig differentialdiagnos."
     ],
     [
      "t9-160",
      "Nedtrappning vid benzodiazepinbrukssyndrom",
      "Bensodiazepinabstinens ger liknande symtom."
     ],
     [
      "",
      "Alkoholhallucinos",
      "Främst hörselhallucinationer, till skillnad från synhallucinationer vid abstinenshallucinos."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 21–26",
     "Kompendium Neurologi (T9), s. 35"
    ]
   },
   "card": {},
   "km": [
    "psyk:51"
   ],
   "prog": [
    [
     "t6",
     "Termin 6",
     "t6-381",
     "Alkoholabstinens"
    ]
   ]
  },
  {
   "id": "t9-158",
   "name": "Opioidbrukssyndrom",
   "specialty": "Psykiatri",
   "sub": "Substanssyndrom",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Opioidbrukssyndrom** är beroende av opiater (naturliga, t.ex. morfin, kodein) eller syntetiska opioider (t.ex. heroin, metadon, fentanyl), med **mycket stor och snabb toleransutveckling** och korstolerans. Diagnos ställs med de generella beroendekriterierna (≥ 3 inom 12 mån).",
    "klin": [
     "**Rus**: eufori och välbehag som övergår i lugn, dåsighet, smärtfrihet; ”kick” vid injektion.",
     "Fysiska effekter (parasympatiska): **mios**, torr varm rosig hy, klåda, obstipation, hostdämpning.",
     "Inga långtidseffekter på inre organ, men obalans i endorfinsystemet.",
     "**Abstinens** – motsatt ruset (sympatisk): illamående, diarré, snuva, tremor, ångest, dysfori, rastlöshet, **mydriasis**, puls- och BT-ökning."
    ],
    "diag": [
     "Beroendekriterier: tolerans, abstinens, kontrollförlust, misslyckade försök att minska, tidsåtgång, uppgivna aktiviteter, fortsatt bruk trots skador.",
     "Mios talar för påverkan, mydriasis för abstinens."
    ],
    "beh": [
     "**Avgiftning** bör ske på sjukhus – se [[t9-159|nedtrappning vid opioidbrukssyndrom]].",
     "**Metadonunderhåll**: peroral daglig dos, lång halveringstid, tar bort craving; kan överdoseras; oftast livslång.",
     "**Buprenorfin (Subutex)**: alternativ med högre säkerhet och färre biverkningar men räcker inte alltid; risk för dödsfall vid injektion."
    ],
    "hand": [
     {
      "h": "Överdos – livshotande"
     },
     "Fria luftvägar, andningsassistans, ev. hjärtkompressioner.",
     "**Naloxon (Narcanti) 0,4 mg (1 ml) iv**, kan upprepas 1–3 ggr inom en halvtimme; ge samtidigt lika stor dos im.",
     "Ev. vård enligt LVM, LVU eller LPT."
    ],
    "flagg": [
     "Naloxon har **kortare halveringstid än heroin** – patienten måste **övervakas** efter given antidot.",
     "Undvik bensodiazepiner vid opiatabstinens."
    ],
    "ddx": [
     [
      "t9-161",
      "Övriga psykoaktiva substanser",
      "T.ex. GHB ger medvetslöshet vid överdos men svarar inte på naloxon."
     ],
     [
      "t9-160",
      "Nedtrappning vid benzodiazepinbrukssyndrom",
      "Bensodiazepinabstinens kan ge kramper."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 21",
     "Kompendium Psykiatri (T9), s. 26–27"
    ]
   },
   "card": {},
   "km": [
    "psyk:52",
    "psyk:53"
   ]
  },
  {
   "id": "t9-159",
   "name": "Nedtrappning vid lindrigt opioidbrukssyndrom",
   "specialty": "Psykiatri",
   "sub": "Substanssyndrom",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Avgiftning vid opioidbrukssyndrom **bör ske på sjukhus**. Principen är att blockera opiatreceptorerna med ett **korstolerant, mindre euforiserande** preparat eller att dämpa det **noradrenerga** abstinenstillståndet, kompletterat med symtomlindring.",
    "klin": [
     {
      "h": "1. Korstolerant opioid"
     },
     "**Buprenorfin (Subutex)**: partiell agonist, sederande, få biverkningar, skonsam avgiftning; vid svår abstinens.",
     "**Metadon**: full agonist; vid mycket svår abstinens, till gravida eller kraftigt nedgångna.",
     {
      "h": "2. Dämpa noradrenerg abstinens"
     },
     "**Klonidin (Catapresan)**: alfa-adrenerg agonist, inget beroende och ingen sedering; används vid **lindrigare abstinens**.",
     {
      "h": "3. Symtomlindring"
     },
     "Antiemetika vid kräkning, loperamid (Imodium) vid diarré.",
     "Sedativa/hypnotika vid behov (alimemazin/Theralen eller propiomazin/Propavan)."
    ],
    "diag": [
     "Bedöm abstinensens svårighetsgrad: illamående, diarré, snuva, tremor, ångest, rastlöshet, mydriasis, puls- och BT-ökning."
    ],
    "hand": [
     "Vid behov av fortsatt behandling: metadon- eller buprenorfinunderhåll – se [[t9-158|opioidbrukssyndrom]]."
    ],
    "flagg": [
     "Klonidin ger risk för **BT-fall – ge testdos**.",
     "**Undvik bensodiazepiner** vid opiatabstinens.",
     "Avgiftning **bör ske på sjukhus**; överdos är livshotande – se [[t9-158|opioidbrukssyndrom]]."
    ],
    "ddx": [
     [
      "t9-158",
      "Opioidbrukssyndrom",
      "Diagnos, rus och överdoshantering."
     ],
     [
      "t9-160",
      "Nedtrappning vid benzodiazepinbrukssyndrom",
      "Långsam nedtrappning under ca 1 månad."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 26–27"
    ]
   },
   "card": {},
   "km": [
    "psyk:53"
   ]
  },
  {
   "id": "t9-160",
   "name": "Nedtrappning vid benzodiazepinbrukssyndrom",
   "specialty": "Psykiatri",
   "sub": "Substanssyndrom",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid **bensodiazepinbrukssyndrom** trappas bensodiazepinerna ned **gradvis under ca 1 månad** med ett preparat med **lång halveringstid**, så att den uppkomna toleransen hinner reverseras. Störst beroendepotential har preparat med snabbt insättande effekt och hög bindningsaffinitet (flunitrazepam, lorazepam, diazepam).",
    "klin": [
     "Riskfaktorer för beroende: annat missbruk, hereditet för beroende, personlighetsstörning, bensodiazepiner vid inadekvat behandlad affektiv sjukdom.",
     "Tolerans utvecklas först mot sederande/sömngivande effekt, senare mot ångestdämpande.",
     "**Abstinens** (≥ 2): autonom hyperaktivitet, handtremor, sömnsvårigheter, illamående, övergående hallucinationer/illusioner, agitation, ångest, grand mal-anfall.",
     "Kortverkande medel: abstinens inom 12 h, max efter 2 dygn, avklingar efter en vecka. Långverkande: debut efter ett par dygn, max dag 4–7, avklingar på 2–4 veckor.",
     "Rekyleffekt: ökad oro, ångest, sömnsvårigheter."
    ],
    "diag": [
     "**Bedömningssamtal**: hereditet, social situation, missbruksanamnes, dos omräknad i **diazepamekvivalenter**, skriftlig överenskommelse.",
     "Följ ev. serumkoncentration av desmetyldiazepam 1 gång/vecka."
    ],
    "beh": [
     "Minska dosen gradvis under ca **1 månad**.",
     "Använd preparat med **lång halveringstid** för att undvika nivåfluktuationer – oxazepam (Sobril) eller diazepam (Stesolid).",
     "Täta stödsamtal."
    ],
    "hand": [
     "**Akut inläggning**: svåra behandlingskrävande abstinenssymtom, suicidalitet, graviditet, allvarlig intox, psykos.",
     "**Nedtrappning i slutenvård**: psykiatrisk samsjuklighet, blandmissbruk, social instabilitet, upprepade misslyckade försök i öppenvård."
    ],
    "flagg": [
     "**Delirium med kramper** kan komma efter någon dag till en vecka.",
     "**Undvik neuroleptika** vid bensoabstinens – sänker kramptröskeln.",
     "Intoxsymptom (sluddrigt tal, ataxi, nystagmus, koma) kan ses redan vid måttliga doser hos äldre och vid lever-/njursvikt eller hypoalbuminemi."
    ],
    "ddx": [
     [
      "t9-157",
      "Alkoholabstinens",
      "Liknande symtombild; korstolerans."
     ],
     [
      "t9-159",
      "Nedtrappning vid lindrigt opioidbrukssyndrom",
      "Där ska bensodiazepiner undvikas."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 28–29"
    ]
   },
   "card": {},
   "km": [
    "psyk:54"
   ]
  },
  {
   "id": "t9-161",
   "name": "Övriga psykoaktiva substanser",
   "specialty": "Psykiatri",
   "sub": "Substanssyndrom",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Utöver alkohol, opioider och bensodiazepiner tar kompendiet upp **GHB**, en GABA-metabolit som hämmar dopamin, med **små marginaler mellan dos och överdos**.",
    "klin": [
     "Låg dos ger stämningshöjning, hög dos är sederande och överdos ger **medvetslöshet**.",
     "Effekten **potentieras av alkohol**.",
     "Inget bakrus efter uppvaknandet; **aggressivitet vid för tidigt uppvaknande**.",
     "Gemensamma beroendekriterier gäller för alla substanser (≥ 3 inom 12 mån)."
    ],
    "beh": [
     "GHB-överdos: **respirator**, krampprofylax och anxiolytika."
    ],
    "hand": [
     "Vid samtidig psykisk sjukdom: drogmissbruk (särskilt i abstinensfas) är differentialdiagnos till depression och kan simulera panikångest."
    ],
    "flagg": [
     "Små dosskillnader kan ge medvetslöshet – särskilt tillsammans med alkohol.",
     "Drogutlöst psykos och mani ska uteslutas vid nyinsjuknande."
    ],
    "ddx": [
     [
      "t9-158",
      "Opioidbrukssyndrom",
      "Medvetslöshet som svarar på naloxon."
     ],
     [
      "t9-155",
      "Alkoholbrukssyndrom",
      "Alkohol potentierar GHB."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 2",
     "Kompendium Psykiatri (T9), s. 4",
     "Kompendium Psykiatri (T9), s. 7",
     "Kompendium Psykiatri (T9), s. 10",
     "Kompendium Psykiatri (T9), s. 21",
     "Kompendium Psykiatri (T9), s. 27"
    ]
   },
   "card": {},
   "km": [
    "psyk:55"
   ]
  },
  {
   "id": "t9-162",
   "name": "Allvarligt personlighetssyndrom",
   "specialty": "Psykiatri",
   "sub": "Personlighetssyndrom",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "psyk:56"
   ]
  },
  {
   "id": "t9-163",
   "name": "Personlighetssyndrom, symtombild och behandling",
   "specialty": "Psykiatri",
   "sub": "Personlighetssyndrom",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-164",
   "name": "Förhållningssätt till patienter med personlighetssyndrom",
   "specialty": "Psykiatri",
   "sub": "Personlighetssyndrom",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-165",
   "name": "Somatiska sjukdomar som kan ge psykiska symtom",
   "specialty": "Psykiatri",
   "sub": "Somatiska sjukdomar och läkemedel med psykiska symtom",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Flera **somatiska sjukdomar** kan ge psykiska symtom som psykos, mani, depression, ångest och konfusion. **Konfusion beror till ca 90 % på somatiska orsaker**, och organisk orsak ska uteslutas vid nydebuterade psykiska symtom, särskilt hos äldre.",
    "klin": [
     {
      "h": "Psykos"
     },
     "Vanligast vid **temporallobsepilepsi**, hjärntumör, stroke, traumatisk hjärnskada, endokrina/metabola störningar, CNS-infektion, MS och autoimmun sjukdom.",
     "Talar för somatisk orsak: **lukthallucinationer** (obehaglig lukt) och framträdande **religiösa vanföreställningar**.",
     {
      "h": "Mani och depression"
     },
     "Mani: epilepsi, MS, efter stroke, **hypertyreos**, postoperativt, dialys.",
     "Depression: hypo-/hypertyreos är differentialdiagnoser; samverkar med somatisk sjukdom (t.ex. hjärtinfarkt).",
     {
      "h": "Ångest och konfusion"
     },
     "GAD kan utvecklas som komplikation till allvarlig fysisk ohälsa.",
     "Konfusion: hypoglykemi, intox, icke-konvulsivt EP, infektion, trauma, kirurgi, organsvikt, elektrolytrubbning, cirkulationsstörning, urinstämma, förstoppning, smärta."
    ],
    "diag": [
     "Vid psykos: nervstatus, **CT hjärna**, gärna **EEG**; lab: blodstatus, leverstatus, elektrolyter/kreatinin, tyreoideastatus.",
     "Depression: rutinlab, missbruksanamnes, kognitiv bedömning, ev. CT/MR.",
     "Konfusion: blodglukos, blodbild, CRP, leverprover, elektrolyter, kreatinin, intox, EKG, LP vid misstänkt meningit/encefalit."
    ],
    "hand": [
     "Behandla grundsjukdomen; sanera läkemedelslistan.",
     "Hos äldre med psykotiska symtom ska organisk orsak, framför allt **demens**, uteslutas först."
    ],
    "flagg": [
     "Kontrollera **blodglukos** direkt vid akut konfusion; ge tiamin vid misstänkt alkoholabstinens.",
     "Temporallobsepilepsi kan ge schizofreniliknande bild – EEG.",
     "Missa inte tyreoideasjukdom vid depression eller mani."
    ],
    "ddx": [
     [
      "t9-138",
      "Psykotiska tillstånd vid somatisk sjukdom",
      "Specifikt om psykos av somatisk orsak."
     ],
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Fluktuerande uppmärksamhetsstörning av somatisk orsak."
     ],
     [
      "t9-166",
      "Läkemedel som kan ge psykiska symtom",
      "Läkemedelsutlösta psykiska symtom."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 2",
     "Kompendium Psykiatri (T9), s. 4",
     "Kompendium Psykiatri (T9), s. 7",
     "Kompendium Psykiatri (T9), s. 10–11",
     "Kompendium Psykiatri (T9), s. 20",
     "Kompendium Neurologi (T9), s. 35–36"
    ]
   },
   "card": {},
   "km": [
    "psyk:59"
   ]
  },
  {
   "id": "t9-166",
   "name": "Läkemedel som kan ge psykiska symtom",
   "specialty": "Psykiatri",
   "sub": "Somatiska sjukdomar och läkemedel med psykiska symtom",
   "ty": "lm",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Läkemedel kan utlösa eller förvärra psykiska symtom – bl.a. **mani, sömnstörning, konfusion och depression**. Läkemedelsorsak ska övervägas vid nya psykiska symtom, och konfusionsframkallande läkemedel ska sättas ut.",
    "klin": [
     "**Mani**: psykofarmaka, **kortikosteroider**, **L-dopa**, alkohol.",
     "**Rapid cycling**: alla antidepressiva vid långtidsbehandling vid bipolär sjukdom.",
     "**Sömnstörning**: CNS-stimulantia (kan även ge hypersomni), **SSRI/SNRI**, blodtryckssänkare.",
     "**Konfusion**: **antikolinerga, sederande och psykoaktiva** läkemedel; lugnande medel kan förvärra konfusion.",
     "**Depression**: läkemedelsrelaterad depression är en differentialdiagnos.",
     "**Ångeststegring** veckorna efter insättning av SSRI.",
     "**Bensodiazepinintox** (sluddrigt tal, ataxi, minnesstörning) redan vid måttliga doser hos äldre och vid lever-/njursvikt."
    ],
    "diag": [
     "Gå igenom läkemedelslistan vid konfusion, sömnstörning, nydebuterad depression eller mani."
    ],
    "hand": [
     "Sanera läkemedelslistan: antikolinerga, sederande och psykoaktiva läkemedel bort om möjligt.",
     "Starta SSRI med låg dos; tillfälligt bensodiazepin/antihistamin vid ångeststegring."
    ],
    "flagg": [
     "Äldre är känsliga för extrapyramidala biverkningar; högdosneuroleptika (levomepromazin) ska undvikas vid konfusion.",
     "Neuroleptika sänker kramptröskeln – undvik vid bensodiazepinabstinens.",
     "Fråga om hypomani innan antidepressiva sätts in."
    ],
    "ddx": [
     [
      "t9-165",
      "Somatiska sjukdomar som kan ge psykiska symtom",
      "Somatisk snarare än farmakologisk orsak."
     ],
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Läkemedel är vanlig orsak."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 2",
     "Kompendium Psykiatri (T9), s. 4",
     "Kompendium Psykiatri (T9), s. 9",
     "Kompendium Psykiatri (T9), s. 15",
     "Kompendium Psykiatri (T9), s. 20",
     "Kompendium Psykiatri (T9), s. 28–29",
     "Kompendium Neurologi (T9), s. 36"
    ]
   },
   "card": {},
   "km": [
    "psyk:59"
   ]
  },
  {
   "id": "t9-167",
   "name": "Risksituationer och varningssignaler för aggressivt beteende",
   "specialty": "Psykiatri",
   "sub": "Hot, aggressivt beteende och våld",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Våldsrisk hos psykiatriska patienter bedöms utifrån **långsiktiga riskfaktorer** (ung man, missbruk, tidigare våld, psykos) och **situationsbundna faktorer** i specifika vårdmiljöer, samt **akuta varningssignaler** som bullrighet och hotfulla gester.",
    "klin": [
     {
      "h": "Långsiktig risk"
     },
     "**Ung man med missbruk och social instabilitet**; våldsam i barndomen, tidigare våldsbrott, våld i samband med missbruk.",
     "Hjärnskada och psykossjukdom; upplevelse av **förföljelse** (oavsett psykos), orealistiska framtidsplaner, bristande förmåga att samverka i behandling.",
     {
      "h": "Specifik miljö"
     },
     "**Psykogeriatrik**: hjärnskadebilden avgör; **ADL-situationer** är vanligaste provokationen.",
     "**Akutmottagning**: repetitivt våldsbenägna, berusning eller abstinens.",
     "**Psykiatrisk intensivvård**: akut psykos med mycket ångest, fientlighet och låg självbild; frustration (t.ex. manisk patient som nekas önskemål); ”oprovocerade” överfall, främst vid schizofreni; **hög beläggning** ökar risken."
    ],
    "diag": [
     "Prediktorer för våld inom tvångs-/intagningsvård: hög grad av **ångest och fientlighet** samt **avsaknad av megalomana drag**.",
     "Omedelbart förestående våld: ökande **bullrighet** och **hotfulla åtbörder**."
    ],
    "hand": [
     "Förebygg genom att identifiera riskpatienter och risksituationer; se [[t9-168|handläggning av hot och våld]]."
    ],
    "flagg": [
     "Förföljelseupplevelse ökar risken även utan psykos.",
     "Neka inte en manisk patient önskemål utan att planera för frustrationsreaktion.",
     "Fler patienter på avdelningen ger högre våldsrisk vid schizofreni."
    ],
    "ddx": [
     [
      "t9-168",
      "Handläggning av hot, aggressivt beteende och manifest våld",
      "Akut agerande när våld uppstår."
     ],
     [
      "t9-133",
      "Schizofreni",
      "Oprovocerade överfall vanliga i akutskedet."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 18"
    ]
   },
   "card": {},
   "km": [
    "psyk:60"
   ]
  },
  {
   "id": "t9-168",
   "name": "Handläggning av hot, aggressivt beteende och manifest våld",
   "specialty": "Psykiatri",
   "sub": "Hot, aggressivt beteende och våld",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid hot eller manifest våld ska man **alltid agera på säkerhet** – inte försöka med ”pseudoterapeutiska” förklaringar. Allt beteende från behandlaren ska minska patientens upplevelse av **kränkning eller rädsla** och öka säkerheten, främst genom att **tillkalla medarbetare**.",
    "klin": [
     "Mimik, kroppshållning och tonläge ska vara lugnande; undvik anklagande eller förmanande maktspråk.",
     "**Hindra aldrig** en potentiellt ilsken patient från att lämna rummet, även om samtalet inte är klart.",
     "Handgripligt bortförande endast med **tillräckligt antal specifikt utbildad personal**.",
     "Behandlarens egna fysiska handgripligheter får endast vara **basala avvärjningar**."
    ],
    "diag": [
     "Aggressiviteten är ett delfenomen i det psykiatriska syndromet – gör en **grundläggande psykiatrisk diagnosbedömning** innan farmakologisk behandling.",
     "Varningssignaler: bullrighet, hotfulla åtbörder, hög ångest och fientlighet."
    ],
    "beh": [
     "Det finns **inga läkemedel specifikt mot aggressivitet**.",
     "Akut psykos med agitation: sederande, ångestlindrande neuroleptika, t.ex. högdos **klorpromazin (Hibernal)** eller **levomepromazin (Nozinan)**.",
     "Kan kompletteras med **bensodiazepiner**, som sederar och minskar dystona biverkningar.",
     "Om neuroleptika är kontraindicerat: snabbverkande bensodiazepin, t.ex. **diazepam 10–20 mg**, ensamt."
    ],
    "hand": [
     "Vid behov tvångsvård enligt [[t9-118|LPT]]."
    ],
    "flagg": [
     "Anklagande eller förmanande **maktspråk** ökar hotfullheten och ska inte förekomma.",
     "Ensam behandlare ska inte försöka överta patienten fysiskt.",
     "Hos äldre med konfusion ska högdosneuroleptika som Nozinan undvikas."
    ],
    "ddx": [
     [
      "t9-167",
      "Risksituationer och varningssignaler för aggressivt beteende",
      "Förebyggande riskbedömning."
     ],
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Utåtagerande vid delirium kräver somatisk utredning."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 18",
     "Kompendium Psykiatri (T9), s. 20"
    ]
   },
   "card": {},
   "km": [
    "psyk:61"
   ]
  },
  {
   "id": "t9-169",
   "name": "Psykiatriska störningar hos äldre",
   "specialty": "Psykiatri",
   "sub": "Äldrepsykiatri",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Psykiatriska störningar hos äldre tar sig ofta **andra uttryck** än hos yngre: depression visar sig ofta utan tydligt sänkt stämningsläge, mani med aggressivitet och konfusion, och psykotiska symtom kräver att **organisk orsak, särskilt demens**, utesluts först.",
    "klin": [
     "**Depression**: hopplöshet och meningslöshet, **ångest och oro**, sömnsvårigheter, **hypokondriska tankar**; vid svår depression ofta depressivt färgade **psykotiska vanföreställningar**. Nydebuterad ångest i hög ålder talar starkt för depression.",
     "**Bipolär sjukdom**: utåtagerande beteende, aggressivitet, ibland konfusion; blandbild missbedöms ofta som depression med ångest.",
     "**Ångest**: vanlig komorbiditet vid depression; uteslut även konfusion, mani och demens.",
     "**Schizofreni**: mer förföljelsetankar och hallucinationer, färre negativa symtom; systematiserade vanföreställningar ökar och tankestörningar minskar med åldern.",
     "**Konfusion**: plötslig debut, växlande intensitet, uppmärksamhetsstörning, feltolkningar, fragmenterat tänkande, desorientering; vanlig vid demens.",
     "**BPSD**: vandring, skrikbeteende, aggressivitet, hallucinationer, affektiva störningar, sömnstörning."
    ],
    "diag": [
     "Depressionskriterierna täcker inte alla äldres tillstånd → **underdiagnostik**; diagnosen bygger på kliniska bilden, gärna med **GDS-20**.",
     "Psykos hos äldre – DD: sent debuterande schizofreni, demens (särskilt Lewy body), vanföreställningssyndrom, somatisk sjukdom, affektiv sjukdom, substans, konfusion.",
     "Konfusion vs schizofreni: vid schizofreni är bilden konstant, hörselhallucinationer vanligare och minne/orientering opåverkade."
    ],
    "beh": [
     "Depression: svarar oftast bra på **SSRI**.",
     "Bipolär: litium; ofta tillägg av atypiskt neuroleptikum.",
     "Ångest: antidepressiva; bensodiazepiner endast tillfälligt; låg dos pregabalin vid otillräcklig effekt.",
     "Konfusion: lugn miljö, behandla somatisk orsak; se [[t9-171|psykofarmaka hos äldre]]."
    ],
    "hand": [
     "Djupa depressioner bör behandlas av **specialist**.",
     "Se [[t9-170|initial handläggning hos äldre]]."
    ],
    "flagg": [
     "Depression hos äldre missas lätt eftersom sänkt stämningsläge ofta saknas.",
     "Äldre är mycket känsliga för **extrapyramidala biverkningar**.",
     "Hypokondriska tankar försvårar skiljandet mot somatisk sjukdom."
    ],
    "ddx": [
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Akut debut, fluktuerande, uppmärksamhetsstörning."
     ],
     [
      "t9-072",
      "Demensliknande tillstånd",
      "Depression kan likna demens (pseudodemens)."
     ],
     [
      "t9-136",
      "Vanföreställningssyndrom",
      "Icke-bisarra vanföreställningar utan dominerande hallucinationer."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 19–20"
    ]
   },
   "card": {},
   "km": [
    "psyk:63",
    "psyk:62"
   ]
  },
  {
   "id": "t9-170",
   "name": "Initial handläggning av psykiatriska störningar hos äldre",
   "specialty": "Psykiatri",
   "sub": "Äldrepsykiatri",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Initial handläggning av psykiatriska störningar hos äldre bygger på att **utesluta organisk orsak** (demens, konfusion, somatisk sjukdom, läkemedel), ställa diagnos utifrån **kliniska bilden** och anpassa **miljö, omvårdnad och läkemedel** till den äldre patienten.",
    "klin": [
     "**Depression**: klinisk diagnos, skattningsskala **GDS-20**; SSRI förstahandsval; djup depression → specialist.",
     "**Mani/bipolär**: sök aktivt efter överaktivitet, minskat sömnbehov och förhöjt stämningsläge bakom blandbilder.",
     "**Ångest**: uteslut depression, konfusion, mani och demens; beakta **miljö- och omvårdnadsfaktorer** hos institutionsboende.",
     "**Psykotiska symtom**: uteslut först organisk orsak, framför allt demens; behandla utifrån orsak.",
     "**Konfusion**: förlopp, fluktuerande symtom och utlösande faktorer vägleder; behandla somatisk sjukdom, sätt ut konfusionsframkallande läkemedel.",
     "**BPSD**: noggrann utvärdering av symtom och orsaker, framför allt omgivningsfaktorer; utvärdera och justera insatt behandling."
    ],
    "diag": [
     "Tänk på att konfusion är vanlig komorbiditet vid demens.",
     "Akut konfusion: kontrollera blodglukos, blodbild, CRP, elektrolyter, kreatinin, EKG."
    ],
    "beh": [
     "Konfusion: **lugn, trygg miljö**, ständigt vak och ljust rum när patienten är vaken.",
     "Lugnande vid konfusion i första hand **klometiazol 300–600 mg** (flytande Heminevrin); vid uttalad konfusion **risperidon** eller **haloperidol**.",
     "BPSD: långvarig behandling med acetylkolinesterashämmare minskar generellt BPSD; SSRI vid emotionell labilitet."
    ],
    "hand": [
     "Utvärdera effekt av insatta åtgärder och modifiera vid behov.",
     "Se även [[t9-171|psykofarmakologisk behandling av äldre]]."
    ],
    "flagg": [
     "Lugnande läkemedel har symtomatisk effekt men kan **förvärra konfusionen**.",
     "**Högdosneuroleptika (Nozinan)** ska undvikas vid konfusion.",
     "Missa inte depression bakom nydebuterad ångest."
    ],
    "ddx": [
     [
      "t9-169",
      "Psykiatriska störningar hos äldre",
      "Symtombild per diagnos."
     ],
     [
      "t9-073",
      "Akuta konfusionstillstånd",
      "Somatiskt utlöst och fluktuerande."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 19–20",
     "Kompendium Neurologi (T9), s. 35–36"
    ]
   },
   "card": {},
   "km": [
    "psyk:63"
   ]
  },
  {
   "id": "t9-171",
   "name": "Psykofarmakologisk behandling av äldre",
   "specialty": "Psykiatri",
   "sub": "Äldrepsykiatri",
   "ty": "lm",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Principen för psykofarmaka till äldre är **lägsta möjliga dos under kortast möjliga tid**, ofta **halv startdos**, med särskild hänsyn till **ökad känslighet** för extrapyramidala biverkningar, sedering och bensodiazepinintoxikation.",
    "klin": [
     "**Antidepressiva**: äldre svarar oftast bra på **SSRI**; antidepressiva används även vid ångest.",
     "**Stämningsstabiliserare**: litium effektivt; **valproat ger fler biverkningar** hos äldre; ofta tillägg av atypiskt neuroleptikum.",
     "**Neuroleptika**: effekt vid schizofreni och vanföreställningssyndrom, men äldre är **mycket känsliga för extrapyramidala biverkningar**.",
     "**Ångest**: bensodiazepiner bör undvikas annat än tillfälligt; **pregabalin** i låga doser när antidepressiva inte räcker.",
     "**Konfusion**: klometiazol 300–600 mg i första hand; vid uttalad konfusion risperidon eller haloperidol (haloperidol förstahandsval vid svår oro pga låg antikolinerg effekt enligt neurologikompendiet).",
     "**Sömn**: zolpidem undviks hos äldre, **zopiklon lämpligare**; halv startdos."
    ],
    "diag": [
     "Bensodiazepinintox (sluddrigt tal, ataxi, minnesstörning) kan ses redan vid måttliga doser hos äldre och vid lever-/njursvikt eller hypoalbuminemi.",
     "Utvärdera effekt av insatt behandling och modifiera vid behov."
    ],
    "hand": [
     "Sanera läkemedelslistan: antikolinerga, sederande och psykoaktiva läkemedel bort om möjligt vid konfusion.",
     "BPSD: acetylkolinesterashämmare minskar generellt BPSD; SSRI vid emotionell labilitet."
    ],
    "flagg": [
     "**Undvik högdosneuroleptika** (t.ex. Nozinan) vid konfusion.",
     "**Antihistaminer** (Atarax/Lergigan) mot SSRI-inducerad ångest ska **inte ges till äldre**.",
     "Lugnande läkemedel kan förvärra konfusion."
    ],
    "ddx": [
     [
      "t9-170",
      "Initial handläggning av psykiatriska störningar hos äldre",
      "Icke-farmakologiska åtgärder först."
     ],
     [
      "t9-394",
      "TDM av psykotropa läkemedel",
      "Koncentrationsbestämning av psykofarmaka."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 9",
     "Kompendium Psykiatri (T9), s. 15–16",
     "Kompendium Psykiatri (T9), s. 19–20",
     "Kompendium Psykiatri (T9), s. 28",
     "Kompendium Neurologi (T9), s. 36"
    ]
   },
   "card": {},
   "km": [
    "psyk:64"
   ]
  },
  {
   "id": "t9-172",
   "name": "Vanligaste psykoterapiformerna",
   "specialty": "Psykiatri",
   "sub": "Psykoterapi",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Kompendiet nämner **kognitiv beteendeterapi (KBT)** som den mest använda psykoterapiformen, samt **interpersonell terapi (IPT)**, familjeterapi, gruppterapi och stödsamtal. KBT beskrivs med konkreta tekniker som **exponering** och **kognitiv omstrukturering**.",
    "klin": [
     {
      "h": "KBT – tekniker"
     },
     "**Exponering**: systematisk vid specifik fobi; graderade uppgifter vid agorafobi i stället för att fly/undvika; vid tvångssyndrom.",
     "**Kognitiva interventioner**: utmana ångestväckande tankar och inre bilder (paniksyndrom).",
     "**Beteendeexperiment** (agorafobi).",
     "**Avslappningsövningar och kognitiv omstrukturering** (GAD).",
     "**Emotionell bearbetning** (PTSD).",
     "Sömnrestriktion och sömnhygienråd vid insomni.",
     {
      "h": "Övriga former"
     },
     "**IPT**: vid medelsvår depression och i behandlingstrappan vid ångest.",
     "**Familjeterapi**: vid anorexi och bulimi.",
     "**Gruppterapi**: vid social fobi och stressrelaterade problem.",
     "**Stödsamtal**: vid lindrig depression och kris."
    ],
    "diag": [
     "Val av terapi styrs av diagnos och svårighetsgrad; vid svår depression har psykoterapi ingen evidens."
    ],
    "hand": [
     "Kombination med SSRI verkar synergistiskt vid paniksyndrom och GAD.",
     "Vid ADHD: psykoterapi för förbättrad impulskontroll."
    ],
    "flagg": [
     "Psykoterapi ensamt räcker inte vid bipolär sjukdom eller svår depression.",
     "Oklart om KBT har en roll vid Tourettes syndrom."
    ],
    "ddx": [
     [
      "t9-145",
      "Psykoterapeutisk behandling vid förstämningssjukdom",
      "Tillämpning vid depression och bipolär sjukdom."
     ],
     [
      "t9-114",
      "Krisbearbetning och stödsamtal",
      "Stödjande samtal."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 3–9",
     "Kompendium Psykiatri (T9), s. 12–13",
     "Kompendium Psykiatri (T9), s. 16"
    ]
   },
   "card": {},
   "km": [
    "psyk:65"
   ]
  },
  {
   "id": "t9-173",
   "name": "Kulturella faktorers betydelse för diagnostik och behandling",
   "specialty": "Psykiatri",
   "sub": "Transkulturell psykiatri",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-174",
   "name": "Blefarit",
   "specialty": "Ögonsjukdomar",
   "sub": "Rött öga",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:14"
   ]
  },
  {
   "id": "t9-175",
   "name": "Hordeolum",
   "specialty": "Ögonsjukdomar",
   "sub": "Rött öga",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:15"
   ]
  },
  {
   "id": "t9-176",
   "name": "Chalazion",
   "specialty": "Ögonsjukdomar",
   "sub": "Rött öga",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:16"
   ]
  },
  {
   "id": "t9-177",
   "name": "Hyposfagma",
   "specialty": "Ögonsjukdomar",
   "sub": "Rött öga",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Hyposfagma** är en **subkonjunktival blödning**: ett kärl brister under konjunktiva, och eftersom utrymmet mellan sklera och konjunktiva är stort kan blödningen bli utbredd. Tillståndet är **ofarligt**.",
    "klin": [
     "Kan komma **spontant**, efter tunga lyft eller kraftig ansträngning.",
     "Jämn eller ojämn blodansamling **utan dilaterade kärl** – skiljer sig därmed från konjunktival injektion.",
     "**Opåverkat visus**, ingen värk; ev. skavkänsla.",
     "Hör i flödesschemat till rött öga utan värk, med normala ögonlock och utan kladd."
    ],
    "diag": [
     "Klinisk diagnos genom inspektion.",
     "**Fråga efter trauma** för att utesluta perforation."
    ],
    "beh": [
     "Ingen behandling behövs – blödningen **resorberas själv inom ett par veckor**.",
     "Vid skav: smörjande salva (Oculentum simplex)."
    ],
    "hand": [
     "Vårdnivå: **vårdcentral**."
    ],
    "flagg": [
     "Traumaanamnes – vid trauma måste **perforation** uteslutas ([[t9-248|Penetration och perforation]]).",
     "Nedsatt visus eller smärta passar inte med hyposfagma – tänk annan diagnos."
    ],
    "ddx": [
     [
      "t9-178",
      "Viral konjunktivit",
      "Dilaterade kärl (injektion), skav och ofta spridning till andra ögat."
     ],
     [
      "t9-247",
      "Bulbkontusion/trauma",
      "Traumaanamnes; perforation måste uteslutas."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 5–6"
    ]
   },
   "card": {},
   "km": [
    "ogon:17"
   ]
  },
  {
   "id": "t9-178",
   "name": "Konjunktivit",
   "specialty": "Ögonsjukdomar",
   "sub": "Rött öga",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Konjunktivit** är inflammation i bindhinnan och ger rött öga med **skav men oftast ingen värk eller ljuskänslighet** och opåverkat visus. Kompendiet skiljer på **bakteriell, viral (adenovirus), klamydia-, allergisk och vernal** konjunktivit samt viral keratokonjunktivit där kornea engageras.",
    "klin": [
     {
      "h": "Bakteriell"
     },
     "Vanlig; stafylokocker, H. influenzae, streptokocker, pneumokocker, moraxella. **Kladdigt** öga, skav, ej ljuskänslig, startar ofta i ett öga och sprider sig. Måttlig injektion, ingen färgbarhet, ingen ljusväg.",
     {
      "h": "Viral"
     },
     "**Adenovirus**, ofta vid förkylning, **mycket smittsam** (epidemier på förskolor/skolor). Liknar bakteriell men ej kladdig.",
     "**Viral keratokonjunktivit**: engagerar kornea → smärta, ljuskänslighet, korneala infiltrat som kan sänka visus; ibland feber och övre luftvägssymtom; vid svår infektion pseudomembran i fornix. Kontaktlinser är riskfaktor.",
     {
      "h": "Klamydia"
     },
     "Chlamydia trachomatis serotyp D–K (okulogenital). **Envis, oftast ensidig** konjunktivit, förstorade folliklar, mukopurulent trådigt sekret, mikropannus; ibland samtidiga urogenitala besvär.",
     {
      "h": "Allergisk och vernal"
     },
     "**Allergisk**: **klåda** och rinnande ögon, bilateralt, ofta säsongsbunden och med allergisk rinit; måttlig kemos.",
     "**Vernal**: ovanlig, pojkar 5–15 år, vår/sommar; subtarsala papiller med **kullerstensmönster** vid evertering; kornea kan bli sårig → ljuskänslighet och skav."
    ],
    "diag": [
     "Visus, inspektion, **evertera** ([[t9-259|evertering]]) för att utesluta främmande kropp, **fluoresceinfärgning** ([[t9-260|fluorescein]]) för kornealt engagemang.",
     "Bakteriell: **ingen odling** om inte terapisvikt/recidiv.",
     "Klamydia: STD-anamnes; klamydiaprov med specialset (bedöva, skrapa hårt i nedre fornix). Färga inte in ögat före provet.",
     "Vernal: på ögonmottagning även tryckmätning."
    ],
    "beh": [
     "**Bakteriell**: initialt ingen behandling, kontaktlinsvila, tvätta bort pus flera ggr/dag. Vid oförändrat tillstånd **Fucithalmic x 2**, i andra hand **Chloromycetin-droppar x 5**.",
     "**Viral**: ingen farmakologisk behandling – tvätta ögonen, tårsubstitut, kontaktlinsvila. Keratokonjunktivit: ingen verksam behandling; tårsubstitut och steroiddroppar kan lindra.",
     "**Klamydia**: efter odlingssvar remiss STD-mottagning för genital provtagning; **peroral tetracyklin eller erytromycin** (lokala droppar hämmar men dödar inte).",
     "**Allergisk**: natriumkromoglikat- eller emedastindroppar, ev. peroral antihistamin, ev. nasal steroid; ögonsteroider bara i samråd med ögonläkare (risk för tryckstegring).",
     "**Vernal**: steroiddroppar initialt (t.ex. rimexolon x 3–4), sedan allergidroppar."
    ],
    "hand": [
     "Vårdnivå **vårdcentral**: bakteriell, viral och allergisk konjunktivit.",
     "Vårdnivå **ögonläkare**: viral keratokonjunktivit, klamydia- och vernal konjunktivit.",
     "Keratokonjunktivit: smittsam 10–12 dagar, ofta långdragen (2–3 veckor till månader); följs tills infiltraten läkt. Undvik delade handdukar."
    ],
    "flagg": [
     "**Ensidiga symtom** – tänk främmande kropp, keratit, irit eller episklerit.",
     "**Ljuskänslighet och smärta** talar för kornealt engagemang eller irit – inte vanlig konjunktivit.",
     "Utebliven effekt av behandling → tänk **irit**.",
     "Envis ensidig konjunktivit → tänk **klamydia**."
    ],
    "ddx": [
     [
      "t9-182",
      "Iridocyklit (irit)",
      "Dov värk, ljuskänslighet, ciliär injektion, ljusväg och miotisk pupill."
     ],
     [
      "t9-183",
      "Keratit",
      "Smärta, ljuskänslighet och infiltrat/färgupptag på kornea."
     ],
     [
      "t9-179",
      "Episklerit",
      "Lokaliserad sektoriell rodnad med palpationsömhet, ej kladdig."
     ],
     [
      "t9-245",
      "Ytlig främmande kropp",
      "Ofta ensidigt; hittas vid evertering."
     ],
     [
      "",
      "Tårvägsobstruktion",
      "Recidiverande kladdigt öga."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 5–8"
    ]
   },
   "card": {},
   "km": [
    "ogon:18",
    "ogon:0"
   ]
  },
  {
   "id": "t9-179",
   "name": "Episklerit",
   "specialty": "Ögonsjukdomar",
   "sub": "Rött öga",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Episklerit** är en inflammation i **Tenons kapsel** mellan sklera och konjunktiva. Rodnaden är ofta **lokaliserad till en sektor** och tillståndet ger lättare smärta än irit och går lättare över av sig självt.",
    "klin": [
     "Dov ögonvärk och ljuskänslighet (symtom liknar irit), men lindrigare.",
     "**Sektoriell rodnad med palpationsömhet** (t.ex. nasalt/temporalt); övriga ögat kan vara blekt.",
     "**Opåverkat visus**.",
     "Kan liksom irit vara associerad med **immunologiska systemsjukdomar**."
    ],
    "diag": [
     "Visus, inspektion och **palpation över ömheten**, evertering och fluoresceinfärgning, leta främmande kropp.",
     "Ögonmottagning: tryckmätning och spaltlampa för att utesluta **ljusväg** (irit)."
    ],
    "beh": [
     "**Expektans** eller svagare steroiddroppar (t.ex. Vexol, Ultracortenol x 3–4) med nedtrappning under ett par dagar."
    ],
    "hand": [
     "Akut inom ett par dagar; vårdnivå **ögonläkare**."
    ],
    "flagg": [
     "**Sklerit** – äldre, sjukare patient med djupare blåaktig rodnad, intensivare smärta och ev. visuspåverkan; ofta reumatisk sjukdom.",
     "Ljusväg i främre kammaren talar för irit."
    ],
    "ddx": [
     [
      "t9-185",
      "Sklerit",
      "Äldre, djupare blånad av bulben, dovare/intensivare smärta, ev. visuspåverkan, reumatisk sjukdom."
     ],
     [
      "t9-182",
      "Iridocyklit (irit)",
      "Ciliär injektion runt kornea, ljusväg och celler, miotisk pupill."
     ],
     [
      "t9-178",
      "Konjunktivit",
      "Skav och kladd snarare än smärta."
     ],
     [
      "t9-243",
      "Korneal erosion",
      "Kornea tar färg med fluorescein."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 9"
    ]
   },
   "card": {},
   "km": [
    "ogon:19"
   ]
  },
  {
   "id": "t9-180",
   "name": "Zoster oftalmikus",
   "specialty": "Ögonsjukdomar",
   "sub": "Rött öga",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Herpes zoster ophthalmicus** är bältros i området kring ögat, dvs. i **n. trigeminus första gren**. Ögat kan engageras med **keratit och/eller uveit**; risken för inre ögonengagemang är större vid **blåsor på nästippen** (nasociliära grenen).",
    "klin": [
     "Typiska bältrossymtom: smärta, kliande utslag i ena halvan av pannan och skalpen, ev. huvudvärk.",
     "Ögonsymtom från klåda och skav till värk.",
     "Keratit som **dendritika** eller stromalt engagemang; uveit möjlig.",
     "Korneala sensibiliteten är oftast **nedsatt**."
    ],
    "diag": [
     "Visus, leta infiltrat, **fluoresceinfärgning**.",
     "Testa korneal sensibilitet med tvinnad bomullsspets och jämför blinkreflexen mellan sidorna.",
     "Ögonmottagning: tryckmätning, ljusväg, ev. bakre segmentet."
    ],
    "beh": [
     "**Aciklovir 800 mg x 5 i 10 dagar** eller **valaciklovir (Valtrex) i 7 dagar**; bör sättas in **inom 72 h** från första blåsan.",
     "Försiktighet med aciklovir vid nedsatt njurfunktion; ej till gravida.",
     "Samtidigt **Zovirax ögonsalva x 5**.",
     "Mydriatika vid inre retning (som vid irit, men varning för atropin pga. risk för irisatrofi). Steroiddroppar kan ges liberalare än vid HSV-keratit – sköts av ögonläkare."
    ],
    "hand": [
     "Vid **blåsor på nästippen, rött öga eller ögonsymtom** → ögonläkare (akut inom en till ett par dagar).",
     "Följs ungefär varje vecka så länge kornea är engagerad eller inre retning finns; informera om **postherpetisk smärta**."
    ],
    "flagg": [
     "**Blåsor på nästippen** (nasociliära grenen) ökar risken för inre ögonengagemang – remiss till ögonläkare.",
     "Antiviral behandling ska startas inom 72 h.",
     "Steroider inte till patient med kladdiga, infekterade blåsor."
    ],
    "ddx": [
     [
      "t9-183",
      "Herpes simplex-keratit",
      "Saknar de typiska blåsorna i pannan/dermatomet."
     ],
     [
      "t9-290",
      "Zoster oticus",
      "Annat dermatom – örat och n. facialis."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 11"
    ]
   },
   "card": {},
   "km": [
    "ogon:20"
   ]
  },
  {
   "id": "t9-181",
   "name": "Akut glaukom",
   "specialty": "Ögonsjukdomar",
   "sub": "Rött öga",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Akut glaukom** (akut trångvinkelglaukom) är ett ovanligt men **allvarligt synhotande** tillstånd med akut tryckstegring när kammarvinkeln blir trång och kammarvattnets avflöde hämmas – en ond cirkel. Nästan alltid **unilateralt**; normalt tryck är **<22 mmHg**, vid akut glaukom **60–70 mmHg**.",
    "klin": [
     "Intensiv **ögonvärk, huvudvärk och illamående/kräkning** – patienten hamnar ofta på fel klinik.",
     "Riskgrupp: **hyperopa** (mindre, kortare ögon med trängre kammarvinkel) och äldre.",
     "**Kraftigt nedsatt visus** pga. kornealödem; disig/rökig kornea.",
     "**Stasinjektion** och **halvvid, ljusstel pupill** (paralytisk iris).",
     "Grund främre kammare; allmänpåverkad, smärtpåverkad patient.",
     "Synnerven kan skadas och synen förloras på ett par dygn."
    ],
    "diag": [
     "Visus och inspektion (disig kornea, stasinjektion, halvvid ljusstel pupill).",
     "Utan tryckmätare: **palpera bulben genom ögonlocket** – stenhårt öga, ”pingisboll” ([[t9-262|palpation av bulben]]).",
     "Ögonmottagning: tryckmätning ([[t9-272|tonometri]]) och spaltlampa (grund kammare, epitelödem, Descemetveck)."
    ],
    "beh": [
     "**Acetazolamid (Diamox) 2 x 250 mg** po, iv vid illamående/kräkning.",
     "**Glycerollösning ca 1 ml/kg** (50–75 ml).",
     "Lokalt trycksänkande droppar, t.ex. 1 droppe **timolol** och 1 droppe **Iopidine**.",
     "Avvakta 1 h och mät om: sjunkit → hem; inte sjunkit → inläggning med **iv mannitol**.",
     "**YAG-laseriridotomi** (två hål i iris kl 10 och 2) – svårt vid högt tryck pga. disig kornea; görs profylaktiskt i senare skede. Hem med trycksänkande droppe (t.ex. Cosopt)."
    ],
    "hand": [
     "Akut – måste **snabbt till ögonläkare**.",
     "Återbesök inom ett par dagar för tryckkontroll, därefter synfält och tryckmätning.",
     "Prognos beror på hur länge tillståndet varit obehandlat; synfältsdefekter kan kvarstå."
    ],
    "flagg": [
     "**Rött öga + huvudvärk + illamående** – glöm inte ögat; palpera bulben.",
     "Halvvid ljusstel pupill och disig kornea skiljer från irit (liten pupill) och migrän (blekt öga, normalt visus).",
     "Synen kan gå förlorad på ett par dygn."
    ],
    "ddx": [
     [
      "t9-182",
      "Iridocyklit (irit)",
      "Pupillen ofta mindre på drabbade ögat; måttlig synnedsättning."
     ],
     [
      "t9-208",
      "Migrän",
      "Värk bakom ögat men ögat är blekt och visus i stort sett opåverkat."
     ],
     [
      "t9-198",
      "Kroniskt glaukom",
      "Symtomfritt, långsam perifer synfältsförlust."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 5",
     "Ögonboken – sammanfattning (T9), s. 12–13",
     "Ögonboken – sammanfattning (T9), s. 16"
    ]
   },
   "card": {},
   "km": [
    "ogon:21",
    "ogon:106",
    "ogon:0"
   ]
  },
  {
   "id": "t9-182",
   "name": "Iridocyklit",
   "specialty": "Ögonsjukdomar",
   "sub": "Rött öga",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Irit (iridocyklit) = främre uveit**, en immunologisk inflammation i iris/främre uvea. Vanligare hos **HLA-B27-positiva** och kan vara associerad med systemsjukdomar som **sarkoidos, IBD och ankyloserande spondylit**. Uveit indelas i främre, intermediär (ciliarkroppen), bakre (koroidit) och panuveit.",
    "klin": [
     "**Dov värk och ljuskänslighet** (inflammerad iris gör ont när den drar ihop sig), ögat rinner men inget pus.",
     "Måttlig synnedsättning, nästan alltid **ensidigt**.",
     "Status: **kraftig ciliär injektion**, ljusväg och celler i främre kammaren, **miotisk pupill**, ev. synekier.",
     "Obehandlad → **bakre synekier** (sammanväxningar iris–lins) och svårare behandling.",
     "Barn med **juvenil idiopatisk artrit** kan få kronisk uveit **utan smärta** → regelbundna ögonkontroller."
    ],
    "diag": [
     "Visus, inspektion av injektion, miotisk/synekibunden pupill; fluoresceinfärgning för att utesluta korneal erosion.",
     "Ögonmottagning: spaltlampa ([[t9-258|bedömning av inre retning]]) – ljusväg/celler; **mät trycket** (irit kan höja det); ögonbotten för retinala infiltrat och makulaödem.",
     "Läker iriten ut behövs vanligen ingen vidare utredning; överväg det vid samtidiga kroppsliga symtom (t.ex. ryggvärk)."
    ],
    "beh": [
     "**Steroiddroppar** (Isopto-Maxidex) 6–18 droppar/dag beroende på grad, trappas ut när iriten läker.",
     "**Pupilldilaterande droppar** (Cyklogyl) 2–3 ggr/dag.",
     "Vid synekier: **Isopto-Atropin** x 2–3 (kraftigare)."
    ],
    "hand": [
     "Akut – till **ögonläkare inom 1–2 dygn**.",
     "Kontroll oftast varje vecka tills utläkt (2–3 veckor); god prognos men **recidiverar ofta**."
    ],
    "flagg": [
     "Rött öga med **ljuskänslighet och liten pupill** – tänk irit och remittera.",
     "Konjunktivit som inte svarar på behandling → tänk irit.",
     "JIA-barn ska ha regelbundna ögonkontroller trots avsaknad av symtom."
    ],
    "ddx": [
     [
      "t9-183",
      "Keratit",
      "Gråvitt infiltrat i hornhinnan."
     ],
     [
      "t9-243",
      "Korneal erosion",
      "Färgat område efter fluoresceinfärgning."
     ],
     [
      "t9-245",
      "Ytlig främmande kropp",
      "Under övre ögonlocket eller på kornea – evertera."
     ],
     [
      "t9-181",
      "Akut glaukom",
      "Halvvid ljusstel pupill, stenhårt öga, disig kornea."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 8–9"
    ]
   },
   "card": {},
   "km": [
    "ogon:22",
    "ogon:0"
   ]
  },
  {
   "id": "t9-183",
   "name": "Keratit",
   "specialty": "Ögonsjukdomar",
   "sub": "Rött öga",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Keratit** är inflammation/infektion i hornhinnan och ger rött öga med **smärta, ljuskänslighet** och ofta synpåverkan. Kompendiet tar upp **bakteriell keratit, marginalkeratit, herpes simplex-keratit och fotoelektrisk keratit** (svetsblänk/snöblindhet).",
    "klin": [
     {
      "h": "Bakteriell keratit"
     },
     "Kräver epitelskada; **vanligare hos kontaktlinsbärare**. Agens: S. aureus, S. epidermidis, S. pneumoniae, P. aeruginosa, moraxella.",
     "Subakut insjuknande: ont, rött, ljuskänsligt, ibland kladdigt öga; **gråvitt infiltrat** (några mm), ciliär injektion, ev. ljusväg.",
     {
      "h": "Marginalkeratit"
     },
     "Inflammation nära **limbus**, ofta recidiverande; vitt infiltrat längs limbus med kärlinväxt och gamla perifera ärr.",
     {
      "h": "Herpes simplex-keratit"
     },
     "En av de vanligaste orsakerna till kornealsår; nästan alltid ensidig **dendritika** som tar färg. Triggas av kontaktlinser, stress, solljus, infektioner, immunsuppression. **Nedsatt korneal sensibilitet**, recidiverar och kan bli stromal.",
     {
      "h": "Fotoelektrisk keratit"
     },
     "UV-skada på epitelet; efter **latens upp till 12 h** intensiv smärta, tårflöde och ljuskänslighet; multipla punktata färgbarheter."
    ],
    "diag": [
     "Visus; **inspektera infiltrat före fluoresceinfärgning** så att det inte misstas för erosion.",
     "HSV: testa korneal sensibilitet (bomullsspets, jämför blinkreflex).",
     "Fotoelektrisk: ofta behövs en droppe lokalbedövning (t.ex. tetrakain) för att kunna undersöka; evertera.",
     "Ögonmottagning: spaltlampa (ljusväg), **kornealskrap för odling** vid bakteriell keratit, tryckmätning."
    ],
    "beh": [
     "**Allvarlig bakteriell**: två antibiotikadroppar (Oftaquix x 24 och Zinacef x 24), droppar **varje timme** även nattetid – ofta inläggning; sätt ut den ena vid odlingssvar. Lindrigare: en antibiotikadroppe i lägre dos. Efter några dagar steroiddroppar mot ärrbildning.",
     "**Chloromycetin ska inte ges till kontaktlinsbärare med keratit** (pseudomonasrisk).",
     "**Marginalkeratit**: Maxidex x 3–4 i nedtrappning eller svagare Vexol x 4.",
     "**HSV-keratit**: **Zovirax ögonsalva x 5**; inga kontaktlinser under och 2 veckor efter behandling.",
     "**Fotoelektrisk**: smörjande salva (Oculentum simplex) flera ggr/dygn."
    ],
    "hand": [
     "Bakteriell keratit: ögonläkare **inom något dygn**, kontroll efter 1–2 dygn.",
     "HSV-keratit: ögonläkare inom 1–2 dygn, kontroll ca 1 g/vecka tills epitelet läkt.",
     "Marginalkeratit: ögonläkare inom ett par dygn. Fotoelektrisk: vårdcentral; sök igen om inte bra efter 2 dygn (risk för bakteriell keratit)."
    ],
    "flagg": [
     "**Kontaktlinsbärare med rött, ont öga** – tänk bakteriell keratit; ge inte Chloromycetin.",
     "Infiltrat inom 1 mm från limbus talar för marginalkeratit; mer centralt för bakteriell, som kräver mer behandling.",
     "Centrala ärr ger bestående synnedsättning."
    ],
    "ddx": [
     [
      "t9-182",
      "Iridocyklit (irit)",
      "Inga infiltrat och inget färgupptag på kornea."
     ],
     [
      "t9-180",
      "Zoster oftalmikus",
      "Blåsor i dermatomet på pannan."
     ],
     [
      "t9-245",
      "Ytlig främmande kropp",
      "Främmande kropp på kornea eller i konjunktivalsäcken."
     ],
     [
      "t9-242",
      "Kemisk skada",
      "Utesluts med anamnes vid misstänkt fotoelektrisk keratit."
     ],
     [
      "",
      "Acanthamoebakeratit",
      "Diffdiagnos till bakteriell keratit."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 5",
     "Ögonboken – sammanfattning (T9), s. 9–12"
    ]
   },
   "card": {},
   "km": [
    "ogon:23",
    "ogon:0"
   ]
  },
  {
   "id": "t9-184",
   "name": "Trikiasis",
   "specialty": "Ögonsjukdomar",
   "sub": "Rött öga",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:24"
   ]
  },
  {
   "id": "t9-185",
   "name": "Sklerit",
   "specialty": "Ögonsjukdomar",
   "sub": "Rött öga",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Sklerit** är en inflammation i senhinnan som enligt kompendiet främst beskrivs som **differentialdiagnos till episklerit**: den drabbar äldre, ger djupare rodnad och intensivare smärta och är ofta kopplad till **reumatisk sjukdom**.",
    "klin": [
     "Oftare **äldre** patient som är **sjukare** än vid episklerit.",
     "**Djupare blånad** av bulben.",
     "**Dovare och mer intensiv smärta**.",
     "Eventuell **visuspåverkan**.",
     "Ofta associerad med **reumatiska sjukdomar**."
    ],
    "flagg": [
     "Djup, intensiv ögonsmärta hos äldre med reumatisk sjukdom – tänk sklerit snarare än ofarlig episklerit."
    ],
    "ddx": [
     [
      "t9-179",
      "Episklerit",
      "Lindrigare smärta, sektoriell ytlig rodnad, opåverkat visus, självläkande."
     ],
     [
      "t9-182",
      "Iridocyklit (irit)",
      "Ljusväg och celler i främre kammaren, miotisk pupill."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 9"
    ]
   },
   "card": {},
   "km": [
    "ogon:25"
   ]
  },
  {
   "id": "t9-186",
   "name": "Jättecellsarterit",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, hastig",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Jättecellsarterit (temporalisarterit)** är en **granulomatös nekrotiserande arterit** i stora och medelstora kärl, ofta a. temporalis och **a. ophthalmica**, hos patienter **>60 år**. Den kan ge plötslig synnedsättning och är associerad med **PMR**. Behandlingens syfte är att **rädda andra ögat**.",
    "klin": [
     "Allmänsymtom: trötthet, dålig aptit, viktnedgång, feber, proximal muskelvärk.",
     "**Tuggclaudicatio**, huvudvärk, ömhet över tinning och hjässa (hårbottenömhet).",
     "**Plötslig synnedsättning** – via **arteritisk AION**, central-/grenartärocklusion, ventrombos, **amaurosis fugax** eller ögonmuskelpareser (vanligen pupillsparande okulomotoriuspares).",
     "Papillen blek och svullen med små blödningar i kanten; **positiv afferent pupilldefekt** på drabbat öga."
    ],
    "diag": [
     "**SR och CRP**, palpera temporalisartärerna.",
     "Pupillreaktion med **swinging flashlight test** ([[t9-264|pupillreaktion]]), dilatera och oftalmoskopera.",
     "Remiss **temporalisbiopsi**."
    ],
    "beh": [
     "Vid stark misstanke **högdos steroider omgående** (iv → po med nedtrappning).",
     "Ögonboken: ge **prednisolon 1 mg/kg** innan patienten skickas vidare.",
     "Neurologikompendiet: start med **60–80 mg** kortison och titrering till lägsta möjliga dos."
    ],
    "hand": [
     "Akut. Söker patienten i primärvården → **neurolog, reumatolog eller medicinakut – inte ögonakut**.",
     "Uppföljning hos ögonläkare (ögonsjukdomen) och reumatolog (arteriten).",
     "Drabbade ögats syn är oftast förlorad; andra ögat drabbas sällan när behandling satts in."
    ],
    "flagg": [
     "**Tänk alltid TA** vid AION, artärocklusion, amaurosis fugax eller kranialnervspares hos äldre – ta **SR + CRP**.",
     "Vänta inte på biopsi – **kortison direkt** vid misstanke.",
     "Ny huvudvärk hos person >50 år är ett varningstecken."
    ],
    "ddx": [
     [
      "t9-196",
      "Icke-arteritisk AION",
      "Normal SR/CRP; riskfaktorer HTN, DM, hyperlipidemi."
     ],
     [
      "t9-193",
      "Optikusneurit",
      "Yngre patient, smärta vid ögonrörelser."
     ],
     [
      "t9-189",
      "Amotio",
      "Rullgardin/synfältsförminskning, ljusblixtar."
     ],
     [
      "t9-194",
      "Retinal vaskulär ocklusion",
      "Typiska ögonbottenfynd (cherry-red spot, blödningar)."
     ],
     [
      "t9-030",
      "Temporalisarterit (neurologi)",
      "Samma sjukdom ur neurologiskt perspektiv."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 19–20",
     "Ögonboken – sammanfattning (T9), s. 22",
     "Kompendium Neurologi (T9), s. 6",
     "Kompendium Neurologi (T9), s. 10"
    ]
   },
   "card": {},
   "km": [
    "ogon:26",
    "neuro:23",
    "ogon:0"
   ],
   "prog": [
    [
     "t8",
     "Termin 8",
     "r-gca",
     "Jättecellsarterit (GCA)"
    ]
   ]
  },
  {
   "id": "t9-187",
   "name": "Stroke och TIA",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, hastig",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**TIA** är akut insättande fokal neurologi eller **amaurosis fugax** med duration **<24 h** utan symtomvandring; **stroke** ger fokalneurologi som kvarstår >24 h. Synsymtom – **övergående synfältspåverkan, amaurosis fugax och dubbelseende** – kan vara uttryck för cerebrovaskulär sjukdom.",
    "klin": [
     {
      "h": "Synsymtom beroende på kärlområde"
     },
     "**Karotisterritoriet**: bl.a. **amaurosis fugax**, övergående pares, afasi.",
     "**Vertebralisterritoriet**: bl.a. **övergående synfältspåverkan, dubbelseende**, yrsel, balansrubbning, dysartri.",
     {
      "h": "Bakgrund"
     },
     "Patogenes oftast storkärlssjukdom från **karotisbifurkationen**, men även kardiell emboli och hemodynamisk mekanism.",
     "Risk för stroke efter TIA ca **10 % inom 7 dagar** – en ”varningsstroke”.",
     "Amaurosis fugax: smärtfri ”rullgardin” över ett öga i någon minut pga. fibrinemboli; ögonstatus normalt."
    ],
    "diag": [
     "Akut **DT hjärna** för att utesluta blödning.",
     "EKG, **karotisduplex**, hjärteko; dagen efter bl.a. glukos, HbA1c, lipider.",
     "Vid synsymtom: visus, oftalmoskopi, pupillreaktion, auskultera karotiderna, hjärtrytm; **SR + CRP** för temporalisarterit.",
     "Synfältsdefekt kan vara första tecknet på hjärnlesion – undersök synfältet ([[t9-265|konfrontation]])."
    ],
    "beh": [
     "TIA: **inläggning omedelbart**, laddningsdos **ASA 300–320 mg** alternativt klopidogrel 75 mg.",
     "Infarkt: överväg **iv trombolys ≤4½ h** från insjuknande.",
     "Sekundärprofylax: blodtryck, statin, ASA/klopidogrel 75 mg; karotiskirurgi vid symtomgivande stenos 70–99 % (inom 2 v); antikoagulation vid kardiell emboli."
    ],
    "hand": [
     "Amaurosis fugax och misstänkt TIA → **medicin- eller neuroakut**, inte ögonmottagningen.",
     "Centralartärocklusion <8 h utan förbättring → kontakta neurolog angående intraarteriell trombolys.",
     "Se [[t9-016|TIA]], [[t9-017|hjärninfarkt]] och [[t9-020|sekundärprofylax]] för neurologisk handläggning."
    ],
    "flagg": [
     "**Övergående monokulär synförlust** är en TIA tills motsatsen bevisats – hög risk för stroke.",
     "Glöm inte **temporalisarterit** hos äldre med synsymtom.",
     "Stroke är differentialdiagnos till synbanekompression vid synfältsbortfall."
    ],
    "ddx": [
     [
      "t9-208",
      "Migrän (okulär/retinal)",
      "Positiva synfenomen (flimmerskotom) som vandrar, ev. huvudvärk."
     ],
     [
      "t9-186",
      "Jättecellsarterit",
      "Äldre, allmänsymtom, förhöjd SR/CRP."
     ],
     [
      "t9-200",
      "Synbanekompression",
      "Smygande synfältsdefekt, t.ex. bitemporal hemianopsi vid hypofystumör."
     ],
     [
      "t9-194",
      "Retinal vaskulär ocklusion",
      "Bestående synförlust med ögonbottenfynd."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 2–3",
     "Ögonboken – sammanfattning (T9), s. 20",
     "Ögonboken – sammanfattning (T9), s. 23–24"
    ]
   },
   "card": {},
   "km": [
    "neuro:15",
    "ogon:27"
   ]
  },
  {
   "id": "t9-188",
   "name": "Amaurosis fugax",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, hastig",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Amaurosis fugax** är en form av **TIA** i ögat: plötslig, smärtfri, övergående synförlust på **ett öga**, oftast orsakad av en fibrinemboli från **karotisbifurkationen** som löses upp. Ögonstatus är **alltid normalt**.",
    "klin": [
     "Typisk anamnes: **”rullgardin som dras ner”** över ena ögat, sedan grått synfält i någon minut innan rullgardinen dras upp och synen blir normal.",
     "**Smärtfritt**.",
     "Recidiverande amaurosis fugax kan föregå en **stroke**.",
     "**Temporalisarterit** kan ge amaurosis fugax och ska alltid övervägas."
    ],
    "diag": [
     "Visus, oftalmoskopi, pupillreaktion – normalt.",
     "Palpera temporalisartärerna, **SR + CRP**.",
     "**Auskultera karotiderna**, kontrollera hjärtrytm.",
     "Vidare TIA-utredning (karotisduplex, EKG, hjärteko)."
    ],
    "beh": [
     "Identifiera och om möjligt behandla bakomliggande orsak (se [[t9-187|Stroke och TIA]])."
    ],
    "hand": [
     "Akut till **medicin- eller neuroakut – inte till ögonmottagningen**.",
     "Uppföljning i primärvård eller medicin. Synmässigt god prognos."
    ],
    "flagg": [
     "**Remiss är viktig** – risk för efterföljande stroke.",
     "Hos äldre: tänk **temporalisarterit** – ta SR och CRP."
    ],
    "ddx": [
     [
      "t9-208",
      "Okulär/retinal migrän",
      "Synfenomen, kan vara utan huvudvärk."
     ],
     [
      "",
      "Obskurationer vid staspapill",
      "Sekunder–minuter långa synstörningar vid lägesändring, ofta bilaterala; förhöjt ICP."
     ],
     [
      "t9-186",
      "Jättecellsarterit",
      "Allmänsymtom, tuggclaudicatio, förhöjd SR/CRP."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 23–24",
     "Kompendium Neurologi (T9), s. 2"
    ]
   },
   "card": {},
   "km": [
    "ogon:28"
   ]
  },
  {
   "id": "t9-189",
   "name": "Amotio",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, hastig",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Amotio (näthinneavlossning)** uppstår oftast när en **glaskroppsavlossning** drar upp en **retinal ruptur** så att vätska sipprar in bakom näthinnan och lyfter den. Avlossningen sprider sig in mot centrum; når den **fovea** blir synen sällan bra igen.",
    "klin": [
     "Föregås ofta av **flugor, ”spindelväv” och ljusblixtar** (drag i näthinnan vid glaskroppsavlossning).",
     "**Synfältsförminskning** (skugga/rullgardin); visus ca 0,1 om fovea är avlossad.",
     "Riskfaktor: **myopi** (stort, långt öga med utsträckt näthinna).",
     "Kan även bli traktionsamotio vid proliferativ diabetesretinopati."
    ],
    "diag": [
     "Visus, grov synfältskontroll, **dilatera och oftalmoskopera**.",
     "Ögonmottagning: dilatera och undersök ögonbotten i mikroskop.",
     "Vid tät glaskroppsblödning: **ultraljud** för att utesluta amotio."
    ],
    "beh": [
     "**Halvakut operation** så snart som möjligt.",
     "Utvändigt: **cerklage** och plomb vid rupturen, dränage av subretinal vätska.",
     "Alternativt **vitrektomi** med dränage inifrån."
    ],
    "hand": [
     "Akut – **snabbt till ögonläkare**; snabb handläggning kan rädda synen.",
     "Prognos beror på hur stor del som lossnat – från normalt visus till ledsyn."
    ],
    "flagg": [
     "Nya **flugor + ljusblixtar** – dilatera och leta ruptur; informera om amotiosymtom vid glaskroppsavlossning.",
     "**Hotad makula/fovea** – ju snabbare operation desto bättre.",
     "Myopa har ökad risk."
    ],
    "ddx": [
     [
      "t9-211",
      "Glaskroppsavlossning",
      "Flugor/blixtar utan synfältsbortfall; ingen ruptur."
     ],
     [
      "t9-194",
      "Retinal vaskulär ocklusion",
      "Grenvenstrombos/grenartäremboli med typiska ögonbottenfynd."
     ],
     [
      "t9-191",
      "Glaskroppsblödning",
      "Plötslig dimsyn och dålig insyn; kan ha ruptur som orsak."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 14–15",
     "Ögonboken – sammanfattning (T9), s. 21"
    ]
   },
   "card": {},
   "km": [
    "ogon:30",
    "ogon:0"
   ]
  },
  {
   "id": "t9-190",
   "name": "Endoftalmit",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, hastig",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:31"
   ]
  },
  {
   "id": "t9-191",
   "name": "Glaskroppsblödning",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, hastig",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Glaskroppsblödning** ger plötslig synnedsättning. Den beror oftast på **proliferativ diabetesretinopati** eller på en **retinal ruptur** som går över ett kärl; hos icke-diabetiker är den därför mer akut eftersom ruptur och amotio måste misstänkas.",
    "klin": [
     "**Plötslig dimsyn/”blindhet”**, ofta föregången av **flugor och blixtar**.",
     "Dålig insyn i ögat vid oftalmoskopi; **normal pupillreaktion**.",
     "Diabetiker: trolig orsak är retinopatin; om patienten är **scatterbehandlad** är risken för amotio liten.",
     "Icke-diabetiker: trolig orsak **retinal ruptur** över ett kärl."
    ],
    "diag": [
     "Visus, pupillreaktion, oftalmoskopi.",
     "**Ultraljud** när näthinnan inte kan ses, för att utesluta amotio."
    ],
    "beh": [
     "Beror på orsak.",
     "Ruptur med litet avlossat område: avvakta ett par dagar; klarnar inte blödningen → **laser runt rupturen**; tillväxt/ej klarnande → **vitrektomi + laser**.",
     "Diabetiker: vänta ca **en månad** för att se om blödningen resorberas, annars vitrektomi."
    ],
    "hand": [
     "Akut – **till ögonläkare fort**; uppföljning på ögonmottagning.",
     "God prognos vid lyckad laserbehandling av ruptur."
    ],
    "flagg": [
     "Glaskroppsblödning hos **icke-diabetiker** = misstänkt ruptur/amotio tills motsatsen visats.",
     "Tät blödning döljer näthinnan – **ultraljud** behövs."
    ],
    "ddx": [
     [
      "t9-189",
      "Amotio",
      "Synfältsbortfall; kan föreligga samtidigt."
     ],
     [
      "t9-194",
      "Retinal vaskulär ocklusion",
      "Centralvenstrombos/artärocklusion med typiska fynd."
     ],
     [
      "t9-196",
      "Ischemisk optikusneuropati",
      "Svullen papill, RAPD och färgsinnesdefekt."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 21–22"
    ]
   },
   "card": {},
   "km": [
    "ogon:32"
   ]
  },
  {
   "id": "t9-192",
   "name": "Makulablödning och makulaödem",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, hastig",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Makulaödem** och **makulablödning** ger central synnedsättning och förekommer i kompendiet som komplikation till flera näthinne- och inflammationstillstånd, framför allt **diabetesretinopati, retinal venocklusion, hypertensiv retinopati, uveit och våt AMD**.",
    "klin": [
     {
      "h": "Orsaker enligt kompendiet"
     },
     "**Diabetesretinopati**: svårbehandlat makulaödem är en viktig orsak till synnedsättning.",
     "**Gren- och centralvenstrombos**: blödningar och ödem i ögonbotten, även foveanära.",
     "**Hypertensiv retinopati**: makulaödem, ibland hårda exsudat i stjärnform runt fovea (**”macular star”**).",
     "**Irit och bakre uveit**: makulaödem ger synnedsättning.",
     "**Våt AMD**: kärlnybildning under näthinnan som läcker och ger svullnad och blödning.",
     "Makulablödning nämns som differentialdiagnos till temporalisarterit."
    ],
    "diag": [
     "Visus, dilatera och oftalmoskopera makula.",
     "**OCT** ger tvärsnitt av ögonbotten; fluoresceinangiografi inför behandling (t.ex. vid våt AMD och diabetesretinopati)."
    ],
    "beh": [
     "Diabetesretinopati: foveanära förändringar och makulaödem kan kräva fokal laser (**”grid”**).",
     "Våt AMD: intravitreal **kärltillväxthämmare** (Lucentis).",
     "Venocklusion: följs för makulaödem; behandla underliggande DM, HTN, hyperlipidemi.",
     "Hypertensiv retinopati: sänk blodtrycket."
    ],
    "flagg": [
     "Fråga om **raka linjer ser krokiga ut** – tecken på att torr AMD övergår i våt."
    ],
    "ddx": [
     [
      "t9-201",
      "Åldersrelaterad makuladegeneration",
      "Drusen, central synförlust; våt form ger läckage/blödning."
     ],
     [
      "t9-194",
      "Retinal vaskulär ocklusion",
      "Blödningar och ödem i flera kvadranter."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 8–9",
     "Ögonboken – sammanfattning (T9), s. 17–19",
     "Ögonboken – sammanfattning (T9), s. 21–22"
    ]
   },
   "card": {},
   "km": [
    "ogon:33"
   ]
  },
  {
   "id": "t9-193",
   "name": "Optikusneurit",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, hastig",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Optikusneurit** är en inflammation i synnerven som drabbar yngre och är vanligare vid **MS**. Den är oftast **unilateral** och ger synnedsättning med **smärta vid ögonrörelser**. Inflammationen kan sitta bakom papillen (**retrobulbär neurit, 2/3**) eller i papillen (**papillit, 1/3**).",
    "klin": [
     "Lätt till djup synnedsättning som utvecklas under några dygn; ”ser genom en plastfilm”.",
     "**Smärta och ömhet vid ögonrörelser**.",
     "**Nedsatt färgseende** (dovare färger, särskilt rött) och **positiv RAPD** – kan kvarstå länge efter utläkning.",
     "Retrobulbär neurit: normal papill; papillit: svullen, hyperemisk, dåligt avgränsad papill.",
     "Läker oftast ut på 1–3 månader; **Uhthoffs fenomen** (suddig syn vid feber/träning) kan kvarstå.",
     "Ca **20 %** av MS debuterar med optikusneurit; ca hälften av dem med optikusneurit utvecklar MS inom 15 år."
    ],
    "diag": [
     "Visus, **färgseende** (rött, Ishihara – [[t9-274|färgsinnesundersökning]]), **swinging flashlight test** ([[t9-264|pupillreaktion]]), oftalmoskopi.",
     "Utredning för MS – remiss till neurolog ([[t9-068|MS, symtom och diagnostik]])."
    ],
    "beh": [
     "Oftast **expektans** vid lättare synnedsättning (självläkning).",
     "Vid djup synnedsättning (visus **0,1–0,2**) → **iv pulsbehandling med kortison** via neurolog."
    ],
    "hand": [
     "Ögonläkare inom ett par dagar; följs av neurooftalmolog tills normalt visus.",
     "Recidiverar ofta vid MS och kan leda till progredierande optikusatrofi."
    ],
    "flagg": [
     "Ung patient med ensidig synnedsättning och ögonrörelsesmärta – tänk **MS** och remittera till neurolog.",
     "Papillit: överväg infektiösa (borrelia), autoimmuna (SLE, UC) och toxiska (metanol, bly) orsaker."
    ],
    "ddx": [
     [
      "t9-196",
      "Ischemisk optikusneuropati",
      "Drabbar oftare äldre; plötslig, smärtfri synnedsättning med papillsvullnad och strimblödningar."
     ],
     [
      "",
      "Centralserös retinopati",
      "Suddig fläck centralt."
     ],
     [
      "t9-186",
      "Jättecellsarterit",
      "Äldre, förhöjd SR/CRP."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 20–21",
     "Kompendium Neurologi (T9), s. 26"
    ]
   },
   "card": {},
   "km": [
    "ogon:34",
    "neuro:52"
   ]
  },
  {
   "id": "t9-194",
   "name": "Retinal vaskulär ocklusion",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, hastig",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Retinala vaskulära ocklusioner** omfattar **centralartärocklusion, centralvenstrombos och grenvenstrombos**. De ger plötslig, smärtfri synnedsättning på ett öga och är kopplade till **ateroskleros, DM, hypertoni och hjärt-kärlsjukdom**.",
    "klin": [
     {
      "h": "Centralartärocklusion"
     },
     "Ovanlig; 80 % aterosklerosrelaterad trombos i centralartären, även emboli (karotis, hjärta) och **temporalisarterit**.",
     "**Plötslig, djup, bestående synförlust**; positiv RAPD; ischemiskt vit retina med **cherry-red spot**.",
     {
      "h": "Centralvenstrombos"
     },
     "Nästan alltid unilateral; plötslig, snabbt progredierande synnedsättning, lågt visus, ingen värk.",
     "Fläck- och flamblödningar i **alla kvadranter**, ödem, bomullsexsudat, papillödem. Vanligare vid glaukom.",
     {
      "h": "Grenvenstrombos"
     },
     "Mer perifert i kärlträdet → mindre syninskränkning, **skugga i delar av synfältet**; bättre prognos. Blödningar och ödem i en sektor."
    ],
    "diag": [
     "Visus, pupillreaktion, dilatera och oftalmoskopera.",
     "Artärocklusion: **SR och CRP** (temporalisarterit).",
     "Venocklusion: **blodtryck och blodprover**; ögonmottagning: tryck och senare fluoresceinangiografi."
    ],
    "beh": [
     "**Centralartärocklusion**: bulbmassage, överväg Diamox eller paracentes; **<8 h** utan förbättring → kontakta neurolog om intraarteriell trombolys.",
     "**Venocklusion**: ingen specifik behandling (studier på intravitreala kärltillväxthämmare); laser vid kärlproliferation.",
     "Behandla **DM, HTN, hyperlipidemi** för att skydda andra ögat."
    ],
    "hand": [
     "Akut till ögonläkare.",
     "Venocklusion följs månadsvis initialt, sedan var 3:e och var 6:e månad – risk för **neovaskularisation och sekundärglaukom**.",
     "Artärocklusion med kort anamnes → akuten för riskfaktorutredning."
    ],
    "flagg": [
     "Artärocklusion hos äldre – **uteslut temporalisarterit** (SR, CRP).",
     "Centralvenstrombos kan ge **sekundärglaukom** – följ trycket.",
     "Prognosen för centralocklusionerna är dålig; det som är förlorat är förlorat."
    ],
    "ddx": [
     [
      "t9-189",
      "Amotio",
      "Synfältsförminskning, ofta föregången av blixtar/flugor."
     ],
     [
      "t9-196",
      "Ischemisk optikusneuropati",
      "Svullen papill med strimblödningar, utan utbredda retinala blödningar."
     ],
     [
      "t9-188",
      "Amaurosis fugax",
      "Övergående synförlust, normalt ögonstatus."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 18–20"
    ]
   },
   "card": {},
   "km": [
    "ogon:35",
    "ogon:0"
   ]
  },
  {
   "id": "t9-195",
   "name": "Bakre uveit",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, hastig",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Bakre uveit** (koroidit) är en ovanlig inflammation i bakre uvea som ger **smygande grumlingar i synfältet och/eller synnedsättning**, oftast **utan smärta**. Den kan vara uni- eller bilateral och orsakas t.ex. av **sarkoidos, toxoplasma, candida** eller vara idiopatisk.",
    "klin": [
     "Besvär sedan några veckor: **fläckar som rör sig** i synfältet, lätt nedsatt visus.",
     "Celler och grumling i **glaskroppen**; ibland **makulaödem** och gulaktiga retinala infiltrat.",
     "Ingen ljusväg, klar lins."
    ],
    "diag": [
     "Visus, dilatera och oftalmoskopera.",
     "Ögonmottagning: tryckmätning och ev. provtagning för systemsjukdomar."
    ],
    "beh": [
     "Beror på orsak: **steroider** po, subkonjunktivalt eller intravitrealt."
    ],
    "hand": [
     "Ögonläkare inom någon vecka; följs regelbundet tills lugnt.",
     "Prognos beror på orsak; **recidiverar ofta**."
    ],
    "flagg": [
     "Smärtfria grumlingar i synfältet kan vara uveit – inte bara ofarliga glaskroppsförändringar.",
     "Tänk på systemsjukdom (sarkoidos) och infektion."
    ],
    "ddx": [
     [
      "t9-211",
      "Glaskroppsavlossning",
      "Flugor/blixtar utan inflammation."
     ],
     [
      "t9-197",
      "Katarakt",
      "Linsgrumling, långsam dimsyn."
     ],
     [
      "t9-201",
      "Åldersrelaterad makuladegeneration",
      "Drusen, central synförlust."
     ],
     [
      "",
      "Lymfom",
      "Differentialdiagnos enligt kompendiet."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 8",
     "Ögonboken – sammanfattning (T9), s. 18"
    ]
   },
   "card": {},
   "km": [
    "ogon:36"
   ]
  },
  {
   "id": "t9-196",
   "name": "Ischemisk optikusneuropati",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, hastig",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Anterior ischemisk optikusneuropati (AION)** är ett relativt ovanligt, **unilateralt** tillstånd med plötslig synnedsättning pga. ischemi i synnervshuvudet. Det delas i **icke-arteritisk** (ocklusion av de korta bakre ciliärartärerna) och **arteritisk** (vid temporalisarterit) – handläggningen skiljer sig.",
    "klin": [
     "**Plötslig ensidig synnedsättning**, lätt till allvarlig; svårare grad ger mer färgsinnesdefekt.",
     "Icke-arteritisk: 45–>65 år; riskfaktorer **HTN, DM, hyperlipidemi**.",
     "**Diffus eller sektoriell papillsvullnad** med små strimblödningar; med tiden blek, atrofisk papill.",
     "**Positiv afferent pupilldefekt**, avvikande Ishiharatest."
    ],
    "diag": [
     "Visus, **swinging flashlight test**, oftalmoskopi ([[t9-266|oftalmoskopi av papillen]]).",
     "**SR och CRP** för att utesluta arteritisk AION."
    ],
    "beh": [
     "Icke-arteritisk: ingen behandling; åtgärda riskfaktorer.",
     "Arteritisk: omedelbar högdos kortison (se [[t9-186|Jättecellsarterit]])."
    ],
    "hand": [
     "Akut till ögonläkare; ev. intyg.",
     "Prognos dålig – synen förbättras inte; **30–50 %** får AION på andra ögat inom 1 år."
    ],
    "flagg": [
     "Missa inte **arteritisk AION** – ta alltid SR och CRP; kortison räddar andra ögat.",
     "Kort latens till andra ögat vid arterit."
    ],
    "ddx": [
     [
      "t9-193",
      "Optikusneurit",
      "Yngre, smärta vid ögonrörelser."
     ],
     [
      "t9-194",
      "Retinal vaskulär ocklusion",
      "Centralartärocklusion/centralvenstrombos med retinala fynd."
     ],
     [
      "t9-189",
      "Amotio",
      "Synfältsbortfall, normal papill."
     ],
     [
      "t9-191",
      "Glaskroppsblödning",
      "Dålig insyn, normal pupillreaktion."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 22–23",
     "Ögonboken – sammanfattning (T9), s. 19"
    ]
   },
   "card": {},
   "km": [
    "ogon:37"
   ]
  },
  {
   "id": "t9-197",
   "name": "Katarakt",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, långsam",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Katarakt (gråstarr)** är grumling av linsen när linsfibrerna, som bildas hela livet och packas allt tätare, förlorar sin regelbundna organisation. Vanligast är **åldersrelaterad (senil)** katarakt; den kan även vara kongenital.",
    "klin": [
     "**Suddig syn, bländningsbesvär**, förändrat färgseende; ibland **monokulärt dubbelseende**.",
     "Bilkörning i mörker blir besvärlig; **successivt ökande myopi** är ett tecken.",
     "Oftast bilateral; syn från normal till endast ljusperception.",
     "Typer: **nukleär** (kärnskleros, bärnstensfärgad), **kortikal** (ekrar), **bakre subkapsulär**.",
     "Riskfaktorer: UV-ljus, strålning, **diabetes**, läkemedel (**steroider**, cytostatika)."
    ],
    "diag": [
     "Visus, prova med minusglas och **stenopeiskt hål**.",
     "Undersökning i **genomfallande ljus** – nedsatt röd reflex ([[t9-267|genomfallande ljus]]).",
     "Ögonmottagning: mikroskopi, dilatation, främre och bakre segment."
    ],
    "beh": [
     "**Operation**: **fakoemulsifikation** – ultraljudsprob skakar sönder linsen som sugs ut via ca 2 mm snitt vid limbus, och en **intraokulär lins (IOL)** sätts in ([[t9-275|kataraktoperation]]).",
     "Även vid normalt visus kan besvärande bländning och dubbelseende vara operationsindikation."
    ],
    "hand": [
     "Inte akut; vårdnivå ögonläkare; postop kontroll efter några veckor.",
     "**Efterstarr** (5–50 %) åtgärdas med **YAG-laser** som öppnar bakre kapseln."
    ],
    "flagg": [
     "**Endoftalmit** efter operation är sällsynt (<0,3 promille) men synhotande.",
     "Stenopeiskt hål förbättrar inte synen vid makuladegeneration – hjälper skilja diagnoserna."
    ],
    "ddx": [
     [
      "t9-201",
      "Åldersrelaterad makuladegeneration",
      "Central synförlust; skiljs med stenopeiskt hål."
     ],
     [
      "t9-199",
      "Refraktionsproblem och presbyopi",
      "Korrigeras med glas."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 3",
     "Ögonboken – sammanfattning (T9), s. 15–16"
    ]
   },
   "card": {},
   "km": [
    "ogon:38",
    "ogon:119"
   ]
  },
  {
   "id": "t9-198",
   "name": "Kroniskt glaukom",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, långsam",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Kroniskt glaukom** (grönstarr), främst **primärt öppenvinkelglaukom (PÖG)**, är en långsamt progredierande **synnervsskada** med ökad **exkavation** av papillen och progredierande **synfältsdefekter**, ofta men inte alltid med högt ögontryck (>22 mmHg). Drabbar 1–2 % >50 år och 5 % >75 år.",
    "klin": [
     "**Inga symtom** – synfältsdefekterna börjar perifert och **visus förblir bevarat** länge.",
     "Vanligen bilateralt; ärftligt, ökar med åldern.",
     {
      "h": "Indelning"
     },
     "**Högtrycksglaukom**: högt tryck + synfältsdefekt. **Lågtrycksglaukom**: normalt tryck + synfältsdefekt.",
     "**Okulär hypertension**: högt tryck utan synfältsdefekt. **Sekundärglaukom**: t.ex. efter venocklusion."
    ],
    "diag": [
     "Primärvård: visus, grov synfältsundersökning, **oftalmoskopi av papillen**.",
     "Ögonmottagning: **tryckmätning**, papill och retina, **gonioskopi** (kammarvinkel), **perimetri** ([[t9-278|perimetri]])."
    ],
    "beh": [
     "Mål: **sänka ögontrycket** genom ökat avflöde och/eller minskat tillflöde – livslångt.",
     "Droppar: **betablockare, prostaglandiner, karbanhydrashämmare, sympatomimetika, parasympatomimetika**.",
     "Laserbehandling för bättre avflöde; otillräckligt → **trabekulektomi** eller djup sklerektomi."
    ],
    "hand": [
     "Följs regelbundet hos ögonläkare (tryck, synfält, papill).",
     "**Förstagradssläktingar** kontrolleras från 40–50 års ålder och sedan vartannat år.",
     "Kan leda till indragning av körkort."
    ],
    "flagg": [
     "Skadorna är **irreversibla** – målet är att bromsa progressionen.",
     "Normalt visus utesluter inte avancerat glaukom.",
     "Steroiddroppar kan höja ögontrycket – ögonläkarkontakt."
    ],
    "ddx": [
     [
      "t9-181",
      "Akut glaukom",
      "Akut smärtsamt rött öga, mycket högt tryck."
     ],
     [
      "t9-189",
      "Amotio",
      "Akut synfältsbortfall."
     ],
     [
      "t9-194",
      "Retinal vaskulär ocklusion",
      "Grenvenstrombos/grenartäremboli."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 3",
     "Ögonboken – sammanfattning (T9), s. 16–17",
     "Ögonboken – sammanfattning (T9), s. 8"
    ]
   },
   "card": {},
   "km": [
    "ogon:39"
   ]
  },
  {
   "id": "t9-199",
   "name": "Refraktionsproblem och presbyopi",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, långsam",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Refraktionsfel** innebär att ögats optik inte fokuserar bilden på näthinnan: **myopi** (närsynthet), **hyperopi** (långsynthet) och **astigmatism**. **Presbyopi** är åldersbetingad förlust av ackommodationsförmågan när linsen stelnar.",
    "klin": [
     "**Myopi**: för stort/långt öga, bilden bryts framför näthinnan → suddigt på långt håll; upptäcks hos barn/unga.",
     "**Hyperopi**: litet/kort öga, bilden bryts bakom näthinnan → suddigt på nära håll (vid kraftig även långt). Barn är ofta hyperopa och ackommoderar; astenopiska besvär möjliga.",
     "Barn med kraftig hyperopi kan få **esotropi** (inåtskelning) via ackommodation–konvergens → risk för **amblyopi**.",
     "**Astigmatism**: oregelbunden ljusbrytning pga. korneas/linsens form; oregelbunden typ vid kornealsår eller **keratokonus**.",
     "**Presbyopi**: suddigt på nära håll, håller texten längre bort; läsglasålder **45–50 år**, tidigare hos hyperopa."
    ],
    "diag": [
     "Visus och utprovning av **minusglas** (myopi) respektive **plusglas** (hyperopi).",
     "Ögonmottagning: **skiaskopi** hos barn <8 år, autorefraktion; cover test för skelning ([[t9-271|covertest]])."
    ],
    "beh": [
     "Glasögon eller kontaktlinser; regelbunden astigmatism korrigeras med glasögon.",
     "Presbyopi: **läsglasögon**, initialt ca **+1 dioptri**, ökar med åldern.",
     "Modern kirurgi kan slipa hornhinnan för att korrigera brytningsfel."
    ],
    "hand": [
     "Inte akut. Vuxna till **optiker**; barn <8 år till **ögonläkare**.",
     "Barn med hyperopi och skelning ska snabbt till ögonläkare."
    ],
    "flagg": [
     "Skelande barn med hyperopi – risk för **amblyopi** ([[t9-218|amblyopi]]).",
     "Successivt ökande myopi hos äldre kan vara tecken på **katarakt**."
    ],
    "ddx": [
     [
      "t9-197",
      "Katarakt",
      "Linsgrumling, bländning, nedsatt röd reflex."
     ],
     [
      "t9-201",
      "Åldersrelaterad makuladegeneration",
      "Central synförlust som inte korrigeras med glas."
     ],
     [
      "t9-203",
      "Keratokonus",
      "Ökande myopi och oregelbunden astigmatism från puberteten."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 3",
     "Ögonboken – sammanfattning (T9), s. 13–14"
    ]
   },
   "card": {},
   "km": [
    "ogon:40"
   ]
  },
  {
   "id": "t9-200",
   "name": "Synbanekompression",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, långsam",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Synbanekompression** innebär att en process i hjärnan trycker på synbanorna och ger **synfältsdefekter**, som kan vara första symtomet. Vanlig orsak är **hypofystumör** som trycker på **chiasma** nedifrån och ger **bitemporal hemianopsi**.",
    "klin": [
     "Bitemporal defekt börjar ofta **uppifrån temporalt** och går sedan nedanför horisontallinjen.",
     "Ögonstatus normalt, men långvarig kompression → **optikusatrofi** med ställvis blek papill.",
     "Hypofystumör kan också ge endokrina symtom (prolaktinom: amenorré, galaktorré; akromegali; Cushing).",
     "Kraniofaryngeom ger huvudvärk, endokrina rubbningar och synstörningar."
    ],
    "diag": [
     "Visus, grov synfältsundersökning ([[t9-265|konfrontation]]), oftalmoskopi.",
     "Ögonmottagning: synfält med **Humphrey (HFA)** och ögonmotorik.",
     "Hypofystumör: primärt DT, därefter obligat **MR**."
    ],
    "beh": [
     "Behandla orsaken.",
     "Prolaktinom: bromokriptin (dopaminagonist); övriga hypofystumörer: i första hand **transsfenoidal kirurgi**; **akut operation vid hotande syn**."
    ],
    "hand": [
     "Akut till ögonläkare; uppföljning hos neurolog och ögonläkare för att följa synfälten och bedöma operation (t.ex. meningeom).",
     "Prognos beror på hur länge kompressionen pågått – defekter kan bli bestående."
    ],
    "flagg": [
     "**Bitemporal hemianopsi** = chiasmaprocess tills motsatsen bevisats.",
     "Normal ögonbotten utesluter inte kompression."
    ],
    "ddx": [
     [
      "t9-187",
      "Stroke och TIA",
      "Akut debut och ofta annan fokalneurologi."
     ],
     [
      "t9-238",
      "Dermatochalasis",
      "Hängande ögonlockshud ger övre synfältsdefekt."
     ],
     [
      "t9-198",
      "Kroniskt glaukom",
      "Perifera defekter med glaukomatös papillexkavation."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 24",
     "Kompendium Neurologi (T9), s. 38–39"
    ]
   },
   "card": {},
   "km": [
    "ogon:41"
   ]
  },
  {
   "id": "t9-201",
   "name": "Åldersrelaterad makuladegeneration",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, långsam",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Åldersrelaterad makuladegeneration (AMD)** är en degeneration av gula fläcken som ger **central synförlust** men **bevarad periferi** – leder därför inte till total blindhet. Den delas i **torr (atrofisk)** och **våt (exsudativ)** form.",
    "klin": [
     "Oftast bilateral, ett öga ofta mer drabbat; patienten ser inte det i blickfokus (t.ex. ansiktet) men omgivningen.",
     "Pigmentepitelet omsätts inte under livet; restprodukter ackumuleras → **drusen** (små gula prickar), atrofi och kärlnybildning.",
     "Riskfaktorer: **hög ålder, rökning, ärftlighet, ljus hy**.",
     "**Torr**: vanligast, långsamt progredierande, kan övergå i våt.",
     "**Våt**: kärlnybildning under näthinnan som läcker och blöder; avancerar snabbare.",
     "**Krokseende** (raka linjer ser krokiga ut) kan tyda på övergång till våt form."
    ],
    "diag": [
     "Visus, oftalmoskopi av makula.",
     "Ögonmottagning: dilatera, ögonbotten, tryck; vid våt typ **fluoresceinangiografi** och **OCT**."
    ],
    "beh": [
     "Torr: **ingen behandling**.",
     "Våt: **intravitreal injektion av kärltillväxthämmare** (Lucentis) – synen kan bevaras eller förbättras."
    ],
    "hand": [
     "Inte akut; ögonläkare. Våt form följs regelbundet under behandling.",
     "Remiss till **syncentral** för hjälpmedel ([[t9-252|synrehabilitering]])."
    ],
    "flagg": [
     "Fråga alltid om **krokseende** – nytillkommet kräver snabb bedömning (våt AMD).",
     "Våt AMD utan behandling har dålig prognos."
    ],
    "ddx": [
     [
      "t9-197",
      "Katarakt",
      "Linsgrumling; synen förbättras med stenopeiskt hål."
     ],
     [
      "t9-212",
      "Krokseende",
      "Symtom som kan tyda på våt AMD."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 17–18",
     "Ögonboken – sammanfattning (T9), s. 14",
     "Ögonboken – sammanfattning (T9), s. 16"
    ]
   },
   "card": {},
   "km": [
    "ogon:42"
   ]
  },
  {
   "id": "t9-202",
   "name": "Hornhinneödem",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, långsam",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Hornhinneödem (kornealödem)** är svullnad i hornhinnan när **endotelets pumpfunktion** sviktar. Endotelceller nybildas inte; vid skada breder kvarvarande celler ut sig, och när de inte orkar längre blir pumpen otillräcklig.",
    "klin": [
     "Orsaker: **ögonkirurgi, slag mot ögat, korneala dystrofier** (laserkirurgi på hornhinnan verkar inte skada endotelet).",
     "Ger **disig/rökig kornea** och **nedsatt visus**.",
     "Vid **akut glaukom** ger det höga trycket kraftigt epitelödem och stromalt ödem med veck i Descemets membran."
    ],
    "flagg": [
     "Disig kornea i ett rött, smärtsamt öga med halvvid pupill – tänk **akut glaukom**."
    ],
    "ddx": [
     [
      "t9-181",
      "Akut glaukom",
      "Akut kornealödem med mycket högt tryck."
     ],
     [
      "t9-203",
      "Keratokonus",
      "Annan hornhinnesjukdom med synnedsättning (toppig hornhinna)."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 2",
     "Ögonboken – sammanfattning (T9), s. 5",
     "Ögonboken – sammanfattning (T9), s. 12"
    ]
   },
   "card": {},
   "km": [
    "ogon:43"
   ]
  },
  {
   "id": "t9-203",
   "name": "Keratokonus",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, långsam",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Keratokonus** (toppig hornhinna) är den vanligaste hornhinnedeformiteten, men ovanlig. Hornhinnan blir successivt **konformad och tunnare**, vilket ger ökande myopi och **oregelbunden astigmatism**.",
    "klin": [
     "Ofta **bilateral**, debuterar i **puberteten** och progredierar sakta.",
     "Genetiskt betingat hos ca 10 %; associerat med **Downs syndrom, atopisk dermatit** och kollagensjukdomar (t.ex. Marfan).",
     "Symtom: ökande myopi och framför allt **oregelbunden astigmatism**."
    ],
    "diag": [
     "Inspektion – vid kraftig form syns den toppiga hornhinnan.",
     "Ögonmottagning: Javal-apparat, **topografi** (t.ex. Orbscan, Pentacam)."
    ],
    "beh": [
     "Unga patienter: **korneal crosslinking (CXL)** – UV-ljus binder ihop kollagenet så att progressionen stannar.",
     "När progressionen avstannat: **hårda kontaktlinser**.",
     "Om inget hjälper: **hornhinnetransplantation**."
    ],
    "hand": [
     "Inte akut. Följs hos optiker, därefter ögonläkare tillsammans med optiker."
    ],
    "flagg": [
     "Ökande oregelbunden astigmatism hos tonåring – tänk keratokonus.",
     "Toppig hornhinna kan också vara en senkomplikation efter refraktiv laserkirurgi."
    ],
    "ddx": [
     [
      "t9-199",
      "Refraktionsproblem och presbyopi",
      "Regelbunden astigmatism, korrigeras med glasögon."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 14"
    ]
   },
   "card": {},
   "km": [
    "ogon:44"
   ]
  },
  {
   "id": "t9-204",
   "name": "Ärftliga retinala degenerationer",
   "specialty": "Ögonsjukdomar",
   "sub": "Synnedsättning, långsam",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:45"
   ]
  },
  {
   "id": "t9-205",
   "name": "Ögonmuskelpares",
   "specialty": "Ögonsjukdomar",
   "sub": "Diplopi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Ögonmuskelpareser** orsakade av skada på **n. abducens (VI), n. trochlearis (IV) eller n. oculomotorius (III)** ger **binokulärt dubbelseende**. Hos äldre med riskfaktorer är orsaken oftast **mikrovaskulär**, men intrakraniella processer, trauma, temporalisarterit och borrelia måste övervägas.",
    "klin": [
     {
      "h": "Abducenspares (VI)"
     },
     "Relativt vanlig; ögat kan inte abduceras förbi mittlinjen; horisontellt dubbelseende som ökar mot den paretiska sidan. Kan bero på **förhöjt ICP**.",
     {
      "h": "Trochlearispares (IV)"
     },
     "Ovanlig; ofta kongenital eller traumatisk. Vertikal diplopi, särskilt vid blick nedåt; **huvudet lutas mot friska sidan**; positivt Bielschowskys test.",
     {
      "h": "Okulomotoriuspares (III)"
     },
     "Komplett: ögat utåt-nedåt, **total ptos, mydriasis**, ackommodationsförlust.",
     "**Pupillengagemang** (aneurysm, trauma med blödning – pupillfibrerna löper ytligt) vs **pupillsparande** (mikrovaskulär genes, DM/HTN).",
     "Sinus cavernosus-patologi drabbar III, IV, VI och V1 samtidigt."
    ],
    "diag": [
     "Ögonmotorik ([[t9-263|motilitetsundersökning]]), **pupillreaktion**, covertest, neurostatus.",
     "**B-glukos och blodtryck**; överväg borreliaserologi, **SR och CRP** (temporalisarterit).",
     "Ögonmottagning: **Lees skärm** för dokumentation och uppföljning.",
     "Yngre/utan riskfaktorer eller nya symtom → neurologremiss och **MRT**."
    ],
    "beh": [
     "Mikrovaskulär pares går i **spontan regress** inom någon månad (nästan 100 %); vid trauma ca 50 %.",
     "Besvärande diplopi: **Fresnelprisma** på glaset eller ocklusion av ena ögat (vid III-pares räcker prisma inte).",
     "Kvarstående pares efter ca 6 (–12) månader → **skelningskirurgi**."
    ],
    "hand": [
     "Akut till ögonläkare eller neurolog; **komplett III-pares, ung patient eller partiell pares utan riskfaktorer → akutremiss**.",
     "Pupillsparande inkomplett III-pares hos patient med riskfaktorer: expektans, kontrollera pupillen efter 1–2 dagar och kontroll om 1 månad.",
     "Patienten får **inte köra bil** med dubbelseende eller ett öga täckt."
    ],
    "flagg": [
     "**Okulomotoriuspares med vid pupill** – tänk **aneurysm**, akut handläggning.",
     "Abducenspares kan vara tecken på **förhöjt intrakraniellt tryck** ([[t9-223|förhöjt ICP]]).",
     "Glöm inte **temporalisarterit** hos äldre."
    ],
    "ddx": [
     [
      "t9-094",
      "Myastenia gravis",
      "Varierande besvär, värre kvällstid, ptos; påverkar aldrig pupillen."
     ],
     [
      "t9-239",
      "Exoftalmus (endokrin oftalmopati)",
      "Exoftalmus och restriktiv motilitetsstörning."
     ],
     [
      "",
      "Horners syndrom",
      "Ptos och mios men ingen ögonmuskelpares."
     ],
     [
      "t9-246",
      "Blow-out",
      "Trauma, inskränkt ögonrörlighet och diplopi vid orbitabottenfraktur."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 4",
     "Ögonboken – sammanfattning (T9), s. 26–27",
     "Kompendium ÖNH (T9), s. 23"
    ]
   },
   "card": {},
   "km": [
    "ogon:46",
    "ogon:1"
   ]
  },
  {
   "id": "t9-206",
   "name": "Internukleär oftalmoplegi",
   "specialty": "Ögonsjukdomar",
   "sub": "Diplopi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:47"
   ]
  },
  {
   "id": "t9-207",
   "name": "Monokulär diplopi",
   "specialty": "Ögonsjukdomar",
   "sub": "Diplopi",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:48"
   ]
  },
  {
   "id": "t9-208",
   "name": "Migrän",
   "specialty": "Ögonsjukdomar",
   "sub": "Synfenomen",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Migrän** är en ärftlig primär huvudvärk med återkommande attacker på **4–72 h**, ofta ensidig och pulserande, med illamående och ljus-/ljudkänslighet. Hos **15–20 %** föregås attacken av **aura**, vanligast **flimmerskotom** – ett synfenomen som är viktigt att skilja från ögonsjukdom och TIA.",
    "klin": [
     "Minst två av: **ensidig** (kan växla sida), **pulserande**, måttlig–svår intensitet, **förvärras av fysisk aktivitet**.",
     "Illamående/kräkning, ljus-, ljud- och luktkänslighet; debut oftast före 40 år; ärftlighet hos 60–80 %.",
     {
      "h": "Synaura"
     },
     "**Flimmerskotom**: fläck/tomrum intill fixationspunkten i **båda ögonens synfält** som växer i halvmåneform med blixtrande sicksacklinjer i kanten.",
     "Aura förklaras av sänkt blodflöde i bakre hjärndelar som sprids långsamt (spreading depression).",
     "**Okulär/retinal migrän** kan ge synfenomen utan huvudvärk."
    ],
    "diag": [
     "Klinisk diagnos med anamnes; huvudvärksdagbok.",
     "Ögat är **blekt och fint** och visus i stort sett opåverkat."
    ],
    "beh": [
     "Anfall: **ASA, paracetamol, NSAID** tidigt i hög dos (brustablett), ev. **metoklopramid** (Primperan).",
     "**Triptan** (sumatriptan 50 mg po; 6 mg sc vid svårt anfall) – **inte under aurafasen**.",
     "Profylax: **propranolol** (Inderal Retard 160 mg), upptrappning; utvärdera efter 3 månader."
    ],
    "hand": [
     "Handläggs i öppenvård; se även [[t9-026|Migrän]] i neurologi.",
     "Utsätt ineffektiva läkemedel; vätska vid långdragna anfall."
    ],
    "flagg": [
     "**Atypisk aura** eller nydebuterad huvudvärk >50 år är varningstecken för sekundär huvudvärk.",
     "Rött öga med huvudvärk och illamående är **inte migrän** – uteslut **akut glaukom**.",
     "Monokulär övergående synförlust ska utredas som amaurosis fugax/TIA."
    ],
    "ddx": [
     [
      "t9-181",
      "Akut glaukom",
      "Rött, stenhårt öga, kraftigt nedsatt visus, ljusstel pupill."
     ],
     [
      "t9-188",
      "Amaurosis fugax",
      "Monokulär ”rullgardin”, negativt fenomen, smärtfritt."
     ],
     [
      "t9-211",
      "Glaskroppsavlossning",
      "Flugor och ljusblixtar i ett öga."
     ],
     [
      "t9-214",
      "Spänningshuvudvärk",
      "Bilateral, tryckande, utan aura."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 6–8",
     "Ögonboken – sammanfattning (T9), s. 13",
     "Ögonboken – sammanfattning (T9), s. 15",
     "Ögonboken – sammanfattning (T9), s. 23"
    ]
   },
   "card": {},
   "km": [
    "ogon:49",
    "neuro:21"
   ]
  },
  {
   "id": "t9-209",
   "name": "Synfältsbortfall",
   "specialty": "Ögonsjukdomar",
   "sub": "Synfenomen",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Synfältsbortfall** är förlust av en del av synfältet. Mönstret ger ledtråd till lokalisationen: **centralt** (makula, synnerv), **perifert/sektoriellt** (glaukom, näthinna) eller **hemianopiskt** (chiasma och bakre synbanor). Synfältsdefekt kan vara **första symtomet på en hjärnlesion**.",
    "klin": [
     {
      "h": "Orsaker i ögat"
     },
     "**Kroniskt glaukom**: smygande perifera defekter med bevarat visus.",
     "**AMD**: central defekt, bevarad periferi.",
     "**Amotio**: snabb synfältsförminskning (skugga/rullgardin), ofta efter blixtar och flugor.",
     "**Grenvenstrombos**: skugga i del av synfältet. Hypertensiv retinopati: blinda fläckar.",
     {
      "h": "Synnerv och synbanor"
     },
     "**Staspapill**: förstorad blind fläck, senare perifer inskränkning.",
     "**Hypofystumör/chiasmakompression**: **bitemporal hemianopsi**, börjar övre temporalt.",
     "**TIA/stroke**: övergående eller bestående synfältspåverkan; tumörer ger fokala symtom som synfältsbortfall.",
     {
      "h": "Övrigt"
     },
     "**Migränaura**: övergående flimmerskotom i båda ögonens synfält.",
     "**Dermatochalasis**: hängande ögonlockshud ger övre synfältsdefekt."
    ],
    "diag": [
     "Visus, **grov synfältsundersökning med konfrontation** ([[t9-265|konfrontation]]), oftalmoskopi.",
     "Ögonmottagning: **perimetri** (Humphrey) ([[t9-278|perimetri]]).",
     "Misstänkt intrakraniell orsak: DT/**MR**."
    ],
    "beh": [
     "Behandla orsaken (t.ex. trycksänkning vid glaukom, operation vid amotio, behandling av kompression)."
    ],
    "hand": [
     "Akut synfältsbortfall (amotio, kärlocklusion, stroke) → akut till ögonläkare respektive stroke-/medicinakut.",
     "Smygande defekter → ögonläkare för perimetri och papillbedömning."
    ],
    "flagg": [
     "**Bitemporal hemianopsi** – chiasmakompression.",
     "Akut skugga efter **blixtar/flugor** – amotio.",
     "Glaukomets defekter märks sent eftersom visus är bevarat."
    ],
    "ddx": [
     [
      "t9-198",
      "Kroniskt glaukom",
      "Perifera defekter, papillexkavation."
     ],
     [
      "t9-200",
      "Synbanekompression",
      "Bitemporal eller annan hemianopisk defekt."
     ],
     [
      "t9-189",
      "Amotio",
      "Akut skugga, ofta föregången av blixtar."
     ],
     [
      "t9-187",
      "Stroke och TIA",
      "Akut debut, annan fokalneurologi."
     ],
     [
      "t9-208",
      "Migrän",
      "Övergående flimmerskotom med positiva fenomen."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 15–19",
     "Ögonboken – sammanfattning (T9), s. 22–24",
     "Ögonboken – sammanfattning (T9), s. 16–17",
     "Kompendium Neurologi (T9), s. 2",
     "Kompendium Neurologi (T9), s. 8",
     "Kompendium Neurologi (T9), s. 37–38"
    ]
   },
   "card": {},
   "km": [
    "ogon:50"
   ],
   "prog": [
    [
     "t2",
     "Termin 2",
     "t2-106",
     "Synfältsbortfall"
    ]
   ]
  },
  {
   "id": "t9-210",
   "name": "Grumlingar i synfältet",
   "specialty": "Ögonsjukdomar",
   "sub": "Synfenomen",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Grumlingar i synfältet** (flugor, trådar, spindelväv, \"kvast\") är ett symtom som kan vara ofarligt (**mouches volantes**) men som också kan vara första tecknet på **glaskroppsavlossning**, **retinal ruptur/amotio**, **glaskroppsblödning** eller **bakre uveit**.",
    "klin": [
     {
      "h": "Orsaker enligt källan"
     },
     "**Mouches volantes**: glaskroppen är inte optiskt perfekt – små celler och bindvävstrådar rör sig i den geléartade massan; svåra att fokusera på och flyttar sig.",
     "**[[t9-211|Glaskroppsavlossning]]**: mycket vanligt med stigande ålder; ger flugor, spindelväv eller en kvast i synfältet, ibland inga symtom alls. Drag i näthinnan ger **ljusblixtar**.",
     "**[[t9-191|Glaskroppsblödning]]**: plötslig synförsämring som föregåtts av \"flugor\" och blixtar; ofta vid diabetesretinopati eller retinal ruptur.",
     "**[[t9-195|Bakre uveit]]**: smygande, oftast smärtfria grumlingar/fläckar som rör sig i synfältet och/eller synnedsättning p.g.a. celler i glaskroppen.",
     "**Diabetesretinopati**: initialt prickar i synfältet, sedan svart vid blödning."
    ],
    "diag": [
     "Visus.",
     "Dilatera pupillen och oftalmoskopera – kontrollera näthinnan.",
     "På ögonmottagning: undersökning i mikroskop i dilaterat tillstånd för att leta **retinal ruptur och amotio**.",
     "Vid tät blödning utan insyn: **ultraljud** för att utesluta amotio."
    ],
    "hand": [
     "Nytillkomna grumlingar – ögonläkare **inom något dygn** (glaskroppsavlossning).",
     "Plötslig synnedsättning, blixtar eller skugga – **snabbt** till ögonläkare (amotio, glaskroppsblödning).",
     "Glaskroppsavlossning i sig behandlas inte, men patienten ska informeras om symtom på amotio."
    ],
    "flagg": [
     "**Ljusblixtar** = drag i näthinnan – risk för retinal ruptur och amotio.",
     "**Skugga/synfältsbortfall** eller sänkt visus talar för amotio – akut.",
     "Glaskroppsblödning hos **icke-diabetiker** är mer akut: trolig retinal ruptur."
    ],
    "ddx": [
     [
      "t9-211",
      "Glaskroppsavlossning",
      "Flugor/spindelväv, ev. blixtar, visus oftast opåverkat."
     ],
     [
      "t9-189",
      "Amotio",
      "Synfältsförminskning (skugga), visus sjunker om fovea avlossas."
     ],
     [
      "t9-191",
      "Glaskroppsblödning",
      "Plötslig synförsämring, dålig insyn i ögat."
     ],
     [
      "t9-195",
      "Bakre uveit",
      "Smygande grumlingar, celler i glaskroppen, ev. makulaödem."
     ],
     [
      "t9-208",
      "Migrän",
      "Ögonmigrän är differentialdiagnos till glaskroppsavlossning."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 4",
     "Ögonboken – sammanfattning (T9), s. 14–15",
     "Ögonboken – sammanfattning (T9), s. 18",
     "Ögonboken – sammanfattning (T9), s. 21–22"
    ]
   },
   "card": {},
   "km": [
    "ogon:51"
   ]
  },
  {
   "id": "t9-211",
   "name": "Glaskroppsavlossning",
   "specialty": "Ögonsjukdomar",
   "sub": "Synfenomen",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Glaskroppsavlossning** innebär att den åldrande glaskroppen **likvifieras och skrumpnar**, så att glaskroppsmembranet släpper från näthinnan. Mycket vanligt – omkring **50 %** av befolkningen drabbas, risken ökar med åldern.",
    "klin": [
     "Varierande symtom: inga alls, **spindelvävsförändring, en kvast eller flugor** i synfältet.",
     "Sitter delar av membranet kvar vid näthinnan ger glaskroppens rörelser ett **drag i näthinnan → ljusblixtar**.",
     "Draget kan orsaka en **reva (retinal ruptur)** som kan leda till **näthinneavlossning (amotio)**."
    ],
    "diag": [
     "Visus.",
     "Dilatera pupillen och **oftalmoskopera** – kontrollera näthinnan.",
     "Ögonmottagning: dilatera och undersök i mikroskop, leta efter **retinal ruptur och amotio**."
    ],
    "beh": [
     "Ingen behandling av själva avlossningen.",
     "Ge information om symtom på amotio, eftersom glaskroppsavlossning kan leda till det."
    ],
    "hand": [
     "Akut – till **ögonläkare inom något dygn**.",
     "Prognos god; endast ett fåtal utvecklar amotio."
    ],
    "flagg": [
     "**Ljusblixtar** tyder på drag i näthinnan – risk för ruptur.",
     "Nytillkommen **skugga/synfältsdefekt** eller sänkt visus = misstänk amotio, snabbt till ögonläkare.",
     "Myopi är riskfaktor för amotio (större, längre öga)."
    ],
    "ddx": [
     [
      "",
      "Retinal ruptur",
      "Reva i näthinnan som föregår amotio; ses vid dilaterad undersökning."
     ],
     [
      "t9-189",
      "Amotio",
      "Synfältsförminskning, ev. kraftigt sänkt visus om fovea är avlossad."
     ],
     [
      "t9-208",
      "Migrän",
      "Ögonmigrän är differentialdiagnos enligt källan."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 14–15"
    ]
   },
   "card": {},
   "km": [
    "ogon:51"
   ]
  },
  {
   "id": "t9-212",
   "name": "Krokseende",
   "specialty": "Ögonsjukdomar",
   "sub": "Synfenomen",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Krokseende** innebär att **raka linjer upplevs krokiga**. Enligt källan är det ett viktigt symtom att fråga efter vid **makuladegeneration**, där det kan vara tecken på att en torr form håller på att övergå i en **våt (exsudativ)** form.",
    "klin": [
     "Vid makuladegeneration ser patienten inte det som ligger i blickfokus men bevarar periferin.",
     "**Våt AMD** beror på kärlnybildning under näthinnan som läcker och ger svullnad och blödning."
    ],
    "diag": [
     "Visus, oftalmoskopi av makula.",
     "Ögonmottagning: dilaterad ögonbottenundersökning; vid våt typ **fluoresceinangiografi** och **OCT**."
    ],
    "beh": [
     "Våt AMD: injektion av **kärltillväxthämmande läkemedel** (Lucentis) i glaskroppen."
    ],
    "hand": [
     "Fråga alltid patienter med makuladegeneration om raka linjer ser krokiga ut.",
     "Våt typ avancerar fortare och har dålig prognos utan behandling – ska till ögonläkare."
    ],
    "flagg": [
     "Nytillkommet krokseende hos patient med torr AMD kan betyda **övergång till våt form**, som går att behandla."
    ],
    "ddx": [
     [
      "t9-201",
      "Åldersrelaterad makuladegeneration",
      "Central synnedsättning, drusen; krokseende talar för våt form."
     ],
     [
      "t9-192",
      "Makulablödning och makulaödem",
      "Påverkar central syn."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 17–18"
    ]
   },
   "card": {},
   "km": [
    "ogon:52"
   ]
  },
  {
   "id": "t9-213",
   "name": "Funktionell synpåverkan",
   "specialty": "Ögonsjukdomar",
   "sub": "Synfenomen",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:53"
   ]
  },
  {
   "id": "t9-214",
   "name": "Spänningshuvudvärk",
   "specialty": "Ögonsjukdomar",
   "sub": "Huvudvärk",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Spänningshuvudvärk** är den vanligaste huvudvärksformen (ca **65 %** prevalens) och delas in i **episodisk** och **kronisk** form. Det är en primär huvudvärk, ofta kopplad till psykiskt spänningstillstånd.",
    "klin": [
     "Debut oftast **15–50 år**, vanligare hos kvinnor.",
     "Ofta psykiskt spänningstillstånd med oförmåga att slappna av i stressade situationer.",
     {
      "h": "Somatiskt bidragande faktorer"
     },
     "**Refraktionsfel med synbesvär**.",
     "Bettanomali.",
     "Cervikal påverkan.",
     {
      "h": "Symtom"
     },
     "**Molande, ihållande, åtstramande/tryckande** – \"som ett band\" runt hela huvudet, bilateral.",
     "Kan växla i svårighetsgrad under dagen; mångårig sjukhistoria talar för primär huvudvärk."
    ],
    "diag": [
     "Penetrera anamnes och symtom, inkl. ev. bakomliggande psykisk/social orsak.",
     "Status: inspektion och palpation av huvud- och nackmuskulatur; tandimpressioner.",
     "Uteslut varningstecken för farlig huvudvärk (se nedan)."
    ],
    "beh": [
     "**Lugnande besked** – många tror att de har hjärntumör.",
     "Ibland sjukgymnast, kurator/arbetsterapeut: avslappning, KBT, stresshantering.",
     "Analgetika endast i enstaka fall.",
     "Frekventa besvär: icke-farmakologisk behandling, t.ex. **biofeedback**; TNS och akupunktur kan prövas.",
     "I utvalda fall **lågdos Saroten** (amitriptylin)."
    ],
    "hand": [
     "Handläggs i primärvården.",
     "Vid synbesvär – tänk på refraktionsfel som bidragande faktor."
    ],
    "flagg": [
     "Varningstecken för farlig huvudvärk: **åskknallshuvudvärk**, fokalneurologi, staspapill, sänkt medvetande, **nydebuterad huvudvärk > 50 år**, host-/nys-/krysthuvudvärk, feber/nackstyvhet, ömmande temporalisartär.",
     "Hög analgetikakonsumtion (> 10 d/mån i > 3 mån) – tänk **läkemedelsutlöst huvudvärk**."
    ],
    "ddx": [
     [
      "t9-026",
      "Migrän",
      "Bultande, ofta ensidig, illamående, ljus-/ljudkänslighet, 4–72 h."
     ],
     [
      "t9-028",
      "Läkemedelsutlöst huvudvärk",
      "Daglig huvudvärk vid överförbrukning av analgetika."
     ],
     [
      "t9-031",
      "Hortons huvudvärk",
      "Strikt ensidig, skärande/sprängande."
     ],
     [
      "t9-215",
      "Astenopi",
      "Ögonrelaterade besvär vid t.ex. hyperopi; refraktionsfel kan bidra till spänningshuvudvärk."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 6",
     "Kompendium Neurologi (T9), s. 8–9"
    ]
   },
   "card": {},
   "km": [
    "ogon:55",
    "neuro:21"
   ]
  },
  {
   "id": "t9-215",
   "name": "Astenopi",
   "specialty": "Ögonsjukdomar",
   "sub": "Huvudvärk",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Astenopi** (ögontrötthet/ansträngningsbesvär) nämns i kompendiet i samband med **hyperopi**: unga med måttlig hyperopi kan **ackommodera** sig till klar bild men kan då utveckla **astenopiska besvär**.",
    "klin": [
     "Vid hyperopi bryts bilden bakom näthinnan; unga kompenserar genom att ackommodera.",
     "Ackommodationen blir svårare med åren när linsen stelnar – hyperopa behöver ofta läsglasögon tidigare.",
     "**Refraktionsfel med synbesvär** anges som somatiskt bidragande faktor till spänningshuvudvärk."
    ],
    "diag": [
     "Visus och utprovning av plusglas vid misstänkt hyperopi.",
     "Barn < 8 år: skiaskopi på ögonmottagning."
    ],
    "hand": [
     "Barn med kraftig hyperopi och skelning ska snabbt till ögonläkare (risk för amblyopi)."
    ],
    "flagg": [
     "Barn med hyperopi kan utveckla **esotropi** – risk för amblyopi."
    ],
    "ddx": [
     [
      "t9-214",
      "Spänningshuvudvärk",
      "Bandformad tryckande huvudvärk; refraktionsfel kan bidra."
     ],
     [
      "t9-217",
      "Refraktionsfel",
      "Hyperopi är den orsak som kompendiet kopplar till astenopi."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 13",
     "Kompendium Neurologi (T9), s. 8"
    ]
   },
   "card": {},
   "km": [
    "ogon:56"
   ]
  },
  {
   "id": "t9-216",
   "name": "Vit pupill",
   "specialty": "Ögonsjukdomar",
   "sub": "Skelning och barnoftalmologi",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:57"
   ]
  },
  {
   "id": "t9-217",
   "name": "Refraktionsfel",
   "specialty": "Ögonsjukdomar",
   "sub": "Skelning och barnoftalmologi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Refraktionsfel** innebär att ögats optiska system inte fokuserar bilden på näthinnan. **Refraktion** = mått på den brytande kraften i ögats medier; ca **⅔ av brytningen** sker i övergången luft–hornhinna, medan linsen justerar efter avståndet.",
    "klin": [
     {
      "tbl": [
       [
        "Tillstånd",
        "Mekanism",
        "Symtom/korrektion"
       ],
       [
        "**Hyperopi** (översynthet/långsynthet)",
        "Litet/kort öga – bilden bryts bakom näthinnan",
        "Suddigt på nära håll (vid kraftig även långt); unga kompenserar med ackommodation; plusglas"
       ],
       [
        "**Myopi** (närsynthet)",
        "Stort/långt öga – bilden bryts framför näthinnan",
        "Ser bra nära, suddigt på långt håll; minusglas"
       ],
       [
        "**Presbyopi**",
        "Linsen stelnar med åldern och kan inte ackommodera",
        "Suddigt på nära håll från ca 45–50 år; läsglasögon, initialt ca +1 D"
       ],
       [
        "**Astigmatism**",
        "Oregelbunden ljusbrytning p.g.a. hornhinnans och/eller linsens form",
        "Regelbunden korrigeras med glasögon; oregelbunden (sår, keratokonus) svårare"
       ]
      ]
     },
     "Barn är ofta hyperopa vid födseln; hyperopin minskar med åren.",
     "Hyperopa blir tidigare presbyopa.",
     "Myopi upptäcks hos barn/unga och är riskfaktor för **amotio**.",
     "Successivt ökande myopi kan vara tecken på **katarakt**.",
     "**[[t9-203|Keratokonus]]** ger ökande myopi och oregelbunden astigmatism."
    ],
    "diag": [
     "Visus; prova ut plus- respektive minusglas.",
     "Ögonmottagning: **autorefraktion**; **skiaskopi** av barn < 8 år.",
     "Barn: undersök ögonbottnar, gör **covertest** för skelning, kontrollera visus regelbundet."
    ],
    "beh": [
     "Glasögon eller kontaktlinser.",
     "Modern kirurgi kan slipa hornhinnan för att förändra/eliminera brytningsfel."
    ],
    "hand": [
     "Vuxna med myopi/astigmatism/presbyopi: optiker.",
     "**Barn: ögonläkare** (myopi följs hos ögonläkare om < 8 år)."
    ],
    "flagg": [
     "Barn med **kraftig hyperopi** kan börja skela inåt (**esotropi**) – snabbt till ögonläkare p.g.a. risk för **amblyopi**.",
     "Hyperopa har trängre kammarvinkel – ökad risk för **akut glaukom**.",
     "Vid synnedsättning hos äldre: tänk även katarakt och makuladegeneration."
    ],
    "ddx": [
     [
      "t9-197",
      "Katarakt",
      "Successiv myopisering, bländning, nedsatt röd reflex."
     ],
     [
      "t9-201",
      "Åldersrelaterad makuladegeneration",
      "Central synnedsättning som inte förbättras med glas/stenopeiskt hål."
     ],
     [
      "t9-218",
      "Synutveckling och amblyopi",
      "Hos barn är amblyopi differentialdiagnos/komplikation."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 3–4",
     "Ögonboken – sammanfattning (T9), s. 12–14",
     "Ögonboken – sammanfattning (T9), s. 15–16"
    ]
   },
   "card": {},
   "km": [
    "ogon:58"
   ]
  },
  {
   "id": "t9-218",
   "name": "Synutveckling och amblyopi",
   "specialty": "Ögonsjukdomar",
   "sub": "Skelning och barnoftalmologi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Amblyopi** (synnedsättning) kan enligt kompendiet utvecklas hos barn med **kraftig hyperopi** som börjar skela, och är differentialdiagnos vid synnedsättning hos barn.",
    "klin": [
     "Barn är ofta hyperopa vid födseln men ackommoderar till klar bild; hyperopin minskar med åren.",
     "Ackommodation är kopplad till **konvergens** – vid kraftig hyperopi kan ett öga ställa sig i **esotropi** (inåtskelning), vilket kan leda till amblyopi.",
     "Vid synnedsättning hos barn: tänk brytningsfel, amblyopi, katarakt och förändring i ögonbotten."
    ],
    "diag": [
     "Visus; **skiaskopi** av barn < 8 år.",
     "Undersök ögonbottnar och gör **[[t9-271|covertest]]** för skelning.",
     "Kontrollera visus hos barn med regelbundna intervall."
    ],
    "hand": [
     "Barn med skelning/kraftig hyperopi → **ögonläkare snabbt**.",
     "Barn med brytningsfel (t.ex. astigmatism) handläggs av ögonläkare, inte optiker."
    ],
    "flagg": [
     "Skelning hos barn ska inte avvaktas – risk för amblyopi."
    ],
    "ddx": [
     [
      "t9-217",
      "Refraktionsfel",
      "Hyperopi/astigmatism hos barn kan ge amblyopi."
     ],
     [
      "t9-219",
      "Tropi och fori",
      "Esotropi vid hyperopi."
     ],
     [
      "t9-197",
      "Katarakt",
      "Kongenital katarakt är differentialdiagnos hos barn."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 13–14"
    ]
   },
   "card": {},
   "km": [
    "ogon:59"
   ]
  },
  {
   "id": "t9-219",
   "name": "Tropi och fori",
   "specialty": "Ögonsjukdomar",
   "sub": "Skelning och barnoftalmologi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Tropi** är en manifest skelning. Kompendiet nämner **esotropi** (inåtskelning) vid kraftig hyperopi hos barn och **exotropi + hypotropi** vid okulomotoriuspares, påvisat med **covertest**.",
    "klin": [
     "**Esotropi**: ackommodation är kopplad till konvergens – barn med kraftig hyperopi kan ställa ett öga inåt; risk för amblyopi.",
     "**Exotropi + hypotropi**: vid komplett okulomotoriuspares ställer sig ögat utåt, nedåt och roterat.",
     "Vid abducens-/trochlearispares: dubbelseende i paretiska muskelns riktning."
    ],
    "diag": [
     "**[[t9-271|Covertest]]** för att undersöka skelning (t.ex. vid astigmatism hos barn).",
     "Ögonmotorik; Lees skärm för att dokumentera muskelpares (ögonmottagning)."
    ],
    "hand": [
     "Skelande barn → ögonläkare snabbt.",
     "Kvarstående pares efter 6 (–12) månader: ställningstagande till skelningskirurgi."
    ],
    "flagg": [
     "Skelning hos barn kan leda till **amblyopi**."
    ],
    "ddx": [
     [
      "t9-205",
      "Ögonmuskelpares",
      "Förvärvad paralytisk skelning med dubbelseende."
     ],
     [
      "t9-218",
      "Synutveckling och amblyopi",
      "Följd av skelning hos barn."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 13–14",
     "Ögonboken – sammanfattning (T9), s. 26–27"
    ]
   },
   "card": {},
   "km": [
    "ogon:60"
   ]
  },
  {
   "id": "t9-220",
   "name": "Skakvåld",
   "specialty": "Ögonsjukdomar",
   "sub": "Skelning och barnoftalmologi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:61"
   ]
  },
  {
   "id": "t9-221",
   "name": "Prematuritetskomplikationer",
   "specialty": "Ögonsjukdomar",
   "sub": "Skelning och barnoftalmologi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:62"
   ]
  },
  {
   "id": "t9-222",
   "name": "Facialispares",
   "specialty": "Ögonsjukdomar",
   "sub": "Ögonengagemang vid annan sjukdom",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Facialispares** ger oförmåga att sluta ögat (**lagoftalmos**), vilket leder till tårflöde, uttorkning och risk för **expositionskeratit**. **Perifer** pares drabbar hela ansiktshalvan, **central** pares endast nedre delen (övre halvan har bilateral innervation).",
    "klin": [
     "Perifer pares: utslätad nasolabialfåra, hängande mungipa, **ektropion**, lagoftalmos, ev. injicerat öga med korneala epiteldefekter.",
     "Även svårt att sluta munnen – dreggling, problem att tugga.",
     "Proximal skada kan ge hörselnedsättning och/eller yrsel.",
     {
      "h": "Orsaker"
     },
     "**Bells pares** (idiopatisk) – progredierar till total förlamning inom 3 d–1 v, ofta föregången av värk bakom örat.",
     "**Borrelia** (fråga om fästingbett) – viktig behandlingsbar orsak; den typiska formen är dock idiopatisk Bells pares (ÖNH-kompendiet).",
     "Ramsay Hunt (zoster oticus), tumör (parotistumör, kolesteatom, ponsvinkeltumör), trauma (temporalbensfraktur), otit, Guillain–Barré, sarkoidos.",
     "Central pares: stroke, MS, tumör."
    ],
    "diag": [
     "Neurologstatus: komplett/partiell, central/perifer; övriga kranialnerver; smak på tungans främre del.",
     "Ögon: lagoftalmos, m. orbicularis-kraft bilateralt, grad av ektropion.",
     "**Fluoresceinfärga kornea** för epiteldefekter/expositionskeratit.",
     "ÖNH: otomikroskopi, hörselmätning, ev. stapediusreflex, Schirmers test, **borreliaserologi**."
    ],
    "beh": [
     "**Urglasförband (fuktkammare)** i akutskedet + **Oculentum simplex**-salva – först dygnet runt, sedan till natten.",
     "Punktatkeratit: tårsubstitut dagtid, salva till natten.",
     "Bells pares: **Prednisolon 60 mg x 1 i 5 d, sedan nedtrappning 5 d**, inom 72 h.",
     "Borrelia: doxycyklin 2 v (vuxna).",
     "Uttalad korneal skada och långvariga besvär: horisontell uppsträckning av nedre ögonlocket; ektropionkirurgi först efter minst 6 mån."
    ],
    "hand": [
     "VC eller ögonläkare beroende på hur allvarligt ögat är drabbat; vid expositionskeratit → ögon.",
     "Brukar gå i regress inom 1–2 månader (högst 6)."
    ],
    "flagg": [
     "Undersök alltid **kornea** – expositionskeratit kan ge sår.",
     "Ingen regress inom 6 månader → utred **intrakraniell orsak**, t.ex. ponsvinkeltumör.",
     "Gradvis progredierande pares talar för tumör."
    ],
    "ddx": [
     [
      "t9-318",
      "Perifer och central facialispares",
      "Central sparar pannan."
     ],
     [
      "t9-320",
      "Bells pares och behandling vid facialispares",
      "Idiopatisk, uteslutningsdiagnos."
     ],
     [
      "t9-230",
      "Ektropion och entropion",
      "Ektropion kan vara följd av facialispares."
     ],
     [
      "t9-229",
      "Torra ögon",
      "Andra tillstånd med torra ögon är differentialdiagnos."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 25–26",
     "Kompendium ÖNH (T9), s. 13",
     "Kompendium Neurologi (T9), s. 38"
    ]
   },
   "card": {},
   "km": [
    "ogon:65",
    "neuro:72"
   ]
  },
  {
   "id": "t9-223",
   "name": "Förhöjt intrakraniellt tryck",
   "specialty": "Ögonsjukdomar",
   "sub": "Ögonengagemang vid annan sjukdom",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Förhöjt intrakraniellt tryck (ICP)** ger i ögat framför allt **staspapill** (papillödem), som nästan alltid är **bilateral**, samt **abducenspåverkan**. Det intrakraniella utrymmet är konstant, så ökning av en komponent måste kompenseras av en annan.",
    "klin": [
     {
      "h": "Allmänna symtom"
     },
     "Huvudvärk (ofta värst efternatt/morgon), illamående, plötslig kräkning, sjunkande medvetande, högt BT (Cushingeffekt), ändrat andningsmönster.",
     {
      "h": "Ögonsymtom"
     },
     "**Staspapill**: normal eller lätt nedsatt syn, **obskurationer** (kortvarig övergående dimsyn vid lägesändring).",
     "Status: svullen, hyperemisk papill med utsuddade gränser, **utebliven spontan venpulsation**, senare flamblödningar, bomullsexsudat, dilaterade vener.",
     "Synfält: **förstorad blind fläck**, senare perifer inskränkning.",
     "**N. abducens påverkas först** – abduktionsdefekt och dubbelseende.",
     "Inklämning (uncusherniering): **ensidigt vidgad, ljusstel pupill** (n. III), senare bilateralt."
    ],
    "diag": [
     "Visus, **oftalmoskopi** av papillen, ögonmotorik, pupillreflexer (normala vid staspapill).",
     "Synfältsundersökning på ögonmottagning.",
     "Akut **DT/MR** – remiss neurolog/neurokirurg för snabb utredning."
    ],
    "beh": [
     "Identifiera och behandla orsaken (tumör, sinustrombos, SAH, meningit, idiopatisk intrakraniell hypertension, hydrocefalus m.m.).",
     "Vid cerebralt ödem: mannitol, kortikosteroider (tumör); hydrocefalus: v-drän/shunt."
    ],
    "hand": [
     "Akut – ögonläkare + **neurolog/neurokirurg**.",
     "Neurolog följer patienten; ögon kontrollerar att papillödemet går tillbaka."
    ],
    "flagg": [
     "Staspapill som står länge → **optikusatrofi** och mycket dålig syn; visus kan initialt vara normalt.",
     "**Ensidigt vidgad ljusstel pupill** + sjunkande medvetande = inklämning.",
     "Abducenspares hos yngre utan riskfaktorer – tänk intrakraniell process/förhöjt ICP."
    ],
    "ddx": [
     [
      "",
      "Drusenpapill",
      "Pseudopapillödem."
     ],
     [
      "t9-193",
      "Optikusneurit",
      "Unilateral, smärta vid ögonrörelser, afferent pupilldefekt."
     ],
     [
      "t9-196",
      "Ischemisk optikusneuropati",
      "Unilateral, plötslig synnedsättning, äldre."
     ],
     [
      "t9-043",
      "Intrakraniell tryckstegring",
      "Neurologiska aspekter."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 23",
     "Ögonboken – sammanfattning (T9), s. 26",
     "Kompendium Neurologi (T9), s. 6–7",
     "Kompendium Neurologi (T9), s. 9",
     "Kompendium Neurologi (T9), s. 16",
     "Kompendium Neurologi (T9), s. 19"
    ]
   },
   "card": {},
   "km": [
    "ogon:66",
    "neuro:31"
   ]
  },
  {
   "id": "t9-224",
   "name": "Arteriell hypertension",
   "specialty": "Ögonsjukdomar",
   "sub": "Ögonengagemang vid annan sjukdom",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Arteriell hypertension** påverkar ögat via **hypertensiv retinopati** (skadad blod–retinabarriär, ökad kärlpermeabilitet) och är **riskfaktor** för retinala venocklusioner, icke-arteritisk AION och mikrovaskulära ögonmuskelpareser.",
    "klin": [
     {
      "h": "Hypertensiv retinopati"
     },
     "Lätt–måttligt nedsatt visus, blinda fläckar; bilateral men kan vara asymmetrisk.",
     "Fynd: tunnare arterioler, dilaterade slingriga vener, **korsningsfenomen**, blödningar, hårda och mjuka exsudat, makulaödem, **papillödem** i svåra fall; \"**macular star**\" av hårda exsudat runt fovea.",
     {
      "h": "Hypertoni som riskfaktor"
     },
     "**Central-/grenvenstrombos**.",
     "**Icke-arteritisk AION**.",
     "**Abducens-, trochlearis- och okulomotoriuspares** av mikrovaskulär genes (pupillsparande okulomotoriuspares)."
    ],
    "diag": [
     "Blodtryck, visus, oftalmoskopi, **B-glukos**.",
     "Vid venocklusion/ögonmuskelpares: ta blodtryck och prover."
    ],
    "beh": [
     "Hypertensiv retinopati: **sänk blodtrycket**.",
     "Vid venocklusion: reglera bakomliggande DM, hypertoni, hyperlipidemi så att andra ögat inte drabbas."
    ],
    "hand": [
     "Hypertensiv retinopati: **akut** till ögonläkare för diagnos och till HC/medicin för att snabbt få ner BT.",
     "Följs på ögon tills förändringarna gått i regress och visus normaliserats; BT på HC.",
     "Prognos god – de flesta läker ut utan sequelae."
    ],
    "flagg": [
     "Papillödem vid hypertoni = svår hypertensiv retinopati.",
     "Diabetesretinopati är viktig differentialdiagnos – ta B-glukos."
    ],
    "ddx": [
     [
      "t9-225",
      "Diabetes",
      "Diabetesretinopati: mikroaneurysm, blödningar, exsudat."
     ],
     [
      "t9-194",
      "Retinal vaskulär ocklusion",
      "Venocklusion: unilateral, fläck-/flamblödningar."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 18–19",
     "Ögonboken – sammanfattning (T9), s. 22–23",
     "Ögonboken – sammanfattning (T9), s. 26–27"
    ]
   },
   "card": {},
   "km": [
    "ogon:67"
   ]
  },
  {
   "id": "t9-225",
   "name": "Diabetes",
   "specialty": "Ögonsjukdomar",
   "sub": "Ögonengagemang vid annan sjukdom",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Diabetes** ger i ögat framför allt **diabetesretinopati** (mikroangiopati → retinal ischemi), men ökar också risken för **katarakt**, glaskroppsblödning, venocklusion, AION och mikrovaskulära ögonmuskelpareser.",
    "klin": [
     {
      "h": "Diabetesretinopati"
     },
     "Insulinberoende DM: ca **40 %** får retinopati, icke-insulinberoende ca **20 %**; **duration** viktigare riskfaktor än metabol kontroll.",
     "Andra riskfaktorer: hypertoni, nefropati, rökning, övervikt, hyperlipidemi; kan försämras vid graviditet.",
     "Fynd: mikroaneurysm, småblödningar, exsudat, retinalt ödem, AV-shuntar, senare **neovaskularisationer** (retina, papill, iris).",
     "Indelning: icke-proliferativ, preproliferativ, proliferativ.",
     "Initialt **symtomfritt**; synnedsättning av makulaödem, glaskroppsblödning eller traktionsamotio.",
     {
      "h": "Andra ögonmanifestationer"
     },
     "Katarakt (DM är riskfaktor).",
     "**Pupillsparande okulomotoriuspares**, abducens- och trochlearispares av mikrovaskulär genes.",
     "Riskfaktor för central-/grenvenstrombos och icke-arteritisk AION."
    ],
    "diag": [
     "**Ögonbottenfotografering** med 2–3 års intervall; tätare vid retinopati (ögonmottagning).",
     "Ögon: dilaterad ögonbottenundersökning; **fluoresceinangiografi** inför laser.",
     "Glaskroppsblödning: subakut **ultraljud** för att utesluta amotio."
    ],
    "beh": [
     "**Scatterlaser** (panretinal) för att minska metabola behov och bromsa nykärlsbildning.",
     "Foveanära förändringar/makulaödem: fokal laser (\"grid\").",
     "Glaskroppsblödning: avvakta en månad – vid utebliven resorption **vitrektomi**."
    ],
    "hand": [
     "Ögonläkare, ej akut vid screening; plötslig synnedsättning → snabbt.",
     "Vid svår DM ska glukosnivåerna **inte sänkas för snabbt** – retinopatin kan progrediera."
    ],
    "flagg": [
     "Retinopatin kan vara avancerad **innan synsymtom** – regelbunden screening är avgörande.",
     "Plötsligt synbortfall hos diabetiker: glaskroppsblödning, amotio, venocklusion, artärocklusion, AION.",
     "Prognosen beror på compliance; ofta gravt synhandikapp trots behandling."
    ],
    "ddx": [
     [
      "t9-224",
      "Arteriell hypertension",
      "Hypertensiv retinopati: korsningsfenomen, macular star."
     ],
     [
      "t9-191",
      "Glaskroppsblödning",
      "Hos diabetiker trolig orsak retinopati."
     ],
     [
      "t9-194",
      "Retinal vaskulär ocklusion",
      "Unilateral, plötslig."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 15",
     "Ögonboken – sammanfattning (T9), s. 18–19",
     "Ögonboken – sammanfattning (T9), s. 21–22",
     "Ögonboken – sammanfattning (T9), s. 26–27"
    ]
   },
   "card": {},
   "km": [
    "ogon:68"
   ]
  },
  {
   "id": "t9-226",
   "name": "Intrakraniell process",
   "specialty": "Ögonsjukdomar",
   "sub": "Ögonengagemang vid annan sjukdom",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "En **intrakraniell process** (t.ex. tumör) kan ge ögonsymtom genom **kompression av synbanorna** (synfältsdefekter), **förhöjt ICP** (staspapill, abducenspares) eller påverkan på kranialnerver. Synfältsdefekter kan vara första symtomet.",
    "klin": [
     "**Hypofystumör** trycker på chiasma nedifrån → **bitemporal hemianopsi**, börjar ofta uppifrån temporalt.",
     "Ögonstatus är ofta normalt, men långvarig kompression → **optikusatrofi** (ställvis blek papill).",
     "Tryckrelaterade symtom: huvudvärk, illamående, kräkning, **staspapill**.",
     "Fokala symtom: pareser, synfältsbortfall, kramper.",
     "Ögonmuskelpareser: abducens (förhöjt ICP), okulomotorius (aneurysm – pupillengagemang), sinus cavernosus-patologi (III, IV, VI, V1).",
     "Facialispares utan regress inom 6 mån → misstänk ponsvinkeltumör; akustikusneurinom ger hörselnedsättning, tinnitus, facialispares."
    ],
    "diag": [
     "Visus, grov synfältsundersökning (konfrontation), oftalmoskopi.",
     "Ögonmottagning: synfält med **HFA (Humphrey)** och ögonmotorik.",
     "Nervstatus inkl. ögonbottenspegling; **CT med kontrast** i första hand, MR (obligat vid hypofystumör)."
    ],
    "beh": [
     "Behandla orsaken till kompressionen (t.ex. transsfenoidal kirurgi vid hypofystumör, bromokriptin vid prolaktinom).",
     "Vid hotande syn görs akut operation (hypofystumör)."
    ],
    "hand": [
     "Akut till ögonläkare vid synbanekompression; uppföljning hos neurolog och ögonläkare.",
     "Prognos beror på hur länge kompressionen varat – defekter kan bli bestående."
    ],
    "flagg": [
     "**Bitemporal synfältsdefekt** = chiasmaprocess tills motsatsen bevisats.",
     "Staspapill + huvudvärk/kräkning – akut utredning med DT/MR.",
     "**Okulomotoriuspares med vidgad pupill** – tänk aneurysm."
    ],
    "ddx": [
     [
      "t9-200",
      "Synbanekompression",
      "Synfältsdefekt efter lesionens läge."
     ],
     [
      "t9-187",
      "Stroke och TIA",
      "Akut debuterande synfältsbortfall."
     ],
     [
      "t9-238",
      "Dermatochalasis",
      "Hängande ögonlockshud kan ge synfältsdefekt."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 23–24",
     "Ögonboken – sammanfattning (T9), s. 26–27",
     "Kompendium Neurologi (T9), s. 37–38",
     "Kompendium ÖNH (T9), s. 13"
    ]
   },
   "card": {},
   "km": [
    "ogon:69"
   ]
  },
  {
   "id": "t9-227",
   "name": "Thyroideasjukdom",
   "specialty": "Ögonsjukdomar",
   "sub": "Ögonengagemang vid annan sjukdom",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Thyroideasjukdom** kan ge **endokrin oftalmopati**, som i kompendiet nämns som orsak till **proptos/exoftalmus** och som differentialdiagnos vid ögonmuskelpareser.",
    "klin": [
     "Rött öga **utan värk** men ev. skav, **med proptos**: endokrin oftalmopati, fistel, tumör.",
     "Endokrin oftalmopati ger ofta **exoftalmus** och kan begränsa ögonrörligheten (efterliknar abducens- eller okulomotoriuspares)."
    ],
    "diag": [
     "Inspektion av proptos, ögonmotorik."
    ],
    "flagg": [
     "Dubbelseende + exoftalmus: tänk endokrin oftalmopati snarare än kranialnervspares."
    ],
    "ddx": [
     [
      "t9-205",
      "Ögonmuskelpares",
      "Kranialnervspares ger oftast inte exoftalmus."
     ],
     [
      "t9-094",
      "Myastenia gravis",
      "Uttröttbar diplopi/ptos, mer kvällstid."
     ],
     [
      "t9-239",
      "Exoftalmus",
      "Endokrin oftalmopati är en av orsakerna."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 5",
     "Ögonboken – sammanfattning (T9), s. 26–27"
    ]
   },
   "card": {},
   "km": [
    "ogon:70",
    "ogon:91"
   ]
  },
  {
   "id": "t9-228",
   "name": "Dakryocystit",
   "specialty": "Ögonsjukdomar",
   "sub": "Tårflödesstörning",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:79"
   ]
  },
  {
   "id": "t9-229",
   "name": "Torra ögon",
   "specialty": "Ögonsjukdomar",
   "sub": "Tårflödesstörning",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Torra ögon** finns i kompendiets algoritm för rött öga under **värk/ljusskänslighet med påverkad kornea och färgbarhet**, och uppträder framför allt som följd av otillräcklig lockslutning (facialispares, ektropion).",
    "klin": [
     "Rött öga med **färgbarhet vid fluoresceinfärgning** (tillsammans med korneal erosion, herpes simplex-keratit, kemisk skada, fotoelektrisk keratit).",
     "Vid facialispares/lagoftalmos: uttorkning → **expositionskeratit** med korneala epiteldefekter.",
     "Ektropion: dålig blinkfunktion → **superficiell punktatkeratit**.",
     "Sjögrens syndrom ger muntorrhet (primär/sekundär)."
    ],
    "diag": [
     "**Fluoresceinfärgning** av kornea.",
     "Schirmers tårtest (vid facialispares)."
    ],
    "beh": [
     "**Tårsubstitut** dagtid och **Oculentum simplex**-salva till natten vid punktatkeratit.",
     "Vid facialispares: urglasförband (fuktkammare) + salva."
    ],
    "flagg": [
     "Kontrollera alltid kornea vid lagoftalmos – risk för sår."
    ],
    "ddx": [
     [
      "t9-222",
      "Facialispares",
      "Lagoftalmos ger uttorkning."
     ],
     [
      "t9-230",
      "Ektropion och entropion",
      "Dålig blink- och tårpumpsfunktion."
     ],
     [
      "t9-243",
      "Korneal erosion",
      "Avgränsad färgbarhet efter trauma."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 5",
     "Ögonboken – sammanfattning (T9), s. 24–26",
     "Kompendium ÖNH (T9), s. 13",
     "Kompendium ÖNH (T9), s. 27"
    ]
   },
   "card": {},
   "km": [
    "ogon:80"
   ]
  },
  {
   "id": "t9-230",
   "name": "Ektropion och entropion",
   "specialty": "Ögonsjukdomar",
   "sub": "Tårflödesstörning",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Ektropion** = nedre ögonlocket vänder sig **utåt** från bulben; **entropion** = ögonlockskanten vänder sig **inåt** så att fransarna skrapar mot kornea. Båda blir vanligare med stigande ålder.",
    "klin": [
     {
      "h": "Ektropion"
     },
     "Slappa ögonlock/senor med åldern → nedre tårpunkten ligger inte an → **inadekvat tårpump**, tårarna dräneras inte.",
     "Rött, irriterat öga och **konstant tårflöde – både inne och ute**; dålig blinkfunktion → punktatkeratit, blefarit, ev. keratinisering.",
     "Andra orsaker: **ärrektropion** (efter kirurgi, tumör, blow-out-fraktur), **facialispares**, hudsjukdomar (rosacea, sklerodermi, eksem).",
     {
      "h": "Entropion"
     },
     "Försvagade undre ögonlocksretraktorer med åldern; även **ärrbildning** efter trakom, trauma eller kemisk skada.",
     "Ökat tårflöde och skavkänsla; epitelskador i kornea som gör ont och kan ge synnedsättning, i värsta fall svårläkta sår, pannus och kärlinväxt."
    ],
    "diag": [
     "Inspektion av ögonlocken.",
     "Ektropion: undersök orbicularis oculi-funktionen – be patienten rynka pannan (uteslut facialispares); ögon: ev. spolning av tårkanalen.",
     "Entropion: visus, inspektion av lock och kornea, **fluoresceinfärgning**."
    ],
    "beh": [
     "Ektropion: **plastikoperation**; vid n. VII-pares vänta **minst 6 månader**; tårsubstitut/Oculentum simplex vid skav/punktatkeratit; behandla ev. dermatit.",
     "Entropion: i väntan på operation **tejpa ned** undre ögonlocket med lång tejp nedanför cilierna; **Oculentum simplex** flera ggr/dag."
    ],
    "hand": [
     "Inte akut; remiss till ögonläkare om operation är aktuell.",
     "Entropion: god prognos om kornea inte skadats för mycket."
    ],
    "flagg": [
     "Entropion kan ge **korneala sår** – färga alltid kornea.",
     "Ektropion: uteslut **facialispares** innan åldersförklaring."
    ],
    "ddx": [
     [
      "t9-184",
      "Trikiasis",
      "Felväxande cilier utan inåtvänd lockkant."
     ],
     [
      "t9-222",
      "Facialispares",
      "Kan orsaka ektropion och lagoftalmos."
     ],
     [
      "t9-231",
      "Tårvägsstenos",
      "Tårflöde utan lockfelställning."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 24–25"
    ]
   },
   "card": {},
   "km": [
    "ogon:81"
   ]
  },
  {
   "id": "t9-231",
   "name": "Tårvägsstenos",
   "specialty": "Ögonsjukdomar",
   "sub": "Tårflödesstörning",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Tårvägarna: **punctum lacrimale → canaliculus lacrimalis → saccus lacrimalis → ductus nasolacrimalis → under concha nasalis inferior**. Hinder i avflödet ger tårflöde och kan ge recidiverande konjunktivit.",
    "klin": [
     "**Tårvägsobstruktion** är differentialdiagnos vid **recidiverande bakteriell konjunktivit**.",
     "Hos äldre försämras tårpumpen – tårar rinner över vid kyla och blåst."
    ],
    "diag": [
     "Fråga om det rinner **både inomhus och utomhus**.",
     "Ögonmottagning: **spola tårkanalen** för att se att det finns passage."
    ],
    "hand": [
     "Rinner det **endast utomhus** får patienten leva med besvären; rinner det **även inne** → remiss till ögon."
    ],
    "flagg": [
     "Recidiverande ensidig konjunktivit – tänk tårvägshinder."
    ],
    "ddx": [
     [
      "t9-230",
      "Ektropion och entropion",
      "Lockfelställning med inadekvat tårpump."
     ],
     [
      "t9-178",
      "Konjunktivit",
      "Recidiv kan bero på tårvägsobstruktion."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 2",
     "Ögonboken – sammanfattning (T9), s. 6",
     "Ögonboken – sammanfattning (T9), s. 24"
    ]
   },
   "card": {},
   "km": [
    "ogon:82"
   ]
  },
  {
   "id": "t9-232",
   "name": "Läkemedel med ögonbiverkningar",
   "specialty": "Ögonsjukdomar",
   "sub": "Läkemedel och droger",
   "ty": "lm",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Kompendiet nämner några läkemedel som kan ge **ögonbiverkningar**: **steroider** (katarakt, förhöjt ögontryck) och **cytostatika** (katarakt). Opiater påverkar pupillstorleken.",
    "klin": [
     "**Steroider** och **cytostatika** anges som riskfaktorer för **katarakt**.",
     "**Steroider lokalt** kan ge förhöjt ögontryck – därför ska ögonläkare kontaktas innan steroidbehandling vid t.ex. allergisk konjunktivit.",
     "**Opiater** ger **mios**; abstinens ger mydriasis."
    ],
    "diag": [
     "Vid steroidbehandling i ögat: uppföljning med tryckmätning hos ögonläkare."
    ],
    "flagg": [
     "Starta inte steroidögondroppar utan ögonläkarkontakt – risk för tryckstegring.",
     "Utsatta pupiller (knappnålsstora) hos medvetandesänkt patient – tänk opiater."
    ],
    "ddx": [
     [
      "t9-233",
      "Ögonläkemedel med systembiverkningar",
      "Omvänd situation: lokalt läkemedel med effekter utanför ögat."
     ],
     [
      "t9-197",
      "Katarakt",
      "Steroider är riskfaktor."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 8",
     "Ögonboken – sammanfattning (T9), s. 15",
     "Kompendium Psykiatri (T9), s. 26"
    ]
   },
   "card": {},
   "km": [
    "ogon:83"
   ]
  },
  {
   "id": "t9-233",
   "name": "Ögonläkemedel med systembiverkningar",
   "specialty": "Ögonsjukdomar",
   "sub": "Läkemedel och droger",
   "ty": "lm",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:84"
   ]
  },
  {
   "id": "t9-234",
   "name": "Alkoholskador",
   "specialty": "Ögonsjukdomar",
   "sub": "Läkemedel och droger",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Kompendierna tar upp alkoholrelaterad ögonpåverkan i form av **Wernickes encefalopati** (tiaminbrist vid långvarigt alkoholmissbruk) med akuta ögonmotoriska symtom, samt **metanol** som toxisk orsak till papillit.",
    "klin": [
     {
      "h": "Wernickes encefalopati"
     },
     "Akut/subakut **diplopi**: uni- eller bilateral **abducenspares**, konjugerad blickpares, **anisokori**, ev. internukleär oftalmoplegi, horisontell eller vertikal **nystagmus**.",
     "Gångataxi (bredspårig), uppmärksamhets- och minnesstörning, konfusion, så småningom medvetandepåverkan.",
     {
      "h": "Metanol"
     },
     "Anges som toxisk orsak till **papillit** (differentialdiagnos vid optikusneurit)."
    ],
    "beh": [
     "Wernicke: **inläggning**, massiv **Betabion 2 ml iv** redan vid misstanke, sedan im.",
     "**Alltid B-vitaminer före glukos** – kolhydrater ökar tiaminomsättningen; undvik glukosinfusion; ev. Mg."
    ],
    "flagg": [
     "Ny diplopi/nystagmus + ataxi + konfusion hos alkoholist = Wernicke – ge tiamin direkt.",
     "Metronidazol fungerar som antimetabolit till tiamin."
    ],
    "ddx": [
     [
      "t9-206",
      "Internukleär oftalmoplegi",
      "Kan ingå i Wernicke, men även vid MS."
     ],
     [
      "t9-193",
      "Optikusneurit",
      "Papillit kan vara toxisk (metanol)."
     ],
     [
      "t9-157",
      "Alkoholabstinens",
      "Delirium kan föregå Wernicke-Korsakoff."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 25–26",
     "Ögonboken – sammanfattning (T9), s. 20"
    ]
   },
   "card": {},
   "km": [
    "ogon:85"
   ]
  },
  {
   "id": "t9-235",
   "name": "Pingueculum",
   "specialty": "Ögonsjukdomar",
   "sub": "Förändrat utseende",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:86"
   ]
  },
  {
   "id": "t9-236",
   "name": "Pterygium",
   "specialty": "Ögonsjukdomar",
   "sub": "Förändrat utseende",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:87"
   ]
  },
  {
   "id": "t9-237",
   "name": "Anisokori",
   "specialty": "Ögonsjukdomar",
   "sub": "Förändrat utseende",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Anisokori** = olika pupillstorlek. Kompendierna beskriver flera tillstånd där pupillerna blir olika, både **ensidig mydriasis** (t.ex. okulomotoriuspares, akut glaukom, inklämning) och **ensidig mios** (t.ex. Horners syndrom, irit).",
    "klin": [
     {
      "h": "Stor pupill på det sjuka ögat"
     },
     "**Okulomotoriuspares**: stor ljusstel pupill + ptos + utåtställt öga; pupillengagemang talar för **aneurysm eller trauma** (de parasympatiska fibrerna löper ytligt).",
     "**Uncusherniering/förhöjt ICP**: ensidigt vidgad, ljusstel pupill, senare bilateralt.",
     "**Akut glaukom**: halvvid, ljusstel pupill + rött, stenhårt, smärtsamt öga.",
     "**Fissura orbitalis superior-syndrom** (orbitafraktur): dilaterad ljusstel pupill + total ögonmuskelpares.",
     {
      "h": "Liten pupill på det sjuka ögat"
     },
     "**Horners syndrom**: ptos + mios utan ögonmuskelpares (t.ex. ipsilateralt vid Wallenbergs syndrom).",
     "**Irit**: miotisk pupill, ev. synekier.",
     {
      "h": "Övrigt"
     },
     "Wernickes encefalopati kan ge anisokori; opiater ger mios."
    ],
    "diag": [
     "Inspektera pupiller, pupillreaktion (inkl. **swinging flashlight test**), ögonmotorik, ptos.",
     "Nervstatus; vid misstänkt intrakraniell orsak akut DT."
    ],
    "hand": [
     "Komplett okulomotoriuspares eller pupillengagemang → **akutremiss** till ögon/neurolog.",
     "Pupillsparande pares hos patient med riskfaktorer: kontrollera pupillen efter 1–2 dagar."
    ],
    "flagg": [
     "Vidgad ljusstel pupill + ptos/diplopi = tänk **aneurysm**.",
     "Vidgad pupill + sjunkande medvetande = **inklämning**.",
     "Rött smärtsamt öga med halvvid pupill = **akut glaukom** (irit ger i stället mindre pupill)."
    ],
    "ddx": [
     [
      "t9-205",
      "Ögonmuskelpares",
      "Okulomotoriuspares med eller utan pupillengagemang."
     ],
     [
      "t9-181",
      "Akut glaukom",
      "Halvvid ljusstel pupill."
     ],
     [
      "t9-182",
      "Iridocyklit",
      "Miotisk pupill på det sjuka ögat."
     ],
     [
      "t9-240",
      "Ptos",
      "Ptos + mios = Horner; ptos + mydriasis = n. III."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 9",
     "Ögonboken – sammanfattning (T9), s. 12–13",
     "Ögonboken – sammanfattning (T9), s. 27",
     "Kompendium Neurologi (T9), s. 3",
     "Kompendium Neurologi (T9), s. 16",
     "Kompendium ÖNH (T9), s. 23",
     "Kompendium Psykiatri (T9), s. 25–26"
    ]
   },
   "card": {},
   "km": [
    "ogon:89"
   ]
  },
  {
   "id": "t9-238",
   "name": "Dermatochalasis",
   "specialty": "Ögonsjukdomar",
   "sub": "Förändrat utseende",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Dermatochalasis** = överskott av hud på ögonlocken som **hänger ned** och kan orsaka **synfältsdefekter**.",
    "klin": [
     "Ger synfältsinskränkning, framför allt uppåt, genom att huden hänger ned framför ögat."
    ],
    "diag": [
     "Nämns som differentialdiagnos vid utredning av synfältsdefekter (synbanekompression)."
    ],
    "flagg": [
     "Synfältsdefekt hos äldre kan bero på hängande ögonlockshud – men uteslut synbanekompression."
    ],
    "ddx": [
     [
      "t9-200",
      "Synbanekompression",
      "Bitemporal eller annan neurologisk synfältsdefekt."
     ],
     [
      "t9-240",
      "Ptos",
      "Själva lockkanten hänger, inte bara huden."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 24"
    ]
   },
   "card": {},
   "km": [
    "ogon:90"
   ]
  },
  {
   "id": "t9-239",
   "name": "Exoftalmus",
   "specialty": "Ögonsjukdomar",
   "sub": "Förändrat utseende",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Exoftalmus/proptos** = framskjutet öga. I kompendierna anges orsaker som **endokrin oftalmopati**, **fistel**, **tumör** och **orbitaskador** (blow-in-fraktur, retrobulbärt hematom).",
    "klin": [
     "Rött öga utan värk (ev. skav) med proptos: **endokrin oftalmopati, fistel, tumör**.",
     "Endokrin oftalmopati ger ofta exoftalmus och kan likna ögonmuskelpares.",
     "Trauma: **exoftalmus** vid \"blow-in\"-fraktur av orbitataket; en- eller exoftalmus/bulbförskjutning vid orbitafraktur.",
     "Fissura orbitalis superior-syndrom (fraktur eller **retrobulbärt hematom**): dilaterad ljusstel pupill, total ögonmuskelpares, känselnedsättning; + blindhet = orbita apex-syndrom."
    ],
    "diag": [
     "Ögonstatus vid ansiktstrauma: visus, pupillreaktion, motorik, dubbelseende, en-/exoftalmus, bulbpalpation.",
     "CT ansiktsskelett/hjärna vid trauma."
    ],
    "hand": [
     "Akut handläggning vid SOF/apexsyndrom/**retrobulbärt hematom** och bulbskador.",
     "Orbitafraktur: operation inom 1–2 veckor för att återställa orbitavolymen (förhindra en/exoftalmus)."
    ],
    "flagg": [
     "Exoftalmus + synnedsättning/ljusstel pupill efter trauma = **retrobulbärt hematom/apexsyndrom** – akut.",
     "Exoftalmus + diplopi: tänk endokrin oftalmopati."
    ],
    "ddx": [
     [
      "t9-227",
      "Thyroideasjukdom",
      "Endokrin oftalmopati."
     ],
     [
      "t9-246",
      "Blow-out",
      "Ger snarare enoftalmus."
     ],
     [
      "t9-205",
      "Ögonmuskelpares",
      "Ger oftast inte exoftalmus."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 5",
     "Ögonboken – sammanfattning (T9), s. 26–27",
     "Kompendium ÖNH (T9), s. 19",
     "Kompendium ÖNH (T9), s. 22–23"
    ]
   },
   "card": {},
   "km": [
    "ogon:91"
   ]
  },
  {
   "id": "t9-240",
   "name": "Ptos",
   "specialty": "Ögonsjukdomar",
   "sub": "Förändrat utseende",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Ptos** = hängande övre ögonlock. Kompendierna nämner ptos vid **okulomotoriuspares** (m. levator palpebrae), **Horners syndrom**, **myasteni** och **orbitafraktur**.",
    "klin": [
     "**Okulomotoriuspares**: total ptos (går ej att öppna) + mydriasis + utåt-/nedåtställt öga + ackommodationsinsufficiens.",
     "**Horners syndrom**: ptos + mios utan ögonmuskelpares.",
     "**Myastenia gravis**: ibland ptos, mer besvär kvällstid; påverkar aldrig pupillen.",
     "**Orbitafraktur**: ptos bland kliniska fynd.",
     "**Pseudoptos** (halvslutna lock) sekundärt vid vernal konjunktivit."
    ],
    "diag": [
     "Inspektion (ptos, pupillstorlek), ögonmotorik, cover test, pupillreaktion.",
     "Vid okulomotoriuspares: ev. blodstatus, B-glukos, borrelia, SR, CRP; neurostatus."
    ],
    "hand": [
     "Ptos + pupillengagemang/komplett okulomotoriuspares → akutremiss ögon/neurolog.",
     "Vid okulomotoriuspares utan total ptos: täck ena ögat för att undvika dubbelsyn."
    ],
    "flagg": [
     "**Ptos + vidgad pupill** = n. III-pares med pupillengagemang – tänk aneurysm.",
     "Ptos + mios = Horner.",
     "Uttröttbar ptos utan pupillpåverkan = myasteni."
    ],
    "ddx": [
     [
      "t9-205",
      "Ögonmuskelpares",
      "Okulomotoriuspares."
     ],
     [
      "t9-094",
      "Myastenia gravis",
      "Fluktuerande, pupill alltid normal."
     ],
     [
      "t9-238",
      "Dermatochalasis",
      "Hängande hud, inte lockkant."
     ],
     [
      "t9-237",
      "Anisokori",
      "Pupillens storlek skiljer orsakerna åt."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 8",
     "Ögonboken – sammanfattning (T9), s. 26–27",
     "Kompendium Neurologi (T9), s. 3",
     "Kompendium ÖNH (T9), s. 23"
    ]
   },
   "card": {},
   "km": [
    "ogon:92"
   ]
  },
  {
   "id": "t9-241",
   "name": "Ögonlocksretraktion",
   "specialty": "Ögonsjukdomar",
   "sub": "Förändrat utseende",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:93"
   ]
  },
  {
   "id": "t9-242",
   "name": "Kemisk skada",
   "specialty": "Ögonsjukdomar",
   "sub": "Trauma",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:71"
   ]
  },
  {
   "id": "t9-243",
   "name": "Korneal erosion",
   "specialty": "Ögonsjukdomar",
   "sub": "Trauma",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Korneal erosion** = defekt i hornhinnans epitel. Hornhinnan har **smärtnerver** och epitelet har **snabb cellnybildning (7–10 d)** och därmed god läkningsförmåga. I kompendiets algoritm hör erosion till rött öga med **värk/ljusskänslighet och färgbarhet**.",
    "klin": [
     "Smärta och ljuskänslighet; kornea tar färg vid fluoresceinfärgning.",
     "Erosion eller avskrapning av epitelet ger bakterier fäste → risk för **bakteriell keratit**."
    ],
    "diag": [
     "**Fluoresceinfärgning**: erosionen syns som ett **färgat område** – skiljer från irit som inte tar färg.",
     "Vid misstänkt bakteriell keratit: inspektera infiltratet **före** färgning så att det inte misstas för erosion.",
     "Evertera ögonlocket för att utesluta främmande kropp."
    ],
    "flagg": [
     "Erosion är differentialdiagnos vid irit och episklerit – färga alltid kornea.",
     "Utebliven läkning/infiltrat → tänk bakteriell keratit (särskilt kontaktlinsbärare)."
    ],
    "ddx": [
     [
      "t9-182",
      "Iridocyklit",
      "Ljusväg, miotisk pupill, ingen färgbarhet."
     ],
     [
      "t9-183",
      "Keratit",
      "Gråvitt infiltrat; herpes ger dendritika."
     ],
     [
      "t9-245",
      "Ytlig främmande kropp",
      "Evertera för att utesluta."
     ],
     [
      "t9-244",
      "Svetsblänk",
      "Multipla punktata färgbarheter bilateralt."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 2",
     "Ögonboken – sammanfattning (T9), s. 5",
     "Ögonboken – sammanfattning (T9), s. 9–10"
    ]
   },
   "card": {},
   "km": [
    "ogon:72",
    "ogon:0"
   ]
  },
  {
   "id": "t9-244",
   "name": "Svetsblänk",
   "specialty": "Ögonsjukdomar",
   "sub": "Trauma",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Svetsblänk** (fotoelektrisk keratit, snöblindhet) är en skada där **UV-ljus absorberas i kornea- och konjunktivalepitelet**, som efter en latenstid på **några till 12 timmar** går i nekros. Akut p.g.a. smärta; vårdnivå VC.",
    "klin": [
     "**Intensiv smärta**, främmande kropp-känsla, rikt tårflöde, ljuskänslighet.",
     "Patienten kan ofta inte öppna ögonen alls.",
     "Epitelet läker efter något dygn."
    ],
    "diag": [
     "Ofta krävs en droppe **lokalbedövning** (t.ex. tetrakain) för att undersöka.",
     "Visus (nedsatt p.g.a. epitelskada).",
     "Evertera ögonlocken för att utesluta främmande kropp.",
     "**Fluorescein**: **multipla punktata färgbarheter** på kornea; måttlig blandinjektion, klar kornea, ingen ljusväg."
    ],
    "beh": [
     "Smörjande salva (**Oculentum simplex**) flera gånger per dygn."
    ],
    "hand": [
     "Ingen uppföljning om såren läkt inom ett dygn.",
     "Patienten ska **söka igen** om det inte är bra efter **2 dygn**."
    ],
    "flagg": [
     "Utebliven läkning efter 2 dygn – risk för **bakteriell keratit**.",
     "Uteslut **kemikalieskada** med anamnes.",
     "Patienten kan ha både svetsblänk och **främmande kropp**."
    ],
    "ddx": [
     [
      "t9-242",
      "Kemisk skada",
      "Uteslutes anamnestiskt."
     ],
     [
      "",
      "Viral keratokonjunktivit",
      "Skiljer sig i epidemiologi och insjuknande."
     ],
     [
      "t9-245",
      "Ytlig främmande kropp",
      "Kan förekomma samtidigt – evertera."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 12"
    ]
   },
   "card": {},
   "km": [
    "ogon:73"
   ]
  },
  {
   "id": "t9-245",
   "name": "Ytlig främmande kropp",
   "specialty": "Ögonsjukdomar",
   "sub": "Trauma",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Ytlig främmande kropp** i konjunktiva eller kornea är en viktig differentialdiagnos vid **rött öga**, särskilt vid **ensidiga** symtom. Den kan sitta subkonjunktivalt eller under övre ögonlocket.",
    "klin": [
     "**Främmande kropp i konjunktiva**: rött öga utan värk (ev. skav) eller med värk men normal kornea och ingen ljusväg.",
     "**Främmande kropp i kornea**: värk/ljuskänslighet med påverkad kornea.",
     "Kan förekomma samtidigt med t.ex. svetsblänk."
    ],
    "diag": [
     "**Evertera** ögonlocken – främmande kropp kan sitta under övre ögonlocket.",
     "Fluoresceinfärgning av kornea; visus."
    ],
    "hand": [
     "Uteslut främmande kropp vid ensidig konjunktivit, irit, episklerit, vernal konjunktivit och bakteriell keratit."
    ],
    "flagg": [
     "Ensidigt rött öga – **evertera alltid**.",
     "Vid svetsblänk kan patienten också ha en främmande kropp."
    ],
    "ddx": [
     [
      "t9-243",
      "Korneal erosion",
      "Färgat område utan kvarliggande kropp."
     ],
     [
      "t9-178",
      "Konjunktivit",
      "Ofta bilateral, kladdigt."
     ],
     [
      "t9-183",
      "Keratit",
      "Infiltrat i kornea."
     ],
     [
      "t9-270",
      "Extraktion av ytlig främmande kropp utanför optiska zonen",
      "Själva åtgärden."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 5–7",
     "Ögonboken – sammanfattning (T9), s. 9–10",
     "Ögonboken – sammanfattning (T9), s. 12"
    ]
   },
   "card": {},
   "km": [
    "ogon:74",
    "ogon:114",
    "ogon:0"
   ]
  },
  {
   "id": "t9-246",
   "name": "Blow-out",
   "specialty": "Ögonsjukdomar",
   "sub": "Trauma",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Blow-out-fraktur** är en orbitafraktur där delar av en eller flera **orbitaväggar trycks ut**, oftast den **mediala delen av orbitagolvet**. Den orsakas oftast av ett **slag mot ögat**.",
    "klin": [
     {
      "h": "Bakgrund"
     },
     "Orbita är konformad med basen framåt; golvet utgörs av maxilla och os zygomaticum och gränsar mot **sinus maxillaris**.",
     "Ansiktstrauma drabbar ofta män 20–30 år vid trafikolycka, misshandel eller idrott.",
     {
      "h": "Kliniska fynd vid orbitafraktur"
     },
     "Periorbitala hematom (saknas vid trap door-fraktur).",
     "**Inskränkt ögonrörlighet och diplopi**; ptos.",
     "Känselbortfall/dysestesi i nedre ögonlock, kind, näsvinge och överläpp (**n. infraorbitalis**).",
     "Enoftalmus/exoftalmus eller bulbförskjutning; skada på tårapparat, ögonlock eller bulb.",
     "Frakturhak saknas vid blow-out."
    ],
    "diag": [
     "Ögonundersökning vid ansiktstrauma: **visus, pupillreaktion, motorik, dubbelseende**, blödningar, en-/exoftalmus och bulbpalpation.",
     "Kontrollera sensibilitet i n. infraorbitalis område.",
     "I princip alltid **CT ansiktsskelett** (inkl. mandibel), ofta även CT hjärna och halsrygg.",
     "Ofta ögon- och käkkirurgisk konsult utöver ÖNH."
    ],
    "beh": [
     "**Operation för att återställa orbitans volym** (förhindra en-/exoftalmus) inom **1–2 veckor** om ingen akut komplikation föreligger.",
     "Dubbelseende är i sig ingen operationsindikation, eftersom det kan bero på mjukdelssvullnad.",
     "Isolerad känselstörning vid odislocerad fraktur är ingen operationsindikation men ska följas upp.",
     "Ärrbildning efter kirurgi för blow-out-fraktur kan ge **ärrektropion**."
    ],
    "hand": [
     "Primärt omhändertagande enligt ABCDE; halskrage tills halsryggsskada uteslutits.",
     "Patienten får **inte snyta sig**, eftersom det finns förbindelse med sinus maxillaris.",
     "**Akut handläggning** krävs vid fissura orbitalis superior-syndrom, orbita apex-syndrom, retrobulbärt hematom, bulbskador och trap door-fraktur."
    ],
    "flagg": [
     "**Trap door-fraktur** hos barn upp till 16–17 år: m. rectus inferior kläms fast, smärtpåverkad, illamående, kräkning och **bradykardi** (okulokardiella reflexen), inga periorbitala hematom och svår att se på CT – **akut op helst inom 6 h, absolut inom 24 h**.",
     "**SOF-syndrom** (CN III, IV, V1, VI): dilaterad ljusstel pupill, total ögonmuskelpares, känselnedsättning i övre ögonlock/panna; med samtidig blindhet (CN II) = **orbita apex-syndrom**.",
     "Exoftalmus vid pannbensfraktur talar för **blow in-fraktur** av orbitataket (ovanligt, vanligast hos barn)."
    ],
    "ddx": [
     [
      "",
      "Blow in-fraktur",
      "Orbitataket pressas ner i orbitan; ger exoftalmus snarare än enoftalmus."
     ],
     [
      "",
      "NOE-fraktur",
      "Kraftigt trauma mot centrala mellanansiktet med telekantus, avflackad näsrygg och skador på tårapparaten."
     ],
     [
      "t9-205",
      "Ögonmuskelpares",
      "Diplopi utan trauma; vid orbitafraktur kan rörlighetsinskränkningen bero på inklämning eller svullnad."
     ],
     [
      "t9-247",
      "Bulbkontusion",
      "Bulbskada vid trubbigt våld kräver akut handläggning och ska uteslutas vid orbitafraktur."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 19, 22–24",
     "Ögonboken – sammanfattning (T9), s. 24"
    ]
   },
   "card": {},
   "km": [
    "ogon:75",
    "ogon:0"
   ]
  },
  {
   "id": "t9-247",
   "name": "Bulbkontusion",
   "specialty": "Ögonsjukdomar",
   "sub": "Trauma",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:76"
   ]
  },
  {
   "id": "t9-248",
   "name": "Penetration och perforation",
   "specialty": "Ögonsjukdomar",
   "sub": "Trauma",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-249",
   "name": "Sårskada i ögonlock och tårvägar",
   "specialty": "Ögonsjukdomar",
   "sub": "Trauma",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-250",
   "name": "Synkrav för körkort",
   "specialty": "Ögonsjukdomar",
   "sub": "Social oftalmologi",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Kompendiet anger att synkravet för **körkort är binokulärt visus 0,5**. **Visus** är synskärpan, dvs. högsta förmågan att upplösa små detaljer i bilden.",
    "klin": [
     "Synskärpekrav: **0,5 binokulärt** (med båda ögonen tillsammans).",
     "**Synfältsdefekter vid glaukom** kan bli så utbredda att körkortet dras in.",
     "Patient med **dubbelseende**, eller med ett öga övertäckt (t.ex. lapp vid abducenspares), får **inte köra bil**.",
     "Vid **katarakt** är bilkörning i mörker ofta problematisk (bländning)."
    ],
    "diag": [
     "Bedöm visus (med egen korrektion) och synfält hos patienter med sjukdomar som påverkar synen.",
     "Glaukom upptäcks ofta sent eftersom de perifera synfältsdefekterna inte påverkar visus – synfältsundersökning behövs."
    ],
    "hand": [
     "Informera patienter med diplopi eller ocklusionsbehandling om körförbud.",
     "Körkortsbedömning kan ingå i funktionsdiagnostiken vid kognitiv utredning (arbetsterapeut)."
    ],
    "flagg": [
     "Normal synskärpa utesluter inte körkortsrelevant synfältsdefekt (glaukom).",
     "Täckning av ett öga mot dubbelseende ger inte rätt att köra."
    ],
    "ddx": [
     [
      "t9-198",
      "Kroniskt glaukom",
      "Perifera synfältsdefekter med bevarat visus kan leda till indragning av körkort."
     ],
     [
      "t9-205",
      "Ögonmuskelpares",
      "Dubbelseende eller ocklusion av ena ögat innebär körförbud."
     ],
     [
      "t9-197",
      "Katarakt",
      "Bländning vid mörkerkörning; kan vara operationsindikation trots normal visus."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 4, 16, 26",
     "Kompendium Neurologi (T9), s. 33"
    ]
   },
   "card": {},
   "km": [
    "ogon:94"
   ]
  },
  {
   "id": "t9-251",
   "name": "Misshandel",
   "specialty": "Ögonsjukdomar",
   "sub": "Social oftalmologi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:61",
    "ogon:95"
   ]
  },
  {
   "id": "t9-252",
   "name": "Synrehabilitering",
   "specialty": "Ögonsjukdomar",
   "sub": "Social oftalmologi",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:96"
   ]
  },
  {
   "id": "t9-253",
   "name": "Ögonsjukdomars epidemiologi",
   "specialty": "Ögonsjukdomar",
   "sub": "Social oftalmologi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Kompendiet saknar ett samlat epidemiologiavsnitt, men anger förekomst och riskfaktorer för flera av de **vanliga åldersrelaterade ögonsjukdomarna** (glaukom, katarakt, AMD, diabetesretinopati, glaskroppsavlossning).",
    "klin": [
     {
      "tbl": [
       [
        "Tillstånd",
        "Uppgift i kompendiet"
       ],
       [
        "Primärt öppenvinkelglaukom",
        "Vanligaste glaukomformen; 1–2 % av personer >50 år och 5 % av alla >75 år"
       ],
       [
        "Glaskroppsavlossning",
        "Mycket vanligt, drabbar 50 % av befolkningen; risken ökar med åldern"
       ],
       [
        "Diabetesretinopati",
        "40 % vid insulinberoende och 20 % vid icke-insulinberoende diabetes; debut före 30 års ålder → 90 % inom 30 år"
       ],
       [
        "Katarakt",
        "Senil katarakt vanligast (kongenital ovanligare)"
       ],
       [
        "AION",
        "30–50 % får AION på andra ögat inom 1 år"
       ]
      ]
     },
     "Viral (adenovirus-)konjunktivit är mycket smittsam och kan ge **epidemier** på förskolor och skolor."
    ],
    "diag": [
     {
      "h": "Riskfaktorer"
     },
     "**Glaukom**: hög ålder, ärftlighet (förstagradssläkting), högt ögontryck.",
     "**AMD**: ljus hy, ärftlighet, **rökning**, hög ålder.",
     "**Katarakt**: UV-ljus, strålning, diabetes, steroider och cytostatika.",
     "**Diabetesretinopati**: duration (större riskfaktor än metabol kontroll), hypertoni, nefropati, rökning, övervikt, hyperlipidemi.",
     "**Amotio**: myopi; **akut glaukom**: hyperopi och högre ålder."
    ],
    "hand": [
     "Förstagradssläktingar till glaukompatienter bör kontrolleras från 40–50 års ålder och sedan vartannat år.",
     "Diabetiker följs med ögonbottenfotografering med 2–3 års mellanrum, tätare vid retinopati.",
     "Barn med juvenil idiopatisk artrit följs med regelbundna ögonkontroller (smärtfri kronisk uveit)."
    ],
    "flagg": [
     "Glaukom och diabetesretinopati ger inga tidiga symtom – därför screening/kontroller.",
     "AMD leder inte till total blindhet eftersom perifer syn bevaras."
    ],
    "ddx": [
     [
      "t9-198",
      "Kroniskt glaukom",
      "Vanlig, symtomfri och åldersberoende."
     ],
     [
      "t9-201",
      "Åldersrelaterad makuladegeneration",
      "Riskfaktorer ålder, rökning, ljus hy, ärftlighet."
     ],
     [
      "t9-197",
      "Katarakt",
      "Vanligast som senil form."
     ],
     [
      "t9-225",
      "Diabetes",
      "Retinopati är vanlig och durationsberoende."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 6, 9, 14–17, 21, 23"
    ]
   },
   "card": {},
   "km": [
    "ogon:97"
   ]
  },
  {
   "id": "t9-254",
   "name": "Globalt perspektiv på ögonsjukdomar",
   "specialty": "Ögonsjukdomar",
   "sub": "Social oftalmologi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:98"
   ]
  },
  {
   "id": "t9-255",
   "name": "Ögonlockstumörer",
   "specialty": "Ögonsjukdomar",
   "sub": "Tumörer",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:99"
   ]
  },
  {
   "id": "t9-256",
   "name": "Intraokulära tumörer",
   "specialty": "Ögonsjukdomar",
   "sub": "Tumörer",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:100"
   ]
  },
  {
   "id": "t9-257",
   "name": "Applicering av ögondroppar och ögonsalva",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-258",
   "name": "Spaltlampemikroskopi inklusive bedömning av inre retning",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Spaltlampemikroskopi (biomikroskopi)** görs på ögonmottagningen för att bedöma främre segmentet. En **ljusväg** (och celler) i främre kammaren är **tecken på inre retning** i ögat.",
    "klin": [
     {
      "h": "Vad man bedömer"
     },
     "**Ljusväg och celler i främre kammaren** – inre retning, typiskt vid irit.",
     "Hornhinnan: infiltrat (gråvita fläckar), dendritika, ödem, Descemetveck.",
     "Främre kammarens djup – oftast **mycket grund** vid akut glaukom.",
     "Subtarsal konjunktiva (t.ex. folliklar vid klamydiakonjunktivit)."
    ],
    "diag": [
     {
      "h": "Fynd vid olika tillstånd"
     },
     "**Irit**: kraftig ciliär injektion, **ljusväg, celler**, miotisk pupill, bakre synekier.",
     "**Bakteriell keratit**: infiltrat, ev. ljusväg och celler.",
     "**Herpes simplex-keratit**: färgtagande dendritika, ingen ljusväg.",
     "**Konjunktivit, vernal konjunktivit, fotoelektrisk keratit, episklerit**: ingen ljusväg.",
     "**Akut glaukom**: kraftigt epitelödem, stromalt ödem med Descemetveck, grund kammare.",
     "**Bakre uveit**: ingen ljusväg men grumlig glaskropp med celler."
    ],
    "hand": [
     "Används på ögonmottagning vid rött öga med värk/ljuskänslighet för att utesluta irit, keratit och akut glaukom; kombineras ofta med tryckmätning.",
     "Vid ljusväg (inre retning) hos patient med herpes zoster oftalmikus ges mydriatika."
    ],
    "flagg": [
     "Ljusväg skiljer irit från konjunktivit och episklerit.",
     "Ett infiltrat ska inspekteras innan fluoresceinfärgning så att det inte misstas för en erosion."
    ],
    "ddx": [
     [
      "t9-182",
      "Iridocyklit",
      "Ljusväg och celler är det typiska fyndet."
     ],
     [
      "t9-183",
      "Keratit",
      "Infiltrat i hornhinnan, ev. sekundär ljusväg."
     ],
     [
      "t9-181",
      "Akut glaukom",
      "Grund främre kammare och kornealödem."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 7–12, 18"
    ]
   },
   "card": {},
   "km": [
    "ogon:2",
    "ogon:102"
   ]
  },
  {
   "id": "t9-259",
   "name": "Evertering av ögonlock",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Evertering av ögonlocket** (vändning av övre ögonlocket) görs för att inspektera den **tarsala konjunktivan** och för att **utesluta främmande kropp** under ögonlocket.",
    "klin": [
     "Ingår i undersökningen av i stort sett alla **röda ögon**: bakteriell, viral och allergisk konjunktivit, keratokonjunktivit, episklerit, herpes simplex-keratit och fotoelektrisk keratit.",
     "Särskilt viktigt vid **ensidiga symtom**, där främmande kropp är en viktig differentialdiagnos."
    ],
    "diag": [
     "**Vernal konjunktivit**: förstorade subtarsala papiller med **kullerstensmönster**, ibland jättepapiller.",
     "**Klamydiakonjunktivit**: förstorade folliklar och rodnad tarsal konjunktiva.",
     "**Allergisk konjunktivit**: lätt rodnad slemhinna och lätt förstorade folliklar.",
     "Främmande kropp under övre ögonlocket är differentialdiagnos till irit och kornealerosion."
    ],
    "hand": [
     "Vid kraftig smärta (t.ex. svetsblänk) kan lokalbedövning behövas för att patienten ska kunna öppna ögonen."
    ],
    "flagg": [
     "Främmande kropp är differentialdiagnos vid (ensidig) konjunktivit."
    ],
    "ddx": [
     [
      "t9-245",
      "Ytlig främmande kropp",
      "Det viktigaste att utesluta vid evertering."
     ],
     [
      "t9-178",
      "Konjunktivit",
      "Tarsala fynd (papiller/folliklar) hjälper att skilja typerna åt."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 6–9, 11–12"
    ]
   },
   "card": {},
   "km": [
    "ogon:2",
    "ogon:103"
   ]
  },
  {
   "id": "t9-260",
   "name": "Fluoresceinfärgning",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Fluoresceinfärgning** av ögats yta används för att påvisa **epiteldefekter i hornhinnan** (färgbarhet), t.ex. erosion, dendritika och punktata skador.",
    "klin": [
     "Ett område som **tar färg** visar att hornhinneepitelet är skadat.",
     "I flödesschemat för rött öga skiljer färgbarhet ut torra ögon, kornealerosion, herpes simplex-keratit, kemisk skada och fotoelektrisk keratit."
    ],
    "diag": [
     {
      "tbl": [
       [
        "Tillstånd",
        "Fynd"
       ],
       [
        "Kornealerosion",
        "Färgat område"
       ],
       [
        "Herpes simplex-keratit",
        "Färgtagande grenformig **dendritika**"
       ],
       [
        "Fotoelektrisk keratit (svetsblänk)",
        "**Multipla punktata färgbarheter**"
       ],
       [
        "Vernal konjunktivit",
        "Ytliga grumlingar som tar färg diffust"
       ],
       [
        "Viral keratokonjunktivit",
        "Påvisar korneala infiltrat/engagemang"
       ],
       [
        "Facialispares/lagoftalmos",
        "Epiteldefekter vid expositionskeratit"
       ],
       [
        "Bakteriell konjunktivit, irit",
        "Ingen färgbarhet"
       ]
      ]
     }
    ],
    "hand": [
     "Används vid rött öga för att utesluta kornealt engagemang och kornealerosion som differentialdiagnos till irit och episklerit.",
     "Används även vid entropion för att se epitelskador från fransar."
    ],
    "flagg": [
     "Vid **bakteriell keratit**: inspektera infiltratet **innan** färgning, så att det inte misstas för kornealerosion.",
     "Vid **klamydiaprov** ska ögat inte färgas – då får patienten komma tillbaka nästa dag för provtagning."
    ],
    "ddx": [
     [
      "t9-243",
      "Korneal erosion",
      "Färgat område efter fluorescein."
     ],
     [
      "t9-183",
      "Keratit",
      "Dendritika (HSV) tar färg; bakteriellt infiltrat är gråvitt."
     ],
     [
      "t9-244",
      "Svetsblänk",
      "Punktata färgbarheter."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 5–12, 25"
    ]
   },
   "card": {},
   "km": [
    "ogon:104"
   ]
  },
  {
   "id": "t9-261",
   "name": "Ögonsköljning",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:105"
   ]
  },
  {
   "id": "t9-262",
   "name": "Palpation av bulben vid akut glaukom",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid misstänkt **akut glaukom** kan man, om tryckmätare saknas, **palpera bulben genom ögonlocket med fingrarna** för en grov bedömning av ögontrycket.",
    "klin": [
     "Palpera över det slutna ögonlocket och jämför med andra ögat.",
     "Vid akut glaukom känns ögat **stenhårt (”som en pingisboll”)**.",
     "Normalt ögontryck är **<22 mmHg**; vid akut glaukom **60–70 mmHg**."
    ],
    "diag": [
     "Stöds av övriga fynd: kraftigt nedsatt visus, **stasinjektion**, disig/rökig hornhinna, **halvvid ljusstel pupill**, smärta, huvudvärk och illamående.",
     "Patienten är ofta hyperop och äldre."
    ],
    "hand": [
     "Används på vårdcentral/akutmottagning utan tonometer; vid misstanke ska patienten **snabbt till ögonläkare**.",
     "På ögonmottagningen mäts trycket och främre segmentet bedöms i biomikroskop."
    ],
    "flagg": [
     "Symtom som huvudvärk och illamående gör att patienten ofta hamnar på fel klinik – tänk på akut glaukom och palpera.",
     "Synnerven kan skadas och synen gå förlorad på ett par dygn."
    ],
    "ddx": [
     [
      "t9-181",
      "Akut glaukom",
      "Stenhårt öga, ljusstel halvvid pupill, disig kornea."
     ],
     [
      "t9-182",
      "Iridocyklit",
      "Pupillen är snarare mindre på det drabbade ögat."
     ],
     [
      "t9-208",
      "Migrän",
      "Ögat blekt och fint, visus inte särskilt påverkat."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 12–13",
     "Kompendium ÖNH (T9), s. 19"
    ]
   },
   "card": {},
   "km": [
    "ogon:21",
    "ogon:106"
   ]
  },
  {
   "id": "t9-263",
   "name": "Motilitetsundersökning",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Motilitetsundersökning** bedömer ögonens rörlighet och förekomst av **dubbelseende** i olika blickriktningar, för att påvisa och lokalisera ögonmuskelpares eller mekanisk rörelseinskränkning.",
    "klin": [
     {
      "h": "Innervation"
     },
     "**N. III**: m. rectus superior, medialis, inferior och m. obliquus inferior (samt levator, pupill och ackommodation).",
     "**N. IV**: m. obliquus superior. **N. VI**: m. rectus lateralis.",
     {
      "h": "Tolkning"
     },
     "Dubbelseendet ökar när patienten tittar **åt den paretiska muskelns verkningsriktning**; vid förtäckning av det paretiska ögat försvinner den **mest perifera bilden**."
    ],
    "diag": [
     {
      "tbl": [
       [
        "Pares",
        "Fynd"
       ],
       [
        "Abducens (VI)",
        "Ögat kan inte röra sig lateralt över medellinjen; horisontell diplopi åt skadesidan"
       ],
       [
        "Trochlearis (IV)",
        "Vertikal diplopi, t.ex. vid blick nedåt åt motsatt sida; huvudet lutas åt friska sidan; positivt Bielschowskys head tilt test"
       ],
       [
        "Oculomotorius (III), komplett",
        "Ögat ställer sig utåt–nedåt, total ptos, mydriasis, dubbelseende i flera riktningar"
       ]
      ]
     },
     "Kontrollera alltid **pupillreaktion** samtidigt (normal vid IV- och VI-pares; påverkad vid aneurysm/trauma vid III-pares).",
     "Inskränkt ögonrörlighet och diplopi vid **orbitafraktur**.",
     "Hos medvetslös patient: konjugerad deviation mot intrakraniell lesion; dyskonjugerade ögon talar för hjärnstams-/kranialnervsskada."
    ],
    "hand": [
     "På ögonmottagning dokumenteras paresen med **Lees skärm** (viktigt vid uppföljning).",
     "Kompletteras med B-glukos, blodtryck och vid behov SR/CRP och borreliaserologi."
    ],
    "flagg": [
     "Pupillpåverkan vid oculomotoriuspares → misstänk aneurysm, akut handläggning.",
     "Myasteni ger varierande besvär (värre kvällstid), ibland ptos, men påverkar aldrig pupillen.",
     "Abducenspares kan vara första tecknet på förhöjt intrakraniellt tryck."
    ],
    "ddx": [
     [
      "t9-205",
      "Ögonmuskelpares",
      "Motilitetsundersökningen lokaliserar paresen."
     ],
     [
      "t9-246",
      "Blow-out",
      "Mekanisk rörelseinskränkning efter trauma."
     ],
     [
      "t9-239",
      "Exoftalmus",
      "Endokrin oftalmopati kan ge rörelseinskränkning med exoftalmus."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 4, 23, 26–27",
     "Kompendium ÖNH (T9), s. 23",
     "Kompendium Neurologi (T9), s. 20"
    ]
   },
   "card": {},
   "km": [
    "ogon:107",
    "ogon:1"
   ]
  },
  {
   "id": "t9-264",
   "name": "Pupillreaktion inklusive swinging flashlight test",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Undersökning av **pupillernas storlek och ljusreaktion**. Med **swinging flashlight test** påvisas en **relativ afferent pupilldefekt (RAPD)**, som talar för skada i synnerven eller utbredd näthinneskada på det drabbade ögat.",
    "klin": [
     {
      "h": "Positiv afferent pupilldefekt"
     },
     "**Optikusneurit** (oftast; kan kvarstå länge efter utläkning).",
     "**AION** och **temporalisarterit** på drabbat öga.",
     "**Centralartärocklusion** (ibland även efferent defekt).",
     {
      "h": "Övriga pupillfynd"
     },
     "**Irit**: miotisk, ev. synekibunden pupill.",
     "**Akut glaukom**: halvvid, ljusstel pupill.",
     "**Oculomotoriuspares**: stor ljusstel pupill vid aneurysm/trauma; pupillsparande vid mikrovaskulär genes."
    ],
    "diag": [
     "**Normal pupillreaktion** förväntas vid glaskroppsblödning, staspapill, abducens- och trochlearispares.",
     "Horners syndrom: ptos och **mios** utan ögonmuskelpares.",
     "Medvetslös patient: likstora reagerande pupiller talar i första hand för metabol-toxisk orsak, olikstora icke-reagerande för strukturell; ensidigt vidgad ljusstel pupill vid uncusherniering (CN III)."
    ],
    "hand": [
     "Ingår i undersökningen på vårdcentral vid plötslig synnedsättning (optikusneurit, AION, temporalisarterit, centralartärocklusion) och i ögonstatus vid ansiktstrauma.",
     "Kontrollera pupillen igen efter 1–2 dagar vid pupillsparande oculomotoriuspares."
    ],
    "flagg": [
     "Pupillpåverkan vid oculomotoriuspares → tänk aneurysm.",
     "Vid retrobulbär neurit kan ögonbotten vara helt normal – RAPD kan vara enda objektiva fyndet.",
     "Fynd som talar för temporalisarterit → ta SR/CRP och behandla snabbt för att skydda andra ögat."
    ],
    "ddx": [
     [
      "t9-193",
      "Optikusneurit",
      "RAPD, nedsatt färgseende, smärta vid ögonrörelser."
     ],
     [
      "t9-196",
      "Ischemisk optikusneuropati",
      "RAPD med papillsvullnad hos äldre."
     ],
     [
      "t9-237",
      "Anisokori",
      "Olika pupillstorlek; bedöm ljusreaktion och ptos."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 9, 12, 19–20, 22–23, 26–27",
     "Kompendium Neurologi (T9), s. 16, 20"
    ]
   },
   "card": {},
   "km": [
    "ogon:2",
    "ogon:89",
    "ogon:108"
   ]
  },
  {
   "id": "t9-265",
   "name": "Synfältsundersökning med konfrontation",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Grov synfältsundersökning** (konfrontation) är en enkel mottagningsundersökning för att upptäcka **synfältsdefekter**, som kan vara första symtom på sjukdom i ögat eller synbanorna.",
    "klin": [
     "Hos patient med uttalad kognitiv nedsättning kan synfältet prövas grovt med **hotrörelser med händerna** – finns avvärjning?"
    ],
    "diag": [
     "**Bitemporal hemianopsi** vid kompression av chiasma (t.ex. hypofystumör); börjar ofta uppifrån temporalt.",
     "**Synfältsförminskning** vid amotio.",
     "Perifera defekter vid glaukom (visus bevarat).",
     "Grenvenstrombos kan ge skugga/bortfall av del av synfältet.",
     "Dermatochalasis kan ge synfältsdefekter."
    ],
    "hand": [
     "Görs på vårdcentral vid misstänkt amotio, glaukom och synbanekompression; ögonmottagningen gör därefter datoriserad perimetri.",
     "Synfältsbortfall hos patient med misstänkt tumör ingår i fokalneurologisk bedömning."
    ],
    "flagg": [
     "Glaukomdefekter börjar perifert med bevarat visus och upptäcks sent."
    ],
    "ddx": [
     [
      "t9-209",
      "Synfältsbortfall",
      "Konfrontation ger grov lokalisation av bortfallet."
     ],
     [
      "t9-200",
      "Synbanekompression",
      "Bitemporal hemianopsi."
     ],
     [
      "t9-278",
      "Perimetri",
      "Noggrannare kvantitativ synfältsundersökning."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 15–17, 19, 24",
     "Kompendium Neurologi (T9), s. 33, 37–38"
    ]
   },
   "card": {},
   "km": [
    "ogon:109",
    "ogon:1"
   ]
  },
  {
   "id": "t9-266",
   "name": "Direkt oftalmoskopi av synnervspapillen",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Direkt oftalmoskopi** används för att inspektera **synnervspapillen** och ögonbotten, bl.a. för att påvisa papillödem, glaukomskada och optikusatrofi. Ögonbottenspegling ingår i nervstatus.",
    "klin": [
     "Vid behov **dilateras pupillen** för bättre insyn (t.ex. vid amotio, glaskroppsavlossning och kärlocklusion).",
     "Kontrollera även makula och kärl."
    ],
    "diag": [
     {
      "tbl": [
       [
        "Tillstånd",
        "Papillfynd"
       ],
       [
        "Glaukom",
        "**Ökad exkavation** (fördjupning) pga. nervcellsförlust"
       ],
       [
        "Staspapill",
        "Svullen, hyperemisk papill med utsuddade gränser, **utebliven spontan venpulsation**, senare flamblödningar och bomullsexsudat; nästan alltid bilateral"
       ],
       [
        "Papillit",
        "Svullen, hyperemisk och dåligt avgränsad papill"
       ],
       [
        "Retrobulbär neurit",
        "Normal, välavgränsad papill"
       ],
       [
        "Icke-arteritisk AION",
        "Diffus eller sektoriell svullnad med små strimblödningar; senare blek atrofisk papill"
       ],
       [
        "Centralvenstrombos",
        "Papillödem med blödningar i alla kvadranter"
       ],
       [
        "Långvarig kompression/staspapill",
        "Blek papill (optikusatrofi)"
       ]
      ]
     }
    ],
    "hand": [
     "Görs på vårdcentral vid misstanke om glaukom, staspapill, optikusneurit, AION och synbanekompression.",
     "Vid staspapill: remiss till neurolog/neurokirurg för snabb utredning och MRT."
    ],
    "flagg": [
     "Staspapill är nästan alltid bilateral – ensidig papillsvullnad talar för optikusneurit eller AION.",
     "Normal papill utesluter inte optikusneurit (retrobulbär form).",
     "Visus kan vara normalt tidigt vid staspapill."
    ],
    "ddx": [
     [
      "t9-223",
      "Förhöjt intrakraniellt tryck",
      "Ger staspapill."
     ],
     [
      "t9-198",
      "Kroniskt glaukom",
      "Ökad papillexkavation."
     ],
     [
      "t9-193",
      "Optikusneurit",
      "Papillit eller normal papill vid retrobulbär form."
     ],
     [
      "t9-002",
      "Neurologisk statusundersökning inklusive ögonbottenspegling",
      "Ögonbottenspegling ingår i nervstatus."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 16–23",
     "Kompendium Neurologi (T9), s. 16, 37"
    ]
   },
   "card": {},
   "km": [
    "ogon:2",
    "ogon:110"
   ]
  },
  {
   "id": "t9-267",
   "name": "Undersökning i genomfallande ljus",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Undersökning i genomfallande ljus** bedömer ögats **röda reflex**; grumlingar i de optiska medierna ger **nedsatt röd reflex**.",
    "klin": [
     "Vid **katarakt** ska en **nedsatt röd reflex** synas."
    ],
    "diag": [
     "Används på vårdcentral tillsammans med visus (med minusglas och stenopeiskt hål) och inspektion av linsgrumling vid misstänkt katarakt."
    ],
    "hand": [
     "Hos barn med nedsatt syn är katarakt en differentialdiagnos."
    ],
    "flagg": [
     "Tät glaskroppsblödning ger dålig insyn – ultraljud krävs för att utesluta amotio."
    ],
    "ddx": [
     [
      "t9-197",
      "Katarakt",
      "Nedsatt röd reflex."
     ],
     [
      "t9-216",
      "Vit pupill",
      "Avvikande reflex hos barn."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 14, 16, 21"
    ]
   },
   "card": {},
   "km": [
    "ogon:111",
    "ogon:2"
   ]
  },
  {
   "id": "t9-268",
   "name": "Visusundersökning hos vuxna",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Visus** är synskärpan – den högsta förmågan att upplösa små detaljer i bilden. Visus mäts med patientens egna glasögon och kompletteras med **stenopeiskt hål** för att skilja brytningsfel från annan orsak till synnedsättning.",
    "klin": [
     "Mät visus på varje öga, med patientens korrektion.",
     "Prova **plusglas** vid misstänkt hyperopi och **minusglas** vid myopi.",
     "**Stenopeiskt hål**: förbättring talar för brytningsfel (t.ex. katarakt med inducerad myopi); används för att skilja katarakt från makuladegeneration."
    ],
    "diag": [
     "Visus ingår i undersökningen av nästan alla ögontillstånd (rött öga, synnedsättning, trauma).",
     "Rött öga med **opåverkat visus**: hyposfagma, konjunktivit, episklerit.",
     "Nedsatt visus: keratit, irit, **akut glaukom** (kraftigt nedsatt), amotio med fovea avlossad (**≈0,1**).",
     "Körkortskrav: **binokulärt 0,5**."
    ],
    "hand": [
     "Vid plötslig synnedsättning: visus, pupillreaktion och oftalmoskopi på vårdcentral, sedan remiss enligt misstänkt diagnos.",
     "Vid ansiktstrauma ingår visus i ögonundersökningen."
    ],
    "flagg": [
     "Normal visus utesluter inte glaukom – synfältsdefekterna börjar perifert.",
     "Katarakt kan ge betydande bländningsbesvär trots normal visus."
    ],
    "ddx": [
     [
      "t9-217",
      "Refraktionsfel",
      "Förbättras med stenopeiskt hål/korrektion."
     ],
     [
      "t9-201",
      "Åldersrelaterad makuladegeneration",
      "Förbättras inte med stenopeiskt hål."
     ],
     [
      "t9-197",
      "Katarakt",
      "Successiv försämring, ofta tilltagande myopi."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 4, 6, 9, 12–13, 15–16",
     "Kompendium ÖNH (T9), s. 19"
    ]
   },
   "card": {},
   "km": [
    "ogon:112",
    "ogon:1"
   ]
  },
  {
   "id": "t9-269",
   "name": "Yttre inspektion av ögat i olika blickriktningar",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Yttre inspektion** av ögat bedömer ögonlock, ögonställning, konjunktiva, hornhinna och pupill, och är grunden för indelningen av **det röda ögat**.",
    "klin": [
     {
      "h": "Ögonlock och ögonställning"
     },
     "Proptos/exoftalmus (endokrin oftalmopati, fistel, tumör) eller enoftalmus (orbitafraktur).",
     "**Ptos**, **ektropion**, **entropion**, **lagoftalmos** (facialispares), blefarit, telekantus.",
     {
      "h": "Injektionstyp"
     },
     "**Konjunktival injektion**: konjunktivit.",
     "**Ciliär injektion**: irit, keratit.",
     "**Stasinjektion**: akut glaukom.",
     "**Sektoriell rodnad** med palpationsömhet: episklerit.",
     "Jämn blödning utan dilaterade kärl: hyposfagma."
    ],
    "diag": [
     "Hornhinna: gråvita infiltrat (keratit), disig kornea (akut glaukom), toppig hornhinna vid kraftig keratokonus, arcus senilis (ofarligt).",
     "Sekret: kladdigt/purulent (bakteriell), seröst (viral), mukopurulent trådigt (klamydia).",
     "Ögonställning vid pares: utåt–nedåt vid komplett oculomotoriuspares."
    ],
    "hand": [
     "Kombineras med evertering, fluoresceinfärgning och visus vid rött öga.",
     "Vid facialispares: bedöm orbicularis-kraft, lagoftalmos och tecken på expositionskeratit."
    ],
    "flagg": [
     "Ljusskygghet och värk tillsammans med ciliär injektion talar för inre retning – inte vanlig konjunktivit.",
     "Ensidigt rött öga: tänk främmande kropp, keratit, irit och episklerit."
    ],
    "ddx": [
     [
      "t9-178",
      "Konjunktivit",
      "Konjunktival injektion, sekret."
     ],
     [
      "t9-182",
      "Iridocyklit",
      "Ciliär injektion och miotisk pupill."
     ],
     [
      "t9-240",
      "Ptos",
      "Bedöms vid inspektion."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 2, 5–12, 14, 24–27"
    ]
   },
   "card": {},
   "km": [
    "ogon:113",
    "ogon:2"
   ]
  },
  {
   "id": "t9-270",
   "name": "Extraktion av ytlig främmande kropp utanför optiska zonen",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-271",
   "name": "Covertest",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Covertest** används för att undersöka om **skelning** föreligger.",
    "klin": [
     "Rekommenderas vid undersökning av barn med brytningsfel (t.ex. astigmatism).",
     "Vid **oculomotoriuspares** visar covertest **exotropi + hypotropi**."
    ],
    "diag": [
     "Barn med kraftig hyperopi kan utveckla **esotropi** (inåtskelning) eftersom ackommodation och konvergens hör ihop."
    ],
    "hand": [
     "Barn med skelning ska snabbt till ögonläkare eftersom det kan leda till **amblyopi**."
    ],
    "flagg": [
     "Missad skelning hos barn kan ge bestående synnedsättning (amblyopi)."
    ],
    "ddx": [
     [
      "t9-219",
      "Tropi och fori",
      "Covertest skiljer manifest och latent skelning."
     ],
     [
      "t9-218",
      "Synutveckling och amblyopi",
      "Skelning är en orsak till amblyopi."
     ],
     [
      "t9-205",
      "Ögonmuskelpares",
      "Paralytisk skelning hos vuxna."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 13–14, 27"
    ]
   },
   "card": {},
   "km": [
    "ogon:115",
    "ogon:1"
   ]
  },
  {
   "id": "t9-272",
   "name": "Tonometri",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Tonometri** är mätning av ögontrycket (IOP). Trycket skapas av kammarvatten som bildas i strålkroppen och dräneras via trabekelverket till Schlemms kanal. Normalt tryck är **<22 mmHg**.",
    "klin": [
     {
      "tbl": [
       [
        "Tillstånd",
        "Tryck"
       ],
       [
        "Normalt",
        "<22 mmHg"
       ],
       [
        "Akut glaukom",
        "60–70 mmHg"
       ],
       [
        "Högtrycksglaukom (PÖG)",
        "Högt tryck (>22 mmHg) + synfältsdefekt"
       ],
       [
        "Lågtrycksglaukom",
        "Normalt tryck + synfältsdefekter"
       ],
       [
        "Okulär hypertension",
        "Högt tryck utan synfältsdefekt"
       ]
      ]
     }
    ],
    "diag": [
     "Mät trycket på ögonmottagningen vid **irit** (kan ge tryckstegring), vernal konjunktivit, keratiter och herpes zoster oftalmikus.",
     "Följ trycket vid **steroiddroppar** (risk för tryckstegring) och efter **centralvenstrombos** (risk för sekundärglaukom via kärlproliferation).",
     "Vid akut glaukom: mät om efter 1 h behandling – sjunkit → hem, inte sjunkit → inläggning med iv mannitol."
    ],
    "hand": [
     "Glaukompatienter följs regelbundet med tryck, synfält och papillbedömning.",
     "Förstagradssläktingar till glaukompatienter kontrolleras från 40–50 år och sedan vartannat år.",
     "Saknas tonometer kan bulben palperas genom ögonlocket (stenhårt vid akut glaukom)."
    ],
    "flagg": [
     "Normalt tryck utesluter inte glaukom (lågtrycksglaukom).",
     "Patienten märker inte själv att ögontrycket stiger."
    ],
    "ddx": [
     [
      "t9-198",
      "Kroniskt glaukom",
      "Ofta förhöjt tryck med papill- och synfältsskada."
     ],
     [
      "t9-181",
      "Akut glaukom",
      "Mycket högt tryck, 60–70 mmHg."
     ],
     [
      "t9-262",
      "Palpation av bulben vid akut glaukom",
      "Grov bedömning utan tonometer."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 3, 8–13, 16–18"
    ]
   },
   "card": {},
   "km": [
    "ogon:116"
   ]
  },
  {
   "id": "t9-273",
   "name": "Refraktionering",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Refraktion** är ett mått på den optiska brytande kraften i ögats medier. **Refraktionering** innebär att bestämma ögats brytningsfel och vilken korrektion som ger bäst syn. Ca ⅔ av brytningen sker i övergången mellan luft och hornhinna.",
    "klin": [
     {
      "tbl": [
       [
        "Brytningsfel",
        "Mekanism",
        "Korrektion"
       ],
       [
        "Hyperopi (långsynthet)",
        "Litet/kort öga, bilden hamnar bakom näthinnan",
        "Plusglas"
       ],
       [
        "Myopi (närsynthet)",
        "Stort/långt öga, bilden hamnar framför näthinnan",
        "Minusglas"
       ],
       [
        "Astigmatism",
        "Oregelbunden brytning pga. hornhinnans/linsens form",
        "Regelbunden: glasögon"
       ],
       [
        "Presbyopi",
        "Linsen stelnar, kan inte ackommodera",
        "Läsglasögon, initialt +1 dioptri"
       ]
      ]
     }
    ],
    "diag": [
     "Vårdcentral: visus och utprovning av plus- respektive minusglas.",
     "Ögonmottagning: **autorefraktion** (apparat som mäter refraktionen) och **skiaskopi hos barn <8 år**.",
     "Oregelbunden astigmatism orsakas oftast av korneala ärr eller keratokonus och är svår att korrigera med glasögon."
    ],
    "hand": [
     "Vuxna med brytningsfel kan gå till optiker; barn till ögonläkare.",
     "Tilltagande myopi hos äldre kan vara tecken på katarakt.",
     "Refraktionsfel med synbesvär kan bidra till spänningshuvudvärk."
    ],
    "flagg": [
     "Barn med kraftig hyperopi kan börja skela inåt och utveckla amblyopi – snabbt till ögonläkare.",
     "Unga hyperopa kan kompensera med ackommodation och ha astenopiska besvär trots god visus."
    ],
    "ddx": [
     [
      "t9-217",
      "Refraktionsfel",
      "Grundtillstånden som refraktioneringen bestämmer."
     ],
     [
      "t9-199",
      "Refraktionsproblem och presbyopi",
      "Åldersrelaterad ackommodationsförlust."
     ],
     [
      "t9-203",
      "Keratokonus",
      "Ökande myopi och oregelbunden astigmatism."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 3–4, 13–14, 15",
     "Kompendium Neurologi (T9), s. 8"
    ]
   },
   "card": {},
   "km": [
    "ogon:117"
   ]
  },
  {
   "id": "t9-274",
   "name": "Färgsinnesundersökning",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Färgsinnesundersökning** (t.ex. med **Ishihara**-tavlor) används främst för att påvisa **nedsatt färgseende vid synnervspåverkan**.",
    "klin": [
     "Tappar i makula står för högupplöst syn och **färgseende**; stavar detekterar inte färg.",
     "Vid optikusneurit uppfattas färgerna **dovare**; testa särskilt **rött**."
    ],
    "diag": [
     "**Optikusneurit**: nedsatt färgseende (Ishihara), kan kvarstå länge efter utläkning.",
     "**AION**: fel på Ishihara; svårare AION ger mer färgsinnesdefekt.",
     "Optikusneurit kan ge dåligt färgseende trots relativt bra syn, vilket kan hjälpa att skilja den från AION.",
     "**Katarakt** kan ge förändrat färgseende."
    ],
    "hand": [
     "Vårdcentral: testa färgseende (rött) vid misstänkt optikusneurit, tillsammans med visus, swinging flashlight och oftalmoskopi; ögonmottagning gör formell färgsinnesundersökning."
    ],
    "flagg": [
     "Nedsatt färgseende med RAPD och smärta vid ögonrörelser hos ung patient → tänk optikusneurit/MS."
    ],
    "ddx": [
     [
      "t9-193",
      "Optikusneurit",
      "Nedsatt färgseende, särskilt för rött."
     ],
     [
      "t9-196",
      "Ischemisk optikusneuropati",
      "Färgsinnesdefekt hos äldre med papillsvullnad."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 4, 15, 20, 22"
    ]
   },
   "card": {},
   "km": [
    "ogon:118"
   ]
  },
  {
   "id": "t9-275",
   "name": "Kataraktoperation",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Kataraktoperation** innebär att den grumliga linsen avlägsnas med **fakoemulsifikation** och ersätts med en **intraokulär lins (IOL)**. Det är behandlingen vid katarakt.",
    "klin": [
     "Snitt genom kornea vid limbus (ca **2 mm**).",
     "Hål rivs i den främre linskapseln.",
     "Linsen skakas sönder med en ultraljudsprob (fakoemulsifikation) och sugs ut.",
     "En **IOL** sätts in."
    ],
    "diag": [
     {
      "h": "Indikation"
     },
     "Synnedsättning pga. katarakt (suddig syn, bländning, förändrat färgseende, monokulärt dubbelseende).",
     "Även vid **normal visus** kan betydande **bländning och dubbelseende** vara operationsindikation.",
     "Utredning på vårdcentral: visus med minusglas och stenopeiskt hål, inspektion av linsgrumling och **nedsatt röd reflex** i genomfallande ljus; ögonläkare mikroskoperar och dilaterar."
    ],
    "beh": [
     "Prognosen är generellt god."
    ],
    "hand": [
     "Uppföljning hos ögonläkare några veckor postoperativt.",
     "**Efterstarr** (5–50 %): linsepitelceller vid ekvatorn prolifererar och migrerar till den bakre kapseln → grumling och suddig syn; åtgärdas med **YAG-laser** som skjuter hål i bakre kapseln."
    ],
    "flagg": [
     "**Endoftalmit** (intraokulär infektion/inflammation) drabbar <0,3 promille men är **synhotande**.",
     "Makuladegeneration är differentialdiagnos till katarakt och förbättras inte av operation – skilj med stenopeiskt hål."
    ],
    "ddx": [
     [
      "t9-197",
      "Katarakt",
      "Indikationen för operationen."
     ],
     [
      "t9-190",
      "Endoftalmit",
      "Allvarlig postoperativ komplikation."
     ],
     [
      "t9-201",
      "Åldersrelaterad makuladegeneration",
      "Central synnedsättning som inte åtgärdas med linsbyte."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 15–16"
    ]
   },
   "card": {},
   "km": [
    "ogon:119"
   ]
  },
  {
   "id": "t9-276",
   "name": "Kontaktlinsuttagning",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:120"
   ]
  },
  {
   "id": "t9-277",
   "name": "Ledsagning av synskadad patient",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "ogon:121"
   ]
  },
  {
   "id": "t9-278",
   "name": "Perimetri",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Perimetri** är en formell (datoriserad) **synfältsundersökning** som görs på ögonmottagning, t.ex. med **Humphrey field analyzer (HFA)**, för att påvisa och följa synfältsdefekter.",
    "klin": [
     {
      "tbl": [
       [
        "Tillstånd",
        "Synfältsfynd"
       ],
       [
        "Glaukom",
        "Perifera defekter som långsamt breder ut sig; visus bevarat länge"
       ],
       [
        "Synbanekompression (hypofystumör)",
        "**Bitemporal hemianopsi**, börjar ofta uppifrån temporalt"
       ],
       [
        "Staspapill",
        "**Förstorad blind fläck**, senare perifer synfältsinskränkning"
       ],
       [
        "Amotio",
        "Synfältsförminskning"
       ],
       [
        "Migränaura",
        "Flimmerskotom intill fixationspunkten i båda ögonens synfält"
       ]
      ]
     }
    ],
    "diag": [
     "Glaukomdiagnos ställs med synfältsundersökning, tryckmätning och bedömning av papill och kammarvinkel.",
     "Vid synbanekompression följs synfälten för att bedöma effekt av ev. operation."
    ],
    "hand": [
     "Glaukom följs regelbundet med synfält, tryck och papill.",
     "Efter akut glaukom följs patienten med synfältsundersökning och tryckmätning."
    ],
    "flagg": [
     "Glaukomdefekter märks sent av patienten – kan leda till indragning av körkort.",
     "Synfältsdefekter kan vara första symtom på intrakraniell process."
    ],
    "ddx": [
     [
      "t9-265",
      "Synfältsundersökning med konfrontation",
      "Grov mottagningsmetod."
     ],
     [
      "t9-209",
      "Synfältsbortfall",
      "Perimetri kartlägger bortfallet."
     ],
     [
      "t9-198",
      "Kroniskt glaukom",
      "Följs med perimetri."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 13, 15–17, 23–24",
     "Kompendium Neurologi (T9), s. 8"
    ]
   },
   "card": {},
   "km": [
    "ogon:122",
    "ogon:1"
   ]
  },
  {
   "id": "t9-279",
   "name": "Synprövning på barn",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Synprövning på barn syftar till att upptäcka **brytningsfel, skelning och amblyopi** i tid. Kompendiet betonar att barn med brytningsfel ska till **ögonläkare** och att **skiaskopi** görs hos barn under 8 år.",
    "klin": [
     "Barn är ofta **hyperopa vid födseln** men ackommoderar och får klar bild; hyperopin minskar med åren.",
     "Kraftig hyperopi kan ge **esotropi** och leda till **amblyopi**.",
     "Myopi upptäcks ofta hos barn/unga."
    ],
    "diag": [
     "**Skiaskopi** (objektiv refraktionsbestämning) hos barn **<8 år**.",
     "Undersök ögonbottnar och gör **covertest** för att upptäcka skelning.",
     "Kontrollera **visus med regelbundna intervall** hos barn med astigmatism.",
     "Differentialdiagnoser vid synnedsättning hos barn: brytningsfel, amblyopi, katarakt, förändring i ögonbotten."
    ],
    "hand": [
     "Barn med brytningsfel följs hos ögonläkare (vuxna hos optiker).",
     "Barn med juvenil idiopatisk artrit följs med regelbundna ögonkontroller (smärtfri kronisk uveit)."
    ],
    "flagg": [
     "Skelning eller kraftig hyperopi hos barn → snabbt till ögonläkare (risk för amblyopi)."
    ],
    "ddx": [
     [
      "t9-218",
      "Synutveckling och amblyopi",
      "Målet med synprövningen är att upptäcka amblyopi i tid."
     ],
     [
      "t9-219",
      "Tropi och fori",
      "Skelning upptäcks med covertest."
     ],
     [
      "t9-216",
      "Vit pupill",
      "Avvikande reflex kräver akut bedömning."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 9, 13–14"
    ]
   },
   "card": {},
   "km": [
    "ogon:123"
   ]
  },
  {
   "id": "t9-280",
   "name": "Tolkning av ett glasögonrecept",
   "specialty": "Ögonsjukdomar",
   "sub": "Praktiska färdigheter",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Ett glasögonrecept anger den korrektion som behövs. Enligt kompendiet korrigeras **hyperopi med plusglas**, **myopi med minusglas**, regelbunden **astigmatism** med glasögon och **presbyopi med läsglasögon**.",
    "klin": [
     "**Plusglas** (+ dioptrier): hyperopi.",
     "**Minusglas** (– dioptrier): myopi.",
     "Astigmatismkorrektion: regelbunden astigmatism går att korrigera med glasögon; oregelbunden är svårare.",
     "**Läsglasögon**: initialt ca **+1 dioptri**, styrkan ökar med åldern; läsglasålder 45–50 år."
    ],
    "diag": [
     "Hyperopa blir **presbyopa tidigare** eftersom de ackommoderar även på långt håll.",
     "Successivt ökande myopi hos äldre kan vara tecken på katarakt."
    ],
    "hand": [
     "Vuxna med brytningsfel och presbyopi kan gå till optiker; barn till ögonläkare."
    ],
    "flagg": [
     "Tilltagande minusbehov hos äldre – tänk katarakt."
    ],
    "ddx": [
     [
      "t9-217",
      "Refraktionsfel",
      "Grunden för receptet."
     ],
     [
      "t9-199",
      "Refraktionsproblem och presbyopi",
      "Läsaddition."
     ]
    ],
    "src": [
     "Ögonboken – sammanfattning (T9), s. 13–15"
    ]
   },
   "card": {},
   "km": [
    "ogon:124"
   ]
  },
  {
   "id": "t9-281",
   "name": "Anatomi inom ÖNH",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Anatomi",
   "ty": "anat",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Kompendiet har inget eget anatomikapitel, men flera **anatomiska fakta** återkommer i sjukdomsavsnitten och behövs för att förstå öron-, näs-, bihåle-, orbita- och luftvägssjukdomar.",
    "klin": [
     {
      "h": "Öra"
     },
     "**Ytteröra/hörselgång**: talgkörtlar och hårsäckskörtlar finns i hörselgångens **yttre tredjedel** (där hörselgångsfurunkel uppstår). Ytterörats brosk bryts ned snabbt och kan inte regenerera.",
     "**Trumhinnan** har ett mellersta kollagent lager som ger styvhet; indragningsfickor vid kolesteatom utgår från **pars flaccida**. Bakom trumhinnan ligger promontoriet.",
     "Ljudet leds via mellanörat och hörselbenskedjan (med **stapes**) till innerörat genom **ovala fönstret**; mastoidens cellsystem står i förbindelse med mellanörat.",
     "**Koklea**: hårcellerna i snäckans **basala del** dör först vid presbyakusis (diskanten drabbas); stria vascularis och basilarmembranet är andra strukturer i innerörat.",
     "**Balansorganet**: otoliter sitter på **macula utriculi**; båggångarna (posteriora, laterala m.fl.) registrerar rotation. Perifer yrsel utgår från vestibularisorganet eller n. vestibularis.",
     {
      "h": "N. facialis"
     },
     "Nerven passerar temporalbenet (ganglion geniculi) och innerverar bl.a. m. stapedius. Övre ansiktshalvan har **bilateral kortikal innervering** – därför sparas pannan vid central pares.",
     {
      "h": "Näsa och bihålor"
     },
     "**Frontal-, maxillarsinus och främre etmoidalceller** dräneras under **concha media**; sfenoidalsinus och bakre etmoidalceller under concha superior.",
     "Os nasale begränsas uppåt av frontalbenet och bakåt av maxilla; **septum** har en främre broskdel och en bakre bendel.",
     {
      "h": "Orbita och mellanansikte"
     },
     {
      "tbl": [
       [
        "Vägg",
        "Ben (granne)"
       ],
       [
        "Tak",
        "Os frontale (frontalsinus, främre skallgropen)"
       ],
       [
        "Golv",
        "Maxilla och os zygomaticum (maxillarsinus)"
       ],
       [
        "Medialvägg",
        "Os frontale, lacrimale, ethmoidale, maxilla (etmoidalsinus)"
       ],
       [
        "Lateralvägg",
        "Os zygomaticum, sphenoidale, frontale"
       ]
      ]
     },
     "N. opticus och a. ophthalmica går genom canalis opticus; CN III, IV, V och VI genom **fissura orbitalis superior**; n. infraorbitalis genom fissura orbitalis inferior.",
     {
      "h": "Luftvägar"
     },
     "**Rima glottidis** är ca 6–7 mm hos spädbarn, 13 mm hos kvinnor och 20 mm hos män; aspirerade främmande kroppar hamnar oftare i höger bronk av anatomiska skäl."
    ],
    "hand": [
     "Anatomin förklarar kliniska mönster: tubar-/ostiedysfunktion ger SOM respektive sinuit, och en fraktur i orbitagolvet ger förbindelse med maxillarsinus (patienten får inte snyta sig).",
     "Vid temporalbensfraktur kan hörselgång, mellanöra, inneröra och n. facialis skadas beroende på frakturlinjens förlopp."
    ],
    "flagg": [
     "Missbildning i ytterörat kan sammanfalla med missbildning i inre delar – tänk på hörselnedsättning.",
     "Central facialispares sparar pannan; drabbas hela ansiktshalvan är paresen perifer."
    ],
    "ddx": [
     [
      "t9-318",
      "Perifer och central facialispares",
      "Bygger på facialis bilaterala innervering av övre ansiktshalvan."
     ],
     [
      "t9-333",
      "Ansikts- och skallbasfrakturer",
      "Orbitans och temporalbenets anatomi styr symtomen."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 4–5, 7–9, 11, 13, 18, 20, 23–24, 36"
    ]
   },
   "card": {},
   "km": [
    "onh:0"
   ]
  },
  {
   "id": "t9-282",
   "name": "Differentialdiagnostik vid otalgi",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Otalgi** (öronvärk) är vanligt, framför allt hos små barn, och kan bero på tillstånd i örat, i intilliggande strukturer eller vara **refererad smärta** från andra delar av ansiktet.",
    "klin": [
     "Skilj verklig smärta/värk från tryckkänsla, lock eller annat som patienten beskriver som ”ont i örat”.",
     {
      "h": "Orsaker"
     },
     "**Öronorsaker**: [[t9-283|akut mediaotit]] (vanligast), simplexotit, [[t9-284|sekretorisk otit]], [[t9-286|extern otit]].",
     "**Refererad smärta**: temporomandibulär dysfunktion (TMD), tonsillit/faryngit, tand- och munhålebesvär.",
     "Övrigt i kompendiet med öronvärk: [[t9-290|zoster oticus]] (ensidig smärta, ev. blåsor), traumatisk perforation (momentan smärta) och perikondrit."
    ],
    "diag": [
     "Fråga om associerade symtom: allmänsymtom/förkylningstecken, hörselnedsättning/lockkänsla, tinnitus, sekretion, klåda och yrsel.",
     "Karakterisera smärtan: uni- eller bilateral, intensitet, debut, förlopp, utstrålning och lokalisation.",
     "Otoskopi (trumhinnans utseende och rörlighet vid siegling) skiljer AOM från simplexotit; vid tinnitus/käkbesvär ingår även munhåla/svalg och palpation av tuggmuskulatur."
    ],
    "hand": [
     "Handläggningen styrs av orsaken – se respektive tillstånd.",
     "Normalt öronstatus vid öronvärk bör leda tanken till refererad smärta (käke, svalg, tänder)."
    ],
    "flagg": [
     "Avsaknad av värk utesluter inte AOM.",
     "Ensidiga öronbesvär hos vuxen med SOM-bild ska till ÖNH (epifarynxcancer kan ge otalgi och ensidig hörselnedsättning).",
     "Öronvärk med facialispares, yrsel eller hörselnedsättning – tänk zoster oticus."
    ],
    "ddx": [
     [
      "t9-283",
      "Akut mediaotit",
      "Buktande, stel trumhinna; vanligaste orsaken."
     ],
     [
      "t9-286",
      "Extern otit och perikondrit",
      "Svullen hörselgång, smärta vid tuggning och tragusömhet."
     ],
     [
      "t9-290",
      "Zoster oticus",
      "Herpesblåsor och neurologiska symtom."
     ],
     [
      "t9-345",
      "Tonsillit och peritonsillit",
      "Refererad smärta från svalget."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 2–6",
     "Kompendium ÖNH (T9), s. 41"
    ]
   },
   "card": {},
   "km": [
    "onh:1"
   ]
  },
  {
   "id": "t9-283",
   "name": "Akut mediaotit och otit recidiv eller terapisvikt",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Akut mediaotit (AOM)** är en akut mellanöreinfektion, oftast sekundär till viral övre luftvägsinfektion. **Terapisvikt** = oförändrad, förvärrad eller på nytt uppblossande AOM trots >3 dygns antibiotika; **recidivotit** = ny AOM inom 1 månad.",
    "klin": [
     "Bakterier påvisas i ca 70 % – klart vanligast **pneumokocker** (oftast orsak till komplikationer som mastoidit/meningit, spontanläker i ca 60 %) och **Haemophilus** (lägre penicillinkänslighet, spontanläker i >50 %).",
     "50 % av barn <4 år har haft minst en AOM; första AOM före 6 månaders ålder ger 80 % risk att bli otitbenägen.",
     "Föregås ofta av ÖLI (snuva, halsont, hosta, irritation, feber); snabbt insjuknande (<48 h), ofta på kvällen/natten.",
     "Plötslig, intermittent öronvärk, lockkänsla, hörselnedsättning, feber, ibland öronflytning. **Avsaknad av värk utesluter inte AOM.**",
     "Vid spontanperforation kommer blodig flytning och värken släpper. Under läkningen följer en period med SOM."
    ],
    "diag": [
     "**Otoskopi**: buktande, ofta navlad trumhinna – inte alltid röd, ibland bullae.",
     "**Siegling**: stel trumhinna (vid simplexotit är rörligheten bevarad).",
     "Efter perforation: blek, chagrinerad (fiskfjälls-/flugsvampslik) trumhinna. Tympanometri som komplement."
    ],
    "beh": [
     "Förstahand: **högläge**, **paracetamol/ibuprofen**, nässpray vid nästäppa.",
     "**PcV 1,6 g (eller 25 mg/kg) × 3 i 5 dagar** när antibiotika är aktuellt.",
     {
      "h": "Antibiotika vid"
     },
     "Spontanperforation; barn <2 år med bilateral AOM; otitbenägna (≥3 AOM/6 mån); recidivotit; vuxenotit.",
     "Komplicerande faktorer: svår värk trots analgetika, infektionskänslighet, missbildning i ansiktsskelett/inneröra, tillstånd efter skall-/ansiktsfraktur, cochleaimplantat, känd sensorineural hörselnedsättning."
    ],
    "hand": [
     "**Ensidig AOM**: kontroll endast vid kvarvarande symtom – hörselnedsättning efter 3 mån; värk, lockkänsla, flytning eller balanspåverkan tidigare.",
     "**Dubbelsidig AOM + SOM**: <4 år kontroll efter 3 mån; ≥4 år kontroll endast vid kvarvarande symtom.",
     "Upprepade AOM kan vara indikation för [[t9-292|plaströr]]."
    ],
    "flagg": [
     "Terapisvikt (ingen förbättring efter >3 d antibiotika) kräver omvärdering.",
     "Pneumokock-AOM kan ge [[t9-288|mastoidit och otogen meningit]] – särskilt små barn med utstående öra eller allmänpåverkan.",
     "Balanspåverkan vid otit ska föranleda tidigare kontroll."
    ],
    "ddx": [
     [
      "t9-284",
      "Sekretorisk otit",
      "Vätska utan akut infektion; hörselnedsättning ofta enda symtom."
     ],
     [
      "",
      "Simplexotit",
      "Rodnad trumhinna men bevarad rörlighet vid siegling."
     ],
     [
      "t9-286",
      "Extern otit och perikondrit",
      "Infektion i hörselgången, smärta vid tuggning."
     ],
     [
      "t9-288",
      "Mastoidit och otogen meningit",
      "Komplikation med utstående öra/allmänpåverkan."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 2–3, 5–6"
    ]
   },
   "card": {},
   "km": [
    "onh:2",
    "onh:4"
   ]
  },
  {
   "id": "t9-284",
   "name": "Sekretorisk otit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Sekretorisk otit (SOM)** innebär vätska i mellanörat utan akuta infektionstecken. Den är den **vanligaste öronsjukdomen** och vanligaste orsaken till **hörselnedsättning hos barn**.",
    "klin": [
     "70–80 % av alla barn har haft SOM före skolåldern; >3 gånger större risk för kvarstående SOM om första AOM inträffat före 6 månaders ålder.",
     "Multifaktoriell etiologi, där **tubardysfunktion** och undertryck i mellanörat är viktigt. Följer ofta en AOM.",
     "Ofta är **hörselnedsättning** (ledningshinder i basen) enda symtom.",
     "Äldre barn/vuxna: tryck-, lock- eller fyllnadskänsla, huggsmärta vid sväljning/gäspning, pipande/krasande ljud och distorsion av ljud.",
     "Hög spontanläkning (⅔ inom en månad, 90 % inom 6 månader) men återfall är vanliga."
    ],
    "diag": [
     "Otoskopi/otomikroskopi, **tympanometri** och hörselprov.",
     "Blek, förtjockad (ofta kärlinjicerad) trumhinna i normalläge eller lätt indragen med bevarade strukturer; ibland halmgul vätska och luftbubblor.",
     "Vid ensidiga besvär är **Webers test** till nytta (lateraliseras till öra med ledningshinder)."
    ],
    "beh": [
     "Förstahand **expektans** – 70–80 % utläkta efter 3 mån.",
     "Autoinflation (valsalva/otoventballong) och näsdroppar vid samtidig nästäppa.",
     "Vid kvarstående SOM med hörselpåverkan: [[t9-292|paracentes/plaströr]] (indikationer enligt ÖNH)."
    ],
    "hand": [
     "Kontroll efter 3 mån; vid kvarstående lindriga besvär kan man vänta ytterligare 3 mån, annars remiss ÖNH.",
     "Barn med SOM + hörselnedsättning → remiss ÖNH för ställningstagande till rör."
    ],
    "flagg": [
     "**Vuxen med ensidig SOM ska alltid remitteras till ÖNH** – uteslut epifarynxcancer.",
     "Långvarig SOM med hörselnedsättning hos barn kan påverka språk och sociala funktioner – bedöm graden av besvär."
    ],
    "ddx": [
     [
      "t9-283",
      "Akut mediaotit",
      "Buktande, stel trumhinna med värk och feber."
     ],
     [
      "t9-287",
      "Kronisk otit",
      "Bestående perforation, adhesivotit eller kolesteatom med flytning."
     ],
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Epifarynxcancer kan ge ensidig SOM hos vuxen."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 2–3, 6, 41"
    ]
   },
   "card": {},
   "km": [
    "onh:3"
   ]
  },
  {
   "id": "t9-285",
   "name": "Otitbenägna barn",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Otitbenägna barn** är barn som haft **≥3 akuta mediaotiter inom 6 månader**.",
    "klin": [
     "Om första AOM inträffar **före 6 månaders ålder** föreligger 80 % risk att barnet blir otitbenäget.",
     "Tidig första AOM ger också >3 gånger större risk för kvarstående SOM."
    ],
    "beh": [
     "Otitbenägna barn med AOM ska ha **antibiotika** (PcV 1,6 g eller 25 mg/kg × 3 i 5 dagar).",
     "Upprepade recidiverande AOM är en indikation för [[t9-292|plaströr]] – saknar evidens men görs på beprövad erfarenhet."
    ],
    "hand": [
     "Remiss till ÖNH för ställningstagande till rör; barn med missbildning eller funktionshinder bedöms mer frikostigt.",
     "Följ hörseln, särskilt vid samtidig SOM."
    ],
    "flagg": [
     "Skilj recidivotit (ny AOM inom 1 mån) och terapisvikt från ny infektion.",
     "Upprepade infektioner kan leda till [[t9-287|kronisk otit]]."
    ],
    "ddx": [
     [
      "t9-283",
      "Akut mediaotit",
      "Enskild episod; otitbenägenhet förutsätter ≥3 episoder/6 mån."
     ],
     [
      "t9-284",
      "Sekretorisk otit",
      "Kvarstående vätska mellan infektionerna."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 2–3, 5–6"
    ]
   },
   "card": {},
   "km": [
    "onh:4"
   ]
  },
  {
   "id": "t9-286",
   "name": "Extern otit och perikondrit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Extern otit** är inflammation i hörselgången, **infektiös** (akut diffus, hörselgångsfurunkel, kronisk diffus) eller **eksematös**. **Perikondrit** är infektion i öronbrosket.",
    "klin": [
     "Infektiös extern otit är vanligen bakteriell (**S. aureus**, **Pseudomonas aeruginosa**), men kan orsakas av virus (VZV, HSV) och svamp (Aspergillus).",
     "**Akut diffus**: klåda och obehag → värmeökning, värk och svullnad av hörselgången (kan fyllas av detritus); ofta purulent sekretion, smärta vid tuggning. Vanligaste orsaken till igensvälld hörselgång.",
     "**Hörselgångsfurunkel**: infektion i talg-/hårsäckskörtel i yttre tredjedelen; rodnad, svullnad, värk, uttalad **tragusömhet**, ibland feber och lymfadenit.",
     "**Eksematös**: klåda, ofta erytem, ibland detritus; klåda utan synliga fynd = klådexterna.",
     "**Perikondrit**: efter trauma, förfrysning, operation, akupunktur, piercing eller svår extern otit; diffust rodnad, förtjockad, öm ytteröra **utom örsnibben**, feber."
    ],
    "beh": [
     "**Rengöring** med sug/pinnar, helst i mikroskop – grunden för effektiv behandling.",
     "Lokalt Diproderm-droppar (grupp III-steroid) × 2–3 i 7–10 d; till små barn Terracortril med Polymyxin B.",
     "Kraftig svullnad: tamponad med Alsolsprit 1–2 dagar före lokalbehandling. Pseudomonasväxt: ciprofloxacindroppar.",
     "Kraftig smärta: paracetamol och antiinflammatoriskt (t.ex. diklofenak).",
     "Furunkel: tamponad i yttre hörselgången, incision sällan nödvändig. Eksematös: grupp II-steroid (Locoid-lösning).",
     "Perikondrit: kan kräva **inläggning och i.v. antibiotika** samt fuktigt omslag med Alsolsprit."
    ],
    "hand": [
     "De flesta sköts med rengöring och lokalbehandling i öppenvård; perikondrit kräver ofta sjukhusvård."
    ],
    "flagg": [
     "Brosk bryts ned snabbt och kan inte regenerera – behandla perikondrit kraftfullt.",
     "Utan rengöring blir lokalbehandlingen verkningslös.",
     "Upprepade externa otiter kan förtjocka trumhinnan och ge ledningshinder."
    ],
    "ddx": [
     [
      "t9-283",
      "Akut mediaotit",
      "Hörselgången normal, buktande trumhinna."
     ],
     [
      "t9-290",
      "Zoster oticus",
      "Blåsor i hörselgång/öronmussla och neurologiska symtom."
     ],
     [
      "t9-297",
      "Vaxpropp och tamponad i hörselgången",
      "Vaxpropp ger ledningshinder utan inflammation."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 4, 8"
    ]
   },
   "card": {},
   "km": [
    "onh:5"
   ]
  },
  {
   "id": "t9-287",
   "name": "Kronisk otit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Kronisk otit** omfattar flera icke reversibla tillstånd i mellanörat/cellsystemet orsakade av upprepade infektioner: **kronisk perforation**, **adhesivotit** och **kolesteatom**.",
    "klin": [
     "**Kronisk perforation**: upprepade perforationer ger ett kvarstående hål.",
     "**Adhesivotit**: trumhinnans mellersta kollagena lager förstörs, trumhinnan kollapsar inåt och adhererar mot promontoriet.",
     "**Kolesteatom**: indragning i **pars flaccida** som förlorar sin självrengöring och fylls med skivepitel och bakterier; kroniskt tryck, hörselnedsättning, flytning och illaluktande sekret, ibland krusta eller polyp.",
     "Sekundärinfektion med illaluktande sekretion och hörselnedsättning är vanligt."
    ],
    "beh": [
     "Rengöring av hörselgången och örondroppar (Terracortril med Polymyxin B).",
     "Vid kolesteatom: rengöring, ev. extraktion av polyp; håll örat rent med koksaltsköljning eller Alsolsprit i väntan på ÖNH.",
     "Kirurgi: [[t9-293|mastoidektomi (oftast kolesteatomkirurgi) och rekonstruktiv mellanörekirurgi]]."
    ],
    "hand": [
     "Vidare handläggning hos öronspecialist."
    ],
    "flagg": [
     "**Yrsel/balanspåverkan vid kolesteatom** – risk för båggångsfistel → snarast kirurgi.",
     "Ensidig illaluktande flytning med hörselnedsättning – tänk kolesteatom.",
     "Kolesteatom kan ge facialispares (gradvis progredierande)."
    ],
    "ddx": [
     [
      "t9-284",
      "Sekretorisk otit",
      "Reversibel; intakt trumhinna med vätska bakom."
     ],
     [
      "t9-286",
      "Extern otit och perikondrit",
      "Infektion i hörselgången, trumhinnan intakt."
     ],
     [
      "t9-319",
      "Orsaker till perifer facialispares",
      "Kolesteatom är en av orsakerna."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 5, 7, 13"
    ]
   },
   "card": {},
   "km": [
    "onh:6"
   ]
  },
  {
   "id": "t9-288",
   "name": "Mastoidit och otogen meningit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Akut mastoidit** och **otogen meningit** är mycket ovanliga komplikationer till mellanöreinfektion, oftast orsakade av pneumokocker.",
    "klin": [
     "Akut mastoidit är vanligast hos **barn <2 år**; inflammationen sprids från mellanörats slemhinna till mastoiden och följer venae emissariae genom benet.",
     "Hos barn kan **örat stå ut**, ibland med allmänpåverkan.",
     "**Otogen meningit** har samma klinik som annan meningit: feber, huvudvärk, illamående, medvetandepåverkan, nackstyvhet."
    ],
    "diag": [
     "Odling i samband med paracentes.",
     "Otogen meningit utreds som annan [[t9-080|bakteriell meningit]] (odlingar, LP)."
    ],
    "beh": [
     "Mastoidit: **remiss ÖNH, inläggning, paracentes**, odling och **i.v. antibiotika (Claforan)**.",
     "Vid behov **mastoidektomi** i narkos.",
     "Otogen meningit handläggs som annan meningit."
    ],
    "hand": [
     "Akut remiss/inläggning på ÖNH.",
     "Vid långdragna otiter kan det vara bra att rekommendera kontroll av nackstelhet."
    ],
    "flagg": [
     "Utstående öra och allmänpåverkan hos litet barn med otit = mastoidit tills motsatsen bevisats.",
     "Pneumokock-AOM står för de flesta komplikationerna.",
     "Bakteriell meningit är högakut – odlingar och antibiotika ska vara givna inom 60 min."
    ],
    "ddx": [
     [
      "t9-283",
      "Akut mediaotit",
      "Okomplicerad, utan retroaurikulär påverkan."
     ],
     [
      "t9-080",
      "Bakteriell meningit",
      "Samma klinik; otogen genes förutsätter öroninfektion."
     ],
     [
      "t9-286",
      "Extern otit och perikondrit",
      "Ytterörat är svullet/rodnat men mastoiden opåverkad."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 3, 5, 7",
     "Kompendium Neurologi (T9), s. 40"
    ]
   },
   "card": {},
   "km": [
    "onh:7"
   ]
  },
  {
   "id": "t9-289",
   "name": "Traumatisk trumhinneperforation",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Traumatisk trumhinneperforation** är ett hål i trumhinnan efter trauma – oftast självorsakat med tops, men även efter örfil, explosion eller dykning.",
    "klin": [
     "Endast **momentan smärta**, därefter hörselnedsättning, lockkänsla och ibland tinnitus eller blödning."
    ],
    "diag": [
     "**Weber** lateraliseras till det skadade örat (ledningshinder).",
     "**Otoskopi**: slitsformat hål med nedsatt rörlighet vid siegling – ett rundare hål är inte akut traumatiskt.",
     "**Tympanometri**: rakt streck (B-tympanogram) och ECV >1 ml."
    ],
    "beh": [
     "Infektionsrisk → **profylaktiskt PcV**.",
     "Örondroppar (Terracortril med Polymyxin B).",
     "De flesta läker inom en månad; kirurgi ([[t9-293|myringoplastik]]) tidigast efter ett år."
    ],
    "hand": [
     "Kontroll av läkning; remiss för kirurgi först om perforationen kvarstår efter lång tid."
    ],
    "flagg": [
     "Runt hål talar emot akut traumatisk genes – tänk kronisk perforation.",
     "Yrsel eller sensorineural hörselnedsättning efter trauma talar för innerörepåverkan/temporalbensfraktur."
    ],
    "ddx": [
     [
      "t9-287",
      "Kronisk otit",
      "Rund, kvarstående perforation efter upprepade infektioner."
     ],
     [
      "t9-283",
      "Akut mediaotit",
      "Spontanperforation med blodig flytning och feber."
     ],
     [
      "t9-333",
      "Ansikts- och skallbasfrakturer",
      "Hematotympanon, ledningshinder och facialispares."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 5, 24"
    ]
   },
   "card": {},
   "km": [
    "onh:8"
   ]
  },
  {
   "id": "t9-290",
   "name": "Zoster oticus",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Zoster oticus** (**Ramsay Hunts syndrom**) är en herpes zoster-infektion i örat med smärta, blåsor och ofta neurologiska bortfall som facialispares.",
    "klin": [
     "Börjar ofta med influensaliknande symtom och **ensidig öronsmärta**.",
     "Efter några dagar: **herpesblåsor** på trumhinnan, i hörselgången och på öronmusslan (kan utebli); även blåsor i svalget beskrivs.",
     "Vanligt med **facialispares**, hörselnedsättning, tinnitus och yrsel."
    ],
    "beh": [
     "Sedvanlig **antiviral behandling** och **steroider** om inte mer än några dagar gått.",
     "Analgetika mot smärtan."
    ],
    "hand": [
     "Facialispares handläggs med ögonskydd och uppföljning som vid annan perifer pares; se [[t9-320|Bells pares och behandling vid facialispares]]."
    ],
    "flagg": [
     "Blåsorna kan saknas – ensidig öronvärk följd av facialispares räcker för misstanke.",
     "Tidig behandling (inom några dagar) är avgörande."
    ],
    "ddx": [
     [
      "t9-320",
      "Bells pares och behandling vid facialispares",
      "Ingen uttalad smärta eller blåsor; uteslutningsdiagnos."
     ],
     [
      "t9-083",
      "Neuroborrelios",
      "Fästingbett, ofta bilateral pares."
     ],
     [
      "t9-286",
      "Extern otit och perikondrit",
      "Infektion utan neurologiska bortfall."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 6, 13"
    ]
   },
   "card": {},
   "km": [
    "onh:9"
   ]
  },
  {
   "id": "t9-291",
   "name": "Preauriculära fistlar och utstående öron",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Utstående öron** är den vanligaste missbildningen i ytterörat. **Preaurikulära fistlar** är rester av gälfåra och gälbågar framför och ovan tragus.",
    "klin": [
     "Utstående öron beror ofta på att **anthelixvecket saknas** → skålformade öron som tappar sin naturliga vinkling.",
     "Preaurikulära fistlar är vanligen **bilaterala**."
    ],
    "beh": [
     "Fistlar åtgärdas inte om de inte blir **infekterade**.",
     "Vid utstående öron väntar man med bedömning till **året före skolstart**."
    ],
    "hand": [
     "Missbildning i ytterörat bör föranleda bedömning av hörseln."
    ],
    "flagg": [
     "Finns missbildning i yttre örat kan det även finnas i inre – risk för hörselnedsättning."
    ],
    "ddx": [
     [
      "t9-379",
      "Lateral och medial halscysta och halsfistel",
      "Också gälbågsrester, men på halsen."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 6"
    ]
   },
   "card": {},
   "km": [
    "onh:10"
   ]
  },
  {
   "id": "t9-292",
   "name": "Paracentes och plaströr",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Paracentes** är ett snitt i trumhinnan; **plaströr** (ventilationsrör) läggs i trumhinnan för att ventilera mellanörat vid långvarig SOM eller upprepade otiter.",
    "klin": [
     "Ca 10 000 operationer/år i Sverige, sällan före 2 års ålder.",
     "Enbart paracentes kan övervägas hos vuxna med SOM och hörselpåverkan (lokalbedövning); rörinsättning kräver narkos.",
     "Rören fungerar oftast 8–18 månader och får sitta tills de trillar ut av sig själva.",
     "Paracentes används även vid mastoidit (avlastning och odling)."
    ],
    "diag": [
     {
      "h": "Indikationer för plaströr"
     },
     "1. Bilateral SOM >3 mån med verifierad hörselnedsättning >25 dB **och** påverkan på sociala funktioner.",
     "2. Bilateral SOM >6 mån med hörselnedsättning enligt ovan **eller** påverkan på sociala funktioner.",
     "3. Upprepade recidiverande AOM (saknar evidens, beprövad erfarenhet).",
     "4. Barn med missbildning, funktionshinder m.m. bedöms mer frikostigt.",
     "Graden av besvär väger tyngre än exakta tidsgränser."
    ],
    "hand": [
     "Hörselkontroll **3 månader** efter rörinsättning.",
     "Patienten ska alltid ha **Terracortril med Polymyxin B** hemma att använda vid flytning.",
     "Inget evidensstöd för att skydda öronen vid bad hos små barn; kan bli aktuellt hos äldre barn som dyker (>0,8 m)."
    ],
    "flagg": [
     "Flytning genom röret behandlas med örondroppar – inte nödvändigtvis peroral antibiotika.",
     "Paracentes är också en del av handläggningen vid mastoidit."
    ],
    "ddx": [
     [
      "t9-284",
      "Sekretorisk otit",
      "Vanligaste indikationen."
     ],
     [
      "t9-285",
      "Otitbenägna barn",
      "Recidiverande AOM som indikation."
     ],
     [
      "t9-293",
      "Sanerande och rekonstruktiv mellanörekirurgi",
      "Större mellanöreingrepp."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 5–6"
    ]
   },
   "card": {},
   "km": [
    "onh:13"
   ]
  },
  {
   "id": "t9-293",
   "name": "Sanerande och rekonstruktiv mellanörekirurgi",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Mellanörekirurgi kan vara **sanerande** (avlägsna sjuk vävnad, t.ex. kolesteatom) och/eller **rekonstruktiv** (återställa trumhinna och hörselbenskedja).",
    "klin": [
     {
      "tbl": [
       [
        "Ingrepp",
        "Innehåll"
       ],
       [
        "Myringoplastik",
        "Reparation av trumhinnan med temporalisfascia under kvarvarande trumhinna eller fett från örsnibben"
       ],
       [
        "Ossikuloplastik",
        "Rekonstruktion av hörselbenskedjan med autologt ben eller titanprotes (total- eller delprotes där stapes sparas)"
       ],
       [
        "Stapedotomi",
        "Stapes skänklar tas bort och ersätts av protes – vid otoskleros"
       ],
       [
        "Mastoidektomi",
        "Utrymning av cellsystemet; mellanöra och mastoid exploreras och destruerad vävnad avlägsnas"
       ]
      ]
     }
    ],
    "diag": [
     "Myringoplastik vid kvarstående perforation (vid traumatisk perforation tidigast efter ett år).",
     "Mastoidektomi är oftast **kolesteatomkirurgi**, men görs även vid komplicerad mastoidit."
    ],
    "beh": [
     "Myringoplastik: fullnarkos hos barn, gärna lokalbedövning hos vuxna.",
     "Ossikuloplastik kan göras i lokalbedövning; mastoidektomi i princip alltid i fullnarkos.",
     "Rekonstruktion kan kombineras med mastoidektomi efter behov."
    ],
    "hand": [
     "Efter myringoplastik: sjukskrivning ett par veckor och undvik vatten i en månad (fettvadd vid dusch, inget badande)."
    ],
    "flagg": [
     "Kolesteatom med yrsel (risk för båggångsfistel) ska opereras snarast.",
     "Hörselbensskador efter trauma opereras i lugnt skede."
    ],
    "ddx": [
     [
      "t9-287",
      "Kronisk otit",
      "Huvudindikation för sanerande kirurgi."
     ],
     [
      "t9-292",
      "Paracentes och plaströr",
      "Mindre ingrepp för ventilation av mellanörat."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 5, 7, 24"
    ]
   },
   "card": {},
   "km": [
    "onh:14"
   ]
  },
  {
   "id": "t9-294",
   "name": "Fullständigt öron-, näs- och halsstatus",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Ett **öron-, näs- och halsstatus** omfattar inspektion och undersökning av öron, näsa, munhåla/svalg, larynx och hals samt relevanta kranialnerver, kompletterat med enkla hörsel- och balansprov.",
    "klin": [
     {
      "h": "Öron"
     },
     "**Otoskopi/otomikroskopi** med **siegling** (trumhinnans rörlighet); bedöm hörselgång, trumhinnans färg, läge och eventuella perforationer.",
     "Stämgaffelprov **Weber och Rinne**.",
     {
      "h": "Näsa"
     },
     "**Främre rhinoskopi** (t.ex. septumhematom, polyper, färgat sekret i mellersta näsgången); rhinoskopi/fiberskopi efter avsvällning och rensugning.",
     {
      "h": "Munhåla, svalg och larynx"
     },
     "Inspektion av munhåla och svalg med **tungspatel och spegel**; fiberskopi för att bedöma utrymmet. Larynx med spegel eller fiberskopi.",
     {
      "h": "Ansikte och nerver"
     },
     "**N. facialis** (rynka pannan, knipa med ögonen, rynka näsan, le, truta) och **n. trigeminus**-sensibilitet; palpation av ansiktsskelett och tuggmuskulatur, käkledsfunktion.",
     "Vid yrsel: nystagmus (Frenzelglasögon) och **Dix–Hallpike**."
    ],
    "diag": [
     "ÖNH-status, Weber/Rinne och tonaudiogram räcker långt i utredningen av hörselbesvär.",
     "Vid tinnitus är otomikroskopi, munhåla/svalg och palpation av tuggmuskulatur minimum."
    ],
    "hand": [
     "Ingår vid alla öron-, näs- och halsbesvär samt vid ansiktstrauma (otoskopi för hematotympanon, rhinoskopi för septumhematom)."
    ],
    "flagg": [
     "Glöm inte stämgaffeln innan remiss för hörselbesvär.",
     "Ensidiga fynd (SOM, nästäppa, tinnitus) hos vuxen kräver vidare utredning för att utesluta tumör."
    ],
    "ddx": [
     [
      "t9-295",
      "Öronmikroskop",
      "Fördjupad öronundersökning."
     ],
     [
      "t9-309",
      "Tonaudiogram och stämgaffelprov enligt Weber och Rinne",
      "Hörselprov som komplement."
     ],
     [
      "t9-317",
      "Otoneurologstatus",
      "Fördjupad undersökning vid yrsel."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 3, 8, 10–11, 18–19, 30, 35, 37"
    ]
   },
   "card": {},
   "km": [
    "onh:16"
   ]
  },
  {
   "id": "t9-295",
   "name": "Öronmikroskop",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Öronmikroskopet** (otomikroskopi) ger förstorad, binokulär insyn i hörselgång och trumhinna och används både för diagnostik och för åtgärder i hörselgången.",
    "klin": [
     "Bedöm trumhinnans utseende, läge och perforationer; komplettera med siegling för rörligheten.",
     "Används vid rengöring med sug/pinnar – helst i mikroskop."
    ],
    "diag": [
     "Diagnostik vid SOM (blek, förtjockad trumhinna, halmgul vätska, luftbubblor) och AOM.",
     "Ingår i minimiutredning vid tinnitus och i nivådiagnostiken vid perifer facialispares."
    ],
    "hand": [
     "**Rengöring** vid extern otit och kronisk otit – grunden för effektiv lokalbehandling.",
     "**Främmande kropp i öra**: gör ett försök med tång/hake i öronmikroskop på barn; därefter ev. narkos."
    ],
    "flagg": [
     "Spola aldrig vid organiskt främmande material – det kan svälla.",
     "Bara ett försök på barn – misslyckade försök försvårar fortsatt åtgärd."
    ],
    "ddx": [
     [
      "t9-296",
      "Öron- och nässug",
      "Används ofta tillsammans med mikroskopet."
     ],
     [
      "t9-294",
      "Fullständigt öron-, näs- och halsstatus",
      "Otoskopi ingår i basundersökningen."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 2, 4, 10, 13, 35"
    ]
   },
   "card": {},
   "km": [
    "onh:17"
   ]
  },
  {
   "id": "t9-296",
   "name": "Öron- och nässug",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Öron- och nässug** används för att rensa hörselgång och näskavitet från sekret, detritus och blod så att man kan undersöka och behandla.",
    "klin": [
     "**Öra**: rengöring med sug/pinnar, helst i mikroskop, vid extern otit och kronisk otit.",
     "**Näsa**: sug rent vid näsblödning innan avsvällning, bedövning och lokalisering av blödningskälla.",
     "Rensugning efter avsvällning inför rhinoskopi/fiberskopi vid misstänkt främmande kropp i näsan."
    ],
    "diag": [
     "Rensugning gör trumhinna respektive blödningskälla synlig och möjliggör korrekt diagnos."
    ],
    "hand": [
     "Rengöring av hörselgången ligger till grund för effektiv lokalbehandling vid extern otit.",
     "Vid näsblödning: sug rent → sväll av och bedöva (xylokain-adrenalin 15–20 min) → behandla blödningskällan."
    ],
    "flagg": [
     "Utan rengöring hjälper inte örondroppar.",
     "Vid kolesteatom ska örat hållas rent i väntan på ÖNH."
    ],
    "ddx": [
     [
      "t9-295",
      "Öronmikroskop",
      "Sugning görs helst under mikroskop."
     ],
     [
      "t9-326",
      "Främre näsblödning",
      "Rensugning är första steget."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 4–5, 17, 35"
    ]
   },
   "card": {},
   "km": [
    "onh:18"
   ]
  },
  {
   "id": "t9-297",
   "name": "Vaxpropp och tamponad i hörselgången",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Örats sjukdomar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Vaxpropp** är den vanligaste orsaken till ledningshinder. **Tamponad i hörselgången** används vid kraftigt svullen hörselgång vid extern otit och vid hörselgångsfurunkel.",
    "klin": [
     "Vaxpropp ger ledningshinder och syns vid öronstatus.",
     "**Alsolsprit-tamponad** under 1–2 dagar vid kraftig svullnad vid infektiös extern otit, innan lokalbehandling med droppar.",
     "Vid **hörselgångsfurunkel**: tamponad i yttre delen av hörselgången; incision sällan nödvändig."
    ],
    "diag": [
     "Ledningshinder: Weber lateraliseras till det sjuka örat."
    ],
    "beh": [
     "Rengöring med sug/pinnar, helst i mikroskop."
    ],
    "hand": [
     "Efter tamponaden fortsätter lokalbehandling med steroiddroppar (t.ex. Diproderm × 2–3 i 7–10 d)."
    ],
    "flagg": [
     "Spola aldrig vid organiskt främmande material i örat (kan svälla).",
     "Kvarstående hörselnedsättning efter avlägsnad propp kräver vidare hörselutredning."
    ],
    "ddx": [
     [
      "t9-286",
      "Extern otit och perikondrit",
      "Huvudindikation för tamponad."
     ],
     [
      "t9-298",
      "Ledningshinder och sensorineural hörselnedsättning",
      "Vaxpropp är vanligaste orsaken till ledningshinder."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 4, 8, 35"
    ]
   },
   "card": {},
   "km": [
    "onh:19"
   ]
  },
  {
   "id": "t9-298",
   "name": "Ledningshinder och sensorineural hörselnedsättning",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Ledningshinder** innebär att ljudet hindras att nå innerörat (fel i ytter-/mellanöra). Vid **sensorineural hörselnedsättning** sitter felet i koklea, hörselnerv eller centrala hörselbanor.",
    "klin": [
     {
      "h": "Ledningshinder"
     },
     "Mekaniskt fel med tröskelhöjning upp till ca **60 dB**; kan åtgärdas med operation eller förstärkning.",
     "Orsaker: **vaxpropp** (vanligast), sekretorisk, extern och akut otit, förtjockad trumhinna, kronisk otit, hörselbenskedjeavbrott eller -fixation, missbildningar.",
     {
      "h": "Sensorineural"
     },
     "Utgör **80 % av bestående hörselnedsättningar**; indelas i kokleär, [[t9-299|retrokokleär]] och central.",
     "Ger både kvantitets- och **kvalitetsförsämring**; inte påverkbar medicinskt eller kirurgiskt.",
     "Orsaker: [[t9-300|presbyakusis]], [[t9-301|buller]], [[t9-303|ärftlighet]] (vanliga), [[t9-305|sudden deafness]], [[t9-313|Ménière]], läkemedel, trauma, infektion, autoimmunitet."
    ],
    "diag": [
     {
      "tbl": [
       [
        "Hörtröskel",
        "Grad",
        "Funktion"
       ],
       [
        "30–40 dB",
        "Mild",
        "Hör samtal på 2–3 m i tyst rum"
       ],
       [
        "40–70 dB",
        "Måttlig",
        "Hör samtal på 1 m"
       ],
       [
        "70–90 dB",
        "Svår",
        "Kan ej säkert tala i telefon"
       ],
       [
        ">90 dB",
        "Mycket svår",
        "Läppläsning/teckenspråk"
       ]
      ]
     },
     "**Öronstatus** – ledningshinder kan ofta ses (SOM, extern otit, kronisk otit, vaxpropp).",
     "**Weber** lateraliseras till sjukt öra vid ledningshinder, till friskt öra vid sensorineural nedsättning; **Rinne** positivt = hörs bäst via luftledning (inget ledningshinder).",
     "Tonaudiogram (ibland talaudiometri); elektrofysiologi: tympanometri och hjärnstamsaudiometri."
    ],
    "beh": [
     "Ledningshinder: behandla orsaken (t.ex. otit, vaxpropp) eller operation/hörapparat.",
     "Sensorineural: [[t9-307|hörhjälpmedel]] och hörselrehabilitering."
    ],
    "hand": [
     "ÖNH-status, Weber/Rinne och ett audiogram räcker långt – glöm inte stämgaffeln före remiss."
    ],
    "flagg": [
     "**Ensidig** sensorineural nedsättning eller tinnitus → utred för retrokokleär orsak (ponsvinkeltumör).",
     "Plötslig sensorineural hörselnedsättning är akut – se sudden deafness."
    ],
    "ddx": [
     [
      "t9-302",
      "Asymmetrisk hörselnedsättning",
      "Sidoskillnad kräver vidare utredning."
     ],
     [
      "t9-309",
      "Tonaudiogram och stämgaffelprov enligt Weber och Rinne",
      "Skiljer typerna åt."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 8"
    ]
   },
   "card": {},
   "km": [
    "onh:21"
   ]
  },
  {
   "id": "t9-299",
   "name": "Retrocochleära skador",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Retrokokleär hörselnedsättning** är en sensorineural hörselnedsättning där **hörselnerven eller dess ganglieceller** är skadade – till skillnad från kokleär skada (hårceller i innerörat) och central skada (centrala hörselbanor).",
    "klin": [
     "Typexempel är **akustikusneurinom** (schwannom): benign tumör med topp vid 40–50 år; ger hörselnedsättning, tinnitus och facialispares.",
     "Plötslig hörselnedsättning kan vara **debutsymtom** på akustikusneurinom.",
     "Ensidig tinnitus kan bero på ponsvinkeltumör."
    ],
    "diag": [
     "Hörselutredning med tonaudiogram; elektrofysiologi (hjärnstamsaudiometri) ingår i utredningsarsenalen.",
     "Ensidig tinnitus → remiss ÖNH för **otoneurologisk utredning**; MR vid misstanke om central/retrokokleär orsak."
    ],
    "beh": [
     "Akustikusneurinom: kirurgisk extirpation vid masseffekt eller stereotaktisk strålbehandling (gammakniv); botbar vid radikal kirurgi.",
     "Sensorineural nedsättning i sig är inte påverkbar medicinskt eller kirurgiskt."
    ],
    "hand": [
     "Asymmetrisk hörsel eller ensidig tinnitus ska alltid utredas vidare via ÖNH."
    ],
    "flagg": [
     "Ensidig hörselnedsättning/tinnitus ska inte avfärdas som åldersrelaterad.",
     "Sudden deafness kan dölja en tumör – följ upp."
    ],
    "ddx": [
     [
      "t9-298",
      "Ledningshinder och sensorineural hörselnedsättning",
      "Överordnad indelning."
     ],
     [
      "t9-305",
      "Sudden deafness",
      "Kan vara debut av akustikusneurinom."
     ],
     [
      "t9-077",
      "Primära tumörer som engagerar nervsystemet",
      "Schwannom beskrivs i neurologin."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 8, 10",
     "Kompendium Neurologi (T9), s. 38"
    ]
   },
   "card": {},
   "km": [
    "onh:22"
   ]
  },
  {
   "id": "t9-300",
   "name": "Presbyakusis",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Presbyakusis** (åldershörselnedsättning) är den **vanligaste orsaken till bestående sensorineural hörselnedsättning**.",
    "klin": [
     "Främst beror den på att **hårceller dör**, framför allt i snäckans basala del; även stria vascularis fungerar sämre och basilarmembranet blir stelare.",
     "Stora individuella skillnader – hereditet och livslång belastning av innerörat.",
     "Nedsättningen är mest uttalad i **diskanten** med bevarad bas och mellanregister; långsam utveckling ger betydande tillvänjning.",
     "Svårt att höra när många pratar, ljusa röster och snabbt tal; ofta är det anhöriga som uppmanar till utredning.",
     "**Recruitment**: svårt att tolerera starka ljud."
    ],
    "diag": [
     "Tonaudiogram visar diskantnedsättning; Weber/Rinne talar för sensorineural typ."
    ],
    "beh": [
     "**Hörapparat**.",
     "**Hörselrehabilitering** inklusive information till anhöriga."
    ],
    "flagg": [
     "Asymmetri mellan öronen passar inte med presbyakusis – utred.",
     "Recruitment gör att höga ljud kan vara obehagliga trots nedsatt hörsel."
    ],
    "ddx": [
     [
      "t9-301",
      "Bullerskador och bullerprofylax",
      "Bullerexponering i anamnesen, också diskantnedsättning."
     ],
     [
      "t9-303",
      "Hereditär hörselnedsättning",
      "Ofta tidigare debut."
     ],
     [
      "t9-302",
      "Asymmetrisk hörselnedsättning",
      "Sidoskillnad – annan orsak."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 8–9"
    ]
   },
   "card": {},
   "km": [
    "onh:23"
   ]
  },
  {
   "id": "t9-301",
   "name": "Bullerskador och bullerprofylax",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Bullerskada** innebär att hårceller dör efter exponering för kraftigt ljud; det är den **näst vanligaste** orsaken till bestående sensorineural hörselnedsättning efter presbyakusis.",
    "klin": [
     "Oftast **yrkesmässig** exponering, men kan uppstå momentant vid kraftiga impulsljud (explosion, skottlossning).",
     "Risken ökar med ljudstyrka och exponeringstid: förebyggande åtgärder vid **>85 dB under 8 h**; vid >100 dB gäller 15 min.",
     "**TTS** (temporary threshold shift): tinnitus, lockkänsla och lomhördhet efter kort tids kraftigt ljud – reversibelt efter bullervila.",
     "Upprepad TTS kan bli **PTS** (permanent threshold shift): nedsättning i diskanten med bevarad bas och mellanregister; bakgrundsljud stör, tinnitus och ljudkänslighet är vanligt."
    ],
    "diag": [
     "Anamnes på bullerexponering och tonaudiogram med diskantnedsättning."
    ],
    "beh": [
     "Modern hörapparat kan vara till hjälp.",
     "Vid **akustiskt trauma** (t.ex. explosion) kan acetylcystein inom första timmen vara till hjälp."
    ],
    "hand": [
     "**Bullerprofylax**: hörselkåpor och öronproppar; arbets- och miljölagstiftningen reglerar bullernivåer."
    ],
    "flagg": [
     "TTS är en varningssignal – upprepad exponering ger permanent skada.",
     "Bullerskada är vanligaste orsaken till tinnitus."
    ],
    "ddx": [
     [
      "t9-300",
      "Presbyakusis",
      "Åldersrelaterad, utan exponeringsanamnes."
     ],
     [
      "t9-304",
      "Tinnitus",
      "Vanligt följdsymtom."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 9–10"
    ]
   },
   "card": {},
   "km": [
    "onh:23"
   ]
  },
  {
   "id": "t9-302",
   "name": "Asymmetrisk hörselnedsättning",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Asymmetrisk hörselnedsättning** innebär att hörseln är sämre på ena örat. Den kräver alltid förklaring eftersom bakom kan ligga ledningshinder, innerörepåverkan eller **retrokokleär tumör**.",
    "klin": [
     "Ensidigt **ledningshinder**: vaxpropp, otit, trumhinneperforation, kolesteatom.",
     "Ensidig **SOM hos vuxen** kan bero på **epifarynxcancer** (tubarostiet engagerat).",
     "Ensidig **sensorineural** nedsättning: sudden deafness (oftast unilateral), Ménière, zoster oticus, trauma/temporalbensfraktur, **akustikusneurinom**."
    ],
    "diag": [
     "Öronstatus/otomikroskopi.",
     "**Weber** lateraliseras till sjukt öra vid ledningshinder och till friskt öra vid sensorineural nedsättning; Rinne kompletterar.",
     "Tonaudiogram (inkl. benledning); elektrofysiologi med tympanometri och hjärnstamsaudiometri."
    ],
    "hand": [
     "Ensidig tinnitus/sensorineural nedsättning → remiss ÖNH för otoneurologisk utredning (ponsvinkeltumör).",
     "Vuxen med ensidig SOM → alltid ÖNH.",
     "Plötslig ensidig nedsättning → handläggs som sudden deafness med uppföljning hos ÖNH."
    ],
    "flagg": [
     "Ensidig SOM hos vuxen = epifarynxcancer tills motsatsen bevisats.",
     "Sudden deafness kan vara debut av akustikusneurinom.",
     "Glöm inte stämgaffeln – Weber avslöjar typen direkt."
    ],
    "ddx": [
     [
      "t9-299",
      "Retrocochleära skador",
      "Akustikusneurinom."
     ],
     [
      "t9-305",
      "Sudden deafness",
      "Plötslig debut."
     ],
     [
      "t9-284",
      "Sekretorisk otit",
      "Ensidig hos vuxen → uteslut epifarynxcancer."
     ],
     [
      "t9-313",
      "Mb Ménière",
      "Attacker med yrsel och basnedsättning."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 2, 8, 10, 12, 41",
     "Kompendium Neurologi (T9), s. 38"
    ]
   },
   "card": {},
   "km": [
    "onh:24"
   ]
  },
  {
   "id": "t9-303",
   "name": "Hereditär hörselnedsättning",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Hereditär hörselnedsättning** är en vanlig orsak till **tilltagande sensorineural hörselnedsättning**, som kan ha funnits sedan barndomen eller debutera i vuxen ålder.",
    "klin": [
     "Många olika geneser, vilket gör specifik diagnostik svår.",
     "Vanligen **bilateral**; graden varierar kraftigt.",
     "Oftast mest uttalad i **diskant och mellanregister**.",
     "Hereditet påverkar även hur uttalad presbyakusis blir."
    ],
    "diag": [
     "Familjeanamnes och tonaudiogram; Weber/Rinne talar för sensorineural typ."
    ],
    "beh": [
     "Sensorineural nedsättning går inte att påverka medicinskt eller kirurgiskt – åtgärden är [[t9-307|hörhjälpmedel]]."
    ],
    "flagg": [
     "Fråga efter hereditet även vid tinnitus."
    ],
    "ddx": [
     [
      "t9-300",
      "Presbyakusis",
      "Åldersrelaterad, sent debuterande."
     ],
     [
      "t9-301",
      "Bullerskador och bullerprofylax",
      "Exponeringsanamnes."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 8–10"
    ]
   },
   "card": {},
   "km": [
    "onh:25"
   ]
  },
  {
   "id": "t9-304",
   "name": "Tinnitus",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Tinnitus** är ljudupplevelse utan yttre ljudkälla. Det ska ses som ett **symtom, inte en diagnos** – underliggande orsak ska utredas.",
    "klin": [
     "Mycket vanligt (prevalens 10–15 %), men bara en minoritet påverkas i livsföringen; majoriteten har samtidig hörselnedsättning.",
     "**Vanligaste orsaken: bullerskada.** Fråga om hereditet, bullerexponering, infektioner och läkemedel.",
     "Kartlägg utveckling (akut/progress), karaktär (pip, brus, **pulssynkronitet**), associerade symtom (yrsel, käkbesvär, lockkänsla) och tidigare hörselbesvär.",
     "Hörselfenomen som musik eller röster – tänk psykiatrisk orsak."
    ],
    "diag": [
     "Minimum: **otomikroskopi**, **munhåla/svalg + palpation av tuggmuskulatur**, **hörselutredning med tonaudiometri**."
    ],
    "beh": [
     "Noggrann information om orsak, naturalförlopp och habituering.",
     "Hörapparat kan ge viss förbättring, särskilt vid samtidig hörselnedsättning.",
     "Bakgrundsljud vid insomning hjälper många; **KBT** har viss evidens (gruppterapi, antidepressiva, maskering dåligt utvärderat)."
    ],
    "hand": [
     "**Ensidig tinnitus → remiss ÖNH** för otoneurologisk utredning."
    ],
    "flagg": [
     "Ensidig tinnitus kan bero på **ponsvinkeltumör**.",
     "Tinnitus med plötslig hörselnedsättning – sudden deafness.",
     "Ototoxiska läkemedel (höga doser ASA, cisplatin, aminoglykosider) kan ge tinnitus."
    ],
    "ddx": [
     [
      "t9-301",
      "Bullerskador och bullerprofylax",
      "Vanligaste orsaken."
     ],
     [
      "t9-299",
      "Retrocochleära skador",
      "Ensidig tinnitus vid akustikusneurinom."
     ],
     [
      "t9-313",
      "Mb Ménière",
      "Tinnitus under attacker med yrsel."
     ],
     [
      "t9-306",
      "Ototoxiska farmaka",
      "Läkemedelsanamnes."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 10",
     "Kompendium Neurologi (T9), s. 38"
    ]
   },
   "card": {},
   "km": [
    "onh:26"
   ]
  },
  {
   "id": "t9-305",
   "name": "Sudden deafness",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Sudden deafness** (plötslig sensorineural hörselnedsättning) innebär ett tonmedelvärde **≥30 dB för tre intilliggande frekvenser** som uppstått plötsligt, med oklar etiologi.",
    "klin": [
     "Etiologi oklar – herpes zoster/borrelios och mikroembolier har föreslagits.",
     "Oftast **unilateral**, vanligen med tinnitus, ostadighetskänsla/yrsel och fyllnadskänsla.",
     "Kan vara **debutsymtom på akustikusneurinom**.",
     "Minst 25 % återhämtar sig."
    ],
    "diag": [
     "Tonaudiometri inklusive benledning; Weber lateraliseras till friska örat (sensorineural)."
    ],
    "beh": [
     "**Empirisk behandling**: kortison, antiviral, kärldilaterande och/eller expektans."
    ],
    "hand": [
     "Uppföljning hos **ÖNH-specialist** med tonaudiometri inkl. benledning."
    ],
    "flagg": [
     "Kan dölja akustikusneurinom – följ upp.",
     "Skilj från ledningshinder (vaxpropp, SOM) med otoskopi och stämgaffel.",
     "Hörselnedsättning med yrselattacker och tinnitus – tänk Ménière."
    ],
    "ddx": [
     [
      "t9-299",
      "Retrocochleära skador",
      "Akustikusneurinom."
     ],
     [
      "t9-313",
      "Mb Ménière",
      "Återkommande attacker, basnedsättning."
     ],
     [
      "t9-298",
      "Ledningshinder och sensorineural hörselnedsättning",
      "Ledningshinder har annat stämgaffelfynd."
     ],
     [
      "t9-290",
      "Zoster oticus",
      "Blåsor, smärta och facialispares."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 10, 12",
     "Kompendium Neurologi (T9), s. 38"
    ]
   },
   "card": {},
   "km": [
    "onh:27"
   ]
  },
  {
   "id": "t9-306",
   "name": "Ototoxiska farmaka",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "lm",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Ototoxiska farmaka** är läkemedel som kan skada innerörat och ge hörselnedsättning, tinnitus och/eller balanspåverkan; läkemedel är en av orsakerna till sensorineural hörselnedsättning.",
    "klin": [
     {
      "tbl": [
       [
        "Läkemedel",
        "Effekt"
       ],
       [
        "Acetylsalicylsyra i höga doser",
        "Reversibel hörselnedsättning och tinnitus"
       ],
       [
        "Vissa cytostatika (t.ex. cisplatin)",
        "Bestående diskantförsämring och tinnitus"
       ],
       [
        "Antibiotika, främst aminoglykosider",
        "Bestående hörselskador och påverkan på balansen"
       ]
      ]
     }
    ],
    "diag": [
     "Läkemedelsanamnes ingår i utredningen av tinnitus och hörselnedsättning."
    ],
    "flagg": [
     "Skadan av cisplatin och aminoglykosider kan vara **bestående**.",
     "Aminoglykosider kan även ge balanspåverkan."
    ],
    "ddx": [
     [
      "t9-304",
      "Tinnitus",
      "Läkemedel som orsak."
     ],
     [
      "t9-305",
      "Sudden deafness",
      "Plötslig nedsättning utan känd utlösare."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 8, 10"
    ]
   },
   "card": {},
   "km": [
    "onh:27"
   ]
  },
  {
   "id": "t9-307",
   "name": "Hörhjälpmedel",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Hörhjälpmedel** kompenserar hörselnedsättning som inte kan åtgärdas medicinskt – främst sensorineural nedsättning – och omfattar hörapparat, benförankrad hörapparat, kokleaimplantat och signalhjälpmedel.",
    "klin": [
     {
      "tbl": [
       [
        "Hjälpmedel",
        "Princip och indikation"
       ],
       [
        "Hörapparat",
        "Mikrofon och förstärkare; telespole kan paras med teleslinga (tv, bio, teater)"
       ],
       [
        "BAHA",
        "Benförankrad hörapparat – när patienten med vanlig hörapparat får externa otiter"
       ],
       [
        "Kokleaimplantat",
        "Vid mycket grav nedsättning/dövhet; elektrod i koklean ger urladdningar som efterliknar hårcellsfunktionen"
       ],
       [
        "Optiska/vibrations-signaler",
        "Telefon, dörrklocka, väckarklocka, brandlarm"
       ]
      ]
     }
    ],
    "diag": [
     "Hörapparat används vid presbyakusis och bullerskada och kan ge viss förbättring av tinnitus vid samtidig hörselnedsättning."
    ],
    "hand": [
     "Kombineras med **hörselrehabilitering**, inklusive information till anhöriga."
    ],
    "flagg": [
     "Patient med cochleaimplantat som får AOM ska behandlas med antibiotika.",
     "Recruitment kan göra höga ljud obehagliga."
    ],
    "ddx": [
     [
      "t9-300",
      "Presbyakusis",
      "Vanligaste indikationen."
     ],
     [
      "t9-298",
      "Ledningshinder och sensorineural hörselnedsättning",
      "Ledningshinder kan ofta åtgärdas kirurgiskt."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 3, 9–10"
    ]
   },
   "card": {},
   "km": [
    "onh:28"
   ]
  },
  {
   "id": "t9-308",
   "name": "Utredning av hörselskada, speciellt hos barn",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Utredning av hörselskada syftar till att fastställa **grad** och **typ** (ledningshinder eller sensorineural) av nedsättningen och hitta orsaken. Hos barn är **sekretorisk otit** den vanligaste orsaken.",
    "klin": [
     {
      "h": "Utredningens delar"
     },
     "**Hörtröskel**: 30–40 dB mild, 40–70 dB måttlig, 70–90 dB svår, >90 dB mycket svår.",
     "**Öronstatus**: ledningshinder kan ofta ses (SOM, extern otit, kronisk otit, vaxpropp).",
     "**Stämgaffel** (Weber, Rinne) och **tonaudiogram**, ibland talaudiometri.",
     "**Elektrofysiologi**: tympanometri och hjärnstamsaudiometri."
    ],
    "diag": [
     {
      "h": "Barn"
     },
     "SOM är vanligaste orsaken till hörselnedsättning hos barn; ofta är nedsatt hörsel enda symtom.",
     "Missbildningar i ytterörat kan sammanfalla med missbildning i inre delar – kontrollera hörseln.",
     "Hörselnedsättning >25 dB vid bilateral SOM, särskilt med påverkan på sociala funktioner, är indikation för plaströr."
    ],
    "hand": [
     "Barn med SOM + hörselnedsättning → remiss ÖNH för ställningstagande till rör.",
     "Hörselkontroll **3 månader** efter AOM med kvarstående hörselnedsättning och 3 månader efter rörinsättning."
    ],
    "flagg": [
     "Glöm inte stämgaffeln före remiss.",
     "Avsaknad av andra symtom utesluter inte SOM hos barn."
    ],
    "ddx": [
     [
      "t9-309",
      "Tonaudiogram och stämgaffelprov enligt Weber och Rinne",
      "Kärnmetoder i utredningen."
     ],
     [
      "t9-284",
      "Sekretorisk otit",
      "Vanligaste orsaken hos barn."
     ],
     [
      "t9-298",
      "Ledningshinder och sensorineural hörselnedsättning",
      "Typindelning."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 2–3, 6, 8"
    ]
   },
   "card": {},
   "km": [
    "onh:37"
   ]
  },
  {
   "id": "t9-309",
   "name": "Tonaudiogram och stämgaffelprov enligt Weber och Rinne",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Stämgaffelprov** enligt **Weber** och **Rinne** skiljer snabbt ledningshinder från sensorineural nedsättning. **Tonaudiogram** mäter hörtröskeln per frekvens och kvantifierar nedsättningen.",
    "klin": [
     {
      "tbl": [
       [
        "Test",
        "Tolkning"
       ],
       [
        "Weber",
        "Lateraliseras till sjukt öra vid ledningshinder, till friskt öra vid sensorineural nedsättning"
       ],
       [
        "Rinne",
        "Positivt när stämgaffeln hörs bäst via luftledning = inget ledningshinder"
       ]
      ]
     },
     "Tonaudiogram kompletteras ibland med talaudiometri; benledning ingår vid uppföljning av sudden deafness."
    ],
    "diag": [
     {
      "h": "Typiska audiogrammönster"
     },
     "**SOM**: ledningshinder i basen.",
     "**Presbyakusis** och **bullerskada**: diskantnedsättning med bevarad bas och mellanregister.",
     "**Ménière**: nedsättning främst i basfrekvenserna.",
     "**Sudden deafness**: tonmedelvärde ≥30 dB för tre intilliggande frekvenser.",
     "**Traumatisk perforation**: Weber till skadat öra."
    ],
    "hand": [
     "ÖNH-status, Weber/Rinne och ett audiogram räcker långt i hörselutredningen.",
     "Weber är särskilt användbart vid ensidiga besvär (t.ex. ensidig SOM); vid skallbasfraktur kontrolleras hörsel med Weber/Rinne.",
     "Tonaudiometri är minimum vid tinnitus."
    ],
    "flagg": [
     "Glöm inte stämgaffeln innan remiss till öronklinik.",
     "Ensidig sensorineural nedsättning kräver vidare utredning (retrokokleär orsak)."
    ],
    "ddx": [
     [
      "t9-298",
      "Ledningshinder och sensorineural hörselnedsättning",
      "Det testerna skiljer mellan."
     ],
     [
      "t9-308",
      "Utredning av hörselskada, speciellt hos barn",
      "Testen ingår i utredningen."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 2, 5, 8–10, 12, 24"
    ]
   },
   "card": {},
   "km": [
    "onh:39"
   ]
  },
  {
   "id": "t9-310",
   "name": "Otogen yrsel och central yrsel",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Yrsel** uppstår vid dyssynkroni mellan sinnen (balans, proprioception, taktil sensorik, syn). **Perifer (otogen) yrsel** utgår från vestibularisorganet eller n. vestibularis; **central yrsel** sitter i hjärnan.",
    "klin": [
     {
      "tbl": [
       [
        "",
        "Otogen",
        "Central"
       ],
       [
        "Talar för",
        "Utlöses av rörelse/huvudvridning; patologiskt impulstest",
        "Blickriktningsnystagmus under fixation, vertikal nystagmus (bakre skallgropen)"
       ],
       [
        "Övrigt",
        "Ofta mer uttalat illamående/kräkning",
        "Ofta mer uttalad balansrubbning"
       ]
      ]
     },
     "**Rotatorisk** yrsel talar för otogen men utesluter inte central; **nautisk** yrsel förekommer vid otogen, central och invärtesmedicinsk orsak.",
     "Spontannystagmus talar för labyrint- eller CNS-påverkan – troligare vestibulär om Frenzelglasögon förvärrar.",
     "Central orsak: t.ex. vertebrobasilär ischemi/**Wallenbergs syndrom** med rotatorisk yrsel, kräkning och nystagmus samt andra hjärnstamssymtom."
    ],
    "diag": [
     "1. Anamnes: hur, när, var, karaktär och förlopp; utlösande faktorer (stress, lägesändring, uppresning); medvetandepåverkan, gångsvårigheter, neurologiska symtom.",
     "2. Status: cirkulation, neurologi, nystagmus, **Dix–Hallpike** (med Frenzelglasögon) och öronstatus.",
     "3. Blodstatus, elstatus, TSH, glukos, infektionsprover och EKG.",
     "4. **DT/MR** vid misstanke på central orsak."
    ],
    "hand": [
     "Vanligaste perifera orsaker: [[t9-311|BPPV]], [[t9-312|vestibularisneuronit]], [[t9-313|Ménière]].",
     "Misstänkt central orsak handläggs som [[t9-187|stroke]] med akut DT."
    ],
    "flagg": [
     "Vertikal nystagmus eller blickriktningsnystagmus under fixation → bakre skallgropslesion.",
     "Neurologiska symtom eller uttalad balansrubbning talar för central genes.",
     "Glöm inte ångest och/eller missbruk som orsak."
    ],
    "ddx": [
     [
      "t9-311",
      "Benign lägesyrsel",
      "Kortvarig lägesutlöst yrsel, positivt Dix–Hallpike."
     ],
     [
      "t9-312",
      "Vestibularisneuronit",
      "Akut ihållande yrsel utan hörselsymtom."
     ],
     [
      "t9-187",
      "Stroke och TIA",
      "Central yrsel med neurologiska bortfall."
     ],
     [
      "t9-147",
      "Ångestsyndrom",
      "Yrsel utan vestibulära fynd."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 11",
     "Kompendium Neurologi (T9), s. 2–3"
    ]
   },
   "card": {},
   "km": [
    "neuro:60",
    "onh:29"
   ]
  },
  {
   "id": "t9-311",
   "name": "Benign lägesyrsel",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Benign paroxysmal lägesyrsel (BPPV, kristallsjuka)** orsakas av otoliter som lossnat från **macula utriculi** och hamnat i en båggång (canalolithiasis) – oftast den **posteriora**. Det är den **absolut vanligaste orsaken till akut påkommen yrsel**.",
    "klin": [
     "Akut yrsel med **2–3 sekunders latens** efter huvudrörelse, ofta när patienten ligger och vrider huvudet i sängen.",
     "Klingar av efter **15–30 sekunder**; **uttröttbar** – upprepad provokation ger lindrigare yrsel.",
     "**Lateral båggång**: yrsel när patienten ligger på rygg och vrider huvudet åt endera sidan; nystagmus med snabb fas mot golvet, intensivare mot sjuk sida."
    ],
    "diag": [
     "**Dix–Hallpike positivt**: nystagmus som slår ”som en vindrutetorkare” mot golvet."
    ],
    "beh": [
     "Bakre båggången: klingar ofta av spontant inom 2–12 veckor, men vid positivt Dix–Hallpike ska **Epleys manöver** göras.",
     "Laterala båggången: **barbecuerotation**."
    ],
    "hand": [
     "**Primärvård**: efter diagnos och manöver startar patienten ett träningsprogram i 14 dagar.",
     "**ÖNH**: remiss om patienten inte blivit bra efter 2 försök; nystagmografi och/eller MRT."
    ],
    "flagg": [
     "Ihållande yrsel, vertikal nystagmus eller neurologiska symtom passar inte BPPV – tänk central orsak.",
     "Utebliven effekt efter två manövrer → remiss för vidare utredning."
    ],
    "ddx": [
     [
      "t9-312",
      "Vestibularisneuronit",
      "Ihållande yrsel i dagar med spontannystagmus."
     ],
     [
      "t9-313",
      "Mb Ménière",
      "Attacker i timmar med hörselsymtom."
     ],
     [
      "t9-310",
      "Otogen yrsel och central yrsel",
      "Central yrsel är inte uttröttbar och ger andra nystagmustyper."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 11"
    ]
   },
   "card": {},
   "km": [
    "onh:30",
    "neuro:60"
   ]
  },
  {
   "id": "t9-312",
   "name": "Vestibularisneuronit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Vestibularisneuronit** är en relativt plötslig förlust av funktionen i ena sidans balansnerv på grund av inflammation, troligen virusbetingad. Hjärnan tolkar ensidig input som att huvudet roterar mot den friska sidan.",
    "klin": [
     "Relativt plötsligt påkommen **karusellyrsel**.",
     "Oförmåga att hålla balansen med **falltendens mot sjuk sida**.",
     "Illamående och kräkning."
    ],
    "diag": [
     "**Spontannystagmus med snabb fas mot frisk sida** (följer Alexanders lag).",
     "**Patologiskt impulstest** åt sjuk sida.",
     "**Inga neurologiska symtom** (utöver balansstörning) och **inga hörselsymtom**."
    ],
    "beh": [
     "Vanligen inläggning.",
     "Akut kan åksjukemedel (antihistamin) ges som stolpiller eller tablett – endast initialt.",
     "Tidigt insatta **steroider** (första tre dygnen) kan förbättra återhämtningen.",
     "**Träningsprogram** när patienten börjar återhämta sig."
    ],
    "hand": [
     "Funktionen återkommer inom 1–3 månader; annars kalibrerar lillhjärnan om de vestibulära reflexerna, ev. med kvarstående ostadighet vid stress/trötthet.",
     "Heltidssjukskrivning ca 3 veckor; informera om ökad uttröttbarhet upp till ¾ år."
    ],
    "flagg": [
     "Neurologiska bortfall, blickriktningsnystagmus eller vertikal nystagmus → misstänk central orsak (t.ex. Wallenbergs syndrom).",
     "Hörselnedsättning passar inte – tänk Ménière, zoster oticus eller labyrintpåverkan."
    ],
    "ddx": [
     [
      "t9-310",
      "Otogen yrsel och central yrsel",
      "Central yrsel har neurologiska fynd och annan nystagmus."
     ],
     [
      "t9-311",
      "Benign lägesyrsel",
      "Sekundlånga lägesutlösta attacker."
     ],
     [
      "t9-313",
      "Mb Ménière",
      "Hörselsymtom och återkommande attacker."
     ],
     [
      "t9-187",
      "Stroke och TIA",
      "Hjärnstamsinfarkt kan ge liknande yrsel."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 11–12",
     "Kompendium Neurologi (T9), s. 3"
    ]
   },
   "card": {},
   "km": [
    "onh:30",
    "neuro:60"
   ]
  },
  {
   "id": "t9-313",
   "name": "Mb Ménière",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Mb Ménière** är en innerörssjukdom av okänd orsak som kopplats till **ökat tryck/ökad mängd endolymfa** och ger återkommande attacker av yrsel, hörselnedsättning, tinnitus och fyllnadskänsla.",
    "klin": [
     "Relativt vanligt, drabbar åldern 20–60 år; mycket individuellt förlopp.",
     "Attacker i perioder om månader till något år, som klingar av och återkommer.",
     {
      "h": "Fyra vanligaste symtomen"
     },
     "**Akut rotatorisk yrselattack** med spontannystagmus under attacken.",
     "**Plötslig hörselnedsättning**, främst i **basfrekvenserna**, ofta med **tinnitus**; nedsättningen blir så småningom permanent.",
     "**Fyllnadskänsla** i örat.",
     "**Diplacusis**.",
     "Även illamående/kräkning och ”**droppattacker**” där postural tonus försvinner och patienten faller ihop."
    ],
    "diag": [
     "Klinisk bild med attackvis yrsel + hörselsymtom; tonaudiogram visar basnedsättning."
    ],
    "beh": [
     "**Akut attack**: som vestibularisneuronit.",
     "**Milda–måttliga besvär**: vätskedrivande (tiazid/furosemid), antihistamin (Betaserc), rör i trumhinnan, mältat havre.",
     "**Måttliga–svåra besvär**: remiss ÖNH för bl.a. intermittent ureabehandling, lokal tryckbehandling, labyrintdestruktion/labyrintektomi."
    ],
    "hand": [
     "Svåra eller progredierande besvär remitteras till ÖNH."
    ],
    "flagg": [
     "Hörselnedsättningen blir med tiden permanent.",
     "Droppattacker innebär fallrisk.",
     "Ensidig sensorineural nedsättning med tinnitus kräver att retrokokleär orsak övervägs."
    ],
    "ddx": [
     [
      "t9-312",
      "Vestibularisneuronit",
      "Ingen hörselpåverkan, en långvarig episod."
     ],
     [
      "t9-305",
      "Sudden deafness",
      "Plötslig hörselnedsättning utan återkommande yrselattacker."
     ],
     [
      "t9-311",
      "Benign lägesyrsel",
      "Sekundlång, lägesutlöst."
     ],
     [
      "t9-299",
      "Retrocochleära skador",
      "Akustikusneurinom ger hörselnedsättning och tinnitus."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 8, 12"
    ]
   },
   "card": {},
   "km": [
    "onh:31",
    "neuro:60"
   ]
  },
  {
   "id": "t9-314",
   "name": "Whiplash och nackyrsel",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Whiplash/nackyrsel** är en omtvistad diagnos där nacken och dess muskulatur ses som ett sensoriskt organ kopplat till innerörats balansfunktion; nackbesvär antas kunna ge yrsel.",
    "klin": [
     "Omtvistad eftersom man kan ha betydande nackskador och tortikollis utan yrsel.",
     "Yrseln beskrivs ofta som **ostadighet**."
    ],
    "diag": [
     "Kräver kombinationen **nackbesvär och yrsel där nackbesvären föregick yrseln**.",
     "Enligt kursboken är diagnosen endast möjlig om yrseln försvinner när nackbesvären behandlas."
    ],
    "beh": [
     "**Fysioterapi** och uppföljning."
    ],
    "hand": [
     "**Uteslut annan orsak** till yrseln först (otogen, central, invärtesmedicinsk)."
    ],
    "flagg": [
     "Uteslutningsdiagnos – missa inte central eller otogen orsak.",
     "Efter trauma: tänk även på postkommotionella besvär och temporalbensfraktur (yrsel, hörselnedsättning)."
    ],
    "ddx": [
     [
      "t9-310",
      "Otogen yrsel och central yrsel",
      "Ska uteslutas först."
     ],
     [
      "t9-311",
      "Benign lägesyrsel",
      "Lägesutlöst rotatorisk yrsel, positiv Dix–Hallpike."
     ],
     [
      "t9-048",
      "Vanliga symtom efter skalltrauma",
      "Postkommotionellt syndrom med yrsel."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 11, 13, 24",
     "Kompendium Neurologi (T9), s. 15"
    ]
   },
   "card": {},
   "km": [
    "onh:31"
   ]
  },
  {
   "id": "t9-315",
   "name": "Behandling av yrsel",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Behandlingen av yrsel styrs av **orsaken**: repositionsmanövrar vid **benign lägesyrsel**, symtomatisk akutbehandling och **vestibulär träning** vid vestibularisneuronit, och stegvis behandling vid **Mb Ménière**.",
    "klin": [
     {
      "h": "Benign lägesyrsel (BPPV)"
     },
     "Bakre båggången: klingar ofta av spontant inom 2–12 veckor, men vid positivt Dix–Hallpike ska man fortsätta med **Epleys manöver**.",
     "Laterala båggången: **barbequerotation**.",
     "Efter diagnos och manöver startar patienten ett **träningsprogram i 14 dagar** (primärvård).",
     {
      "h": "Vestibularisneuronit"
     },
     "Vanligen inläggning; akut kan **åksjukemedel (antihistamin)** ges som stolpiller/tablett, endast initialt.",
     "**Steroider** insatta tidigt (första tre dagarna) kan förbättra återhämtningen.",
     "**Träningsprogram** startas när patienten börjar återhämta sig; funktionen återkommer i så fall inom 1–3 månader, annars kompenserar lillhjärnan.",
     {
      "h": "Mb Ménière"
     },
     "Akut attack behandlas som vestibularisneuronit.",
     "Milda–måttliga besvär: vätskedrivande (tiazid/furosemid), Betaserc, rör i trumhinnan, mältat havre.",
     "Måttliga–svåra besvär: remiss till ÖNH för t.ex. intermittent ureabehandling, lokal tryckbehandling eller labyrintdestruktion/labyrintektomi.",
     {
      "h": "Nackyrsel"
     },
     "Uteslut annan orsak, därefter **fysioterapi** och uppföljning."
    ],
    "diag": [
     "Ställ först orsaksdiagnos (perifer/central, lägesutlöst eller ej) – behandlingen skiljer sig helt mellan tillstånden.",
     "BPPV som inte blivit bra efter 2 manöverförsök remitteras till ÖNH för nystagmografi och/eller MRT."
    ],
    "hand": [
     "Vid vestibularisneuronit är heltidssjukskrivning i ca 3 veckor lämplig, och patienten informeras om att hen lättare blir uttröttad i upp till ¾ år.",
     "Vid ofullständig återhämtning kan tillfällig ostadighetsyrsel komma vid stress/trötthet."
    ],
    "flagg": [
     "Misstänkt **central yrsel** ska utredas med DT/MR – inte behandlas som perifer yrsel.",
     "Antihistamin vid vestibularisneuronit bara initialt – träning driver kompensationen.",
     "Glöm inte ångest och/eller missbruk som orsak till yrsel."
    ],
    "ddx": [
     [
      "t9-311",
      "Benign lägesyrsel",
      "Kort lägesutlöst, uttröttbar yrsel – behandlas med manöver."
     ],
     [
      "t9-312",
      "Vestibularisneuronit",
      "Akut ensidigt funktionsbortfall utan hörselsymtom – steroider tidigt och träning."
     ],
     [
      "t9-313",
      "Mb Ménière",
      "Attacker med hörselnedsättning, tinnitus och lockkänsla – stegvis behandling."
     ],
     [
      "t9-316",
      "Utredningsgången vid yrsel",
      "Orsaksdiagnosen styr behandlingsvalet."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 11–13"
    ]
   },
   "card": {},
   "km": [
    "onh:32",
    "neuro:60"
   ]
  },
  {
   "id": "t9-316",
   "name": "Utredningsgången vid yrsel",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Yrselutredningen bygger på **anamnes**, **somatiskt status med nystagmusbedömning och Dix–Hallpike**, basala **blodprover och EKG**, samt **DT/MR** vid misstanke om central orsak. Målet är att skilja **perifer (otogen)** från **central** yrsel.",
    "klin": [
     {
      "h": "Steg i utredningen"
     },
     "1. Anamnes: hur, när och var debuterade yrseln, karaktär och förlopp; utlösande faktorer (stress, lägesändring/huvudrörelse, uppresning); medvetandepåverkan/svimning, gångsvårigheter, neurologiska symtom.",
     "2. Somatiskt status: cirkulation, neurologi, nystagmus, **Dix–Hallpike med Frenzelglasögon** och öronstatus.",
     "3. Prover: blodstatus, elstatus, TSH, glukos, infektionsprover och **EKG**.",
     "4. **DT/MR** vid misstanke om central orsak."
    ],
    "diag": [
     {
      "tbl": [
       [
        "Talar för perifer (otogen)",
        "Talar för central"
       ],
       [
        "Utlöst av rörelse/huvudvridning",
        "Blickriktningsnystagmus under fixation"
       ],
       [
        "Patologiskt impulstest",
        "Vertikal nystagmus (bakre skallgropslesion)"
       ],
       [
        "Ofta mer uttalat illamående/kräkning",
        "Ofta mer uttalad balansrubbning"
       ]
      ]
     },
     "Rotatorisk yrsel talar för otogen orsak men utesluter inte central; nautisk (gungande) yrsel förekommer vid otogen, central och invärtesmedicinsk orsak.",
     "Spontannystagmus talar för labyrint-/CNS-påverkan – troligare vestibulär skada om Frenzelglasögon förvärrar.",
     "Positivt Dix–Hallpike (nystagmus mot golvet) ger diagnosen benign lägesyrsel."
    ],
    "hand": [
     "Benign lägesyrsel handläggs i primärvården; utebliven förbättring efter 2 manöverförsök → remiss ÖNH för nystagmografi och/eller MRT.",
     "Vid vestibularisneuronit är frånvaro av neurologiska och hörselsymtom en del av diagnosen."
    ],
    "flagg": [
     "Neurologiska symtom, blickriktnings- eller vertikal nystagmus → misstänk central orsak och gör DT/MR.",
     "Glöm inte **ångest och/eller missbruk** som orsak.",
     "Rotatorisk karaktär utesluter inte central yrsel."
    ],
    "ddx": [
     [
      "t9-310",
      "Otogen yrsel och central yrsel",
      "Grundindelningen som utredningen syftar till."
     ],
     [
      "t9-317",
      "Otoneurologstatus",
      "Statusdelen med nystagmus, impulstest och Dix–Hallpike."
     ],
     [
      "t9-075",
      "Akut yrsel",
      "Neurologisk vinkel på akut yrsel."
     ],
     [
      "t9-187",
      "Stroke och TIA",
      "Yrsel och balansrubbning kan vara vertebralissymtom."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 11–12",
     "Kompendium Neurologi (T9), s. 2–3"
    ]
   },
   "card": {},
   "km": [
    "onh:38",
    "neuro:60"
   ]
  },
  {
   "id": "t9-317",
   "name": "Otoneurologstatus",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Otoneurologstatus är den riktade undersökningen vid yrsel och hörselbesvär, med **öronstatus**, **nystagmusbedömning** (gärna med **Frenzelglasögon**), **impulstest**, **Dix–Hallpike** och **stämgaffelprov**, kompletterat med neurologiskt status.",
    "klin": [
     "**Öronstatus/otomikroskopi**: ledningshinder kan synas (sekretorisk otit, extern otit, kronisk otit, vaxpropp).",
     "**Nystagmus**: spontannystagmus, blickriktningsnystagmus under fixation, vertikal nystagmus; Frenzelglasögon tar bort fixationen.",
     "**Impulstest**: patologiskt åt sjuk sida vid perifer skada (t.ex. vestibularisneuronit).",
     "**Dix–Hallpike** med Frenzelglasögon: positivt test ger nystagmus mot golvet vid benign lägesyrsel.",
     "**Weber och Rinne**: Weber lateraliseras till det sjuka örat vid ledningshinder och till det friska vid sensorineural nedsättning; Rinne positivt (bäst via luftledning) när ledningshinder saknas.",
     "Kompletteras med cirkulations- och neurologiskt status."
    ],
    "diag": [
     "Spontannystagmus med snabb fas mot frisk sida, falltendens och patologiskt impulstest mot sjuk sida, utan hörsel- och neurologiska symtom → vestibularisneuronit.",
     "Blickriktningsnystagmus under fixation och vertikal nystagmus → bakre skallgropslesion.",
     "Spontannystagmus som förvärras med Frenzel talar för vestibulär skada.",
     "BPPV från laterala båggången: nystagmus vid huvudvridning i ryggläge, snabb fas mot golvet och kraftigare mot sjuk sida."
    ],
    "hand": [
     "Används vid all yrselutredning tillsammans med anamnes, prover och vid behov DT/MR.",
     "Kompendiet betonar att man kommer långt med ÖNH-status, Weber/Rinne och tonaudiogram – stämgaffeln ska vara använd innan remiss."
    ],
    "flagg": [
     "Glöm inte stämgaffelprov – ensidig hörselnedsättning eller ensidig tinnitus kräver vidare utredning (ponsvinkeltumör).",
     "Central nystagmusbild ska inte tolkas som perifer yrsel."
    ],
    "ddx": [
     [
      "t9-309",
      "Tonaudiogram och stämgaffelprov enligt Weber och Rinne",
      "Hörseldelen av undersökningen."
     ],
     [
      "t9-316",
      "Utredningsgången vid yrsel",
      "Den utredning som statusfynden ingår i."
     ],
     [
      "t9-294",
      "Fullständigt öron-, näs- och halsstatus",
      "Det bredare ÖNH-statuset."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 8",
     "Kompendium ÖNH (T9), s. 10–12"
    ]
   },
   "card": {},
   "km": [
    "onh:39"
   ]
  },
  {
   "id": "t9-318",
   "name": "Perifer och central facialispares",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid **central facialispares** drabbas bara **nedre ansiktshalvan**, eftersom övre halvan har bilateral innervation. Vid **perifer facialispares** blir **hela ansiktshalvan** svag, inklusive pannan.",
    "klin": [
     {
      "tbl": [
       [
        "",
        "Central",
        "Perifer"
       ],
       [
        "Utbredning",
        "Endast nedre ansiktshalvan",
        "Hela ansiktshalvan (även panna och ögonslutning)"
       ],
       [
        "Exempel på orsaker",
        "Stroke, MS, tumör",
        "Bells pares, borrelia, Ramsay Hunt, tumör, trauma, otit"
       ]
      ]
     },
     "Perifer pares: utslätade rynkor och nasolabialfåra, hängande mungipa, oförmåga att sluta ögat (lagoftalmus).",
     "Perifer pares kan ge svårt att sluta munnen med dreggling och problem att tugga maten.",
     "Vid proximal (perifer) skada kan även hörselnedsättning och/eller yrsel förekomma."
    ],
    "diag": [
     "Testa pannrynkning och ögonslutning – bevarad funktion i övre ansiktshalvan talar för central pares.",
     "Neurologiskt status med övriga kranialnerver; bedöm komplett/partiell och central/perifer, och testa smaken på tungans främre del.",
     "Bedöm orbicularis oculi-kraften bilateralt och undersök kornea med fluorescein."
    ],
    "hand": [
     "Central pares utreds som misstänkt stroke/central lesion.",
     "Perifer pares: nivådiagnostik hos ÖNH (otomikroskopi, hörselmätning, ev. stapediusreflex, Schirmers test, borreliaserologi)."
    ],
    "flagg": [
     "Isolerad nedre facialisparesis kan vara stroke – handläggs akut.",
     "Vid perifer pares: kontrollera kornea – risk för **expositionskeratit**.",
     "Bilateral pares → tänk borrelia eller autoimmun orsak."
    ],
    "ddx": [
     [
      "t9-319",
      "Orsaker till perifer facialispares",
      "Genomgång av perifera orsaker."
     ],
     [
      "t9-320",
      "Bells pares och behandling vid facialispares",
      "Vanligaste perifera formen, uteslutningsdiagnos."
     ],
     [
      "t9-187",
      "Stroke och TIA",
      "Vanlig orsak till central facialispares."
     ],
     [
      "t9-222",
      "Facialispares",
      "Ögonaspekter: lagoftalmus och expositionskeratit."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 13",
     "Ögonboken – sammanfattning (T9), s. 25"
    ]
   },
   "card": {},
   "km": [
    "onh:33",
    "neuro:72"
   ]
  },
  {
   "id": "t9-319",
   "name": "Orsaker till perifer facialispares",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Perifer facialispares orsakas oftast av idiopatisk **Bells pares**, men måste skiljas från **borrelios**, **Ramsay Hunts syndrom**, **tumör**, **trauma**, **otit** och **autoimmuna** orsaker. Bells pares är en uteslutningsdiagnos.",
    "klin": [
     {
      "tbl": [
       [
        "Orsak",
        "Ledtrådar"
       ],
       [
        "Bells pares",
        "Akut, ofta föregången av värk bakom örat; progredierar till total pares inom 3 d–1 v"
       ],
       [
        "Borrelios",
        "Fästingbett, utslag, artralgi, vistelse i endemiskt område; vanligare hos barn; tänk på det vid bilateral pares"
       ],
       [
        "Ramsay Hunt (zoster oticus)",
        "Initialt uttalad smärta, blåsor i hörselgång och svalg; ev. hörselnedsättning, tinnitus, yrsel"
       ],
       [
        "Tumör/expansivitet",
        "Gradvis progredierande; vanligast parotistumör och kolesteatom"
       ],
       [
        "Trauma",
        "Fraktur genom temporalbenet"
       ],
       [
        "Otit",
        "Gradvis progredierande, öronvärk, feber, ledningshinder"
       ],
       [
        "Autoimmunitet",
        "Guillain–Barré, sarkoidos; inte sällan bilateral"
       ]
      ]
     },
     "Akustikusneurinom (schwannom) kan ge hörselnedsättning, tinnitus och facialispares.",
     "Facialispares med smärta i en spottkörtelresistens är ett starkt tecken på malignitet."
    ],
    "diag": [
     "Otomikroskopi, hörselmätning, ev. stapediusreflex, Schirmers tårtest och **borreliaserologi**.",
     "Vid neuroborreliosmisstanke tas LP; intratekal antikroppsproduktion talar för neuroborrelios.",
     "Temporalbensfraktur: längsgående fraktur ger ofta pares efter något dygn (svullnad), tvärgående ger omedelbar pares; diagnos med DT."
    ],
    "beh": [
     "Bells pares: kortison inom 72 h (prednisolon 60 mg × 1 i 5 d, därefter nedtrappning 5 d).",
     "Borrelia: doxycyklin i 2 veckor till vuxna, PcV × 3 i 10 d till barn.",
     "Ramsay Hunt: antiviral behandling och steroider om inte mer än några dagar gått, samt analgetika.",
     "Trauma: pares direkt i anslutning till fraktur → nerv i kläm, överväg kirurgisk exploration."
    ],
    "hand": [
     "Positiv borreliaserologi → remiss neurolog/infektion och kontroll efter 1 resp. 6 veckor; LP vid progress.",
     "Gradvis progredierande pares → utred tumör/otit."
    ],
    "flagg": [
     "Gradvis tillkommande pares talar emot Bells pares – tänk tumör (parotis, kolesteatom).",
     "Bilateral pares → borrelia, Guillain–Barré, sarkoidos.",
     "Omedelbar pares vid temporalbensfraktur kan kräva akut kirurgi."
    ],
    "ddx": [
     [
      "t9-320",
      "Bells pares och behandling vid facialispares",
      "Idiopatisk, akut debut, uteslutningsdiagnos."
     ],
     [
      "t9-290",
      "Zoster oticus",
      "Smärta och blåsor i hörselgång/på öronmusslan."
     ],
     [
      "t9-083",
      "Neuroborrelios",
      "Facialispares som del av Bannwarths syndrom."
     ],
     [
      "t9-093",
      "Guillain-Barrés syndrom",
      "Autoimmun, ofta bilateral pares."
     ],
     [
      "t9-373",
      "Maligna spottkörteltumörer",
      "Facialispares + resistens talar för malignitet."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 13",
     "Kompendium ÖNH (T9), s. 6",
     "Kompendium ÖNH (T9), s. 24",
     "Kompendium ÖNH (T9), s. 43",
     "Kompendium Neurologi (T9), s. 38",
     "Kompendium Neurologi (T9), s. 42"
    ]
   },
   "card": {},
   "km": [
    "onh:34",
    "neuro:72"
   ]
  },
  {
   "id": "t9-320",
   "name": "Bells pares och behandling vid facialispares",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Audiologi och otoneurologi",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Bells pares** är en idiopatisk akut perifer förlamning av n. facialis, som anses bero på inflammation i nerven vid **ganglion geniculi** med kompression, ischemi och demyelinisering. Det är en **uteslutningsdiagnos**.",
    "klin": [
     "Svaghet/förlamning av alla muskler i ena ansiktshalvan; rynkor och nasolabialfåra utslätas.",
     "Föregås inte sällan av övergående värk bakom örat.",
     "Ögonlocket kan inte slutas → ögonirritation och risk för kornealskada.",
     "Sensibiliteten är bevarad.",
     "Obehag vid skarpa ljud (påverkad stapediusmuskel) hos ca 50 %.",
     "Progredierar till total förlamning inom 3 dagar–1 vecka."
    ],
    "diag": [
     "Nivådiagnostik hos ÖNH: otomikroskopi, hörselmätning, ev. stapediusreflex, Schirmers tårtest och borreliaserologi.",
     "Positiv borrelia → remiss neurolog/infektion, kontroll efter 1 resp. 6 veckor; LP vid progress.",
     "Ögat: undersök kornea med fluorescein, bedöm lagoftalmus och orbicularis oculi-kraft."
    ],
    "beh": [
     "**Kortison inom 72 h**: prednisolon 60 mg × 1 i 5 dagar, därefter nedtrappning under 5 dagar.",
     "**Fuktkammare** till natten eller hela tiden (beroende på paresgrad) samt ögondroppar.",
     "Vid annan genes: borrelia – doxycyklin 2 v (vuxna), PcV × 3 i 10 d (barn); Ramsay Hunt – antiviral + steroider."
    ],
    "hand": [
     "Vanligaste resttillståndet är **synkinesi** (ofrivillig medrörelse i munnen vid blinkning).",
     "Vid kvarstående ektropion efter n. VII-pares bör man vänta minst 6 månader med kirurgi, eftersom nervfunktionen kan återhämta sig."
    ],
    "flagg": [
     "Kortisonet ska ges inom **72 h**.",
     "Skydda ögat – **expositionskeratit** är en risk vid lagoftalmus.",
     "Gradvis progress, bilateral pares eller tillkomst av andra symtom talar emot Bells pares."
    ],
    "ddx": [
     [
      "t9-319",
      "Orsaker till perifer facialispares",
      "Borrelia, Ramsay Hunt, tumör, trauma, otit och autoimmunitet ska uteslutas."
     ],
     [
      "t9-318",
      "Perifer och central facialispares",
      "Central pares sparar pannan."
     ],
     [
      "t9-096",
      "Perifer facialispares",
      "Neurologisk vinkel på samma tillstånd."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 13",
     "Ögonboken – sammanfattning (T9), s. 25"
    ]
   },
   "card": {},
   "km": [
    "neuro:72",
    "onh:35"
   ]
  },
  {
   "id": "t9-321",
   "name": "Differentialdiagnostik vid nästäppa, rinnande näsa och luktrubbningar",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Nästäppa, rinnande näsa och luktrubbning orsakas oftast av **inflammatoriska tillstånd** (infektion, allergisk och idiopatisk rinit), men **sidighet, förlopp och sekretets karaktär** pekar mot anatomiska avvikelser, rumsinskränkande processer eller trauma.",
    "klin": [
     {
      "h": "Nästäppa"
     },
     "Inflammatorisk (infektion, idiopatisk, allergisk rinit): ofta bilateral eller växlande sida.",
     "Anatomisk avvikelse (septumdeviation, alarinsufficiens): oftast ensidig och konstant.",
     "Rumsinskränkande process (polyper, papillom, cancer i bihåla/epifarynx): börjar diskret och förvärras med tiden.",
     {
      "h": "Rinnande näsa"
     },
     "Tunn, vattnig, dubbelsidig: viral rinosinuit, allergisk rinit, idiopatisk rinit, kolinerg snuva.",
     "Ensidig efter trauma/fraktur → tänk **likvorré**.",
     "Mukös/mukopurulent: kronisk inflammation.",
     "Purulent, ofta ensidig >10 d: bakteriell rinosinuit; ännu längre och illaluktande → sinuit av dental orsak eller malignitet.",
     {
      "h": "Luktrubbning"
     },
     "Konduktiv (luktämnen når inte luktslemhinnan) eller sensorineural (skada på luktepitel/nervbanor).",
     "Näspolypos och rinosinuiter (20–30 %), viral ÖLI (20 %, kan bli permanent), skalltrauma (10–20 %, ofta total anosmi)."
    ],
    "diag": [
     "Anamnes på sidighet, debut, förlopp, sekretets utseende och trauma.",
     "Noggrant nässtatus efter avsvällning, inkl. skopi.",
     "Allergiutredning på alla med långvariga näsbesvär."
    ],
    "hand": [
     "Akut rinit (förkylning) behandlas symtomatiskt: antiflogistika, ev. näsdroppar och koksaltsköljning.",
     "Långdragna näsbesvär – ha alltid tumör i bakhuvudet."
    ],
    "flagg": [
     "Ensidig, tilltagande nästäppa eller ensidig purulent/blodig snuva → tänk tumör.",
     "Ensidig vattnig snuva efter trauma → likvorré.",
     "Långvarigt bruk av avsvällande nässpray → medikamentell rinit."
    ],
    "ddx": [
     [
      "t9-322",
      "Allergisk rinit",
      "Klåda, nysningar, ögonsymtom, exponeringssamband."
     ],
     [
      "t9-323",
      "Vasomotorisk rinit",
      "Liknar allergi men utan klåda och ögonsymtom."
     ],
     [
      "t9-328",
      "Septumdeviation",
      "Ensidig, konstant nästäppa utan slemhinnesymtom."
     ],
     [
      "t9-332",
      "Näspolyper",
      "Tilltagande nästäppa med luktbortfall."
     ],
     [
      "t9-329",
      "Maxillarsinuit",
      "Ensidig purulent sekretion och värk >10 d."
     ],
     [
      "t9-325",
      "Medikamentell rinit",
      "Rekyl efter långvarig avsvällande spray."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 14–17",
     "Kompendium ÖNH (T9), s. 42"
    ]
   },
   "card": {},
   "km": [
    "onh:41"
   ]
  },
  {
   "id": "t9-322",
   "name": "Allergisk rinit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Allergisk rinit** är en atopisk sjukdom med **nysningar, klåda och vattnig sekretion** utlöst av allergen (pollen, kvalster, husdjur). Prevalensen är ca **20 %**. Den delas in i **intermittent** och **persisterande** allergi.",
    "klin": [
     "Nysningar, klåda i näsa, ögon och svalg samt vattnig sekretion.",
     "Konjunktivit med klåda och rinnande ögon, ibland svullen konjunktiva.",
     "Ibland bronkiell hyperreaktivitet och astma.",
     "Pollen: träd på våren, gräs på sommaren, gråbo på sensommaren.",
     "Ju tidigare symtomdebut i livet, desto mer uttalade brukar besvären bli.",
     "Intermittent: <4 veckor och <4 dagar/vecka; persisterande: >4 veckor och >4 dagar/vecka."
    ],
    "diag": [
     "Noggrann anamnes på exponering, hereditet och andra atopiska tecken + klinisk bild ger diagnosen.",
     "Vid behov RAST eller pricktest.",
     "Titta i öronen efter samtidig **sekretorisk mediaotit**."
    ],
    "beh": [
     "**Elimination** av allergenet är bästa behandlingen.",
     "Koksaltsköljning (sköljer bort allergen).",
     "Intermittent: prova först **antihistamin**, lägg till **nasalsteroid** vid otillräcklig effekt.",
     "Persisterande: **nasalsteroid** + antihistamin vid behov.",
     "Svåra besvär: motiverat att prova prednisolon 20–30 mg i 3–5 dagar."
    ],
    "flagg": [
     "Missa inte samtidig sekretorisk otit.",
     "Klåda och ögonsymtom skiljer allergisk från idiopatisk rinit."
    ],
    "ddx": [
     [
      "t9-323",
      "Vasomotorisk rinit",
      "Ovanligt med klåda och ögonsymtom; uteslutningsdiagnos."
     ],
     [
      "t9-325",
      "Medikamentell rinit",
      "Nästäppa efter långvarigt bruk av avsvällande spray."
     ],
     [
      "t9-321",
      "Differentialdiagnostik vid nästäppa, rinnande näsa och luktrubbningar",
      "Översikt."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 15"
    ]
   },
   "card": {},
   "km": [
    "onh:42"
   ]
  },
  {
   "id": "t9-323",
   "name": "Vasomotorisk rinit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Idiopatisk (vasomotorisk) rinit**, även kallad **överkänslig näsa**, är en av de vanligaste orsakerna till nästäppa hos vuxna. Orsaken är oklar men kan bero på minskad motståndskraft i åldrande slemhinna.",
    "klin": [
     "Antingen nästäppa, nysningar eller sekretion.",
     "Ovanligt med ögonsymtom och klåda i ögon, näsa eller svalg – skiljer mot allergisk rinit.",
     "Ofta nasal hyperreaktivitet för ospecifika stimuli, liknande den vid allergi."
    ],
    "diag": [
     "Anamnes – i övrigt en **uteslutningsdiagnos**.",
     "Allergiutredning på alla med långvariga näsbesvär; utred även vanlig infektion."
    ],
    "beh": [
     "Viktigt att utröna vilket symtom som dominerar.",
     "**Nasala steroider** hjälper i de flesta fall, med bäst effekt på nästäppan.",
     "Koksaltsköljning kan lindra symtomen."
    ],
    "hand": [
     "Se till att nässpray/-droppar inte missbrukas."
    ],
    "flagg": [
     "Avsvällande nässpray kan leda till medikamentell rinit.",
     "Långdragna näsbesvär – tänk på tumör."
    ],
    "ddx": [
     [
      "t9-322",
      "Allergisk rinit",
      "Klåda, ögonsymtom och tydligt allergen."
     ],
     [
      "t9-325",
      "Medikamentell rinit",
      "Rekyl efter långvarigt avsvällande bruk."
     ],
     [
      "t9-324",
      "Kronisk och atrofisk rinit",
      "Andra långdragna rinitformer, t.ex. kolinerg rinit."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 15–16"
    ]
   },
   "card": {},
   "km": [
    "onh:42"
   ]
  },
  {
   "id": "t9-324",
   "name": "Kronisk och atrofisk rinit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Kronisk rinit** är en grupp tillstånd med långdragna näsbesvär där exogena (torr miljö, irritanter) och endogena (vasomotoriska, neurogena) faktorer spelar in. Hit hör **rhinitis sicca anterior**, **kolinerg rinit** och **atrofisk rinit**.",
    "klin": [
     {
      "h": "Rhinitis sicca anterior"
     },
     "Torr luft → slemhinnan torkar ut → sår och krustor → irritation och nästäppa → patienten petar och fräser → ond spiral.",
     {
      "h": "Kolinerg rinit"
     },
     "Vattnig, bilateral snuva, värst vid kallt väder och vid måltid (gustatorisk); drabbar äldre män (”gubbsnuva”), beror på överdriven kolinerg aktivitet.",
     {
      "h": "Atrofisk rinit"
     },
     "Slemhinneatrofi ger paradoxal känsla av nästäppa, troligen p.g.a. minskad turbulens.",
     "Ibland uttalad sårbildning med krustor och sekundärinfektion; kan orsakas av en rad underliggande tillstånd."
    ],
    "diag": [
     "Atrofisk rinit ska utredas med avseende på underliggande orsak.",
     "Ha alltid tumör i bakhuvudet vid långdragna näsbesvär."
    ],
    "beh": [
     "Rhinitis sicca: koksaltsköljning + Nozoil som mjukgörande; patienten måste sluta peta.",
     "Kolinerg rinit: antikolinergika kan övervägas, men passar mindre bra till äldre."
    ],
    "flagg": [
     "Långdragna ensidiga besvär → uteslut tumör.",
     "Atrofisk rinit är ofta sekundär – utred orsaken."
    ],
    "ddx": [
     [
      "t9-323",
      "Vasomotorisk rinit",
      "Överkänslig näsa med hyperreaktivitet."
     ],
     [
      "t9-325",
      "Medikamentell rinit",
      "Orsakad av långvarig avsvällande spray."
     ],
     [
      "t9-321",
      "Differentialdiagnostik vid nästäppa, rinnande näsa och luktrubbningar",
      "Översikt."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 16"
    ]
   },
   "card": {},
   "km": [
    "onh:42"
   ]
  },
  {
   "id": "t9-325",
   "name": "Medikamentell rinit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Medikamentell rinit** uppstår vid långtidsanvändning av **avsvällande näsdroppar/nässpray**, som ger **toleransutveckling och rekyleffekt** med kvarstående nästäppa.",
    "klin": [
     "Avsvällande preparat minskar slemhinnans tjocklek genom att dra ihop kärlen.",
     "Ca 10 dagars användning anses säker.",
     "Patienten är ofta medveten om problemet och nämner inte sitt användande."
    ],
    "diag": [
     "Fråga aktivt om bruk av avsvällande nässpray vid långvarig nästäppa."
    ],
    "beh": [
     "Patienten måste **sluta nässpraya** – de första dagarna blir besvärliga p.g.a. rekyl.",
     "**Nasalsteroid i 3–4 veckor** underlättar.",
     "Fri tillgång till koksaltsköljning; koksaltnässpray i kylen vid behov.",
     "Slemhinnan är återställd på ca två veckor."
    ],
    "hand": [
     "Förebygg: använd avsvällande preparat så kort tid som möjligt, i svagast möjliga koncentration och utan konserveringsmedel."
    ],
    "flagg": [
     "Patienten berättar ofta inte om sprayanvändningen – fråga.",
     "Vid idiopatisk rinit: se till att nässprayer inte missbrukas."
    ],
    "ddx": [
     [
      "t9-323",
      "Vasomotorisk rinit",
      "Överkänslig näsa utan sprayberoende."
     ],
     [
      "t9-322",
      "Allergisk rinit",
      "Klåda, nysningar, ögonsymtom."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 15–16"
    ]
   },
   "card": {},
   "km": [
    "onh:43"
   ]
  },
  {
   "id": "t9-326",
   "name": "Främre näsblödning",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Ca **90 %** av näsblödningar utgår från **locus Kiesselbachi** på främre septum. Främre näsblödning stillas med **kompression**, och hos läkare med **avsvällning, bedövning och etsning** av synlig blödningskälla.",
    "klin": [
     "Orsaker: torra slemhinnor/ÖLI, trauma mot näsa/slemhinna, kärlanomali (ofta locus Kiesselbachi), försämrad hemostas.",
     "Fråga vilken sida blödningen började på.",
     {
      "h": "Egenvård"
     },
     "Sitt upp, lätt framåtböjd, och snyt ut koagler.",
     "Nyp ihop brosknäsan över näsvingarna i **20 minuter**.",
     "Hjälper det inte: stoppa in en rejäl bomullstuss med kärlsammandragande näsdroppar och/eller olja och kläm igen i 20 min; stannar det inte → läkarkontakt."
    ],
    "diag": [
     "Vid klassisk näsblödning har blödningen oftast stannat när patienten kommer.",
     "Sug rent, sväll av och bedöva för att hitta blödningskällan."
    ],
    "beh": [
     "Kärlsammandragande tamponad med **xylokain-adrenalin i 15–20 min**.",
     "Synlig blödningskälla: **etsning med silvernitratpinne**, neutralisering med koksalt.",
     "Därefter olje-/paraffinsudd som lämnas minst 4–5 h.",
     "Otillräcklig effekt av etsning → tamponad och remiss till ÖNH för diatermi.",
     "Diffus slemhinneblödning → Spongostan med Cyklokapron eller RapidRhino."
    ],
    "flagg": [
     "Ingen synlig källa eller stor blödning → misstänk **bakre blödning** och kontrollera cirkulationen.",
     "Bakre blödningar blir vanligare med stigande ålder.",
     "Tänk på försämrad hemostas som bakomliggande orsak."
    ],
    "ddx": [
     [
      "t9-327",
      "Bakre näsblödning",
      "Ingen synlig källa, större blodförlust, äldre patienter."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 17"
    ]
   },
   "card": {},
   "km": [
    "onh:54",
    "onh:44"
   ]
  },
  {
   "id": "t9-327",
   "name": "Bakre näsblödning",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Bakre näsblödning** utgår ofta från **a. sphenopalatina** eller dess grenar, ökar i frekvens med stigande ålder och innebär vanligen **större blodförlust** än främre blödning.",
    "klin": [
     "Ingen synlig blödningskälla vid främre rinoskopi.",
     "Större blodförlust med risk för cirkulationspåverkan.",
     "Anamnestiskt viktigt att fråga vilken sida blödningen började på."
    ],
    "diag": [
     "Cirkulationsstatus inkl. allmäntillstånd, pulsar och blodtryck.",
     "Sug rent, sväll av och bedöva för att utesluta främre källa."
    ],
    "beh": [
     "**Bakre tamponad**: Foleykateter fylls med 6–10 ml sterilt vatten i epifarynx och hålls sträckt medan en 2 cm bred gasvävstamponad insmord med Terracortril packas in (nerifrån–upp, sedan bakifrån–fram).",
     "Katetern fixeras med polstring och klämma utanpå näsan.",
     "Vid svåra bakre blödningar: Cyklokapron p.o./i.v. och endoskopisk diatermi, till sist ev. kirurgisk ligering eller embolisering."
    ],
    "hand": [
     "**Inläggning** vid bakre blödning."
    ],
    "flagg": [
     "Bakre blödning kan ge betydande blodförlust – bedöm cirkulationen tidigt.",
     "Äldre patienter och försämrad hemostas ökar risken."
    ],
    "ddx": [
     [
      "t9-326",
      "Främre näsblödning",
      "Synlig källa vid locus Kiesselbachi, stillas med kompression/etsning."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 17"
    ]
   },
   "card": {},
   "km": [
    "onh:44"
   ]
  },
  {
   "id": "t9-328",
   "name": "Septumdeviation",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Septumdeviation** orsakas av trauma och ger **permanent nästäppa** utan slemhinnesymtom. Den kan förvärra snarkning och sömnapné och behandlas **kirurgiskt** med septumplastik.",
    "klin": [
     "Permanent nästäppa utan slemhinnesymtom, ibland med blödning.",
     "Oftast ensidig och konstant nästäppa (anatomisk orsak).",
     "Deviation av främre septum ger mer symtom.",
     "Kan förvärra snarkning och sömnapné."
    ],
    "diag": [
     "Inspektion av kolumellan, därefter spekulum och optik.",
     "Objektiv näsmätning: rinomanometri eller akustisk rinometri."
    ],
    "beh": [
     "Kirurgi: septum lösgörs från slemhinnan, brosket mobiliseras och sys fast i bättre läge – bäst effekt på nästäppan.",
     "Vid samtidig deviation av ytternäsan finns anledning att åtgärda båda samtidigt."
    ],
    "hand": [
     "Remiss till ÖNH.",
     "Vid akut näsfraktur: stor septumdeviation åtgärdas med plastik inom en vecka, mindre kan exspekteras."
    ],
    "flagg": [
     "Vid nästrauma: uteslut **septumhematom** med främre rinoskopi – ska evakueras snart (grov nål efter bedövning, tamponad, Heracillin profylaktiskt mot abscess).",
     "Tilltagande ensidig nästäppa talar snarare för rumsinskränkande process."
    ],
    "ddx": [
     [
      "t9-332",
      "Näspolyper",
      "Tilltagande nästäppa med luktpåverkan."
     ],
     [
      "t9-323",
      "Vasomotorisk rinit",
      "Växlande nästäppa med slemhinnesymtom."
     ],
     [
      "t9-348",
      "Sömnapnésyndrom och snarkning",
      "Septumdeviation kan bidra."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 14",
     "Kompendium ÖNH (T9), s. 16",
     "Kompendium ÖNH (T9), s. 19–20"
    ]
   },
   "card": {},
   "km": [
    "onh:45"
   ]
  },
  {
   "id": "t9-329",
   "name": "Maxillarsinuit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Maxillarsinuit** uppstår när **ostium täpps till** (vid virus-ÖLI, allergi eller hyperreaktivitet) så att undertryck, transudat och inflammation utvecklas. Maxillarsinus är den bihåla som **vanligast** drabbas; bakteriell rinosinuit orsakas främst av **pneumokocker och H. influenzae**.",
    "klin": [
     "Klassiska men ospecifika symtom – långvarig färgad snuva och ömhet över sinus som ökar vid framåtböjning – kan lika gärna vara virusinfektion.",
     {
      "h": "Talar för bakteriell genes"
     },
     "Ensidig värk och/eller sekretion (illaluktande/-smakande) >10 dagar.",
     "**Dubbelinsjuknande**: tydlig försämring efter 5 dagars ÖLI med feber/påtaglig smärta."
    ],
    "diag": [
     "Näsinspektion: polyper, färgat sekret i mellersta näsgången.",
     "Svullnad av slemhinnan i bihålorna kan ses på röntgen/DT.",
     "Käkspolning – både diagnostisk och terapeutisk."
    ],
    "beh": [
     "Symtomlindring till alla: vila från arbete, analgetika vid behov, höjd huvudända, koksaltsköljning, lokalt avsvällande.",
     "Antibiotika (**PcV 1,6 g × 3 i 7–10 d**) erbjuds alla med möjlig eller sannolik bakteriell rinosinuit; kan ges på vilande recept."
    ],
    "hand": [
     "Svår smärta, svullnad i ansiktet och feber → **akut remiss till ÖNH** för i.v. antibiotika och ev. kirurgiskt dränage."
    ],
    "flagg": [
     "Mycket långvarig, illaluktande ensidig sekretion → tänk dental orsak eller malignitet.",
     "Ansiktssvullnad + feber + svår smärta = akut ÖNH-fall.",
     "Ensidiga besvär med uppdriven kind eller ögonsymtom kan vara bihålecancer."
    ],
    "ddx": [
     [
      "t9-330",
      "Frontalsinuit",
      "Smärta ovan ögat, allmänpåverkan – akut remiss."
     ],
     [
      "t9-331",
      "Etmoidit",
      "Barn, periorbital svullnad – risk för orbitaspridning."
     ],
     [
      "",
      "Akut viral rinit",
      "Symtomen överlappar; typiskt förlopp 3+3+3 dagar."
     ],
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Ensidiga, långdragna besvär i bihåla."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 14",
     "Kompendium ÖNH (T9), s. 18",
     "Kompendium ÖNH (T9), s. 42"
    ]
   },
   "card": {},
   "km": [
    "onh:46"
   ]
  },
  {
   "id": "t9-330",
   "name": "Frontalsinuit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Frontalsinuit** är inflammation i sinus frontalis när ostium täppts till. Den ger **smärta ovan ögat**, ofta ensidigt, med **feber och allmänpåverkan**, och **misstänkt diagnos ska remitteras akut till ÖNH**.",
    "klin": [
     "Smärta ovan ögat, oftast ensidig.",
     "Feber och allmänpåverkan.",
     "Frontalsinus tömmer sig under concha media, liksom maxillarsinus och främre etmoidalceller.",
     "Föregås av tilltäppt ostium vid virus-ÖLI, allergi eller hyperreaktivitet."
    ],
    "diag": [
     "Näsinspektion: färgat sekret i mellersta näsgången, polyper.",
     "Svullnad av bihåleslemhinnan kan ses på röntgen/DT."
    ],
    "beh": [
     "Generellt för sinuiter: svår smärta, ansiktssvullnad och feber → i.v. antibiotika och ev. kirurgiskt dränage på ÖNH-klinik."
    ],
    "hand": [
     "**Akut remiss till ÖNH** vid misstanke."
    ],
    "flagg": [
     "Frontalsinuit handläggs inte i primärvården – akut remiss.",
     "Sinus frontalis gränsar mot främre skallgropen och pannloben."
    ],
    "ddx": [
     [
      "t9-329",
      "Maxillarsinuit",
      "Vanligast; kan handläggas i primärvården."
     ],
     [
      "t9-331",
      "Etmoidit",
      "Värk vid näsroten och periorbital svullnad, oftast barn."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 18",
     "Kompendium ÖNH (T9), s. 22"
    ]
   },
   "card": {},
   "km": [
    "onh:46"
   ]
  },
  {
   "id": "t9-331",
   "name": "Etmoidit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Etmoidit** är inflammation i etmoidalcellerna som typiskt föregås av ÖLI och är **vanligast hos barn**. Den medför **stor risk för spridning till orbita och sepsis** och ska **remitteras akut till ÖNH**.",
    "klin": [
     "Värk vid näsroten.",
     "Svullnad, rodnad och smärta i mediala ögonvrån/periorbitalt.",
     "Föregås av ÖLI; ofta allmänpåverkan och feber.",
     "Främre etmoidalceller dräneras under concha media, bakre under concha superior."
    ],
    "diag": [
     "Klinisk misstanke räcker för akut remiss; slemhinnesvullnad i bihålorna kan ses på röntgen/DT."
    ],
    "beh": [
     "Generellt vid svår sinuit: i.v. antibiotika och ev. kirurgiskt dränage på ÖNH-klinik."
    ],
    "hand": [
     "**Akut remiss till ÖNH**."
    ],
    "flagg": [
     "Periorbital svullnad hos barn efter ÖLI → tänk etmoidit.",
     "Stor risk för **orbitaspridning och sepsis**."
    ],
    "ddx": [
     [
      "t9-329",
      "Maxillarsinuit",
      "Ömhet över kinden, vanligast hos vuxna."
     ],
     [
      "t9-330",
      "Frontalsinuit",
      "Smärta ovan ögat."
     ],
     [
      "t9-228",
      "Dakryocystit",
      "Annan orsak till svullnad i mediala ögonvrån."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 18"
    ]
   },
   "card": {},
   "km": [
    "onh:46"
   ],
   "prog": [
    [
     "t11",
     "Termin 11",
     "t11-283",
     "Etmoidit"
    ]
   ]
  },
  {
   "id": "t9-332",
   "name": "Näspolyper",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Näspolyper** består av lös bindväv, inflammationsceller, vatten och körtlar och är **bleka och okänsliga**. Vanligast är **bilateral, multifokal näspolypos** där orsak sällan hittas; vanligare hos astmatiker och högst prevalens vid **NSAID-intolerans**.",
    "klin": [
     "Enstaka polyper kan vara uttryck för underliggande inflammation (bakterier/svamp).",
     "Föregås ofta av kronisk rinosinuit med tilltagande nästäppa.",
     "Luktsinnet påverkas när polyperna växer; vid omfattande bortfall påverkas även smaken.",
     "Sömnbesvär.",
     "Kan orsaka snarkning."
    ],
    "diag": [
     "Noggrant nässtatus efter avsvällning inkl. skopi.",
     "Uteslut alltid **cystisk fibros** om patienten är <20 år."
    ],
    "beh": [
     "Avlägsna underliggande orsak till inflammationen om den identifieras.",
     "**Nasala steroider** (ofta dubbel dos) eller steroiddroppar – kan pågå i åratal; titrera fram minsta möjliga dos.",
     "Omfattande polypväxt: perorala steroider i 3 veckors kur.",
     "Om inget hjälper: kirurgi – enstaka polyp med evulsio (slynga), annars FESS."
    ],
    "flagg": [
     "Ensidig polyp/tilltagande ensidig nästäppa kan vara tumör (papillom, cancer).",
     "Polyper hos ung patient → cystisk fibros."
    ],
    "ddx": [
     [
      "t9-328",
      "Septumdeviation",
      "Konstant nästäppa utan luktpåverkan."
     ],
     [
      "t9-321",
      "Differentialdiagnostik vid nästäppa, rinnande näsa och luktrubbningar",
      "Översikt."
     ],
     [
      "t9-378",
      "Benigna tumörer, pleomorft adenom och angiofibrom",
      "Benigna tumörer i näsan, t.ex. papillom."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 14",
     "Kompendium ÖNH (T9), s. 17",
     "Kompendium ÖNH (T9), s. 31",
     "Kompendium ÖNH (T9), s. 42"
    ]
   },
   "card": {},
   "km": [
    "onh:47"
   ]
  },
  {
   "id": "t9-333",
   "name": "Ansikts- och skallbasfrakturer",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Ansiktstrauma drabbar oftast **unga män** vid trafikolycka, misshandel eller idrott. Vanligaste frakturerna är **näsa, okben och underkäke**. Primärt omhändertagande följer **ABCDE** med särskilt fokus på **luftvägen** och halsryggen; **skallbasfraktur** ger likvorré, brillenhematom och anosmi.",
    "klin": [
     {
      "tbl": [
       [
        "Fraktur",
        "Typiska fynd"
       ],
       [
        "Näsfraktur",
        "Deviation, sänkt profil, svullnad, krepitationer, nästäppa, septumhematom"
       ],
       [
        "NOE-fraktur",
        "Telekantus, avflackad näsrygg, likvorré, skador på tårapparat"
       ],
       [
        "Okbensfraktur",
        "Avflackad kind, frakturhak, trismus, anestesi i n. infraorbitalis område, diplopi"
       ],
       [
        "Mellanansikte (Le Fort I–III)",
        "Bettavvikelser, mobilitet i tandbärande segment, brillenhematom, förlängt ansikte (III)"
       ],
       [
        "Mandibelfraktur",
        "Bettasymmetri, frakturhak, nedsatt känsel på hakan, trismus"
       ],
       [
        "Pannbensfraktur",
        "Brillenhematom, rinorré, anosmi, ev. exoftalmus"
       ],
       [
        "Orbitafraktur",
        "Diplopi, inskränkt ögonrörlighet, känselbortfall infraorbitalt, enoftalmus"
       ],
       [
        "Temporalbensfraktur",
        "Längsgående: blödning ur hörselgång, ledningshinder, sen pares; tvärgående: yrsel, sensorineural nedsättning, omedelbar facialispares"
       ]
      ]
     },
     "Undersök systematiskt: inspektion, sensibilitet (n. trigeminus), motorik (n. facialis), hörsel, palpation, ögon, käkled, munhåla, främre rinoskopi (septumhematom) och otoskopi (hematotympanon)."
    ],
    "diag": [
     "I princip alltid **DT ansiktsskelett inkl. mandibel**, oftast också DT hjärna och halsrygg.",
     "Näsfraktur räcker med klinisk diagnos.",
     "Skallbasfraktur diagnostiseras med DT; intrakraniell luft tyder på duraskada.",
     "Ofta konsult från ögon- och käkkirurgi."
    ],
    "beh": [
     "Näsfraktur: reponeras inom en vecka i lokalbedövning; septumhematom evakueras snarast.",
     "Okbensfraktur: oftast sluten reposition (Gillies). Le Fort: oftast öppen reposition och osteosyntes.",
     "Mandibelfraktur betraktas som öppen fraktur → profylaktisk antibiotika; åtgärdas inom ca 24–48 h.",
     "Pannbensfraktur med misstänkt duraskada: Claforan profylaktiskt mot meningit.",
     "Orbitafraktur: operation inom 1–2 veckor om volymen behöver återställas; **trap door-fraktur** hos barn opereras akut (helst inom 6 h, absolut inom 24 h).",
     "Skallbasfraktur: alla till sjukhus, kontroll av facialisfunktion och hörsel (Weber/Rinne), sterilt förband och frikostigt antibiotika."
    ],
    "hand": [
     "Halskrage tills halsryggsskada är utesluten; överväg tidig intubation/trakeotomi.",
     "Blow-out-fraktur: patienten får inte snyta sig (förbindelse med sinus maxillaris)."
    ],
    "flagg": [
     "**Trap door-fraktur** hos barn: smärta, illamående, bradykardi, inga periorbitala hematom och svår att se på DT.",
     "Fissura orbitalis superior-/apexsyndrom och retrobulbärt hematom kräver akut handläggning.",
     "Mandibelfrakturer kan hota luftvägen.",
     "Septumhematom måste evakueras för att undvika abscess."
    ],
    "ddx": [
     [
      "t9-334",
      "Mjukdelsskador i ansikte, munhåla och svalg",
      "Ofta samtidiga."
     ],
     [
      "t9-246",
      "Blow-out",
      "Orbitafraktur ur ögonperspektiv."
     ],
     [
      "t9-041",
      "Skalltrauma",
      "Samtidig intrakraniell skada måste uteslutas."
     ],
     [
      "t9-419",
      "Trauma inom ÖNH-området",
      "Radiologisk översikt."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 19–24",
     "Kompendium Neurologi (T9), s. 15"
    ]
   },
   "card": {},
   "km": [
    "onh:48"
   ]
  },
  {
   "id": "t9-334",
   "name": "Mjukdelsskador i ansikte, munhåla och svalg",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Mjukdelsskador i ansiktet läker ofta bra tack vare **god blodcirkulation**. Handläggningen bygger på **tryckförband**, **noggrann rengöring**, **sparsam revision** och **noggrann suturering lager för lager**; antibiotikaprofylax behövs i regel inte.",
    "klin": [
     "Blödningar behandlas initialt med tryckförband.",
     "Inspektera såret och gör en preliminär bedömning – behövs åtgärd på operationssal?",
     "Omläggning med fuktiga kompresser i väntan på åtgärd."
    ],
    "beh": [
     "Åtgärd helst inom 12 h, men OK inom 24 h.",
     "Noggrann rengöring och **sparsam revision** – tunna hudbryggor och flikar överlever ofta.",
     "Noggrann suturering med adaptation av sårkanterna, varje lager för sig.",
     "Hud: 5-0 Etilon (6-0 i ögonlock). Mun, tunga och djupare lager: 3-0/4-0 Vicryl (resorberbar).",
     "Tetanusprofylax enligt gällande riktlinjer."
    ],
    "hand": [
     {
      "h": "Antibiotikaprofylax ges vid"
     },
     "Kraftig kontamination och högenergivåld (Claforan).",
     "Penetrerande ögonskador och/eller främmande kropp (Zinacef).",
     "Kornealerosion (Chloromycetinsalva).",
     "Bett av djur eller människa (amoxicillin)."
    ],
    "flagg": [
     "Revidera sparsamt – vävnad som ser dålig ut överlever ofta i ansiktet.",
     "Glöm inte tetanusprofylax.",
     "Bettskador kräver antibiotika."
    ],
    "ddx": [
     [
      "t9-333",
      "Ansikts- och skallbasfrakturer",
      "Ofta samtidiga – undersök ansiktsskelettet."
     ],
     [
      "t9-249",
      "Sårskada i ögonlock och tårvägar",
      "Särskild handläggning vid ögonlocksskada."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 25"
    ]
   },
   "card": {},
   "km": [
    "onh:49"
   ]
  },
  {
   "id": "t9-335",
   "name": "Kirurgiska ingrepp i näsa och bihålor",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Kirurgi i näsa och bihålor används när konservativ behandling inte räcker. Kompendiet nämner bl.a. **septumplastik**, **polypkirurgi (evulsio, FESS)**, **käkspolning**, **kirurgiskt dränage** vid svår sinuit, **diatermi/ligering/embolisering** vid näsblödning och **reposition** av näsfrakturer.",
    "klin": [
     {
      "tbl": [
       [
        "Ingrepp",
        "Indikation enligt kompendiet"
       ],
       [
        "Septumplastik",
        "Symtomgivande septumdeviation; septum lösgörs, brosket mobiliseras och sys fast i bättre läge"
       ],
       [
        "Evulsio (slynga)",
        "Enstaka näspolyp"
       ],
       [
        "FESS",
        "Näspolypos där medicinsk behandling inte hjälper"
       ],
       [
        "Käkspolning",
        "Diagnostik och terapi vid maxillarsinuit"
       ],
       [
        "Kirurgiskt dränage",
        "Svår sinuit med svullnad, feber och svår smärta (ÖNH-klinik)"
       ],
       [
        "Diatermi, ligering, embolisering",
        "Näsblödning där etsning/tamponad inte räcker"
       ],
       [
        "Reposition av näsfraktur",
        "Inom en vecka i lokalbedövning"
       ],
       [
        "Uvulopalatofaryngoplastik, septumplastik",
        "Snarkning/sömnapné"
       ]
      ]
     }
    ],
    "diag": [
     "Septumdeviation kan bedömas objektivt med rinomanometri eller akustisk rinometri före operation."
    ],
    "hand": [
     "Vid samtidig deviation av ytternäsan finns anledning att åtgärda båda samtidigt.",
     "Stor septumdeviation efter fraktur åtgärdas med plastik inom en vecka."
    ],
    "flagg": [
     "Septumplastik har bäst effekt på nästäppa – inte på slemhinnesymtom.",
     "Ingrepp på mjuka gommen (snarkkirurgi) kan ge faryngeal dysfagi."
    ],
    "ddx": [
     [
      "t9-328",
      "Septumdeviation",
      "Huvudindikation för septumplastik."
     ],
     [
      "t9-332",
      "Näspolyper",
      "Evulsio eller FESS vid terapisvikt."
     ],
     [
      "t9-327",
      "Bakre näsblödning",
      "Ligering/embolisering som sista steg."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 16–18",
     "Kompendium ÖNH (T9), s. 20",
     "Kompendium ÖNH (T9), s. 31",
     "Kompendium ÖNH (T9), s. 33"
    ]
   },
   "card": {},
   "km": [
    "onh:51"
   ]
  },
  {
   "id": "t9-336",
   "name": "Röntgenutredning vid näs- och bihålesjukdom",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "img",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Bilddiagnostik vid näs- och bihålesjukdom utgörs enligt kompendiet främst av **röntgen/DT** av bihålor vid sinuit, **DT av ansiktsskelettet** vid trauma och **DT och/eller MR** vid misstänkt tumör.",
    "klin": [
     "Vid sinuit kan svullnad av bihåleslemhinnan ses på röntgen/DT.",
     "Vid ansiktstrauma görs i princip alltid DT ansiktsskelett inkl. mandibel, oftast också DT hjärna och halsrygg.",
     "Intrakraniell luft på DT vid pannbensfraktur talar för duraskada/kommunikation mellan främre skallgrop och sinus frontalis."
    ],
    "diag": [
     "Näsfraktur räcker med klinisk diagnos – kräver inte röntgen.",
     "Huvud–halstumörer utreds som regel med DT och/eller MR samt cytologi.",
     "Mandibelfraktur: DT ansiktsskelett inkl. mandibel alternativt OPG-röntgen."
    ],
    "hand": [
     "Sinuit diagnostiseras främst kliniskt (näsinspektion, ev. käkspolning); bilddiagnostik är ett komplement."
    ],
    "flagg": [
     "Trap door-fraktur hos barn är svår att se på DT – klinisk misstanke räcker för akut handläggning.",
     "Ensidiga, långdragna bihålebesvär → tänk tumör och utred vidare."
    ],
    "ddx": [
     [
      "t9-329",
      "Maxillarsinuit",
      "Slemhinnesvullnad kan ses på röntgen/DT."
     ],
     [
      "t9-333",
      "Ansikts- och skallbasfrakturer",
      "DT ansiktsskelett är standard."
     ],
     [
      "t9-419",
      "Trauma inom ÖNH-området",
      "Radiologisk översikt."
     ],
     [
      "t9-420",
      "Tumör och inflammation inom ÖNH-området",
      "Radiologi vid tumör och inflammation."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 18–24",
     "Kompendium ÖNH (T9), s. 41"
    ]
   },
   "card": {},
   "km": [
    "onh:52"
   ]
  },
  {
   "id": "t9-337",
   "name": "Fiberskopi",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Näsans och bihålornas sjukdomar",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Fiberskopi** är endoskopisk undersökning av näsa, svalg och larynx med flexibelt skop. I kompendiet nämns den som undersökning vid **främmande kropp i näsan**, **adenoid-/tonsillhyperplasi**, **dysfagi**, **epiglottit hos vuxna** och vid **nässtatus med skopi**.",
    "klin": [
     "Utförs efter **avsvällning** (och rensugning) av näsan, t.ex. vid främmande kropp.",
     "Används för att bedöma utrymmet i svalget vid adenoid-/tonsillhyperplasi.",
     "Ingår vid dysfagiutredning; vid faryngeal dysfagi ses ofta salivretention i sinus piriformis."
    ],
    "diag": [
     "Näspolyper: noggrant nässtatus efter avsvällning inkl. skopi.",
     "Akut epiglottit hos vuxna: laryngoskopi med spegel eller fiberskop.",
     "Dysfagi: fiberskopi, FUS (funktionell undersökning under sväljning) och esofagusröntgen."
    ],
    "hand": [
     "Vid misstänkt epiglottit hos barn räcker ofta muninspektion – undersökningen får inte försena omhändertagandet."
    ],
    "flagg": [
     "Hos barn med misstänkt epiglottit kan förloppet vara superakut – säkra luftvägsberedskap."
    ],
    "ddx": [
     [
      "t9-357",
      "Fiberlaryngoskopi för näs- och svalgundersökning",
      "Närliggande uppslag om samma teknik."
     ],
     [
      "t9-371",
      "Undersökning av larynx med fiberlaryngoskop",
      "Larynxdelen."
     ],
     [
      "t9-347",
      "Adenoid- och tonsillhyperplasi",
      "Bedömning av svalgutrymmet."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 17",
     "Kompendium ÖNH (T9), s. 30",
     "Kompendium ÖNH (T9), s. 32–33",
     "Kompendium ÖNH (T9), s. 35",
     "Kompendium ÖNH (T9), s. 37"
    ]
   },
   "card": {},
   "km": [
    "onh:53"
   ]
  },
  {
   "id": "t9-338",
   "name": "Candida",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Oral candidos** orsakas till >80 % av **C. albicans, C. tropicalis och C. glabrata**, som ingår i normalfloran. Den förekommer som **pseudomembranös**, **erytematös** och **kronisk hyperplastisk** form, och behandlingen syftar först till att **eliminera predisponerande faktorer**.",
    "klin": [
     {
      "h": "Predisponerande faktorer"
     },
     "Generella: immunsuppression, endokrina sjukdomar.",
     "Lokala: protes, rökning, steroidbehandling, slemhinneförändring, tidigare strålbehandling.",
     {
      "h": "Former"
     },
     "**Pseudomembranös (”torsk”)**: klassiska formen, oftast måttliga symtom (lätt brännande känsla, muntorrhet, ändrad smak); akut (<6 mån); vitaktiga, lätt avskrapbara beläggningar som lämnar rödaktig, lättblödande yta.",
     "**Erytematös**: diffust avgränsade erytematösa områden (skiljer mot erytroplakier), ofta på tunga och gom hos patienter med inhalationssteroider.",
     "**Kronisk hyperplastisk**: vitaktigt plack i munvinkeln, går inte att skilja från homogen leukoplaki före antifungal behandling."
    ],
    "diag": [
     "Ordentligt skrap – påvisade hyfer ger diagnosen.",
     "Odling, och vid kronisk hyperplastisk bild även biopsi.",
     "Antifungal behandling kan övervägas som diagnostiskt test."
    ],
    "beh": [
     "Eliminera predisponerande faktorer.",
     "Därefter antifungala medel: förstahand polyener och azoler (Mykostatin).",
     "Vichyvatten kommer man långt med."
    ],
    "flagg": [
     "Kronisk hyperplastisk candidos kan inte skiljas från leukoplaki före behandling – följ upp.",
     "Tänk på bakomliggande immunsuppression eller inhalationssteroider."
    ],
    "ddx": [
     [
      "t9-339",
      "Leukoplakier",
      "Vit fläck som inte går att skrapa bort; kvarstår efter antifungal behandling."
     ],
     [
      "",
      "Erytroplaki",
      "Skarpt avgränsat rött område, något nedsänkt."
     ],
     [
      "t9-340",
      "Orala manifestationer av systemsjukdomar",
      "HIV och immunbrist ger infektioner i munnen."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 26–27"
    ]
   },
   "card": {},
   "km": [
    "onh:56"
   ]
  },
  {
   "id": "t9-339",
   "name": "Leukoplakier",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Leukoplaki** är en övervägande **vit fläck** i munslemhinnan som kliniskt/histopatologiskt inte kan diagnostiseras som något annat; etiologin är per definition okänd och medelåldern ca **60 år**. Leukoplakier och erytroplakier är **precancerösa** förändringar.",
    "klin": [
     "**Homogen leukoplaki**: samma reaktionsmönster i alla delar; vit välavgränsad fläck med yta från korrugerad till läderartad.",
     "**Icke-homogen leukoplaki**: olika reaktionsmönster, oftast röda inslag; sällan symtom; sitter i munbotten och tungans lateralrand.",
     "**Erytroplaki**: oftast skarpt avgränsat rödaktigt område, något nedsänkt i slemhinnan (till skillnad från leukoplaki).",
     "Munhålecancer, oftast på tungranden, utgår ofta från leukoplakier/erytroplakier."
    ],
    "diag": [
     "Före biopsi: eliminera potentiella etiologiska faktorer (t.ex. rökning).",
     "Kronisk hyperplastisk candidos kan likna homogen leukoplaki – skiljs först efter antifungal behandling."
    ],
    "beh": [
     "Kirurgiskt avlägsnande; recidiv i ca ⅓ av fallen.",
     "Större förändringar avlägsnas med laserkirurgi."
    ],
    "flagg": [
     "Precancerös förändring – särskilt icke-homogen leukoplaki och erytroplaki.",
     "Svårläkt sår i munhålan → misstänk cancer och biopsera."
    ],
    "ddx": [
     [
      "t9-338",
      "Candida",
      "Avskrapbara beläggningar; kronisk hyperplastisk form liknar leukoplaki."
     ],
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Munhålecancer utgår ofta från leukoplakier."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 26–27",
     "Kompendium ÖNH (T9), s. 41"
    ]
   },
   "card": {},
   "km": [
    "onh:56"
   ]
  },
  {
   "id": "t9-340",
   "name": "Orala manifestationer av systemsjukdomar",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Flera **systemsjukdomar** ger förändringar i munslemhinnan, t.ex. **aftösa sår vid IBD**, **muntorrhet vid Sjögrens syndrom**, **sår vid SLE och vaskuliter** samt **infektioner vid HIV och immunbrist**. Kompendiet betonar att munhålan ska undersökas frikostigt.",
    "klin": [
     "Recidiverande aftösa sår ses bl.a. vid IBD.",
     "Primärt och sekundärt Sjögrens syndrom ger muntorrhet.",
     "SLE och flera vaskuliter kan ge sårbildning i munnen.",
     "HIV och sjukdomar i immunsystemet kan ge infektioner i munnen, t.ex. candida.",
     "Hepatit C och strålbehandling kan ge förlust av spottkörtelvävnad och muntorrhet."
    ],
    "diag": [
     "Gör det till en vana att undersöka munhåla och svalg frikostigt – det tar ca 15 sekunder."
    ],
    "flagg": [
     "Oralt fynd kan vara första tecknet på systemsjukdom – undersök munnen vid oklara sjukdomsbilder.",
     "Oral candida utan lokal förklaring → tänk immunsuppression."
    ],
    "ddx": [
     [
      "t9-341",
      "Muntorrhet",
      "Sjögren och hepatit C som orsaker."
     ],
     [
      "t9-338",
      "Candida",
      "Vanlig oral infektion vid immunbrist."
     ],
     [
      "t9-339",
      "Leukoplakier",
      "Lokala vita förändringar utan systemorsak."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 26–27"
    ]
   },
   "card": {},
   "km": [
    "onh:56"
   ]
  },
  {
   "id": "t9-341",
   "name": "Muntorrhet",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Muntorrhet (xerostomi)** orsakas i huvudsak av **autoimmuna tillstånd**, **strålbehandling** och **läkemedel** som påverkar spottkörtlarna. Handläggningen bygger på **sanering av läkemedelslistan**, salivstimulering och **tandläkarkontakt**.",
    "klin": [
     {
      "h": "Orsaker"
     },
     "Förlust av körtelvävnad: Sjögrens syndrom, hepatit C, strålbehandling.",
     "Minskad sekretion från i övrigt frisk vävnad: läkemedel, stress, ångestsyndrom, depression.",
     "Munandning och dehydrering.",
     {
      "h": "Symtom"
     },
     "Utöver muntorrhet: dålig smak, dålig andedräkt och sekundärt sväljnings- och talsvårigheter."
    ],
    "diag": [
     "Salivspegel saknas i munbotten.",
     "Tandläkare kan mäta vilo- och stimulerad salivsekretion."
    ],
    "beh": [
     "Sanera läkemedelslistan.",
     "Salivstimulerande sugtabletter/tuggummi om kvarvarande funktion.",
     "**Pilokarpin** fungerar bra vid Sjögren, efter strålbehandling och vid läkemedelsinducerad muntorrhet.",
     "Annars saliversättningsmedel."
    ],
    "hand": [
     "Rekommendera tandläkarkontakt."
    ],
    "flagg": [
     "Läkemedel är en vanlig och åtgärdbar orsak.",
     "Muntorrhet ingår i dagsymtomen vid sömnapné.",
     "Tänk Sjögren vid oförklarad muntorrhet."
    ],
    "ddx": [
     [
      "t9-340",
      "Orala manifestationer av systemsjukdomar",
      "Sjögren och andra systemsjukdomar."
     ],
     [
      "t9-348",
      "Sömnapnésyndrom och snarkning",
      "Muntorrhet som dagsymtom."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 27",
     "Kompendium ÖNH (T9), s. 31"
    ]
   },
   "card": {},
   "km": [
    "onh:57"
   ]
  },
  {
   "id": "t9-342",
   "name": "Tungband",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Kort tungband (frenulum linguae)** kan ge amnings-/matintagssvårigheter och talsvårigheter, men **betydelsen överdrivs ofta**. Uttalat kort tungband med amningssvårigheter remitteras tidigt; annars avvaktar man till **4–6 års ålder**.",
    "klin": [
     "Föräldrar söker med barn med amnings- eller matintagssvårigheter och/eller talsvårigheter.",
     "Tungspetsen ses ofta hjärtformad."
    ],
    "diag": [
     "Klinisk bedömning av tungans rörlighet och tungspetsens form."
    ],
    "beh": [
     "Tungbandsklipp eller tungbandsplastik."
    ],
    "hand": [
     "Uttalat kort tungband + amningssvårigheter → **tidig remiss till ÖNH**.",
     "Annars avvakta till 4–6 år och ta då ställning till klipp/plastik."
    ],
    "flagg": [
     "Betydelsen av kort tungband är ofta överdriven – alla behöver inte åtgärdas."
    ],
    "ddx": [
     [
      "",
      "Andra orsaker till talsvårigheter",
      "Kort tungband förklarar sällan ensamt talsvårigheter."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 28"
    ]
   },
   "card": {},
   "km": [
    "onh:58"
   ]
  },
  {
   "id": "t9-343",
   "name": "Munbottenflegmone",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Munbottenflegmone** är en infektion i munbotten efter **tandinfektion i underkäken**, tandhygieniskt ingrepp eller infektion i **gl. submandibularis**. Den lösa vävnaden gör att förloppet kan bli **snabbt**, med risk för **hotad luftväg**.",
    "klin": [
     "Feber och **trismus** (gapbegränsning).",
     "Hård och ömmande munbotten.",
     "Svullnad baktill vid tungbasen → hotad andningsväg.",
     "Abscess kan spridas via halsfascierna till mediastinum."
    ],
    "diag": [
     "Klinisk diagnos; punktion av svullnaden på sjukhus med odling."
    ],
    "beh": [
     "**PcV och Flagyl omgående** om patienten kan svälja.",
     "På sjukhus: punktion och tömning av ev. abscess samt odling, därefter i.v. antibiotika."
    ],
    "hand": [
     "**Direkt transport till sjukhus**.",
     "Vid tecken på högt andningshinder: handlägg enligt primärt omhändertagande vid högt andningshinder."
    ],
    "flagg": [
     "Snabbt förlopp – luftvägen kan hotas.",
     "Svullnad vid tungbasen = hotad andningsväg.",
     "Risk för spridning till mediastinum via halsfascierna."
    ],
    "ddx": [
     [
      "t9-345",
      "Tonsillit och peritonsillit",
      "Trismus och svullnad, men peritonsillärt och ensidigt."
     ],
     [
      "t9-350",
      "Sialoadenit",
      "Svullen, öm spottkörtel med pus vid massage."
     ],
     [
      "t9-358",
      "Primärt omhändertagande vid högt andningshinder",
      "Om luftvägen hotas."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 28",
     "Kompendium ÖNH (T9), s. 36",
     "Kompendium ÖNH (T9), s. 44"
    ]
   },
   "card": {},
   "km": [
    "onh:59"
   ]
  },
  {
   "id": "t9-344",
   "name": "Differentialdiagnostik vid halsont och foetor ex ore",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Halsont** orsakas absolut vanligast av **akut viral rinofaryngit** (förkylning), följt av viral faryngotonsillit, tonsillit och mononukleos. **Foetor ex ore (dålig andedräkt)** har i ca **90 %** av fallen sin orsak i **munhålan**.",
    "klin": [
     {
      "h": "Halsont"
     },
     "Vanligast: akut viral rinofaryngit, viral faryngotonsillit, tonsillit, mononukleos.",
     "Pericoronit och andra odontogena orsaker.",
     "Besvär från näsa, bihålor och munhåla upplevs ibland som halsont.",
     "Andra orsaker: reflux, temporomandibulär dysfunktion, fonasteni och även angina pectoris.",
     "Orofarynxcancer kan länge misstolkas som tonsillit.",
     {
      "h": "Foetor ex ore"
     },
     "Vanligt: ca 10 % har kronisk halitosis och 70 % har det då och då.",
     "Anaeroba gramnegativa bakterier som metaboliserar svavelhaltiga aminosyror; beläggning på tunga/tungbas och detritusproppar i tonsiller.",
     "Kosten kan ha betydelse (överkonsumtion av fett, främst mjölk).",
     "Andra orsaker: sinuit, främmande kropp, reflux, anorexi."
    ],
    "diag": [
     "Halsont: svalgodling eller snabbtest för GAS; Centorkriterier. CRP saknar differentialdiagnostiskt värde.",
     "Foetor: subjektiv eller objektiv – klagar omgivningen?"
    ],
    "beh": [
     "Foetor: förbättra munhygienen, tandläkarkonsult och eliminera underliggande orsak om den kan identifieras."
    ],
    "flagg": [
     "**Epiglottit** är ovanlig men viktig: svår smärta och lufthunger.",
     "Ensidig halssmärta/öronvärk med knuta på halsen → tänk orofarynxcancer.",
     "Angina pectoris kan ge halsont."
    ],
    "ddx": [
     [
      "t9-345",
      "Tonsillit och peritonsillit",
      "Feber, förstorade tonsiller; ensidighet och trismus vid halsböld."
     ],
     [
      "t9-346",
      "Faryngit",
      "Kronisk faryngit vid rökning, föroreningar eller reflux."
     ],
     [
      "t9-362",
      "Akut epiglottit",
      "Svår smärta, salivation och lufthunger."
     ],
     [
      "t9-353",
      "Refluxsjukdom och esofagit",
      "Kan ge halsont och heshet."
     ],
     [
      "t9-368",
      "Fonasteni",
      "Sveda och obehag i strupe/svalg vid normalt stämbandsstatus."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 28–29",
     "Kompendium ÖNH (T9), s. 41"
    ]
   },
   "card": {},
   "km": [
    "onh:60"
   ]
  },
  {
   "id": "t9-345",
   "name": "Tonsillit och peritonsillit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Faryngotonsillit/tonsillit** orsakas till ca **40 % av grupp A-streptokocker (GAS)** och till 30–40 % av virus (adeno-, rhino-, influensa-, Epstein–Barr-virus). **Peritonsillit (halsböld)** är en infektion i den lösa vävnaden ovan halsmandeln, främst hos yngre vuxna.",
    "klin": [
     "Halsont (främst vid sväljning), feber, sjukdomskänsla, trötthet; förstorade, rodnade tonsiller, ibland med vita proppar/beläggningar.",
     "Kliniskt svårt att skilja viral från bakteriell genes.",
     "**Streptokocker**: snabbt insjuknande, kraftiga svalgsmärtor, röd svullen uvula, petekier i gommen, smultrontunga; vanligare vinterhalvåret – fråga om exposition.",
     "**Adenovirus**: vita proppar men mindre intensiv rodnad, ibland konjunktivit.",
     "**Mononukleos (EBV)**: stora tonsiller med tjocka gulvita beläggningar; >50 % har hepatosplenomegali.",
     {
      "h": "Peritonsillit"
     },
     "Ofta 4–5 dagar från halsont till manifest halsböld; alltmer ensidiga besvär, svårt att gapa (**trismus**) och allmänpåverkan.",
     "Peritonsillär svullnad som kan utvecklas till abscess; oftast blandflora."
    ],
    "diag": [
     "Svalgodling eller snabbtest för GAS (sensitivitet 90 %); Centorkriterier.",
     "CRP saknar differentialdiagnostiskt värde."
    ],
    "beh": [
     "Streptokocktonsillit: **PcV 1 g × 3 i 10 dagar**.",
     "Terapisvikt kan bero på compliance, för kort behandling, resistens eller betalaktamasbildning.",
     "Peritonsillit: lokalisera abscessen med nål och spruta under aspiration → antibiotika (**Dalacin**) och kontroll efter någon dag.",
     "ÖNH: efter pus-utbyte bedöva, incidera och debridera (kan behöva upprepas) + Dalacin."
    ],
    "hand": [
     "Upprepade tonsilliter (>3 episoder) är den vanligaste indikationen för tonsillektomi."
    ],
    "flagg": [
     "Ensidiga besvär + trismus → **halsböld**.",
     "Lufthunger och svår smärta → tänk epiglottit.",
     "Långdragen ensidig ”tonsillit” hos vuxen kan vara tonsillcancer."
    ],
    "ddx": [
     [
      "t9-346",
      "Faryngit",
      "Kronisk faryngit med diskreta statusfynd."
     ],
     [
      "t9-343",
      "Munbottenflegmone",
      "Trismus och hård öm munbotten, odontogen orsak."
     ],
     [
      "t9-362",
      "Akut epiglottit",
      "Salivation, stridor, framåtlutad patient."
     ],
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Tonsillcancer misstolkas ofta som tonsillit."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 28–30",
     "Kompendium ÖNH (T9), s. 41"
    ]
   },
   "card": {},
   "km": [
    "onh:61"
   ]
  },
  {
   "id": "t9-346",
   "name": "Faryngit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Faryngit** är inflammation i svalget. Akut faryngit ingår i förkylningsbilden (se rinosinuit), medan **kronisk faryngit** orsakas av **rökning, luftföroreningar eller reflux**.",
    "klin": [
     {
      "h": "Akut"
     },
     "Ingår i akut viral rinofaryngit (förkylning): sveda i halsen, irritation i näsan, nysningar, snuva och nästäppa.",
     {
      "h": "Kronisk"
     },
     "Orsaker: rökning, luftföroreningar, reflux.",
     "Symtom: globus, sveda, harklingar och slem.",
     "Diskreta statusfynd."
    ],
    "diag": [
     "Kronisk faryngit: anamnes på utlösande agens; statusfynden är diskreta."
    ],
    "beh": [
     "Akut: symtomatisk behandling som vid förkylning.",
     "Kronisk: sanering av utlösande agens, koksaltsköljningar och smärtlindring vid behov."
    ],
    "flagg": [
     "Långvariga svalgbesvär med ensidig smärta, öronvärk eller knuta på halsen → uteslut orofarynx-/hypofarynxcancer.",
     "Reflux kan ge halsont och heshet – utred vid misstanke."
    ],
    "ddx": [
     [
      "t9-345",
      "Tonsillit och peritonsillit",
      "Feber och förstorade, belagda tonsiller."
     ],
     [
      "t9-353",
      "Refluxsjukdom och esofagit",
      "Orsak till kronisk faryngit."
     ],
     [
      "t9-344",
      "Differentialdiagnostik vid halsont och foetor ex ore",
      "Översikt."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 14",
     "Kompendium ÖNH (T9), s. 28",
     "Kompendium ÖNH (T9), s. 30",
     "Kompendium ÖNH (T9), s. 33"
    ]
   },
   "card": {},
   "km": [
    "onh:61"
   ]
  },
  {
   "id": "t9-347",
   "name": "Adenoid- och tonsillhyperplasi",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Adenoid- och tonsillhyperplasi** ger **mekaniskt hinder** för luftflöde och födointag. Hyperplasin är fysiologisk, främst p.g.a. upprepade luftvägsinfektioner/tonsilliter, och kombinationen är vanligast hos **mindre barn**.",
    "klin": [
     "Nästäppa och andningssvårigheter.",
     "Väsande andning.",
     "Snarkningar och/eller apnéer med störd sömn, som kan ge dagsymtom.",
     "Grötigt tal.",
     "Svårt att äta och svälja.",
     "Bettfel kan förekomma."
    ],
    "diag": [
     "Bedöm utrymmet med tungspatel, spegel och gärna fiberskopi."
    ],
    "beh": [
     "**Tonsillotomi** (delar av tonsillen tas bort) eller **tonsillektomi** (hela tonsillen).",
     {
      "h": "Operationsindikationer"
     },
     "Obstruktion (tonsillförstoring) → tonsillotomi: snarkning med störd sömn, påtaglig dagtrötthet, sväljningssvårigheter; beakta även grötigt tal och bettfel.",
     "Infektion → tonsillektomi: vanligaste indikationen är återkommande tonsilliter (>3 episoder)."
    ],
    "flagg": [
     "Snarkning med apnéer och dagtrötthet hos barn ska utredas – tonsill-/adenoidhyperplasi är en orsak till sömnapné."
    ],
    "ddx": [
     [
      "t9-348",
      "Sömnapnésyndrom och snarkning",
      "Tonsill-/adenoidhyperplasi är en orsak."
     ],
     [
      "t9-345",
      "Tonsillit och peritonsillit",
      "Upprepade tonsilliter är indikation för tonsillektomi."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 30–31"
    ]
   },
   "card": {},
   "km": [
    "onh:62"
   ]
  },
  {
   "id": "t9-348",
   "name": "Sömnapnésyndrom och snarkning",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Snarkning** är ljud från vävnadsvibrationer orsakade av turbulens och Bernoullieffekt. **Obstruktivt sömnapnésyndrom (OSAS)** – apnéer/hypopnéer med ökat andningsarbete och **dagtrötthet** – ska skiljas från OSA, som bara beskriver förekomsten av apnéer. Sömnapnésyndrom är den **vanligaste orsaken till hypersomni**.",
    "klin": [
     "Ca 30 % snarkar habituellt, upp till 60 % till och från; 8 % har symtomgivande snarkning.",
     "Orsaker i näsan: septumdeviation, näspolyper, smal näsa/alarinsufficiens, konkahypertrofi, slemhinnesvullnad.",
     "Orsaker i mun och svalg: tonsill-/adenoidhyperplasi, käkfelställning, låg svalgtonus (alkohol, läkemedel), övervikt, makroglossi.",
     "Nattsymtom: habituell snarkning, rastlös sömn (arousals), uppvaknande med kvävningskänsla, reflux, nykturi.",
     "Dagsymtom: trötthet/sömnattacker, koncentrationssvårigheter, irritabilitet, depression, ångest, nedsatt libido, muntorrhet.",
     "Obehandlat OSAS ger ökad kardiovaskulär morbiditet och mortalitet och 2–7 gånger ökad risk för trafikolycka."
    ],
    "diag": [
     "Noggrann anamnes och ÖNH-status.",
     "Apnéer och hypopnéer definieras som minskat andningsflöde under >10 s med samtidig desaturation >3–4 %.",
     "**Polysomnografi** är optimal: EEG, EMG, EKG, pulsoximetri, oronasalt luftflöde, andningsrörelser, snarkljud och kroppsposition.",
     "**Polygrafi**: samma men utan EEG/EMG/EKG."
    ],
    "beh": [
     "Konservativt: viktreduktion, sanering av olämplig livsstil (alkohol, läkemedel) och positionsträning.",
     "Mekaniskt: **CPAP**, apnéskena (mandibelframdragande).",
     "Kirurgiskt: uvulopalatofaryngoplastik, septumplastik m.m."
    ],
    "flagg": [
     "Dagtrötthet + snarkning = utred OSAS – trafiksäkerhetsrisk.",
     "Snarkkirurgi på mjuka gommen kan ge faryngeal dysfagi.",
     "Hos barn: tänk tonsill-/adenoidhyperplasi."
    ],
    "ddx": [
     [
      "t9-056",
      "Hypersomni",
      "Sömnapnésyndrom är vanligaste orsaken."
     ],
     [
      "t9-347",
      "Adenoid- och tonsillhyperplasi",
      "Vanlig orsak hos barn."
     ],
     [
      "t9-328",
      "Septumdeviation",
      "Kan förvärra snarkning och sömnapné."
     ],
     [
      "t9-154",
      "Vanliga sömnstörningar",
      "Andra orsaker till trötthet och störd sömn."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 16",
     "Kompendium ÖNH (T9), s. 30–31",
     "Kompendium ÖNH (T9), s. 33",
     "Kompendium Neurologi (T9), s. 22"
    ]
   },
   "card": {},
   "km": [
    "onh:63"
   ]
  },
  {
   "id": "t9-349",
   "name": "Spottsten",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Spottsten** (sialolitiasis) är konkrement i spottkörtelns utförsgång och uppkommer främst i **glandula submandibularis (80 %)**, troligen eftersom saliven där är mer mucinrik och har högre kalciumhalt.",
    "klin": [
     "Typiskt symtom: **måltidsrelaterad svullnad och ömhet** i körteln som går över efter en tid.",
     "Ibland kan en **distinkt förhårdnad i munbotten** palperas.",
     "Avflödeshindret predisponerar för bakteriell spottkörtelinfektion ([[t9-350|sialoadenit]])."
    ],
    "diag": [
     "**Anamnes** (koppling till måltid).",
     "**Bimanuell palpation av munbotten**.",
     "**Röntgen munbottenöversikt**."
    ],
    "beh": [
     "Lindriga besvär: **konservativ behandling** som stimulerar salivflödet – körtelmassage och att suga på citron.",
     "Otillräcklig effekt: **kirurgiskt avlägsnande** av stenen, eventuellt litotripsi."
    ],
    "hand": [
     "Tecken på purulent infektion (varigt sekret, feber) → handläggs som akut [[t9-350|sialoadenit]]."
    ],
    "flagg": [
     "Glöm inte bimanuell munbottenpalpation – stenen kan ofta kännas.",
     "Sten är ett avflödeshinder och därmed riskfaktor för purulent sialoadenit/[[t9-351|parotit]]."
    ],
    "ddx": [
     [
      "t9-350",
      "Sialoadenit",
      "Konstant svullnad med varigt sekret, feber och förhöjda infektionsparametrar i stället för måltidsbundna besvär."
     ],
     [
      "t9-373",
      "Maligna spottkörteltumörer",
      "Oöm, fast och icke ruckbar resistens som inte varierar med måltid."
     ],
     [
      "t9-341",
      "Muntorrhet",
      "Generellt minskad salivation utan lokal, måltidsrelaterad svullnad."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 32"
    ]
   },
   "card": {},
   "km": [
    "onh:64"
   ]
  },
  {
   "id": "t9-350",
   "name": "Sialoadenit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Sialoadenit** är en bakteriell, ofta purulent inflammation i en spottkörtel. Den är vanligast i **glandula parotis** och oftast **unilateral**; i kompendiet beskrivs den tillsammans med [[t9-351|purulent parotit]].",
    "klin": [
     {
      "h": "Predisponerande faktorer"
     },
     "**Avflödeshinder**: [[t9-349|spottsten]], gångstriktur.",
     "Dålig munhygien och **uttorkning**.",
     "Uppstår ofta efter **GI-kirurgiska ingrepp**, oftast postoperativ dag 4–5.",
     {
      "h": "Symtom och fynd"
     },
     "Svullen, ömmande spottkörtel som **utsöndrar varigt sekret vid massage**.",
     "**Feber** och förhöjda infektionsparametrar."
    ],
    "diag": [
     "Klinisk diagnos: körtelstatus med massage av körteln (varigt sekret ur utförsgången).",
     "Lab: infektionsparametrar."
    ],
    "beh": [
     "**Uppvätskning**.",
     "**Antibiotika**: flukloxacillin (Heracillin) eller klindamycin (Dalacin).",
     "**Smärtstillande**."
    ],
    "hand": [
     "Vid bakomliggande [[t9-349|spottsten]] handläggs stenen enligt det uppslaget (salivstimulering, vid behov kirurgiskt avlägsnande)."
    ],
    "flagg": [
     "Tänk på sialoadenit hos **postoperativ, uttorkad patient** med ny svullnad över parotis.",
     "Uppvätskning är en central del av behandlingen – inte bara antibiotika."
    ],
    "ddx": [
     [
      "t9-349",
      "Spottsten",
      "Måltidsrelaterad, övergående svullnad utan feber och pus."
     ],
     [
      "t9-343",
      "Munbottenflegmone",
      "Djup infektion i munbotten med risk för spridning via halsfascior till mediastinum."
     ],
     [
      "t9-373",
      "Maligna spottkörteltumörer",
      "Oöm, fast resistens utan infektionstecken; smärta utan palpation och facialispares talar för malignitet."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 32",
     "Kompendium ÖNH (T9), s. 44"
    ]
   },
   "card": {},
   "km": [
    "onh:64"
   ]
  },
  {
   "id": "t9-351",
   "name": "Purulent parotit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Purulent parotit** är en bakteriell, varig infektion i glandula parotis – den vanligaste lokalisationen för akut [[t9-350|sialoadenit]]. Den är oftast unilateral och typiskt postoperativ.",
    "klin": [
     "Uppträder ofta efter **GI-kirurgi**, oftast **postoperativ dag 4–5**.",
     "Riskfaktorer: avflödeshinder (sten, gångstriktur), **dålig munhygien, uttorkning**.",
     "Svullen, öm parotis; **pus ur utförsgången vid massage**.",
     "Feber och förhöjda infektionsparametrar."
    ],
    "diag": [
     "Klinisk bedömning med massage av körteln.",
     "Labprover med infektionsparametrar."
    ],
    "beh": [
     "**Uppvätskning**.",
     "**Antibiotika**: flukloxacillin (Heracillin) eller klindamycin (Dalacin).",
     "Smärtlindring."
    ],
    "flagg": [
     "Postoperativ patient med ensidig svullnad framför örat och feber → tänk purulent parotit.",
     "Ensidig parotisresistens **utan** infektionstecken kräver tumörutredning."
    ],
    "ddx": [
     [
      "t9-349",
      "Spottsten",
      "Vanligast i submandibularis och ger måltidsbunden, övergående svullnad."
     ],
     [
      "t9-378",
      "Benigna tumörer, pleomorft adenom och angiofibrom",
      "Pleomorft adenom är en långsamväxande, oöm resistens i parotis."
     ],
     [
      "t9-373",
      "Maligna spottkörteltumörer",
      "Fast, ej ruckbar resistens; smärta utan palpation eller facialispares är starka malignitetstecken."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 32",
     "Kompendium ÖNH (T9), s. 43"
    ]
   },
   "card": {},
   "km": [
    "onh:64"
   ]
  },
  {
   "id": "t9-352",
   "name": "Differentialdiagnostik vid dysfagi",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Dysfagi** är en subjektiv upplevelse av sväljsvårigheter. Sväljningen delas in i **oral, faryngeal och esofageal fas**: **hög dysfagi** = oral/faryngeal, **låg dysfagi** = esofageal. Besvären delas också in i akuta, kroniska och progressiva; ca ⅓ av personer 50–80 år uppger någon form av dysfagi.",
    "klin": [
     {
      "h": "Oral dysfagi"
     },
     "Svårt att tugga och transportera födan bak till svalget, maten ligger kvar utan att utlösa sväljning; läckage ur munnen, aspiration av vätska, talsvårigheter.",
     "Orsaker: nedsatt tungmotorik, käk-/tandproblem, nedsatt munhålesensorik, torra slemhinnor – vid **neurologisk sjukdom (stroke, MS, ALS, Parkinson)**, efter skallskada, strålbehandling eller operation för huvud-halscancer.",
     {
      "h": "Faryngeal dysfagi"
     },
     "Epiglottisdysfunktion, nedsatt faryngeal konstriktion, bristande relaxation av övre esofagussfinktern (m. cricopharyngeus) eller tumör.",
     "Läckage upp i näsan, hosta/kvävning vid måltid (aspiration); **salivretention i sinus piriformis** vid undersökning. Ses efter gomkirurgi (snarkkirurgi) och vid neurologisk sjukdom.",
     {
      "h": "Esofageal dysfagi"
     },
     "Förträngning, motorisk/neurologisk störning eller slemhinneskada.",
     "**Striktur/cancer → konstant, progredierande dysfagi**; motoriska störningar → särskilt initialt intermittenta besvär.",
     "Exempel: [[t9-354|strikturer och Zenkerdivertikel]], akalasi, esofagusspasm, [[t9-356|främmande kropp]], [[t9-355|frätskada]], esofaguscancer."
    ],
    "diag": [
     {
      "h": "Anamnes (viktigast!)"
     },
     "Svårt att få ner maten från munnen till svalget? (oral)",
     "Sväljer du lätt fel och hostar när du äter/dricker? (oral/faryngeal)",
     "Hur lång tid tar en måltid? (normalt <20 min)",
     "Tar det stopp i bröstet? (esofageal)",
     {
      "h": "Status"
     },
     "Röst (CN X), klang/hypernasalitet (CN IX), oralmotorik (CN V, VII, IX, XII) och sväljningsreflex.",
     {
      "h": "Undersökningar"
     },
     "**Fiberskopi**, **FUS** (funktionell undersökning under sväljning), **esofagusröntgen med sväljningsfas** (kontrast, ev. brödbitar doppade i kontrast).",
     "Vid misstänkt cancer: gastroskopi med biopsi och CT."
    ],
    "beh": [
     "Behandlingen riktas mot orsaken, t.ex. ballongdilatation av striktur, endoskopisk delning av Zenkerdivertikel, myotomi vid akalasi."
    ],
    "flagg": [
     "**Nytillkommen dysfagi = cancer tills motsatsen bevisats.**",
     "Progredierande dysfagi från fast till flytande föda med viktnedgång talar för esofaguscancer.",
     "Hosta vid måltid tyder på aspiration (oral/faryngeal dysfagi).",
     "Akut dysfagi med smärta och plötslig debut → tänk främmande kropp i esofagus."
    ],
    "ddx": [
     [
      "t9-354",
      "Strikturer och divertiklar i esofagus",
      "Zenkerdivertikel ger uppstötning av osmält föda som tuggas om; striktur ger konstant dysfagi."
     ],
     [
      "t9-353",
      "Refluxsjukdom och esofagit",
      "Halsbränna och sura uppstötningar; vanligaste orsaken till striktur."
     ],
     [
      "t9-356",
      "Främmande kropp i munhåla, svalg och matstrupe",
      "Plötslig debut med kväljningar och smärta."
     ],
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Hypofarynx- och esofaguscancer ger progredierande dysfagi, viktnedgång och ibland heshet."
     ],
     [
      "",
      "Akalasi och esofagusspasm",
      "Motilitetsstörningar med intermittenta besvär, kräkning av osmält föda resp. retrosternala kramper; RTG med kontrast ± manometri."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 32–35",
     "Kompendium ÖNH (T9), s. 42"
    ]
   },
   "card": {},
   "km": [
    "onh:65"
   ]
  },
  {
   "id": "t9-353",
   "name": "Refluxsjukdom och esofagit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Gastroesofageal refluxsjukdom (GERD)** innebär besvärande återflöde av maginnehåll till esofagus, med eller utan **esofagit**. Ca **5 %** av den medelålders befolkningen har kronisk reflux.",
    "klin": [
     {
      "h": "Predisponerande faktorer"
     },
     "**Hiatushernia** (vanligt), **övervikt**.",
     "Livsstil: rökning, alkohol, koffein, sena matvanor.",
     {
      "h": "Primära symtom"
     },
     "Halsbränna, sura uppstötningar, retrosternal smärta, epigastralgi.",
     {
      "h": "Sekundära (extraesofageala) symtom"
     },
     "Halsont, **heshet**, hosta, aspiration, icke-allergisk astma.",
     "Reflux är en viktig orsak till **bakre laryngit** och kontaktgranulom."
    ],
    "diag": [
     "**Endoskopi** med/utan biopsi (Barretts esofagus/metaplasi).",
     "**24 h pH-mätning** för att bedöma grad; enligt kompendiet krävs den för diagnosen GERD."
    ],
    "beh": [
     "Lindriga besvär: **livsstilsråd** – rökstopp, viktnedgång m.m.",
     "Svårare besvär: **antacida, H2-receptorblockerare eller PPI**, därefter uppföljning med gastroskopi.",
     "Vid H. pylori: **trippelbehandling** med amoxicillin, omeprazol och klaritromycin (Klacid).",
     "Svåra, långdragna, terapiresistenta fall: överväg **antirefluxkirurgi** (laparoskopisk fundoplikation)."
    ],
    "flagg": [
     "Reflux är **vanligaste orsaken till esofagusstriktur (>70 %)**.",
     "Reflux, Barretts esofagus och hiatushernia är riskfaktorer för **esofagusadenokarcinom** – ny dysfagi ska utredas.",
     "Tänk på reflux vid långdragen heshet, harklingsbehov och globuskänsla."
    ],
    "ddx": [
     [
      "t9-365",
      "Kronisk laryngit",
      "Bakre laryngit orsakas främst av reflux och ger sveda, harklingsbehov och främmandekroppskänsla."
     ],
     [
      "t9-354",
      "Strikturer och divertiklar i esofagus",
      "Följd av långvarig reflux; ger konstant dysfagi."
     ],
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Esofaguscancer: progredierande dysfagi och viktnedgång."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 33",
     "Kompendium ÖNH (T9), s. 34",
     "Kompendium ÖNH (T9), s. 38",
     "Kompendium ÖNH (T9), s. 42"
    ]
   },
   "card": {},
   "km": [
    "onh:66"
   ]
  },
  {
   "id": "t9-354",
   "name": "Strikturer och divertiklar i esofagus",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Zenkerdivertikel** är en **falsk divertikel** (endast mukosa + submukosa) som buktar ut genom ett svagt område i hypofarynx bakvägg (**Killians triangel**) när faryngeal muskulatur kontraherar mot en kontraherad m. cricopharyngeus. **Strikturer** är förträngningar i esofagus, oftast orsakade av reflux.",
    "klin": [
     {
      "h": "Zenkerdivertikel"
     },
     "**”Kraxar upp” föda** och tuggar om den.",
     "Sväljsvårigheter, det kan ta stopp; hosta och heshet förekommer.",
     "Kan uppstå vid akalasi i övre esofagussfinktern.",
     {
      "h": "Övriga divertiklar"
     },
     "**Epifrenisk divertikel**: ovanför nedre esofagussfinktern, behandlas av gastrokirurg.",
     "**Traktionsdivertikel**: följd av ärrbildning i mediastinum; samtliga vägglager engagerade (äkta divertikel).",
     {
      "h": "Strikturer"
     },
     "Vanligaste orsaken är **reflux (>70 %)**; även tumör, främmande kropp, frät- och strålskada.",
     "Ger konstant, progredierande dysfagi."
    ],
    "diag": [
     "Zenkerdivertikel: **röntgen av hypofarynx och esofagus före endoskopi** (perforationsrisk).",
     "Striktur: **röntgen och endoskopi** med/utan biopsi."
    ],
    "beh": [
     "Zenkerdivertikel: kirurgi – **endoskopisk delning** med stapling/laser.",
     "Striktur: primärt **ballongdilatation**; i svårare fall stent eller kirurgi. Behandlingen styrs av orsaken (t.ex. tumör opereras)."
    ],
    "flagg": [
     "Gör **röntgen före endoskopi** vid misstänkt Zenkerdivertikel – risk för perforation.",
     "Striktur kan vara malign – biopsi vid endoskopi.",
     "Frätskador ger **alltid** ärrstriktur några veckor efteråt."
    ],
    "ddx": [
     [
      "t9-353",
      "Refluxsjukdom och esofagit",
      "Vanligaste orsaken till striktur; halsbränna och sura uppstötningar."
     ],
     [
      "t9-355",
      "Syra- och alkaliskador",
      "Striktur med tilltagande dysfagi några veckor efter frätskada."
     ],
     [
      "",
      "Akalasi",
      "Bristande sfinkterrelaxation; kräkning av osmält föda, ballongdilatation eller myotomi."
     ],
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Esofaguscancer ger progredierande dysfagi och viktnedgång."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 34",
     "Kompendium ÖNH (T9), s. 35"
    ]
   },
   "card": {},
   "km": [
    "onh:67"
   ]
  },
  {
   "id": "t9-355",
   "name": "Syra- och alkaliskador",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Frätskador** efter förtäring av syra eller alkali (lut). Vanligast är **accidentellt intag** (t.ex. barn som får i sig maskindiskmedel), men det förekommer även som suicidförsök.",
    "klin": [
     "**Lut** ger störst skada i **esofagus**.",
     "**Syra** ger störst skada i **ventrikeln**.",
     "Några veckor efter skadan uppkommer **alltid ärrläkning med striktur** och tilltagande dysfagi."
    ],
    "diag": [
     "**Endoskopi inom 24 h** för att kartlägga skadan."
    ],
    "beh": [
     {
      "h": "Prehospitalt"
     },
     "**Skölj munnen** ordentligt, gärna med mjölk.",
     "**Undvik kräkning**.",
     "Omgående till sjukhus.",
     {
      "h": "På sjukhus"
     },
     "**Säkra luftvägen**.",
     "Vätska.",
     "**Antibiotika och PPI**.",
     "Endoskopi inom 24 h; svåra fall vårdas på **IVA**."
    ],
    "hand": [
     "Följ upp avseende senare striktur: tilltagande dysfagi veckor efter skadan → [[t9-354|striktur]] som behandlas med i första hand ballongdilatation."
    ],
    "flagg": [
     "Framkalla inte kräkning.",
     "Luftvägen kan bli hotad – säkra den först.",
     "Räkna med senare strikturutveckling även om patienten initialt mår bra."
    ],
    "ddx": [
     [
      "t9-356",
      "Främmande kropp i munhåla, svalg och matstrupe",
      "Batterier i esofagus kräver också akut skopi inom 4 h."
     ],
     [
      "t9-354",
      "Strikturer och divertiklar i esofagus",
      "Sen komplikation till frätskada."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 34",
     "Kompendium ÖNH (T9), s. 35"
    ]
   },
   "card": {},
   "km": [
    "onh:68"
   ]
  },
  {
   "id": "t9-356",
   "name": "Främmande kropp i munhåla, svalg och matstrupe",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Främmande kropp** i munhåla, svalg eller matstrupe – från fiskben i tonsillen till fastnad matbit eller leksak/batteri i esofagus. Lokalisationen styr brådskegrad och handläggning.",
    "klin": [
     {
      "h": "Munhåla"
     },
     "Ovanligt att patienten söker; löser sig oftast själv. Tas enkelt bort med tång.",
     {
      "h": "Svalg"
     },
     "Vanligt med **vassa föremål (fiskben)**; patienten beskriver vass smärta.",
     "Sitter oftast i **tonsiller eller tungbas**.",
     {
      "h": "Matstrupe"
     },
     "Sväljsvårigheter, kväljningar och ofta smärta med **plötslig debut**.",
     "Kan vara mat (bolus) eller, hos barn, leksaker."
    ],
    "diag": [
     "Tumregel: **kan patienten sidobestämma smärtan** bör föremålet kunna ses med spegel/spatel.",
     "**Smärta under jugulum** → sitter troligen i esofagus.",
     "Vid esofageal främmande kropp görs oftast **röntgen med kontrast** före skopi."
    ],
    "beh": [
     "Svalg/munhåla: avlägsna med **tång**.",
     "Esofagus, **vasst föremål, batteri eller svår smärta**: akut **skopi inom 4 h** och avlägsnande.",
     "Esofagus, **mjuk bolus**: **diazepam supp + glukagon** (relaxerar tvärstrimmig resp. glatt muskulatur); avvakta 24 h, därefter skopi om besvären kvarstår."
    ],
    "hand": [
     "**Alla patienter med främmande kropp i esofagus ska handläggas på ÖNH.**"
    ],
    "flagg": [
     "**Batterier och vassa föremål** i esofagus = akut skopi inom 4 h.",
     "Smärta under jugulum talar för esofageal lokalisation – handläggs akut.",
     "Andningspåverkan → tänk luftvägsfrämmandekropp i stället ([[t9-359|larynx/trakea/bronker]])."
    ],
    "ddx": [
     [
      "t9-359",
      "Främmande kropp i larynx, trakea och bronker",
      "Hosta, andningsbesvär och cyanos snarare än sväljsvårigheter."
     ],
     [
      "t9-355",
      "Syra- och alkaliskador",
      "Anamnes på förtäring av frätande ämne."
     ],
     [
      "t9-354",
      "Strikturer och divertiklar i esofagus",
      "Underliggande striktur kan göra att bolus fastnar."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 35"
    ]
   },
   "card": {},
   "km": [
    "onh:68"
   ]
  },
  {
   "id": "t9-357",
   "name": "Fiberlaryngoskopi för näs- och svalgundersökning",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Fiberskopi** är endoskopisk undersökning med flexibelt fiberskop via näsan för att inspektera näsa, epifarynx, svalg och larynx. Kompendiet nämner metoden som komplement till spegel och spatel i flera kliniska situationer.",
    "klin": [
     "Vid främmande kropp i näsan görs rinoskopi/fiberskopi **efter avsvällning och rensugning**.",
     "Vid dysfagi letar man bl.a. efter **salivretention i sinus piriformis** (faryngeal dysfagi)."
    ],
    "diag": [
     "Bedömning av utrymmet i svalget vid **tonsill-/adenoidhyperplasi och snarkning/sömnapné** (tillsammans med tungspatel och spegel).",
     "Utredning av **dysfagi** (tillsammans med FUS och esofagusröntgen).",
     "Diagnostik av **epiglottit hos vuxna** (spegel/fiberskopi).",
     "Lokalisering av **främmande kropp i näsan**."
    ],
    "hand": [
     "Vid misstänkt epiglottit hos barn: undvik svalginspektion med spatel och allt som stressar barnet (risk för total luftvägsobstruktion) – transport till sjukhus med intubationsberedskap. Vuxna undersöks med spegel/fiberskopi."
    ],
    "flagg": [
     "Avsvällning och rensugning behövs för god överblick i näsan."
    ],
    "ddx": [
     [
      "t9-337",
      "Fiberskopi",
      "Övergripande uppslag om metoden."
     ],
     [
      "t9-371",
      "Undersökning av larynx med fiberlaryngoskop",
      "Fokus på larynx och stämbandsfunktion."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 30",
     "Kompendium ÖNH (T9), s. 33",
     "Kompendium ÖNH (T9), s. 35",
     "Kompendium ÖNH (T9), s. 37"
    ]
   },
   "card": {},
   "km": [
    "onh:70"
   ]
  },
  {
   "id": "t9-358",
   "name": "Primärt omhändertagande vid högt andningshinder",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Högt andningshinder** är obstruktion i övre luftvägen (svalg, larynx, övre trakea) och kan variera från lindrigt till **akut livshotande**. Orsaker: **infektion, allergi, främmande kropp/mekaniskt hinder, trauma och tumör**.",
    "klin": [
     {
      "h": "Värdera graden"
     },
     "Är patienten kontaktbar? Kan patienten **prata**? Kan patienten **hosta**?",
     "**Inspiratorisk stridor** (expiratorisk stridor talar för lägre hinder).",
     "Paradoxala andningsrörelser, lufthunger, rosslig andning.",
     "**Sjunkande pO2** → irritabilitet, pulsstegring, andnöd, cyanos.",
     "**Stigande pCO2** → somnolens, håglöshet.",
     "Värdera andningsarbetet: andningsfrekvens, cyanos/blekhet."
    ],
    "hand": [
     {
      "h": "Steg för steg"
     },
     "1. Konstatera högt andningshinder och värdera grad.",
     "2. **Sök främmande kropp** och rensa munhåla/svalg med fingret så långt bak som möjligt.",
     "3. **Framåtböjning, ryggslag, [[t9-360|Heimlichs manöver]]** (små barn vänds upp och ned och skakas).",
     "4. **Håll fri luftväg**: extension i atlantooccipitalleden, chin lift/jaw thrust, näskantarell/svalgtub.",
     "5. **Försök ventilera** (mask och blåsa), ge syrgas.",
     "6. **Intubera**.",
     "7. **[[t9-369|Koniotomi]]**: snitt genom samtliga lager i membrana cricothyroidea och säkra luftvägen med slang eller liknande."
    ],
    "flagg": [
     "Sjunkande vakenhet och somnolens = stigande CO2 – tecken på utmattning.",
     "Koniotomi är sista utvägen hos döende patient – intubationsförsök ska alltid ha gjorts först.",
     "Vid misstänkt epiglottit ska den mest erfarna läkaren följa med transporten."
    ],
    "ddx": [
     [
      "t9-359",
      "Främmande kropp i larynx, trakea och bronker",
      "Plötslig debut hos småbarn; hosta och cyanos initialt."
     ],
     [
      "t9-362",
      "Akut epiglottit",
      "Feber, salivering, sväljsmärta, framåtlutad sittställning."
     ],
     [
      "t9-361",
      "Pseudokrupp",
      "Skällande hosta och inspiratorisk stridor nattetid hos barn 2–6 år utan hög feber."
     ],
     [
      "t9-367",
      "Stämbandspares",
      "Bilateral pares ger inspiratorisk stridor utan nödvändigtvis påverkad röst."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 36",
     "Kompendium ÖNH (T9), s. 37",
     "Kompendium ÖNH (T9), s. 39",
     "Kompendium ÖNH (T9), s. 40"
    ]
   },
   "card": {},
   "km": [
    "onh:72",
    "onh:81"
   ]
  },
  {
   "id": "t9-359",
   "name": "Främmande kropp i larynx, trakea och bronker",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Främmande kropp i larynx, trakea eller bronker** är vanligast hos **pojkar under 5 år**. Om föremålet fastnar i larynxnivå blir förloppet akut; oftare har det passerat ned i bronkträdet.",
    "klin": [
     "Rima glottidis är ca **6–7 mm hos spädbarn**, 13 mm hos kvinnor och 20 mm hos män.",
     "Initialt: hosta, andningsbesvär, cyanos.",
     "Vanligast är att barnet är **opåverkat vid undersökningen** – laryngospasmen har släppt och föremålet har ramlat ned i bronkträdet (oftare **höger** sida pga. anatomin).",
     "**Sensymptom**: långvarig hosta, astmaliknande besvär, återkommande pneumonier och atelektas."
    ],
    "diag": [
     "Anamnes: Har barnet stoppat något i munnen? Vad? När? Vad hände vid insjuknandet?",
     "ÖNH-status samt cor/pulm.",
     "**Lungröntgen** med frågeställning främmande kropp/indirekta tecken.",
     "**Bronkoskopi på vida indikationer oavsett röntgensvar** – helst med rakt skop i narkos."
    ],
    "hand": [
     "Akut obstruktion → handläggning enligt [[t9-358|högt andningshinder]].",
     "Annars **akut remiss till ÖNH**."
    ],
    "flagg": [
     "Ett opåverkat barn utesluter inte främmande kropp – en hoststöt kan **dislocera föremålet upp i larynx** och ge akut obstruktion.",
     "Normal lungröntgen utesluter inte främmande kropp.",
     "Långvarig hosta eller recidiverande pneumoni hos småbarn → tänk aspirerad främmande kropp."
    ],
    "ddx": [
     [
      "t9-361",
      "Pseudokrupp",
      "Gradvis insjuknande nattetid med skällande hosta i samband med virusinfektion."
     ],
     [
      "t9-362",
      "Akut epiglottit",
      "Feber, salivering och sväljsmärta."
     ],
     [
      "t9-356",
      "Främmande kropp i munhåla, svalg och matstrupe",
      "Sväljsvårigheter och kväljningar snarare än andningsbesvär."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 36"
    ]
   },
   "card": {},
   "km": [
    "onh:73"
   ]
  },
  {
   "id": "t9-360",
   "name": "Heimlichs manöver",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Heimlichs manöver** används vid **luftvägsobstruktion orsakad av främmande kropp** som ett av de första stegen i [[t9-358|primärt omhändertagande vid högt andningshinder]].",
    "klin": [
     "Ingår i sekvensen: **framåtböjning → ryggslag → Heimlich**.",
     "Föregås av att man söker efter främmande kropp och rensar munhåla/svalg med fingret.",
     "**Små barn** vänds i stället upp och ned och skakas."
    ],
    "hand": [
     "Om manövrarna inte löser hindret: håll fri luftväg (chin lift/jaw thrust, svalgtub), ventilera med mask och blåsa, intubera och i sista hand [[t9-369|koniotomi]]."
    ],
    "flagg": [
     "Värdera först om patienten kan prata och hosta – det avgör graden av obstruktion.",
     "Även om föremålet tycks ha lossnat kan det ligga kvar i bronkträdet – remiss till ÖNH."
    ],
    "ddx": [
     [
      "t9-359",
      "Främmande kropp i larynx, trakea och bronker",
      "Fortsatt handläggning när barnet är opåverkat."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 36"
    ]
   },
   "card": {},
   "km": [
    "onh:83"
   ]
  },
  {
   "id": "t9-361",
   "name": "Pseudokrupp",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Pseudokrupp** (falsk krupp) är en virusorsakad – oftast **parainfluensa** – svullnad av slemhinnan på stämbandens undersida (subglottiskt) som ger **inspiratorisk stridor**. Vanligast i åldern **2–6 år** och i viss mån kopplat till luftvägsallergi.",
    "klin": [
     "Barnet har somnat symtomfritt och **vaknar på förnatten** med **gäll, skällande hosta**, påtagligt hes röst och inspiratorisk stridor.",
     "Barnet blir stressat, vilket försämrar tillståndet.",
     "**Inte högfebrilt och inga sväljningsbesvär**."
    ],
    "diag": [
     "Klinisk diagnos utifrån typiskt förlopp; värdera graden av inspiratorisk stridor och andningsarbete."
    ],
    "beh": [
     {
      "h": "I hemmet"
     },
     "Låt barnet **sitta upp**, håll det **svalt** (öppet fönster, framför öppen kyl) och skapa en **lugn miljö**.",
     {
      "h": "På vårdcentral"
     },
     "Fuktad luft och ev. **T. Betapred 0,5 mg**: <1 år 8 tabletter, >1 år 12 tabletter.",
     {
      "h": "På sjukhus"
     },
     "Som ovan samt **adrenalininhalation**; ventilation vid behov."
    ],
    "hand": [
     "Sjukhusvård vid **måttlig/svår inspiratorisk stridor**.",
     "**Förstagångsbesvär remitteras frikostigt.**"
    ],
    "flagg": [
     "**Hög feber, salivering och sväljsmärta** talar emot pseudokrupp – tänk [[t9-362|epiglottit]].",
     "Stress förvärrar obstruktionen – undvik onödiga obehagliga undersökningar."
    ],
    "ddx": [
     [
      "t9-362",
      "Akut epiglottit",
      "Feber, salivering, sväljsmärta, framåtlutat barn som kämpar för luft; superakut förlopp."
     ],
     [
      "t9-359",
      "Främmande kropp i larynx, trakea och bronker",
      "Plötslig debut under vaken tid, ingen föregående infektion."
     ],
     [
      "t9-363",
      "Akut laryngit",
      "Heshet vid förkylning utan stridor och allmänpåverkan."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 37"
    ]
   },
   "card": {},
   "km": [
    "onh:74"
   ]
  },
  {
   "id": "t9-362",
   "name": "Akut epiglottit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "akut",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Akut epiglottit** är en bakteriell infektion med svullnad av epiglottis som kan ge livshotande högt andningshinder. Incidensen har minskat kraftigt sedan **vaccination av spädbarn mot H. influenzae**; tidigare drabbades främst barn, i dag oftare vuxna.",
    "klin": [
     "**Feber**.",
     "Andningssvårigheter med **stridor både inspiratoriskt och expiratoriskt**.",
     "**Salivering och sväljsmärta**.",
     "Barnet sitter typiskt **framåtlutat** och kämpar för att få luft.",
     "Vuxna har främst **sväljsvårigheter**.",
     "Barn kan ha ett **superakut** förlopp; vuxna har långsammare utveckling."
    ],
    "diag": [
     "Barn: undvik spatelundersökning av svalget vid misstänkt epiglottit – risk för total obstruktion.",
     "Vuxna: laryngoskopi med spegel eller fiberskopi."
    ],
    "beh": [
     "**IVA**: högläge, andningsövervakning och **alltid intubationsberedskap**.",
     "**Intravenös antibiotika (cefotaxim)**, ibland kortikosteroider."
    ],
    "hand": [
     "**Epiglottit är alltid ett sjukhusfall.**",
     "Vid transport ska **den mest erfarna läkaren följa med** – läget kan förvärras och kräva [[t9-369|koniotomi]]."
    ],
    "flagg": [
     "Superakut förlopp hos barn – kan snabbt bli totalt luftvägshinder.",
     "Framåtlutat barn som dreglar och har feber = epiglottit tills motsatsen bevisats.",
     "Vuxna kan ha diskret bild med framför allt sväljbesvär – undersök larynx."
    ],
    "ddx": [
     [
      "t9-361",
      "Pseudokrupp",
      "Ej högfebril, inga sväljbesvär, skällande hosta; inspiratorisk stridor."
     ],
     [
      "t9-345",
      "Tonsillit och peritonsillit",
      "Halsont och sväljsmärta men ingen stridor; fynd i tonsillerna."
     ],
     [
      "t9-359",
      "Främmande kropp i larynx, trakea och bronker",
      "Plötslig debut utan feber."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 37"
    ]
   },
   "card": {},
   "km": [
    "onh:74"
   ]
  },
  {
   "id": "t9-363",
   "name": "Akut laryngit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Akut laryngit** är ett delsymtom vid förkylning (**rinolaryngit**) där det ytliga lagret i stämbandskanten svullnar något och ger heshet eller röstförlust.",
    "klin": [
     "Några dagars anamnes på **heshet/röstförlust** utan egentlig allmänpåverkan.",
     "Akut heshet debuterar gradvis eller kan leda till afoni inom någon timme."
    ],
    "diag": [
     "Laryngoskopiska fynd är **tämligen diskreta**; stroboskopi (om den görs) visar stel/upphävd svängning."
    ],
    "beh": [
     "Läker ut på ett par veckor; **inom en vecka** bör rösten ha kommit tillbaka.",
     "**Röstvila**, undvik att harkla/hosta, avstå från rökning."
    ],
    "hand": [
     "Remiss till ÖNH vid ÖLI med **heshet >3 veckor eller afoni >1 vecka**."
    ],
    "flagg": [
     "Kvarstående heshet efter förkylning ska utredas (stämbandsförändring, pares, cancer).",
     "Heshet med stridor eller andningspåverkan är inte en okomplicerad laryngit."
    ],
    "ddx": [
     [
      "t9-365",
      "Kronisk laryngit",
      "Långvarig heshet kopplad till rökning, reflux eller röstmissbruk."
     ],
     [
      "t9-361",
      "Pseudokrupp",
      "Barn med skällande hosta och inspiratorisk stridor."
     ],
     [
      "t9-364",
      "Differentialdiagnostik vid heshet",
      "Psykogen afoni är vanligaste differentialdiagnosen vid afoni."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 38",
     "Kompendium ÖNH (T9), s. 39"
    ]
   },
   "card": {},
   "km": [
    "onh:74"
   ]
  },
  {
   "id": "t9-364",
   "name": "Differentialdiagnostik vid heshet",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "syn",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Heshet (dysfoni)** ska skiljas från **afoni (röstförlust)**. Akut heshet är mycket vanligt och debuterar oftast i samband med förkylning. Rösten kan beskrivas som **läckande, pressad eller skrapig/skrovlig**.",
    "klin": [
     {
      "h": "Beskrivande indelning"
     },
     "**Läckande**: ofullständig stämbandsslutning – kort fonation och korta fraser → tänk [[t9-367|stämbandspares]].",
     "**Pressad**: överdriven sammanpressning av stämbanden med högt subglottiskt tryck.",
     "**Skrapig/skrovlig**: ojämn ton pga. oregelbundna stämbandssvängningar.",
     {
      "h": "Orsaker"
     },
     "Akut: [[t9-363|akut laryngit]] vid förkylning.",
     "Afoni: vanligaste differentialdiagnosen är **psykogen afoni** (främst unga kvinnor).",
     "[[t9-365|Kronisk laryngit]] (rökning, reflux, röstmissbruk), Reinkeödem.",
     "**Stämbandsknutor**: bilaterala förtjockningar mitt på stämbandens svängande del efter långvarigt röstmissbruk.",
     "**Polyp**: solitär förändring efter tillfällig röstöveransträngning (liten blödning).",
     "**Papillom**: godartad tumör.",
     "[[t9-367|Stämbandspares]], [[t9-368|fonasteni]] (normalt stämbandsstatus).",
     "**Glottiscancer**: heshet är debutsymtomet."
    ],
    "diag": [
     "Laryngoskopi, vid behov videostroboskopi.",
     "Vid stämbandspares: CT hals + thorax."
    ],
    "beh": [
     "Stämbandsknutor: röstvila och röstbehandling hos logoped.",
     "Polyp och papillom: operation."
    ],
    "hand": [
     {
      "h": "Remiss till ÖNH"
     },
     "Med ÖLI: **heshet >3 veckor** eller **afoni >1 vecka**.",
     "Utan ÖLI: **heshet >1 vecka** eller **afoni några dagar**."
    ],
    "flagg": [
     "Långvarig heshet hos rökare → uteslut **larynxcancer**.",
     "Läckande röst med korta fraser → tänk stämbandspares och leta efter tumör på hals/i mediastinum.",
     "Heshet kan vara symtom på esofaguscancer eller Zenkerdivertikel."
    ],
    "ddx": [
     [
      "t9-363",
      "Akut laryngit",
      "Debut vid förkylning, rösten åter inom en vecka."
     ],
     [
      "t9-365",
      "Kronisk laryngit",
      "Långvarig heshet, rodnad stel slemhinna, rökning/reflux."
     ],
     [
      "t9-367",
      "Stämbandspares",
      "Läckande röst; ofta efter thyreoideakirurgi eller tumör."
     ],
     [
      "t9-368",
      "Fonasteni",
      "Uttröttbar röst med normalt stämbandsstatus."
     ],
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Glottiscancer ger tidig heshet och därmed bättre prognos."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 38",
     "Kompendium ÖNH (T9), s. 39",
     "Kompendium ÖNH (T9), s. 40",
     "Kompendium ÖNH (T9), s. 42"
    ]
   },
   "card": {},
   "km": [
    "onh:75"
   ]
  },
  {
   "id": "t9-365",
   "name": "Kronisk laryngit",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Kronisk laryngit** är ett begrepp med vida gränser för långvarig inflammation i larynx, ofta orsakad av **rökning, röstmissbruk och reflux**. Den delas in i diffus kronisk laryngit, bakre laryngit, kontaktgranulom och Reinkeödem.",
    "klin": [
     {
      "h": "Diffus kronisk laryngit"
     },
     "Exponering för rökning, damm, varm luft eller gaser i arbetet.",
     "Heshet länge, harklingsbehov, ökad slembildning, globuskänsla; grov, skrovligt mörk röst.",
     "Rodnad, stel stämbandsslemhinna; epitelet kan förtjockas och bilda **keratos**. **Precancerösa förändringar** uppstår i allmänhet ur en kronisk laryngit.",
     {
      "h": "Bakre laryngit"
     },
     "Vanligast hos **män 40–60 år**; orsakas främst av **reflux**.",
     "Inflammation bakom processus vocalis; sveda, irritation, främmandekroppskänsla, harklingsbehov.",
     {
      "h": "Kontaktgranulom"
     },
     "Specialvariant av bakre laryngit, i princip bara hos män; granulomatös svullnad med vitaktig missfärgning. Kan ge ensidig stickande smärta och blodtingerat sputum.",
     {
      "h": "Reinkeödem"
     },
     "Nästan bara hos **rökande kvinnor**; ödematösa, spolformigt uppdrivna stämband och förgrovad röst."
    ],
    "diag": [
     "**Laryngoskopi**; vid förtjockningar som ger stelhet → **laryngoskopi i narkos** med stämbandspalpation och biopsi.",
     "Reinkeödem: laryngoskopi och videostroboskopi.",
     "Bakre laryngit: **utred reflux**."
    ],
    "beh": [
     "Eliminera kända orsaker – **rökstopp!**",
     "Bakre laryngit och kontaktgranulom: **PPI**.",
     "Reinkeödem: rökstopp, logoped; operation kan bli aktuell vid röstbesvär."
    ],
    "flagg": [
     "Kronisk laryngit kan vara **precancerös** – stelhet eller förtjockning kräver biopsi.",
     "Glöm inte reflux som orsak till långvarig heshet och harklingsbehov."
    ],
    "ddx": [
     [
      "t9-363",
      "Akut laryngit",
      "Kort förlopp vid förkylning."
     ],
     [
      "t9-353",
      "Refluxsjukdom och esofagit",
      "Bakomliggande orsak till bakre laryngit."
     ],
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Glottiscancer – långvarig heshet hos rökare."
     ],
     [
      "t9-368",
      "Fonasteni",
      "Normalt stämbandsstatus trots röstbesvär."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 38"
    ]
   },
   "card": {},
   "km": [
    "onh:76"
   ]
  },
  {
   "id": "t9-366",
   "name": "Larynxtrauma",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-367",
   "name": "Stämbandspares",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Stämbandspares** innebär nedsatt rörlighet i ett eller båda stämbanden. Vanligast är att ena sidan (ofta **vänster**) tappat förmågan att röra sig i sidled. Hela larynx innerveras av **n. recurrens** utom m. cricothyroideus (n. laryngeus superior).",
    "klin": [
     {
      "h": "Orsaker"
     },
     "**Tumörer/kärlmissbildningar** på halsen, i mediastinum eller nära skallbasen (vagus).",
     "**Hals- och thoraxkirurgi**, främst **thyreoideakirurgi**.",
     "**Idiopatisk**, ibland efter infektion.",
     {
      "h": "Unilateral pares"
     },
     "**Läckande röst** med förmåga till endast mycket korta fonationer/fraser.",
     {
      "h": "Bilateral pares"
     },
     "Stämbanden ställer sig **paramediant** (adduktorerna är starkare) → **inspiratorisk stridor**.",
     "Rösten är inte alltid påverkad trots andningsbesvär."
    ],
    "diag": [
     "Unilateral: **videostroboskopi** och **CT hals + thorax** för att leta orsak."
    ],
    "beh": [
     "Unilateral: i första hand **röstträning**; kirurgi där det sjuka stämbandet flyttas mot medellinjen fungerar.",
     "Bilateral: ofta kirurgi med **lateralisering** av stämbanden (sämre röst för bättre andning); bilateral pares är indikation för [[t9-369|trakeotomi]]."
    ],
    "hand": [
     "Stor självläkningstendens: **60 % återställs spontant inom 3–6 månader**.",
     "Tecken på återhämtning inom 3 veckor → ofta läkt inom 3 månader; ingen förändring efter 3 månader → dålig prognos."
    ],
    "flagg": [
     "Pares utan känd orsak kräver utredning av hela recurrensförloppet (hals + thorax) – **tumör** måste uteslutas.",
     "Bilateral pares kan ge **livshotande andningshinder** trots normal röst."
    ],
    "ddx": [
     [
      "t9-368",
      "Fonasteni",
      "Uttröttbar röst men normal stämbandsrörlighet."
     ],
     [
      "t9-365",
      "Kronisk laryngit",
      "Rodnad, stel slemhinna men rörliga stämband."
     ],
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Larynxcancer eller tumör längs n. recurrens kan ge pares."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 39",
     "Kompendium ÖNH (T9), s. 40"
    ]
   },
   "card": {},
   "km": [
    "onh:77"
   ]
  },
  {
   "id": "t9-368",
   "name": "Fonasteni",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Fonasteni** är en **onaturligt uttröttbar röst trots normalt stämbandsstatus**. Det är den **vanligaste röststörningen** och drabbar främst personer med röstkrävande yrken (t.ex. lärare).",
    "klin": [
     "Ansträngning vid tal.",
     "Diffusa obehagskänslor, sveda i strupen/svalget.",
     "Harklingsbehov och globuskänsla.",
     "Kan uppstå efter kraftig virusinfektion – **postinfektiös fonasteni**."
    ],
    "diag": [
     "Remiss till ÖNH för att **utesluta organisk förändring** – stämbandsstatus ska vara normalt."
    ],
    "beh": [
     "**Beteendeträning hos logoped**.",
     "**Enbart röstvila leder sällan till bot.**"
    ],
    "flagg": [
     "Fonasteni är en diagnos efter att organisk orsak uteslutits – laryngoskopera.",
     "Röstvila räcker inte – remittera till logoped."
    ],
    "ddx": [
     [
      "t9-365",
      "Kronisk laryngit",
      "Synliga slemhinneförändringar vid laryngoskopi."
     ],
     [
      "t9-364",
      "Differentialdiagnostik vid heshet",
      "Stämbandsknutor ger också besvär hos röstarbetare men syns som bilaterala förtjockningar."
     ],
     [
      "t9-367",
      "Stämbandspares",
      "Läckande röst med nedsatt stämbandsrörlighet."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 39",
     "Kompendium ÖNH (T9), s. 40"
    ]
   },
   "card": {},
   "km": [
    "onh:78"
   ]
  },
  {
   "id": "t9-369",
   "name": "Trakeotomi och koniotomi",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Trakeotomi** är ett **elektivt** kirurgiskt ingrepp i narkos där en kanyl förs in i trakea. **Koniotomi** (nödtrakeotomi) är ett **urakut** ingrepp genom membrana cricothyroidea på döende patient med högt luftvägshinder.",
    "klin": [
     {
      "h": "Trakeotomi – indikationer"
     },
     "**Långvarig respiratorvård (>1 vecka)**.",
     "**Kroniskt övre luftvägshinder** (tumör, missbildning, trauma).",
     "**Bilateral stämbandspares**.",
     "Svåra fall av **OSAS**.",
     {
      "h": "Koniotomi – indikation"
     },
     "Döende patient med högt luftvägshinder där övriga åtgärder misslyckats."
    ],
    "beh": [
     {
      "h": "Trakeotomi"
     },
     "Horisontellt hudsnitt, **vertikalt trakealsnitt** (en–två broskringar klyvs nedom ring 2) – därefter kanyl.",
     {
      "h": "Koniotomi"
     },
     "Snitt genom **samtliga lager i membrana cricothyroidea**; säkra luftvägen med slang eller liknande (i nödfall t.ex. ytterdelen av en penna)."
    ],
    "hand": [
     "Efter trakeotomi sätts kuffad kanyl som oftast byts till okuffad efter ca 1 vecka – se [[t9-370|trakealkanyler]]."
    ],
    "flagg": [
     "**Intubationsförsök ska alltid ha gjorts före koniotomi.**",
     "Vid epiglottit kan läget snabbt förvärras till koniotomi – erfaren läkare ska följa med transporten.",
     "Vid ansiktstrauma: överväg tidig intubation/trakeotomi."
    ],
    "ddx": [
     [
      "t9-358",
      "Primärt omhändertagande vid högt andningshinder",
      "Koniotomi är sista steget i sekvensen."
     ],
     [
      "t9-370",
      "Trakealkanyler",
      "Kanyltyper och skötsel efter trakeotomi."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 19",
     "Kompendium ÖNH (T9), s. 36",
     "Kompendium ÖNH (T9), s. 37",
     "Kompendium ÖNH (T9), s. 40"
    ]
   },
   "card": {},
   "km": [
    "onh:79"
   ]
  },
  {
   "id": "t9-370",
   "name": "Trakealkanyler",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Trakealkanyler** sätts i trakeostomin efter [[t9-369|trakeotomi]] och finns i många varianter (standardkanyl: Shiley). De skiljer sig åt i kuff, fenestrering, innerkanyl och möjlighet till talventil.",
    "klin": [
     {
      "h": "Kuffad kanyl"
     },
     "Sätts **alltid efter operation** för aspirationsskydd och för att förhindra att luft hamnar subkutant; byts oftast till okuffad efter **1 vecka**.",
     "Används också vid respiratorvård och hos patienter med aspirationstendens.",
     {
      "h": "Fenestrerad kanyl"
     },
     "Har hål baktill som underlättar luftpassage uppåt och därmed **tal**.",
     {
      "h": "Kanyl med innerkanyl"
     },
     "Lämplig vid **långvarigt behov**; vid slempropp tas innerkanylen ut och fri luftväg återfås. Lätt att rengöra.",
     {
      "h": "Talventil"
     },
     "Membran utanpå kanylen som möjliggör tal; ofta kombinerad med fukt-värmeväxlare (”näsa”)."
    ],
    "hand": [
     "Fukt-värmeväxlare (”näsa”) används på kanylen.",
     "Vid ofri luftväg hos patient med innerkanyl: **ta ut innerkanylen** först."
    ],
    "flagg": [
     "**Kuffen får aldrig vara uppblåst mer än 24 h i sträck** – risk för trycknekros och stenos.",
     "Slemproppar kan ge ofri luftväg – innerkanyl minskar risken."
    ],
    "ddx": [
     [
      "t9-369",
      "Trakeotomi och koniotomi",
      "Ingreppet och dess indikationer."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 40"
    ]
   },
   "card": {},
   "km": [
    "onh:80"
   ]
  },
  {
   "id": "t9-371",
   "name": "Undersökning av larynx med fiberlaryngoskop",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Struphuvudets och trakeas sjukdomar, röstrubbningar",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Laryngoskopi** – med spegel eller **fiberskop** – är grundundersökningen vid heshet, stridor och misstänkt larynxsjukdom; den kompletteras vid behov med **videostroboskopi** för att bedöma stämbandens svängning.",
    "klin": [
     "Bedöm slemhinna, förändringar på stämbanden och **stämbandsrörlighet**.",
     "Stroboskopi visar stel/upphävd svängning vid akut laryngit."
    ],
    "diag": [
     {
      "h": "Typiska fynd"
     },
     "**Akut laryngit**: diskreta fynd.",
     "**Diffus kronisk laryngit**: rodnad, stel slemhinna, förtjockning/keratos.",
     "**Reinkeödem**: spolformigt uppdrivna, ödematösa stämband.",
     "**Stämbandsknutor**: bilaterala förtjockningar mitt på stämbandens svängande del.",
     "**Stämbandspares**: nedsatt rörlighet; vid bilateral pares paramediant ställning.",
     "**Epiglottit hos vuxna**: svullen epiglottis (spegel/fiberskopi).",
     "**Fonasteni**: normalt stämbandsstatus."
    ],
    "hand": [
     "Indicerad vid heshet som kvarstår (ÖLI: >3 v heshet/>1 v afoni; utan ÖLI: >1 v heshet/några dagar afoni).",
     "Stelhet eller förtjockning → laryngoskopi i **narkos** med palpation och biopsi."
    ],
    "flagg": [
     "Normalt stämbandsstatus vid röstbesvär talar för fonasteni – men organisk förändring ska först uteslutas."
    ],
    "ddx": [
     [
      "t9-357",
      "Fiberlaryngoskopi för näs- och svalgundersökning",
      "Fiberskopi av näsa och svalg."
     ],
     [
      "t9-364",
      "Differentialdiagnostik vid heshet",
      "Kliniskt sammanhang för undersökningen."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 37",
     "Kompendium ÖNH (T9), s. 38",
     "Kompendium ÖNH (T9), s. 39",
     "Kompendium ÖNH (T9), s. 40"
    ]
   },
   "card": {},
   "km": [
    "onh:82"
   ]
  },
  {
   "id": "t9-372",
   "name": "Maligna tumörer inom huvud och hals",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Tumörsjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Maligna tumörer i huvud-hals** grupperas efter lokal och histopatologi. Vanligast är **skivepitelcancer från slemhinna (ca ⅔)**; spottkörteltumörer och **lymfom** förekommer också. **Rökning, alkohol och HPV** ökar risken.",
    "klin": [
     {
      "h": "Läpp och munhåla"
     },
     "**Läppcancer**: vanligast oralt, 4 ggr vanligare hos män, **90 % på underläppen**, svårläkt sår, metastaserar nästan aldrig.",
     "**Munhålecancer**: oftast på **tungranden**, ofta ur leukoplakier/erytroplakier; svårläkt, ibland smärtande sår. Ofta lymfkörtelmetastaser.",
     {
      "h": "Svalg"
     },
     "**Epifarynx**: ovanlig i Norden, drabbar yngre; nästäppa/blödning, **ensidig hörselnedsättning (SOM)**, otalgi; 75 % har lymfkörtelmetastas; strålkänslig.",
     "**Orofarynx**: främst **tonsillcancer** (HPV bakom ca 50 %); diffusa symtom som misstolkas som tonsillit – ofta **knuta på halsen** som leder till diagnos.",
     "**Hypofarynx**: ofta sinus piriformis; diffusa besvär, ibland dysfagi; metastaser vid diagnos.",
     {
      "h": "Larynx"
     },
     "**Supraglottisk**: sena symtom, tidiga metastaser – ofta debut som halskörtel.",
     "**Glottisk**: **heshet** tidigt → bättre prognos.",
     {
      "h": "Näsa, bihålor och esofagus"
     },
     "Näsa: 6/7 benigna; bihålor: 6/7 maligna. Ensidig nästäppa, blodig snuva, ensidig ansiktsvärk; näscancer kan vara yrkesrelaterad (trä, metall, läder).",
     "Esofagus: **dysfagi** för fast → flytande föda, viktnedgång."
    ],
    "diag": [
     "Utredning i **multidisciplinärt team**; som regel **CT och/eller MR samt cytologi**.",
     "Läpp: biopsi. Esofagus: gastroskopi med biopsi och CT."
    ],
    "beh": [
     "Mindre tumörer: **kirurgi eller strålning**; icke-resektabla → fulldos strålning och cytostatika.",
     "Larynx T1–T2: **strålning i första hand** med god prognos och oftast bevarad röst; annars **laryngektomi** (ofta med röstventil).",
     "Tonsillcancer: oftast strålning ± behandling av halskörtlar/halsutrymning."
    ],
    "flagg": [
     "**Svårläkt sår i munnen** eller ensidig tonsillförstoring/halssmärta hos vuxen → tänk cancer.",
     "**Ensidig SOM hos vuxen** kan vara epifarynxcancer.",
     "**Knuta på halsen** kan vara första symtom på orofarynx- eller supraglottisk cancer.",
     "**Nytillkommen dysfagi = cancer tills motsatsen bevisats.**"
    ],
    "ddx": [
     [
      "t9-373",
      "Maligna spottkörteltumörer",
      "Fast, icke ruckbar körtelresistens; facialispares."
     ],
     [
      "t9-377",
      "Utredning av knuta på halsen",
      "Metastas är vanligaste orsaken till halsknuta hos personer >40 år."
     ],
     [
      "t9-339",
      "Leukoplakier",
      "Precancerösa förändringar som munhålecancer ofta utgår från."
     ],
     [
      "t9-345",
      "Tonsillit och peritonsillit",
      "Tonsillcancer misstolkas ofta länge som tonsillit."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 41–43"
    ]
   },
   "card": {},
   "km": [
    "onh:85"
   ]
  },
  {
   "id": "t9-373",
   "name": "Maligna spottkörteltumörer",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Tumörsjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Maligna spottkörteltumörer** utgör ca **100 fall/år**. 90 % av spottkörtelförändringarna finns i de stora körtlarna, men **ju mindre körtel, desto högre malignitetsrisk**. Vanligast är **mukoepidermoid cancer**.",
    "klin": [
     "Oftast en **oöm förstoring/resistens**, fast/hård och **ej ruckbar**.",
     "**Smärta utan palpation** och **facialispares** är starka tecken på malignitet.",
     "Parotistumör är en av de vanligaste orsakerna till gradvis progredierande facialispares."
    ],
    "diag": [
     "Utredning som vid huvud-halstumör: cytologi (finnålspunktion, ev. ultraljudsledd) och CT/MR."
    ],
    "beh": [
     "I första hand **nervbesparande kirurgi**; ofta krävs tillägg av **strålning**."
    ],
    "hand": [
     "Prognos: mukoepidermoid cancer har ca **80 % 5-årsöverlevnad**."
    ],
    "flagg": [
     "Spottkörtelresistens + **facialispares** = malignitet tills motsatsen bevisats.",
     "Resistens i **små spottkörtlar** har högre malignitetsrisk.",
     "Gradvis progredierande facialispares ska utredas för tumör (parotis)."
    ],
    "ddx": [
     [
      "t9-378",
      "Benigna tumörer, pleomorft adenom och angiofibrom",
      "Pleomorft adenom: långsamväxande (10–15 år) oöm parotisresistens utan facialispares."
     ],
     [
      "t9-349",
      "Spottsten",
      "Måltidsrelaterad svullnad."
     ],
     [
      "t9-351",
      "Purulent parotit",
      "Öm svullnad, pus och feber."
     ],
     [
      "t9-319",
      "Orsaker till perifer facialispares",
      "Bells pares har akut debut; tumör ger gradvis progress."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 13",
     "Kompendium ÖNH (T9), s. 43"
    ]
   },
   "card": {},
   "km": [
    "onh:85"
   ]
  },
  {
   "id": "t9-374",
   "name": "Utredning och behandling av tumörfall",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Tumörsjukdomar",
   "ty": "beh",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Utredning och behandling av **huvud-halscancer** sker i ett **multidisciplinärt team**. Utredningen kräver som regel **CT och/eller MR samt cytologi**, och behandlingen styrs av lokal, storlek och om tumören är **resektabel**.",
    "klin": [
     {
      "h": "Utredning"
     },
     "Bilddiagnostik: **CT och/eller MR**.",
     "Vävnadsdiagnos: **cytologi** (finnålspunktion, ultraljudsledd vid behov) eller biopsi.",
     "Okänd primärtumör med halskörtelmetastas: finnålspunktion och **CT/MR från skallbas till thorax**; vid skivepitelmetastas **direktmikroskopi och palpation i narkos** av tänkbara primärlokaler.",
     "Halsknutor: oklara knutor skickas för **cytologi och ultraljud**."
    ],
    "beh": [
     "Mindre tumörer: oftast **kirurgi eller strålning**.",
     "**Resektabel** = tumören kan tas bort tillräckligt utan alltför stor stympning.",
     "**Icke-resektabel** → fulldos strålning och cytostatika.",
     "Larynx T1–T2: strålning i första hand; annars laryngektomi ofta kombinerat med strålning och ibland cytostatika.",
     "Näsa/bihålor: i princip alltid kombination av först cytostatika, sedan strålning och kirurgi.",
     "Spottkörtlar: nervbesparande kirurgi, ofta tillägg av strålning.",
     "Esofagus: kirurgi; i palliativt syfte dilatation/stent."
    ],
    "hand": [
     "Adenokarcinommetastas på halsen (ofta supraklavikulärt) → leta primärtumör i lunga, bröst, ventrikel, prostata, ovarium eller thyreoidea.",
     "Skivepitelmetastas → oftast primärtumör i tungbas, tonsill, epifarynx, hypofarynx eller hud."
    ],
    "flagg": [
     "Halsknuta kan vara enda symtom på en primärtumör i svalg/larynx – sök primärtumören systematiskt.",
     "Ta inte bort en oklar halsknuta utan föregående cytologi/utredning (”skicka in oklara knutor för cytologi och UL”)."
    ],
    "ddx": [
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Lokalspecifik klinik och behandling."
     ],
     [
      "t9-377",
      "Utredning av knuta på halsen",
      "Ingångssymtom för många huvud-halscancrar."
     ],
     [
      "t9-376",
      "Prognostiska faktorer",
      "Lokal och metastasering styr prognos."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 41–43"
    ]
   },
   "card": {},
   "km": [
    "onh:86",
    "onh:87"
   ]
  },
  {
   "id": "t9-375",
   "name": "Samarbete kring patienter med tumörsjukdom",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Tumörsjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-376",
   "name": "Prognostiska faktorer",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Tumörsjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Prognosen vid huvud-halscancer styrs i kompendiet framför allt av **tumörlokal**, om det finns **lymfkörtelmetastaser**, om tumören ger **tidiga symtom** och av **histologi**.",
    "klin": [
     {
      "h": "Lokal"
     },
     "Bäst prognos: **läppcancer** (ca 4 % mortalitet) – nästan aldrig metastaser.",
     "Sämst prognos: **hypofarynxcancer** (ca 80 % mortalitet; 5–15 % överlevnad trots aggressiv behandling).",
     {
      "h": "Tidiga symtom"
     },
     "**Glottiscancer** ger heshet tidigt → bättre prognos.",
     "Supraglottisk/subglottisk cancer: sena symtom men tidiga metastaser → sämre prognos.",
     "Larynxcancer totalt: hyfsad prognos (ca 50 %); T1–T2 behandlade med strålning har god prognos.",
     {
      "h": "Metastasering"
     },
     "Munhålecancer: ofta lymfkörtelmetastaser och dålig prognos.",
     "Epifarynxcancer: 5-årsöverlevnad **50 % vid N0** och **35 % vid N1**.",
     "Orofarynxcancer är ofta avancerad med körtelengagemang vid diagnos → 5-årsöverlevnad som bäst 50 %.",
     {
      "h": "Histologi"
     },
     "Mukoepidermoid spottkörtelcancer: ca 80 % 5-årsöverlevnad.",
     "Halsmetastas med okänd primärtumör: **adenokarcinom 0–5 %** vs **skivepitelcancer 15–50 %** 5-årsöverlevnad.",
     "Hodgkinlymfom växer snabbt men kan säkert botas; non-Hodgkin tvärtom."
    ],
    "flagg": [
     "Sena symtom (supraglottis, hypofarynx) innebär ofta spridd sjukdom vid diagnos – utred halsknutor tidigt."
    ],
    "ddx": [
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Klinik per lokal."
     ],
     [
      "t9-374",
      "Utredning och behandling av tumörfall",
      "Behandlingsprinciper."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 41–44"
    ]
   },
   "card": {},
   "km": [
    "onh:88"
   ],
   "prog": [
    [
     "t7",
     "Termin 7",
     "t7-101",
     "Prognostiska faktorer"
    ]
   ]
  },
  {
   "id": "t9-377",
   "name": "Utredning av knuta på halsen",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Tumörsjukdomar",
   "ty": "und",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Utredning av **knuta på halsen** bygger på duration, patientens ålder, associerade symtom och kliniska fynd. **7-regeln**: **7 dagar = infektion, 7 veckor–7 månader = tumör, 7 år = kongenitalt**.",
    "klin": [
     {
      "h": "Vanligaste orsak efter ålder"
     },
     "**Barn**: infektion > atypiska mykobakterier > kongenitala tillstånd.",
     "**Yngre vuxna (17–40 år)**: inflammation/infektion > kongenitalt > neoplasi (lymfom vanligast).",
     "**Äldre (>40 år)**: **neoplasi** (metastas vanligast) > infektion > kongenitalt.",
     {
      "h": "Anamnes"
     },
     "ÖLI-symtom, heshet, nervpåverkan, sväljsmärta, viktnedgång, nattsvettningar.",
     "Tidigare strålbehandling? Alkohol, rökning?"
    ],
    "diag": [
     {
      "h": "Kliniska fynd"
     },
     "Rodnad/värmeökad knuta → infektion.",
     "Hudförändring över knutan → atypiska mykobakterier.",
     {
      "h": "Observandum (talar för malignitet)"
     },
     "Ingen pågående/föregående infektion; **oöm, fast knuta**; smärtor utan palpation.",
     "**Ingen regress på 2–3 veckor**; **fixerad/infiltrativ**, icke förskjutbar; asymmetri; **kranialnervpåverkan**.",
     {
      "h": "Prover"
     },
     "B-status med diff, SR/CRP, leverstatus, TSH/T4, **frikostigt HIV-prov**; vid misstänkt infektion svalgtester (strep A, monospot)."
    ],
    "beh": [
     "Oklara knutor skickas för **cytologi och ultraljud**.",
     "Vid metastas av okänd primärtumör: CT/MR skallbas–thorax och vid skivepitelmetastas direktmikroskopi och palpation i narkos."
    ],
    "hand": [
     "Fortsatt handläggning på ÖNH: excision, CT/MR m.m.",
     "**Lateral halscysta hos patient >30 år → malignitetsutredning.**"
    ],
    "flagg": [
     "Knuta hos person **>40 år** är malign tills motsatsen bevisats – metastas vanligast.",
     "Knuta som inte går tillbaka på 2–3 veckor ska utredas.",
     "Munbottenflegmone/abscess kan spridas via halsfascior till mediastinum."
    ],
    "ddx": [
     [
      "",
      "Bakteriell lymfadenit (tonsillit, dentogen, munbotten, hud)",
      "Feber och öm lymfadenit, ofta rodnad och värmeökning."
     ],
     [
      "",
      "Virusorsakad lymfadenit",
      "Generell, måttligt öm lymfadenit; monospot, tänk HIV hos riskpatient."
     ],
     [
      "t9-380",
      "Atypiska mykobakterier",
      "Barn med subakut tillväxande knuta och hudengagemang."
     ],
     [
      "t9-379",
      "Lateral och medial halscysta och halsfistel",
      "Lateral framför m. sternocleidomastoideus, medial i medellinjen och följer sväljning."
     ],
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Metastas eller lymfom; oöm, fast, fixerad knuta."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 43",
     "Kompendium ÖNH (T9), s. 44"
    ]
   },
   "card": {},
   "km": [
    "onh:89"
   ]
  },
  {
   "id": "t9-378",
   "name": "Benigna tumörer, pleomorft adenom och angiofibrom",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Tumörsjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Pleomorft adenom** är den typiska benigna spottkörteltumören: en **långsamväxande** resistens i **parotis** som ofta funnits **10–15 år** innan den upptäcks, med ca **5 % risk för malign omvandling**.",
    "klin": [
     {
      "h": "Pleomorft adenom"
     },
     "Oöm, långsamväxande resistens i parotis.",
     "Spottkörtelförändringar i stora körtlar är oftare benigna än i små.",
     {
      "h": "Övriga benigna tumörer"
     },
     "Näsa: **6/7 av tumörerna är benigna** – t.ex. exofytiskt/inverterat papillom och angiom (i bihålorna är däremot 6/7 maligna).",
     "Larynx: **papillom** – godartad tumör som ger heshet."
    ],
    "beh": [
     "Pleomorft adenom **opereras bort**.",
     "Stämbandspapillom opereras."
    ],
    "flagg": [
     "**Smärta utan palpation och facialispares** talar för malign spottkörteltumör, inte pleomorft adenom.",
     "Pleomorft adenom kan malignifiera (ca 5 %) – därför operation."
    ],
    "ddx": [
     [
      "t9-373",
      "Maligna spottkörteltumörer",
      "Fast, ej ruckbar resistens, smärta och facialispares."
     ],
     [
      "t9-351",
      "Purulent parotit",
      "Akut, öm svullnad med pus och feber."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 39",
     "Kompendium ÖNH (T9), s. 42",
     "Kompendium ÖNH (T9), s. 43"
    ]
   },
   "card": {},
   "km": [
    "onh:90"
   ]
  },
  {
   "id": "t9-379",
   "name": "Lateral och medial halscysta och halsfistel",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Tumörsjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Halscystor** är kongenitala rester: **lateral halscysta** utgår från **andra gälfickan/gälbågen** och **medial halscysta** är en rest av **ductus thyroglossus** efter thyreoideas vandring från tungbasen.",
    "klin": [
     {
      "h": "Lateral halscysta"
     },
     "Oftast **unga vuxna**, ofta efter en ÖLI.",
     "Sitter **framför främre kanten av m. sternocleidomastoideus**.",
     {
      "h": "Medial halscysta"
     },
     "Ses vanligen i **förskoleåldern**.",
     "Rundad, fluktuerande, oöm knuta i **medellinjen** som **följer med vid sväljning och när tungan räcks ut**."
    ],
    "diag": [
     "Lateral: diagnos med **punktion**.",
     "Medial: **klinisk diagnos**."
    ],
    "beh": [
     "Båda behandlas **kirurgiskt**; lateral halscysta remitteras till ÖNH för operation."
    ],
    "flagg": [
     "**Lateral halscysta hos patient >30 år → malignitetsutredning!** (cystisk metastas kan likna halscysta).",
     "Enligt 7-regeln talar lång duration (år) för kongenital orsak."
    ],
    "ddx": [
     [
      "t9-377",
      "Utredning av knuta på halsen",
      "Ålder och duration styr sannolik genes."
     ],
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "Halsmetastas, t.ex. från tonsillcancer, hos vuxna."
     ],
     [
      "t9-380",
      "Atypiska mykobakterier",
      "Barn med tillväxande knuta och engagerad överliggande hud."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 43",
     "Kompendium ÖNH (T9), s. 44"
    ]
   },
   "card": {},
   "km": [
    "onh:91"
   ]
  },
  {
   "id": "t9-380",
   "name": "Atypiska mykobakterier",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Tumörsjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "**Atypiska mykobakterier** ger en subakut/kronisk lymfadenit på halsen, främst hos **barn som inte är BCG-vaccinerade**. Efter infektioner är det den näst vanligaste orsaken till halsknuta hos barn.",
    "klin": [
     "Smitta via **skrapsår vid bad** (ofta saltvatten).",
     "**Subakut/kronisk** infektion med **tillväxande knuta under några veckor**.",
     "Lätt öm, med **engagemang av överliggande hud** (hudförändring över knutan)."
    ],
    "diag": [
     "Klinisk misstanke utifrån ålder, förlopp och hudengagemang; oklara knutor utreds med cytologi och ultraljud."
    ],
    "beh": [
     "**Kirurgisk behandling på ÖNH.**"
    ],
    "flagg": [
     "Barn med långsamt växande halsknuta och missfärgad hud ovanför → tänk atypiska mykobakterier.",
     "Andra ovanliga orsaker att tänka på: TBC, tularemi, kattklösarsjuka och toxoplasma."
    ],
    "ddx": [
     [
      "",
      "Bakteriell lymfadenit",
      "Akut förlopp med feber, rodnad och värmeökning."
     ],
     [
      "t9-379",
      "Lateral och medial halscysta och halsfistel",
      "Medial halscysta i medellinjen följer sväljning; ingen hudengagemang."
     ],
     [
      "t9-377",
      "Utredning av knuta på halsen",
      "Systematisk utredning efter ålder och duration."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 43",
     "Kompendium ÖNH (T9), s. 44"
    ]
   },
   "card": {},
   "km": [
    "onh:92"
   ]
  },
  {
   "id": "t9-381",
   "name": "Livskvalitetsaspekter på tumörbehandling inom ÖNH",
   "specialty": "Öron-, näs- och halssjukdomar",
   "sub": "Tumörsjukdomar",
   "ty": "dx",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Behandling av huvud-halscancer påverkar funktioner som **tal, röst, sväljning, salivation och utseende**. Kompendiet betonar **funktionsbevarande** behandling där det är möjligt.",
    "klin": [
     {
      "h": "Funktionsbevarande principer"
     },
     "**Resektabel** tumör = kan tas bort tillräckligt **utan att stympa för mycket**.",
     "Larynx T1–T2: strålning i första hand – de flesta behåller **röstfunktionen**; vid laryngektomi används ofta **röstventil**.",
     "Tungcancer: upp till halva tungan med intilliggande munbotten kan tas bort med **rimliga tal- och sväljsvårigheter**.",
     "Näs-/bihålecancer: ofta kan **ögat sparas**.",
     "Spottkörtelcancer: **nervbesparande kirurgi** (n. facialis).",
     {
      "h": "Följdtillstånd"
     },
     "**Oral dysfagi** efter strålbehandling eller operation för huvud-halscancer.",
     "**Muntorrhet** efter strålbehandling (förlust av körtelvävnad); pilokarpin fungerar bra vid strålinducerad muntorrhet, annars saliversättning och tandläkarkontakt.",
     "Tidigare strålbehandling predisponerar för **candida** och strålskada kan ge **esofagusstriktur**."
    ],
    "hand": [
     "Bilateral stämbandspares behandlas med lateralisering som ”förstör rösten lagom” för bättre andning – en avvägning mellan funktioner.",
     "Esofaguscancer i palliativt skede: dilatation/stent för att lindra dysfagi."
    ],
    "flagg": [
     "Fråga efter sväljsvårigheter och muntorrhet hos patienter som strålbehandlats i huvud-halsregionen."
    ],
    "ddx": [
     [
      "t9-341",
      "Muntorrhet",
      "Vanlig följd av strålbehandling."
     ],
     [
      "t9-352",
      "Differentialdiagnostik vid dysfagi",
      "Oral dysfagi efter behandling av huvud-halscancer."
     ],
     [
      "t9-374",
      "Utredning och behandling av tumörfall",
      "Behandlingsprinciper."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 26",
     "Kompendium ÖNH (T9), s. 27",
     "Kompendium ÖNH (T9), s. 32",
     "Kompendium ÖNH (T9), s. 34",
     "Kompendium ÖNH (T9), s. 39",
     "Kompendium ÖNH (T9), s. 41–43"
    ]
   },
   "card": {},
   "km": [
    "onh:93"
   ]
  },
  {
   "id": "t9-382",
   "name": "Nytta av TDM i olika sammanhang",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-383",
   "name": "Definition av TDM",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-384",
   "name": "Farmakokinetiska parametrar vid TDM",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-385",
   "name": "Snävt terapeutiskt index, terapisvikt, oväntade biverkningar och interaktioner",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-386",
   "name": "Läkemedel som kan behöva rutinmässig kontroll av serumkoncentration",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Kompendierna nämner **koncentrationsbestämning i blod** som styrmedel framför allt för **antiepileptika** och för **desmetyldiazepam** vid nedtrappning av bensodiazepiner.",
    "klin": [
     {
      "h": "Antiepileptika"
     },
     "Antiepileptisk behandling ställs in inom ett **terapeutiskt intervall** med hjälp av blodprover (koncentration); målet är så låg dos som möjligt som ger anfallsfrihet.",
     "Vid anfall hos patient med känd epilepsi: **ta koncentration av epilepsimedicineringen**.",
     "Vid status epilepticus som behandlas med **fosfenytoin**: kontrollera koncentrationen ca 2 h efter att infusionen dragits ned.",
     {
      "h": "Bensodiazepiner"
     },
     "Vid nedtrappning av bensodiazepiner kan **serumkoncentrationen av desmetyldiazepam** mätas en gång per vecka."
    ],
    "diag": [
     "Om ett antiepileptikum inte fungerar byter man i första hand till ett annat preparat; **monoterapi** eftersträvas, och först vid fortsatt utebliven effekt läggs ytterligare läkemedel till."
    ],
    "hand": [
     "Hög dos eller snabb infusion av fosfenytoin kan ge **bradykardi, blodtrycksfall och andningsdepression** – övervaka patienten.",
     "Vid bensodiazepinnedtrappning används preparat med **lång halveringstid** (t.ex. diazepam eller oxazepam enligt kompendiet) för att undvika nivåfluktuationer."
    ],
    "flagg": [
     "Valproat bör undvikas till kvinnor i fertil ålder som planerar graviditet (risk för myelomeningocele).",
     "Vid bensodiazepinabstinens ska neuroleptika undvikas eftersom de sänker kramptröskeln."
    ],
    "ddx": [
     [
      "t9-036",
      "Läkemedelsbehandling och uppföljning av epilepsi",
      "Där beskrivs val av antiepileptika och uppföljning mer utförligt."
     ],
     [
      "t9-034",
      "Status epilepticus",
      "Fosfenytoinbehandling och koncentrationskontroll i akutskedet."
     ],
     [
      "t9-394",
      "TDM av psykotropa läkemedel",
      "Desmetyldiazepam vid bensodiazepinnedtrappning."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 12–13",
     "Kompendium Psykiatri (T9), s. 29"
    ]
   },
   "card": {},
   "km": [
    "farm:2",
    "neuro:27",
    "farm:0"
   ]
  },
  {
   "id": "t9-387",
   "name": "Proteinbindning",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "farm:3"
   ]
  },
  {
   "id": "t9-388",
   "name": "Steady state-koncentration",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-389",
   "name": "Laddningsdos och underhållsdos",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-390",
   "name": "Halveringstid och läkemedelskoncentrationskurvor",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Kompendierna använder **halveringstid** och verkningsduration praktiskt: lång halveringstid ger **jämnare nivåer** och möjliggör glesare dosering.",
    "klin": [
     "Vid nedtrappning av bensodiazepiner används preparat med **lång halveringstid** för att undvika nivåfluktuationer.",
     "**Metadon** har lång halveringstid och ges peroralt en gång dagligen vid underhållsbehandling; det kan dock överdoseras och ge intoxikation.",
     "**Diazepam** har kort duration vid status epilepticus: anfallet bryts men kan komma tillbaka efter 5–10 min, och därför kombineras det med fosfenytoin."
    ],
    "flagg": [
     "Kort verkningsduration kan ge **återkommande anfall** trots att det första läkemedlet hade effekt – planera fortsatt behandling."
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 27, 29",
     "Kompendium Neurologi (T9), s. 13"
    ]
   },
   "card": {},
   "km": [
    "farm:1",
    "farm:3"
   ]
  },
  {
   "id": "t9-391",
   "name": "Dalvärden och toppvärden",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-392",
   "name": "Tidpunkt för provtagning och provtagningsintervall",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Kompendierna ger några få konkreta **tidpunkter och intervall** för koncentrationsbestämning och relaterad provtagning.",
    "klin": [
     "**Fosfenytoin** vid status epilepticus: kontrollera koncentrationen ca **2 h** efter att infusionstakten sänkts.",
     "**Desmetyldiazepam** under bensodiazepinnedtrappning: mät **en gång per vecka**.",
     "Vid krampanfall: **akuta prover helst innan läkemedel ges**.",
     "**Prolaktin** stiger kraftigt vid generaliserat anfall och klingar av inom 30–60 min; prov tidigt plus efter 2 h hjälper att skilja anfallet från psykogena kramper."
    ],
    "flagg": [
     "Prolaktin tagen för sent efter anfallet kan vara normaliserad."
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 12–13",
     "Kompendium Psykiatri (T9), s. 29"
    ]
   },
   "card": {},
   "km": [
    "farm:4",
    "farm:17"
   ]
  },
  {
   "id": "t9-393",
   "name": "Preanalytiska, analytiska och biologiska felkällor",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-394",
   "name": "TDM av psykotropa läkemedel",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Enda psykotropa läkemedelsmonitoreringen som kompendiet beskriver är mätning av **serumkoncentration av desmetyldiazepam** under **nedtrappning av bensodiazepiner**.",
    "klin": [
     "Avgiftning sker gradvis under ca **1 månad** så att den toleransutveckling som uppstått vid GABA-receptorn hinner reverseras.",
     "Dosen räknas om till **milligramekvivalenter diazepam** vid bedömningssamtalet.",
     "Preparat med **lång halveringstid** (diazepam, oxazepam enligt kompendiet) används för att undvika nivåfluktuationer.",
     "Serumkoncentrationen av **desmetyldiazepam** kan mätas **en gång per vecka**, kombinerat med täta stödsamtal."
    ],
    "hand": [
     "Nedtrappning i slutenvård övervägs vid psykiatrisk samsjuklighet, blandmissbruk, social instabilitet eller upprepade misslyckade försök i öppenvård.",
     "Akut inläggning vid svåra abstinenssymtom, suicidalitet, graviditet, allvarlig intoxikation eller psykos."
    ],
    "flagg": [
     "Rekyleffekt med ökad oro, ångest och sömnsvårigheter är vanlig; **delirium med kramper** kan komma efter någon dag till en vecka.",
     "Undvik neuroleptika vid bensodiazepinabstinens – de sänker kramptröskeln."
    ],
    "ddx": [
     [
      "t9-142",
      "Litiumbehandling",
      "Litium är förstahandsval vid bipolär sjukdom, men kompendiet beskriver inte serumkontroller."
     ],
     [
      "t9-386",
      "Läkemedel som kan behöva rutinmässig kontroll av serumkoncentration",
      "Översikt över de läkemedel kompendierna nämner."
     ]
    ],
    "src": [
     "Kompendium Psykiatri (T9), s. 29",
     "Kompendium Psykiatri (T9), s. 4"
    ]
   },
   "card": {},
   "km": [
    "psyk:54",
    "farm:11"
   ]
  },
  {
   "id": "t9-395",
   "name": "Analys och värdering av TDM-data i klinisk kontext",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-396",
   "name": "Styrkor och begränsningar med TDM",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-397",
   "name": "Kostnader och optimering av provtagningsstrategi",
   "specialty": "Klinisk farmakologi",
   "sub": "Terapeutisk läkemedelsmonitorering (TDM)",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-398",
   "name": "Etisk plattform för prioriteringar inom hälso- och sjukvård",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-399",
   "name": "Finansiering och resursfördelning",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "farm:7"
   ]
  },
  {
   "id": "t9-400",
   "name": "Direkta och indirekta kostnader",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "farm:7"
   ]
  },
  {
   "id": "t9-401",
   "name": "Kostnadseffektivitet",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "farm:5"
   ]
  },
  {
   "id": "t9-402",
   "name": "QALY och EQ-5D",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-403",
   "name": "ICER, tröskelvärde och betalningsvilja (WTP)",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-404",
   "name": "Dominant och dominerad i kostnadseffektivitetsplanet",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-405",
   "name": "Kostnadsminimeringsanalys (CMA)",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-406",
   "name": "Kostnadseffektivitetsanalys (CEA)",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-407",
   "name": "Kostnadsnyttoanalys (CUA)",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-408",
   "name": "Budgetpåverkansanalys",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "farm:5"
   ]
  },
  {
   "id": "t9-409",
   "name": "Markov-modeller",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "farm:5"
   ]
  },
  {
   "id": "t9-410",
   "name": "Känslighetsanalyser",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "farm:5",
    "farm:16"
   ]
  },
  {
   "id": "t9-411",
   "name": "Sjukvårds- och samhällsperspektiv",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-412",
   "name": "Etiska problem inom hälsoekonomi",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {},
   "km": [
    "farm:20"
   ]
  },
  {
   "id": "t9-413",
   "name": "Kritisk granskning av hälsoekonomisk information om läkemedel",
   "specialty": "Klinisk farmakologi",
   "sub": "Hälsoekonomi",
   "ty": "beg",
   "synonyms": [],
   "related": [],
   "cc": {},
   "card": {}
  },
  {
   "id": "t9-414",
   "name": "Metodval vid utredning av sjukdomar i nervsystemet",
   "specialty": "Bild- och funktionsmedicin",
   "sub": "Neuroradiologi",
   "ty": "img",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Valet mellan **DT (CT)** och **MR** styrs av frågeställning och akutgrad. **DT** är förstahandsval akut för att utesluta blödning och expansivitet, och **MR** är känsligare vid bland annat epilepsi, MS, ryggmärg och tumördiagnostik.",
    "klin": [
     {
      "h": "DT i första hand"
     },
     "Misstänkt stroke/TIA: DT hjärna (ev. med kontrast) för att **utesluta blödning** före trombolys/trombocythämning.",
     "Misstänkt SAH: DT skalle (ser > 95 % av alla SAH inom 24 h); vid positivt fynd kompletteras med angiografi.",
     "Skalltrauma, medvetandesänkning, demensutredning (utesluta expansivitet) och cerebral abscess: DT i första hand.",
     "CNS-tumör: DT **med kontrast** i första hand.",
     {
      "h": "MR i första hand eller som komplement"
     },
     "Nydebuterad epilepsi: helst **MR på alla**, ej akut, inom ca 1 vecka (akut DT om påverkad patient eller fokalneurologi).",
     "MS: MR visar lesioner skilda i tid och rum, ”Dawsons fingrar” och nya kontrastladdande lesioner vid skov.",
     "Ryggmärgskompression, myelit, ryggmärgsinfarkt och spinala tumörer: **MR**.",
     "Hypofystumör och tallkottkörteltumör: först DT, sedan alltid MR (hypofys: även inför operation; germinom: MR av hela CNS)."
    ],
    "diag": [
     "Demens: DT för att utesluta expansivitet, MR hos yngre och när mer information krävs; **SPECT/PET** kan användas för att mäta cerebralt blodflöde, som är minskat i drabbade områden.",
     "Vid småkärlssjukdom visar DT och särskilt MR vitsubstansförändringar, främst periventrikulärt.",
     "Normaltryckshydrocefalus: DT/MR visar ventrikelvidgning utan kortikal atrofi.",
     "Kärlutredning efter stroke: ultraljud av halskärl och/eller DT-angiografi."
    ],
    "hand": [
     "Akut påverkad patient → DT; frågeställningar som kräver hög vävnadsupplösning (vit substans, ryggmärg, skallbas) → MR.",
     "Vid central yrsel, staspapill eller nytillkommen ögonmuskelpares med misstänkt intrakraniell orsak rekommenderas DT/MR (MRT)."
    ],
    "flagg": [
     "En normal DT/MR utesluter inte **herpesencefalit** tidigt (kan vara negativ första dagarna).",
     "Negativ DT vid stark misstanke om SAH → **LP** (efter > 12 h, xantokromi).",
     "Vid DAI kan DT vara normal; MR kan vara bättre."
    ],
    "ddx": [
     [
      "t9-415",
      "Neuroradiologi: akuta tillstånd",
      "Akuta indikationer i detalj."
     ],
     [
      "t9-416",
      "Neuroradiologi: tumör och inflammation",
      "Tumörer, MS och infektioner."
     ],
     [
      "t9-417",
      "Neuroradiologiska interventioner och indikationer",
      "Endovaskulär behandling."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 2–4, 12, 15, 18, 26–27, 32–33, 37–39, 41–42, 44",
     "Kompendium ÖNH (T9), s. 11",
     "Ögonboken – sammanfattning (T9), s. 23, 26–27"
    ]
   },
   "card": {},
   "km": [
    "neuro:11",
    "bfm:0"
   ]
  },
  {
   "id": "t9-415",
   "name": "Neuroradiologi: akuta tillstånd",
   "specialty": "Bild- och funktionsmedicin",
   "sub": "Neuroradiologi",
   "ty": "img",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid akuta neurologiska tillstånd är **DT hjärna** den grundläggande akuta undersökningen, främst för att påvisa eller utesluta **blödning**, expansivitet och traumatiska skador. Den kompletteras vid behov med **angiografi** eller **MR**.",
    "klin": [
     {
      "h": "Stroke och TIA"
     },
     "TIA: omedelbar inläggning och DT skalle för att utesluta blödning innan laddningsdos ASA/klopidogrel.",
     "Stroke: DT hjärna (ev. med kontrast) i akutskedet; överväg iv. trombolys om infarkt ≤ 4½ h efter insjuknandet.",
     "Dagen efter: ultraljud halskärl och/eller DT-angiografi; MR och hjärteko övervägs.",
     {
      "h": "Blödningar"
     },
     "SAH: DT skalle (> 95 % sensitiv inom 24 h) → vid positivt fynd **angiografi** för att lokalisera blödningskällan.",
     "ICH under waran-/trombolysbehandling: PK-INR och **akut DT**; om blödning, reversera enligt PM. Ny DT om patienten försämras och intervention planeras.",
     "Kroniskt subduralhematom: svår klinisk diagnos som ställs med DT.",
     {
      "h": "Trauma"
     },
     "Lätt skallskada (RLS 1–2): DT hjärna och nervstatus; om utan anmärkning hem med skriftlig information.",
     "Medelsvår skallskada (RLS 3): DT, inläggning och övervakning; **ny DT** efter 6–12 h om oförändrat.",
     "Spinalt trauma: immobilisering och **trauma-DT**, kompletterande DT/MR.",
     "Kontusioner diagnostiseras med DT; vid DAI kan DT vara normal eller visa mikroblödningar, och MR kan vara bättre."
    ],
    "diag": [
     "Medvetslöshet: neuroradiologi, oftast DT ev. med kontrast, ev. LP och EEG.",
     "Akut huvudvärk med SAH-misstanke: akut DT hjärna.",
     "Första krampanfall: akut DT om påverkad patient eller fokalneurologi, annars MR inom ca 1 vecka.",
     "Akut ryggmärgspåverkan (kompression, myelit, infarkt): **skyndsam MR**.",
     "Akut hydrocefalus/shuntdysfunktion: DT eller MR visar vidgade ventriklar och eventuell orsak."
    ],
    "hand": [
     "Fastställande av total hjärninfarkt: kliniska kriterier, ev. med EEG, eller **cerebral fyrkärlsangiografi** som direkt kriterium."
    ],
    "flagg": [
     "Negativ DT vid fortsatt SAH-misstanke → LP (> 12 h efter debut).",
     "Ca ¼ av patienter med ICH är initialt vakna men sjunker i medvetande under det första dygnet – ny DT vid försämring.",
     "Vid epiduralabscess och cerebral abscess är **LP kontraindicerad** – gör bilddiagnostik."
    ],
    "ddx": [
     [
      "t9-017",
      "Hjärninfarkt",
      "Akut DT före ställningstagande till trombolys."
     ],
     [
      "t9-019",
      "Subaraknoidalblödning",
      "DT följt av angiografi eller LP."
     ],
     [
      "t9-018",
      "Intracerebral blödning",
      "Akut DT, särskilt vid antikoagulantia."
     ],
     [
      "t9-041",
      "Skalltrauma",
      "DT styrs av RLS/GCS."
     ],
     [
      "t9-086",
      "Ryggmärgskompression",
      "MR akut."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 2–5, 7, 12, 14–17, 19–21, 44"
    ]
   },
   "card": {},
   "km": [
    "bfm:3",
    "neuro:15",
    "neuro:30",
    "bfm:0"
   ]
  },
  {
   "id": "t9-416",
   "name": "Neuroradiologi: tumör och inflammation",
   "specialty": "Bild- och funktionsmedicin",
   "sub": "Neuroradiologi",
   "ty": "img",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid misstänkt **CNS-tumör** görs **DT med kontrast** i första hand och MR med kontrast vid särskilda frågeställningar. Vid **inflammatoriska/infektiösa** tillstånd (MS, myelit, encefalit, abscess) är **MR** den känsligaste metoden.",
    "klin": [
     {
      "h": "Tumörer"
     },
     "Allmänt: DT med kontrast i första hand; **MR med kontrast** om skallbasförändringar på DT eller om DT är blank trots misstanke.",
     "Diagnosen och klassifikationen ställs alltid **histopatologiskt** – bilden ersätter inte biopsi/operation.",
     "Oligodendrogliom: DT visar ofta förkalkningar och cystbildning.",
     "Meningeom: syns mycket tydligt på DT med kontrast på grund av kraftig vaskularisering.",
     "Hypofystumör: först DT, därefter **obligat MR** (diagnostiskt och för planering inför operation).",
     "Tallkottkörteltumör: DT och sedan alltid MR inklusive spinalkanalen; vid germinom MR av hela CNS (droppmetastaser).",
     "Metastaser: tänk på samtidiga lungmetastaser – lungröntgen/DT.",
     "Spinala tumörer: bäst med **MR** (ev. DT med intraspinal kontrast).",
     {
      "h": "Inflammation och infektion"
     },
     "MS: minst två CNS-lesioner skilda i tid och rum, påvisade kliniskt eller med MR; MR visar ”Dawsons fingrar” och juxtakortikala lesioner, och vid skov ny **kontrastladdande** lesion.",
     "Akut myelit: MR av ryggmärg och hjärna (utbredning, ödem, kontrastladdning, hjärnförändringar).",
     "Cerebral abscess: DT i första hand, men MR är känsligare i **cerebritstadiet**.",
     "Herpesencefalit: DT och MR kan vara negativa de första dagarna."
    ],
    "diag": [
     "En enda MR-undersökning kan visa både gamla och nya lesioner på olika platser och därmed uppfylla kravet på spridning i tid och rum vid MS.",
     "Demens: MR/DT visar medial temporallobsatrofi vid Alzheimer och frontal atrofi vid frontotemporal demens."
    ],
    "hand": [
     "Kärlrika meningeom i tekniskt svårt läge kan **embolisera**s arteriellt före operation."
    ],
    "flagg": [
     "Blank DT utesluter inte tumör vid stark misstanke – gå vidare med MR med kontrast.",
     "Negativ DT/MR tidigt vid encefalit utesluter inte diagnosen – behandla med aciklovir vid misstanke.",
     "LP är kontraindicerad vid cerebral abscess."
    ],
    "ddx": [
     [
      "t9-077",
      "Primära tumörer som engagerar nervsystemet",
      "Bilddiagnostik med DT med kontrast i första hand och MR vid särskilda frågeställningar."
     ],
     [
      "t9-078",
      "Sekundära tumörer som engagerar nervsystemet",
      "Bilddiagnostik med DT med kontrast i första hand och MR vid särskilda frågeställningar."
     ],
     [
      "t9-068",
      "Multipel skleros, symtom och diagnostik",
      "MR-kriterier för spridning i tid och rum."
     ],
     [
      "t9-082",
      "Cerebral abscess",
      "DT först, MR känsligare i cerebritstadiet."
     ],
     [
      "t9-079",
      "Encefalit",
      "Bilddiagnostik kan vara negativ tidigt."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 26–27, 30, 32, 37–39, 41–42, 44"
    ]
   },
   "card": {},
   "km": [
    "bfm:0",
    "bfm:4"
   ]
  },
  {
   "id": "t9-417",
   "name": "Neuroradiologiska interventioner och indikationer",
   "specialty": "Bild- och funktionsmedicin",
   "sub": "Neuroradiologi",
   "ty": "img",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Neuroradiologiska interventioner som nämns i kompendierna är **endovaskulär behandling (coiling)** av intrakraniella aneurysm, **arteriell embolisering** av kärlrika tumörer och **intraarteriell trombolys**. **Angiografi** används också diagnostiskt.",
    "klin": [
     {
      "h": "Coiling vid aneurysmal SAH"
     },
     "Endovaskulär behandling/coiling är idag **förstahandsval** och passar bäst för aneurysm med **smal hals**; majoriteten av aneurysm i bakre cirkulationen behandlas så.",
     "Fördel: mindre avancerat ingrepp. Nackdel: ca **20 % risk för rekanalisering** (aneurysmet växer runt coilen när geometrin ändras).",
     "Alternativ: öppen operation med klipsligatur (främst bredbasiga aneurysm i främre cirkulationen eller aneurysm med hematom som kräver åtgärd), eller kombinerad approach med coil plus hematomutrymning.",
     {
      "h": "Embolisering"
     },
     "Kärlrikt meningeom i tekniskt svårt läge → **preoperativ arteriell embolisering**.",
     "Svår bakre näsblödning: i sista hand kirurgisk ligering eller embolisering.",
     {
      "h": "Intraarteriell trombolys"
     },
     "Centralartärocklusion i ögat: om < 8 h och synen inte återkommer efter åtgärder → kontakta neurolog för ställningstagande till **intraarteriell lokalbehandling med trombolys**."
    ],
    "diag": [
     "SAH: positiv DT kompletteras med **angiografi** för att lokalisera blödningskällan.",
     "Total hjärninfarkt: **cerebral fyrkärlsangiografi** är ett direkt kriterium på upphörd hjärnfunktion."
    ],
    "hand": [
     "Vid verifierad SAH kontaktas neurokirurg direkt; efter åtgärd ges nimodipin (Nimotop) i 2–3 veckor mot vasospasm."
    ],
    "flagg": [
     "Uppföljning behövs efter coiling på grund av risken för rekanalisering.",
     "Vasospasm är den största orsaken till morbiditet efter åtgärd (ses kliniskt hos 20–30 %)."
    ],
    "ddx": [
     [
      "t9-019",
      "Subaraknoidalblödning",
      "Coiling eller klipsligatur av aneurysmet."
     ],
     [
      "t9-077",
      "Primära tumörer som engagerar nervsystemet",
      "Preoperativ embolisering av meningeom."
     ],
     [
      "t9-327",
      "Bakre näsblödning",
      "Embolisering i sista hand."
     ],
     [
      "t9-055",
      "Fastställande av total hjärninfarkt",
      "Fyrkärlsangiografi."
     ]
    ],
    "src": [
     "Kompendium Neurologi (T9), s. 4, 21, 38",
     "Kompendium ÖNH (T9), s. 17",
     "Ögonboken – sammanfattning (T9), s. 20"
    ]
   },
   "card": {},
   "km": [
    "bfm:2"
   ]
  },
  {
   "id": "t9-418",
   "name": "Akuta infektioner inom ÖNH-området",
   "specialty": "Bild- och funktionsmedicin",
   "sub": "ÖNH-radiologi",
   "ty": "img",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Kompendiet tar knappt upp bilddiagnostik vid **akuta ÖNH-infektioner**. Vid **sinuit** kan slemhinnesvullnad i bihålorna påvisas med **röntgen/CT**, men diagnosen ställs i övrigt främst kliniskt.",
    "klin": [
     "Sinuit: näsinspektion (polyper, färgat sekret i mellersta näsgången) och påvisad slemhinnesvullnad i bihålorna (RTG/CT); käkspolning är både diagnostisk och terapeutisk.",
     "Peritonsillit: diagnos och behandling genom att lokalisera bölden med spets och spruta under aspiration – ingen bilddiagnostik nämns.",
     "Epiglottit: hos barn undviks svalginspektion/spatel (risk för total obstruktion) – handläggs på sjukhus med intubationsberedskap; vuxna undersöks med laryngoskopi/fiberskopi.",
     "Halsinfektion med abscessbildning (munbottenflegmone): värdera risken för spridning via halsfascior till mediastinum."
    ],
    "hand": [
     "Svår smärta, svullnad i ansiktet och feber vid sinuit → **akut remiss till ÖNH** för iv. antibiotika och ev. kirurgiskt dränage.",
     "Frontal sinuit och etmoidit remitteras akut till ÖNH; etmoidit har stor risk för spridning till orbita och sepsis."
    ],
    "flagg": [
     "Etmoidit hos barn med periorbital svullnad – risk för orbitaspridning.",
     "Epiglottit är alltid ett sjukhusfall – fördröj inte transport med undersökningar."
    ],
    "ddx": [
     [
      "t9-329",
      "Maxillarsinuit",
      "RTG/CT kan visa slemhinnesvullnad i bihålorna."
     ],
     [
      "t9-330",
      "Frontalsinuit",
      "Klinisk diagnostik; bilddiagnostik beskrivs inte närmare i kompendiet."
     ],
     [
      "t9-345",
      "Tonsillit och peritonsillit",
      "Klinisk diagnostik; bilddiagnostik beskrivs inte närmare i kompendiet."
     ],
     [
      "t9-362",
      "Akut epiglottit",
      "Klinisk diagnostik; bilddiagnostik beskrivs inte närmare i kompendiet."
     ],
     [
      "t9-288",
      "Mastoidit och otogen meningit",
      "Klinisk diagnostik; bilddiagnostik beskrivs inte närmare i kompendiet."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 5, 18, 29, 37, 44"
    ]
   },
   "card": {},
   "km": [
    "bfm:1"
   ]
  },
  {
   "id": "t9-419",
   "name": "Trauma inom ÖNH-området",
   "specialty": "Bild- och funktionsmedicin",
   "sub": "ÖNH-radiologi",
   "ty": "img",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid **ansiktstrauma** görs i princip alltid **CT av ansiktsskelettet inklusive mandibeln**, oftast tillsammans med **CT hjärna och halsrygg**. Okomplicerade näsfrakturer diagnostiseras kliniskt.",
    "klin": [
     "Ansiktstrauma i allmänhet: CT ansiktsskelett inkl. mandibel, oftast även CT hjärna och halsrygg.",
     "**Näsfraktur**: klinisk diagnos räcker.",
     "**Mandibelfraktur**: CT ansiktsskelett inkl. mandibel alternativt **OPG-röntgen**; lungröntgen om en tand saknas (aspiration?).",
     "**Pannbensfraktur**: CT hjärna och ansiktsskelett; **intrakraniell luft** är tecken på duraskada eller kommunikation mellan främre skallgropen och sinus frontalis.",
     "**Skallbas-/temporalbensfraktur**: diagnos med CT.",
     "Trap door-fraktur hos barn: inga periorbitala hematom och **svår att se på CT**."
    ],
    "diag": [
     "Generella tecken på skallbasfraktur är likvorré, brillenhematom och anosmi; vid temporalbensfraktur hematotympanon, hörselnedsättning och facialispares.",
     "Klinisk undersökning (sensibilitet, facialisfunktion, ögon, bett, rhinoskopi, otoskopi) styr vilka strukturer som avbildas."
    ],
    "hand": [
     "Halskrage tills halsryggsskada är utesluten; överväg tidig intubation.",
     "Ofta konsult från ögon- och käkkirurgi samt ÖNH.",
     "Misstänkt duraskada → profylaktiskt cefotaxim (Claforan) mot meningit.",
     "Trap door-fraktur: akut operation, helst inom 6 h men absolut inom 24 h.",
     "Mandibelfrakturer bör åtgärdas snabbt (max ca 24–48 h) eftersom de kan hota luftvägen."
    ],
    "flagg": [
     "Trap door-fraktur hos barn ger smärta, illamående, kräkning och bradykardi (okulokardiell reflex) men **få fynd på CT** – glöm den inte.",
     "Uteslut alltid intrakraniell skada och halsryggsskada vid kraftigt våld mot pannan."
    ],
    "ddx": [
     [
      "t9-333",
      "Ansikts- och skallbasfrakturer",
      "Klinik och behandling av respektive fraktur."
     ],
     [
      "t9-041",
      "Skalltrauma",
      "Samtidig CT hjärna."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 19, 22, 24"
    ]
   },
   "card": {},
   "km": [
    "bfm:1"
   ]
  },
  {
   "id": "t9-420",
   "name": "Tumör och inflammation inom ÖNH-området",
   "specialty": "Bild- och funktionsmedicin",
   "sub": "ÖNH-radiologi",
   "ty": "img",
   "synonyms": [],
   "related": [],
   "cc": {
    "def": "Vid misstänkt **huvud-halstumör** krävs som regel **CT och/eller MR** samt **cytologi**, och utredningen sker i multidisciplinärt team. **Ultraljud** används för att styra finnålspunktion av knölar på halsen.",
    "klin": [
     {
      "h": "Tumörer"
     },
     "Huvud-halscancer: CT och/eller MR plus cytologi.",
     "Lymfkörtelmetastas av okänt ursprung: finnålspunktion (UL-ledd vid behov) och **CT/MR från skallbas till thorax**; vid skivepitelmetastas direktmikroskopi och palpation i narkos.",
     "Oklar knöl på halsen: cytologi och **ultraljud**; fortsatt handläggning på ÖNH med excision, CT/MR med mera.",
     "Ensidig recurrenspares: utred med videostroboskopi och **CT hals + thorax** (tumör på halsen, i mediastinum eller nära skallbasen?).",
     "Esofaguscancer: gastroskopi med biopsi och **CT**.",
     {
      "h": "Inflammation och övrigt"
     },
     "Spottsten: anamnes, bimanuell palpation av munbotten och **röntgen av munbotten (översikt)**.",
     "Zenkerdivertikel: **röntgen av hypofarynx och esofagus före endoskopi** (perforationsrisk).",
     "Esofagusstrikturer: röntgen och endoskopi med eller utan biopsi; motilitetsstörningar: röntgen med kontrast."
    ],
    "diag": [
     "Lateral halscysta hos patient > 30 år ska föranleda **malignitetsutredning**.",
     "Nytillkommen dysfagi = cancer tills motsatsen är bevisad."
    ],
    "hand": [
     "Kliniska varningstecken som motiverar utredning: oöm, fast, icke förskjutbar knöl utan infektion, ingen regress på 2–3 veckor, smärta utan palpation och kranialnervspåverkan."
    ],
    "flagg": [
     "Röntga före endoskopi vid misstänkt Zenkerdivertikel – risk för perforation.",
     "Lateral halscysta efter 30 års ålder kan vara en cystisk metastas."
    ],
    "ddx": [
     [
      "t9-372",
      "Maligna tumörer inom huvud och hals",
      "CT/MR, ultraljud och cytologi i utredningen."
     ],
     [
      "t9-377",
      "Utredning av knuta på halsen",
      "CT/MR, ultraljud och cytologi i utredningen."
     ],
     [
      "t9-373",
      "Maligna spottkörteltumörer",
      "CT/MR, ultraljud och cytologi i utredningen."
     ],
     [
      "t9-374",
      "Utredning och behandling av tumörfall",
      "CT/MR, ultraljud och cytologi i utredningen."
     ]
    ],
    "src": [
     "Kompendium ÖNH (T9), s. 32, 34–35, 39, 41–44"
    ]
   },
   "card": {},
   "km": [
    "bfm:4"
   ]
  }
 ],
 "symptoms": [],
 "kursmal": [
  {
   "spec": "neuro",
   "name": "Neurologi",
   "kun": [],
   "fard": [],
   "vard": [],
   "lit": [],
   "sections": [
    {
     "title": "Praktiska färdigheter och undersökningsmetoder: Neurologiskt anamnestagande och statusundersökning",
     "items": [
      "Kunna: Inhämta neurologisk anamnes",
      "Kunna: Genomföra statusundersökning inklusive ögonbottenspegling som identifierar relevanta neurologiska sjukdomstecken",
      "Kunna: Med kunskap om neurologisk diagnostik genomföra basal utredning av patienter med vanliga neurologiska besvär",
      "Kunna: Neurologisk undersökning av vakenhetssänkt patient",
      "Kunna: Utifrån anamnes och status föra ett resonemang om anatomiska skadenivåer, diskutera differentialdiagnostik och ange en sannolik diagnos",
      "Kommentar: Studenten bör under läkarutbildningen ha genomfört och fått återkoppling på minst 10 anamnes- och statusundersökningar av patienter med såväl akuta som kroniska neurologiska tillstånd"
     ]
    },
    {
     "title": "Praktiska färdigheter och undersökningsmetoder: Lumbalpunktion",
     "items": [
      "Kunna: Indikationer och kontraindikationer för lumbalpunktion och genomförande",
      "Kunna: Beställa relevanta analyser av cerebrospinalvätska och tolka resultaten",
      "Kunna: Handläggning av huvudvärk efter lumbalpunktion",
      "Känna till: Tapptest, tryckmätning"
     ]
    },
    {
     "title": "Praktiska färdigheter och undersökningsmetoder: Klinisk neurofysiologi",
     "items": [
      "Kunna: Indikationer för elektroneurografi (ENeG), elektromyografi (EMG) och elektroencefalografi (EEG) och översiktligt förklara genomförandet"
     ]
    },
    {
     "title": "Praktiska färdigheter och undersökningsmetoder: Neuroradiologi",
     "items": [
      "Kunna: Indikationer för datortomografi (DT) och magnetresonanstomografi (MR) av nervsystemet och översiktligt förklara genomförandet",
      "Kunna: Identifiera relevanta neuroanatomiska strukturer samt tydliga patologiska fynd",
      "Känna till: Användning av intravenös kontrastförstärkning (DT och MR)",
      "Känna till: Metoder för undersökning av nervsystemets blodkärl, blodflöde och funktion"
     ]
    },
    {
     "title": "1. Cerebrovaskulära sjukdomar",
     "items": [
      "Kunna: Diagnostik och initial handläggning av transitorisk ischemisk attack (TIA) och stroke inklusive hjärninfarkt, intracerebral blödning och subaraknoidalblödning",
      "Kunna: Utredning, riskfaktorer, behandling inklusive sekundärprofylax vid TIA/hjärninfarkt och intracerebral blödning",
      "Känna till: Rehabilitering efter stroke. Stroke-enhetens arbetssätt",
      "Känna till: Diagnostik av sinustrombos, arteriell dissektion och kärlmissbildning",
      "Känna till: Behandlingsmetoder vid hjärninfarkt, intracerebral blödning, subaraknoidalblödning"
     ]
    },
    {
     "title": "2. Huvudvärk",
     "items": [
      "Kunna: Diagnostik och initial handläggning av akut huvudvärk",
      "Kunna: Diagnostik och handläggning av migrän, huvudvärk av spänningstyp och läkemedelsutlöst huvudvärk",
      "Kunna: Kliniska kännetecken på sekundär (symtomatisk) huvudvärk",
      "Känna till: Diagnostik och initial handläggning av patienter med temporalisarterit, Hortons huvudvärk och trigeminusneuralgi"
     ]
    },
    {
     "title": "3. Epilepsi",
     "items": [
      "Kunna: Akut handläggning av epileptiskt anfall",
      "Kunna: Initial handläggning av status epilepticus",
      "Kunna: Diagnostik och initial handläggning av nydebuterad epilepsi",
      "Kunna: Uppföljning och läkemedelsbehandling av okomplicerad epilepsi",
      "Känna till: Speciella problem vid epilepsi: hos fertila kvinnor, körkortsinnehav och psykosociala konsekvenser",
      "Känna till: Åtgärder vid ökad anfallsfrekvens och svårbehandlad epilepsi"
     ]
    },
    {
     "title": "4. Neurotrauma",
     "items": [
      "Kunna: Diagnostik och initial handläggning av skalltrauma och spinalt trauma inklusive åtgärder inför transport",
      "Kunna: Symtom vid intrakraniell tryckstegring, intrakraniella tryck-volymkurvan, inklusive initial handläggning vid hotande intrakraniell inklämning",
      "Kunna: Diagnostik av kroniskt subduralhematom",
      "Känna till: Neurokirurgisk behandling vid traumatisk skada på hjärna och ryggmärg",
      "Känna till: Åtgärder vid intrakraniell tryckstegring",
      "Känna till: Vanliga symtom efter skalltrauma"
     ]
    },
    {
     "title": "5. Hydrocefalus",
     "items": [
      "Kunna: Symtomutveckling och diagnostik av kommunicerande och icke-kommunicerande hydrocefalus",
      "Känna till: Handläggning av akut icke-kommunicerande hydrocefalus",
      "Känna till: Behandling med likvorshunt och shuntkomplikation"
     ]
    },
    {
     "title": "6. Vakenhetssänkning/medvetslöshet",
     "items": [
      "Kunna: Diagnostik och initial handläggning av vakenhetssänkning/medvetslöshet",
      "Kunna: Vanliga orsaker till och kliniska skillnader mellan metabolt och strukturellt betingad vakenhetssänkning",
      "Känna till: Principer för fastställande av total hjärninfarkt"
     ]
    },
    {
     "title": "7. Sömnstörningar",
     "items": [
      "Känna till: Diagnostik och handläggning av hypersomni och narkolepsi"
     ]
    },
    {
     "title": "8. Rörelsestörningar",
     "items": [
      "Kunna: Debutsymtom samt principer för diagnostik och handläggning vid Parkinsons sjukdom",
      "Kunna: Symtom vid och orsaker till parkinsonism",
      "Kunna: Diagnostik och handläggning av tremor",
      "Kunna: Diagnostik och handläggning av restless legs",
      "Känna till: Differentialdiagnoser till Parkinsons sjukdom",
      "Känna till: Problem vid avancerad Parkinsons sjukdom",
      "Känna till: Neurokirurgisk behandling vid rörelserubbningar",
      "Känna till: Initial handläggning av fokal dystoni och ataxi",
      "Känna till: Huntingtons sjukdom"
     ]
    },
    {
     "title": "9. Multipel skleros",
     "items": [
      "Kunna: Symtom och principer för diagnostik vid multipel skleros (MS)",
      "Kunna: Initial handläggning av MS vid akut försämring",
      "Känna till: Långsiktig behandling av MS",
      "Känna till: Differentialdiagnoser till MS"
     ]
    },
    {
     "title": "10. Demens och konfusion",
     "items": [
      "Kunna: Initial diagnostik och handläggning av demensliknande tillstånd",
      "Kunna: Diagnostik och handläggning av akuta konfusionstillstånd",
      "Känna till: Vidare utredning och behandling av demensliknande tillstånd",
      "Känna till: Diagnostik och handläggning av transitorisk global amnesi"
     ]
    },
    {
     "title": "11. Yrsel/balansstörning",
     "items": [
      "Kunna: Diagnostik och handläggning av akut och kronisk yrsel"
     ]
    },
    {
     "title": "12. Tumörer",
     "items": [
      "Kunna: Initial diagnostik och handläggning av primära och sekundära tumörer som engagerar nervsystemet",
      "Känna till: Klassifikation, tillväxtsätt, prognos och behandlingsprinciper för vanliga primära och sekundära tumörer som engagerar nervsystemet"
     ]
    },
    {
     "title": "13. Infektioner",
     "items": [
      "Kunna: Initial diagnostik och handläggning av encefalit, bakteriell och serös meningit, samt cerebral abscess",
      "Kunna: Diagnostik och handläggning av neuroborrelios"
     ]
    },
    {
     "title": "14. Ryggmärgssjukdomar och andra spinala tillstånd",
     "items": [
      "Kunna: Initial diagnostik och handläggning av akut respektive långsamt debuterande ryggmärgssjukdom, särskilt ryggmärgskompression",
      "Kunna: Skillnader mellan ryggmärgspåverkan och cauda equina syndrom",
      "Känna till: Orsaker till ryggmärgspåverkan",
      "Känna till: Diagnostik och betydelse av spasticitet och neurogen blåsrubbning",
      "Känna till: Diagnostik och handläggning vid radikulopati"
     ]
    },
    {
     "title": "15. Neuromuskulära sjukdomar",
     "items": [
      "Kunna: Diagnostik och handläggning av polyneuropati",
      "Kunna: Initial diagnostik och handläggning av Guillain-Barrés syndrom och myastenia gravis inklusive andningssvikt vid neuromuskulär sjukdom",
      "Kunna: Initial diagnostik och handläggning av perifer facialispares och vanliga mononeuropatier",
      "Kunna: Identifiera symtombilden vid amyotrofisk lateralskleros",
      "Känna till: Principer för fortsatt handläggning vid Guillain-Barrés syndrom och myastenia gravis",
      "Känna till: Orsaker till perifer nervpåverkan inklusive kranialnerver",
      "Känna till: Symtombild vid förvärvade och hereditära myopatier och polymyosit",
      "Känna till: Diagnostik och handläggning av amyotrofisk lateralskleros",
      "Känna till: Diagnostik av plexusskada"
     ]
    },
    {
     "title": "16. Neuropatisk smärta",
     "items": [
      "Kunna: Diagnostik och handläggningsprinciper för neuropatisk smärta"
     ]
    },
    {
     "title": "17. Funktionella tillstånd med neurologisk symtombild",
     "items": [
      "Känna till: Principer för diagnostik och handläggning inklusive förhållningssätt vid funktionella tillstånd och dissociativa syndrom med neurologisk symtombild"
     ]
    }
   ],
   "src": "Nationella lärandemål i neurologi slutlig.2022-01-28.pdf"
  },
  {
   "spec": "psyk",
   "name": "Psykiatri",
   "kun": [],
   "fard": [],
   "vard": [],
   "lit": [],
   "sections": [
    {
     "title": "Kunskap och förståelse",
     "items": [
      "Psykiatri som ett ämne där två kunskapsområden integreras, ett biomedicinskt och ett psykologiskt-socialt.",
      "Farmakologiska och hjärnstimulerande behandlingar inom psykiatrin",
      "Samtidig tillämpning och integrering av dessa områden.",
      "Det psykiatriska teamets arbetssätt.",
      "Vilka psykiatriska sjukdomar som kan skötas av primärvården och vilka som sköts på specialistnivå.",
      "Att ålders-, köns- och kulturella faktorer kan påverka symtom och behandling.",
      "Lagar och förordningar som reglerar det psykiatriska området"
     ]
    },
    {
     "title": "Färdigheter och förmåga",
     "items": [
      "Beskriva och bedöma ett psykiatriskt status.",
      "Etablera en förtroendefull och empatisk samtalskontakt med personer med psykisk sjukdom.",
      "Bemöta och bedöma patienter med olika psykiatriska symtombilder.",
      "Behärska grunderna i krisbearbetning och genomföra stödsamtal.",
      "Diagnosticera enligt aktuellt DSM-system och ge förslag på utrednings- och behandlingsplan."
     ]
    },
    {
     "title": "Värderingsförmåga och förhållningssätt",
     "items": [
      "Informera patienten och föra en diskussion med beaktande av patientens sociala nätverk.",
      "Med patienten på förståeligt sätt diskutera orsaksmekanismer bakom sjukdomen.",
      "För patienten på ett förståeligt sätt förklara verkningsmekanismer vid farmakologisk behandling.",
      "Tillämpa ett professionellt förhållningssätt.",
      "Tillämpa samarbetet över medicinska disciplingränser, med kommunala vårdinstanser samt med olika stöd-, patient-, anhörig- och frivilligorganisationer inom det psykiatriska området.",
      "Självständigt handlägga patienter med avseende på de områden som anges i bilagan (nedan)."
     ]
    },
    {
     "title": "Bilaga 1. Arbete inom psykiatrisk verksamhet",
     "items": [
      "Kunna: Förstå och aktivt använda grundläggande psykiatrisk terminologi",
      "Kunna: Vilka olika yrkesgrupper som har en funktion i psykiatrisk verksamhet, samt deras roll i det psykiatriska teamet, med särskild tonvikt på läkarens roll i detta sammanhang"
     ]
    },
    {
     "title": "Bilaga 2. Lagar och förordningar",
     "items": [
      "Kunna: Indikationer för vård enligt LPT samt den praktiska tillämpningen",
      "Kunna: Behörighet för användande av LPT",
      "Kunna: Tillämpningen av offentlighets- och sekretesslagen, socialtjänstlagen, LVM, LVU och LSS inom psykiatrin",
      "Känna till: Läkarens anmälningsskyldighet gällande körkort och vapeninnehav",
      "Känna till: Användandet av LRV i kliniken"
     ]
    },
    {
     "title": "Bilaga 3. Suicidologi",
     "items": [
      "Kunna: Identifiera riskpersoner för suicid och göra en strukturerad suicidriskbedömning",
      "Känna till: Relevanta begrepp inom suicidologi",
      "Känna till: Epidemiologiska data",
      "Känna till: De viktigaste aspekterna vid uppföljning efter suicidförsök"
     ]
    },
    {
     "title": "Bilaga 4. Utvecklingsrelaterade funktionsavvikelser",
     "items": [
      "Kunna: Screena för misstänkt ADHD, Tourettes syndrom och autism hos vuxna",
      "Känna till: Behandling av patienter med dessa tillstånd"
     ]
    },
    {
     "title": "Bilaga 5. Schizofrenispektrumsyndrom och andra psykoser",
     "items": [
      "Kunna: Diagnostisera och initialt handlägga patienter med schizofreni och schizoaffektiva syndrom",
      "Kunna: Identifiera och initialt handlägga patienter med kortvarig psykos, vanföreställningssyndrom, cykloida syndrom och psykotiska tillstånd vid somatisk sjukdom",
      "Känna till: Sjukdomens behandling och prognos",
      "Känna till: Epidemiologiska data"
     ]
    },
    {
     "title": "Bilaga 6. Förstämningssjukdomar",
     "items": [
      "Kunna: Diagnostisera och behandla patienter med okomplicerade unipolära förstämningssyndrom",
      "Kunna: Diagnostisera och initialt handlägga patienter med bipolära syndrom",
      "Känna till: Behandlingsalternativ vid terapisvikt",
      "Känna till: Behandlingen av patienter med bipolära syndrom",
      "Känna till: Litiumbehandling, ECT, TMS och psykoterapeutisk behandling",
      "Känna till: Epidemiologiska data"
     ]
    },
    {
     "title": "Bilaga 7. Ångest-, tvång-, trauma- och stressrelaterade syndrom",
     "items": [
      "Kunna: Diagnostisera och behandla patienter med akuta kristillstånd",
      "Kunna: Diagnostisera och behandla patienter med primära och okomplicerade ångest-, tvång-, trauma- och stressrelaterade syndrom",
      "Känna till: Behandlingsalternativ för patienter med komplicerade ångesttillstånd",
      "Känna till: Epidemiologiska data"
     ]
    },
    {
     "title": "Bilaga 8. Kroppssyndrom och relaterade syndrom",
     "items": [
      "Kunna: Identifiera och initialt handlägga kroppssyndrom och relaterade syndrom",
      "Känna till: Epidemiologiska data"
     ]
    },
    {
     "title": "Bilaga 9. Ätstörningar",
     "items": [
      "Kunna: Diagnostisera och initialt handlägga patienter med lättare ätstörningar",
      "Känna till: Psykiatrins resurser och principer för behandling av patienter med svårare ätstörningar"
     ]
    },
    {
     "title": "Bilaga 10. Sömnstörningar",
     "items": [
      "Kunna: Diagnostisera och handlägga patienter med vanliga sömnstörningar"
     ]
    },
    {
     "title": "Bilaga 11. Substanssyndrom",
     "items": [
      "Kunna: Diagnostik och behandling av alkoholbrukssyndrom, identifikation av riskbruk av alkohol",
      "Kunna: Symptom och behandling vid alkoholabstinens",
      "Kunna: Diagnostik av och kännedom om behandling av opioidbrukssyndrom",
      "Kunna: Nedtrappning vid lindrigt opioidbrukssyndrom",
      "Kunna: Nedtrappning vid benzodiazepinbrukssyndrom",
      "Känna till: Övriga aktuella psykoaktiva substanser"
     ]
    },
    {
     "title": "Bilaga 12. Personlighetssyndrom",
     "items": [
      "Kunna: Känna igen patienter med allvarligt personlighetssyndrom",
      "Känna till: Hur ett personlighetssyndrom hos en patient influerar symtombild och behandling av dennes psykiska sjukdom",
      "Känna till: Vikten av ett adekvat förhållningssätt mot patienter med personlighetssyndrom"
     ]
    },
    {
     "title": "Bilaga 13. Somatiska sjukdomar och läkemedel som kan ge psykiska symtom",
     "items": [
      "Känna till: Somatiska sjukdomar och läkemedel som kan ge psykiska symtom"
     ]
    },
    {
     "title": "Bilaga 14. Hot/aggressivt beteende/våld",
     "items": [
      "Kunna: Risksituationer och varningssignaler för aggressivt beteende hos psykiatriska patienter",
      "Kunna: Den aktuella handläggningen av situationer med hot/aggressivt beteende/manifest våld hos psykiatrisk patient"
     ]
    },
    {
     "title": "Bilaga 15. Äldrepsykiatri",
     "items": [
      "Kunna: Hur de vanliga psykiatriska störningarna kan ta sig uttryck hos äldre",
      "Kunna: Initialt handlägga vanliga psykiatriska störningar hos äldre",
      "Kunna: Principer för psykofarmakologisk behandling av äldre"
     ]
    },
    {
     "title": "Bilaga 16. Psykoterapi",
     "items": [
      "Känna till: De vanligaste psykoterapiformerna och deras huvudsakliga nyckelbegrepp och särdrag"
     ]
    },
    {
     "title": "Bilaga 17. Transkulturell psykiatri",
     "items": [
      "Känna till: Betydelsen av kulturella faktorer för diagnostik och behandling av patienter med psykiska besvär"
     ]
    }
   ],
   "src": "Ämnesguide - Psykiatri 210125.pdf och Ämnesguide - Psykiatri bilaga 210125.pdf"
  },
  {
   "spec": "ogon",
   "name": "Ögonsjukdomar",
   "kun": [],
   "fard": [],
   "vard": [],
   "lit": [],
   "sections": [
    {
     "title": "Förkunskaper",
     "items": [
      "Ögats, orbitas, kranialnervernas och synbanornas uppbyggnad och funktion",
      "Diagnostiska tekniker, t.ex. ultraljudsundersökning, datortomografi, MRI",
      "Mikrobiologi, virologi, immunologi",
      "Generella medicinska sjukdomar, speciellt reumatiska, endokrina och cirkulatoriska sjukdomstillstånd",
      "Vanliga ögonfarmaka"
     ]
    },
    {
     "title": "Färdigheter och förmåga",
     "items": [
      "Värdera och primärt handlägga patienter med rött öga, synstörning eller ögonskada",
      "Undersöka och värdera synfunktionen avseende synskärpa, synfält, samsyn/diplopi",
      "Undersöka och bedöma ögats yttre segment, adnexa, pupill, brytande medier och synnervspapill",
      "Genomföra en klinisk undersökning av en patient med syn- eller ögonbesvär innefattande: framtagande och värdering av anamnestiska uppgifter; differentialdiagnostiska överväganden med ledning av anamnes och statusfynd; sannolik diagnos och kompletterande undersökning; adekvata beslut om fortsatt handläggning (val av vårdnivå, tidsram); adekvata råd och förskriva adekvat terapi",
      "Göra en självständig bedömning av relevant vetenskaplig dokumentation",
      "Visa förmåga till samarbete med andra yrkesgrupper inom ögonsjukvården och optiker"
     ]
    },
    {
     "title": "Värderingsförmåga och förhållningssätt",
     "items": [
      "Informera patienten och föra en diskussion med beaktande av patientens sociala situation och nätverk",
      "Förklara patofysiologiska mekanismer och förlopp och deras betydelse för vald terapi",
      "Förstå ekonomiska konsekvenser av kliniskt handlande",
      "Tillämpa ett etiskt förhållningssätt"
     ]
    },
    {
     "title": "Kunskapsnivåer (SOLO)",
     "items": [
      "S5: Överförbara kunskaper (teoretisera, generalisera, reflektera)",
      "S4: Relaterade kunskaper (jämföra, förklara, analysera, relatera). Du ska förvärva kunskap om etiologi, patofysiologi, symptomatologi och behandling av dessa tillstånd så att du självständigt kan handlägga dessa samt vid behov remittera på ett adekvat sätt.",
      "S3: Flerfaldiga kunskaper (räkna upp, beskriva, lista). Du ska känna till följande tillstånd så pass väl att du kan undersöka patienten och misstänka diagnosen samt vid behov remittera på ett adekvat sätt.",
      "S2: Enkla kunskaper (känna till, identifiera). Du ska kortfattat kunna redogöra för dessa tillstånd."
     ]
    },
    {
     "title": "Situation/symptom: Rött öga",
     "items": [
      "Blefarit – S4",
      "Hordeolum – S4",
      "Chalazion – S4",
      "Hyposfagma – S4",
      "Konjunktivit – S4",
      "Episklerit – S4",
      "Zoster oftalmikus – S4",
      "Akut glaukom – S4",
      "Iridocyklit – S3",
      "Keratit – S3",
      "Trikiasis – S3",
      "Sklerit – S2"
     ]
    },
    {
     "title": "Situation/symptom: Synnedsättning, hastig",
     "items": [
      "Jättecellsarterit – S4",
      "Stroke/TIA – S4",
      "Amaurosis fugax – S4",
      "Akut glaukom – S4",
      "Amotio – S3",
      "Endoftalmit – S3",
      "Glaskroppsblödning – S3",
      "Makulablödning/ödem – S3",
      "Optikusneurit – S3",
      "Retinal vaskulär ocklusion – S3",
      "Bakre uveit – S2",
      "Ischemisk optikusneuropati – S2"
     ]
    },
    {
     "title": "Situation/symptom: Synnedsättning, långsam",
     "items": [
      "Katarakt – S3",
      "Kroniskt glaukom – S3",
      "Refraktionsproblem/presbyopi – S3",
      "Synbanekompression – S3",
      "Åldersrelaterad makuladegeneration – S3",
      "Hornhinneödem – S2",
      "Keratokonus – S2",
      "Ärftliga retinala degenerationer – S2"
     ]
    },
    {
     "title": "Situation/symptom: Diplopi",
     "items": [
      "Ögonmuskelpares – S3",
      "Internukleär oftalmoplegi – S2",
      "Monokulär diplopi – S3"
     ]
    },
    {
     "title": "Situation/symptom: Synfenomen",
     "items": [
      "Migrän – S4",
      "Synfältsbortfall – S4",
      "Grumlingar i synfältet: Glaskroppsavlossning – S3",
      "Krokseende – S3",
      "Synnedsättning-funktionell synpåverkan – S2"
     ]
    },
    {
     "title": "Situation/symptom: Huvudvärk",
     "items": [
      "Migrän – S4",
      "Spänningshuvudvärk – S4",
      "Astenopi – S3"
     ]
    },
    {
     "title": "Situation/symptom: Skelning / barnoftalmologi",
     "items": [
      "Vit pupill – S4",
      "Refraktionsfel – S3",
      "Synutveckling och amblyopi – S3",
      "Tropi/fori – S3",
      "Misshandel/skakvåld – S3",
      "Prematuritetskomplikationer – S2"
     ]
    },
    {
     "title": "Situation/symptom: Ögonengagemang vid annan sjukdom",
     "items": [
      "Jättecellsarterit – S4",
      "Stroke/TIA – S4",
      "Facialispares – S4",
      "Förhöjt intrakraniellt tryck – S4",
      "Arteriell hypertension – S3",
      "Diabetes – S3",
      "Intrakraniell process – S3",
      "Thyroideasjukdom – S3"
     ]
    },
    {
     "title": "Situation/symptom: Trauma",
     "items": [
      "Kemisk skada – S4",
      "Korneal erosion – S4",
      "Svetsblänk – S4",
      "Ytlig främmande kropp – S4",
      "Blow-out – S3",
      "Bulbkontusion – S3",
      "Penetration/perforation – S3",
      "Sårskada i ögonlock/tårvägar – S3"
     ]
    },
    {
     "title": "Situation/symptom: Tårflödesstörning",
     "items": [
      "Dakryocystit – S4",
      "Torra ögon – S4",
      "Ektropion/entropion – S3",
      "Tårvägsstenos – S3"
     ]
    },
    {
     "title": "Situation/symptom: Läkemedel / droger",
     "items": [
      "Läkemedel med ögonbiverkningar – S3",
      "Ögonläkemedel med systembiverkningar – S3",
      "Alkoholskador – S2"
     ]
    },
    {
     "title": "Situation/symptom: Förändrat utseende",
     "items": [
      "Pingueculum – S4",
      "Pterygium – S4",
      "Chalazion – S4",
      "Anisokori – S3",
      "Dermatochalasis – S3",
      "Exoftalmus – S3",
      "Ptos – S3",
      "Ögonlocksretraktion – S3"
     ]
    },
    {
     "title": "Situation/symptom: Social oftalmologi",
     "items": [
      "Synkrav för körkort – S4",
      "Misshandel – S3",
      "Synrehabilitering – S2",
      "Ögonsjukdomars epidemiologi – S2",
      "Globalt perspektiv på ögonsjukdomar – S2"
     ]
    },
    {
     "title": "Situation/symptom: Tumörer",
     "items": [
      "Ögonlockstumörer – S3",
      "Intraokulära tumörer – S2"
     ]
    },
    {
     "title": "Praktiska färdighetsmål, nivå M4 (kunna utföra självständigt)",
     "items": [
      "1 Applicering av ögondroppar/ögonsalva",
      "2 Spaltlampemikroskopi inkl bedömning av inre retning",
      "3 Evertering ögonlock",
      "4 Fluoresceinfärgning",
      "5 Ögonsköljning",
      "6 Palpation av bulben för att kunna upptäcka ett akut glaukom",
      "7 Motilitetsundersökning",
      "8 Undersökning av pupillreaktion för ljus direkt och indirekt, inklusive swinging flashlight test",
      "9 Synfältsundersökning med konfrontation",
      "10 Undersökning av synnervspapillen med direkt oftalmoskopi",
      "11 Undersökning i genomfallande ljus",
      "12 Visusundersökning hos vuxna med egna glasögon samt med användning av stenopeiskt hål",
      "13 Yttre inspektion av ögat i olika blickriktningar",
      "14 Extraktion av en ytlig främmande kropp utanför optiska zonen"
     ]
    },
    {
     "title": "Praktiska färdighetsmål, nivå M3 (kunna visa hur man utför)",
     "items": [
      "15 Covertest för att diagnosticera skelning",
      "16 Tonometri",
      "17 Refraktionering"
     ]
    },
    {
     "title": "Praktiska färdighetsmål, nivå M2 (veta hur man utför)",
     "items": [
      "18 Färgsinnesundersökning",
      "19 Katarakt-operation",
      "20 Kontaktlinsuttagning",
      "21 Ledsagning av synskadad patient",
      "22 Perimetri",
      "23 Synprövning på barn",
      "24 Tolkning av ett glasögonrecept"
     ]
    }
   ],
   "src": "Ämnesguide Ögon rev 2024.pdf (nationella lärandemål inom oftalmologi, reviderade 2024-04-25)"
  },
  {
   "spec": "onh",
   "name": "Öron-, näs- och halssjukdomar",
   "kun": [],
   "fard": [],
   "vard": [],
   "lit": [],
   "sections": [
    {
     "title": "Anatomi",
     "items": [
      "Anatomi inom ÖNH"
     ]
    },
    {
     "title": "Örats sjukdomar: Kunskap",
     "items": [
      "Differentialdiagnostik vid otalgi",
      "Akut mediaotit och otit recidiv/terapisvikt",
      "Sekretorisk otit",
      "Begreppet ”otitbenägna barn”",
      "Extern otit/perikondrit",
      "Kronisk otit",
      "Mastoidit/otogen meningit",
      "Traumatisk trumhinneperforation",
      "Zoster oticus",
      "Preauriculära fistlar, utstående öron"
     ]
    },
    {
     "title": "Örats sjukdomar: Förståelse, färdigheter och attityder",
     "items": [
      "Förståelse för de funktionshinder som dessa sjukdomar kan ge",
      "Normalförlopp och följdsjukdomar",
      "Förstå indikationen för paracentes och plaströr",
      "Förstå indikationen för sanerande och/eller rekonstruktiv mellanörekirurgi",
      "Etisk analys av förväntade hälsovinster eller livskvalitet mot den risk som anestesi och kirurgi innebär för patienten",
      "Färdighet: Kunna utföra ett fullständigt öron-, näs- och halsstatus",
      "Färdighet: Användning av öronmikroskopet",
      "Färdighet: Kunna använda öron- och nässug",
      "Färdighet: Kunna spola ut en vaxpropp och kunna lägga en tamponad i hörselgången",
      "Attityd: Vid samtliga konsultationer vara lyhörd för patientens problem"
     ]
    },
    {
     "title": "Audiologi och otoneurologi: Kunskap",
     "items": [
      "Definition av ledningshinder respektive sensorineural hörselnedsättning",
      "Definition av retrocochleära skador",
      "Presbyacusis. Bullerskador, bullerprofylax",
      "Asymmetrisk hörselnedsättning",
      "Hereditär hörselnedsättning",
      "Tinnitus",
      "Sudden deafness. Ototoxiska farmaka",
      "Hörhjälpmedel",
      "Otogen yrsel versus central yrsel",
      "Benign lägesyrsel. Vestibularisneuronit",
      "Mb Ménière. Whiplash/nackyrsel",
      "Behandling av yrsel",
      "Skilja mellan perifer och central facialispares",
      "Olika orsaker till perifer facialispares",
      "Bells pares. Behandling vid facialispares"
     ]
    },
    {
     "title": "Audiologi och otoneurologi: Förståelse, färdigheter och attityder",
     "items": [
      "Förståelse för vad det innebär att vara döv/hörselskadad som barn och vuxen",
      "God förståelse för vilka möjligheter som finns att utreda en hörselskada, speciellt på barn",
      "Utredningsgången vid yrsel",
      "Färdighet: Bedöma ett tonaudiogram, utföra stämgaffelprov enligt Weber och Rinne, samt utföra ett otoneurologstatus",
      "Attityd: Att bedöma funktionshinder i förhållande till varje enskild person och dennes omständigheter"
     ]
    },
    {
     "title": "Näsans och bihålornas sjukdomar: Kunskap",
     "items": [
      "Differentialdiagnostik vid nästäppa, rinnande näsa och luktrubbningar",
      "Allergisk, vasomotorisk och kronisk/atrofisk rinit",
      "Medikamentell rinit",
      "Främre och bakre näsblödning",
      "Septumdeviation",
      "Maxillar- och frontalsinuit, samt etmoidit",
      "Näspolyper",
      "Ansikts- och skallbasfrakturer",
      "Mjukdelsskador i ansikte, munhåla och svalg"
     ]
    },
    {
     "title": "Näsans och bihålornas sjukdomar: Förståelse, färdigheter och attityder",
     "items": [
      "Förståelse för bakomliggande patofysiologiska förhållanden",
      "Förståelse för de vanligaste kirurgiska ingreppen (punktion/spolning av bihålor, septumplastik/evulsio/FES)",
      "Förståelse för när röntgenologisk utredning är indicerad",
      "Färdighet: Utföra fiberskopi",
      "Färdighet: Stilla främre näsblödning",
      "Attityd: För varje patient bedöma dennes besvär i förhållande till tillgängliga medicinska och kirurgiska åtgärder"
     ]
    },
    {
     "title": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar: Kunskap",
     "items": [
      "Candida. Leukoplakier. Systemsjukdomars orala manifestationer",
      "Muntorrhet",
      "Tungband",
      "Munbottenflegmone",
      "Differentialdiagnostik vid symtomen halsont och foetor ex ore",
      "Tonsillit/peritonsillit. Faryngit",
      "Adenoid- och tonsillhyperplasi",
      "Sömnapnésyndrom/snarkning",
      "Spottsten. Sialoadenit. Purulent parotit",
      "Differentialdiagnostik vid dysfagi",
      "Refluxsjukdom. Esofagit",
      "Strikturer och divertiklar i esofagus",
      "Syra- och alkaliskador respektive främmande kropp i munhåla, svalg och matstrupe"
     ]
    },
    {
     "title": "Munhålans, svalgets, matstrupens och spottkörtlarnas sjukdomar: Förståelse, färdighet och attityd",
     "items": [
      "Kunna förstå bakomliggande orsaker och värdera lämplig terapi i förhållande till patientens ålder/kön",
      "Färdighet: Användande av fiberlaryngoskop för näs- och svalgundersökning",
      "Attityd: Etisk analys över risk/nytta vid kirurgi"
     ]
    },
    {
     "title": "Struphuvudets och trakeas sjukdomar. Röstrubbningar: Kunskap",
     "items": [
      "Primärt omhändertagande vid högt andningshinder",
      "Främmande kropp i larynx/trakea/bronker",
      "Pseudokrupp. Akut epiglottit. Akut laryngit",
      "Differentialdiagnostik vid heshet",
      "Kronisk laryngit",
      "Stämbandspares",
      "Fonasteni",
      "Trakeotomi/koniotomi",
      "Grundläggande kunskap om trakealkanyler"
     ]
    },
    {
     "title": "Struphuvudets och trakeas sjukdomar. Röstrubbningar: Förståelse, färdighet och attityd",
     "items": [
      "Kunna värdera grad av andningshinder och behov av akuta åtgärder",
      "Färdighet: Undersökning av larynx med fiberlaryngoskop",
      "Färdighet: Heimlichs manöver",
      "Attityd: Säkerhetstänkande"
     ]
    },
    {
     "title": "Tumörsjukdomar: Kunskap",
     "items": [
      "Manifestationer av maligna tumörer inom huvud och hals (skivepitelcancer, maligna spottkörteltumörer)",
      "Principerna för utredning och behandling av tumörfall",
      "Samarbetet runt patienter med tumörsjukdom",
      "Prognostiska faktorer",
      "Utredning av knuta på halsen",
      "Benigna tumörer, pleomorft adenom och angiofibrom",
      "Lateral och medial halscysta/fistel",
      "Atypiska mykobakterier"
     ]
    },
    {
     "title": "Tumörsjukdomar: Förståelse och attityder",
     "items": [
      "Livskvalitetsaspekter på tumörbehandling inom ÖNH"
     ]
    }
   ],
   "src": "Ämnesguide ÖNH.pdf (Core Curriculum, ÖNH, huvudkursen Termin 9)"
  },
  {
   "spec": "farm",
   "name": "Klinisk farmakologi",
   "kun": [
    "Förstå i vilka sammanhang man kan ha nytta av TDM (läkemedelskoncentrationsbestämning)",
    "Känna till definitionen av TDM, relevanta farmakokinetiska parametrar inom absorption, distribution, metabolism och elimination som behövs för rationell användning av TDM och tolkning av resultat (snävt terapeutiskt index, terapisvikt, oväntade biverkningar, interaktioner)",
    "Känna till principer för TDM och kunna uppge viktiga läkemedel som kan behöva rutinmässig kontroll av serumkoncentration",
    "Kunna lösa enkla farmakokinetiska problemställningar som stöd för rationell användning av TDM, så som ändringar i grad av proteinbindning till läkemedlet, beräkning av steady state-koncentrationer, laddningsdoser, underhållsdoser, halveringstider, läkemedelskoncentrationskurvor, dalvärden, toppvärden",
    "Känna till optimal tidpunkt för provtagning och provtagningsintervaller för TDM",
    "Ha kännedom om tillämpningar, begrepp (kostnadseffektivitet, QALY, EQ-5D, ICER, tröskelvärde/WTP) och grundläggande metoder (budgetpåverkansanalys, Markov-modeller, känslighetsanalyser) inom hälsoekonomi och hur detta påverkar användning av läkemedel",
    "Kunna redogöra för den etiska plattformen för prioriteringar inom hälso- och sjukvård",
    "Kunna redogöra för samband mellan finansiering och resursfördelning inom hälso- och sjukvård, samt skillnaden mellan direkta och indirekta kostnader",
    "Kunna redogöra för förutsättningar och begränsningar i olika beräknings- och utvärderingsmodeller inom hälsoekonomi och skillnader mellan CMA, CEA och CUA när det gäller effektmått och resultatpresentation"
   ],
   "fard": [
    "Kunna analysera och värdera relevanta TDM-data och kunna sätta dem i klinisk kontext, inte bara jämföra analysresultat med aktuella terapeutiska intervaller",
    "Kunna identifiera och tolka olika källor till variabilitet i läkemedelskoncentrationsmätningar, både preanalytiska, analytiska och biologiska, för att kunna fatta rationella beslut kring individuell läkemedelsdosering",
    "Kunna välja mellan grundläggande metoder inom TDM och hur dessa kan påverka provtagningsrutiner och användning av TDM för optimal dosering av läkemedel, däribland psykotropa läkemedel",
    "Kunna identifiera och analysera problem, kostnader och effekter i samband med olika hälsoekonomiska beräkningar",
    "Kunna välja ut och använda lämpliga modeller för beräkningar och utvärderingar inom hälsoekonomi",
    "Kunna tolka resultaten av en hälsoekonomisk utvärdering",
    "Kunna avläsa ICER-värden inom kostnadseffektivitetsplanet och skilja mellan ”dominant” och ”dominerad”",
    "Kunna tolka känslighetsanalyser för hantering av osäkerheter"
   ],
   "vard": [
    "Vara medveten om kostnader för läkemedelsanalyser och vikten av optimering av provtagningsstrategier och provtagningstidpunkter för att minimera pre- och postanalytisk variation",
    "Kunna redogöra för styrkor och begränsningar av TDM i specifika kliniska situationer",
    "Kunna visa ett kritiskt förhållningssätt och kunna identifiera och värdera hälsoekonomisk information om läkemedel",
    "Kunna identifiera och diskutera etiska problem inom hälsoekonomi",
    "Förstå syftet med hälsoekonomiska analyser och vikten av sjukvårds- eller samhällsperspektivet vid hälsoekonomiska analyser"
   ],
   "lit": [
    "Ritter JM, Flower RJ, Henderson G, Kong Y Loke Y, MacEwan D, Robinson E, Fullerton J. Rang and Dale’s Pharmacology. Elsevier; 10th edition. 2024. Farmakokinetik, kap 11, sid 150–159 (obligatorisk)",
    "Ghiculescu RA et al. Therapeutic drug monitoring: which drugs, why, when and how to do it. Aust Prescr 2008;31:42–4 (rekommenderad)",
    "Wadhwa RR, Cascella M. Steady State Concentration. StatPearls (rekommenderad)",
    "Läkemedelsboken, Hälsoekonomiska utvärderingar av läkemedel (rekommenderad)",
    "SBU, Utvärdering av insatser i hälso- och sjukvården och socialtjänsten: en metodbok, 2023, kapitel 11: Ekonomiska aspekter (rekommenderad)",
    "Fördjupning TDM: Nichols JH, Principles and Practice of Therapeutic Drug Monitoring; Sayers J, Friedman M, How Clinicians Use Therapeutic Drug Monitoring (Laboratory Medicine 28(8):524–528, 1997); Ye Z-K et al., Guidelines for Therapeutic Drug Monitoring of Vancomycin: A Systematic Review (PLoS ONE 9(6): e99044, 2014)",
    "Fördjupning hälsoekonomi: SKR, Regionernas samverkansmodell för läkemedel; TLV, Hälsoekonomi"
   ],
   "src": "Ämnesguide Klinisk Farmakologi_T9_VT2025.pdf och Studieguide för Klinisk Farmakologi termin 9_VT2025.pdf"
  },
  {
   "spec": "bfm",
   "name": "Bild- och funktionsmedicin",
   "kun": [
    "Metodval, möjligheter och begränsningar för utredning och handläggning av sjukdomar i nervsystemet (kurslitteratur och seminarium; examination: praktiskt prov)",
    "Känna till indikationer och metodval vid akuta infektioner och trauma inom ÖNH-området (kurslitteratur och seminarium; examination: praktiskt prov)",
    "Känna till neuroradiologiska interventioner och indikationer för dessa (kurslitteratur och seminarium; examination: praktiskt prov)",
    "Kursportfölj (obligatoriskt moment): Seminarium Neuroradiologi: Akuta tillstånd",
    "Kursportfölj (obligatoriskt moment): Seminarium Neuroradiologi: Tumör, inflammation och ÖNH"
   ],
   "fard": [],
   "vard": [],
   "lit": [
    "ESR e-book for Undergraduate Education in Radiology (obligatorisk)",
    "Learning Radiology, Recognizing the Basics, Fifth Edition. William Herring, Saunders 2023. ISBN 9780323878173 (obligatorisk)",
    "Akut radiologi. Seppo Koskinen & Roberto Blanco Sequeiros, Liber 2017. ISBN 9789147113620 (fördjupning)",
    "Nuklearmedicin. Sven-Ola Hietala & Katrine Åhlström-Riklund, Studentlitteratur 2013. ISBN 9789144067537 (fördjupning)",
    "Diagnostic Radiology Physics, A Handbook for Teachers and Students. IAEA 2014 (fördjupning)",
    "Radiologi, andra upplagan. Lennart Blomqvist och Sophia Zakrisson, Studentlitteratur 2022. ISBN 9789144129013 (fördjupning)",
    "Svensk förening för Medicinsk Radiologi: uppdaterade dokument om kontrastmedel (fördjupning)",
    "Internetmedicin Radiologi, Radiology assistant, Radiopaedia (fördjupning)"
   ],
   "src": "Ämnes- och studieguide BFM from VT 2025.pdf (s. 8) och Litteratur BFM LP Version 2023-11-30.pdf"
  }
 ]
};
