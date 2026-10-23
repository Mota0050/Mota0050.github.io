/* Termin 6 · OSCE. Vanlig JSON: ändra texten mellan citattecknen, och behåll kommatecken och klamrar. */
REMISSNISSEN.data["t6"].os={
 "topics": [
  {
   "id": "hlr",
   "name": "Basal HLR",
   "synonyms": [
    "Basal HLR",
    "HLR"
   ],
   "specialty": "Medicin",
   "kind": "stationstyp",
   "n_sessions": 14,
   "n_questions": 14,
   "n_years": 4,
   "pct": 100.0,
   "category": "karnan",
   "akut": true,
   "exams": [
    "VT23",
    "oVT23",
    "HT23",
    "oHT23",
    "VT24",
    "oVT24",
    "HT24",
    "oHT24",
    "VT25",
    "oVT25",
    "HT25",
    "oHT25",
    "VT26",
    "oVT26"
   ],
   "card": {
    "fk": "Strukturerad basal hjärt-lungräddning på docka där dockans utrustning mäter kvaliteten. Stationen finns med på alla 14 tillfällen och är därmed den mest förutsägbara uppgiften.",
    "v": [
     "Ruska + ropa",
     "Larm/hjälp",
     "Luftväg öppen",
     "Titta-lyssna-känn max 10 s",
     "30 kompressioner (5–6 cm, 100–120/min)",
     "2 inblåsningar",
     "Fortsätt 30:2 och prata högt"
    ],
    "k": "Dörrinformationen beskriver en person som hittas livlös på golvet i en vårdsal (patienten är bekräftat covid-negativ). Uppgiften är att utföra basal HLR. Tid: 6 minuter.",
    "d": "Livlös person utan normal andning = misstänkt hjärtstopp tills motsatsen bevisats.",
    "b": "Basal HLR 30:2 tills hjärtstartare/team tar över; AED så fort den finns.",
    "m": "Larma, även om rummet verkar tomt (0,5 p). Håll luftvägen öppen under hela andningskontrollen (1,5 p). Rätt frekvens 100–120/min och minst 80 % godkända kompressioner. Livshotande tillstånd. Fel eller fördröjning påverkar överlevnad."
   },
   "related": [],
   "fam": "Basal HLR"
  },
  {
   "id": "infektion",
   "name": "Infektion: handläggning, rond och information",
   "synonyms": [
    "Asymtomatisk bakteriuri",
    "ESBL",
    "Gastroenterit/sepsis",
    "Handläggning av diarré efter utlandsresa",
    "Handläggning av legionellapneumoni",
    "Handläggning av pneumoni",
    "Handläggning av rosfeber",
    "Legionella",
    "Medvetandesänkt infektionspatient",
    "Meningit/encefalit",
    "Pneumoni",
    "Pneumoni – CRB-65, provtagning och antibiotika",
    "Positiv blododling – ESBL",
    "Positiv urinodling hos äldre med demens",
    "Resediarré",
    "Rond av patient med kräkning och feber",
    "Rosfeber"
   ],
   "specialty": "Infektion",
   "kind": "stationstyp",
   "n_sessions": 10,
   "n_questions": 10,
   "n_years": 3,
   "pct": 71.4,
   "category": "karnan",
   "akut": true,
   "exams": [
    "HT23",
    "oHT23",
    "oVT24",
    "HT24",
    "oHT24",
    "VT25",
    "HT25",
    "oHT25",
    "VT26",
    "oVT26"
   ],
   "card": {
    "fk": "Ta riktad anamnes och handlägga infektionspatient (pneumoni, rosfeber, legionella, diarré, positiv odling, ESBL) och informera.",
    "v": [
     "CRB-65",
     "Blododlingar ×2 före antibiotika",
     "Allergi: fråga",
     "Asymtomatisk bakteriuri behandlas ej",
     "Enkelrum vid MRB"
    ],
    "k": "Du träffar en infektionspatient, tolkar prover/odlingar, ordinerar provtagning och antibiotika och informerar patienten eller en sjuksköterska.",
    "d": "CRB-65: 0–1 poäng hemma, 2 sjukhus, 3–4 allvarligt.",
    "b": "Pneumoni: penicillin/cefalosporin ± makrolid efter svårighetsgrad; legionella: makrolid/doxycyklin/fluorokinolon.",
    "m": "Fråga om antibiotikaallergi. Odlingar före antibiotika. Förklara på lekmannaspråk och ge tillfälle för frågor. Misstänkt sepsis eller nekrotiserande infektion: akut handläggning."
   },
   "related": [
    "hygien"
   ],
   "fam": "Infektion: handläggning, rond och information"
  },
  {
   "id": "tyreoidea",
   "name": "Tyreoidea och endokrin utredning",
   "synonyms": [
    "Graves status",
    "Graves – provsvar och information",
    "Graves – status",
    "Graves – statusversion",
    "Hypertyreos",
    "Hypofystumör",
    "Hypofystumör på DT",
    "Hypotyreos",
    "Hypotyreos/Levaxin",
    "Levaxin – information",
    "Ofrivillig viktnedgång",
    "Trötthet – anamnes och information",
    "Trötthet – anamnes och information (hypotyreos)",
    "Viktnedgång"
   ],
   "specialty": "Endokrinologi",
   "kind": "stationstyp",
   "n_sessions": 9,
   "n_questions": 9,
   "n_years": 3,
   "pct": 64.3,
   "category": "karnan",
   "akut": false,
   "exams": [
    "HT23",
    "VT24",
    "oVT24",
    "VT25",
    "oVT25",
    "HT25",
    "oHT25",
    "VT26",
    "oVT26"
   ],
   "card": {
    "fk": "Undersöka tyreoidea vid misstänkt Graves, ge besked vid hypotyreos/hypertyreos, informera om Levaxin eller utreda hypofystumör/viktnedgång.",
    "v": [
     "Tremor – ögon – puls – tyreoidea",
     "Låg TSH/högt fT4 = hyper",
     "Högt TSH/lågt fT4 = hypo",
     "Levotyroxin fastande, TSH efter 6–8 v"
    ],
    "k": "Du får labsvar och/eller en patient med tyreoidea- eller annan endokrin frågeställning. Du ska ta kompletterande anamnes, undersöka vid behov, förklara och starta behandling.",
    "d": "Låg TSH + högt fT4 = tyreotoxikos (Graves vid exoftalmus och diffus struma).",
    "b": "Graves: tiamazol, betablockad, ev. radiojod/kirurgi; varning för agranulocytos (feber/halsont).",
    "m": "Palpera tyreoidea bakifrån och under sväljning. Tala om att behandlingen är livslång och följs upp med prov."
   },
   "related": [
    "diabetes"
   ],
   "fam": "Tyreoidea och endokrin utredning"
  },
  {
   "id": "njure_ssk",
   "name": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)",
   "synonyms": [
    "Diures",
    "Diuresstimulering",
    "Elektrolyt/diures",
    "Hyperkalemi",
    "Hyperkalemi – akut handläggning",
    "Hyperkalemi – samtal med ssk",
    "Hypernatremi",
    "Hypernatremi – samtal med ssk",
    "SBAR om Furix – samtal med ssk",
    "SBAR – samtal med ssk om patient jourtid",
    "Samtal med ssk om diures jourtid",
    "Samtal med ssk om kalium jourtid",
    "Samtal med ssk om patient jourtid"
   ],
   "specialty": "Njurmedicin",
   "kind": "stationstyp",
   "n_sessions": 9,
   "n_questions": 9,
   "n_years": 4,
   "pct": 64.3,
   "category": "karnan",
   "akut": true,
   "exams": [
    "VT23",
    "oVT23",
    "HT23",
    "oHT23",
    "oVT24",
    "HT24",
    "oHT24",
    "HT25",
    "oHT25"
   ],
   "card": {
    "fk": "Telefonsamtal under jourtid med sjuksköterska om en patient med elektrolytrubbning eller låg diures: inhämta information, ordinera och planera.",
    "v": [
     "SBAR",
     "EKG vid hyperkalemi",
     "Kalcium – insulin/glukos – salbutamol",
     "Omkontroll"
    ],
    "k": "Du är primärjour och ringer upp en sjuksköterska. Du ska ställa frågor om bakgrund och det akuta, ge ordinationer (läkemedel) och planera uppföljning.",
    "d": "Hyperkalemi med EKG-förändringar (spetsiga T, breddat QRS) är akut.",
    "b": "Hyperkalemi: kalcium iv, insulin/glukos, salbutamol, diuretika, kaliumbindare; dialys vid refraktär.",
    "m": "Be om EKG och vitalparametrar vid hyperkalemi. Ange korrekt läkemedel och dos. Hyperkalemi med EKG-förändringar kräver akut behandling."
   },
   "related": [
    "njure_anam"
   ],
   "fam": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)"
  },
  {
   "id": "kol",
   "name": "KOL, spirometri och obstruktiv/restriktiv lungsjukdom",
   "synonyms": [
    "Information om KOL",
    "KOL",
    "KOL – diagnostik och information",
    "KOL, spirometri och GOLD",
    "KOL-exacerbation",
    "KOL-exacerbation – SBAR och ordinationer",
    "KOL-försämring – anamnes och handläggning",
    "Spirometri",
    "Spirometri med restriktivt mönster",
    "Tolka spirometri",
    "Tolka spirometri och informera patient"
   ],
   "specialty": "Lunga",
   "kind": "stationstyp",
   "n_sessions": 8,
   "n_questions": 8,
   "n_years": 4,
   "pct": 57.1,
   "category": "karnan",
   "akut": false,
   "exams": [
    "VT23",
    "oVT23",
    "HT23",
    "oHT23",
    "oVT24",
    "HT24",
    "HT25",
    "oVT26"
   ],
   "card": {
    "fk": "Tolka spirometri, ställa diagnos (KOL, GOLD-stadium, restriktivt mönster) och informera patienten, eller bedöma och ordinera vid KOL-försämring (SBAR).",
    "v": [
     "Kvot <0,70 efter bronkdilatation",
     "GOLD 1–4 efter FEV1 %",
     "Reversibilitet ≥12 % och ≥200 ml",
     "Rökstopp först",
     "Saturationsmål 88–92 % vid KOL",
     "Exacerbation: bronkdilatation, kortison, ev. antibiotika"
    ],
    "k": "Du får en spirometriutskrift (eller en inläggningsjournal vid exacerbation) och ska tolka den, berätta hur du tänker, informera patienten om diagnos/behandling eller rapportera enligt SBAR och ge ordinationer.",
    "d": "Kvot <0,70 efter bronkdilatation som inte normaliseras = fixerad obstruktion = KOL i rätt klinik (rökare, hosta, dyspné).",
    "b": "KOL: rökstopp, LAMA ± LABA, SABA vid behov, vaccin (influensa, pneumokock, covid), fysisk aktivitet/KOL-skola, utvärdera syrgasbehov vid saturation <90 %.",
    "m": "Säg en saturationsgräns när du ordinerar syrgas till KOL-patient. Förklara diagnosen utan facktermer och fråga om rökning. Ange GOLD-stadium utifrån FEV1 i % av förväntat. Syrgas till KOL-patient: sätt saturationsmål, övervaka med blodgas."
   },
   "related": [
    "astma",
    "lungstatus",
    "lungproc"
   ],
   "fam": "KOL, spirometri och obstruktiv/restriktiv lungsjukdom"
  },
  {
   "id": "gastro_buk",
   "name": "Gastro: ont i magen, akut buk och IBD",
   "synonyms": [
    "Akut buk",
    "Anamnes vid dyspepsi",
    "Buksmärta",
    "Crohn",
    "Dyspepsi",
    "Feber hos äldre",
    "Magbesvär – besök på vårdcentral",
    "Ont i magen",
    "Ont i magen på akutmottagning",
    "Ont i magen vid Crohns sjukdom",
    "Rond: status vid feber och nedsatt allmäntillstånd",
    "Ulcerös kolit"
   ],
   "specialty": "Gastroenterologi",
   "kind": "stationstyp",
   "n_sessions": 8,
   "n_questions": 8,
   "n_years": 3,
   "pct": 57.1,
   "category": "karnan",
   "akut": true,
   "exams": [
    "HT23",
    "oHT23",
    "VT24",
    "HT24",
    "oVT25",
    "HT25",
    "VT26",
    "oVT26"
   ],
   "card": {
    "fk": "Ta anamnes, utföra riktat bukstatus och föreslå utredning vid buksmärta, dyspepsi, ulcerös kolit/Crohn eller feber med nedsatt allmäntillstånd.",
    "v": [
     "Handhygien",
     "Inspektion – auskultation – perkussion – palpation",
     "Ömma ställen sist",
     "CRP, blodstatus, lever/pankreas, urin",
     "Alarmsymtom"
    ],
    "k": "Patienten söker för ont i magen. Du ska ta anamnes, utföra buk-status enligt struktur och föreslå utredning och handläggning.",
    "d": "Släppömhet, defense, rigid buk = peritonit: akut kirurgkontakt.",
    "b": "Smärtlindring, vätska, antiemetika, fasta vid misstanke om operation, bakjour.",
    "m": "Handhygien före och efter status (1 p). Undersök enligt struktur för akut buk (2 p). Tolka bukfynden och föreslå utredning. Peritonit eller ileus kräver akut kirurgbedömning."
   },
   "related": [
    "gastro_lever"
   ],
   "fam": "Gastro: ont i magen, akut buk och IBD"
  },
  {
   "id": "geriatrik",
   "name": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård",
   "synonyms": [
    "Bedöma läkemedelspåverkan",
    "Dokumentera patientmöte – status och SBAR",
    "Läkemedelsbiverkan",
    "Läkemedelsinformation – atorvastatin",
    "Läkemedelspåverkan",
    "Läkemedelsöversyn",
    "Läkemedelsöversyn hos äldre patient",
    "Misstänkt biverkan av blodtrycksmedicin",
    "Personcentrerad vård",
    "Statinbiverkan",
    "Statusdiktat äldre",
    "Utskrivning",
    "Utskrivning och läkemedelsinformation"
   ],
   "specialty": "Geriatrik",
   "kind": "stationstyp",
   "n_sessions": 8,
   "n_questions": 9,
   "n_years": 3,
   "pct": 57.1,
   "category": "karnan",
   "akut": false,
   "exams": [
    "VT24",
    "oVT24",
    "HT24",
    "oHT24",
    "VT25",
    "oVT25",
    "oHT25",
    "oVT26"
   ],
   "card": {
    "fk": "Ta anamnes och bedöma misstänkt läkemedelsbiverkan, ändra läkemedelslista, genomföra utskrivningssamtal eller dokumentera status.",
    "v": [
     "Tidsrelation",
     "Läkemedelslista uppdatera",
     "Nytta mot besvär",
     "Uppföljning"
    ],
    "k": "Äldre patient med misstänkt biverkan, läkemedelsöversyn eller utskrivning. Du ska ta anamnes, göra bedömning, informera och föreslå åtgärd.",
    "d": "Statin + muskelvärk: kontrollera CK, TSH, D-vitamin; överväg paus eller dosreduktion.",
    "b": "Läkemedelsöversyn, uppdatera läkemedelslista, patientdelaktighet, uppföljning.",
    "m": "Ändra läkemedelslistan konkret och motivera. Involvera patienten i beslut."
   },
   "related": [
    "kognition"
   ],
   "fam": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård"
  },
  {
   "id": "bfm",
   "name": "Bilddiagnostik: akut radiologi",
   "synonyms": [
    "Akut radiologi",
    "Röntgendiagnostik",
    "Strokelarm",
    "Strokelarm – bildtolkning",
    "Thoraxröntgen",
    "Tre lungor – röntgentolkning"
   ],
   "specialty": "BFM",
   "kind": "stationstyp",
   "n_sessions": 8,
   "n_questions": 8,
   "n_years": 4,
   "pct": 57.1,
   "category": "karnan",
   "akut": false,
   "exams": [
    "VT23",
    "oVT23",
    "VT24",
    "oVT24",
    "VT25",
    "oVT25",
    "VT26",
    "oVT26"
   ],
   "card": {
    "fk": "Tolka röntgenbilder (thorax, DT hjärna m.m.), ange diagnos och visa fynd för kollega eller student.",
    "v": [
     "Systematik",
     "Diagnos + fynd",
     "Peka och beskriv",
     "Nästa steg"
    ],
    "k": "Du granskar tre röntgenundersökningar, ställer diagnos och visar vilka fynd som styrker den. Du får frågor.",
    "d": "Pneumotorax: pleuralinje utan lungteckning; pleuravätska: utplånad kostofrenisk vinkel med meniskbild; pneumoni: förtätning med luftbronkogram; lungödem: Kerley B-linjer och kardiomegali.",
    "b": "Akut åtgärd efter bildfynd; kontakta radiolog vid osäkerhet.",
    "m": "Ange rätt diagnos och visa fynden. Beskriv relevanta fynd korrekt."
   },
   "related": [],
   "fam": "Bilddiagnostik: akut radiologi"
  },
  {
   "id": "hjartstatus",
   "name": "Hjärtstatus, blåsljud och EKO-fynd",
   "synonyms": [
    "Aortastenos",
    "Avvikande EKG – hjärtstatus och tolkning",
    "Blåsljud",
    "Blåsljud med Harvey-docka",
    "Cirkulationsstatus och hjärtstatus",
    "Hjärtstatus",
    "Kardiellt blåsljud – hjärtstatus",
    "Tät aortastenos",
    "Återkoppling av EKO-fynd"
   ],
   "specialty": "Kardiologi",
   "kind": "stationstyp",
   "n_sessions": 7,
   "n_questions": 9,
   "n_years": 4,
   "pct": 50.0,
   "category": "vanliga",
   "akut": false,
   "exams": [
    "VT23",
    "oVT23",
    "oHT23",
    "oVT24",
    "oVT25",
    "oHT25",
    "oVT26"
   ],
   "card": {
    "fk": "Genomföra hjärtstatus på Harvey-docka (eller patient), ange klaff och blåsljud och föreslå utredning, eller tolka ett ekokardiografiutlåtande och återkoppla.",
    "v": [
     "Aorta – pulmonalis – trikuspidalis – mitralis",
     "Karotis och perifer puls",
     "Systoliskt/diastoliskt",
     "Eko + kardiologremiss"
    ],
    "k": "Du ska göra komplett hjärtstatus, beskriva ljud, ange rimlig genes och diagnos och föreslå utredning; eller förklara ett eko-svar för patienten per telefon.",
    "d": "Crescendo–decrescendo, utstrålning mot karotiderna = aortastenos. Vmax >4 m/s = svår stenos.",
    "b": "EKG och ekokardiografi; remiss kardiolog.",
    "m": "Ange vilken klaff du hör var och beskriv blåsljuden. Auskultera karotis (1 p) och palpera perifer puls (1 p). Ge en rimlig diagnos och fortsatt utredning."
   },
   "related": [
    "aks",
    "dyspne",
    "arytmi"
   ],
   "fam": "Hjärtstatus, blåsljud och EKO-fynd"
  },
  {
   "id": "aks",
   "name": "Bröstsmärta: AKS, perimyokardit och EKG",
   "synonyms": [
    "AKS – bröstsmärta på akutmottagningen",
    "Akut koronart syndrom",
    "Akut koronart syndrom – anamnes och EKG",
    "Bröstsmärta",
    "Bröstsmärta på hälsocentral",
    "Bröstsmärta – anamnes och handläggning",
    "Hjärtbedömning",
    "Hjärtbedömning med ultraljud och EKG",
    "Instabil angina",
    "Instabil angina på hälsocentral",
    "Perimyokardit"
   ],
   "specialty": "Kardiologi",
   "kind": "stationstyp",
   "n_sessions": 7,
   "n_questions": 7,
   "n_years": 4,
   "pct": 50.0,
   "category": "vanliga",
   "akut": true,
   "exams": [
    "VT23",
    "oHT23",
    "VT24",
    "VT25",
    "HT25",
    "VT26",
    "oVT26"
   ],
   "card": {
    "fk": "Ta smärtanamnes, bedöma riskprofil, tolka EKG och informera om misstänkt diagnos och åtgärd vid bröstsmärta.",
    "v": [
     "Smärtanamnes strukturerat",
     "Riskprofil",
     "EKG + troponin",
     "ASA vid AKS",
     "Farliga differentialdiagnoser: LE, dissektion, pneumotorax"
    ],
    "k": "Du träffar en patient med bröstsmärta på akut- eller hälsocentral, tolkar EKG, kompletterar anamnesen och informerar om diagnos och åtgärd.",
    "d": "ST-lyft eller nytt LBBB + typisk smärta = STEMI: akut PCI.",
    "b": "AKS: ASA, P2Y12-hämmare, LMWH, nitro vid smärta, syrgas vid saturation <90 %; STEMI akut PCI.",
    "m": "Tolka EKG korrekt, även när det är normalt. Täck smärtanamnes (3 p) och kardiovaskulär riskprofil. Tänk lungemboli och aortadissektion som farliga alternativ. Bröstsmärta: utesluta livshotande orsaker innan benign förklaring."
   },
   "related": [
    "hjartstatus",
    "dyspne",
    "arytmi"
   ],
   "fam": "Bröstsmärta: AKS, perimyokardit och EKG"
  },
  {
   "id": "arytmi",
   "name": "Arytmi, svimning och ortostatism",
   "synonyms": [
    "AV-block",
    "AV-block III",
    "Förmaksflimmer",
    "Förmaksflimmer – oregelbunden hjärtrytm",
    "Förmaksflimmer – återbesök, alkohol och blodtryck",
    "Hjärtrusning (PSVT)",
    "Ortostatiskt blodtryck",
    "Ortostatism",
    "PSVT",
    "Svimning",
    "Svimning vid hjärtsvikt",
    "Svimning – akut handläggning",
    "Svimning – anamnes och handläggning",
    "Yrsel och svimning vid hjärtsvikt – bedömning och åtgärd"
   ],
   "specialty": "Kardiologi",
   "kind": "stationstyp",
   "n_sessions": 7,
   "n_questions": 9,
   "n_years": 3,
   "pct": 50.0,
   "category": "vanliga",
   "akut": true,
   "exams": [
    "oVT23",
    "HT23",
    "VT24",
    "oVT24",
    "HT24",
    "oHT24",
    "VT25"
   ],
   "card": {
    "fk": "Handlägga förmaksflimmer, takyarytmi (PSVT), AV-block eller svimning, inklusive ortostatiskt blodtryck.",
    "v": [
     "CHA₂DS₂-VASc",
     "Ortostatism: ≥20/10 mmHg",
     "Alkohol och tyreoidea som trigger",
     "AV-block III: pacemaker"
    ],
    "k": "Patienten har hjärtklappning, svimning eller yrsel. Du ska ta anamnes, bedöma EKG/blodtryck och föreslå åtgärd och information.",
    "d": "Ortostatism: fall i systoliskt ≥20 eller diastoliskt ≥10 mmHg inom 3 minuter.",
    "b": "Förmaksflimmer: antikoagulation (NOAK) enligt CHA₂DS₂-VASc, frekvenskontroll (betablockare), ev. elkonvertering, minska alkohol.",
    "m": "Fråga om hereditet för plötslig död vid svimning. Bedöm blodtryck, EKG och läkemedel samlat."
   },
   "related": [
    "hjartstatus",
    "aks",
    "dyspne"
   ],
   "fam": "Arytmi, svimning och ortostatism"
  },
  {
   "id": "hema",
   "name": "Hematologi: lymfkörtelstatus, anemi och blödning",
   "synonyms": [
    "Anamnes vid orkeslöshet",
    "Anemi",
    "Blödningsanamnes",
    "Blödningsbenägenhet",
    "Järnbristanemi",
    "Järnbristanemi – anamnes",
    "Lymfkörtelstatus",
    "Lymfkörtelstatus – feber och nattsvettningar"
   ],
   "specialty": "Hematologi",
   "kind": "stationstyp",
   "n_sessions": 7,
   "n_questions": 7,
   "n_years": 3,
   "pct": 50.0,
   "category": "vanliga",
   "akut": false,
   "exams": [
    "oVT23",
    "HT23",
    "oHT23",
    "VT24",
    "oVT24",
    "VT25",
    "oVT25"
   ],
   "card": {
    "fk": "Undersöka lymfkörtelstationer, ta anamnes vid järnbristanemi eller blödningsbenägenhet och planera utredning.",
    "v": [
     "Nacke – submandibulärt – supraklavikulärt – axill – ljumske",
     "B-symtom",
     "Ferritin <15 = järnbrist",
     "Utred orsaken till järnbrist"
    ],
    "k": "Patienten söker med feber/nattsvettningar, trötthet eller blåmärken. Du ska undersöka körtlar eller ta anamnes och föreslå utredning.",
    "d": "Hård, fast, smärtfri körtel >2 cm eller B-symtom: misstänk lymfom och utred snabbt.",
    "b": "Körtlar: blodstatus, DT, körtelbiopsi/excision, SVF vid malignitetsmisstanke.",
    "m": "Undersök samtliga stationer systematiskt. Fråga om B-symtom."
   },
   "related": [],
   "fam": "Hematologi: lymfkörtelstatus, anemi och blödning"
  },
  {
   "id": "stroke",
   "name": "Stroke och TIA: NIHSS, SBAR och information",
   "synonyms": [
    "Akut handläggning stroke",
    "Akut handläggning stroke – NIHSS och SBAR",
    "Akut stroke",
    "Akuthandläggning stroke – NIHSS och SBAR",
    "Misstänkt stroke på akutmottagning",
    "Rond på strokeavdelning",
    "Strokerond",
    "TIA",
    "Övergående svaghet – akutmottagning"
   ],
   "specialty": "Neurologi/Angiologi",
   "kind": "stationstyp",
   "n_sessions": 7,
   "n_questions": 7,
   "n_years": 4,
   "pct": 50.0,
   "category": "vanliga",
   "akut": true,
   "exams": [
    "oVT23",
    "HT23",
    "oHT23",
    "HT24",
    "VT25",
    "oHT25",
    "VT26"
   ],
   "card": {
    "fk": "Utföra angivna delar av NIHSS, rapportera enligt SBAR, informera patienten om utredning och sekundärprevention eller ronda strokepatient.",
    "v": [
     "NIHSS: medvetande, blick, synfält, facialis, motorik, ataxi, känsel, språk, dysartri, neglekt",
     "SBAR",
     "Trombolys ≤4,5 h",
     "Sekundärprofylax"
    ],
    "k": "Patienten har TIA/stroke. Du ska genomföra angivna NIHSS-delar, rapportera/handlägga och informera.",
    "d": "Övergående symtom <24 h = TIA, men utreds som stroke.",
    "b": "Akut: DT hjärna, ev. trombolys/trombektomi; ASA efter utesluten blödning; kontroll av saturation, blodsocker, blodtryck.",
    "m": "Rapportera enligt SBAR och föreslå nästa åtgärd. Gradera information: undersökningar, diagnos, sekundärprofylax. Tid är hjärna: tidsfönstret styr behandling."
   },
   "related": [],
   "fam": "Stroke och TIA: NIHSS, SBAR och information"
  },
  {
   "id": "hypertoni",
   "name": "Hypertoni: blodtrycksbedömning och riskbedömning",
   "synonyms": [
    "24-timmars blodtryck",
    "Anamnes och riskbedömning vid hypertoni",
    "Bedömning av hemblodtryck",
    "Blodtryck",
    "Dygnsblodtryck",
    "Hemblodtryck",
    "Hypertensiv kris",
    "Hypertoni",
    "Kontroll av blodtryck",
    "Riskbedömning (SCORE) – hypertoni",
    "Riskbedömning SCORE",
    "Samtal om blodtryck"
   ],
   "specialty": "Allmänmedicin",
   "kind": "stationstyp",
   "n_sessions": 6,
   "n_questions": 7,
   "n_years": 3,
   "pct": 42.9,
   "category": "vanliga",
   "akut": false,
   "exams": [
    "oVT23",
    "HT24",
    "VT25",
    "oVT25",
    "HT25",
    "oVT26"
   ],
   "card": {
    "fk": "Bedöma hem-/24-timmarsblodtryck, ta anamnes, riskbedöma och föreslå åtgärd vid hypertoni; även hypertensiv kris.",
    "v": [
     "Kontor 140/90, hem 135/85, 24 h 130/80",
     "SCORE2 och organpåverkan",
     "Mät rätt: sitt, vila, manschett",
     "Kris: akut sjukhus"
    ],
    "k": "Patienten har högt blodtryck. Du ska bedöma mätvärden, komplettera anamnes, ge rimlig bedömning och föreslå åtgärder.",
    "d": "Hemblodtryck ≥135/85 = hypertoni; mät minst 3–7 dagar morgon och kväll.",
    "b": "Livsstil: salt, motion, vikt, alkohol, rökstopp; läkemedel efter risk.",
    "m": "Ange rätt gränsvärde för hemblodtryck. Patientcentrerad: fråga om tankar och oro. Ge rimlig åtgärd och uppföljning. Hypertensiv kris med organpåverkan kräver akut handläggning."
   },
   "related": [
    "levnadsvanor",
    "trotthet"
   ],
   "fam": "Hypertoni: blodtrycksbedömning och riskbedömning"
  },
  {
   "id": "levnadsvanor",
   "name": "Levnadsvanor och motiverande samtal",
   "synonyms": [
    "Fysisk aktivitet",
    "Levnadsvanor och blodtryck",
    "Levnadsvanor och diabetes",
    "Levnadsvanor och diabetes – samtal",
    "Levnadsvanor och hypertoni – samtal",
    "Råd om fysisk aktivitet",
    "Tobak",
    "Tobaksanamnes",
    "Tobaksanamnes och motiverande samtal"
   ],
   "specialty": "Allmänmedicin",
   "kind": "stationstyp",
   "n_sessions": 6,
   "n_questions": 6,
   "n_years": 3,
   "pct": 42.9,
   "category": "vanliga",
   "akut": false,
   "exams": [
    "HT23",
    "oHT23",
    "VT24",
    "oVT24",
    "oHT24",
    "HT25"
   ],
   "card": {
    "fk": "Ge råd om levnadsvanor (fysisk aktivitet, kost, tobak, alkohol) med motiverande samtalsteknik.",
    "v": [
     "OARS",
     "Motivation 0–10",
     "FaR: 150 min/vecka",
     "Små konkreta mål",
     "Boka uppföljning"
    ],
    "k": "Du träffar en patient och ska samtala om levnadsvanor, utvärdera ändringsbenägenhet och planera uppföljning.",
    "d": "Fysisk aktivitet minst 150 min måttlig intensitet per vecka plus styrketräning 2 ggr/vecka.",
    "b": "Skriftlig ordination (FaR), kontakt med dietist/rökavvänjning vid behov, uppföljning efter 4–12 veckor.",
    "m": "Fråga öppet, bekräfta och sammanfatta. Planera konkret uppföljning."
   },
   "related": [
    "hypertoni",
    "trotthet"
   ],
   "fam": "Levnadsvanor och motiverande samtal"
  },
  {
   "id": "kognition",
   "name": "Kognitiv skattning (MMSE) och demensutredning",
   "synonyms": [
    "Basal demensutredning",
    "Demensanamnes",
    "Demensanamnes med fokus på diagnos",
    "Demensutredning",
    "MMSE",
    "MMSE-NR3 och information",
    "MMSE-SR – kognitiv skattning",
    "Minnestest MMSE-SR"
   ],
   "specialty": "Geriatrik",
   "kind": "stationstyp",
   "n_sessions": 6,
   "n_questions": 6,
   "n_years": 3,
   "pct": 42.9,
   "category": "vanliga",
   "akut": false,
   "exams": [
    "VT23",
    "oVT23",
    "HT23",
    "oHT23",
    "HT25",
    "VT26"
   ],
   "card": {
    "fk": "Genomföra MMSE korrekt, ta demensanamnes och informera om fynd och fortsatt utredning.",
    "v": [
     "Orientering – återgivning – räkning – fördröjd återgivning – benämning – kommando – skrivning – ritning",
     "Anhöriganamnes",
     "Basprover + bilddiagnostik"
    ],
    "k": "Du träffar en patient med minnesproblem. Du ska genomföra kognitiv skattning (MMSE), förklara fynd och planera fortsatt utredning.",
    "d": "MMSE 26–30 normalt, 21–25 lätt, 10–20 måttlig, <10 svår nedsättning (riktvärden).",
    "b": "Basal demensutredning: anamnes, status, blodprover, bilddiagnostik, kognitiv test; behandling: kolinesterashämmare vid Alzheimer, stöd till anhöriga, körkortsbedömning.",
    "m": "Följ testets instruktioner och strukturen. Informera begripligt och föreslå handläggning."
   },
   "related": [
    "geriatrik"
   ],
   "fam": "Kognitiv skattning (MMSE) och demensutredning"
  },
  {
   "id": "dyspne",
   "name": "Dyspné: hjärtsvikt eller lungsjukdom",
   "synonyms": [
    "Akut dyspné",
    "Andfåddhet",
    "Andfåddhet och ödem – triage på medicinakuten",
    "Andnöd på akutmottagning",
    "Dyspné",
    "Dyspné och hjärtsvikt",
    "Dyspné – anamnes",
    "Dyspné: kardiell eller pulmonell genes",
    "Hjärtsvikt"
   ],
   "specialty": "Kardiologi",
   "kind": "stationstyp",
   "n_sessions": 5,
   "n_questions": 6,
   "n_years": 3,
   "pct": 35.7,
   "category": "vanliga",
   "akut": true,
   "exams": [
    "HT23",
    "oHT24",
    "VT25",
    "HT25",
    "VT26"
   ],
   "card": {
    "fk": "Ta funktionsanamnes och riskfaktorer vid dyspné/andfåddhet, avgöra kardiell eller pulmonell genes och planera utredning.",
    "v": [
     "Funktionsanamnes (NYHA)",
     "Riskfaktorer",
     "EKG, proBNP, rtg, spirometri, eko",
     "Akut: syrgas och diuretika vid lungödem"
    ],
    "k": "Patienten söker för tilltagande andfåddhet. Du ska ta anamnes, bedöma kardiell/pulmonell genes och kommunicera plan.",
    "d": "Ortopné, nattlig dyspné, ödem, förhöjt proBNP talar för hjärtsvikt.",
    "b": "Hjärtsvikt: ACE-hämmare/ARNI, betablockare, MRA, SGLT2-hämmare, diuretika vid symtom.",
    "m": "Kartlägg riskfaktorer (3 p). Förklara fynd och plan begripligt."
   },
   "related": [
    "hjartstatus",
    "aks",
    "arytmi"
   ],
   "fam": "Dyspné: hjärtsvikt eller lungsjukdom"
  },
  {
   "id": "diabetesfot",
   "name": "Fotstatus och perifer cirkulation",
   "synonyms": [
    "Diabetesfot",
    "Fotstatus vid diabetes",
    "Fotundersökning vid diabetes",
    "Perifer artärsjukdom",
    "Perifer cirkulation hos diabetiker",
    "Perifer cirkulation – undersökning och information",
    "Undersökning av diabetesfot"
   ],
   "specialty": "Diabetes/Angiologi",
   "kind": "stationstyp",
   "n_sessions": 5,
   "n_questions": 5,
   "n_years": 4,
   "pct": 35.7,
   "category": "vanliga",
   "akut": false,
   "exams": [
    "VT23",
    "oVT24",
    "oHT24",
    "oHT25",
    "VT26"
   ],
   "card": {
    "fk": "Genomföra fotundersökning vid diabetes (inspektion, cirkulation, nervfunktion) och informera patienten om bedömning och egenvård.",
    "v": [
     "Inspektion: topp, sula, mellan tår",
     "Pulsar: dorsalis pedis + tibialis posterior",
     "Vibration + monofilament (3 platser/fot)",
     "Demonstrera på tumbas",
     "Egenvård"
    ],
    "k": "Du möter en patient med diabetes och ska undersöka fötterna, berätta vad du gör, informera om bedömning och ge egenvårdsråd. Övrig undersökning och behandlingsförslag ingår inte.",
    "d": "Nedsatt känsel (monofilament, vibration) = diabetesneuropati = ökad risk för sår.",
    "b": "Egenvård: daglig inspektion, tvätta och torka mellan tårna, ändamålsenliga skor, ej gå barfota, klippa naglar rakt, söka vid sår.",
    "m": "Palpera båda pulsarna (a. dorsalis pedis och a. tibialis posterior) på båda fötterna. Demonstrera testet på patienten först. Ge korrekta egenvårdsråd."
   },
   "related": [],
   "fam": "Fotstatus och perifer cirkulation"
  },
  {
   "id": "dvt",
   "name": "Ensidig bensvullnad: DVT-misstanke",
   "synonyms": [
    "DVT",
    "DVT-misstanke med förhöjt D-dimer",
    "DVT-misstanke – anamnes, status och utredning",
    "Svullet underben – DVT",
    "Utredning av ensidig bensvullnad",
    "VTE – ensidig bensvullnad"
   ],
   "specialty": "Angiologi",
   "kind": "stationstyp",
   "n_sessions": 5,
   "n_questions": 5,
   "n_years": 4,
   "pct": 35.7,
   "category": "vanliga",
   "akut": true,
   "exams": [
    "VT23",
    "VT24",
    "HT24",
    "oHT24",
    "oVT26"
   ],
   "card": {
    "fk": "Ta riktad anamnes, göra riktat status, bedöma sannolikhet (Wells) och föreslå utredning vid misstänkt djup ventrombos.",
    "v": [
     "Wells ≥2 trolig",
     "Omkrets 10 cm under tuberositas",
     "Ultraljud vid trolig, D-dimer vid osannolik",
     "Prover före behandling"
    ],
    "k": "Patienten har ensidig svullnad och smärta i benet. Du ska ta anamnes, undersöka, uppskatta sannolikhet och föreslå utredning.",
    "d": "Omkretsskillnad >3 cm talar för DVT.",
    "b": "Ultraljud (kompression) eller flebografi; antikoagulation med NOAK/LMWH; tid beror på orsak.",
    "m": "Ange sannolikhetsbedömning via Wells eller kliniskt. Föreslå ultraljud. Ta antikoagulationsrelaterade prover (INR, APTT, blodstatus, kreatinin). Symtom på lungemboli (andfåddhet, bröstsmärta) kräver akut handläggning."
   },
   "related": [],
   "fam": "Ensidig bensvullnad: DVT-misstanke"
  },
  {
   "id": "astma",
   "name": "Astma: inhalationsteknik, ACT och PEF-dagbok",
   "synonyms": [
    "Astma",
    "Astmakontroll (ACT) och inhalationsteknik",
    "Inhalationsteknik",
    "Instruktion av inhalationsläkemedel vid astma",
    "PEF",
    "PEF-instruktion och dagboktolkning"
   ],
   "specialty": "Lunga",
   "kind": "stationstyp",
   "n_sessions": 4,
   "n_questions": 5,
   "n_years": 4,
   "pct": 28.6,
   "category": "vanliga",
   "akut": false,
   "exams": [
    "oVT23",
    "oHT23",
    "VT25",
    "VT26"
   ],
   "card": {
    "fk": "Instruera eller kontrollera inhalationsteknik, bedöma astmakontroll med ACT eller instruera PEF-mätning och tolka PEF-dagbok.",
    "v": [
     "Visa – låt patienten visa",
     "Utandning, kraftig inandning, håll andan",
     "Skölj munnen efter steroid",
     "ACT ≥20 välkontrollerad",
     "PEF-variation >20 % talar för astma"
    ],
    "k": "Du träffar en patient med (misstänkt) astma. Du ska demonstrera/kontrollera inhalator, bedöma kontroll med ACT eller instruera PEF och tolka en dagbok.",
    "d": "Daglig variation i PEF över ca 20 % eller ökning över 60 L/min efter bronkdilatation talar för astma.",
    "b": "Inhalationssteroid som basbehandling, SABA/formoterol vid behov; trappa upp vid dålig kontroll efter att tekniken kontrollerats.",
    "m": "Låt patienten visa tekniken och korrigera. Tolka dagboken diagnostiskt (variation, morgonvärden). Professionellt bemötande och teach-back."
   },
   "related": [
    "kol",
    "lungstatus",
    "lungproc"
   ],
   "fam": "Astma: inhalationsteknik, ACT och PEF-dagbok"
  },
  {
   "id": "allergi",
   "name": "Allergisk rinokonjunktivit och angioödem",
   "synonyms": [
    "Allergisk rinokonjunktivit",
    "Allergisk rinokonjunktivit – pricktest",
    "Angioödem"
   ],
   "specialty": "Lunga",
   "kind": "stationstyp",
   "n_sessions": 4,
   "n_questions": 4,
   "n_years": 3,
   "pct": 28.6,
   "category": "vanliga",
   "akut": false,
   "exams": [
    "VT24",
    "VT25",
    "oHT25",
    "oVT26"
   ],
   "card": {
    "fk": "Tolka pricktest och informera om diagnos och behandling vid allergisk rinokonjunktivit, eller handlägga akut angioödem och utesluta anafylaxi.",
    "v": [
     "Kvaddel ≥3 mm = positivt",
     "Anafylaxi? Hud, luftväg, cirkulation",
     "Nasal steroid först",
     "Adrenalin i muskel vid anafylaxi"
    ],
    "k": "Du ska tolka ett pricktest eller bedöma en patient med akut läppsvullnad och förklara diagnos, behandling och egenvård.",
    "d": "Positivt pricktest + passande symtom = allergi; test utan symtom = sensibilisering.",
    "b": "Rinokonjunktivit: nasal steroid i första hand, oral antihistamin, ögondroppar; allergenspecifik immunterapi vid svår, välavgränsad allergi.",
    "m": "Utesluta anafylaxi och ordinera akutbehandling. Förklara pedagogiskt och bemöt oron. Angioödem: luftvägen först; bedöm stridor och talsvårigheter."
   },
   "related": [
    "kol",
    "astma",
    "lungstatus"
   ],
   "fam": "Allergisk rinokonjunktivit och angioödem"
  },
  {
   "id": "endoakut",
   "name": "Akut medvetslöshet, intoxikation och svimning",
   "synonyms": [
    "Akut medvetslöshet",
    "Akut medvetslöshet – opiatintoxikation",
    "Intoxikation",
    "Medvetslöshet",
    "Opioidintoxikation",
    "Svimning/hypotension",
    "Svimning/hypotension – anamnes, akut behandling och information"
   ],
   "specialty": "Endokrinologi/Akut",
   "kind": "stationstyp",
   "n_sessions": 4,
   "n_questions": 4,
   "n_years": 3,
   "pct": 28.6,
   "category": "vanliga",
   "akut": true,
   "exams": [
    "VT23",
    "oHT23",
    "HT24",
    "VT25"
   ],
   "card": {
    "fk": "Handlägga medvetslös eller förgiftad patient (ABCDE, glukos, opioid) och informera.",
    "v": [
     "ABCDE",
     "Glukos direkt",
     "Små pupiller → naloxon",
     "Övervaka efter antidot"
    ],
    "k": "Patienten är medvetslös, förgiftad eller har svimmat. Du ska handlägga akut, utreda orsak och informera.",
    "d": "Små pupiller + långsam andning + medvetandesänkning = opioidpåverkan: naloxon.",
    "b": "ABCDE, glukos, naloxon vid opioidintoxikation (upprepa vid behov), övervaka tills effekten klingat.",
    "m": "Kontrollera glukos och andning direkt. Fråga vittnen om droger och läkemedel. Medvetslös patient: luftväg och andning först."
   },
   "related": [],
   "fam": "Akut medvetslöshet, intoxikation och svimning"
  },
  {
   "id": "lungstatus",
   "name": "Lungstatus och diktat",
   "synonyms": [
    "Lungstatus",
    "Lungstatus med diktering"
   ],
   "specialty": "Lunga",
   "kind": "stationstyp",
   "n_sessions": 3,
   "n_questions": 3,
   "n_years": 2,
   "pct": 21.4,
   "category": "enstaka",
   "akut": false,
   "exams": [
    "HT24",
    "oVT25",
    "oHT25"
   ],
   "card": {
    "fk": "Genomföra lungstatus och diktera fynd och sannolik diagnos i en journalanteckning.",
    "v": [
     "Inspektion – palpation – perkussion – auskultation",
     "Jämför sidor, bak och fram",
     "Verbalisera fynd",
     "Diktera: Status + tolkning + diagnos"
    ],
    "k": "Patienten söker med andfåddhet/hosta. Du ska undersöka lungorna och därefter diktera statusfynd och bedömning. Ingen anamnes eller återkoppling ingår.",
    "d": "Dämpning + bronkialandning + rassel talar för pneumoni; dämpning + nedsatt andningsljud för pleuravätska; hypersonor + nedsatt andningsljud för pneumotorax.",
    "b": "Lungröntgen, spirometri, saturation, labb; behandling efter diagnos.",
    "m": "Beskriv fynden högt och dikterat, inklusive sannolik diagnos. Jämför sidor i varje moment."
   },
   "related": [
    "kol",
    "astma",
    "lungproc"
   ],
   "fam": "Lungstatus och diktat"
  },
  {
   "id": "lungproc",
   "name": "Pneumotorax, pleuravätska och arteriell blodgas",
   "synonyms": [
    "Arteriell blodgas",
    "Bedömning av pneumotorax",
    "Blodgas",
    "Pleuravätska",
    "Pleuravätska – handläggning",
    "Pneumotorax"
   ],
   "specialty": "Lunga",
   "kind": "stationstyp",
   "n_sessions": 3,
   "n_questions": 3,
   "n_years": 2,
   "pct": 21.4,
   "category": "enstaka",
   "akut": false,
   "exams": [
    "HT23",
    "VT24",
    "oVT25"
   ],
   "card": {
    "fk": "Bedöma och handlägga pneumotorax eller pleuravätska, eller utföra arteriell blodgas på en docka.",
    "v": [
     "Pneumotorax: liten → observera, stor/symtom → dränage",
     "Light: protein >0,5, LDH >0,6",
     "Blodgas: Allen, radialis, tryck 5 min"
    ],
    "k": "Du träffar en patient på akuten med andnöd/sidosmärta och röntgenfynd (pneumotorax eller pleuravätska) och ska handlägga, eller du ska ta en arteriell blodgas.",
    "d": "Exsudat enligt Light: pleura/serumprotein >0,5, pleura/serum-LDH >0,6 eller pleura-LDH >2/3 av övre referensvärdet i serum.",
    "b": "Spänningspneumotorax: nåldekompression omedelbart, sedan dränage; lämna inte patienten.",
    "m": "Tänk spänningspneumotorax om patienten är cirkulatoriskt påverkad. Aseptik och märkning av blodgasprov. Spänningspneumotorax är ett kliniskt, akut tillstånd: behandla utan väntan på röntgen."
   },
   "related": [
    "kol",
    "astma",
    "lungstatus"
   ],
   "fam": "Pneumotorax, pleuravätska och arteriell blodgas"
  },
  {
   "id": "diabetes",
   "name": "Diabetes: debut, kost och motion",
   "synonyms": [
    "Diabetesdebut",
    "Diabetesdebut – anamnes och information",
    "Nydebuterad typ 2-diabetes – kost och motion",
    "Typ 2-diabetes"
   ],
   "specialty": "Endokrinologi",
   "kind": "stationstyp",
   "n_sessions": 3,
   "n_questions": 3,
   "n_years": 2,
   "pct": 21.4,
   "category": "enstaka",
   "akut": false,
   "exams": [
    "VT23",
    "oVT23",
    "oHT24"
   ],
   "card": {
    "fk": "Ta anamnes och informera vid nyupptäckt typ 2-diabetes: diagnos, livsstil, behandling och uppföljning.",
    "v": [
     "HbA1c ≥48 / fP-glukos ≥7,0",
     "Livsstil först, metformin",
     "Fot och ögon",
     "Små steg"
    ],
    "k": "Patienten har nyupptäckt diabetes eller riskfaktorer. Du ska ta anamnes, förklara diagnosen, ge livsstilsråd och planera behandling.",
    "d": "Typ 1 misstänks vid ung ålder, snabb viktnedgång, ketoner: GAD-antikroppar.",
    "b": "Livsstil, metformin, riskfaktorkontroll (blodtryck, statin), regelbunden kontroll.",
    "m": "Förklara diagnos och livsstilsåtgärder begripligt. Planera uppföljning."
   },
   "related": [
    "tyreoidea"
   ],
   "fam": "Diabetes: debut, kost och motion"
  },
  {
   "id": "njure_anam",
   "name": "Njure: anamnes vid hematuri, proteinuri och nefrotiskt syndrom",
   "synonyms": [
    "Förhöjt kreatinin – njuranamnes",
    "Nefrotiskt syndrom",
    "Nefrotiskt syndrom – njuranamnes",
    "Njuranamnes",
    "Njursvikt",
    "Njursvikt/hematuri"
   ],
   "specialty": "Njurmedicin",
   "kind": "stationstyp",
   "n_sessions": 3,
   "n_questions": 3,
   "n_years": 2,
   "pct": 21.4,
   "category": "enstaka",
   "akut": false,
   "exams": [
    "VT24",
    "VT26",
    "oVT26"
   ],
   "card": {
    "fk": "Ta strukturerad njurmedicinsk anamnes utifrån labsvar och föreslå utredning.",
    "v": [
     "Socialt – hereditet – sjukdomar – läkemedel – miktion – övrigt",
     "Sediment och kvot",
     "Serologi + ultraljud",
     "Remiss njurmedicin"
    ],
    "k": "Du träffar en patient med förhöjt kreatinin, proteinuri eller ödem. Du ska ta anamnes (utan status) och föreslå utredningsplan.",
    "d": "Hematuri + proteinuri + stigande kreatinin = glomerulär sjukdom tills motsatsen bevisats.",
    "b": "Utredning: sediment, 24-h/kvot, serologi, ultraljud, ev. njurbiopsi.",
    "m": "Följ strukturen och sammanfatta. Ge en konkret utredningsplan."
   },
   "related": [
    "njure_ssk"
   ],
   "fam": "Njure: anamnes vid hematuri, proteinuri och nefrotiskt syndrom"
  },
  {
   "id": "gastro_lever",
   "name": "Gastro: förhöjda leverprover (kolestas)",
   "synonyms": [
    "Kolestas",
    "Trötthet – förhöjda leverprover"
   ],
   "specialty": "Gastroenterologi",
   "kind": "stationstyp",
   "n_sessions": 3,
   "n_questions": 3,
   "n_years": 2,
   "pct": 21.4,
   "category": "enstaka",
   "akut": false,
   "exams": [
    "VT23",
    "oVT23",
    "oHT25"
   ],
   "card": {
    "fk": "Ta kompletterande anamnes vid förhöjda leverprover, prioritera statusmoment muntligt och föreslå utredning.",
    "v": [
     "Kolestas: ALP, GT, bilirubin",
     "Ultraljud + MRCP",
     "Läkemedel och alkohol",
     "Prioritera status"
    ],
    "k": "Du har tagit leverprover (ALP, GT, bilirubin förhöjda) på en patient som söker för trötthet. Du ska komplettera anamnes, beskriva statusprioriteringar och förklara utredningsplan.",
    "d": "Högt ALP/GT och konjugerat bilirubin med måttligt förhöjda transaminaser = kolestas.",
    "b": "Ultraljud, MRCP/ERCP, serologi, behandling efter orsak; kontakta gastroenterolog.",
    "m": "Ange prioriterade statusmoment. Föreslå lämplig utredning och förklara den begripligt."
   },
   "related": [
    "gastro_buk"
   ],
   "fam": "Gastro: förhöjda leverprover (kolestas)"
  },
  {
   "id": "trotthet",
   "name": "Trötthet och orkeslöshet: anamnes och differentialdiagnoser",
   "synonyms": [
    "Trötthet",
    "Trötthet och differentialdiagnoser i primärvård",
    "Återbesök – trötthet och orkeslöshet"
   ],
   "specialty": "Allmänmedicin",
   "kind": "stationstyp",
   "n_sessions": 2,
   "n_questions": 2,
   "n_years": 1,
   "pct": 14.3,
   "category": "enstaka",
   "akut": false,
   "exams": [
    "oHT24",
    "oVT25"
   ],
   "card": {
    "fk": "Ta bred anamnes vid trötthet, bedöma differentialdiagnoser och föreslå utredning och uppföljning.",
    "v": [
     "Öppen start",
     "Sömn, humör, kost, läkemedel, alkohol",
     "Röda flaggor",
     "Hb, CRP, glukos, TSH, kalcium, kreatinin, ferritin"
    ],
    "k": "Patienten söker för trötthet/orkeslöshet. Du ska ta en strukturerad anamnes, ange differentialdiagnoser och föreslå utredning.",
    "d": "De flesta har ingen allvarlig somatisk orsak, men tröttheten är verklig; ta alltid depression och sömnproblem på allvar.",
    "b": "Basprover, behandla orsak, uppföljning, egenvård (sömnhygien, aktivitet).",
    "m": "Fråga öppet och strukturerat. Ange differentialdiagnoser och motivera prover."
   },
   "related": [
    "hypertoni",
    "levnadsvanor"
   ],
   "fam": "Trötthet och orkeslöshet: anamnes och differentialdiagnoser"
  },
  {
   "id": "hygien",
   "name": "Basal hygienrutin och personlig skyddsutrustning",
   "synonyms": [
    "Basal hygien och PPE vid klinisk undersökning",
    "Basal hygienrutin och personlig skyddsutrustning",
    "Basala hygienrutiner"
   ],
   "specialty": "Infektion",
   "kind": "stationstyp",
   "n_sessions": 2,
   "n_questions": 2,
   "n_years": 2,
   "pct": 14.3,
   "category": "enstaka",
   "akut": false,
   "exams": [
    "VT24",
    "oVT25"
   ],
   "card": {
    "fk": "Visa korrekt handhygien och användning av personlig skyddsutrustning i klinisk situation.",
    "v": [
     "Sprita händerna",
     "Förkläde – mask – visir – handskar",
     "Av: handskar – förkläde – sprit",
     "Sprita efteråt"
    ],
    "k": "Du ska utföra undersökning med basala hygienrutiner och rätt skyddsutrustning och berätta vad du gör.",
    "d": "Droppsmitta: munskydd och visir; kontaktsmitta: förkläde och handskar; luftburen: andningsskydd.",
    "b": "Följ lokala hygienrutiner och Vårdhandboken.",
    "m": "Handhygien före och efter. Rätt ordning på- och avtagning."
   },
   "related": [
    "infektion"
   ],
   "fam": "Basal hygienrutin och personlig skyddsutrustning"
  },
  {
   "id": "recept",
   "name": "Receptförskrivning",
   "synonyms": [
    "Receptförskrivning"
   ],
   "specialty": "Klinisk farmakologi",
   "kind": "stationstyp",
   "n_sessions": 2,
   "n_questions": 2,
   "n_years": 1,
   "pct": 14.3,
   "category": "enstaka",
   "akut": false,
   "exams": [
    "HT25",
    "oHT25"
   ],
   "card": {
    "fk": "Skriva korrekt pappersrecept och informera patienten muntligt om läkemedlet.",
    "v": [
     "Namn + pnr",
     "Substans, styrka, form, dos",
     "Mängd/uttag, utbyte",
     "Signera",
     "Informera muntligt"
    ],
    "k": "Du ska skriva ett pappersrecept (t.ex. omeprazol vid refluxsjukdom) med hjälp av FASS och därefter informera patienten.",
    "d": "Kontrollera allergier och interaktioner innan förskrivning.",
    "b": "Följ FASS och gällande föreskrifter.",
    "m": "Receptets alla delar (4 p). Informera om användning och biverkningar (4 p)."
   },
   "related": [],
   "fam": "Receptförskrivning"
  },
  {
   "id": "lungutr",
   "name": "Lungcancermisstanke, tobaksanamnes och snarkning",
   "synonyms": [
    "Lungcancer",
    "Misstänkt lungcancer – information om röntgenfynd och SVF",
    "Snarkning – diagnosmisstanke och råd",
    "Sömnapné"
   ],
   "specialty": "Lunga",
   "kind": "stationstyp",
   "n_sessions": 1,
   "n_questions": 2,
   "n_years": 1,
   "pct": 7.1,
   "category": "enstaka",
   "akut": false,
   "exams": [
    "oHT24"
   ],
   "card": {
    "fk": "Ta tobaksanamnes och hålla motiverande samtal, informera om misstänkt lungcancer (SVF) eller samtala om snarkning/sömnapné.",
    "v": [
     "Paketår = cig/dag ÷ 20 × år",
     "Motivation 0–10",
     "SVF vid misstänkt lungcancer",
     "Epworth och nattliga apnéer"
    ],
    "k": "Du träffar en patient som rökt, har misstänkt lungcancer eller besväras av snarkning. Du ska ta en strukturerad anamnes och/eller informera och föreslå plan.",
    "d": "Misstänkt lungcancer = remiss i standardiserat vårdförlopp (SVF). Besked: ”misstanke”, inte diagnos.",
    "b": "SVF-remiss: DT thorax, lungröntgen, bronkoskopi, kontaktsjuksköterska.",
    "m": "Beräkna paketår och fråga om motivation. Ge tydlig plan och kontaktväg."
   },
   "related": [
    "kol",
    "astma",
    "lungstatus"
   ],
   "fam": "Lungcancermisstanke, tobaksanamnes och snarkning"
  }
 ],
 "meta": {
  "app": "Termin 6 OSCE-radar",
  "n_sessions_analyzed": 14,
  "exams": [
   {
    "exam": "VT23",
    "year": 2023,
    "term": "VT",
    "kind": "Ordinarie",
    "label": "OSCE I VT23",
    "date": "2023-05-26",
    "source_file": "2. Bedömningsmallar OSCE I VT23.pdf; 1. Dörrinformation OSCE I VT23.pdf",
    "n_items": 12
   },
   {
    "exam": "oVT23",
    "year": 2023,
    "term": "VT",
    "kind": "Om-OSCE",
    "label": "Om-OSCE I VT23",
    "date": "2023-08-25",
    "source_file": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf; 3. Dörrinformation omOSCE I VT23.pdf",
    "n_items": 13
   },
   {
    "exam": "HT23",
    "year": 2024,
    "term": "HT",
    "kind": "Ordinarie",
    "label": "OSCE I HT23",
    "date": "2024-01-12",
    "source_file": "2. Bedömningsmallar OSCE I HT23.pdf; 1. Dörrinformation OSCE I HT23.pdf",
    "n_items": 13
   },
   {
    "exam": "oHT23",
    "year": 2024,
    "term": "HT",
    "kind": "Om-OSCE",
    "label": "Om-OSCE I HT23",
    "date": "2024-02-16",
    "source_file": "4. Bedömningsmallar OMOSCE I HT23.pdf; OMOSCE I HT23 - DÖRRINFORMATION.pdf",
    "n_items": 13
   },
   {
    "exam": "VT24",
    "year": 2024,
    "term": "VT",
    "kind": "Ordinarie",
    "label": "OSCE I VT24",
    "date": "2024-05-24",
    "source_file": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf; OSCE I VT24 - DÖRRINFORMATION.pdf",
    "n_items": 14
   },
   {
    "exam": "oVT24",
    "year": 2024,
    "term": "VT",
    "kind": "Om-OSCE",
    "label": "Om-OSCE I VT24",
    "date": "aug 2024",
    "source_file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf",
    "n_items": 14
   },
   {
    "exam": "HT24",
    "year": 2025,
    "term": "HT",
    "kind": "Ordinarie",
    "label": "OSCE I HT24",
    "date": "2025-01-14",
    "source_file": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf; OSCE I HT24 - DÖRRINFORMATION.pdf",
    "n_items": 13
   },
   {
    "exam": "oHT24",
    "year": 2025,
    "term": "HT",
    "kind": "Om-OSCE",
    "label": "Om-OSCE I HT24",
    "date": "2025-02-21",
    "source_file": "ALLA bedömarmallar omOSCE I HT24.pdf; Dörrinformation OmOSCE I HT24_reviderad.pdf",
    "n_items": 13
   },
   {
    "exam": "VT25",
    "year": 2025,
    "term": "VT",
    "kind": "Ordinarie",
    "label": "OSCE I VT25",
    "date": "2025-05-28",
    "source_file": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf; OSCE I VT25 - DÖRRINFORMATION.pdf",
    "n_items": 14
   },
   {
    "exam": "oVT25",
    "year": 2025,
    "term": "VT",
    "kind": "Om-OSCE",
    "label": "Om-OSCE I VT25",
    "date": "2025-08-29",
    "source_file": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf; OMOSCE I VT25 - DÖRRINFORMATION.pdf",
    "n_items": 14
   },
   {
    "exam": "HT25",
    "year": 2026,
    "term": "HT",
    "kind": "Ordinarie",
    "label": "OSCE I HT25",
    "date": "2026-01-15",
    "source_file": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf; OSCE I HT25 - DÖRRINFORMATION.pdf",
    "n_items": 13
   },
   {
    "exam": "oHT25",
    "year": 2026,
    "term": "HT",
    "kind": "Om-OSCE",
    "label": "Om-OSCE I HT25",
    "date": "2026-02-20",
    "source_file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf; OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "n_items": 13
   },
   {
    "exam": "VT26",
    "year": 2026,
    "term": "VT",
    "kind": "Ordinarie",
    "label": "OSCE I VT26",
    "date": "2026-06-04",
    "source_file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf; DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "n_items": 13
   },
   {
    "exam": "oVT26",
    "year": 2026,
    "term": "VT",
    "kind": "Om-OSCE",
    "label": "Om-OSCE I VT26",
    "date": "2026-08-26",
    "source_file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf; DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "n_items": 13
   }
  ],
  "thresholds": {
   "karnan": "stationstypen i ≥8 av 14 tillfällen",
   "vanliga": "4–7 tillfällen",
   "enstaka": "≤3 tillfällen",
   "note": "Kärnan: stationstyp i ≥8 av 14 OSCE I-tillfällen. Vanliga: 4–7 tillfällen. Enstaka träff: ≤3 tillfällen."
  },
  "caveats": [
   "Frekvenserna beskriver 14 historiska OSCE I-tillfällen (VT23–om-VT26) och är ingen prognos.",
   "Klassificeringen i stationstyper är examensguidens tolkning.",
   "Bedömningsmallarna är maskinutlästa. Poängsumman stämmer, men radtexter kan vara förkortade, och vissa mallar anger bara delmoment (A, B, C) utan beskrivning – jämför med källfilen.",
   "14 stationer saknar bedömningsmall i materialet (om-OSCE I VT24 har bara dörrinformation).",
   "Om-OSCE I HT24: mallarna för station 3 och 9 låg i omvänd ordning mot dörrinformationen och har kopplats om; dörrinformationen för station 13 hör till en annan station.",
   "VT23 station 16 var märkt ”DO NOT INCLUDE” och är utesluten.",
   "Patient-/figurantinstruktioner för historiska stationer finns inte i materialet.",
   "Kliniska förklaringar och övningsfall är allmän kunskap (märkt ”Allmänt”) och ska stämmas av mot aktuella riktlinjer och lokala PM."
  ],
  "counting": "Primärt mått: antal OSCE-tillfällen där stationstypen förekommit (ett tillfälle räknas en gång även om flera stationer). Antal stationer är sekundärt mått."
 },
 "x": {
  "guides": {
   "hlr": {
    "id": "hlr",
    "title": "Basal HLR",
    "fam": "Basal HLR",
    "exam": "Strukturerad basal hjärt-lungräddning på docka där dockans utrustning mäter kvaliteten. Stationen finns med på alla 14 tillfällen och är därmed den mest förutsägbara uppgiften.",
    "task": "Dörrinformationen beskriver en person som hittas livlös på golvet i en vårdsal (patienten är bekräftat covid-negativ). Uppgiften är att utföra basal HLR. Tid: 6 minuter.",
    "prep": [
     "Ha ett fast manus för de första 30 sekunderna.",
     "Öva högt med tidtagning."
    ],
    "steps": [
     "Säkerhet och medvetandekontroll: ruska försiktigt i axlarna och ropa högt.",
     "Larma: tryck på larmknappen i rummet eller ropa på hjälp (och be om hjärtstartare).",
     "Öppna luftvägen (huvudlutning/hakläft) och håll den öppen under hela andningskontrollen.",
     "Titta, lyssna, känn efter normal andning i upp till 10 sekunder.",
     "Ingen normal andning: 30 kompressioner mitt på bröstbenet, 5–6 cm djupt, full återställning, 100–120/min.",
     "2 inblåsningar (ca 1 sekund vardera, synlig bröstkorgsrörelse); minimera pausen och fortsätt 30:2.",
     "Berätta högt vad du gör; fortsätt tills du avbryts."
    ],
    "say": [
     "”Hallå, hör du mig?” (ruska + ropa)",
     "”Jag larmar. Kom hit, jag behöver hjälp och en hjärtstartare!”",
     "”Ingen normal andning, jag startar HLR.”"
    ],
    "interp": [
     "Livlös person utan normal andning = misstänkt hjärtstopp tills motsatsen bevisats.",
     "Kvaliteten på kompressioner och inblåsningar väger tyngst i mallen: 6 av 10 poäng."
    ],
    "ddx": [
     "Primärt hjärtstopp (VF/VT, asystoli, PEA). Orsaker (4H/4T) hanteras i avancerad HLR."
    ],
    "mgmt": [
     "Basal HLR 30:2 tills hjärtstartare/team tar över; AED så fort den finns.",
     "Allmänt: följ gällande riktlinjer från Svenska rådet för hjärt-lungräddning och kontrollera att du kan den senaste versionen."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 14 av 14 tillfällen (14 stationer).",
     "Dokumenterat: i senaste mallen (oVT26 st. 14) ger ”Utfört kompressioner med minst 80% godkända” 2,5 p och ”Utfört inblåsningar med minst 80% godkända” 2 p av 10.",
     "Dokumenterat: säkerhetsmoment som poängsatts: Larmar (på larmknapp i rummet, alt ropar på hjälp)."
    ],
    "pitGen": [
     "Allmänt: för grunda eller för snabba kompressioner, lutning på bröstkorgen mellan tagen.",
     "Allmänt: långa pauser, hyperventilation, luft i magsäcken vid för kraftiga inblåsningar."
    ],
    "never": [
     "Larma, även om rummet verkar tomt (0,5 p).",
     "Håll luftvägen öppen under hela andningskontrollen (1,5 p).",
     "Rätt frekvens 100–120/min och minst 80 % godkända kompressioner."
    ],
    "quick": [
     "Ruska + ropa",
     "Larm/hjälp",
     "Luftväg öppen",
     "Titta-lyssna-känn max 10 s",
     "30 kompressioner (5–6 cm, 100–120/min)",
     "2 inblåsningar",
     "Fortsätt 30:2 och prata högt"
    ],
    "rub": [
     {
      "key": "oVT26|14",
      "label": "Senaste mallen (oVT26 st. 14)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
     }
    ],
    "safety": "Livshotande tillstånd. Fel eller fördröjning påverkar överlevnad."
   },
   "kol": {
    "id": "kol",
    "title": "KOL, spirometri och obstruktiv/restriktiv lungsjukdom",
    "fam": "KOL, spirometri och obstruktiv/restriktiv lungsjukdom",
    "exam": "Tolka spirometri, ställa diagnos (KOL, GOLD-stadium, restriktivt mönster) och informera patienten, eller bedöma och ordinera vid KOL-försämring (SBAR).",
    "task": "Du får en spirometriutskrift (eller en inläggningsjournal vid exacerbation) och ska tolka den, berätta hur du tänker, informera patienten om diagnos/behandling eller rapportera enligt SBAR och ge ordinationer.",
    "prep": [
     "Lär dig spirometri-tolkningen som en rutin: först kvot, sedan FEV1 i % av förväntat, sedan reversibilitet.",
     "Öva på att förklara KOL på lekmannaspråk på under en minut.",
     "Repetera exacerbationsbehandling: bronkdilatation, kortison, syrgas med mål, antibiotika vid purulent sputum."
    ],
    "steps": [
     "Läs utskriften: FEV1, FVC, FEV1/FVC och värdena efter bronkdilatation.",
     "Obstruktion: FEV1/FVC efter bronkdilatation under 0,70 (GOLD). Restriktion: FVC sänkt med normal/hög kvot (bekräftas med lungvolymer).",
     "Reversibilitet: ökning av FEV1 med minst 12 % och 200 ml talar för astma, uteblivet svar för KOL.",
     "GOLD-stadium efter FEV1 % av förväntat: 1 ≥80 %, 2 50–79 %, 3 30–49 %, 4 <30 %.",
     "Berätta för bedömaren hur du tänker, sedan för patienten i enkla ord.",
     "Information: rökstopp, inhalationsbehandling, vaccination, fysisk aktivitet, när man ska söka vård.",
     "Vid exacerbation (SBAR): bakgrund, vitalparametrar och A-gas, bronkdilatation, kortison, syrgas med saturationsmål, antibiotika, rtg, odlingar."
    ],
    "say": [
     "”Det här är en blåsprovsmätning. Den visar att luftrören är trängre än normalt och att det inte går över av luftrörsvidgande medel.”",
     "”Det här är KOL. Den vanligaste orsaken är rökning. Det går inte att läka, men vi kan bromsa och lindra.”",
     "”Det viktigaste du kan göra är att inte röka. Vi kan hjälpa dig med det.”"
    ],
    "interp": [
     "Kvot <0,70 efter bronkdilatation som inte normaliseras = fixerad obstruktion = KOL i rätt klinik (rökare, hosta, dyspné).",
     "Sänkt FVC med normal kvot = restriktivt mönster, tänk lungfibros, extrapulmonär orsak (obesitas, thoraxdeformitet), kräver lungvolymer och DLCO.",
     "Exacerbation: ökad dyspné, ökad sputummängd, purulent sputum."
    ],
    "ddx": [
     "KOL, astma (reversibel), restriktiv lungsjukdom (ILD, obesitas), hjärtsvikt, anemi, lungcancer."
    ],
    "mgmt": [
     "KOL: rökstopp, LAMA ± LABA, SABA vid behov, vaccin (influensa, pneumokock, covid), fysisk aktivitet/KOL-skola, utvärdera syrgasbehov vid saturation <90 %.",
     "Exacerbation: SABA/ipratropium inhalation, prednisolon 30–40 mg i 5 dagar, antibiotika vid purulent sputum, kontrollerad syrgas (mål 88–92 %), blodgas, lungröntgen, sputumodling/virus-PCR.",
     "Allmänt: kontrollera lokala PM och aktuella riktlinjer."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 8 av 14 tillfällen (8 stationer).",
     "Dokumenterat: i senaste mallen (oVT26 st. 3) ger ”Tolka spirometriresultat” 3 p och ”Informera patient om utredningsresultat och diagnos” 3 p av 10.",
     "Dokumenterat: säkerhetsmoment som poängsatts: Ger en saturationsgräns."
    ],
    "pitGen": [
     "Allmänt: ge hög syrgasdos utan saturationsmål till KOL-patient (risk för hyperkapni).",
     "Allmänt: säga ”astma” fast svaret på bronkdilatation uteblev."
    ],
    "never": [
     "Säg en saturationsgräns när du ordinerar syrgas till KOL-patient.",
     "Förklara diagnosen utan facktermer och fråga om rökning.",
     "Ange GOLD-stadium utifrån FEV1 i % av förväntat."
    ],
    "quick": [
     "Kvot <0,70 efter bronkdilatation",
     "GOLD 1–4 efter FEV1 %",
     "Reversibilitet ≥12 % och ≥200 ml",
     "Rökstopp först",
     "Saturationsmål 88–92 % vid KOL",
     "Exacerbation: bronkdilatation, kortison, ev. antibiotika"
    ],
    "rub": [
     {
      "key": "oVT26|3",
      "label": "Senaste mallen (oVT26 st. 3)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
     }
    ],
    "safety": "Syrgas till KOL-patient: sätt saturationsmål, övervaka med blodgas."
   },
   "astma": {
    "id": "astma",
    "title": "Astma: inhalationsteknik, ACT och PEF-dagbok",
    "fam": "Astma: inhalationsteknik, ACT och PEF-dagbok",
    "exam": "Instruera eller kontrollera inhalationsteknik, bedöma astmakontroll med ACT eller instruera PEF-mätning och tolka PEF-dagbok.",
    "task": "Du träffar en patient med (misstänkt) astma. Du ska demonstrera/kontrollera inhalator, bedöma kontroll med ACT eller instruera PEF och tolka en dagbok.",
    "prep": [
     "Ha en fast ordning för varje inhalator du kan: förbered, andas ut, inhalera, håll andan, skölj munnen.",
     "Öva teach-back: låt patienten visa tillbaka.",
     "Repetera ACT: 5 frågor, 5–25 p, ≥20 = välkontrollerad."
    ],
    "steps": [
     "Fråga vilken inhalator och vilka läkemedel patienten använder; bekräfta att det är rätt inhalator.",
     "Visa tekniken steg för steg på lekmannaspråk, låt patienten visa och korrigera.",
     "Turbuhaler: skruva av locket, vrid fram och tillbaka, andas ut bort från mundstycket, kraftig och djup inandning, håll andan 5–10 s.",
     "Sprayinhalator (pMDI): skaka, andas ut, långsam inandning och tryck samtidigt, håll andan; använd spacer vid behov.",
     "Skölj munnen efter inhalationssteroid och spotta ut.",
     "ACT: gå igenom de fem frågorna, summera; ≤19 = ej välkontrollerad.",
     "PEF: stå upp, djupt andetag, blås snabbt och hårt, 3 försök, notera högsta; mät morgon och kväll i 2 veckor, före och efter inhalation."
    ],
    "say": [
     "”Visa mig hur du tar din medicin så ser vi tillsammans om något kan bli lite bättre.”",
     "”Skölj munnen efteråt och spotta ut, så undviker du svampinfektion.”",
     "”Skriv in varje mätning i dagboken, även när du mår bra.”"
    ],
    "interp": [
     "Daglig variation i PEF över ca 20 % eller ökning över 60 L/min efter bronkdilatation talar för astma.",
     "ACT 20–25 = välkontrollerad, 16–19 = ej välkontrollerad, ≤15 = dåligt kontrollerad.",
     "Normal spirometri utesluter inte astma: PEF-variation och dagbok kan stödja diagnosen."
    ],
    "ddx": [
     "Astma, KOL, allergi, hjärtsvikt, stämbandsdysfunktion, hyperventilation."
    ],
    "mgmt": [
     "Inhalationssteroid som basbehandling, SABA/formoterol vid behov; trappa upp vid dålig kontroll efter att tekniken kontrollerats.",
     "Skriftlig handlingsplan; undvik triggers; rökstopp.",
     "Allmänt: kontrollera aktuell Läkemedelsverkets behandlingsrekommendation."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 4 av 14 tillfällen (5 stationer).",
     "Dokumenterat: i senaste mallen (VT26 st. 12) ger ”Instruera inhalationsteknik” 3 p och ”Bemöta och kommunicera professionellt med patienter” 3 p av 10."
    ],
    "pitGen": [
     "Allmänt: förklara tekniken men låt inte patienten visa själv.",
     "Allmänt: öka behandlingen utan att först kontrollera teknik och följsamhet."
    ],
    "never": [
     "Låt patienten visa tekniken och korrigera.",
     "Tolka dagboken diagnostiskt (variation, morgonvärden).",
     "Professionellt bemötande och teach-back."
    ],
    "quick": [
     "Visa – låt patienten visa",
     "Utandning, kraftig inandning, håll andan",
     "Skölj munnen efter steroid",
     "ACT ≥20 välkontrollerad",
     "PEF-variation >20 % talar för astma"
    ],
    "rub": [
     {
      "key": "VT26|12",
      "label": "Senaste mallen (VT26 st. 12)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
     }
    ]
   },
   "lungstatus": {
    "id": "lungstatus",
    "title": "Lungstatus och diktat",
    "fam": "Lungstatus och diktat",
    "exam": "Genomföra lungstatus och diktera fynd och sannolik diagnos i en journalanteckning.",
    "task": "Patienten söker med andfåddhet/hosta. Du ska undersöka lungorna och därefter diktera statusfynd och bedömning. Ingen anamnes eller återkoppling ingår.",
    "prep": [
     "Öva på att verbalisera varje moment under undersökningen.",
     "Öva ett diktat i fasta formuleringar (Status: AT, Resp: …)."
    ],
    "steps": [
     "Hälsa, förklara, be patienten ta av överkroppen och sätta sig upp; handhygien.",
     "Inspektion: allmäntillstånd, andningsfrekvens, andningsarbete, cyanos, trumpinnefingrar, thorax form.",
     "Palpation: symmetrisk thoraxexpansion, taktil fremitus.",
     "Perkussion: jämför sidor, dämpning eller hypersonor, bak och fram.",
     "Auskultation: andningsljud, förlängt exspirium, biljud (rassel, ronki, pip, pleurafrikt); jämför sidor.",
     "Diktera: ”Status: Opåverkad i vila, AF …, Lungor: …”, tolka och ange sannolik diagnos."
    ],
    "say": [
     "”Jag lyssnar på lungorna på båda sidor och jämför, andas djupt genom munnen.”",
     "”Nu knackar jag på ryggen för att känna om det låter dämpat.”"
    ],
    "interp": [
     "Dämpning + bronkialandning + rassel talar för pneumoni; dämpning + nedsatt andningsljud för pleuravätska; hypersonor + nedsatt andningsljud för pneumotorax.",
     "Pip och förlängt exspirium talar för obstruktion; basala finvågiga knatterrassel för fibros eller lungödem."
    ],
    "ddx": [
     "KOL, astma, pneumoni, hjärtsvikt, lungfibros, lungcancer, pleuravätska."
    ],
    "mgmt": [
     "Lungröntgen, spirometri, saturation, labb; behandling efter diagnos."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 3 av 14 tillfällen (3 stationer).",
     "Dokumenterat: i senaste mallen (oHT25 st. 1) ger ”Status” 4 p och ”Diktat” 4 p av 10."
    ],
    "pitGen": [
     "Allmänt: glömmer att jämföra sidor eller undersöka bak och fram.",
     "Allmänt: diktat utan tolkning eller sannolik diagnos."
    ],
    "never": [
     "Beskriv fynden högt och dikterat, inklusive sannolik diagnos.",
     "Jämför sidor i varje moment."
    ],
    "quick": [
     "Inspektion – palpation – perkussion – auskultation",
     "Jämför sidor, bak och fram",
     "Verbalisera fynd",
     "Diktera: Status + tolkning + diagnos"
    ],
    "rub": [
     {
      "key": "oHT25|1",
      "label": "Senaste mallen (oHT25 st. 1)",
      "total": 10,
      "declared": 10,
      "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
     }
    ]
   },
   "lungproc": {
    "id": "lungproc",
    "title": "Pneumotorax, pleuravätska och arteriell blodgas",
    "fam": "Pneumotorax, pleuravätska och arteriell blodgas",
    "exam": "Bedöma och handlägga pneumotorax eller pleuravätska, eller utföra arteriell blodgas på en docka.",
    "task": "Du träffar en patient på akuten med andnöd/sidosmärta och röntgenfynd (pneumotorax eller pleuravätska) och ska handlägga, eller du ska ta en arteriell blodgas.",
    "prep": [
     "Repetera Lights kriterier och vad som skiljer transudat från exsudat.",
     "Öva blodgasens steg: Allen’s test, punktion, tryck, märkning."
    ],
    "steps": [
     "Anamnes: debut, smärta, andfåddhet, rökning, trauma, tidigare lungsjukdom.",
     "Bedöm allmäntillstånd och vitalparametrar; tänk spänningspneumotorax vid cirkulatorisk påverkan.",
     "Förklara röntgenfyndet och vad det betyder för patienten.",
     "Pneumotorax: liten, stabil patient → observation/syrgas; stor eller symtomatisk → aspiration eller dränage.",
     "Pleuravätska: diagnostisk punktion, vätskeanalys enligt Lights kriterier; behandla orsaken.",
     "Blodgas: handhygien, Allen’s test, a. radialis, vinkel 30–45°, hepariniserad spruta, ta ut luft, tryck 5 min, märk och tolka pH, pCO₂, pO₂, HCO₃⁻."
    ],
    "say": [
     "”Det har kommit luft mellan lungan och bröstkorgen, det kallas pneumotorax.”",
     "”Det finns vätska mellan lungan och bröstkorgsväggen. Vi tar prov på den för att hitta orsaken.”"
    ],
    "interp": [
     "Exsudat enligt Light: pleura/serumprotein >0,5, pleura/serum-LDH >0,6 eller pleura-LDH >2/3 av övre referensvärdet i serum.",
     "Transudat ses oftast vid hjärtsvikt, levercirros och nefros; exsudat vid pneumoni, cancer, lungemboli."
    ],
    "ddx": [
     "Pneumotorax (primär/sekundär), pleuravätska (transudat/exsudat), lungemboli, pneumoni, hjärtsvikt, malignitet."
    ],
    "mgmt": [
     "Spänningspneumotorax: nåldekompression omedelbart, sedan dränage; lämna inte patienten.",
     "Pleuravätska: tappning vid symtom, odling, cytologi, pH, behandling av orsaken.",
     "Allmänt: lokala PM."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 3 av 14 tillfällen (3 stationer).",
     "Dokumenterat: senaste mallen (oVT25 st. 15) fördelar poängen jämnt på 2 moment (5 p vardera) – varje moment räknas lika."
    ],
    "pitGen": [
     "Allmänt: undersöker inte cirkulation (Allen’s test) före arteriell punktion.",
     "Allmänt: för kort tryck efter arteriepunktion."
    ],
    "never": [
     "Tänk spänningspneumotorax om patienten är cirkulatoriskt påverkad.",
     "Aseptik och märkning av blodgasprov."
    ],
    "quick": [
     "Pneumotorax: liten → observera, stor/symtom → dränage",
     "Light: protein >0,5, LDH >0,6",
     "Blodgas: Allen, radialis, tryck 5 min"
    ],
    "rub": [
     {
      "key": "oVT25|15",
      "label": "Senaste mallen (oVT25 st. 15)",
      "total": 10,
      "declared": 10,
      "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf"
     }
    ],
    "safety": "Spänningspneumotorax är ett kliniskt, akut tillstånd: behandla utan väntan på röntgen."
   },
   "lungutr": {
    "id": "lungutr",
    "title": "Lungcancermisstanke, tobaksanamnes och snarkning",
    "fam": "Lungcancermisstanke, tobaksanamnes och snarkning",
    "exam": "Ta tobaksanamnes och hålla motiverande samtal, informera om misstänkt lungcancer (SVF) eller samtala om snarkning/sömnapné.",
    "task": "Du träffar en patient som rökt, har misstänkt lungcancer eller besväras av snarkning. Du ska ta en strukturerad anamnes och/eller informera och föreslå plan.",
    "prep": [
     "Räkna paketår: cigaretter per dag/20 × antal år.",
     "Öva att ge ett misstänkt cancerbesked: tydligt, empatiskt, utan att utlova diagnos."
    ],
    "steps": [
     "Presentera dig, öppen fråga om vad patienten söker för.",
     "Tobak: hur länge, hur mycket (paketår), tidigare stoppförsök, tid till första cigarett, motivation (skala 0–10), vad som skulle hjälpa.",
     "Lungcancermisstanke: hosta >3 veckor, blodhosta, viktnedgång, heshet, thoraxsmärta; asbest/radon/yrke.",
     "Snarkning: nattliga andningsuppehåll, dagtrötthet (Epworth), vikt, alkohol, blodtryck.",
     "Information: planerad utredning (DT thorax, ev. bronkoskopi/biopsi), standardiserat vårdförlopp, kontaktsjuksköterska, uppskattad tid.",
     "Motiverande samtal: öppna frågor, bekräfta, reflektera, sammanfatta; erbjud rökavvänjning."
    ],
    "say": [
     "”Jag vill gärna förstå hur du ser på rökningen. Hur viktig är det för dig att sluta, på en skala 0–10?”",
     "”Bilden gör att vi vill utreda en möjlig lungsjukdom, bland annat lungcancer. Det är inte säkert, men vi går vidare snabbt.”"
    ],
    "interp": [
     "Misstänkt lungcancer = remiss i standardiserat vårdförlopp (SVF). Besked: ”misstanke”, inte diagnos.",
     "Snarkning med apnéer och dagtrötthet: tänk obstruktiv sömnapné (utredning med nattlig andningsregistrering)."
    ],
    "ddx": [
     "Lungcancer, KOL, tuberkulos, sarkoidos, obstruktiv sömnapné, hypotyreos."
    ],
    "mgmt": [
     "SVF-remiss: DT thorax, lungröntgen, bronkoskopi, kontaktsjuksköterska.",
     "Rökstopp: samtalsstöd, nikotinersättning, vareniklin; Sluta-Röka-Linjen.",
     "Sömnapné: viktminskning, undvik alkohol/sederande, utredning, ev. CPAP."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 1 av 14 tillfällen (2 stationer).",
     "Dokumenterat: i senaste mallen (oHT24 st. 9) ger ”Professionalitet” 3 p och ”C Utredning” 1,5 p av 10."
    ],
    "pitGen": [
     "Allmänt: moraliserar om rökning, vilket sänker motivationen.",
     "Allmänt: lovar ”inte cancer” innan utredning är klar."
    ],
    "never": [
     "Beräkna paketår och fråga om motivation.",
     "Ge tydlig plan och kontaktväg."
    ],
    "quick": [
     "Paketår = cig/dag ÷ 20 × år",
     "Motivation 0–10",
     "SVF vid misstänkt lungcancer",
     "Epworth och nattliga apnéer"
    ],
    "rub": [
     {
      "key": "oHT24|9",
      "label": "Senaste mallen (oHT24 st. 9)",
      "total": 10,
      "declared": 10,
      "source": "ALLA bedömarmallar omOSCE I HT24.pdf"
     }
    ]
   },
   "allergi": {
    "id": "allergi",
    "title": "Allergisk rinokonjunktivit och angioödem",
    "fam": "Allergisk rinokonjunktivit och angioödem",
    "exam": "Tolka pricktest och informera om diagnos och behandling vid allergisk rinokonjunktivit, eller handlägga akut angioödem och utesluta anafylaxi.",
    "task": "Du ska tolka ett pricktest eller bedöma en patient med akut läppsvullnad och förklara diagnos, behandling och egenvård.",
    "prep": [
     "Kunna skilja sensibilisering från allergi.",
     "Repetera uteslutande av anafylaxi (hud, luftväg, cirkulation) och akutbehandling."
    ],
    "steps": [
     "Pricktest: positivt = kvaddel ≥3 mm större än negativ kontroll; histaminkontroll ska vara positiv.",
     "Koppla testet till symtom (säsong, pollen, djur, kvalster).",
     "Förklara diagnos med lekmannaspråk, ge behandling: nasal steroid, oral antihistamin, ögondroppar, allergenundvikande.",
     "Angioödem: bedöm luftväg, andning, cirkulation och hudsymtom; utesluta anafylaxi.",
     "Akut: antihistamin ± kortison vid histaminmedierat; adrenalin intramuskulärt vid anafylaxi.",
     "Anamnes: utlösare (mat, läkemedel, ACE-hämmare), tidigare episoder, släkt.",
     "Uppföljning och råd: undvik utlösare, tydliga varningstecken."
    ],
    "say": [
     "”Testet visar att du är allergisk mot björkpollen, vilket stämmer med dina besvär på våren.”",
     "”Svullnaden är ofarlig om andningen är fri, men söker du direkt vid andnöd eller heshet.”"
    ],
    "interp": [
     "Positivt pricktest + passande symtom = allergi; test utan symtom = sensibilisering.",
     "Angioödem utan nässelutslag och utan effekt av antihistamin: tänk bradykininmedierat (ACE-hämmare, ärftligt)."
    ],
    "ddx": [
     "Allergisk/icke-allergisk rinit, infektion, anafylaxi, ACE-hämmar-angioödem, ärftligt angioödem (C1-esterashämmarbrist)."
    ],
    "mgmt": [
     "Rinokonjunktivit: nasal steroid i första hand, oral antihistamin, ögondroppar; allergenspecifik immunterapi vid svår, välavgränsad allergi.",
     "Angioödem: ABC, antihistamin/kortison, adrenalin vid anafylaxi; ärftligt: C1-esterashämmare/ikatibant; avsluta ACE-hämmare.",
     "Allmänt: lokala PM."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 4 av 14 tillfällen (4 stationer).",
     "Dokumenterat: senaste mallen (oVT26 st. 9) fördelar poängen jämnt på 2 moment (5 p vardera) – varje moment räknas lika.",
     "Dokumenterat: säkerhetsmoment som poängsatts: Utesluta anafylaxi, akutbehandling, anamnes och råd angioödem."
    ],
    "pitGen": [
     "Allmänt: använder facktermer utan förklaring.",
     "Allmänt: ordinerar behandling utan att fråga om egenvård och undvikande."
    ],
    "never": [
     "Utesluta anafylaxi och ordinera akutbehandling.",
     "Förklara pedagogiskt och bemöt oron."
    ],
    "quick": [
     "Kvaddel ≥3 mm = positivt",
     "Anafylaxi? Hud, luftväg, cirkulation",
     "Nasal steroid först",
     "Adrenalin i muskel vid anafylaxi"
    ],
    "rub": [
     {
      "key": "oVT26|9",
      "label": "Senaste mallen (oVT26 st. 9)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
     }
    ],
    "safety": "Angioödem: luftvägen först; bedöm stridor och talsvårigheter."
   },
   "hjartstatus": {
    "id": "hjartstatus",
    "title": "Hjärtstatus, blåsljud och EKO-fynd",
    "fam": "Hjärtstatus, blåsljud och EKO-fynd",
    "exam": "Genomföra hjärtstatus på Harvey-docka (eller patient), ange klaff och blåsljud och föreslå utredning, eller tolka ett ekokardiografiutlåtande och återkoppla.",
    "task": "Du ska göra komplett hjärtstatus, beskriva ljud, ange rimlig genes och diagnos och föreslå utredning; eller förklara ett eko-svar för patienten per telefon.",
    "prep": [
     "Lär dig de fyra auskultationsställena och ordningen.",
     "Skilj systoliskt från diastoliskt blåsljud: kände du pulsen samtidigt?",
     "Öva på att förklara en klaffsjukdom i enkla ord."
    ],
    "steps": [
     "Hälsa, förklara, be patienten lägga sig med överkroppen något upphöjd.",
     "Inspektion och palpation: halsvener, ödem, puls, apex.",
     "Auskultera: aorta (2:a ICR höger), pulmonalis (2:a ICR vänster), trikuspidalis (4:e ICR vänster), mitralis (apex), och karotider.",
     "Palpera perifer puls (a. radialis eller karotis) samtidigt för att tidsätta ljuden.",
     "Beskriv ljuden: S1, S2, blåsljud (tidpunkt, kvalitet, utstrålning).",
     "Ange rimlig genes (förvärvad, reumatisk, kongenital), preliminär diagnos och fortsatt utredning (EKG, eko).",
     "Återkoppling per telefon: fråga hur patienten mår, förklara fyndet, planera uppföljning."
    ],
    "say": [
     "”Jag lyssnar vid aortaklaffen och halsartärerna samtidigt som jag känner pulsen.”",
     "”Ultraljudet visar att en hjärtklaff är trång. Det är något vi följer och hjälper dig med vid behov.”"
    ],
    "interp": [
     "Crescendo–decrescendo, utstrålning mot karotiderna = aortastenos. Vmax >4 m/s = svår stenos.",
     "Holosystoliskt vid apex, utstrålning mot axillen = mitralisinsufficiens.",
     "Diastoliskt rumble vid apex med öppningston = mitralisstenos (reumatisk).",
     "Diastoliskt decrescendo parasternellt = aortainsufficiens."
    ],
    "ddx": [
     "Aortastenos (degenerativ/bikuspid), mitralisinsufficiens, mitralisstenos, aortainsufficiens, hypertrofisk kardiomyopati, funktionellt blåsljud."
    ],
    "mgmt": [
     "EKG och ekokardiografi; remiss kardiolog.",
     "Symtomatisk svår aortastenos: klaffersättning; följ asymtomatiska regelbundet.",
     "Information: uppföljning, vilka symtom som ska leda till kontakt (bröstsmärta, svimning, andfåddhet)."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 7 av 14 tillfällen (9 stationer).",
     "Dokumenterat: i senaste mallen (oVT26 st. 1) ger ”Rimligt hjärtstatus (rätt lokalisation och anger rätt klaff)” 4 p och ”Anger om det finns och beskriver ev. blåsljud och biljud” 1 p av 10."
    ],
    "pitGen": [
     "Allmänt: anger fel klaff eller fel tidpunkt för blåsljud.",
     "Allmänt: glömmer karotisauskultation och perifer puls."
    ],
    "never": [
     "Ange vilken klaff du hör var och beskriv blåsljuden.",
     "Auskultera karotis (1 p) och palpera perifer puls (1 p).",
     "Ge en rimlig diagnos och fortsatt utredning."
    ],
    "quick": [
     "Aorta – pulmonalis – trikuspidalis – mitralis",
     "Karotis och perifer puls",
     "Systoliskt/diastoliskt",
     "Eko + kardiologremiss"
    ],
    "rub": [
     {
      "key": "oVT26|1",
      "label": "Senaste mallen (oVT26 st. 1)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
     }
    ]
   },
   "aks": {
    "id": "aks",
    "title": "Bröstsmärta: AKS, perimyokardit och EKG",
    "fam": "Bröstsmärta: AKS, perimyokardit och EKG",
    "exam": "Ta smärtanamnes, bedöma riskprofil, tolka EKG och informera om misstänkt diagnos och åtgärd vid bröstsmärta.",
    "task": "Du träffar en patient med bröstsmärta på akut- eller hälsocentral, tolkar EKG, kompletterar anamnesen och informerar om diagnos och åtgärd.",
    "prep": [
     "Ha en fast smärtanamnes: debut, lokalisation, karaktär, utstrålning, duration, utlösande/lindrande, associerade symtom.",
     "Repetera högriskfaktorer och differentialdiagnoser.",
     "Öva EKG: rytm, frekvens, ST, T, Q."
    ],
    "steps": [
     "Presentera dig och öppna med att fråga vad som hänt.",
     "Smärtanamnes (se ovan), inklusive samband med ansträngning, vila, andning, läge.",
     "Riskprofil: rökning, hypertoni, diabetes, lipider, hereditet, ålder; tidigare hjärtsjukdom.",
     "Tolka EKG: normalt, ST-lyft/ST-sänkning, T-inversion, diffusa ST-lyft.",
     "Sammanfatta bedömning: arbetsdiagnos och differentialdiagnoser.",
     "Information och åtgärd: troponin, akut remiss/inläggning, behandling.",
     "Bjud in till frågor."
    ],
    "say": [
     "”Kan du beskriva smärtan? Var sitter den, strålar den någonstans, och vad händer när du rör dig eller andas djupt?”",
     "”Jag vill ta ett blodprov som visar om hjärtat är påverkat, och därför behöver vi ta det på sjukhus.”"
    ],
    "interp": [
     "ST-lyft eller nytt LBBB + typisk smärta = STEMI: akut PCI.",
     "Ung man, infektion, lägesberoende pleuritisk smärta, diffusa ST-lyft, PR-sänkning, förhöjt troponin/CRP = perimyokardit.",
     "Normalt EKG utesluter inte instabil angina eller NSTEMI: troponinserie."
    ],
    "ddx": [
     "AKS, stabil angina, perimyokardit, lungemboli, aortadissektion, pneumotorax, esofagit, muskuloskeletal smärta, ångest."
    ],
    "mgmt": [
     "AKS: ASA, P2Y12-hämmare, LMWH, nitro vid smärta, syrgas vid saturation <90 %; STEMI akut PCI.",
     "Perimyokardit: NSAID och kolchicin, vila från hård träning, ekokardiografi; sjukhusvård vid förhöjt troponin.",
     "Allmänt: lokala PM och aktuella riktlinjer."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 7 av 14 tillfällen (7 stationer).",
     "Dokumenterat: i senaste mallen (oVT26 st. 13) ger ”Smärtanamnes” 3 p och ”Kommunikation med figuranten” 3 p av 10."
    ],
    "pitGen": [
     "Allmänt: glömmer riskprofil och hereditet.",
     "Allmänt: anger diagnos utan att sammanfatta anamnes och EKG."
    ],
    "never": [
     "Tolka EKG korrekt, även när det är normalt.",
     "Täck smärtanamnes (3 p) och kardiovaskulär riskprofil.",
     "Tänk lungemboli och aortadissektion som farliga alternativ."
    ],
    "quick": [
     "Smärtanamnes strukturerat",
     "Riskprofil",
     "EKG + troponin",
     "ASA vid AKS",
     "Farliga differentialdiagnoser: LE, dissektion, pneumotorax"
    ],
    "rub": [
     {
      "key": "oVT26|13",
      "label": "Senaste mallen (oVT26 st. 13)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
     }
    ],
    "safety": "Bröstsmärta: utesluta livshotande orsaker innan benign förklaring."
   },
   "dyspne": {
    "id": "dyspne",
    "title": "Dyspné: hjärtsvikt eller lungsjukdom",
    "fam": "Dyspné: hjärtsvikt eller lungsjukdom",
    "exam": "Ta funktionsanamnes och riskfaktorer vid dyspné/andfåddhet, avgöra kardiell eller pulmonell genes och planera utredning.",
    "task": "Patienten söker för tilltagande andfåddhet. Du ska ta anamnes, bedöma kardiell/pulmonell genes och kommunicera plan.",
    "prep": [
     "Lär dig skillnaderna mellan hjärtsvikt och KOL i anamnes och status.",
     "Ha en rimlig utredningsgång: EKG, proBNP, saturation, lungröntgen, spirometri, eko."
    ],
    "steps": [
     "Funktionsanamnes: hur långt kan patienten gå, trappor, NYHA-klass, ortopné, nattliga uppvaknanden, svullna ben.",
     "Symtom: hosta/slem, pip i bröstet, bröstsmärta, viktuppgång.",
     "Riskfaktorer: rökning, hypertoni, diabetes, hereditet, yrkesexponering, allergi, läkemedel.",
     "Kartlägg akuta tecken vid triage: saturation, andningsfrekvens, blodtryck, puls.",
     "Förklara bedömning och plan: EKG, proBNP, lungröntgen, spirometri, ekokardiografi.",
     "Akut sviktande patient: syrgas, loop-diuretikum iv, EKG, troponin, överväg nitro."
    ],
    "say": [
     "”Hur långt orkar du gå innan du blir andfådd? Har du behövt sova högt med huvudet?”",
     "”Vi tar några prover och en hjärtfilm för att se om andfåddheten kommer från hjärtat eller lungorna.”"
    ],
    "interp": [
     "Ortopné, nattlig dyspné, ödem, förhöjt proBNP talar för hjärtsvikt.",
     "Rökning, slemhosta och förlängt exspirium talar för KOL.",
     "Båda tillstånden kan samexistera."
    ],
    "ddx": [
     "Hjärtsvikt, KOL, astma, lungemboli, anemi, pneumoni, lungfibros, förmaksflimmer."
    ],
    "mgmt": [
     "Hjärtsvikt: ACE-hämmare/ARNI, betablockare, MRA, SGLT2-hämmare, diuretika vid symtom.",
     "KOL/astma: spirometri och inhalationsbehandling.",
     "Allmänt: lokala PM."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 5 av 14 tillfällen (6 stationer).",
     "Dokumenterat: i senaste mallen (VT26 st. 10) ger ”Adekvat funktionsanamnes och symtombild” 3 p och ”Kartläggning av riskfaktorer” 3 p av 10.",
     "Dokumenterat: säkerhetsmoment som poängsatts: Adekvat lungrelaterad anamnes (allergier, eksem, pipig andning, hosta, slem. rökning); Adekvata differentialdiagnoser (hjärtsjukdom mest sannolikt, men lungsjukdom kan inte uteslutas)."
    ],
    "pitGen": [
     "Allmänt: fastnar vid en hypotes och glömmer att fråga om riskfaktorer.",
     "Allmänt: förklarar planen utan att kontrollera förståelsen."
    ],
    "never": [
     "Kartlägg riskfaktorer (3 p).",
     "Förklara fynd och plan begripligt."
    ],
    "quick": [
     "Funktionsanamnes (NYHA)",
     "Riskfaktorer",
     "EKG, proBNP, rtg, spirometri, eko",
     "Akut: syrgas och diuretika vid lungödem"
    ],
    "rub": [
     {
      "key": "VT26|10",
      "label": "Senaste mallen (VT26 st. 10)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
     }
    ]
   },
   "arytmi": {
    "id": "arytmi",
    "title": "Arytmi, svimning och ortostatism",
    "fam": "Arytmi, svimning och ortostatism",
    "exam": "Handlägga förmaksflimmer, takyarytmi (PSVT), AV-block eller svimning, inklusive ortostatiskt blodtryck.",
    "task": "Patienten har hjärtklappning, svimning eller yrsel. Du ska ta anamnes, bedöma EKG/blodtryck och föreslå åtgärd och information.",
    "prep": [
     "Kunna CHA₂DS₂-VASc.",
     "Öva ortostatiskt blodtryck: liggande 5 min, stående efter 1 och 3 min."
    ],
    "steps": [
     "Anamnes: duration, prodromalsymtom, kroppsläge, ansträngning, hjärtklappning, hereditet för plötslig död, läkemedel, alkohol.",
     "Ortostatiskt blodtryck: patienten ligger 5 min, mät, sedan stående efter 1 och 3 min.",
     "EKG: rytm, frekvens, PQ, QRS, block.",
     "Förmaksflimmer: bedöm stroke-risk (CHA₂DS₂-VASc), frekvens-/rytmkontroll, utlösare (alkohol, tyreoidea).",
     "PSVT: vagusmanöver, adenosin; AV-block III: pacemaker.",
     "Ge information och följ upp."
    ],
    "say": [
     "”Hände det när du reste dig, eller kom det utan förvarning? Märkte du något innan?”",
     "”Hjärtat slår oregelbundet. Det ökar risken för proppar, därför behöver vi blodförtunnande.”"
    ],
    "interp": [
     "Ortostatism: fall i systoliskt ≥20 eller diastoliskt ≥10 mmHg inom 3 minuter.",
     "Svimning vid ansträngning, plötslig död i släkten eller ST-avvikelser: kardiell orsak tills motsatsen bevisats."
    ],
    "ddx": [
     "Reflexsynkope, ortostatism, arytmi (AF, PSVT, AV-block), aortastenos, läkemedelsbiverkan, tyreotoxikos."
    ],
    "mgmt": [
     "Förmaksflimmer: antikoagulation (NOAK) enligt CHA₂DS₂-VASc, frekvenskontroll (betablockare), ev. elkonvertering, minska alkohol.",
     "AV-block III: pacemaker; PSVT: vagusmanöver/adenosin, ev. ablation.",
     "Allmänt: körförbud kan gälla efter synkope: kontrollera aktuella regler."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 7 av 14 tillfällen (9 stationer).",
     "Dokumenterat: i senaste mallen (VT25 st. 1) ger ”Förmåga att ta adekvat anamnes” 3 p och ”Föreslår rimliga utrednings/behandlingsåtgärder” 3 p av 10.",
     "Dokumenterat: säkerhetsmoment som poängsatts: Efterfråga EKG. Tolkning; Efterfrågar EKG, som tolkas korrekt (FF, snabb kammarrytm, VK hypertrofi); Efterfråga EKG."
    ],
    "pitGen": [
     "Allmänt: tar inte ortostatiskt blodtryck korrekt.",
     "Allmänt: missar alkohol och läkemedel som utlösare."
    ],
    "never": [
     "Fråga om hereditet för plötslig död vid svimning.",
     "Bedöm blodtryck, EKG och läkemedel samlat."
    ],
    "quick": [
     "CHA₂DS₂-VASc",
     "Ortostatism: ≥20/10 mmHg",
     "Alkohol och tyreoidea som trigger",
     "AV-block III: pacemaker"
    ],
    "rub": [
     {
      "key": "VT25|1",
      "label": "Senaste mallen (VT25 st. 1)",
      "total": 10,
      "declared": 10,
      "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf"
     }
    ]
   },
   "hypertoni": {
    "id": "hypertoni",
    "title": "Hypertoni: blodtrycksbedömning och riskbedömning",
    "fam": "Hypertoni: blodtrycksbedömning och riskbedömning",
    "exam": "Bedöma hem-/24-timmarsblodtryck, ta anamnes, riskbedöma och föreslå åtgärd vid hypertoni; även hypertensiv kris.",
    "task": "Patienten har högt blodtryck. Du ska bedöma mätvärden, komplettera anamnes, ge rimlig bedömning och föreslå åtgärder.",
    "prep": [
     "Kunna gränsvärden för kontor, hem och dygnsmätning.",
     "Öva patientcentrerade frågor om livsstil och oro."
    ],
    "steps": [
     "Anamnes: symtom (huvudvärk, yrsel, bröstsmärta), tidigare sjukdomar, läkemedel, hereditet, livsstil, alkohol, tobak, lakrits, NSAID.",
     "Bedöm hemmätning: korrekt teknik (sittande, 5 min vila, rätt manschett), medelvärde över flera dagar.",
     "Gränsvärden: kontor ≥140/90, hem ≥135/85, 24 h ≥130/80 (dag ≥135/85, natt ≥120/70).",
     "Riskbedöm: SCORE2, organpåverkan (EKG, kreatinin, urinalbumin), sekundär hypertoni vid misstanke.",
     "Förklara bedömning, behandlingsmål och egenvård.",
     "Förslag: livsstilsråd, ev. ACE-hämmare/ARB, kalciumantagonist, tiazid; uppföljning.",
     "Hypertensiv kris: >180/110 med organpåverkan: akut sjukhus, kontrollerad sänkning."
    ],
    "say": [
     "”Hur har det gått med mätningarna hemma? Hur mätte du?”",
     "”Det är viktigt att vi mäter rätt så att behandlingen bygger på säkra värden.”"
    ],
    "interp": [
     "Hemblodtryck ≥135/85 = hypertoni; mät minst 3–7 dagar morgon och kväll.",
     "Dygnsblodtryck är referensmetod vid osäkerhet (vitrockshypertoni, maskerad hypertoni)."
    ],
    "ddx": [
     "Essentiell hypertoni, sekundär (njure, endokrin, sömnapné), vitrockshypertoni, läkemedels-/substanspåverkan."
    ],
    "mgmt": [
     "Livsstil: salt, motion, vikt, alkohol, rökstopp; läkemedel efter risk.",
     "Mål typiskt <140/90; individualisera hos äldre.",
     "Allmänt: lokala riktlinjer."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 6 av 14 tillfällen (7 stationer).",
     "Dokumenterat: i senaste mallen (oVT26 st. 2) ger ”Patientens anamnes i relation till hypertoni väl belyst” 2 p och ”Förmåga att bedöma hemblodtrycksmätningarna” 2 p av 10."
    ],
    "pitGen": [
     "Allmänt: litar på ett enstaka blodtrycksvärde.",
     "Allmänt: ger råd utan att fråga om patientens egen uppfattning."
    ],
    "never": [
     "Ange rätt gränsvärde för hemblodtryck.",
     "Patientcentrerad: fråga om tankar och oro.",
     "Ge rimlig åtgärd och uppföljning."
    ],
    "quick": [
     "Kontor 140/90, hem 135/85, 24 h 130/80",
     "SCORE2 och organpåverkan",
     "Mät rätt: sitt, vila, manschett",
     "Kris: akut sjukhus"
    ],
    "rub": [
     {
      "key": "oVT26|2",
      "label": "Senaste mallen (oVT26 st. 2)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
     }
    ],
    "safety": "Hypertensiv kris med organpåverkan kräver akut handläggning."
   },
   "levnadsvanor": {
    "id": "levnadsvanor",
    "title": "Levnadsvanor och motiverande samtal",
    "fam": "Levnadsvanor och motiverande samtal",
    "exam": "Ge råd om levnadsvanor (fysisk aktivitet, kost, tobak, alkohol) med motiverande samtalsteknik.",
    "task": "Du träffar en patient och ska samtala om levnadsvanor, utvärdera ändringsbenägenhet och planera uppföljning.",
    "prep": [
     "Öva OARS: öppna frågor, bekräfta, reflektera, sammanfatta.",
     "Kunna basfakta: 150 min måttlig aktivitet per vecka, tallriksmodellen, riskbruk av alkohol."
    ],
    "steps": [
     "Fråga öppet om hur patienten ser på sina vanor.",
     "Kartlägg nuläge: aktivitet, kost, tobak, alkohol (AUDIT-C), sömn, stress.",
     "Skatta ändringsbenägenhet (0–10) och fråga varför inte lägre.",
     "Ge råd i små steg: ”fysisk aktivitet på recept”, realistiska mål.",
     "Sammanfatta och bekräfta, fråga vad patienten vill göra först.",
     "Boka uppföljning."
    ],
    "say": [
     "”Vad vet du redan om hur motion påverkar blodtrycket?”",
     "”Om du ska välja en sak att börja med, vad skulle det vara?”"
    ],
    "interp": [
     "Fysisk aktivitet minst 150 min måttlig intensitet per vecka plus styrketräning 2 ggr/vecka.",
     "Riskbruk alkohol: mer än 9 standardglas/vecka för kvinnor och mer än 14 för män (Socialstyrelsen), eller 4–5 vid ett tillfälle."
    ],
    "ddx": [],
    "mgmt": [
     "Skriftlig ordination (FaR), kontakt med dietist/rökavvänjning vid behov, uppföljning efter 4–12 veckor."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 6 av 14 tillfällen (6 stationer).",
     "Dokumenterat: i senaste mallen (HT25 st. 9) ger ”Professionalitet – delmoment B” 2 p och ”Tobaksanamnes – delmoment A” 1 p av 10."
    ],
    "pitGen": [
     "Allmänt: ger råd utan att utforska patientens motivation.",
     "Allmänt: pekar finger."
    ],
    "never": [
     "Fråga öppet, bekräfta och sammanfatta.",
     "Planera konkret uppföljning."
    ],
    "quick": [
     "OARS",
     "Motivation 0–10",
     "FaR: 150 min/vecka",
     "Små konkreta mål",
     "Boka uppföljning"
    ],
    "rub": [
     {
      "key": "HT25|9",
      "label": "Senaste mallen (HT25 st. 9)",
      "total": 10,
      "declared": 10,
      "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf"
     }
    ]
   },
   "diabetes": {
    "id": "diabetes",
    "title": "Diabetes: debut, kost och motion",
    "fam": "Diabetes: debut, kost och motion",
    "exam": "Ta anamnes och informera vid nyupptäckt typ 2-diabetes: diagnos, livsstil, behandling och uppföljning.",
    "task": "Patienten har nyupptäckt diabetes eller riskfaktorer. Du ska ta anamnes, förklara diagnosen, ge livsstilsråd och planera behandling.",
    "prep": [
     "Kunna diagnoskriterier och första linjens behandling.",
     "Öva att förklara diabetes utan facktermer."
    ],
    "steps": [
     "Anamnes: törst, kissningar, trötthet, viktnedgång, hereditet, kost, aktivitet, alkohol, tobak.",
     "Bekräfta diagnos: HbA1c ≥48 mmol/mol eller fP-glukos ≥7,0 mmol/L (upprepat).",
     "Förklara sjukdomen och riskerna (hjärta-kärl, ögon, njure, nerver, fötter).",
     "Livsstil: tallriksmodellen, 150 min aktivitet/vecka, viktminskning.",
     "Läkemedel: metformin i första hand, SGLT2/GLP-1 vid hjärt-kärlsjukdom, njursjukdom eller hjärtsvikt.",
     "Uppföljning: HbA1c, blodtryck, lipider, ögonbotten, fotkontroll."
    ],
    "say": [
     "”Kroppen har svårt att använda sitt insulin. Med kost, rörelse och medicin kan blodsockret bli bra.”",
     "”Vad tycker du är svårast att ändra?”"
    ],
    "interp": [
     "Typ 1 misstänks vid ung ålder, snabb viktnedgång, ketoner: GAD-antikroppar.",
     "HbA1c-mål individualiseras (ofta ca 52 mmol/mol vid typ 2)."
    ],
    "ddx": [
     "Typ 2-diabetes, typ 1/LADA, sekundär diabetes, prediabetes."
    ],
    "mgmt": [
     "Livsstil, metformin, riskfaktorkontroll (blodtryck, statin), regelbunden kontroll.",
     "Allmänt: lokala riktlinjer (NDR, Socialstyrelsen)."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 3 av 14 tillfällen (3 stationer).",
     "Dokumenterat: i senaste mallen (oHT24 st. 4) ger ”Informerar om att behandlingsmålen inte uppnåtts med kost + motion utan att patienten känner sig misslyckad och poängterar vikten av fortsatt icke-farmakologisk behandling.” 2 p och ”Informerar tydligt om risken för laktacidos vid interkurrent sjukdom med dehydrering och att behandlingsuppehåll skall göras vid t.ex gastroenterit el. infektion med feber samt kontraströntgen.” 2 p av 10."
    ],
    "pitGen": [
     "Allmänt: för mycket information på en gång.",
     "Allmänt: glömmer fot- och ögonkontroller."
    ],
    "never": [
     "Förklara diagnos och livsstilsåtgärder begripligt.",
     "Planera uppföljning."
    ],
    "quick": [
     "HbA1c ≥48 / fP-glukos ≥7,0",
     "Livsstil först, metformin",
     "Fot och ögon",
     "Små steg"
    ],
    "rub": [
     {
      "key": "oHT24|4",
      "label": "Senaste mallen (oHT24 st. 4)",
      "total": 10,
      "declared": 10,
      "source": "ALLA bedömarmallar omOSCE I HT24.pdf"
     }
    ]
   },
   "diabetesfot": {
    "id": "diabetesfot",
    "title": "Fotstatus och perifer cirkulation",
    "fam": "Fotstatus och perifer cirkulation",
    "exam": "Genomföra fotundersökning vid diabetes (inspektion, cirkulation, nervfunktion) och informera patienten om bedömning och egenvård.",
    "task": "Du möter en patient med diabetes och ska undersöka fötterna, berätta vad du gör, informera om bedömning och ge egenvårdsråd. Övrig undersökning och behandlingsförslag ingår inte.",
    "prep": [
     "Ha en fast ordning: inspektion – pulsar – vibration – monofilament.",
     "Öva att berätta högt vad du letar efter."
    ],
    "steps": [
     "Hälsa, förklara, be patienten ta av strumpor och skor.",
     "Inspektion: ovansida, sula och mellan tårna: sår, förhårdnader, ödem, deformiteter, hudfärg, behåring, infektion.",
     "Cirkulation: palpera a. dorsalis pedis och a. tibialis posterior på båda sidor (ev. a. poplitea, ankel-arm-index).",
     "Demonstrera vibration och monofilament på patientens tumbas/handrygg före undersökningen.",
     "Vibration: stämgaffel på stortåtopp, stortåbas eller malleol; känsel: monofilament på tre ställen per fot.",
     "Sammanfatta bedömning till patienten och ge egenvårdsråd.",
     "Besvara patientens frågor."
    ],
    "say": [
     "”Jag ska titta på fötterna, känna pulsen och testa känseln. Säg till när du känner något.”",
     "”Dina fötter ser bra ut och blodcirkulationen och känseln är normal. Titta på fötterna varje dag.”"
    ],
    "interp": [
     "Nedsatt känsel (monofilament, vibration) = diabetesneuropati = ökad risk för sår.",
     "Svaga/obefintliga pulsar eller ABI <0,9 talar för perifer kärlsjukdom.",
     "Vilosmärta eller sår med dålig läkning = kritisk ischemi: akut kärlbedömning."
    ],
    "ddx": [
     "Diabetesneuropati, perifer artärsjukdom, infektion/sår, Charcot-fot, venös insufficiens."
    ],
    "mgmt": [
     "Egenvård: daglig inspektion, tvätta och torka mellan tårna, ändamålsenliga skor, ej gå barfota, klippa naglar rakt, söka vid sår.",
     "Riskgradering och remiss till fotterapeut/ortopedtekniker vid högre risk; kärlremiss vid ischemi."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 5 av 14 tillfällen (5 stationer).",
     "Dokumenterat: senaste mallen (VT26 st. 1) fördelar poängen jämnt på 10 moment (1 p vardera) – varje moment räknas lika."
    ],
    "pitGen": [
     "Allmänt: glömmer mellan tårna eller sulan.",
     "Allmänt: testar monofilament utan att demonstrera först."
    ],
    "never": [
     "Palpera båda pulsarna (a. dorsalis pedis och a. tibialis posterior) på båda fötterna.",
     "Demonstrera testet på patienten först.",
     "Ge korrekta egenvårdsråd."
    ],
    "quick": [
     "Inspektion: topp, sula, mellan tår",
     "Pulsar: dorsalis pedis + tibialis posterior",
     "Vibration + monofilament (3 platser/fot)",
     "Demonstrera på tumbas",
     "Egenvård"
    ],
    "rub": [
     {
      "key": "VT26|1",
      "label": "Senaste mallen (VT26 st. 1)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
     }
    ]
   },
   "dvt": {
    "id": "dvt",
    "title": "Ensidig bensvullnad: DVT-misstanke",
    "fam": "Ensidig bensvullnad: DVT-misstanke",
    "exam": "Ta riktad anamnes, göra riktat status, bedöma sannolikhet (Wells) och föreslå utredning vid misstänkt djup ventrombos.",
    "task": "Patienten har ensidig svullnad och smärta i benet. Du ska ta anamnes, undersöka, uppskatta sannolikhet och föreslå utredning.",
    "prep": [
     "Kunna Wells DVT-score.",
     "Öva omkretsmätning 10 cm under tuberositas tibiae."
    ],
    "steps": [
     "Anamnes: duration, tidigare DVT/LE, cancer, immobilisering, kirurgi, p-piller, graviditet, hereditet, läkemedel.",
     "Status: inspektion, jämför sidor, mät omkrets 10 cm under tuberositas tibiae, palpera kärlsträng/ömhet.",
     "Wells-score: ≥2 trolig DVT, ≤1 osannolik.",
     "Osannolik: D-dimer; trolig: ultraljud direkt.",
     "Prover före behandling: blodstatus, kreatinin, INR, APTT.",
     "Behandla vid verifierad DVT: LMWH eller NOAK."
    ],
    "say": [
     "”Jag mäter omkretsen på båda underbenen för att se om det är en skillnad.”",
     "”Vi gör ett ultraljud för att se om det finns en propp i en ven.”"
    ],
    "interp": [
     "Omkretsskillnad >3 cm talar för DVT.",
     "D-dimer har högt negativt prediktivt värde men låg specificitet."
    ],
    "ddx": [
     "DVT, cellulit, Bakers cysta, muskelskada, lymfödem, hjärtsvikt/ödem."
    ],
    "mgmt": [
     "Ultraljud (kompression) eller flebografi; antikoagulation med NOAK/LMWH; tid beror på orsak.",
     "Tänk lungemboli vid andfåddhet eller bröstsmärta.",
     "Allmänt: lokala PM."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 5 av 14 tillfällen (5 stationer).",
     "Dokumenterat: i senaste mallen (oVT26 st. 4) ger ”Adekvat riktad anamnes (duration av symtom, malignitet, hereditet, tid sjukdom, tidigare VTE, immobilisering, kirurgi)” 3 p och ”Sannolikhetsbedömning (via Wells score eller kliniskt) hög” 2 p av 10."
    ],
    "pitGen": [
     "Allmänt: undersöker inte båda benen.",
     "Allmänt: glömmer att fråga om cancer och immobilisering."
    ],
    "never": [
     "Ange sannolikhetsbedömning via Wells eller kliniskt.",
     "Föreslå ultraljud.",
     "Ta antikoagulationsrelaterade prover (INR, APTT, blodstatus, kreatinin)."
    ],
    "quick": [
     "Wells ≥2 trolig",
     "Omkrets 10 cm under tuberositas",
     "Ultraljud vid trolig, D-dimer vid osannolik",
     "Prover före behandling"
    ],
    "rub": [
     {
      "key": "oVT26|4",
      "label": "Senaste mallen (oVT26 st. 4)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
     }
    ],
    "safety": "Symtom på lungemboli (andfåddhet, bröstsmärta) kräver akut handläggning."
   },
   "hema": {
    "id": "hema",
    "title": "Hematologi: lymfkörtelstatus, anemi och blödning",
    "fam": "Hematologi: lymfkörtelstatus, anemi och blödning",
    "exam": "Undersöka lymfkörtelstationer, ta anamnes vid järnbristanemi eller blödningsbenägenhet och planera utredning.",
    "task": "Patienten söker med feber/nattsvettningar, trötthet eller blåmärken. Du ska undersöka körtlar eller ta anamnes och föreslå utredning.",
    "prep": [
     "Lär dig körtelstationerna i ordning.",
     "Repetera orsaker till järnbrist och alarmsymtom för malignitet."
    ],
    "steps": [
     "Lymfkörtelstatus: nacke, submandibulärt, supraklavikulärt, axiller, ingvinalt (ovan naveln: halsen och axillerna), jämför sidor; storlek, konsistens, rörlighet, ömhet.",
     "Palpera lever och mjälte; fråga om B-symtom (feber, nattsvettningar, viktnedgång).",
     "Anemi: menstruation, kost, blodiga/svarta avföringar, NSAID/ASA, viktnedgång, hereditet, graviditet.",
     "Blödningsanamnes: lätta blåmärken, näsblod, menorragi, tandköttsblödning, släkt, läkemedel.",
     "Prover: blodstatus, ferritin, CRP, LD; koagulation (PK/INR, APTT, TPK) vid blödning.",
     "Information och plan."
    ],
    "say": [
     "”Jag känner efter förstorade körtlar på halsen, vid nyckelbenen, i armhålorna och i ljumskarna.”",
     "”Blodbristen beror troligen på järnbrist. Vi vill ta reda på varför du saknar järn.”"
    ],
    "interp": [
     "Hård, fast, smärtfri körtel >2 cm eller B-symtom: misstänk lymfom och utred snabbt.",
     "Ferritin <15 µg/L: säker järnbrist; hos män och postmenopausala kvinnor utred GI-blödning."
    ],
    "ddx": [
     "Infektion (mononukleos), lymfom, leukemi, sarkoidos; järnbrist, B12-/folatbrist, kronisk sjukdom; trombocytopeni, von Willebrand."
    ],
    "mgmt": [
     "Körtlar: blodstatus, DT, körtelbiopsi/excision, SVF vid malignitetsmisstanke.",
     "Järnbrist: järnbehandling, utreda orsak (gastro-/gynekologisk), kontroll av Hb efter 4 veckor.",
     "Allmänt: lokala PM."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 7 av 14 tillfällen (7 stationer).",
     "Dokumenterat: i senaste mallen (oVT25 st. 2) ger ”Föreslår rimliga differentialdiagnoser utifrån anamnesen” 3 p och ”Planerar för initial utredning och handläggning på akuten” 3 p av 10."
    ],
    "pitGen": [
     "Allmänt: missar någon körtelstation.",
     "Allmänt: glömmer att utreda orsaken till järnbristen."
    ],
    "never": [
     "Undersök samtliga stationer systematiskt.",
     "Fråga om B-symtom."
    ],
    "quick": [
     "Nacke – submandibulärt – supraklavikulärt – axill – ljumske",
     "B-symtom",
     "Ferritin <15 = järnbrist",
     "Utred orsaken till järnbrist"
    ],
    "rub": [
     {
      "key": "oVT25|2",
      "label": "Senaste mallen (oVT25 st. 2)",
      "total": 10,
      "declared": 10,
      "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf"
     }
    ]
   },
   "trotthet": {
    "id": "trotthet",
    "title": "Trötthet och orkeslöshet: anamnes och differentialdiagnoser",
    "fam": "Trötthet och orkeslöshet: anamnes och differentialdiagnoser",
    "exam": "Ta bred anamnes vid trötthet, bedöma differentialdiagnoser och föreslå utredning och uppföljning.",
    "task": "Patienten söker för trötthet/orkeslöshet. Du ska ta en strukturerad anamnes, ange differentialdiagnoser och föreslå utredning.",
    "prep": [
     "Ha en mall: tid, sömn, stämning, kost, läkemedel, alkohol, kroppsliga symtom.",
     "Känn till röda flaggor."
    ],
    "steps": [
     "Öppen fråga: vad menar patienten med trötthet, hur länge, hur påverkas vardagen?",
     "Sömn, stress, humör (depression), arbete, relationer.",
     "Kroppsliga symtom: viktförändring, feber, hjärtklappning, andfåddhet, frusenhet, törst, obstipation, blödningar.",
     "Läkemedel och alkohol, graviditet, infektion.",
     "Röda flaggor: viktnedgång, feber, nattsvettningar, blod i avföring.",
     "Prover: Hb, CRP, glukos/HbA1c, TSH, kalcium, kreatinin, leverstatus, ferritin, B12, ev. celiakiserologi.",
     "Sammanfatta och planera uppföljning."
    ],
    "say": [
     "”Kan du berätta mer om hur tröttheten påverkar din vardag?”",
     "”Vi tar prover för att utesluta vanliga orsaker som blodbrist och sköldkörtelsjukdom.”"
    ],
    "interp": [
     "De flesta har ingen allvarlig somatisk orsak, men tröttheten är verklig; ta alltid depression och sömnproblem på allvar."
    ],
    "ddx": [
     "Depression, sömnstörning/sömnapné, anemi, hypotyreos, diabetes, infektion, malignitet, läkemedelsbiverkan, hjärtsvikt."
    ],
    "mgmt": [
     "Basprover, behandla orsak, uppföljning, egenvård (sömnhygien, aktivitet)."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 2 av 14 tillfällen (2 stationer).",
     "Dokumenterat: i senaste mallen (oVT25 st. 16) ger ”Patientcentrerad konsultation – delmoment A” 1 p och ”Patientcentrerad konsultation – delmoment G” 1 p av 10."
    ],
    "pitGen": [
     "Allmänt: hoppar direkt till prover utan funktionsanamnes.",
     "Allmänt: missar psykisk ohälsa."
    ],
    "never": [
     "Fråga öppet och strukturerat.",
     "Ange differentialdiagnoser och motivera prover."
    ],
    "quick": [
     "Öppen start",
     "Sömn, humör, kost, läkemedel, alkohol",
     "Röda flaggor",
     "Hb, CRP, glukos, TSH, kalcium, kreatinin, ferritin"
    ],
    "rub": [
     {
      "key": "oVT25|16",
      "label": "Senaste mallen (oVT25 st. 16)",
      "total": 10,
      "declared": 10,
      "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf"
     }
    ]
   },
   "stroke": {
    "id": "stroke",
    "title": "Stroke och TIA: NIHSS, SBAR och information",
    "fam": "Stroke och TIA: NIHSS, SBAR och information",
    "exam": "Utföra angivna delar av NIHSS, rapportera enligt SBAR, informera patienten om utredning och sekundärprevention eller ronda strokepatient.",
    "task": "Patienten har TIA/stroke. Du ska genomföra angivna NIHSS-delar, rapportera/handlägga och informera.",
    "prep": [
     "Lär dig NIHSS-delarna i ordning.",
     "Repetera sekundärprevention efter stroke."
    ],
    "steps": [
     "NIHSS-delar: medvetande, ögonmotorik/blick, synfält, facialis, motorik arm och ben (10 s/5 s), ataxi (finger–näsa, knä–häl), känsel, språk, dysartri, utsläckning/neglekt.",
     "Dokumentera fynden: poäng och sida.",
     "SBAR: Situation (ålder, symtom, tid), Bakgrund (sjukdomar, läkemedel), Aktuellt (NIHSS, vitalparametrar, DT), Rekommendation (nästa åtgärd).",
     "Akut: tidsfönster för trombolys (≤4,5 timmar) och trombektomi, DT hjärna + DT-angio, glukos, blodtryck.",
     "Rond: informera om undersökningar, diagnos och sekundärprofylax (trombocythämmare, statin, blodtryck, antikoagulation vid förmaksflimmer).",
     "Kontrollera förståelse; ge inte livsstilsråd om uppgiften säger det."
    ],
    "say": [
     "”Kan du le och visa tänderna? Lyft armarna och håll kvar. Säg orden efter mig.”",
     "”Det har uppstått en propp i en blodkärl i hjärnan. Vi ger medicin för att minska risken för en ny.”"
    ],
    "interp": [
     "Övergående symtom <24 h = TIA, men utreds som stroke.",
     "NIHSS ger en poängsatt bild av neurologiskt bortfall."
    ],
    "ddx": [
     "Ischemisk stroke, TIA, intracerebral blödning, hypoglykemi, migrän med aura, epileptiskt anfall."
    ],
    "mgmt": [
     "Akut: DT hjärna, ev. trombolys/trombektomi; ASA efter utesluten blödning; kontroll av saturation, blodsocker, blodtryck.",
     "Sekundärprofylax: trombocythämmare (vid TIA/mild stroke ev. dubbelbehandling kort tid), statin, blodtryck, antikoagulation vid förmaksflimmer, karotisåtgärd vid stenos.",
     "Allmänt: lokala PM."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 7 av 14 tillfällen (7 stationer).",
     "Dokumenterat: i senaste mallen (VT26 st. 15) ger ”Information till patienten om undersökningar och diagnos (graderat)” 2 p och ”Information om insatt/planerad sekundärprofylax (graderat)” 2 p av 10.",
     "Dokumenterat: säkerhetsmoment som poängsatts: Rapport enligt SBAR till bakjour; Rapportering enligt SBAR till bakjour."
    ],
    "pitGen": [
     "Allmänt: utför NIHSS-moment ofullständigt eller i fel ordning.",
     "Allmänt: SBAR utan tydlig rekommendation."
    ],
    "never": [
     "Rapportera enligt SBAR och föreslå nästa åtgärd.",
     "Gradera information: undersökningar, diagnos, sekundärprofylax."
    ],
    "quick": [
     "NIHSS: medvetande, blick, synfält, facialis, motorik, ataxi, känsel, språk, dysartri, neglekt",
     "SBAR",
     "Trombolys ≤4,5 h",
     "Sekundärprofylax"
    ],
    "rub": [
     {
      "key": "VT26|15",
      "label": "Senaste mallen (VT26 st. 15)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
     }
    ],
    "safety": "Tid är hjärna: tidsfönstret styr behandling."
   },
   "tyreoidea": {
    "id": "tyreoidea",
    "title": "Tyreoidea och endokrin utredning",
    "fam": "Tyreoidea och endokrin utredning",
    "exam": "Undersöka tyreoidea vid misstänkt Graves, ge besked vid hypotyreos/hypertyreos, informera om Levaxin eller utreda hypofystumör/viktnedgång.",
    "task": "Du får labsvar och/eller en patient med tyreoidea- eller annan endokrin frågeställning. Du ska ta kompletterande anamnes, undersöka vid behov, förklara och starta behandling.",
    "prep": [
     "Kunna status vid Graves: tremor, ögon, puls, tyreoidea.",
     "Öva att förklara hypotyreos utan facktermer."
    ],
    "steps": [
     "Hyper: tremor med utsträckta armar, ögon (exoftalmus, ödem, motilitet), puls/rytm, inspektion och palpation av tyreoidea (bakifrån, under sväljning).",
     "Hypo: frusenhet, trötthet, obstipation, torr hud, håravfall, depression, ärftlighet.",
     "Förklara provsvaren och diagnosen.",
     "Förklara orsaken (autoimmun), lugna vid cancerrädsla.",
     "Behandling: hyper – tyrostatika/betablockad; hypo – levotyroxin livslångt, kontroll TSH efter 6–8 veckor.",
     "Hypofystumör: riktad anamnes (synfält, mens/libido, tillväxt, kortisolsymtom), hypofysprofil, MR, endokrinremiss.",
     "Ofrivillig viktnedgång: anamnes, B-symtom, basprover, SVF vid misstanke."
    ],
    "say": [
     "”Sköldkörteln har blivit underaktiv, förmodligen för att kroppens försvar angripit den. Det är inte cancer.”",
     "”Medicinen tas på fastande mage på morgonen, en halvtimme före frukost.”"
    ],
    "interp": [
     "Låg TSH + högt fT4 = tyreotoxikos (Graves vid exoftalmus och diffus struma).",
     "Högt TSH + lågt fT4 + TPO-antikroppar = autoimmun hypotyreos (Hashimoto)."
    ],
    "ddx": [
     "Graves, toxiskt adenom, tyreoidit, hypotyreos, hypofysadenom, depression, malignitet."
    ],
    "mgmt": [
     "Graves: tiamazol, betablockad, ev. radiojod/kirurgi; varning för agranulocytos (feber/halsont).",
     "Hypotyreos: levotyroxin (låg startdos hos äldre/hjärtsjuka), kontroll av TSH.",
     "Hypofys: kompletta hormonprover, MR, remiss.",
     "Allmänt: lokala PM."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 9 av 14 tillfällen (9 stationer).",
     "Dokumenterat: senaste mallen (oVT26 st. 6) fördelar poängen jämnt på 10 moment (1 p vardera) – varje moment räknas lika."
    ],
    "pitGen": [
     "Allmänt: glömmer att undersöka ögonen.",
     "Allmänt: använder facktermer i besked."
    ],
    "never": [
     "Palpera tyreoidea bakifrån och under sväljning.",
     "Tala om att behandlingen är livslång och följs upp med prov."
    ],
    "quick": [
     "Tremor – ögon – puls – tyreoidea",
     "Låg TSH/högt fT4 = hyper",
     "Högt TSH/lågt fT4 = hypo",
     "Levotyroxin fastande, TSH efter 6–8 v"
    ],
    "rub": [
     {
      "key": "oVT26|6",
      "label": "Senaste mallen (oVT26 st. 6)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
     }
    ]
   },
   "endoakut": {
    "id": "endoakut",
    "title": "Akut medvetslöshet, intoxikation och svimning",
    "fam": "Akut medvetslöshet, intoxikation och svimning",
    "exam": "Handlägga medvetslös eller förgiftad patient (ABCDE, glukos, opioid) och informera.",
    "task": "Patienten är medvetslös, förgiftad eller har svimmat. Du ska handlägga akut, utreda orsak och informera.",
    "prep": [
     "Repetera ABCDE och vad som alltid kontrolleras vid medvetslöshet.",
     "Kunna opioidintoxikationens tecken och antidot."
    ],
    "steps": [
     "A: luftväg, B: andning och saturation, C: puls/blodtryck, D: GCS, pupiller, kapillärt glukos, E: exponera, temperatur.",
     "Åtgärda efter hand: syrgas, glukos vid hypoglykemi, naloxon vid opioid (små pupiller, långsam andning).",
     "Anamnes via vittnen: läkemedel, droger, alkohol, tidigare sjukdom, trauma.",
     "Utredning: blodgas, EKG, laboratorieprover, toxikologi.",
     "Kontakta Giftinformationscentralen vid osäkerhet.",
     "Observation på akuten och vidare handläggning."
    ],
    "say": [
     "”Kan du höra mig? Öppna ögonen.” (GCS)",
     "”Jag kontrollerar blodsockret och ger syrgas.”"
    ],
    "interp": [
     "Små pupiller + långsam andning + medvetandesänkning = opioidpåverkan: naloxon.",
     "Hypoglykemi kan ge medvetslöshet, kramper och fokal neurologi."
    ],
    "ddx": [
     "Hypoglykemi, intoxikation (opioid, alkohol, bensodiazepin, paracetamol), stroke, kramper, arytmi, sepsis, binjurebarksvikt."
    ],
    "mgmt": [
     "ABCDE, glukos, naloxon vid opioidintoxikation (upprepa vid behov), övervaka tills effekten klingat.",
     "Paracetamolintoxikation: acetylcystein enligt nomogram.",
     "Allmänt: lokala PM."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 4 av 14 tillfällen (4 stationer).",
     "Dokumenterat: i senaste mallen (VT25 st. 6) ger ”Frågar vad, när och hur mycket av läkemedlet” 2 p och ”SBAR Rekommendation med provtagning ordination” 2 p av 10."
    ],
    "pitGen": [
     "Allmänt: missar kapillär glukos tidigt.",
     "Allmänt: glömmer övervakning efter naloxon."
    ],
    "never": [
     "Kontrollera glukos och andning direkt.",
     "Fråga vittnen om droger och läkemedel."
    ],
    "quick": [
     "ABCDE",
     "Glukos direkt",
     "Små pupiller → naloxon",
     "Övervaka efter antidot"
    ],
    "rub": [
     {
      "key": "VT25|6",
      "label": "Senaste mallen (VT25 st. 6)",
      "total": 10,
      "declared": 10,
      "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf"
     }
    ],
    "safety": "Medvetslös patient: luftväg och andning först."
   },
   "njure_ssk": {
    "id": "njure_ssk",
    "title": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)",
    "fam": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)",
    "exam": "Telefonsamtal under jourtid med sjuksköterska om en patient med elektrolytrubbning eller låg diures: inhämta information, ordinera och planera.",
    "task": "Du är primärjour och ringer upp en sjuksköterska. Du ska ställa frågor om bakgrund och det akuta, ge ordinationer (läkemedel) och planera uppföljning.",
    "prep": [
     "Ha en samtalsstruktur: presentera dig, be om sammanfattning, ställ frågor, ordinera, sammanfatta, planera omkontroll.",
     "Kunna akutbehandling av hyperkalemi."
    ],
    "steps": [
     "Presentera dig och egen situation (”jag är primärjour, jag har tid”).",
     "Fråga om bakgrund: ålder, kroniska sjukdomar, läkemedel, njurfunktion.",
     "Fråga det akuta: symtom, vitalparametrar, EKG, labvärden (K, Na, kreatinin), diures.",
     "Hyperkalemi: EKG; vid K ≥6,5 eller EKG-förändring kalciumglukonat iv, insulin + glukos, inhalation salbutamol, loop-diuretikum; sätt ut K-höjande läkemedel.",
     "Hypernatremi: ge vatten/glukos 5 %, sänk Na långsamt; vid oliguri: bedöm blåsa, vätskebalans, prerenal/renal/postrenal orsak.",
     "Ange läkemedel (substans, dos, administrationssätt) och ordination.",
     "Planera omkontroll, när sköterskan ska ringa igen.",
     "Sammanfatta samtalet."
    ],
    "say": [
     "”Hej, det är primärjouren. Kan du sammanfatta läget kort enligt SBAR?”",
     "”Ge kalciumglukonat iv och ta nytt kalium om en timme. Ring mig om patienten försämras.”"
    ],
    "interp": [
     "Hyperkalemi med EKG-förändringar (spetsiga T, breddat QRS) är akut.",
     "Hypernatremi: sänk inte för snabbt (risk för hjärnödem)."
    ],
    "ddx": [
     "Prerenal, renal eller postrenal orsak vid njursvikt/oliguri; läkemedelsbiverkan (ACE-hämmare, spironolakton, NSAID)."
    ],
    "mgmt": [
     "Hyperkalemi: kalcium iv, insulin/glukos, salbutamol, diuretika, kaliumbindare; dialys vid refraktär.",
     "Hypernatremi: fritt vatten och vätskekorrektion, långsam sänkning.",
     "Allmänt: lokala PM."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 9 av 14 tillfällen (9 stationer).",
     "Dokumenterat: i senaste mallen (oHT25 st. 4) ger ”Fråga angående det akuta (1)” 2 p och ”Fråga angående det akuta (2)” 2 p av 10."
    ],
    "pitGen": [
     "Allmänt: ordinerar utan att först bedöma EKG och vitala parametrar.",
     "Allmänt: ingen plan för omkontroll."
    ],
    "never": [
     "Be om EKG och vitalparametrar vid hyperkalemi.",
     "Ange korrekt läkemedel och dos."
    ],
    "quick": [
     "SBAR",
     "EKG vid hyperkalemi",
     "Kalcium – insulin/glukos – salbutamol",
     "Omkontroll"
    ],
    "rub": [
     {
      "key": "oHT25|4",
      "label": "Senaste mallen (oHT25 st. 4)",
      "total": 10,
      "declared": 10,
      "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
     }
    ],
    "safety": "Hyperkalemi med EKG-förändringar kräver akut behandling."
   },
   "njure_anam": {
    "id": "njure_anam",
    "title": "Njure: anamnes vid hematuri, proteinuri och nefrotiskt syndrom",
    "fam": "Njure: anamnes vid hematuri, proteinuri och nefrotiskt syndrom",
    "exam": "Ta strukturerad njurmedicinsk anamnes utifrån labsvar och föreslå utredning.",
    "task": "Du träffar en patient med förhöjt kreatinin, proteinuri eller ödem. Du ska ta anamnes (utan status) och föreslå utredningsplan.",
    "prep": [
     "Följ en mall: egen situation, socialt, hereditet, tidigare sjukdom, läkemedel, miktion, övriga symtom, plan."
    ],
    "steps": [
     "Presentera dig och egen situation.",
     "Socialt: yrke, rökning, alkohol, droger, resor.",
     "Hereditet: njursjukdom, dialys, hörselnedsättning, polycystisk.",
     "Tidigare sjukdomar: hypertoni, diabetes, infektion, autoimmun sjukdom.",
     "Läkemedel: NSAID, antibiotika, litium, kontrast, naturläkemedel.",
     "Miktion: nokturi, svag stråle, dysuri, hematuri, skummande urin.",
     "Övriga symtom: ödem, trötthet, hudutslag, ledvärk, feber, viktnedgång.",
     "Plan: urinsediment, albumin/kreatininkvot, kreatinin/eGFR, blodtryck, serologi (ANA, ANCA, anti-GBM, komplement), ultraljud, remiss njurmedicin ± biopsi."
    ],
    "say": [
     "”Jag vill förstå hur njurarna har påverkats. Har du märkt svullnad, skummande urin eller blod i urinen?”",
     "”Vi tar fler prover och gör ett ultraljud, och du får träffa en njurläkare.”"
    ],
    "interp": [
     "Hematuri + proteinuri + stigande kreatinin = glomerulär sjukdom tills motsatsen bevisats.",
     "Ödem, kraftig proteinuri, låg albumin = nefrotiskt syndrom."
    ],
    "ddx": [
     "Glomerulonefrit (IgA-nefrit, ANCA), nefrotiskt syndrom (minimal change, membranös), diabetesnefropati, interstitiell nefrit, urinvägsobstruktion."
    ],
    "mgmt": [
     "Utredning: sediment, 24-h/kvot, serologi, ultraljud, ev. njurbiopsi.",
     "Nefrotiskt syndrom: diuretika, ACE-hämmare/ARB, saltrestriktion, statin; njurbiopsi via specialist.",
     "Allmänt: lokala PM."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 3 av 14 tillfällen (3 stationer).",
     "Dokumenterat: i senaste mallen (oVT26 st. 8) ger ”Frågor angående övriga symptom” 2 p och ”Plan” 2 p av 9.5."
    ],
    "pitGen": [
     "Allmänt: glömmer läkemedel (NSAID) och hereditet.",
     "Allmänt: ingen tydlig plan."
    ],
    "never": [
     "Följ strukturen och sammanfatta.",
     "Ge en konkret utredningsplan."
    ],
    "quick": [
     "Socialt – hereditet – sjukdomar – läkemedel – miktion – övrigt",
     "Sediment och kvot",
     "Serologi + ultraljud",
     "Remiss njurmedicin"
    ],
    "rub": [
     {
      "key": "oVT26|8",
      "label": "Senaste mallen (oVT26 st. 8)",
      "total": 9.5,
      "declared": 9.5,
      "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
     }
    ]
   },
   "gastro_buk": {
    "id": "gastro_buk",
    "title": "Gastro: ont i magen, akut buk och IBD",
    "fam": "Gastro: ont i magen, akut buk och IBD",
    "exam": "Ta anamnes, utföra riktat bukstatus och föreslå utredning vid buksmärta, dyspepsi, ulcerös kolit/Crohn eller feber med nedsatt allmäntillstånd.",
    "task": "Patienten söker för ont i magen. Du ska ta anamnes, utföra buk-status enligt struktur och föreslå utredning och handläggning.",
    "prep": [
     "Ha en fast ordning för bukstatus (inspektion, auskultation, perkussion, palpation).",
     "Kunna alarmsymtom och farliga differentialdiagnoser."
    ],
    "steps": [
     "Handhygien före och efter status; presentera dig och förklara.",
     "Anamnes: smärta (debut, lokalisation, karaktär, utstrålning), kräkningar, avföring (blod, diarré, förstoppning), feber, viktnedgång, tidigare operationer, läkemedel, graviditet.",
     "Balans mellan öppna och riktade frågor.",
     "Bukstatus: inspektion, auskultation, perkussion, palpation (ömma ställen sist), peritonit/defense, bråckportar, ev. rektalundersökning.",
     "Tolka fynd.",
     "Utredning: CRP, blodstatus, elstatus, kreatinin, lever/pankreas, urinsticka, graviditetstest; DT/ultraljud efter behov.",
     "IBD-skov: nutrition, vätska, kortison, kontakt gastroenterolog/kirurg.",
     "Information till patienten och plan."
    ],
    "say": [
     "”Visa mig var det gör mest ont. Jag börjar att trycka på det område som inte är ömt.”",
     "”Vi tar blodprov och gör en röntgenundersökning för att hitta orsaken.”"
    ],
    "interp": [
     "Släppömhet, defense, rigid buk = peritonit: akut kirurgkontakt.",
     "Nytillkommen dyspepsi >50–60 år eller alarmsymtom (blödning, viktnedgång, dysfagi, anemi): gastroskopi."
    ],
    "ddx": [
     "Appendicit, gallsten/kolecystit, pankreatit, ileus, perforation, ulcus, IBD-skov, gastroenterit, gynekologisk orsak, extraabdominell (hjärta)."
    ],
    "mgmt": [
     "Smärtlindring, vätska, antiemetika, fasta vid misstanke om operation, bakjour.",
     "UC-skov: inläggning vid svår sjukdom, intravenöst kortison.",
     "Allmänt: lokala PM."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 8 av 14 tillfällen (8 stationer).",
     "Dokumenterat: i senaste mallen (oVT26 st. 10) ger ”Anamnes kring det aktuella problemet och relevanta frågor kring bakgrunden” 3 p och ”Utför bukstatus enligt struktur för akut buk” 2 p av 10."
    ],
    "pitGen": [
     "Allmänt: glömmer handhygien före och efter status.",
     "Allmänt: undersöker inte i rätt ordning (palpation före auskultation)."
    ],
    "never": [
     "Handhygien före och efter status (1 p).",
     "Undersök enligt struktur för akut buk (2 p).",
     "Tolka bukfynden och föreslå utredning."
    ],
    "quick": [
     "Handhygien",
     "Inspektion – auskultation – perkussion – palpation",
     "Ömma ställen sist",
     "CRP, blodstatus, lever/pankreas, urin",
     "Alarmsymtom"
    ],
    "rub": [
     {
      "key": "oVT26|10",
      "label": "Senaste mallen (oVT26 st. 10)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
     }
    ],
    "safety": "Peritonit eller ileus kräver akut kirurgbedömning."
   },
   "gastro_lever": {
    "id": "gastro_lever",
    "title": "Gastro: förhöjda leverprover (kolestas)",
    "fam": "Gastro: förhöjda leverprover (kolestas)",
    "exam": "Ta kompletterande anamnes vid förhöjda leverprover, prioritera statusmoment muntligt och föreslå utredning.",
    "task": "Du har tagit leverprover (ALP, GT, bilirubin förhöjda) på en patient som söker för trötthet. Du ska komplettera anamnes, beskriva statusprioriteringar och förklara utredningsplan.",
    "prep": [
     "Skilj kolestatiskt från hepatocellulärt mönster.",
     "Ha en kort lista på statusmoment: ikterus, hudförändringar, lever/mjälte, gallblåsa, ascites."
    ],
    "steps": [
     "Hälsa och använd både öppna och riktade frågor.",
     "Anamnes: klåda, mörk urin, ljus avföring, gulsot, buksmärta, feber, viktnedgång, alkohol, läkemedel/naturläkemedel, resor, hereditet.",
     "Beskriv status du skulle göra: ikterus, skleror, spindelnevi, hepatomegali, Courvoisiers tecken, ascites, hudavtryck av klåda.",
     "Föreslå utredning: ultraljud lever/gallvägar, kompletterande prover (AMA, ANA, IgM, virusserologi), MRCP/ERCP.",
     "Förklara i enkla ord vad proverna visar och vad som händer härnäst."
    ],
    "say": [
     "”Proverna visar att något hindrar gallan från att rinna normalt. Vi gör ett ultraljud för att se vad det kan vara.”"
    ],
    "interp": [
     "Högt ALP/GT och konjugerat bilirubin med måttligt förhöjda transaminaser = kolestas.",
     "Tänk gallstas (sten, tumör), PBC, PSC och läkemedel."
    ],
    "ddx": [
     "Koledokussten, tumör (pankreas, gallväg), PBC, PSC, läkemedelsinducerad kolestas."
    ],
    "mgmt": [
     "Ultraljud, MRCP/ERCP, serologi, behandling efter orsak; kontakta gastroenterolog.",
     "Allmänt: lokala PM."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 3 av 14 tillfällen (3 stationer).",
     "Dokumenterat: i senaste mallen (oHT25 st. 9) ger ”Tar anamnes kring det aktuella problemet och relevanta frågor kring bakgrunden” 3 p och ”Balans i samtalet: öppna och riktade frågor, Följsamhet och Lyhördhet” 2 p av 10."
    ],
    "pitGen": [
     "Allmänt: glömmer läkemedelsanamnes och alkohol.",
     "Allmänt: statuspunkter utan prioritering."
    ],
    "never": [
     "Ange prioriterade statusmoment.",
     "Föreslå lämplig utredning och förklara den begripligt."
    ],
    "quick": [
     "Kolestas: ALP, GT, bilirubin",
     "Ultraljud + MRCP",
     "Läkemedel och alkohol",
     "Prioritera status"
    ],
    "rub": [
     {
      "key": "oHT25|9",
      "label": "Senaste mallen (oHT25 st. 9)",
      "total": 10,
      "declared": 10,
      "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
     }
    ]
   },
   "infektion": {
    "id": "infektion",
    "title": "Infektion: handläggning, rond och information",
    "fam": "Infektion: handläggning, rond och information",
    "exam": "Ta riktad anamnes och handlägga infektionspatient (pneumoni, rosfeber, legionella, diarré, positiv odling, ESBL) och informera.",
    "task": "Du träffar en infektionspatient, tolkar prover/odlingar, ordinerar provtagning och antibiotika och informerar patienten eller en sjuksköterska.",
    "prep": [
     "Kunna CRB-65 och sepsissymtom.",
     "Öva ordinationen: odlingar före antibiotika, rätt substans, rätt väg."
    ],
    "steps": [
     "Presentera dig, ta riktad anamnes (symtom, tid, epidemiologi, resa, kontakt med sjuka, läkemedel, allergi).",
     "Bedöm allvarlighet: vitalparametrar, CRB-65, sepsiskriterier.",
     "Tolka prover och odlingsresultat.",
     "Ordinera: blododlingar ×2, relevanta odlingar och antibiotika iv/po.",
     "Informera om diagnos, behandling och vårdhygieniska åtgärder (enkelrum vid MRB/ESBL).",
     "Fråga om allergi (typ I vs typ IV) innan antibiotika.",
     "Ge utrymme för frågor."
    ],
    "say": [
     "”Du har en bakterieinfektion, och vi behandlar med antibiotika i dropp.”",
     "”Du får byta till enkelrum för att skydda andra.”"
    ],
    "interp": [
     "CRB-65: 0–1 poäng hemma, 2 sjukhus, 3–4 allvarligt.",
     "Asymtomatisk bakteriuri hos äldre ska normalt inte behandlas med antibiotika.",
     "ESBL-producerande Klebsiella: karbapenem (t.ex. meropenem) även vid penicillinallergi typ I."
    ],
    "ddx": [
     "Pneumoni, rosfeber, nekrotiserande infektion, legionella, gastroenterit, UVI/urosepsis, meningit."
    ],
    "mgmt": [
     "Pneumoni: penicillin/cefalosporin ± makrolid efter svårighetsgrad; legionella: makrolid/doxycyklin/fluorokinolon.",
     "Rosfeber: penicillin, klindamycin vid allergi.",
     "Sepsis: odlingar, antibiotika inom en timme, vätska, övervakning.",
     "Allmänt: lokala behandlingsrekommendationer (Strama, Janusmed)."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 10 av 14 tillfällen (10 stationer).",
     "Dokumenterat: i senaste mallen (oVT26 st. 12) ger ”Efterfrågar riskfaktorer för bärarskap och spridning till andra av enterobacteriace MRB (KAD, eventuella bukdrän, upprepad antibiotikabehandling, utlandsvistelse), klargör tidsförlopp” 2 p och ”Förklarar att den primära misstanken är febril UVI orsakad av ESBL- producerande tarmbakterier och redogör på ett klart sätt vad det är, inklusive bärarskap.” 2 p av 10.",
     "Dokumenterat: säkerhetsmoment som poängsatts: Frågar om eventuell allergi mot läkemedel; Föreslår blododl x 2; Tar viktigaste punkterna i bakgrundsanamnesen (tidigare sjukdomar 0,5 p, mediciner/läkemedelsallergi 0,5 p, socialt 0,5 p; max 1 p)."
    ],
    "pitGen": [
     "Allmänt: ordinerar antibiotika före odlingar vid svår infektion.",
     "Allmänt: glömmer att fråga om allergi."
    ],
    "never": [
     "Fråga om antibiotikaallergi.",
     "Odlingar före antibiotika.",
     "Förklara på lekmannaspråk och ge tillfälle för frågor."
    ],
    "quick": [
     "CRB-65",
     "Blododlingar ×2 före antibiotika",
     "Allergi: fråga",
     "Asymtomatisk bakteriuri behandlas ej",
     "Enkelrum vid MRB"
    ],
    "rub": [
     {
      "key": "oVT26|12",
      "label": "Senaste mallen (oVT26 st. 12)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
     }
    ],
    "safety": "Misstänkt sepsis eller nekrotiserande infektion: akut handläggning."
   },
   "hygien": {
    "id": "hygien",
    "title": "Basal hygienrutin och personlig skyddsutrustning",
    "fam": "Basal hygienrutin och personlig skyddsutrustning",
    "exam": "Visa korrekt handhygien och användning av personlig skyddsutrustning i klinisk situation.",
    "task": "Du ska utföra undersökning med basala hygienrutiner och rätt skyddsutrustning och berätta vad du gör.",
    "prep": [
     "Repetera WHO:s fem moment och ordningen för på- och avtagning av skyddsutrustning."
    ],
    "steps": [
     "Arbetskläder, inga ringar/klockor, kort ärm.",
     "Handhygien: handsprit tills händerna är torra (20–30 s), före och efter patientkontakt.",
     "Ta på skyddsutrustning i rätt ordning: förkläde, munskydd, visir, handskar.",
     "Under undersökningen: undvik att röra yta onödigt.",
     "Ta av: handskar, förkläde, handhygien, visir/munskydd, handhygien.",
     "Avsluta med handhygien."
    ],
    "say": [
     "”Jag spritar händerna innan jag går in och tar på förkläde och skyddsmask.”"
    ],
    "interp": [
     "Droppsmitta: munskydd och visir; kontaktsmitta: förkläde och handskar; luftburen: andningsskydd."
    ],
    "ddx": [],
    "mgmt": [
     "Följ lokala hygienrutiner och Vårdhandboken."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 2 av 14 tillfällen (2 stationer).",
     "Dokumenterat: i senaste mallen (oVT25 st. 14) ger ”Korrekt valt tillägg i personlig skyddsutrustning (PPE) vid misstänkt smittsam virusorsakad respiratorisk infektion” 2 p och ”Korrekt avtagande av personlig skyddsutrustning (PPE)” 2 p av 10."
    ],
    "pitGen": [
     "Allmänt: fel ordning vid avtagning.",
     "Allmänt: glömmer handhygien mellan moment."
    ],
    "never": [
     "Handhygien före och efter.",
     "Rätt ordning på- och avtagning."
    ],
    "quick": [
     "Sprita händerna",
     "Förkläde – mask – visir – handskar",
     "Av: handskar – förkläde – sprit",
     "Sprita efteråt"
    ],
    "rub": [
     {
      "key": "oVT25|14",
      "label": "Senaste mallen (oVT25 st. 14)",
      "total": 10,
      "declared": 10,
      "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf"
     }
    ]
   },
   "kognition": {
    "id": "kognition",
    "title": "Kognitiv skattning (MMSE) och demensutredning",
    "fam": "Kognitiv skattning (MMSE) och demensutredning",
    "exam": "Genomföra MMSE korrekt, ta demensanamnes och informera om fynd och fortsatt utredning.",
    "task": "Du träffar en patient med minnesproblem. Du ska genomföra kognitiv skattning (MMSE), förklara fynd och planera fortsatt utredning.",
    "prep": [
     "Kunna alla MMSE-delar och poängsättning.",
     "Öva att ge besked på ett lugnt och begripligt sätt."
    ],
    "steps": [
     "Presentera dig och förklara testet.",
     "Bakgrundsdata på första sidan.",
     "Orientering i tid och rum.",
     "Omedelbar återgivning av tre ord, uppmärksamhet/huvudräkning (serial 7 eller baklänges), fördröjd återgivning, benämning, upprepning, tre-stegskommando, läs och utför, skriva en mening, rita figur.",
     "Räkna poäng enligt instruktion.",
     "Informera om resultatet och fortsatt utredning: anamnes med anhörig, basprover, DT/MR hjärna, läkemedelsgenomgång."
    ],
    "say": [
     "”Nu ska jag ställa några frågor. Vissa är lätta och andra svårare. Gör ditt bästa.”",
     "”Testet visar att minnet och tänkandet är något påverkade. Vi går vidare med utredning.”"
    ],
    "interp": [
     "MMSE 26–30 normalt, 21–25 lätt, 10–20 måttlig, <10 svår nedsättning (riktvärden).",
     "Demens kräver nedsatt funktion i vardagen, inte bara testresultat."
    ],
    "ddx": [
     "Alzheimer, vaskulär demens, Lewy body, frontotemporal, depression, B12/tyreoideabrist, NPH, subduralhematom, läkemedelsbiverkan."
    ],
    "mgmt": [
     "Basal demensutredning: anamnes, status, blodprover, bilddiagnostik, kognitiv test; behandling: kolinesterashämmare vid Alzheimer, stöd till anhöriga, körkortsbedömning.",
     "Allmänt: lokala riktlinjer."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 6 av 14 tillfällen (6 stationer).",
     "Dokumenterat: senaste mallen (VT26 st. 8) fördelar poängen jämnt på 10 moment (1 p vardera) – varje moment räknas lika."
    ],
    "pitGen": [
     "Allmänt: läser instruktioner fel eller poängsätter fel.",
     "Allmänt: för snabbt tempo och utan struktur."
    ],
    "never": [
     "Följ testets instruktioner och strukturen.",
     "Informera begripligt och föreslå handläggning."
    ],
    "quick": [
     "Orientering – återgivning – räkning – fördröjd återgivning – benämning – kommando – skrivning – ritning",
     "Anhöriganamnes",
     "Basprover + bilddiagnostik"
    ],
    "rub": [
     {
      "key": "VT26|8",
      "label": "Senaste mallen (VT26 st. 8)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
     }
    ]
   },
   "geriatrik": {
    "id": "geriatrik",
    "title": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård",
    "fam": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård",
    "exam": "Ta anamnes och bedöma misstänkt läkemedelsbiverkan, ändra läkemedelslista, genomföra utskrivningssamtal eller dokumentera status.",
    "task": "Äldre patient med misstänkt biverkan, läkemedelsöversyn eller utskrivning. Du ska ta anamnes, göra bedömning, informera och föreslå åtgärd.",
    "prep": [
     "Kunna vanliga biverkningar (statin: muskelvärk, ACE-hämmare: hosta, kalciumantagonist: ödem, diuretika: yrsel/natrium).",
     "Öva att involvera patienten i beslut."
    ],
    "steps": [
     "Inled och strukturera samtalet.",
     "Bakgrund: sjukdomar, läkemedel (inkl. receptfria/naturläkemedel), alkohol, boende.",
     "Aktuellt problem: debut, tidsrelation till läkemedelsändring, symtom.",
     "Bedöm om det är en läkemedelsbiverkan, och förklara begripligt.",
     "Gör rimlig ändring i läkemedelslistan (sätt ut, minska, byt) och väg nytta mot besvär tillsammans med patienten.",
     "Utskrivning: tydlig läkemedelsinformation (nytt, ändrat, utsatt), uppföljning, kontakter.",
     "Sammanfatta och boka uppföljning."
    ],
    "say": [
     "”Besvären kom ungefär när medicinen sattes in, så det kan vara en biverkan. Vad tycker du själv är viktigast?”",
     "”Vi provar att pausa medicinen och ses igen om några veckor.”"
    ],
    "interp": [
     "Statin + muskelvärk: kontrollera CK, TSH, D-vitamin; överväg paus eller dosreduktion.",
     "Äldre: risk för ortostatism, fall, interaktioner och förskrivningskaskader."
    ],
    "ddx": [
     "Läkemedelsbiverkan, interaktion, nytillkommen sjukdom, uttorkning, ortostatism."
    ],
    "mgmt": [
     "Läkemedelsöversyn, uppdatera läkemedelslista, patientdelaktighet, uppföljning.",
     "Allmänt: Janusmed/Fass och lokala PM."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 8 av 14 tillfällen (9 stationer).",
     "Dokumenterat: senaste mallen (oVT26 st. 5) fördelar poängen jämnt på 5 moment (2 p vardera) – varje moment räknas lika."
    ],
    "pitGen": [
     "Allmänt: sätter ut läkemedel utan att involvera patienten.",
     "Allmänt: glömmer att uppdatera läkemedelslistan."
    ],
    "never": [
     "Ändra läkemedelslistan konkret och motivera.",
     "Involvera patienten i beslut."
    ],
    "quick": [
     "Tidsrelation",
     "Läkemedelslista uppdatera",
     "Nytta mot besvär",
     "Uppföljning"
    ],
    "rub": [
     {
      "key": "oVT26|5",
      "label": "Senaste mallen (oVT26 st. 5)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
     }
    ]
   },
   "bfm": {
    "id": "bfm",
    "title": "Bilddiagnostik: akut radiologi",
    "fam": "Bilddiagnostik: akut radiologi",
    "exam": "Tolka röntgenbilder (thorax, DT hjärna m.m.), ange diagnos och visa fynd för kollega eller student.",
    "task": "Du granskar tre röntgenundersökningar, ställer diagnos och visar vilka fynd som styrker den. Du får frågor.",
    "prep": [
     "Ha en systematik för thoraxröntgen och DT hjärna.",
     "Öva att peka och beskriva fynd högt."
    ],
    "steps": [
     "Läs remissen, kontrollera bild och patient.",
     "Beskriv systematiskt (thorax: luftväg, lungor, hjärta/mediastinum, diafragma, skelett).",
     "Ange diagnos och peka ut de fynd som styrker den.",
     "DT hjärna: blödning (hyperdens), tidiga ischemitecken, mellanlinjeförskjutning.",
     "Svara på följdfrågor och föreslå nästa steg."
    ],
    "say": [
     "”Här ser jag en skarp linje av visceral pleura och ingen lungteckning utanför den, vilket talar för pneumotorax.”"
    ],
    "interp": [
     "Pneumotorax: pleuralinje utan lungteckning; pleuravätska: utplånad kostofrenisk vinkel med meniskbild; pneumoni: förtätning med luftbronkogram; lungödem: Kerley B-linjer och kardiomegali."
    ],
    "ddx": [
     "Beroende på bild."
    ],
    "mgmt": [
     "Akut åtgärd efter bildfynd; kontakta radiolog vid osäkerhet."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 8 av 14 tillfällen (8 stationer).",
     "Dokumenterat: i senaste mallen (oVT26 st. 11) ger ”Demonstration” 3 p och ”Demonstration” 2 p av 10.",
     "Dokumenterat: säkerhetsmoment som poängsatts: Utesluta fynd."
    ],
    "pitGen": [
     "Allmänt: pekar inte ut fynd.",
     "Allmänt: tolkar utan systematik."
    ],
    "never": [
     "Ange rätt diagnos och visa fynden.",
     "Beskriv relevanta fynd korrekt."
    ],
    "quick": [
     "Systematik",
     "Diagnos + fynd",
     "Peka och beskriv",
     "Nästa steg"
    ],
    "rub": [
     {
      "key": "oVT26|11",
      "label": "Senaste mallen (oVT26 st. 11)",
      "total": 10,
      "declared": 10,
      "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
     }
    ]
   },
   "recept": {
    "id": "recept",
    "title": "Receptförskrivning",
    "fam": "Receptförskrivning",
    "exam": "Skriva korrekt pappersrecept och informera patienten muntligt om läkemedlet.",
    "task": "Du ska skriva ett pappersrecept (t.ex. omeprazol vid refluxsjukdom) med hjälp av FASS och därefter informera patienten.",
    "prep": [
     "Kunna receptets obligatoriska delar.",
     "Öva muntlig läkemedelsinformation i fasta steg."
    ],
    "steps": [
     "Skriv: patientens namn och personnummer, förskrivarens uppgifter, datum, läkemedel (substans, styrka, form), dosering, mängd/uttag, indikation (om patienten ska ha den angiven), utbyte tillåtet eller inte, signatur.",
     "Informera: vad det är till för, hur och när man tar det (t.ex. omeprazol 20 mg en gång dagligen före frukost), hur länge, biverkningar, råd och när man ska söka igen.",
     "Bjud in till frågor och uppföljning."
    ],
    "say": [
     "”Det här läkemedlet minskar syran i magen. Ta en tablett på morgonen före frukost.”"
    ],
    "interp": [
     "Kontrollera allergier och interaktioner innan förskrivning."
    ],
    "ddx": [],
    "mgmt": [
     "Följ FASS och gällande föreskrifter."
    ],
    "pitDoc": [
     "Dokumenterat: stationstypen fanns i 2 av 14 tillfällen (2 stationer).",
     "Dokumenterat: i senaste mallen (oHT25 st. 13) ger ”Receptskrivning” 4 p och ”Information” 4 p av 10."
    ],
    "pitGen": [
     "Allmänt: glömmer dosering, mängd eller signatur.",
     "Allmänt: informerar utan att kolla förståelsen."
    ],
    "never": [
     "Receptets alla delar (4 p).",
     "Informera om användning och biverkningar (4 p)."
    ],
    "quick": [
     "Namn + pnr",
     "Substans, styrka, form, dos",
     "Mängd/uttag, utbyte",
     "Signera",
     "Informera muntligt"
    ],
    "rub": [
     {
      "key": "oHT25|13",
      "label": "Senaste mallen (oHT25 st. 13)",
      "total": 10,
      "declared": 10,
      "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
     }
    ]
   }
  },
  "stations": {
   "VT23|1": {
    "key": "VT23|1",
    "session": "VT23",
    "stn": "1",
    "date": "2023-05-26",
    "year": 2023,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Lunga",
    "family": "KOL, spirometri och obstruktiv/restriktiv lungsjukdom",
    "topic": "KOL-exacerbation",
    "title": "KOL-exacerbation – SBAR och ordinationer",
    "comp": [
     "RESON",
     "KOMM"
    ],
    "source": "2. Bedömningsmallar OSCE I VT23.pdf",
    "door": {
     "text": "Du är ny underläkare på lungavdelningen. Du anländer till avdelningen för att tillsammans med en sjuksköterska ronda en patient som under natten blivit inlagd på grund av andningsbesvär.\nDu ska:\n• Utifrån inläggningsjournal (finns här nedanför) lab-lista, artärgas och läkemedelslista (finns inne på rummet) ge en kort strukturerad rapport enligt SBAR (Situation, Bakgrund, Aktuellt, Rekommendationer)\n• Ge tydliga ordinationer om fortsatt handläggning av patienten.\nInläggningsjournal torsdag 2023-05-26 03:00\nInkommer på grund av andnöd.\n70-årig kvinna med KOL, som kommer på grund av svår andnöd. Ökade besvär med andningen sedan igår, inte kunnat ligga ner, missfärgade upphostningar. Förnekar bröstsmärta. Enligt ambulansjournal samtalsdyspné, allmänpåverkad och subfebril. Saturation 76 %. Erhåller i ambulansen inhalation Combivent (salbutamol+ipratropium) och 8 tabl Betapred 0,5 mg (betametason). Status:\nAllmäntillstånd: Magerlagd, intorkad, temp 37,8 °C. Inga pittingödem på underbenen. Hjärta: Regelbunden rytm, frekvens 91. Blodtryck 135/71 mm Hg. Lungor: Generellt tysta andningsljud över hela lungfälten, framför allt höger lungfält. En del sonora ronki. Saturation 91 % på 1 L O2. Bedömning: Andnöd hos patient med KOL Provsvar och läkemedelslista finns inne på rummet\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Titel, för- och efternamn",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Patient med KOL",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Akuta symtom",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "A-gas tolkning",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Differentialdiagnoser",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Bronkdilatation",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Betapred",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Syrgas/Blodgas",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger en saturationsgräns",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Antibiotika",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Lungröntgen",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Sputumodling och/eller NPHvirus",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kommunikation",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "kol"
   },
   "VT23|2": {
    "key": "VT23|2",
    "session": "VT23",
    "stn": "2",
    "date": "2023-05-26",
    "year": 2023,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Angiologi",
    "family": "Ensidig bensvullnad: DVT-misstanke",
    "topic": "DVT",
    "title": "DVT-misstanke – anamnes, status och utredning",
    "comp": [
     "ANAM",
     "STAT",
     "RESON"
    ],
    "source": "2. Bedömningsmallar OSCE I VT23.pdf",
    "door": {
     "text": "Du träffar en patient som söker för hastigt påkommen smärta och svullnad i ena vaden.\nUppgiften är att ta adekvat anamnes och göra status och därefter informera patienten om lämplig(a) åtgärd(er).\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Ställer adekvata anamnestiska frågor",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Inspekterar vaden",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar vaden inklusive mätning av omfång",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Gör sannolikhetsbedömning innefattande D-dimer",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Information till patienten",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "dvt"
   },
   "VT23|3": {
    "key": "VT23|3",
    "session": "VT23",
    "stn": "3",
    "date": "2023-05-26",
    "year": 2023,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Diabetes/Angiologi",
    "family": "Fotstatus och perifer cirkulation",
    "topic": "Perifer artärsjukdom",
    "title": "Perifer cirkulation – undersökning och information",
    "comp": [
     "STAT",
     "KOMM"
    ],
    "source": "2. Bedömningsmallar OSCE I VT23.pdf",
    "door": {
     "text": "Du är läkare på en hälsocentral och tar hand om en 72-årig patient- storrökare men nu rökfri senaste året, som sedan många år behandlas med Amlodipin, Kandesartan och senaste året med Metformin. Patienten upplever obehag i höger underben och fot vid promenader sedan ett par månader tillbaka. Initial misstanke om DVT respektive kompartment-syndrom har avskrivits.\nDin uppgift är nu att\n- Komplettera anamnesen\n- Genomföra ett diabetesfotstatus\n- Informera patienten om din bedömning och ev fortsatt utredning.\nÖvrig klinisk undersökning/status och behandlingsförslag ingår ej i uppgiften.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kompletterande anamnes",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Inspektion",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar a dorsalis pedis",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar a tibialis posterior",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bedömer pulsar",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Vibration",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Känsel",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "diabetesfot"
   },
   "VT23|4": {
    "key": "VT23|4",
    "session": "VT23",
    "stn": "4",
    "date": "2023-05-26",
    "year": 2023,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Hjärtstatus, blåsljud och EKO-fynd",
    "topic": "Hjärtstatus",
    "title": "Hjärtstatus",
    "comp": [
     "STAT",
     "RESON"
    ],
    "source": "2. Bedömningsmallar OSCE I VT23.pdf",
    "door": {
     "text": "Du är AT-läkare och arbetar på vårdcentral. Du ska undersöka en 28-årig man där man har hört ett svagt systoliskt blåsljud i samband med en virusinfektion med feber. Han mår bra nu och kommer för kontroll. EKG är utan anmärkning.\nDin uppgift är att göra ett hjärtstatus och informera mannen om eventuella fynd. Du ska också tala om vilken klaff du hör var. Du ska inte ta anamnes men informera mannen om vad du tänker göra och varför. Du ska också informera om eventuella fynd och handläggning.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Informera varför hjärtat ska undersökas igen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar bröstkorgen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lyssna på hjärtats fyra stationer och vilken klaffar man hör var",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar perifera pulsar samtidigt som hjärtat undersöks",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lyssnar på karotis",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar patienten om fynden och att inget mer behöver göras",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Svarar på patientens frågor adekvat och ok med fysisk aktivitet",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Remitterar inte till ekokardiografi",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hjartstatus"
   },
   "VT23|5": {
    "key": "VT23|5",
    "session": "VT23",
    "stn": "5",
    "date": "2023-05-26",
    "year": 2023,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Njurmedicin",
    "family": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)",
    "topic": "Hyperkalemi",
    "title": "Hyperkalemi – akut handläggning",
    "comp": [
     "SBAR",
     "ORD"
    ],
    "source": "2. Bedömningsmallar OSCE I VT23.pdf",
    "door": {
     "text": "Din patient 75 år kommer akutmottagning. Du ser i systemet att patienten söker pga \"muskelsvaghet\". Det framkommer från journaluppgifter att patienten har en kronisk njursvikt stadium G3bA2 och hjärtsvikt (HFrEF) efter hjärtinfarkt för några år. För 3 veckor har patienten legat inne på medicin med hyperkalemi och förvärrad hjärtsvikt. Patienten behandlades diuretiskt med furosemid, man halverade spironolacton och satt in kaliumbindare vid behov. Läkemedel vid utskrivning är:\nTrombyl 75 mg 1+0+0+0 Bisoprolol 2,5 mg 1+0+0+0 Losartan 50 mg 1+0+0+0 Furosemid 40 mg 1+0+0+0 Atorvastatin 40 mg 0+0+0+1 Spironolacton 25 mg 0,5+0+0+0 Resonium 1 måttsked 20g vid behov. Det föreligger en arteriell blodgasanalys när du träffar patienten med Kalium 6,8 mmol/L. Övriga parametrar på BGA är normala.\nTa en anamnes för bedömning av patientens symptom och det höga kalium.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Öppen fråga i början",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tidsförlopp symptom",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Gradering av svaghet och funktionsförlust",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Avgränsning stroke",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Avgränsning statinmyopati",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utvärdering hjärtsjukdom",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utvärdering njursvikt",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kostförändring",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Läkemedelsadherens",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga om genomförd LM-ändringar",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga om ev intag av Resonium",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "njure_ssk"
   },
   "VT23|6": {
    "key": "VT23|6",
    "session": "VT23",
    "stn": "6",
    "date": "2023-05-26",
    "year": 2023,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Geriatrik",
    "family": "Kognitiv skattning (MMSE) och demensutredning",
    "topic": "MMSE",
    "title": "MMSE-SR – kognitiv skattning",
    "comp": [
     "PROC",
     "KOMM"
    ],
    "source": "2. Bedömningsmallar OSCE I VT23.pdf",
    "door": {
     "text": "En 61 år patient kommer till dig på hälsocentralen på grund av minnesproblem sedan ett halvår tillbaka. Besvären har kommit smygande och ökar långsamt. Har svenska som modersmål, arbetar som ingenjör och äter inga läkemedel.\nDin roll:\nDistriktsläkare på hälsocentral\nDu ska:\n• Utföra minnestestet MMSE-SR enligt protokoll inne på rummet, endast de markerade frågorna.\n• Ange i rätt ruta patientens poäng utifrån dennes svar, avseende fråga 11-13, 17 samt 19.\n• Meddela patienten totalpoäng och din tolkning av resultatet, samt om fortsatt utredning är nödvändig eller ej\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Introduktion av uppgiften",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Allmänt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Omedelbar återgivning (fråga 11)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Uppmärksamhet och huvudräkning (fråga 12)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Fördröjd återgivning (fråga 13)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förståelse – trestegs uppmaningen (fråga 17)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Skrivförmåga (fråga 19)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bedömning och Information",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "kognition"
   },
   "VT23|8": {
    "key": "VT23|8",
    "session": "VT23",
    "stn": "8",
    "date": "2023-05-26",
    "year": 2023,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Bröstsmärta: AKS, perimyokardit och EKG",
    "topic": "Bröstsmärta",
    "title": "Bröstsmärta – anamnes och handläggning",
    "comp": [
     "ANAM",
     "RESON",
     "KOMM"
    ],
    "source": "2. Bedömningsmallar OSCE I VT23.pdf",
    "door": {
     "text": "En 56-årig, rökande man med tablettbehandlad hypertoni, kostbehandlad diabetes och övervikt söker på vårdcentralen på grund av övergående bröstsmärtor. Mottagningssköterskan har registretat följande:\nBlodtryck: 140/80 Puls: 90 Saturation: 96% Andningsfrekvens: 14 EKG: Se papperskopia (finns i undersökningsrummet)\nDin uppgift är att:\n1. Komplettera anamnesen avseende bröstsmärtorna\n2. Översiktligt tolka EKG\n3. Utifrån din sammanfattande bedömning av anamnes, EKG och parametrar ovan göra en bedömning och informera patienten om denna och ev ytterligare åtgärd.\n(Du ska inte göra status på denna station)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Frågar efter smärtduration",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar efter smärtlokalisation",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar efter smärtutlösning (alltså med eller utan ansträngning)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar efter smärtprogress",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tolkar EKG korrekt (väs normalt)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ställer rätt diagnos: instabil angina",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger information om diagnos korrekt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger Trombyl",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Skickar in pat akut",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "aks"
   },
   "VT23|9": {
    "key": "VT23|9",
    "session": "VT23",
    "stn": "9",
    "date": "2023-05-26",
    "year": 2023,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Endokrinologi",
    "family": "Diabetes: debut, kost och motion",
    "topic": "Diabetesdebut",
    "title": "Diabetesdebut – anamnes och information",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "2. Bedömningsmallar OSCE I VT23.pdf",
    "door": {
     "text": "På denna station möter du en patient med välreglerad hypertoni som kommer till dig på hälsocentralen.\nVid hälsokontroll i samband med 50-årsdagen uppmättes förhöjt blodsocker. Värdet har mätts ytterligare en gång med förhöjd nivå. Patienten har nu fått tid till dig för att få information om vad de förhöjda blodsockervärdena innebär.\nProvsvaren visar faste-P-glukos 7,4 mmol/l respektive 7,5 mmol/l.\nUppgiften är att informera patienten om vad provsvaren visar, utvidga anamnesen på ett relevant sätt, samt besvara patientens eventuella frågor.\nOBS! Klinisk undersökning och behandlingsförslag ingår INTE i uppgiften\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Inleder med en öppen invitation",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tolkar labresultat korrekt dvs ställer diagnos typ2 diabetes",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Fångar in patientens egna tankar om besöket/diabetes",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar en relevant anamnes ( ex kost, motion, nikotin, ärftlighet, alkohol)",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar efter relevanta symptom avseende diabetes/hjärtkärlsjuklighet (ex bröstsmärta,andfåddhet, bensvullnad, synpåverkan, trötthet, törst)",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Berör patientens tankar om sin livsstil",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Fångar patientens oro för komplikationer",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förvissar sig om att patienten förstått informationen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "diabetes"
   },
   "VT23|10": {
    "key": "VT23|10",
    "session": "VT23",
    "stn": "10",
    "date": "2023-05-26",
    "year": 2023,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "BFM",
    "family": "Bilddiagnostik: akut radiologi",
    "topic": "Akut radiologi",
    "title": "Röntgendiagnostik",
    "comp": [
     "BILD"
    ],
    "source": "2. Bedömningsmallar OSCE I VT23.pdf",
    "door": {
     "text": "Du är vik ul. och går jour på ett mindre sjukhus. Du har sällskap av en läkarstudent på T6, som gör ett frivilligt jourpass i kväll och vill veta allt. Du har träffat 3 patienter med andnöd och hosta, som du har remitterat för lungröntgen med samma frågeställningar: ”Stas? Infiltrat? Pneumothorax? Pleuravätska?” Bilderna har kommit, men röntgensvaren dröjer. Medan du väntar, gör du en egen bildtolkning av de tre undersökningarna. Sedan hinner du visa och kort förklara för läkarstudenten vad du har hittat.\nDu ska:\n• Själv ställa diagnos på tre lungröntgenundersökningar\n• Visa fynden och motivera din diagnos för läkarstudenten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Korrekt Diagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Demonstration:",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Visar fynd 1 Demonstration:",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Visar fynd 2 Demonstration:",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Motiverar fynd 2 Demonstration:",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt diagnos",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Demonstration:",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Visar fynd 1 Demonstration:",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Motiverar fynd1/diff. diagnostik Demonstration:",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt diagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Demonstration:",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Visar fynd 1 Demonstration:",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Motiverar fynd 1 Demonstration:",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "bfm"
   },
   "VT23|11": {
    "key": "VT23|11",
    "session": "VT23",
    "stn": "11",
    "date": "2023-05-26",
    "year": 2023,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Gastroenterologi",
    "family": "Gastro: förhöjda leverprover (kolestas)",
    "topic": "Kolestas",
    "title": "Trötthet – förhöjda leverprover",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "2. Bedömningsmallar OSCE I VT23.pdf",
    "door": {
     "text": "Du arbetar på en vårdcentral och har tagit leverprover på en kvinna 60 år gammal som söker för att hon känner sig trött. Proverna visar ALP 6,6 (ref <1,9) µkat/L, ASAT 0,9 µkat/L (ref <0,60), ALAT 0.8 µkat/L (ref<0,70), GT 9.0 µkat/L (ref <1,2). Bilirubin konjugerad 48 µmol/L (ref <1,5) .\nDin uppgift på denna station blir att ta en kompletterande anamnes, muntligen beskriva för examinatorn vad du skulle prioritera i status samt att berätta för patienten din initiala utredningsplan?\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Balans öppna och riktade frågor",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes kring det aktuella problemet och relevanta frågor kring bakgrunden",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att prioritera statusmoment",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår lämplig utredning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar på ett sätt som patienten kan förstå",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "gastro_lever"
   },
   "VT23|12": {
    "key": "VT23|12",
    "session": "VT23",
    "stn": "12",
    "date": "2023-05-26",
    "year": 2023,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Endokrinologi/Akut",
    "family": "Akut medvetslöshet, intoxikation och svimning",
    "topic": "Medvetslöshet",
    "title": "Akut medvetslöshet",
    "comp": [
     "AKUT",
     "RESON"
    ],
    "source": "2. Bedömningsmallar OSCE I VT23.pdf",
    "door": {
     "text": "Du jobbar på akutmottagningen en lördagskväll. En ung student (20-30 år) har blivit medvetslös i en studentkorridor och två bekanta har kört in denne till akuten (3 minuters bilväg).\nPatienten har flyttats in till en brits på akutrummet där tjänstgörande sjuksköterska har bedömt patientens vitalparametrar (ABC) och ni behöver agera direkt.\nInteragera med sköterskan. Ordinera akut utredning och ev. behandling.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Överväger differentialdiagnoser enligt MIDAS (HUSK), t.ex: - M/S. Undersöker nackstyvhet, tecken till skalltrauma, pupillreaktion dolls-eye och/eller ordinerar temp. och/eller kapillärt CRP.",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "- Försöker få fram information om ev. intox. – anamnes/stick",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar syrgas",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar i.v. vätska (Ringer el NaCl)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar kapillärt B-glukos",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar Naloxon i.v.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Patienten vaknar bara delvis – ordinerar ytterligare Naloxon",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Interagerar med sjuksköterskan på ett adekvat sätt",
       "max": 3,
       "opts": [
        3,
        2.5,
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "endoakut"
   },
   "VT23|13": {
    "key": "VT23|13",
    "session": "VT23",
    "stn": "13",
    "date": "2023-05-26",
    "year": 2023,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "2. Bedömningsmallar OSCE I VT23.pdf",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet.\nVad gör du?\n(Patienten är bekräftat COVID-negativ)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kontroll av medvetande (ruska om, ropa)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning. Öppnar luftvägen och håller den öppen under hela andningskontrollen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning: Titta, lyssna, känn (ca 10 sek)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Larmar (på larmknapp i rummet, alt ropar på hjälp)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Utfört kompressioner med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört inblåsningar med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört kompressioner med total medelhastighet 100-120/min",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hlr"
   },
   "oVT23|1": {
    "key": "oVT23|1",
    "session": "oVT23",
    "stn": "1",
    "date": "2023-08-25",
    "year": 2023,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "BFM",
    "family": "Bilddiagnostik: akut radiologi",
    "topic": "Akut radiologi",
    "title": "Röntgendiagnostik",
    "comp": [
     "BILD"
    ],
    "source": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf",
    "door": {
     "text": "Du har sommarjobb som vik ul. på röntgen. Idag har du fått sällskap av en läkarstudent som auskulterar några timmar på röntgenavdelningen och som vill veta allt! Du har nu fått röntgenremisser på 3 patienter och ska granska bilderna. Du gör din tolkning av de tre undersökningarna, och sedan hinner du också visa och kort förklara för läkarstudenten vad du har hittat.\nTill varje undersökning finns några frågeställningar och kortfattade kliniska uppgifter.\nDu ska:\nSjälv granska tre röntgenundersökningar och besvara frågeställningarna i remisstexten (muntligt)\nVisa fynden och motivera din diagnos för läkarstudenten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "3. Dörrinformation omOSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Korrekt diagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Demonstration:",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Visar relevant fynd och anger lokalisation Demonstration",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Motiverar (diagnostik) Demonstration:",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt diagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Demonstration:",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Visar relevant fynd och anger lokalisation Demonstration:",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Motiverar (diagnostik) Demonstration:",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt diagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Demonstration:",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Visar relevant fynd och anger lokalisation Demonstration:",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Motiverar (diagnostik 1) Demonstration:",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Motiverar (diagnostik 2) Demonstration:",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "bfm"
   },
   "oVT23|2": {
    "key": "oVT23|2",
    "session": "oVT23",
    "stn": "2",
    "date": "2023-08-25",
    "year": 2023,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Arytmi, svimning och ortostatism",
    "topic": "Svimning",
    "title": "Svimning – anamnes och handläggning",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf",
    "door": {
     "text": "Du är AT läkare och arbetar på akuten. Du kallas till akutrummet där en 60 årig man inkommit med ambulans efter att ha svimmat under besök på stadens bibliotek. Ambulanspersonalen meddelar att allmäntillståndet är påverkat, och man önskar din hjälp.\nDin uppgift blir att ta anamnes och föreslå fortsatt utredning och behandling.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "3. Dörrinformation omOSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Ta anamnes",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfråga blodtryck",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfråga EKG. Tolkning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Kalla på narkosläkare. Planering/risk",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Handläggning",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "arytmi"
   },
   "oVT23|3": {
    "key": "oVT23|3",
    "session": "oVT23",
    "stn": "3",
    "date": "2023-08-25",
    "year": 2023,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet.\nVad gör du?\n(Patienten är bekräftat COVID-negativ)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "3. Dörrinformation omOSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kontroll av medvetande (ruska om, ropa)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning. Öppnar luftvägen och håller den öppen under hela andningskontrollen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning: Titta, lyssna, känn (ca 10 sek)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Larmar (på larmknapp i rummet, alt ropar på hjälp)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Utfört kompressioner med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört inblåsningar med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört kompressioner med total medelhastighet 100-120/min",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hlr"
   },
   "oVT23|5": {
    "key": "oVT23|5",
    "session": "oVT23",
    "stn": "5",
    "date": "2023-08-25",
    "year": 2023,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Lunga",
    "family": "KOL, spirometri och obstruktiv/restriktiv lungsjukdom",
    "topic": "KOL",
    "title": "KOL – diagnostik och information",
    "comp": [
     "RESON",
     "KOMM"
    ],
    "source": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf",
    "door": {
     "text": "En 65-årig nybliven pensionär har bokat tid på hälsocentralen för att ”andningen har blivit sämre” under de senaste åren. Patienten slutade röka för cirka sex månader sedan (paket-år: 23). Hen har inte haft några försämringsperioder (exacerbationer).\nLungröntgen inför dagens besök: normalt fynd. BMI 21.\nPatienten har gjort spirometri och fyllt i ett CAT-formulär (COPD Assessment Test).\nVärdera patientinformation, tolka spirometri och CAT-test\nså att du kan\n➔ informera patienten om diagnos, vanliga symtom samt svårighetsgrad av sjukdomen ➔ ge lämpliga råd och förhållningssätt\nDu ska INTE ta ytterligare anamnes.\nDu ska INTE ge information om/ordinera läkemedel för daglig behandling vid KOL.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "3. Dörrinformation omOSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Sjukdom",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Svårighetsgrad",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Symtom A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Symtom B",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Försämringar A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Försämringar B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Råd A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Råd B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "kol"
   },
   "oVT23|6": {
    "key": "oVT23|6",
    "session": "oVT23",
    "stn": "6",
    "date": "2023-08-25",
    "year": 2023,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Hematologi",
    "family": "Hematologi: lymfkörtelstatus, anemi och blödning",
    "topic": "Lymfkörtelstatus",
    "title": "Lymfkörtelstatus – feber och nattsvettningar",
    "comp": [
     "STAT",
     "ANAM"
    ],
    "source": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf",
    "door": {
     "text": "Du träffar en patient som söker för feber och nattsvettningar.\nDin uppgift är att undersöka (status) patientens lymfkörtelvävnad (ovan naveln).\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "3. Dörrinformation omOSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Informerar patienten om vad som ska undersökas",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Använder rätt palpationsteknik",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar occipitalt",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar retroauriculärt",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar i käkvinklar",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar submandibulärt",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar submentalt",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar längs sternocleidomastoideus",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar fossa supraclavicularis",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar fossa infraclavicularis",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar axiller",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rätt teknik vid axillpalpationen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Inspekterar munhåla (tonsillvävnad)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hema"
   },
   "oVT23|7": {
    "key": "oVT23|7",
    "session": "oVT23",
    "stn": "7",
    "date": "2023-08-25",
    "year": 2023,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Gastroenterologi",
    "family": "Gastro: förhöjda leverprover (kolestas)",
    "topic": "Kolestas",
    "title": "Trötthet – förhöjda leverprover",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf",
    "door": {
     "text": "Du arbetar på en vårdcentral och har tagit leverprover på en kvinna 60 år gammal som söker för att hon känner sig trött. Proverna visar ALP 6,6 (ref <1,9) µkat/L, ASAT 0,9 µkat/L (ref <0,60), ALAT 0.8 µkat/L (ref<0,70), GT 9.0 µkat/L (ref <1,2). Bilirubin konjugerad 48 µmol/L (ref <1,5).\nDin uppgift på denna station blir att ta en kompletterande anamnes, muntligen beskriva för examinatorn vad du skulle prioritera i status samt att berätta för patienten din initiala utredningsplan?\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "3. Dörrinformation omOSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Balans öppna och riktade frågor. Följsamhet och lyhördhet",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes och bakgrund",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Prioritera statusmoment",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslå lämplig utredning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informera patient",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "gastro_lever"
   },
   "oVT23|8": {
    "key": "oVT23|8",
    "session": "oVT23",
    "stn": "8",
    "date": "2023-08-25",
    "year": 2023,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Allmänmedicin",
    "family": "Hypertoni: blodtrycksbedömning och riskbedömning",
    "topic": "Riskbedömning SCORE",
    "title": "Riskbedömning (SCORE) – hypertoni",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf",
    "door": {
     "text": "På denna station möter du en patient som bokats in på din mottagning på vårdcentralen för att värdera risken för hjärt-kärlsjukdom. Patienten är 45 år gammal, tidigare frisk. Svar på provtagning för en vecka sedan:\nBlodstatus, kreatinin, Na, K u.a. fP-glukos u.a, P-kolesterol 3,4, P-LDL 1,3 mmol/L. Normalt vilo-EKG. Blodtryck taget vid fler tillfällen på mottagningen visar medelvärde 120/70.\nDin uppgift är att göra en bedömning av patientens risk med hjälp av SCORE. Du behöver utvidga anamnesen på ett relevant sätt, informera om din bedömning samt föreslå eventuella åtgärder.\nDu ska också besvara patientens frågor.\nKlinisk undersökning, dvs status, ingår inte i uppgiften. Längre motiverande samtal för ev. förändring av levnadsvanor ingår inte i uppgiften.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "3. Dörrinformation omOSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Anamnes hjärt-kärlrisk",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att göra en SCORE-bedömning",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientcentrerat förhållningssätt",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslå adekvata åtgärder",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hypertoni"
   },
   "oVT23|9": {
    "key": "oVT23|9",
    "session": "oVT23",
    "stn": "9",
    "date": "2023-08-25",
    "year": 2023,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Hjärtstatus, blåsljud och EKO-fynd",
    "topic": "Blåsljud",
    "title": "Kardiellt blåsljud – hjärtstatus",
    "comp": [
     "STAT",
     "RESON"
    ],
    "source": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf",
    "door": {
     "text": "37-årig man som söker på vårdcentralen för en hälsokontroll. Han är frisk och mår bra. Blodtrycket är 135/65.\nGör ett hjärtstaus på patienten (Harvey docka) och beskriv eventuellt blåsljud. Ange var du hör respektive hjärtklaff bäst.\nFöreslå rimlig vidare utredning. Motivera varför.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "3. Dörrinformation omOSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Palpering",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lyssnar på samtliga positioner",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lyssnar på karotis",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Perifer pulstagning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anger vilken hjärtklaff som hörs var",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ange typ av och var ev blåsljud hörs",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår hjärtultraljud som fortsatt utredning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Motiverar föreslagna undersökning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hjartstatus"
   },
   "oVT23|10": {
    "key": "oVT23|10",
    "session": "oVT23",
    "stn": "10",
    "date": "2023-08-25",
    "year": 2023,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Neurologi/Angiologi",
    "family": "Stroke och TIA: NIHSS, SBAR och information",
    "topic": "Akut stroke",
    "title": "Akut handläggning stroke – NIHSS och SBAR",
    "comp": [
     "STAT",
     "SBAR",
     "KOMM"
    ],
    "source": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf",
    "door": {
     "text": "Du är medicinjour och kallas till sjukhusets strokeenhet där en 51-årig person lagts in pga övergående svaghet för 2 timmar sedan. Svagheten satt i i ca 15 min och hen blev helt återställd men rapporteras sedan en kvart ”känna sig konstig”.\nDu ska: Utföra anvisade delar av nervstatuset NIHSS och rapportera fynden enligt SBAR till din bakjour och föreslå nästa åtgärd.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "3. Dörrinformation omOSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Testar Ögonmotorik",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar Synfält",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar Facialispares",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar motorik i armar och ben",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar utsläckning/neglekt",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rapport enligt SBAR till bakjour",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": true
      }
     ]
    },
    "guide": "stroke"
   },
   "oVT23|11": {
    "key": "oVT23|11",
    "session": "oVT23",
    "stn": "11",
    "date": "2023-08-25",
    "year": 2023,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Njurmedicin",
    "family": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)",
    "topic": "Diuresstimulering",
    "title": "SBAR om Furix – samtal med ssk",
    "comp": [
     "SBAR",
     "ORD"
    ],
    "source": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf",
    "door": {
     "text": "Du är primärjour medicin. Klockan är strax över midnatt och din bakjour har precis meddelat att hen lägger sig. Nu går sökaren, ett nummer du inte känner igen. Inne på rummet finns det en telefon. Ring tillbaka, och hör vad det gäller.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "3. Dörrinformation omOSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Egen situation",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående situation",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bakgrund",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Akutläge",
       "max": 3,
       "opts": [
        3,
        2.5,
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Medicinsk bedömning",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtalsstruktur",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordination",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "njure_ssk"
   },
   "oVT23|12": {
    "key": "oVT23|12",
    "session": "oVT23",
    "stn": "12",
    "date": "2023-08-25",
    "year": 2023,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Lunga",
    "family": "Astma: inhalationsteknik, ACT och PEF-dagbok",
    "topic": "Inhalationsteknik",
    "title": "Instruktion av inhalationsläkemedel vid astma",
    "comp": [
     "PROC",
     "KOMM"
    ],
    "source": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf",
    "door": {
     "text": "Du har träffat en patient med astma, som behandlas med kortverkande beta-2-stimulerare (SABA) vid behov. Spirometri visar bibehållen lungfunktion, men symtom och Astma Kontroll Test (ACT) 18 p motiverar att du sätter in underhållsbehandling med en fast kombination av inhalationssteroid och långverkande beta-2-stimulerare (ICS + LABA). Du har olika inhalationsformer/inhalatorer att välja bland, ett urval finns tillgängliga inne på rummet. Du väljer ett av dessa. Patienten har fått instruktioner av astma-KOL-sjuksköterska angående inhalationsteknik för det läkemedel som du har valt att förskriva och kommer tillbaka in till dig.\nDu ska:\n1. Informera patienten om de läkemedel som du förskriver (ICS + LABA).\n2. Kontrollera inhalationsteknik genom att be patienten visa hur hen är instruerad att ta inhalationsläkemedlet som du har valt. Försäkra dig om att patienten vet hur hen ska ta läkemedlet.\nOBS! Av hygienskäl ska endast figuranten/patienten hantera inhalationsläkemedlen. Du får informera/kommentera verbalt. DU SKA INTE TA ANAMNES ELLER STATUS!\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "3. Dörrinformation omOSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Information del 1 – delmoment A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information del 1 – delmoment B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information del 2 – delmoment A",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information del 2 – delmoment B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information del 2 – delmoment C",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Delmoment – delmoment A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Delmoment – delmoment B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Delmoment – delmoment C",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Övergripande",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "astma"
   },
   "oVT23|13": {
    "key": "oVT23|13",
    "session": "oVT23",
    "stn": "13",
    "date": "2023-08-25",
    "year": 2023,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Geriatrik",
    "family": "Kognitiv skattning (MMSE) och demensutredning",
    "topic": "Demensutredning",
    "title": "Demensanamnes",
    "comp": [
     "PROC",
     "KOMM"
    ],
    "source": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf",
    "door": {
     "text": "Du befinner dig på distriktsläkarmottagningen, du ska ta emot en anhörig till en patient som har en misstänkt demensutveckling:\nKliniska Upplysningar:\nPatienten är en kvinna som är 75 år gammal. Hon var för någon månad sedan inlagd på sjukhus med en akut konfusion som gick över då hon fick behandling för en urinvägsinfektion. Datortomorgrafi av hjärnan är normal. Efter utskrivning genomförs Mini mental test med 21 av 30 poäng. Hon klarade ej klocktestet.\nDu ska ta en strukturerad anamnes från dottern med syfte att komma vidare i demensdiagnosstiken. Vad är den troligaste demensdiagnosen baserat på den anamnes du får fram?\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "3. Dörrinformation omOSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Social situation",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Heriditet/ärftlighet",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Alkohol, rökning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tidigare och aktuell sjukdom",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Psykisk sjukdom",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Symtom fokus kognition",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      },
      {
       "t": "Insjuknande ev progress",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Aktuella läkemedel",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Trolig diagnos Alzheimers sjukdom",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "kognition"
   },
   "oVT23|14": {
    "key": "oVT23|14",
    "session": "oVT23",
    "stn": "14",
    "date": "2023-08-25",
    "year": 2023,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Endokrinologi",
    "family": "Diabetes: debut, kost och motion",
    "topic": "Diabetesdebut",
    "title": "Diabetesdebut – anamnes och information",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "4. Bedömningsmallar omOSCE I VT23 cirkel 1.pdf; 4. Bedömningsmallar omOSCE I VT23 cirkel 2.pdf",
    "door": {
     "text": "Du är läkare på en hälsocentral. Du träffar Karin som är 40 år och lastbilschaufför. Hon är inbokad för ett besök till dig då hon har känt sig trött och törstig sedan ett par månader. Blodprover tagna fastande inför besöket (referensområden inom parentes):\nHb 165 g/L (134-170) Natrium 139 mmol/L (137-145) Glukos 10,2 mmol/L (<6,1) Kalium 3,8 mmol/L (3,5-4,4) SR 7 mm (<13) CO2 tot 26 mmol/L (23-32) C-peptid 0,19 nmol/L (0,37-1,47) Kreatinin 105 mol/L (60-105) HbA1c 82 mmol/mol (<48)\nDin uppgift är att:\n1. Komplettera anamnesen!\n2. Informera patienten om sannolik diagnos och handläggning!\n3. Diskutera patientens arbete med honom!\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "3. Dörrinformation omOSCE I VT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kroppsvikt och viktnedgång",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Aktuellt mående",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Egen och familjens autoimmunitet",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Sjukdomstillstånd nuvarande/tidigare",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Disskussion om körkort",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tydlig information",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientcentrerat förhållningssätt",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Sannolikt diabetes typ",
       "max": 1,
       "opts": [
        1,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Insättning av insulin alt sändning till medicinklinik för detta idag/imorgon",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "diabetes"
   },
   "HT23|1": {
    "key": "HT23|1",
    "session": "HT23",
    "stn": "1",
    "date": "2024-01-12",
    "year": 2024,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Neurologi/Angiologi",
    "family": "Stroke och TIA: NIHSS, SBAR och information",
    "topic": "Strokerond",
    "title": "Rond på strokeavdelning",
    "comp": [
     "STAT",
     "SBAR",
     "KOMM"
    ],
    "source": "2. Bedömningsmallar OSCE I HT23.pdf",
    "door": {
     "text": "Du är läkare på en strokeavdelning och ska morgonronda en patient. Patienten är 66 år och är sedan tidigare frisk, inga läkemedel. Slutat röka för 3 år sen.\nSökte sent igår kväll på grund av övergående svaghet höger arm och ben och blev då inlagd.\nDT-hjärna samt EKG var utan anmärkning och blev insatt på T. Trombyl 75 mg x 1.\nSjuksköterska rapporterar på sittrond att patienten mår bra, känner sig återställd och vill åka hem.\nVitalparametrar samt svar på aktuella laboratorieprover finns inne på rummet.\nDu ska:\nGenomföra morgon-rond med patienten inklusive föreslå vidare handläggning\nDu ska INTE ta livsstilsanamnes. Du ska INTE genomföra status.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I HT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Upprepar anamnes för aktuellt insjuknande",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar om DT hjärna, förklarar misstänkt diagnos för patienten och förklarar vikten av eventuell utredning och åtgärd/er",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar om fortsatt utredning och varför detta ska göras",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förklarar vilka läkemedel som är insatta samt planeras att sättas in och varför",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Struktur och tydlighet: Studenten har en struktur under ronden som gör det möjligt för patienten att följa med.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Språk och bemötande: Studenten använder ett språk med svenska och vardagliga uttryck som gör det möjligt för patienten att förstå. Undviker facktermer. Behandlar patienten med respekt, har ögonkontakt, efterfrågar hur patienten mår, att hen har förstått eller har några frågor.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "stroke"
   },
   "HT23|2": {
    "key": "HT23|2",
    "session": "HT23",
    "stn": "2",
    "date": "2024-01-12",
    "year": 2024,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Allmänmedicin",
    "family": "Levnadsvanor och motiverande samtal",
    "topic": "Levnadsvanor och blodtryck",
    "title": "Levnadsvanor och hypertoni – samtal",
    "comp": [
     "KOMM",
     "ANAM"
    ],
    "source": "2. Bedömningsmallar OSCE I HT23.pdf",
    "door": {
     "text": "På denna station möter du en 45-årig patient som har uppmätt några förhöjda blodtryck kring 145/95 vid mätningar på företagshälsovården.\nDu ska nu träffa patienten för att prata om det höga blodtrycket.\nDin uppgift är att:\n➢ Ta en relevant anamnes utifrån principerna för den patientcentrerade konsultationsmodellen. ➢ Ta en relevant anamnes avseende levnadsvanor kopplade till hypertoni och hjärt-kärlrisk. ➢ Ge anpassade råd om levnadsvanor utifrån patientens behov.\nDu ska INTE undersöka patienten.\nDu ska INTE ta ställning till eventuell läkemedelsbehandling eller vidare utredning.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I HT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Låter pat berätta ostört inledningsvis",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tankar, får fram egna föreställningar",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Oro, får fram farhågor",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Önskan, får fram förväntningar på besöket",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kvitton, använder kvitton",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Sammanfattningar, minst en sammanfattning",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ev. Symtom kopplade till hypertoni el hjärt-kärlsjukdom",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ärftlighet",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tid/nuv sjd",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Socialt, tex stress, ensamhet",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Rökning",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Alkohol, nöjer sig inte med svävande svar utan frågar vidare",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Sömn",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fysisk aktivitet",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kost",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger adekvata råd om levnadsvanor utifrån patientens situation och anamnes, ffa om fysisk aktivitet och kost",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger råd om levnadsvanor med lyhördhet och respekt för patients person och i samråd med patienten.",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "levnadsvanor"
   },
   "HT23|3": {
    "key": "HT23|3",
    "session": "HT23",
    "stn": "3",
    "date": "2024-01-12",
    "year": 2024,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Gastroenterologi",
    "family": "Gastro: ont i magen, akut buk och IBD",
    "topic": "Feber hos äldre",
    "title": "Rond: status vid feber och nedsatt allmäntillstånd",
    "comp": [
     "ANAM",
     "STAT"
    ],
    "source": "2. Bedömningsmallar OSCE I HT23.pdf",
    "door": {
     "text": "Du går rond på en medicinavdelning.\nDu ska göra ett relevant status på en patient 82 år gammal som under natten utvecklat feber 39 grader och nedsatt allmän tillstånd.\nKem lab visar:\nCRP 186 mg/L\nLPK 14 109/L\nneutrofiler 10 109/L.\nVitalparametrar:\nAF 24,\nsaturation 94% på luft.\nBT 150/80.\nPuls 95.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I HT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Använder handsprit före och efter status",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utför lungstatus",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Perkussion och auskultation med fokus på pneumoni",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utför riktat status för hög UVI",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utför inspektion av munhålan",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lyssnar efter blåsljud",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar buken",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Har ett strukturerat utförande och acceptabelt handlag vid utförande",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "gastro_buk"
   },
   "HT23|4": {
    "key": "HT23|4",
    "session": "HT23",
    "stn": "4",
    "date": "2024-01-12",
    "year": 2024,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Lunga",
    "family": "KOL, spirometri och obstruktiv/restriktiv lungsjukdom",
    "topic": "KOL",
    "title": "Information om KOL",
    "comp": [
     "RESON",
     "KOMM"
    ],
    "source": "2. Bedömningsmallar OSCE I HT23.pdf",
    "door": {
     "text": "En tidigare frisk och medicinfri 69-årig patient söker hälsocentralen på grund av successivt ökande andfåddhet vid ansträngning. Symtomen bidrog till att hen slutade röka för drygt två månader sedan (paket-år:\n25). Patienten har inte haft någon försämringsperiod som föranlett sjukvårdskontakt.\nBMI 23. Syremättnad 94%. SR, CRP och blodstatus normalt.\nPatienten har gjort spirometri och fyllt i ett symtomskattningsformulär (CAT=COPD Assessment Test).\nVärdera patientinformationen, tolka spirometri och CAT-test så att du kan\n➢ informera patienten om diagnos, svårighetsgrad och vanliga symtom vid sjukdomen samt ➢ ge lämpliga råd och förhållningssätt\n➢ informera patienten om någon ytterligare diagnostisk/differentialdiagnostisk åtgärd är aktuell och motivera varför.\nDu ska INTE ta ytterligare anamnes.\nDu ska INTE ge information om eller ordinera läkemedel.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I HT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Information om diagnos och sjukdomen",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information om svårighetsgrad/symtom/exacerbationer – delmoment A",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information om svårighetsgrad/symtom/exacerbationer – delmoment B1",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information om svårighetsgrad/symtom/exacerbationer – delmoment B2",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information om svårighetsgrad/symtom/exacerbationer – delmoment C1",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information om svårighetsgrad/symtom/exacerbationer – delmoment C2",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Råd: rökstopp/fysisk aktivitet/vaccinationer – delmoment A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Råd: rökstopp/fysisk aktivitet/vaccinationer – delmoment B",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Råd: rökstopp/fysisk aktivitet/vaccinationer – delmoment C",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Differentialdiagnostik",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "kol"
   },
   "HT23|5": {
    "key": "HT23|5",
    "session": "HT23",
    "stn": "5",
    "date": "2024-01-12",
    "year": 2024,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Kardiologi",
    "family": "Arytmi, svimning och ortostatism",
    "topic": "Förmaksflimmer",
    "title": "Förmaksflimmer – oregelbunden hjärtrytm",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "2. Bedömningsmallar OSCE I HT23.pdf",
    "door": {
     "text": "På sjukhusets medicin-akutmottagning träffar du en 60 årig man som söker för nyligen påkommen andfåddhet och oregelbunden hjärtrytm\nDu ska:\n➢ Fastställa diagnos ➢ Handlägga patientens besvär\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I HT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Adekvat anamnes om andfåddhet (duration), smärta och svimning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Adekvat anamnes om riskfaktorer",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfrågar blodtryck",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfrågar EKG, som tolkas korrekt (FF, snabb kammarrytm, VK hypertrofi)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Adekvat anamnes om fasta och senaste mat/vätskeintag",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar adekvata prover inför sövning(elektrolyter inkl. K) samt thyroidea",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar betablockerare iv för symptomlindring",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tillkalla anestesihjälp",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "arytmi"
   },
   "HT23|6": {
    "key": "HT23|6",
    "session": "HT23",
    "stn": "6",
    "date": "2024-01-12",
    "year": 2024,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Hematologi",
    "family": "Hematologi: lymfkörtelstatus, anemi och blödning",
    "topic": "Blödningsbenägenhet",
    "title": "Blödningsanamnes",
    "comp": [
     "STAT",
     "ANAM"
    ],
    "source": "2. Bedömningsmallar OSCE I HT23.pdf",
    "door": {
     "text": "En 37-årig kvinna söker på hälsocentralen för blåmärken.\nAkuta laboratorieprover visar:\nHb 132 g/L\nSR 14 mm\nCRP 7 mg/L\nnormal urinsticka.\n1. Undersök patientens blåmärken och värdera dem genom en blödningsanamnes och ge patienten en sannolik förklaring till symtomen.\n2. Vilket laboratorieprov skulle Du i första hand vilja ha svar på?\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I HT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Inspekterar blåmärken",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar om duration och tidigare förekomst av blåmärken(a)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar om relevanta blödningssymtom",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar om hemostas efter ingrepp",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar om (tillfällig) medicinering",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anger som laboratorieprov trombocyttal",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger patienten adekvat information och fångar upp hennes oro",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hema"
   },
   "HT23|8": {
    "key": "HT23|8",
    "session": "HT23",
    "stn": "8",
    "date": "2024-01-12",
    "year": 2024,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Njurmedicin",
    "family": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)",
    "topic": "Elektrolyt/diures",
    "title": "Samtal med ssk om patient jourtid",
    "comp": [
     "SBAR",
     "ORD"
    ],
    "source": "2. Bedömningsmallar OSCE I HT23.pdf",
    "door": {
     "text": "Du är primärjour medicin. Klockan är strax över midnatt och din bakjour har precis meddelat att hen lägger sig. Nu piper sökaren med ett nummer du inte känner igen.\nInne på rummet finns det en telefon. Ring tillbaka, och hör vad det gäller.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I HT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Egen situation",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående situation",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående bakgrund",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Indikation renal",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontraindikation renal",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Övrigt renal",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Medicinsk bedömning",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordination",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtalsstruktur",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "njure_ssk"
   },
   "HT23|9": {
    "key": "HT23|9",
    "session": "HT23",
    "stn": "9",
    "date": "2024-01-12",
    "year": 2024,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Infektion",
    "family": "Infektion: handläggning, rond och information",
    "topic": "Pneumoni",
    "title": "Handläggning av pneumoni",
    "comp": [
     "ANAM",
     "ORD",
     "KOMM"
    ],
    "source": "2. Bedömningsmallar OSCE I HT23.pdf",
    "door": {
     "text": "Du är primärjour på akutmottagningen, januari 2024.\nDu ska bedöma och handlägga en 72-årig patient som söker för högersidig andningskorrelerad bröstsmärta, frossa och feber 40°C. Patienten är vaken (RLS 1) men trött. Akuta blodprover:\nCRP 175 LPK 20 varav neutrofiler 16 Övriga kemlab-prover normala.\nDu ska:\n➢ Ta en anamnes ➢ Föreslå utredning inklusive mikrobiologisk provtagning ➢ Bedöm svårighetsgrad och behov av inläggning samt påbörja behandling\nDu ska INTE göra kroppsundersökning med status.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I HT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tar viktigaste punkterna i aktuell anamnes",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar viktigaste punkterna i bakgrundsanamnes enligt SOMA-ÄTAS",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar viktigaste punkterna i epidemiologisk anamnes",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Bedömer svårighetsgrad enligt CRB -65 poäng",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar korrekta mikrobiologiska analyser",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar lungröntgen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar syrgas (exakt mängd behöver ej anges)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar iv Bensyl-PC (exakt dos behöver ej anges, inga andra antibiotikaval är korrekt)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "infektion"
   },
   "HT23|10": {
    "key": "HT23|10",
    "session": "HT23",
    "stn": "10",
    "date": "2024-01-12",
    "year": 2024,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Kardiologi",
    "family": "Dyspné: hjärtsvikt eller lungsjukdom",
    "topic": "Dyspné",
    "title": "Dyspné – anamnes",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "2. Bedömningsmallar OSCE I HT23.pdf",
    "door": {
     "text": "En 46 årig kvinna söker på vårdcentralen för ca 6 månaders anamnes på tilltagande andfåddhet. EKG är taget.\nBlodtryck 124/82 Saturation 92 %.\nDU ska:\n➢ Ta en adekvat anamnes ➢ Tolka EKG ➢ Bestämma fortsatt handläggning ➢ Svara på patientens följdfrågor\nDu ska inte utföra status\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I HT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tar adekvat anamnes",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar om rökning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar adekvat funktionsanamnes",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Genomför anamnestagning och information på ett strukturerat och adekvat sätt.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tolkar EKG korrekt.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar om fortsatt utredning.",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår rimlig diagnos",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "dyspne"
   },
   "HT23|11": {
    "key": "HT23|11",
    "session": "HT23",
    "stn": "11",
    "date": "2024-01-12",
    "year": 2024,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Lunga",
    "family": "Pneumotorax, pleuravätska och arteriell blodgas",
    "topic": "Pneumotorax",
    "title": "Bedömning av pneumotorax",
    "comp": [
     "RESON",
     "PROC"
    ],
    "source": "2. Bedömningsmallar OSCE I HT23.pdf",
    "door": {
     "text": "Du är underläkare på akutmottagningen och träffar en 25-årig aldrig- rökande person som söker pga plötsligt insättande andnöd och hållsmärta i bröstet sedan några timmar. Inga infektionssymtom eller anamnes på trauma.\nAT: Opåverkad. Blodtryck: 120/75 mm Hg. Puls: 88/min Saturation: 96% på rumsluft.\nLungröntgen visar pneumothorax. Se röntgenbilder på datorn.\n➢ Komplettera med kort aktuell anamnes. ➢ Informera patienten om diagnos och behandling ➢ Beskriv fortsatt handläggning\nDu ska inte genomföra status.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I HT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Anamnes",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Diagnos",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Behandling och fortsatt handläggning",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "lungproc"
   },
   "HT23|12": {
    "key": "HT23|12",
    "session": "HT23",
    "stn": "12",
    "date": "2024-01-12",
    "year": 2024,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Geriatrik",
    "family": "Kognitiv skattning (MMSE) och demensutredning",
    "topic": "Demensutredning",
    "title": "Demensanamnes med fokus på diagnos",
    "comp": [
     "PROC",
     "KOMM"
    ],
    "source": "2. Bedömningsmallar OSCE I HT23.pdf",
    "door": {
     "text": "Du träffar en 70-årig patient på hälsocentralen som söker för minnesbesvär. Före besöket finns redan utfört rutin-blodprover (blodstatus, el-status, leverstatus) samtliga med normalfynd och dt-hjärna med misstanke om bilateral medial temporallobsatrofi. MMSE 24 av 30. Kör inte bil och har inga vapen. Tar inga läkemedel. Bor ensam.\nDin uppgift ➢ Ta anamnes fokuserat på om kriterierna för demenssjukdom är uppfyllda eller inte ➢ Förklara sedan för patienten din bedömning ➢ Om det behövs, ge förslag på medicin\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I HT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Anamnes avseende minnesproblem",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes avseende påverkan på ADL-funktion",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes avseende diff-diagnoser som är viktiga att avgränsa",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förklaring av bedömning för patienten",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Adekvat behandlingsförslag",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "kognition"
   },
   "HT23|13": {
    "key": "HT23|13",
    "session": "HT23",
    "stn": "13",
    "date": "2024-01-12",
    "year": 2024,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Endokrinologi",
    "family": "Tyreoidea och endokrin utredning",
    "topic": "Graves status",
    "title": "Graves – statusversion",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "2. Bedömningsmallar OSCE I HT23.pdf",
    "door": {
     "text": "En 28-årig tidigare frisk patient söker på vårdcentralen för tilltagande besvär med trötthet, hjärtklappning, svettningar, skakningar och humörsvängningar sedan 1–2 månader. Patienten har också gått ner i vikt 3 kg på 6 veckor utan att anstränga sig. Blodtryck 130/85 mmHg. Provtagning inför besöket visar bl.a.:\nTSH <0,005 mIU/L (0,27–4,2) fT4 45 pmol/L (12–22) TRAK 10 IU/L (<3,0)\nDin uppgift är:\n➢ Gör ett status för att eftersöka de viktigaste fynden. Berätta för bedömaren vad du gör och vilka fynd du letar efter. ➢ Diktera statusfynden som en statusdel av en verklig journalanteckning\nDu ska inte ta upp någon anamnes\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I HT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Bedömer förekomst av finvågig tremor med utsträckta armar.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Undersöker ögonen efter ev. exoftalmus periorbitalt ödem motilitet, rodnad",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Bedömer hjärtfrekvens och rytm (tachykardi och /eller förmaksflimmer",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Inspektion av tyreoidea",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palpation av tyreoidea bakifrån",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Bimanuell palpation av tyreoidea",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar på rätt lokal",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palpation under sväljning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bemötande och information/kommunikation under status på lekmannaspråk",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Dikterar statusfynd korrekt",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "tyreoidea"
   },
   "HT23|14": {
    "key": "HT23|14",
    "session": "HT23",
    "stn": "14",
    "date": "2024-01-12",
    "year": 2024,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "2. Bedömningsmallar OSCE I HT23.pdf",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet.\nVad gör du?\n(Patienten är bekräftat COVID-negativ)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "1. Dörrinformation OSCE I HT23.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kontroll av medvetande (ruska om, ropa)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning. Öppnar luftvägen och håller den öppen under hela andningskontrollen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning: Titta, lyssna, känn (ca 10 sek)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Larmar (på larmknapp i rummet, alt ropar på hjälp)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Utfört kompressioner med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört inblåsningar med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört kompressioner med total medelhastighet 100-120/min",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hlr"
   },
   "oHT23|1": {
    "key": "oHT23|1",
    "session": "oHT23",
    "stn": "1",
    "date": "2024-02-16",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Njurmedicin",
    "family": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)",
    "topic": "Hyperkalemi",
    "title": "Hyperkalemi – samtal med ssk",
    "comp": [
     "SBAR",
     "ORD"
    ],
    "source": "4. Bedömningsmallar OMOSCE I HT23.pdf",
    "door": {
     "text": "Du är primärjour medicin. Klockan är strax efter midnat och din bakjour har precis meddelat at hen lägger sig. Nu går sökaren, et nummer du inte känner igen.\nInne på rummet finns det en telefon. Ring tillbaka, och hör vad det gäller.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT23 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Egen situation",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående bakgrund",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående det akuta",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Medicinsk bedömning",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordination akut behandling",
       "max": 2.5,
       "opts": [
        2.5,
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Prioritering",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtalsstruktur",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "njure_ssk"
   },
   "oHT23|2": {
    "key": "oHT23|2",
    "session": "oHT23",
    "stn": "2",
    "date": "2024-02-16",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Neurologi/Angiologi",
    "family": "Stroke och TIA: NIHSS, SBAR och information",
    "topic": "Akut stroke",
    "title": "Akut handläggning stroke",
    "comp": [
     "STAT",
     "SBAR",
     "KOMM"
    ],
    "source": "4. Bedömningsmallar OMOSCE I HT23.pdf",
    "door": {
     "text": "Du är dagjour och kallas till sjukhusets strokeenhet där en 68-årig person lagts in på grund av en högersidig amaurosis fugax för 8 timmar sedan. Symtomen satt i ett par minuter och hen blev helt återställd men rapporteras nu sedan ca 10 minuter ”känna sig konstig”.\n Du ska: Utföra anvisade delar av nervstatuset NIHSS och rapportera fynden enligt SBAR till din bakjour och föreslå nästa åtgärd.\nDu ska inte ta upp någon ytterligare anamnes.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT23 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Testar ögonmotorik",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar synfält",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar motorik i armar och ben",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ataxi",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar utsläckning/ neglekt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rapportering enligt SBAR till bakjour",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": true
      }
     ]
    },
    "guide": "stroke"
   },
   "oHT23|3": {
    "key": "oHT23|3",
    "session": "oHT23",
    "stn": "3",
    "date": "2024-02-16",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Kardiologi",
    "family": "Bröstsmärta: AKS, perimyokardit och EKG",
    "topic": "Akut koronart syndrom",
    "title": "AKS – bröstsmärta på akutmottagningen",
    "comp": [
     "ANAM",
     "RESON",
     "KOMM"
    ],
    "source": "4. Bedömningsmallar OMOSCE I HT23.pdf",
    "door": {
     "text": "Du jobbar på en akutmottagning på länsdelssjukhus. En 60-årig uppsöker akutmottagning på grund av bröstsmärtor sedan några dagar. Blodtryck 182/97. Puls 75/min. Saturation 97 %. EKG är taget. Du skickas in till patienten efter att sjuksköterska tagit emot patienten och lagt honom i akutrummet.\n Ta en adekvat anamnes\n Tolka EKG\n Ordinera blodprover som bör analyseras\n Föreslå fortsatt handläggning\n Svara på patientens följdfrågor\nDu skall inte utföra status!\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT23 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tar adekvat anamnes.",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar adekvat funktionsanamnes",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Genomför anamnestagning och ger information om avvikelser på ett strukturerat sätt.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar vettig provtagning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tolkar EKG korrekt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar om fortsatt utredning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rekommenderar adekvat vidare utredning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår rimlig diagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "aks"
   },
   "oHT23|4": {
    "key": "oHT23|4",
    "session": "oHT23",
    "stn": "4",
    "date": "2024-02-16",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Gastroenterologi",
    "family": "Gastro: ont i magen, akut buk och IBD",
    "topic": "Dyspepsi",
    "title": "Magbesvär – besök på vårdcentral",
    "comp": [
     "ANAM",
     "STAT"
    ],
    "source": "4. Bedömningsmallar OMOSCE I HT23.pdf",
    "door": {
     "text": "Du arbetar på en vårdcentral. Kvinna 58 år söker för problem med magen.\n Du ska ta en anamnes och föreslå initial utredning för patienten.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT23 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Balans öppna och riktade frågor",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes kring det aktuella problemet och relevanta frågor kring bakgrunden",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår lämplig utredning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår lämplig behandling",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar på ett sätt som patienten kan förstå",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "gastro_buk"
   },
   "oHT23|5": {
    "key": "oHT23|5",
    "session": "oHT23",
    "stn": "5",
    "date": "2024-02-16",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Lunga",
    "family": "Astma: inhalationsteknik, ACT och PEF-dagbok",
    "topic": "Inhalationsteknik",
    "title": "Instruktion av inhalationsläkemedel vid astma",
    "comp": [
     "PROC",
     "KOMM"
    ],
    "source": "4. Bedömningsmallar OMOSCE I HT23.pdf",
    "door": {
     "text": "Du träffar en patient med astma som bara har behandlats med kortverkande beta-2-stimulerare (SABA) vid behov.\nSpirometri visar bibehållen lungfunktion, men patienten har astmasymtom 3-4 gånger per vecka och Astma Control Test (ACT) 12 p\nDetta motiverar att du sätter in underhållsbehandling med en fast kombination av inhalationssteroid och långverkande beta-2-stimulerare (ICS + LABA) samt extra doser med samma inhalator vid behov.\nDu ska:\n Välja lämplig inhalator för patientens astma\n Informera patienten om inhalatorn och verkan av dom läkemedel som ingår (ICS + LABA regelbundet + vid behov)\n(Patienten får därefter instruktion om inhalationsteknik av sköterska)\n Kontrollera om patienten har bra inhalationsteknik och vet hur medicineringen ska tas\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT23 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Information 1A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information 1B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information 2A",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information 2B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information 2C",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Instruktion",
       "max": 3,
       "opts": [
        3,
        3,
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 3,
       "opts": [
        3,
        1.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "astma"
   },
   "oHT23|6": {
    "key": "oHT23|6",
    "session": "oHT23",
    "stn": "6",
    "date": "2024-02-16",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Hematologi",
    "family": "Hematologi: lymfkörtelstatus, anemi och blödning",
    "topic": "Lymfkörtelstatus",
    "title": "Lymfkörtelstatus",
    "comp": [
     "STAT",
     "ANAM"
    ],
    "source": "4. Bedömningsmallar OMOSCE I HT23.pdf",
    "door": {
     "text": "Du träffar en patient som söker för feber och nattsvettningar.  Din uppgift är att undersöka (status) patientens lymfkörtelvävnad (ovan navelhöjd).\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT23 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Informerar patienten om vad som ska undersökas",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rätt palpationsteknik (axiller bedöms separat)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar occipitalt",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar retroauriculärt",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar i käkvinklar",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar submandibulärt",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar submentalt",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar längs sternocleidomastoideus",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar fossa supraclavicularis",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar fossa infraclavicularis",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar axiller",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rätt teknik vid axillpalpationen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Inspekterar munhåla (tonsillvävnad)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hema"
   },
   "oHT23|8": {
    "key": "oHT23|8",
    "session": "oHT23",
    "stn": "8",
    "date": "2024-02-16",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Lunga",
    "family": "KOL, spirometri och obstruktiv/restriktiv lungsjukdom",
    "topic": "Spirometri",
    "title": "Spirometri med restriktivt mönster",
    "comp": [
     "RESON",
     "KOMM"
    ],
    "source": "4. Bedömningsmallar OMOSCE I HT23.pdf",
    "door": {
     "text": "Du träffar en 66-årig tidigare frisk patient på Hälsocentralen. Hen har aldrig rökt och är normalviktig. Hen söker på grund av tilltagande ansträngningsutlöst dyspné sedan drygt ett halvår. Inför besöket har patienten gjort en dynamisk spirometri utan bronkdilatationstest.\nDu ska:\n Tolka spirometrin  Berätta din tolkning (med medicinska termer) för examinatorn  Informera sedan patienten och förklara resultatet  Föreslå eventuell vidare utredning till patienten\nDu ska inte ta anamnes eller göra status\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT23 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Spirometritolkning",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Information A",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Information B",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utredning A",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utredning B",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "kol"
   },
   "oHT23|9": {
    "key": "oHT23|9",
    "session": "oHT23",
    "stn": "9",
    "date": "2024-02-16",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Endokrinologi/Akut",
    "family": "Akut medvetslöshet, intoxikation och svimning",
    "topic": "Svimning/hypotension",
    "title": "Svimning/hypotension – anamnes, akut behandling och information",
    "comp": [
     "AKUT",
     "RESON"
    ],
    "source": "4. Bedömningsmallar OMOSCE I HT23.pdf",
    "door": {
     "text": "En 24-årig patient kommer till akuten efter en svimning i hemmet. Hos triage-sköterskan svimmar patienten igen, men vaknar igen när hen läggs på en brits.\nPuls: regelbunden, 100/minut SpO2: 99% Blodtryck: 80/50 mmHg Temp: 37,0°C\nKapillära prover: Venös blodgas:\nCRP: <5 mg/L (<5) pH 7,35 (7,32–7,43) Hb: 145 g/L (117–153) Na 117 mmol/L (137–145) B-glukos 5,6 mmol/L K 4,4 mmol/L (3,5–4,4)\nDin uppgift är:\n Komplettera anamnesen  Informera patienten om din arbetsdiagnos utifrån info. ovan och din anamnes  Ordinera akut provtagning och behandling till sjuksköterskan (=bedömaren)\nDu behöver inte göra något status\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT23 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Öppen fråga om aktuella symtom.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Relevant bakgrundsanamnes tillräckligt belyst Poängskala: 4-3-2-1-0, där max och min är:",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bedömer att det är en hypotension/dehydrering + hypo-Na och ordinerar i.v. vätska Poängskala: 3-2-1-0, där max och min är:",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bedömer att det kan vara Addisons sjukdom och ordinerar P-kortisol och Solu-Cortef",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Beskriver preliminär diagnos och initial behandling på ett för patienten tydligt sätt",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "endoakut"
   },
   "oHT23|10": {
    "key": "oHT23|10",
    "session": "oHT23",
    "stn": "10",
    "date": "2024-02-16",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Geriatrik",
    "family": "Kognitiv skattning (MMSE) och demensutredning",
    "topic": "MMSE",
    "title": "Minnestest MMSE-SR",
    "comp": [
     "PROC",
     "KOMM"
    ],
    "source": "4. Bedömningsmallar OMOSCE I HT23.pdf",
    "door": {
     "text": "En 61 år patient kommer till dig på hälsocentralen på grund av minnesproblem sedan ett halvår tillbaka. Besvären har kommit smygande och ökar långsamt. Har svenska som modersmål, arbetar som mattelärare och äter inga läkemedel.\nDin roll:\nDistriktsläkare på hälsocentral\nDu ska:\n Utföra minnestestet MMSE-SR enligt protokoll inne på rummet, endast de markerade frågorna.\n Ange i rätt ruta patientens poäng utifrån dennes svar, avseende fråga 1-5, 11-13 samt 19.\n Meddela patienten totalpoäng och din tolkning av resultatet, samt om fortsatt utredning är nödvändig eller ej\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT23 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "manual",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Introduktion av uppgiften",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Allmänt kring frågepresentation",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tidsorientering, fråga 1–5",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Omedelbar återgivning, fråga 11",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Uppmärksamhet och huvudräkning, fråga 12",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Fördröjd återgivning, fråga 13",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Skrivförmåga, fråga 19",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bedömning och information (helhetsbedömning och patientinformation)",
       "max": 3,
       "opts": [
        3,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "kognition"
   },
   "oHT23|11": {
    "key": "oHT23|11",
    "session": "oHT23",
    "stn": "11",
    "date": "2024-02-16",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Infektion",
    "family": "Infektion: handläggning, rond och information",
    "topic": "Resediarré",
    "title": "Handläggning av diarré efter utlandsresa",
    "comp": [
     "ANAM",
     "ORD",
     "KOMM"
    ],
    "source": "4. Bedömningsmallar OMOSCE I HT23.pdf",
    "door": {
     "text": "Du är läkare vid en hälsocentral.\nDu ska handlägga en 36-årig patient som lämnat faecesprov på grund av diarré efter utlandsresa. Provet visar salmonella som klassas som en allmänfarlig sjukdom enligt smittskyddslagen. Patienten kommer nu till mottagningen. Hen mår bättre, har ingen feber men har fortfarande lösa avföringar.\nDu ska:\n Ta en utförligare och strukturerad anamnes  Ge information om infektionen till patienten  Ge förhållningsregler och hygienråd\nDu ska INTE göra kroppsundersökning med status.\nDu ska INTE ordinera provtagning.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT23 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tar reda på detaljer kring aktuella symtom (vilka symtom, tidpunkt för debut, duration, sjukdomssymtom under resan?)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar viktigaste punkterna i bakgrundsanamnes - Tidigare sjukdomar (0,5p) - Mediciner (0,5p)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "- Socialt (0,5p) Maximalt 1p erhållas Tar viktigaste punkterna i epidemiologisk anamnes - Andra sjuka i familjen/omgivningen/ressällskapet (1p)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "- Reseanamnes, resmål, längd, exposition etc (1p) Tar en yrkesanamnes med frågan om arbete med oförpackade livsmedel eller arbete med riskgrupper (spädbarn/gamla)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger korrekt information om salmonella",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger adekvata förhållningsregler och hygienråd vg smitta till omgivningen och arbete",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar inte antibiotika",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "infektion"
   },
   "oHT23|12": {
    "key": "oHT23|12",
    "session": "oHT23",
    "stn": "12",
    "date": "2024-02-16",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Kardiologi",
    "family": "Hjärtstatus, blåsljud och EKO-fynd",
    "topic": "Blåsljud",
    "title": "Kardiellt blåsljud – hjärtstatus",
    "comp": [
     "STAT",
     "RESON"
    ],
    "source": "4. Bedömningsmallar OMOSCE I HT23.pdf",
    "door": {
     "text": "42-årig man som söker på vårdcentralen för en hälsokontroll. Han är frisk och mår bra. Blodtrycket är 160/65.\nDu ska:\n Göra ett hjärtstatus på patienten (Harvey docka) och beskriv eventuellt blåsljud. Ange var du hör respektive hjärtklaff bäst.\n Föreslå rimlig vidare utredning. Motivera varför.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT23 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Palperar bröstkorgen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lyssnar på samtliga positioner",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lyssnar på karotis",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar pulsen perifert vid auskultationen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Genomför status strukturerat",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anger vilken hjärtklaff som hörs var",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anger typ och var eventuellt blåsljud hörs",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår hjärtultraljud som fortsatt utredning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hjartstatus"
   },
   "oHT23|13": {
    "key": "oHT23|13",
    "session": "oHT23",
    "stn": "13",
    "date": "2024-02-16",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Allmänmedicin",
    "family": "Levnadsvanor och motiverande samtal",
    "topic": "Levnadsvanor och blodtryck",
    "title": "Levnadsvanor och hypertoni – samtal",
    "comp": [
     "KOMM",
     "ANAM"
    ],
    "source": "4. Bedömningsmallar OMOSCE I HT23.pdf",
    "door": {
     "text": "På denna station möter du en 45 årig patient som har uppmätt några förhöjda blodtryck kring 145/95 vid mätningar på företagshälsovården.\nDu ska nu träffa patienten för att prata om det höga blodtrycket.\nDin uppgift är att:\n Ta en relevant anamnes utifrån principerna för den patientcentrerade konsultationsmodellen.  Ta en relevant anamnes avseende levnadsvanor kopplade till hypertoni och hjärt-kärlrisk.  Ge anpassade råd om levnadsvanor utifrån patientens behov.\nDu ska INTE undersöka patienten.\nDu ska INTE ta ställning till eventuell läkemedelsbehandling eller vidare utredning.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT23 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Låter pat berätta ostört inledningsvis (öppen start och uppmuntrar pat att berätta vidare, öppen start men avbryter/fortsätter med riktad fråga, ej öppen start)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tankar, får fram egna föreställningar",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Oro, får fram farhågor",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Önskan, får fram förväntningar på besöket",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kvitton, använder kvitton",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Sammanfattningar, minst en sammanfattning",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ev. Symtom kopplade till hypertoni el hjärt-kärlsjukdom",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ärftlighet",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tid/nuv sjd",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Socialt",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Rökning",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Alkohol, nöjer sig inte med svävande svar utan frågar vidare.",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fysisk aktivitet",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kost",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger adekvata råd om levnadsvanor utifrån patientens situation. (I detta fall kring alkohol)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger råd om levnadsvanor med lyhördhet och respekt för patients person och i samråd med patienten.",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "levnadsvanor"
   },
   "oHT23|14": {
    "key": "oHT23|14",
    "session": "oHT23",
    "stn": "14",
    "date": "2024-02-16",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "4. Bedömningsmallar OMOSCE I HT23.pdf",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet.\nVad gör du?\n(Patienten är bekräftat COVID-negativ)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT23 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kontroll av medvetande (ruska om, ropa)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning. Öppnar luftvägen och håller den öppen under hela andningskontrollen",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning: Titta, lyssna, känn (ca 10 sek)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Larmar (på larmknapp i rummet, alt ropar på hjälp)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Utfört kompressioner med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört inblåsningar med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört kompressioner med total medelhastighet 100-120/min",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hlr"
   },
   "VT24|1": {
    "key": "VT24|1",
    "session": "VT24",
    "stn": "1",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Bröstsmärta: AKS, perimyokardit och EKG",
    "topic": "Hjärtbedömning",
    "title": "Hjärtbedömning med ultraljud och EKG",
    "comp": [
     "ANAM",
     "RESON",
     "KOMM"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Tobias är en 59 årig man som tidigare i dag erhållit en pacemaker på grund av intermittent AV-block II typ 2. Han har normal längd och är normalviktigt. Han fick stanna över natten på avdelningen på grund av att han fick ont i bröstet ca 1 timme efter pacemakerinläggningen. Klockan är 22.30. Du är medicinjour och blir kontaktad av nattsjuksköterskan på avdelningen. Tobias har klagat på att han har ont i bröstet och tycker att det känns lite svårt att andas. Sjuksköterskan vill att du bedömer patienten. Sjuksköterskan är orolig att han har en tamponad.\nDin uppgift är att komplettera med riktad anamnes, genomföra adekvata undersökningar, beställa ev. kompletterande undersökningar och reflektera över möjliga differentialdiagnoser.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tar adekvat anamnes",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar efter blodförtunnande",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar om blodtrycket",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Strukturerat samtal med patienten",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ber om EKG",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tolkar EKG rätt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utnyttjar ultraljusmaskningen adekvat",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bedömer förekomsten av tamponad",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar om ev. fynd och handläggning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "aks"
   },
   "VT24|2": {
    "key": "VT24|2",
    "session": "VT24",
    "stn": "2",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Allmänmedicin",
    "family": "Levnadsvanor och motiverande samtal",
    "topic": "Levnadsvanor och diabetes",
    "title": "Levnadsvanor och diabetes – samtal",
    "comp": [
     "KOMM",
     "ANAM"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "På denna station möter du en patient som vid hälsokontroll hos distriktssköterskan uppmätt lätt förhöjt blodsocker. Uppföljande prover visar att patienten uppfyller kriterierna för IFG (Impaired Fasting Glucose) = icke-diabetisk fastehyperglykemi som tecken till prediabetes. fp-glukos 6,2 mmol/L , HbA1c 43mmol/mol , Blodtryck 140/90 mmHg, BMI 29.\nDu ska nu träffa patienten för att prata om levnadsvanor och riskfaktorer för diabetes.\nDin uppgift är att:\n- Ta en relevant anamnes utifrån principerna för den patientcentrerade konsultationsmodellen.\n- Ta en relevant anamnes avseende levnadsvanor och riskfaktorer kopplade till diabetes.\n- Ge anpassade råd om levnadsvanor utifrån patientens behov.\nDu ska INTE undersöka patienten.\nDu ska INTE ta ställning till eventuell läkemedelsbehandling eller vidare utredning.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Patientens berättelse",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientens tankar",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientens oro",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientens förväntningar",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kvitton",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Sammanfattning",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tydlig konsultationsstruktur",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Symtom kopplade till diabetes eller hjärt-kärlsjukdom",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ärftlighet",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tid/nuv sjd",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Rökning",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor kring alkohol",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fysisk aktivitet",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor kring kost",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger adekvata råd om levnadsvanor utifrån patientens situation och anamnes",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger råd om levnadsvanor med lyhördhet och respekt för patients person och i samråd med patienten.",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "levnadsvanor"
   },
   "VT24|3": {
    "key": "VT24|3",
    "session": "VT24",
    "stn": "3",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Angiologi",
    "family": "Ensidig bensvullnad: DVT-misstanke",
    "topic": "DVT",
    "title": "VTE – ensidig bensvullnad",
    "comp": [
     "ANAM",
     "STAT",
     "RESON"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du arbetar som primärjour på en akutmottagning på ett länsdelssjukhus och träffar en 65 årig man som söker för ensidig smärta och svullnad i höger ben. Du fattar misstanke om DVT.\nDu skall:\n1. Ta en riktad anamnes och göra ett riktat status\n2. Göra en sannolikhetsbedömning\n3. Föreslå vidare provtagning och utredning.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Adekvat riktad anamnes (duration av symtom, malignitet, hereditet, tid sjukdom, tidigare VTE, immobilisering, kirurgi)",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Mäter omkretsen av underbenet 10 cm nedom tuberositas tibiae",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar kärlsträngen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Sannolikhetsbedömning (via Wells score eller kliniskt) hög.",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår ultraljud alternativt flebografi som utredning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår INR, APTT, Blodstatus, Krea som prover",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "dvt"
   },
   "VT24|4": {
    "key": "VT24|4",
    "session": "VT24",
    "stn": "4",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Arytmi, svimning och ortostatism",
    "topic": "Svimning",
    "title": "Svimning – akut handläggning",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du kallas till akutrummet på medicinakuten där en 60-årig patient inkommit med ambulans efter att ha svimmat under besök på stadens bibliotek. Ambulanspersonalen meddelar att allmäntillståndet är påverkat, och man önskar din hjälp.\nDu ska:\n• Ta anamnes, bedöm vitalparametrar\n• Föreslå fortsatt utredning och behandling\nVärden på relevanta parametrar får du av bedömaren\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Ta en rimlig anamnes som ska innehålla aktuell sjukdom (tidigare infarkt) och aktuella symptom (ej bröstsmärta)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfråga ett blodtryck",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfråga EKG",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Misstänker VT",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kalla på narkosläkare, planera för sövning och beakta risk för aspiration (senaste födointag?) Fråga; vad vill narkosen veta",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Handläggning: närvarande, titta figuranten i ögon, lugna situationen, samtidigt planera för omedelbar sövning med el-konvertering (alternativt iv Cordarone)",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "arytmi"
   },
   "VT24|5": {
    "key": "VT24|5",
    "session": "VT24",
    "stn": "5",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Gastroenterologi",
    "family": "Gastro: ont i magen, akut buk och IBD",
    "topic": "Akut buk",
    "title": "Ont i magen på akutmottagning",
    "comp": [
     "ANAM",
     "STAT"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du arbetar på en akutmottagning. Kvinna/Man 62 år söker för ont i magen. Du ska ta en anamnes, utföra riktat status och föreslå initial utredning för patienten.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Balans öppna och riktade frågor",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Följsamhet och Lyhördhet Anamnes kring det aktuella problemet och relevanta frågor kring bakgrunden",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lämpliga vårdhygienåtgärder innan och efter status",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utför bukstatus enligt struktur för akut buk",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tolkar fynd vid bukstatus",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår lämplig utredning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "gastro_buk"
   },
   "VT24|6": {
    "key": "VT24|6",
    "session": "VT24",
    "stn": "6",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Lunga",
    "family": "Pneumotorax, pleuravätska och arteriell blodgas",
    "topic": "Pleuravätska",
    "title": "Pleuravätska – handläggning",
    "comp": [
     "RESON",
     "PROC"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är underläkare på akutmottagningen och träffar en 65-årig person som söker pga tilltagande andnöd.\nAT: Lätt andningspåverkad. Blodtryck: 120/75 mm Hg. Puls: 95/min Saturation: 94 % på rumsluft.\nLungröntgen är gjord. Se röntgenbilder i datorn!\nKomplettera med kort adekvat anamnes.\nInformera patienten om röntgenfynd och möjliga orsaker!\nBeskriv fortsatt handläggning för patienten!\nDu ska inte genomföra status.\nDu har 6 minuter för att genomföra uppgiften.\nStation 6.\nDu är underläkare på akutmottagningen och träffar en 75-årig person som söker pga tilltagande andnöd.\nAT: Lätt andningspåverkad i vila, AF 18. Blodtryck: 130/85 mm Hg. Puls:\n102/min Saturation: 94 % på rumsluft.\nLungröntgen är gjord. Se röntgenbilder i datorn!\nKomplettera med kort adekvat anamnes.\nInformera patienten om röntgenfynd och möjliga orsaker! Etiologier!\nBeskriv fortsatt handläggning för patienten!\nDu ska inte genomföra status.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "manual",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Anamnes",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      },
      {
       "t": "Diagnos",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      },
      {
       "t": "Behandling och fortsatt handledning",
       "max": 3,
       "opts": [
        3,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 3,
       "opts": [
        3,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "lungproc"
   },
   "VT24|7": {
    "key": "VT24|7",
    "session": "VT24",
    "stn": "7",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Geriatrik",
    "family": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård",
    "topic": "Statusdiktat äldre",
    "title": "Dokumentera patientmöte – status och SBAR",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du kommer att få se och höra ett antal statusfynd. Anamnes finns redan, se nedan. Denna information finns även inne i rummet.\nDu ska:\n1. diktera status i en journalanteckning. Diktera status tydligt och utförligt utifrån fynd och observationer.\n2. diktera en preliminär bedömning och förslag till åtgärd i formatet SBAR\nElena 88 år söker hälsocentralen en dag i juli då det är 30 grader varmt.\nSökorsak: yrsel och lite ostadig på benen.\nTidigare sjukdomar: Hypertoni och diabetes\nSocialt: Ensamboende änka, utan barn. Har städ- och tvätthjälp från kommunen\nAktuellt: Igår matförgiftning och har kräkts upprepat i natt. På morgonen feberfri, helt bra i magen men lite yr och ostadig på benen i sommarvärmen.\nLäkemedel: Metformin 500 mg 2x2, Candesartan 8 mg x 1\nStatus: (ska du diktera)\nBedömning/åtgärd: (ska du diktera)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Allmäntillstånd – studenten dikterar ”Allmäntillstånd gott och påverkat.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Allmäntillstånd – vakenhetsgrad, orientering: ”Vaken, klar och redig. Orienterad till tid, plats, person och situation”,",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "”Orienterad x 4 (3)”, ”Ej medvetandesänkt, fullt orienterad”, ”Ej konfusorisk” Hud: Studenten dikterar ”Dålig hud-turgor”",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Hjärta: Studenten dikterar ”Regelbunden rytm, normofrekvent.”",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Hjärta forts: ”Systoliskt blåsljud (crescendo-decrescendo) PM I2 dx, med utstrålning i carotiderna. Grad III-IV (beror på volymen på datorn)”",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lungor: Normal perkussionston, sidlika lunggränser. Vesikulära andningsljud utan rassel eller ronchi. Normal andningsfrekvens. Poäng ges även om perkussionsfynd och/eller andningsfrekvens inte kommenteras.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Blodtryck: Sittande, höger arm: 100/64 mmHg (”100 över 64”). Poäng ges även om blodtrycket avrundas något annorlunda, men ej om kroppsläge och arm inte kommenteras.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bedömning/åtgärd dikterat enligt (S)BAR-format: Situation, Bakgrund, Aktuellt tillstånd, Rekommendation.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rekommenderar ökat vätskeintag (helst vätskeersättning) och ny kontakt om fortsatta besvär. Förslag sjukhusinläggning ger 0 poäng.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rekommenderar tillfällig utsättning av Metformin och Candesartan pga uttorkning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "geriatrik"
   },
   "VT24|9": {
    "key": "VT24|9",
    "session": "VT24",
    "stn": "9",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Njurmedicin",
    "family": "Njure: anamnes vid hematuri, proteinuri och nefrotiskt syndrom",
    "topic": "Njursvikt",
    "title": "Förhöjt kreatinin – njuranamnes",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du träffar en 54-årig patient som har kallats till din mottagning för att proverna som togs för tre dagar sedan visar allvarligt avvikande S- kreatinin.\nProverna som togs visar:\nS-kreatinin 657 µmol/L (ref. 60 - 105 för män, 45–90 för kvinnor) Hb 110 g/L (ref. 134 - 170 för män, 117–153 för kvinnor) LPK 13,2 G/L (ref. 3,5 - 8,8) CRP 32 mg/L (ref. <5) TSH och T4 normala.\nProverna togs för att patienten kände sig tilltagande trött.\nPatienten har flyttat till Västerbotten för 2-3 år sedan och hens journal är helt tomt förutom vaccinationsanteckningar mot CoVid 19 som patienten fick under förra året och en anteckning om halsfluss för tre år sedan.\nPå läkemedelslistan finns det recept på ramipril, 5 mg dagligen på morgonen.\nTa en anamnes för att kartlägga varför patienten har njursvikt och förklarar för patienten vad du kommer fram till.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Anamnes som fångar upp hereditet, tidigare sjukdomar och behandlingar",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes med fokus på aktuellt sjukdomstillstånd",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes med fokus på förklarande patologier",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes med fokus på labresultat",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Fånga upp och bemöta patientens oro för sitt tillstånd",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ge sammanfattad bedömning till patient",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "njure_anam"
   },
   "VT24|10": {
    "key": "VT24|10",
    "session": "VT24",
    "stn": "10",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Lunga",
    "family": "Allergisk rinokonjunktivit och angioödem",
    "topic": "Allergisk rinokonjunktivit",
    "title": "Allergisk rinokonjunktivit",
    "comp": [
     "RESON",
     "KOMM"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du träffar på hälsocentral i Umeå en 25-årig patient slutet av maj. Hen söker på grund av nästäppa och nysningar. Hen undrar om det kan vara allergi. Du misstänker hösnuva.\nDin uppgift är att:\n1. Ta en adekvat anamnes.\n2. Förklara diagnosen, dess orsaker och symtom/manifestationer, på enkel svenska för patienten.\n3. Förklara och motivera om ytterligare utredning behövs eller inte.\n4. Informera om lämplig behandling.\n(Du skall inte utföra status.)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Riskfaktorer A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Riskfaktorer B",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Exponering C",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Symtom D",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Symtom E",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Symtom F",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Diagnos A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Diagnostik B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Diagnostik C",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "allergi"
   },
   "VT24|11": {
    "key": "VT24|11",
    "session": "VT24",
    "stn": "11",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "BFM",
    "family": "Bilddiagnostik: akut radiologi",
    "topic": "Akut radiologi",
    "title": "Röntgendiagnostik",
    "comp": [
     "BILD"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du har sommarvikariat på röntgen. Medicinjouren kommer till röntgenavdelningen och vill att du ska visa en akut DT-pulmangio på en patient. Bilderna visas i UniView i tre snittplan med relevant fönsterersättning (du behöver inte logga in) I rummet finns en röntgenremiss med frågeställningar och kliniska upplysningar:\nDina uppgifter är att:\n• Själv granska en DT-pulmangio, identifiera och tolka ev. fynd\n• Besvara frågeställningarna: Lungemboli? Infiltrat? Pleuralvätska?\n• Demonstrera och ange anatomiskt läge på ev fynd, samt resonera diffrentialdiagnostiskt med kollegan.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Färdighet",
       "max": 1,
       "opts": [
        1,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Färdighet",
       "max": 2,
       "opts": [
        2,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fynd 1 (identifikation, lokalisation)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utesluta fynd",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Fynd 2 (identifikation, lokalisation)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Fynd 2 (differentialdiagnostiskt resonemang)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "bfm"
   },
   "VT24|12": {
    "key": "VT24|12",
    "session": "VT24",
    "stn": "12",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Hematologi",
    "family": "Hematologi: lymfkörtelstatus, anemi och blödning",
    "topic": "Järnbristanemi",
    "title": "Järnbristanemi – anamnes",
    "comp": [
     "STAT",
     "ANAM"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Patient med anemi. På din öppenvårdsmottagning söker en 34-årig tidigare frisk kvinna för trötthet. Blodstatus visar Hb 78, MCV 76, MCHC 296, RDW 16, LPK 6.0 och TPK 250.\nUppgiften är värdera patientens symptom och fastställa sannolik orsak till anemin samt föreslå ett bekräftande laboratorieprov. Därefter ge lämplig ordination med adekvat instruktion till patienten inklusive uppföljning.\nNormalvärden:\nHb 134–170 g/L, MCV 82-98 fL, MCHC 317-357 g/L, RDW 12.3-14.3 % LPK 3.5–8.8 10E9/L, TPK 145–348 10E9/L\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Adekvata frågor avseende anemisymtom",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Blödningssymtom, duration och menstruationsanamnes obligat",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Laboratorieprov: ferritin",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Diagnos: menstruationsrelaterad järnbristanemi",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      },
      {
       "t": "Rätt ordination och information om järnmedicinering",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Uppföljning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hema"
   },
   "VT24|13": {
    "key": "VT24|13",
    "session": "VT24",
    "stn": "13",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Endokrinologi",
    "family": "Tyreoidea och endokrin utredning",
    "topic": "Hypotyreos",
    "title": "Trötthet – anamnes och information",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "På din vårdcentral kommer en 57-årig patient på återbesök. Hen har behandling för högt blodtryck sedan 3 år med Candesartan 8 mg x 1 (ARB).\nHen sökte vårdcentralen förra veckan pga. tilltagande trötthet och frusenhet sedan flera månader. Kapillärt Hb, CRP och glukos var då utan anmärkning, men TSH 16mlU/L. Inför återbesök till dig togs kompletterande prover som visar:\nTSH: 28 mIU/L (ref. 0,27 - 4,2 mIU/L) fT4: 6 pmol/L (ref. 12 - 22 pmol/L)\nDin uppgift:\nKomplettera anamnesen Informera tydligt om proverna, diagnosen och starta behandling.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Börjar med att hälsa och ställa en öppen fråga om hur patienten mår.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfrågar ytterligare symtom på hypotyreos (depression, obstipation, håravfall, torr hud)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfrågar ärftlighet för hypotyreos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar om provsvaren och diagnosen primär hypothyreos.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar att orsaken är autoimmun destruktion av sköldkörteln",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lugnar patienten angående hennes oro för cancer.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar om start av ersättningsbehandling med levotyroxin",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar att behandlingen kommer att följas upp med provtagning om 6-8 veckor och därefter eventuell dosjustering av levotyroxin.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar att sköldkörteln inte kommer att återhämta sig och att behandlingen är livslång.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förklaringar för patienten på enkelt, förståeligt språk, utan facktermer.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "tyreoidea"
   },
   "VT24|14": {
    "key": "VT24|14",
    "session": "VT24",
    "stn": "14",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Infektion",
    "family": "Basal hygienrutin och personlig skyddsutrustning",
    "topic": "Basala hygienrutiner",
    "title": "Basal hygienrutin och personlig skyddsutrustning",
    "comp": [
     "PROC"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är avdelningsläkare på medicinavdelning, januari 2024. Du ska gå in till en patient i 60-års ålder och undersöka lungorna. Patienten har ett dygns anamnes med torrhosta, tungandning, halsont, bröstsmärta och 39 graders feber. Arbetsdiagnosen är virusorsakad respiratorisk infektion. Patienten är medtagen och behöver din hjälp för att orka sätta sig upp i sängen.\nDu ska:\n• På sittande patient lyssna på patientens lungor på ett sätt som skyddar dig själv och andra mot smitta\n• Följ basala hygienrutiner och rutiner för användande av personlig skyddsutrustning\nAnvänd ditt eget stetoskop. Har du inte ett eget stetoskop använd det som finns på stationen ”som om det vore ditt personliga”.\nDu ska INTE undersöka annat i status eller ta anamnes.\nDu ska INTE göra någon värdering av auskultationsfynd.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Korrekt arbetsdräkt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekta åtgärder enligt basal hygienrutin inför undersökning i form av handdesinfektion med handsprit",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt vald personlig skyddsutrustning (PPE) för att skydda arbetsdräkten i en situation där det är sannolikt att arbetsdräkten kommer i kontakt med biologiskt material från patienten",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt valt tillägg i personlig skyddsutrustning (PPE) vid misstänkt smittsam virusorsakad respiratorisk infektion",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Vald personlig skyddsutrustning (PPE) är korrekt buren/fastsatt",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt hantering av stetoskop",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt avtagande av personlig skyddsutrustning (PPE)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekta åtgärder enligt basal hygienrutin efter undersökning i form av handdesinfektion med handsprit",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hygien"
   },
   "VT24|15": {
    "key": "VT24|15",
    "session": "VT24",
    "stn": "15",
    "date": "2024-05-24",
    "year": 2024,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "OSCE I VT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet.\nVad gör du?\n(Patienten är bekräftat COVID-negativ)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kontroll av medvetande (ruska om, ropa)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning. Öppnar luftvägen och håller den öppen genom hela kontrollen",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning: Titta, lyssna, känn (ca 10 sek)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Larmar (på larmknapp i rummet, alt ropar på hjälp)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Utfört kompressioner med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört kompressioner med total medelhastighet 100-120/min",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört inblåsningar med minst 80% godkända",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hlr"
   },
   "oVT24|1": {
    "key": "oVT24|1",
    "session": "oVT24",
    "stn": "1",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Infektion",
    "family": "Infektion: handläggning, rond och information",
    "topic": "Pneumoni",
    "title": "Pneumoni – CRB-65, provtagning och antibiotika",
    "comp": [
     "ANAM",
     "ORD",
     "KOMM"
    ],
    "source": "",
    "door": {
     "text": "En 66-årig patient kommer till akutmottagningen med 40°C feber och hosta. Lungröntgen visar lunginflammation\nDu ska:\n• Ta en adekvat anamnes\n• Bedöma svårighetsgrad enligt CRB-65\n• Ordinera adekvat mikrobiologisk provtagning och antibiotikabehandling\n• Förklara din bedömning för patient\nDu ska INTE göra kroppsundersökning med status.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "infektion"
   },
   "oVT24|2": {
    "key": "oVT24|2",
    "session": "oVT24",
    "stn": "2",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Allmänmedicin",
    "family": "Levnadsvanor och motiverande samtal",
    "topic": "Tobak",
    "title": "Tobaksanamnes och motiverande samtal",
    "comp": [
     "KOMM",
     "ANAM"
    ],
    "source": "",
    "door": {
     "text": "Du arbetar på hälsocentralen och träffar en patient som är rökare. Patienten har nyligen fått diagnosen KOL.\nDin uppgift är att:\n• Ta en fullständig tobaksanamnes.\n• Hålla ett kort motiverande/rådgivande samtal om rökning med patienten.\nDu ska inte:\n- ta KOL-anamnes eller ge information om KOL.\n- informera om läkemedelsbehandling mot KOL.\n- undersöka patienten.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "levnadsvanor"
   },
   "oVT24|3": {
    "key": "oVT24|3",
    "session": "oVT24",
    "stn": "3",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Njurmedicin",
    "family": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)",
    "topic": "Elektrolyt/diures",
    "title": "Samtal med ssk om patient jourtid",
    "comp": [
     "SBAR",
     "ORD"
    ],
    "source": "",
    "door": {
     "text": "Du är primärjour medicin. Klockan är strax över midnatt och din bakjour har precis meddelat att hen lägger sig. Nu går sökaren, ett nummer du inte känner igen. Inne på rummet finns det en telefon. Ring tillbaka, och hör vad det gäller.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "njure_ssk"
   },
   "oVT24|4": {
    "key": "oVT24|4",
    "session": "oVT24",
    "stn": "4",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Arytmi, svimning och ortostatism",
    "topic": "Förmaksflimmer",
    "title": "Förmaksflimmer – återbesök, alkohol och blodtryck",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "",
    "door": {
     "text": "Du träffar en 56 årig man/kvinna på ett planerat återbesök efter DC konvertering av ett förmaksflimmer på en medicinmottagning. I labstatus noteras bland annat lätt förhöjda levertransaminaser samt ett PEth på 1.1 (= kraftigt förhöjt). Ett BT taget av sjuksköterska innan besöket är 160/90. EKG visar sinusrytm fr 82.\nDin uppgift blir att informera patienten om dessa fynd och ställa relevanta följdfrågor samt tillsammans med patienten upprätta en behandlingsplan. Status ingår ej.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "arytmi"
   },
   "oVT24|5": {
    "key": "oVT24|5",
    "session": "oVT24",
    "stn": "5",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Endokrinologi",
    "family": "Tyreoidea och endokrin utredning",
    "topic": "Hypertyreos",
    "title": "Graves – provsvar och information",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "",
    "door": {
     "text": "En 28-årig kvinna sökte vårdcentralen för två dagar sedan på grund av hjärtklappning och svettningar sedan en månad. Kort status (temp, hjärta, lungor, blodtryck) var utan anmärkning. EKG visade sinustachykardi. Kapillärt Hb, CRP och glukos var normala. Hon kommer nu tillbaka till dig på vårdcentralen efter provtagning som visar:\nP-TSH: <0,005 mIU/L (ref. 0,27 – 4,2) P-fritt T4: 69 pmol/L (ref. 12 – 22)\nDin uppgift är:\n1) Informera snabbt patienten om din arbetsdiagnos utifrån provsvaren\n2) Komplettera anamnesen kort\n3) Undersök patientens sköldkörtel\n4) Ring till endokrinkonsult på sjukhuset och rapportera enligt SBAR Du behöver inte:\nInformera patienten om dina statusfynd, fortsatt utredning och behandling\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "tyreoidea"
   },
   "oVT24|6": {
    "key": "oVT24|6",
    "session": "oVT24",
    "stn": "6",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Arytmi, svimning och ortostatism",
    "topic": "Svimning vid hjärtsvikt",
    "title": "Yrsel och svimning vid hjärtsvikt – bedömning och åtgärd",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "",
    "door": {
     "text": "En 65-årig man med känd hypertoni och hjärtsvikt (Ekokardiografi för 8 månader sedan med LVEF 40 %) träffar dig på hälsocentralen pga yrsel och svimning. Besöket bokades för en vecka sedan och patienten har lämnat EKG och blodprover inför dagens besök. Provsvar och mätvärden finns inne på rummet. Ta en adekvat anamnes Bedöm resultat av blodprover och blodtrycksmätning samt patientens medicinering Föreslå åtgärd Svara på patientens följdfrågor\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "arytmi"
   },
   "oVT24|7": {
    "key": "oVT24|7",
    "session": "oVT24",
    "stn": "7",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Geriatrik",
    "family": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård",
    "topic": "Läkemedelsöversyn",
    "title": "Läkemedelsöversyn hos äldre patient",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "",
    "door": {
     "text": "Din nästa patient på hälsocentralen är 84 år och kommer för högt blodtryck och läkemedelsöversyn. Patienten har även haft en tidigare hjärtinfarkt. Enligt distriktssköterskan besväras patienten av nokturi och yrsel vid uppresning. Patienten är mycket skeptisk till sina läkemedel, tycker de är rävgift, vill inte ta så många och blandar lätt ihop dem. Blodtryck 175/88 mmHg, puls 53, BMI 23 kg/m2 Provsvar (referens):\neGFR 52 ml/min/1,72m2 (>60) P-Natrium 131 mmol/L (137-145) mmol/L P-Kalium 4,1 mmol/L (3,5-4,6) pro-BNP 133 ng/L En läkemedelslista finns inne på rummet.\nDu ska:\n• Ta en riktad anamnes\n• Ta ställning till läkemedelsbehandlingen och patientens önskemål om färre läkemedel\n• Underlätta god följsamhet till läkemedelsbehandlingen Status ingår INTE i uppgiften.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "geriatrik"
   },
   "oVT24|8": {
    "key": "oVT24|8",
    "session": "oVT24",
    "stn": "8",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "BFM",
    "family": "Bilddiagnostik: akut radiologi",
    "topic": "Strokelarm",
    "title": "Strokelarm – bildtolkning",
    "comp": [
     "BILD"
    ],
    "source": "",
    "door": {
     "text": "Du är läkarassistent på en röntgenavdelning och ”går bredvid” röntgenjouren (en äldrekursare som gör ST på röntgen). Du vill gärna visa att du själv kan ställa diagnos på röntgenbilderna! Nu har ni fått en patient på strokelarm. Du skyndar dig att läsa remissen noggrant och titta på bilderna. Sedan berättar du för din seniora kollega vad du har hittat. Din kollega kommer eventuellt att ställa några ytterligare frågor. Dina uppgifter är att\n• Läsa och värdera kvaliteten på röntgenremissen.\n• Själv granska en akut DT hjärna, identifiera och tolka ev. fynd\n• Besvara frågeställningarna: Blödning? Ischemi?\n• Visa och förklara ev. fynd och resonera om uppkomstmekanism med kollegan. Bilderna visas i UniView (du behöver INTE logga in!) I rummet finns röntgenremissen med frågeställningar och klinisk information.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "bfm"
   },
   "oVT24|9": {
    "key": "oVT24|9",
    "session": "oVT24",
    "stn": "9",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Lunga",
    "family": "KOL, spirometri och obstruktiv/restriktiv lungsjukdom",
    "topic": "KOL-exacerbation",
    "title": "KOL-försämring – anamnes och handläggning",
    "comp": [
     "RESON",
     "KOMM"
    ],
    "source": "",
    "door": {
     "text": "En 70-årig tidigare frisk ex-rökare (23 paket-år) har senaste åren haft besvär med slemhosta och ansträngningsutlöst dyspné, hen har svårt att hänga med jämnåriga vid promenad. Hen har dock tidigare ej sökt vård. Patienten träffade förkylda barnbarn för några veckor sedan. Söker nu på hälsocentralen då hen sedan en vecka hostar gulgrönt slem och har blivit mer andfådd. Förnekar bröstsmärtor. Status: Opåverkad i vila, inga ödem. Temp 37.3, Saturation 93%. Hjärta och BT: Normala fynd. Lungor: spridda sekretbiljud, förlängt exspirium vid forcerad exspiration, men inga tydliga rhonki. Lab: SR 16 (ref:0-13 mm), CRP 28 (ref:0-5 mg/L), LPK 11.0 (ref:3.5-8.8 109/L). EKG, NT-proBNP och troponin normala.\nDu ska:\nInformera och förklara för patienten; o Preliminär bedömning/diagnos, inklusive motivering o Indicerad behandling samt information/råd i akutskedet o Vilken uppföljning / utredning som bör erbjudas - och när detta ska göras DU BEHÖVER INTE TA NÅGON YTTERLIGARE ANAMNES ELLER UNDERSÖKA PATIENTEN\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "kol"
   },
   "oVT24|10": {
    "key": "oVT24|10",
    "session": "oVT24",
    "stn": "10",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Hematologi",
    "family": "Hematologi: lymfkörtelstatus, anemi och blödning",
    "topic": "Lymfkörtelstatus",
    "title": "Lymfkörtelstatus – feber och nattsvettningar",
    "comp": [
     "STAT",
     "ANAM"
    ],
    "source": "",
    "door": {
     "text": "Du träffar en patient som söker för feber och nattsvettningar.\nDin uppgift är att undersöka (status) patientens lymförtelvävnad (ovan naveln).\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "hema"
   },
   "oVT24|11": {
    "key": "oVT24|11",
    "session": "oVT24",
    "stn": "11",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Geriatrik",
    "family": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård",
    "topic": "Läkemedelsbiverkan",
    "title": "Misstänkt biverkan av blodtrycksmedicin",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "",
    "door": {
     "text": "Din nästa patient på hälsocentralen är 75 år gammal. Personen kommer till dig på misstanke om läkemedelsbiverkan av en blodtrycksmedicin insatt för en månad sedan. Undersökningsfynd före besöket:\n• Blodtryck: 120/70 mmHg\n• EKG: sinusrytm, puls 70/minut\n• Normala Na, K, Kreatinin, HbA1C, Kolesterol-status\n• Urinsticka normal\nDu ska:\n• Ta en adekvat anamnes, både bakgrund och aktuellt problem\n• Bedöma och informera patienten om det kan vara en läkemedelsbiverkan\n• Bedöma om medicinändring är nödvändig, ändra i så fall i samråd med patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "geriatrik"
   },
   "oVT24|12": {
    "key": "oVT24|12",
    "session": "oVT24",
    "stn": "12",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Diabetes/Angiologi",
    "family": "Fotstatus och perifer cirkulation",
    "topic": "Diabetesfot",
    "title": "Fotundersökning vid diabetes",
    "comp": [
     "STAT",
     "KOMM"
    ],
    "source": "",
    "door": {
     "text": "På denna station möter du Ingrid 66 år som nyligen diagnosticerats med diabetes. Hon medicinerar med Metformin samt Candesartan. HbA1c 50.\nUppgiften är att genomföra fotundersökning vid diabetes samt informera patienten om din bedömning av fotstatus och besvara hennes frågor. Övrig klinisk undersökning och behandlingsförslag ingår ej i uppgiften.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "diabetesfot"
   },
   "oVT24|13": {
    "key": "oVT24|13",
    "session": "oVT24",
    "stn": "13",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Hjärtstatus, blåsljud och EKO-fynd",
    "topic": "Hjärtstatus",
    "title": "Avvikande EKG – hjärtstatus och tolkning",
    "comp": [
     "STAT",
     "RESON"
    ],
    "source": "",
    "door": {
     "text": "Du är underläkare på en vårdcentral. En 30-årig industriarbetare har skickats till vårdcentralen från företagshälsovården på grund av ett avvikande EKG. Det har inte förekommit några besvär från hjärtat. Blodtryck 125/75.\nDin uppgift är att ta hjärtanamnes, göra ett hjärtstatus och tolka EKG. Vid hjärtstatus ska du ange vilken hjärtklaff du hör var.\nDu ska också föreslå eventuell fortsatt utredning och svara på frågor från patienten.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "hjartstatus"
   },
   "oVT24|14": {
    "key": "oVT24|14",
    "session": "oVT24",
    "stn": "14",
    "date": "aug 2024",
    "year": 2024,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet. Vad gör du? (Patienten är bekräftat COVID-negativ)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT24 CIRKEL 1 och 2 - DÖRRINFORMATION.pdf"
    },
    "rubric": null,
    "guide": "hlr"
   },
   "HT24|1": {
    "key": "HT24|1",
    "session": "HT24",
    "stn": "1",
    "date": "2025-01-14",
    "year": 2025,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Kardiologi",
    "family": "Arytmi, svimning och ortostatism",
    "topic": "Ortostatism",
    "title": "Ortostatiskt blodtryck",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "På detta rum finns en patient som vid vissa tillfällen besväras av yrsel.\nDin uppgift är att ta ett ortostatiskt blodtryck på patienten.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Rätt storlek på manchett",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt manschettplacering",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar radialispuls under uppumpning vid första mätning",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Långsam tryckminsking i manschett 2 mmHg/sek",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Mäter tryck liggande",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Mäter tryck omedelbart efter uppresning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Mäter tryck efter 1 minut",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Mäter tryck efter 3 minuter",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "arytmi"
   },
   "HT24|2": {
    "key": "HT24|2",
    "session": "HT24",
    "stn": "2",
    "date": "2025-01-14",
    "year": 2025,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Gastroenterologi",
    "family": "Gastro: ont i magen, akut buk och IBD",
    "topic": "Akut buk",
    "title": "Ont i magen på akutmottagning",
    "comp": [
     "ANAM",
     "STAT"
    ],
    "source": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du arbetar på en akutmottagning. Kvinna/Man 32 år med Crohns sjukdom söker för ont i magen. Du ska ta en anamnes, utföra riktat status och föreslå initial utredning för patienten.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Balans öppna och riktade frågor",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes kring det aktuella problemet och relevanta frågor kring bakgrunden",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lämpliga vårdhygienåtgärder innan och efter status",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utför bukstatus enligt struktur för akut buk",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tolkar fynd vid bukstatus",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår lämplig utredning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "gastro_buk"
   },
   "HT24|3": {
    "key": "HT24|3",
    "session": "HT24",
    "stn": "3",
    "date": "2025-01-14",
    "year": 2025,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Neurologi/Angiologi",
    "family": "Stroke och TIA: NIHSS, SBAR och information",
    "topic": "TIA",
    "title": "Övergående svaghet – akutmottagning",
    "comp": [
     "STAT",
     "SBAR",
     "KOMM"
    ],
    "source": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är läkare på akutmottagningen och ska träffa en person som har sökt på grund av symtom från ena sidans arm och ben.\nDin uppgift är att:\n1) Fördjupa anamnesen kring patientens besvär\n2) Föreslå lämpligt riktat status. Resultat av utfört riktat status erhålls på rummet\n3) Informera patienten om din bedömning och fortsatta planering.\nDu ska INTE utföra något status\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Frågor rörande symtomdebut. När, var och vad gjorde patienten",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor kring symtom och dess karaktär",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga kring aktuella symtom",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tidigare/nuvarande sjukdomar, funktionsnivå och läkemedel?",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ber om och tolkar NIHSS korrekt",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt diagnos och fortsatt vårdnivå",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Motiverar inläggning för patienten",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förklarar planerad utredning för patienten, vad som ska göras och varför",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Språk, struktur på samtal och bemötande",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "stroke"
   },
   "HT24|4": {
    "key": "HT24|4",
    "session": "HT24",
    "stn": "4",
    "date": "2025-01-14",
    "year": 2025,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Geriatrik",
    "family": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård",
    "topic": "Personcentrerad vård",
    "title": "Personcentrerad vård",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "En klar och redig 89-åring kommer till akutmottagningen på grund av övergående totalt synfältsbortfall på höger öga under 5 minuter tidigare under dagen. Något liknande har aldrig hänt patienten tidigare. Vid undersökningen har symptomen helt gått tillbaka.\nUndersökningsfynd:\n• Datortomografi hjärna visar för åldern normalt fynd\n• EKG visar sinusrytm\n• Rutinprover är normala inklusive sänka\n• fP-Kolesterol 7,5 mmol/L (ref. 3,9-7,8) och fP-LDL 4,7 mmol/L (ref. 2,0-5,3)\n• Ultraljud halskärl visar inga förträngningar\n• Blodtryck 115/70 mmHg, sittande höger och vänster arm efter 5 minuters vila\n• NIHSS = 0 poäng\nDu ska:\n• Fördjupa anamnesen inför beslut om vidare handläggning\n• Informera patienten om diagnos\n• Planera fortsatt handläggning i samråd med patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tar relevant anamnessom beslutsunderlag till läkemedelsbehandling för äldre människa",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtalsteknik",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förklarar diagnos",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår rimlig behandling",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Handläggning",
       "max": 2,
       "opts": [
        2,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "geriatrik"
   },
   "HT24|5": {
    "key": "HT24|5",
    "session": "HT24",
    "stn": "5",
    "date": "2025-01-14",
    "year": 2025,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Lunga",
    "family": "KOL, spirometri och obstruktiv/restriktiv lungsjukdom",
    "topic": "Spirometri",
    "title": "Tolka spirometri och informera patient",
    "comp": [
     "RESON",
     "KOMM"
    ],
    "source": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du ska träffa en 62-årig patient, mångårig rökare (mer än 50 paketår), som för två månader sedan vårdades på sjukhus pga pneumoni och akut respiratorisk acidos. Det är nu dags för återbesök. Patienten besväras av andnöd vid alldagliga hushållssysslor och promenader, samt daglig slemhosta. Aktuell lungröntgen visar total regress av tidigare lunginfiltrat vänster underlob. Inne på rummet kommer du att få se patientens spirometri.\nDin uppgift är att\n1. Tolka spirometrin och redovisa resultatet för bedömaren, med medicinsk terminologi\n2. Redovisa sedan resultatet för patienten på god lekmannasvenska.\n3. Besvara patientens fråga/frågor.\nDu ska inte\n• Ta anamnes eller utföra status\n• Föreslå någon ytterligare åtgärd, dvs du ska inte prata om behandling, uppföljning eller liknande.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Informera bedömare",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informera patient",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Besvara fråga från patient",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Övergripande",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "kol"
   },
   "HT24|6": {
    "key": "HT24|6",
    "session": "HT24",
    "stn": "6",
    "date": "2025-01-14",
    "year": 2025,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Angiologi",
    "family": "Ensidig bensvullnad: DVT-misstanke",
    "topic": "DVT",
    "title": "DVT-misstanke med förhöjt D-dimer",
    "comp": [
     "ANAM",
     "STAT",
     "RESON"
    ],
    "source": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är kvällsjour på ett litet sjukhus i glesbygden där radiologiska undersökningar inklusive ultraljud finns att tillgå endast dagtid. Sköterskan har triagerat en yngre man med stabila vitalparametrar med meddelandet ”misstänkt DVT”. Akuta blodprover är tagna, se tabell. Värde Normalvärden Hb 140 g/L 130-170 g/L LPK 8 x 109/L 4-9 x 109/L TPK 220 x 109/L 150-350 x 109/L SR 2 mm 2-20 mm CRP 5 mg/L <3 mg/L D-dimer 2,2 g/L < 0,5 g/L\nDu ska ta en adekvat anamnes och göra ett riktat status samt informera patienten om fortsatt handläggning.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Anamnes",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Status",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Diagnos",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Handläggning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "dvt"
   },
   "HT24|8": {
    "key": "HT24|8",
    "session": "HT24",
    "stn": "8",
    "date": "2025-01-14",
    "year": 2025,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Njurmedicin",
    "family": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)",
    "topic": "Hyperkalemi",
    "title": "Samtal med ssk om kalium jourtid",
    "comp": [
     "SBAR",
     "ORD"
    ],
    "source": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är primärjour medicin. Klockan är strax över midnatt och din bakjour har precis meddelat att hen lägger sig. Nu går sökaren, ett nummer du inte känner igen.\nInne på rummet finns det en telefon. Ring tillbaka, och hör vad det gäller. På ”datorn” hittar du EKGet och blodgasanalysen.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Egen situation",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående bakgrund",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående det akuta",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "EKG",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordination akut behandling (stabilisering)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordination akut behandling (shift)",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordination akut behandling (elimination)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Prioritering",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtalsstruktur",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "njure_ssk"
   },
   "HT24|9": {
    "key": "HT24|9",
    "session": "HT24",
    "stn": "9",
    "date": "2025-01-14",
    "year": 2025,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Allmänmedicin",
    "family": "Hypertoni: blodtrycksbedömning och riskbedömning",
    "topic": "Hypertoni",
    "title": "Samtal om blodtryck",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är läkare på hälsocentralen och ska idag träffa en patient där ett högt blodtryck har uppmätts på en hälsoundersökning. Övriga undersökningar, inklusive lipider och blodsocker är normala. Inför besöket har patienten kontrollerat sitt blodtryck hemma och rapporterat in ett medelvärde på 150/95 mmHg. Med tanke på den förhöjda hjärtkärlrisken rekommenderas du att överväga insättande av blodtryckssänkande medicin. Enligt journalen äter patienten för närvarande inga läkemedel.\nDin uppgift är att:\n- Ta en relevant anamnes utifrån principerna för den patientcentrerade konsultationsmodellen.\n- Ta en relevant anamnes avseende levnadsvanor och riskfaktorer kopplade till hjärtkärlsjukdom.\n- Ge enkla rekommendationer om läkemedelsbehandling utifrån patientens behov.\nDu ska INTE undersöka patienten. Du behöver INTE planera för vidare utredning eller uppföljning\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Låter patient berätta ostört inledningsvis",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tankar",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Oro",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Önskan",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kvitton",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Sammanfattningar",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Har en tydlig struktur i sin konsultation där patientens del (tanke, oro, önskan) utforskas innan övergång till läkarens del.",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ev. Symtom kopplade till hjärt-kärlsjukdom",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ärftlighet",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tid / nuv sjd",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Rökning",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Alkohol, nöjer sig inte med svävande svar utan frågar vidare",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fysisk aktivitet",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kost, nöjer sig inte med svävande svar utan frågar vidare",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger adekvata råd om läkemedelsbehandling utifrån patientens situation och anamnes",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger råd med lyhördhet och respekt för patients person och i samråd med patienten.",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hypertoni"
   },
   "HT24|10": {
    "key": "HT24|10",
    "session": "HT24",
    "stn": "10",
    "date": "2025-01-14",
    "year": 2025,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Lunga",
    "family": "Lungstatus och diktat",
    "topic": "Lungstatus",
    "title": "Lungstatus med diktering",
    "comp": [
     "STAT",
     "DOK"
    ],
    "source": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "På hälsocentralen söker en patient med oklara luftvägsbesvär.\nNär du träffar patienten ska du:\n• Genomföra lungstatus\n• Diktera dina fynd\nDu behöver INTE ta anamnes\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Perkussion",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Auskultation A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Auskultation B",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Auskultation C",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Systematiskt genomförande",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Inspektion",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Perkussion",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Auskultation",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet – delmoment A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet – delmoment B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet – delmoment C",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "lungstatus"
   },
   "HT24|11": {
    "key": "HT24|11",
    "session": "HT24",
    "stn": "11",
    "date": "2025-01-14",
    "year": 2025,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Kardiologi",
    "family": "Arytmi, svimning och ortostatism",
    "topic": "Förmaksflimmer",
    "title": "Förmaksflimmer",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "En 64-årig patient söker på medicinakuten på grund av orkeslöshet, känsla av att det rusar i bröstet och att hjärtat slår konstigt. Alla blodprover inklusive elektrolyter och thyroideastatus är normala. EKG visar förmaksflimmer med hjärtfrekvens 160 slag/min och blodtryck i liggande är 107/58 mmHg. Hjärt- och lungstatus i övrigt utan anmärkning. Du tar emot patienten på akuten och din uppgift är att ta kompletterande anamnes, bemöta patientens frågor och ge förslag på åtgärd.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Extrahera relevant medicinsk information",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnesen är strukturerad och organiserad",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionellt och empatiskt bemötande",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientens frågor bejakas.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger adekvata svar på patientens frågor.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bemötande och kommunikation görs på ett välstrukturerat och professionellt sätt.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rekommenderar medicinsk konvertering eller elkonvertering (efter minst 6 tim fasta), alternativt frekvensreglering.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kan ge information om hur behandlingen går till utan medicinska termer som patienten har svårt att förstå",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informationen till patienten är välstrukturerad och lätt att följa",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "arytmi"
   },
   "HT24|12": {
    "key": "HT24|12",
    "session": "HT24",
    "stn": "12",
    "date": "2025-01-14",
    "year": 2025,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Infektion",
    "family": "Infektion: handläggning, rond och information",
    "topic": "Rosfeber",
    "title": "Handläggning av rosfeber",
    "comp": [
     "ANAM",
     "ORD",
     "KOMM"
    ],
    "source": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Din nästa patient på akutmottagningen är en 55-åring med en röd och svullen arm. Patienten insjuknade för två dagar sedan med tilltagande feber, frossa och en arm som är svullen, rodnad, värmeökad och som gör ont.\nPatientens vitalparametrar är temp 39,4 °C, puls 110 /min, blodtryck 130/60 mmHg, andningsfrekvens 22 /min, saturation 97 %.\nDu ska:\n• Ta en riktad och strukturerad anamnes\n• Informera patienten om\n- din bedömning\n- planerad provtagning och behandling\n- fortsatt handläggning\nDu ska INTE undersöka patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tar reda på detaljer kring aktuella symtom",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar viktigaste punkterna i bakgrundsanamnes",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar om eventuell allergi mot läkemedel",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Föreslår blododl x 2",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Bedömer patientens allmäntillstånd Rekommenderar inneliggande vård",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rekommenderar korrekt antibiotika",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar patienten om korrekt diagnos på ett professionellt sätt och efterhör ev frågor",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "infektion"
   },
   "HT24|13": {
    "key": "HT24|13",
    "session": "HT24",
    "stn": "13",
    "date": "2025-01-14",
    "year": 2025,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Endokrinologi/Akut",
    "family": "Akut medvetslöshet, intoxikation och svimning",
    "topic": "Opioidintoxikation",
    "title": "Akut medvetslöshet – opiatintoxikation",
    "comp": [
     "AKUT",
     "RESON"
    ],
    "source": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "En student (20–30 år) har blivit medvetslös i en studentkorridor en lördagskväll och två bekanta har kört in denne till akuten (3 minuters bilväg).\nPatienten har flyttats till akutrummet där sjuksköterskan har bedömt patientens vitalparametrar (ABC) och ni behöver agera direkt.\nDu ska: Samarbeta med sjuksköterskan på akutrummet och ordinera akut utredning och ev. behandling till sjuksköterskan\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Efterfrågar relevant kompletterande information från sjuksköterskan",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar ssk eller undersöker själv stickmärken och/eller pupillstorlek",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar syrgas",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar i.v. vätska (Ringer el NaCl)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar kapillärt B-glukos",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar Naloxon i.v.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Patienten vaknar bara delvis – ordinerar ytterligare Naloxon",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Då patienten vaknar upp – förklarar tydligt och professionellt vad som hänt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Samarbetar med sjuksköterskan på ett adekvat sätt",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "endoakut"
   },
   "HT24|14": {
    "key": "HT24|14",
    "session": "HT24",
    "stn": "14",
    "date": "2025-01-14",
    "year": 2025,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "OSCE I HT24 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet.\nVad gör du?\n(Patienten är bekräftat COVID-negativ)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT24 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kontroll av medvetande (ruska om, ropa till patient, ev. smärtstimuli)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning. Öppnar luftvägen och håller den öppen genom hela kontrollen",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning: Titta bröstkorgsrörelse, lyssna andningsljud, känn efter luftflöde i totalt ca 10 sek",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Larmar (på larmknapp i rummet, alt ropar på hjälp)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Utfört kompressioner med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört kompressioner med total medelhastighet 100-120/min",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört inblåsningar med minst 80% godkända",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hlr"
   },
   "oHT24|1": {
    "key": "oHT24|1",
    "session": "oHT24",
    "stn": "1",
    "date": "2025-02-21",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Infektion",
    "family": "Infektion: handläggning, rond och information",
    "topic": "Legionella",
    "title": "Handläggning av legionellapneumoni",
    "comp": [
     "ANAM",
     "ORD",
     "KOMM"
    ],
    "source": "ALLA bedömarmallar omOSCE I HT24.pdf",
    "door": {
     "text": "Du är läkare på en medicinavdelning. Du har ansvar för en 52-årig patient som lagts in på avdelningen för 2 dagar sedan med diagnosen pneumoni och fått Bensylpencillin iv. Patienten har fortfarande feber, är allmänpåverkad och har 2 l syrgas på grund av måttlig hypoxi. Inskrivningsjournalen är mycket kortfattad och det saknas mycket information. Luftvägsprovet från inkomstdagen visar legionella, vilket klassas som en anmälningspliktig och smittspårningspliktig sjukdom enligt smittskyddslagen.\nDu ska:\n• Ta en kompletterande strukturerad anamnes utifrån diagnosen legionellapneumoni\n• Ställa frågor om tänkbara smittkällor\n• Ge patienten information om sjukdomen och smittvägar\n• Ta ställning till fortsatt antibiotikabehandling\nDu ska INTE göra kroppsundersökning med status.\nDu ska INTE ordinera ytterligare provtagning.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "Dörrinformation OmOSCE I HT24_reviderad.pdf"
    },
    "rubric": {
     "tier": "manual",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tar reda på detaljer kring aktuella symtom (symtom, debut, duration, sjukdomssymtom under resan)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar viktigaste punkterna i bakgrundsanamnesen (tidigare sjukdomar 0,5 p, mediciner/läkemedelsallergi 0,5 p, socialt 0,5 p; max 1 p)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Epidemiologisk anamnes: andra sjuka i omgivningen/ressällskapet (1 p) och reseanamnes, resmål, längd, aerosolexposition (1 p)",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar om möjlig exposition efter hemkomsten: hotell/spa/simhall/bubbelpool/högtryckstvätt/luftfuktare (1 p) och jord/trädgård/kompost (1 p)",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger korrekt information om legionella: vad det är och symtom (1 p), hur man smittas (1 p)",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger adekvata råd om smitta till omgivningen och arbete (legionella smittar inte mellan människor; kan återgå till arbetet utan förhållningsregler)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Byter eller kompletterar antibiotika (erytromycin/doxycyklin/levofloxacin eller motsvarande)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "infektion"
   },
   "oHT24|2": {
    "key": "oHT24|2",
    "session": "oHT24",
    "stn": "2",
    "date": "2025-02-21",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Njurmedicin",
    "family": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)",
    "topic": "Hypernatremi",
    "title": "Hypernatremi – samtal med ssk",
    "comp": [
     "SBAR",
     "ORD"
    ],
    "source": "ALLA bedömarmallar omOSCE I HT24.pdf",
    "door": {
     "text": "Du är primärjour medicin. Klockan är strax över midnatt och din bakjour har precis meddelat att hen lägger sig. Nu går sökaren, ett nummer du inte känner igen.\nInne på rummet finns det en telefon. Ring tillbaka, och hör vad det gäller. Du har en dator och tillgång till internet.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "Dörrinformation OmOSCE I HT24_reviderad.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Egen situation (S)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående bakgrund (B)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående det akuta (A)",
       "max": 2.5,
       "opts": [
        2.5,
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Beräkning av free water deficit med internet räknare",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordination akut behandling (korrekt dropp)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordination akut behandling (korrekt hastighet)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Prioritering",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtalsstruktur",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "njure_ssk"
   },
   "oHT24|3": {
    "key": "oHT24|3",
    "session": "oHT24",
    "stn": "3",
    "date": "2025-02-21",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Lunga",
    "family": "Lungcancermisstanke, tobaksanamnes och snarkning",
    "topic": "Lungcancer",
    "title": "Misstänkt lungcancer – information om röntgenfynd och SVF",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "ALLA bedömarmallar omOSCE I HT24.pdf",
    "door": {
     "text": "Du träffar en 70-årig, fd rökare med 45 paketår, som sista månaderna har hostat blod vid upprepade tillfällen. Patienten förnekar feber, har ett CRP på 7 och du bedömer att en lunginflammation är osannolik. Patienten har genomfört en lungröntgen. Röntgensvar:\nCentralt i höger ovanlob finns ett 4 cm stort rundat infiltrat. Prominent höger lunghilus. Ingen pleuravätska.\nDin uppgift är att\n• informera om röntgenfyndet\n• berätta kortfattat för patienten om fortsatt utredning. Var tydlig med vilken undersökning som ska göras som nästa steg och vem som kommer att ansvara för fortsatt utredning.\nDu behöver inte komplettera anamnes med avseende på symtombild och rökvanor!\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "Dörrinformation OmOSCE I HT24_reviderad.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Information angående röntgenfynd och åtgärd – delmoment A.1",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Information angående röntgenfynd och åtgärd – delmoment A.2",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Information angående röntgenfynd och åtgärd – delmoment B.1",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Information angående röntgenfynd och åtgärd – delmoment B.2",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "lungutr"
   },
   "oHT24|4": {
    "key": "oHT24|4",
    "session": "oHT24",
    "stn": "4",
    "date": "2025-02-21",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Endokrinologi",
    "family": "Diabetes: debut, kost och motion",
    "topic": "Typ 2-diabetes",
    "title": "Nydebuterad typ 2-diabetes – kost och motion",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "ALLA bedömarmallar omOSCE I HT24.pdf",
    "door": {
     "text": "På din vårdcentral kommer en 50-årig patient på återbesök, chef på ett mindre tryckeri, gift, tidigare frisk. Vid hälsokontroll tre månader tidigare diagnos typ 2 diabetes, hade inga subjektiva symtom. Ville undvika tabletter och fick råd om kost och motion av läkare & dietist.\nVid diagnos Idag (3 mån sedan)\nVikt (kg) 92 91\nBMI (kg/m2) 28 28\nFaste b-glukos (ref 4,2–6,3 8,1 7,9 mmol/L)\nHbA1c (behandl. mål <42 61 59 mmol/mol)\nDin uppgift är att:\n- Ta aktuell anamnes.\n- Informera om behandlingseffekten av kost och motion och att man nu bör lägga till Metformin till måltider (börja med 500 mg till middagen och öka till 500 mg till frukost och middag efter 2 veckor om det går bra).\n- Informera patienten om verkningsmekanism, biverkningar och risker med den nya behandlingen samt svara på eventuella frågor.\nReceptskrivning ingår inte i momentet.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "Dörrinformation OmOSCE I HT24_reviderad.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Börjar med en öppen fråga om hur patienten mår och hur det gått med kost och motion.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar om att behandlingsmålen inte uppnåtts med kost + motion utan att patienten känner sig misslyckad och poängterar vikten av fortsatt icke-farmakologisk behandling.",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar tydligt och vänligt att insulinbehandling inte är nödvändigt i nuläget (problemet är insulinresistens), utan man bör starta behandling med metformin, som ökar insulinkänsligheten, mindre startdos, som troligen kommer att behöva ökas.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tydliggör att man inte kan få hypoglykemier av Metformin i monoterapi",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tydliggör att gastrointestinala biverkningar är vanliga men ofta övergående.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar tydligt om risken för laktacidos vid interkurrent sjukdom med dehydrering och att behandlingsuppehåll skall göras vid t.ex gastroenterit el. infektion med feber samt kontraströntgen.",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förklaringar för patienten på enkelt, förståeligt språk, utan facktermer och ger patienten utrymme att ställa frågor.",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "diabetes"
   },
   "oHT24|5": {
    "key": "oHT24|5",
    "session": "oHT24",
    "stn": "5",
    "date": "2025-02-21",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Kardiologi",
    "family": "Dyspné: hjärtsvikt eller lungsjukdom",
    "topic": "Hjärtsvikt",
    "title": "Dyspné och hjärtsvikt",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "ALLA bedömarmallar omOSCE I HT24.pdf",
    "door": {
     "text": "Du är AT läkare och arbetar idag på akuten. Du ombeds undersöka en patient som inkommer på grund av hjärtrusningar och snabb puls.\nDin uppgift blir att ta anamnes och föreslå fortsatt utredning och behandling.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "Dörrinformation OmOSCE I HT24_reviderad.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Samtalsteknik (Fint, respektfullt bemötande, inledande öppna frågor, lyssnar och följer upp svar)",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Adekvat funktionsanamnes (besvärens allvarsgrad, dygnsvariation, utlösande faktorer, ev NYHA-klass)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Adekvat lungrelaterad anamnes (allergier, eksem, pipig andning, hosta, slem. rökning)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Adekvat kardiell anamnes (bröstsmärtor, ödem, hjärtklappning, hereditet, rökning, alkohol)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Adekvata differentialdiagnoser (hjärtsjukdom mest sannolikt, men lungsjukdom kan inte uteslutas)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Adekvat handläggning (ej inläggning, begränsad initial utredning med EKG, ev spirometri och blodprover inkl proBNP)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "dyspne"
   },
   "oHT24|6": {
    "key": "oHT24|6",
    "session": "oHT24",
    "stn": "6",
    "date": "2025-02-21",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Allmänmedicin",
    "family": "Levnadsvanor och motiverande samtal",
    "topic": "Fysisk aktivitet",
    "title": "Råd om fysisk aktivitet",
    "comp": [
     "KOMM",
     "ANAM"
    ],
    "source": "ALLA bedömarmallar omOSCE I HT24.pdf",
    "door": {
     "text": "Du är läkare på en vårdcentral. Din nästa patient är en 40-årig man/kvinna som undrar varför det är viktigt att vara fysiskt aktiv och vill ha råd om hur man kan börja med fysisk aktivitet.\nUppgifter:\n1. Tag en relevant anamnes för frågeställningen.\n2. Förklara vikten av fysisk aktivitet för patientens hälsa.\n3. Ge specifika och individuellt anpassade råd om fysisk aktivitet baserat på generella rekommendationer i FYSS.se.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "Dörrinformation OmOSCE I HT24_reviderad.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Anamnes - tar relevant anamnes",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kommunikation och förklaringsförmåga - förklarar tydligt och begripligt",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kommunikation och förklaringsförmåga - refererar till relevanta riktlinjer",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Individanpassande råd - ger relevanta individanpassade råd",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Individanpassade råd - beskriver träningsalternativ och mängd",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Motivation och uppföljning - ger stöd och planerar uppföljning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientcentrerat förhållningssätt - förmåga till individcentrering och lyhördhet",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "levnadsvanor"
   },
   "oHT24|8": {
    "key": "oHT24|8",
    "session": "oHT24",
    "stn": "8",
    "date": "2025-02-21",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Diabetes/Angiologi",
    "family": "Fotstatus och perifer cirkulation",
    "topic": "Perifer artärsjukdom",
    "title": "Perifer cirkulation hos diabetiker",
    "comp": [
     "STAT",
     "KOMM"
    ],
    "source": "ALLA bedömarmallar omOSCE I HT24.pdf",
    "door": {
     "text": "63-åring, tidigare storrökare men nu slutat för ett halvår sedan. Medicinerat med Enalapril sedan länge och senaste året Metformin. Hen upplever obehag i vänster underben och fot vid promenader sedan senaste månaden. Initial misstanke om DVT respektive kompartment-syndrom har avskrivits.\nUppgiften är att komplettera anamnes samt att genomföra diabetesstatus inklusive perifert kärlstatus av fötterna samt informera patienten om din bedömning och fortsatt handläggning. Övrig klinisk undersökning och behandlingsförslag ingår ej i uppgiften.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "Dörrinformation OmOSCE I HT24_reviderad.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tar en tillfredställande anamnes",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Inspektion",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar a dorsalis posterior bilateralt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar a tibialis pedis bilateralt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palpation av fotpulsar bilateralt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Vibrationssinne med stämgaffel",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Känsel med monofilament",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "diabetesfot"
   },
   "oHT24|9": {
    "key": "oHT24|9",
    "session": "oHT24",
    "stn": "9",
    "date": "2025-02-21",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Lunga",
    "family": "Lungcancermisstanke, tobaksanamnes och snarkning",
    "topic": "Sömnapné",
    "title": "Snarkning – diagnosmisstanke och råd",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "ALLA bedömarmallar omOSCE I HT24.pdf",
    "door": {
     "text": "En 60-årig tidigare frisk lokförare söker hälsocentralen på grund av störande snarkning. Hustrun brukar knuffa i honom då hon har märkt att han har andningsuppehåll, särskilt om han sover på rygg. Patienten själv tycker att han sover ”ganska bra” men han är trött på morgonen och kan ibland känna sig hängig dagtid. Han har aldrig rökt men dricker gärna öl/vin till maten på helgerna.\nI status: AT: gott och opåverkat. MoS: normalt fynd. Thyreoidea: ej förstorad. BT: 145/95. BMI 29.\nDin uppgift är att:\n1. Informera om diagnosmisstanke i relation till sjukdomsbild\n2. Ge allmänna råd och motivera varför\n3. Informera/motivera angående eventuell utredning/uppföljning\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "Dörrinformation OmOSCE I HT24_reviderad.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Diagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Sjukdomsbild A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Sjukdomsbild B",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Allmänna råd; rekommendation/information angående",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "A Allmänna råd; rekommendation/information angående",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "B Allmänna råd; rekommendation/information angående",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "C Utredning",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "lungutr"
   },
   "oHT24|10": {
    "key": "oHT24|10",
    "session": "oHT24",
    "stn": "10",
    "date": "2025-02-21",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Allmänmedicin",
    "family": "Trötthet och orkeslöshet: anamnes och differentialdiagnoser",
    "topic": "Trötthet",
    "title": "Återbesök – trötthet och orkeslöshet",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "ALLA bedömarmallar omOSCE I HT24.pdf",
    "door": {
     "text": "Du arbetar som underläkare på en hälsocentral. Nästa patient är en 50- årig kvinna/man som är nyinflyttad i regionen (saknar journalupplysningar). I bokningsunderlaget inför besöket står ”trötthet/orkeslöshet” anfört som kontaktorsak. Inför besöket har blodtryck och puls registrerats. Blodtryck 140/9o Puls 95, Regelbunden. Du behöver inte göra någon statusundersökning. Auskultation av hjärta och lungor är normala, andningen obesvärad i vila, buken är mjuk och oöm och inga patologiskt förstorade lymfkörtlar palperas på överkroppen.\nDin uppgift är att ta anamnes, föreslå tänkbara arbetsdiagnoser och utifrån dessa ta beskriva för patienten vilken vidare handläggning du rekommenderar.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "Dörrinformation OmOSCE I HT24_reviderad.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Inledning och Struktur",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar upp en anamnes som är relevant avseende den kliniska situationen",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor som fokuserar till alkohol (intag, abstinensymtom, samt utforskar självinsikt/förnekelse)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar på ett för patienten beskripligt sätt kopplingen mellan en allt för hög alkoholkonsumtion och nuvarande sjukdomar",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Försöker motivera patienten till livsstilsförändring",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "trotthet"
   },
   "oHT24|11": {
    "key": "oHT24|11",
    "session": "oHT24",
    "stn": "11",
    "date": "2025-02-21",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Geriatrik",
    "family": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård",
    "topic": "Läkemedelsbiverkan",
    "title": "Läkemedelspåverkan",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "ALLA bedömarmallar omOSCE I HT24.pdf",
    "door": {
     "text": "Din nästa patient på hälsocentralen är en 75-årig kvinna. Hon kommer till dig då hon misstänker att hon har fått en biverkan av en blodtrycksmedicin hon fått för en månad sedan.\nUndersökningsfynd före besöket:\n• Blodtryck: 120/70 mmHg\n• EKG: sinusrytm, puls 70/minut\n• Normala rutinprover inklusive Kreatinin, Kolesterol, HbA1C\n• Urinsticka normal\nDu ska:\n• Ta en adekvat anamnes, både bakgrund och aktuellt problem\n• Bedöma och informera patienten om det kan vara en läkemedelsbiverkan\n• Bedöma om medicinändring är nödvändig, ändra i så fall i samråd med patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "Dörrinformation OmOSCE I HT24_reviderad.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Inledning och struktur",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar upp en anamnes som är relevant avseende bakgrunden",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar upp en anamnes som är relevant avseende den aktuella kliniska situationen",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att göra bedömning om det är en läkemedelsbiverkan och informerar begripligt tillpatienten",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Gör en rimlig ändring i patientens läkemedelslista och förankrar med patienten",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "geriatrik"
   },
   "oHT24|12": {
    "key": "oHT24|12",
    "session": "oHT24",
    "stn": "12",
    "date": "2025-02-21",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Angiologi",
    "family": "Ensidig bensvullnad: DVT-misstanke",
    "topic": "DVT",
    "title": "Svullet underben – DVT",
    "comp": [
     "ANAM",
     "STAT",
     "RESON"
    ],
    "source": "ALLA bedömarmallar omOSCE I HT24.pdf",
    "door": {
     "text": "Du jobbar på akuten en helg på ett mindre sjukhus med begränsad tillgång på till exempel ultraljud, som kan genomföras tidigast morgonen därpå. Akuta röntgenundersökningar och blodprover går att få.\nFrån triagen får du en patient med helt stabila vitalparametrar där sjuksköterskan skrivit ”misstänkt DVT”.\nDu ska:\n• Ta en kort och riktad anamnes\n• Informera patienten om din bedömning och vidare handläggning\n• Ordinera vidare utredning och behandling till sköterska\nDu ska INTE göra någon statusundersökning\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "Dörrinformation OmOSCE I HT24_reviderad.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tidigare VTE/hereditet",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Dyspné/LE-symptom",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Diffdiagnostiska frågor (ex. feber, sår, unilateralt)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Malignitetssuspekta symptom",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Immobilisering/kirurgi/andra typiska tillfälliga riskfaktorer",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Debut och duration",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Andra sjukdomar och läkemedel",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Blödningsbenägenhet",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ultraljud underben",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Poliklinisk handläggning med AK- behandling i väntan på undersökning",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Adekvat provtagning före beh (hb, TPK, krea. Ev. PK/APTT, LPK, CRP, lever- och elstatus)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Adekvat information till patient",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Adekvat rapport",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "dvt"
   },
   "oHT24|13": {
    "key": "oHT24|13",
    "session": "oHT24",
    "stn": "13",
    "date": "2025-02-21",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Kardiologi",
    "family": "Arytmi, svimning och ortostatism",
    "topic": "PSVT",
    "title": "Hjärtrusning (PSVT)",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "ALLA bedömarmallar omOSCE I HT24.pdf",
    "door": {
     "text": "Dörrinformationen som står under station 13 i källfilen hör till en annan station (återbesök efter elkonvertering av förmaksflimmer, se om-OSCE I VT24 st. 4). Bedömningsmallen för station 13 gäller hjärtrusning (PSVT): anamnes, blodtryck, EKG-tolkning, esofagus-EKG, adenosin och handläggning.",
     "file": "Dörrinformation OmOSCE I HT24_reviderad.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Ta en anamnes som ska innehålla aktuell sjukdom (hjärtrusningens karaktär) och tidigare sjukhistoria",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfråga ett blodtryck",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfråga ett EKG",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Tolka EKG korrekt (regelbunden smal-QRS takykardi 1p; PSVT/AVNRT 1 p)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinera esofagus EKG",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinera adenosin",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Handläggning: lugnande besked och ingen inläggning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "arytmi"
   },
   "oHT24|14": {
    "key": "oHT24|14",
    "session": "oHT24",
    "stn": "14",
    "date": "2025-02-21",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "ALLA bedömarmallar omOSCE I HT24.pdf",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet.\nVad gör du?\n(Patienten är bekräftat COVID-negativ)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "Dörrinformation OmOSCE I HT24_reviderad.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kontroll av medvetande (ruska om, ropa)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning. Öppnar luftvägen och håller den öppen genom hela kontrollen",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning: titta, lyssna, känn (ca 10 sek)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Larmar (på larmknapp i rummet, alt ropar på hjälp)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Utfört kompressioner med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört kompressioner med total medelhastighet 100-120/min",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört inblåsningar med minst 80% godkända",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hlr"
   },
   "VT25|1": {
    "key": "VT25|1",
    "session": "VT25",
    "stn": "1",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Arytmi, svimning och ortostatism",
    "topic": "AV-block",
    "title": "AV-block III",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Din nästa patient på medicinakuten kommer på grund av orkeslöshet och trötthet. Från triagen har du fått vitalparametrar:\n• Temperatur 37,2 C\n• Andningsfrekvens 16 /minut\n• Blodtryck 165/95 mmHg, puls 40 /minut\nEtt EKG är taget och finns inne på rummet.\nDu ska:\n• Ta adekvat anamnes\n• Efterfråga resultat av statusundersökningar (du behöver INTE utföra status)\n• Tolka EKG. Kommunicera din bedömning och planering för fortsatta åtgärder med patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Förmåga att ta adekvat anamnes",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Adekvat EKG-tolkning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår rimliga utrednings/behandlingsåtgärder",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar patient på ett för patienten begripligt sätt",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "arytmi"
   },
   "VT25|2": {
    "key": "VT25|2",
    "session": "VT25",
    "stn": "2",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Lunga",
    "family": "Allergisk rinokonjunktivit och angioödem",
    "topic": "Allergisk rinokonjunktivit",
    "title": "Allergisk rinokonjunktivit",
    "comp": [
     "RESON",
     "KOMM"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är läkare på hälsocentral i Umeå och träffar i slutet av maj en 25-årig patient. Patienten har en känd björkpollenallergi som tidigare varit stabil på behandling med antihistamin (Desloratadin 5 mg x 1). Patienten söker nu på grund av tilltagande besvär från ögon och näsa och önskar en mer effektiv behandling.\nDin uppgift är att:\n1. Ta en adekvat anamnes för att kartlägga symtom och faktorer som kan påverka.\n2. Förklara, och motivera, om ytterligare utredning behövs eller ej.\n3. Informera om lämplig kompletterande behandling.\n(Du skall inte utföra status.)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Riskfaktorer A",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Exponering B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Symtom C",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Symtom D",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Symtom E",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Diagnos A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Diagnostik B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Behandling C",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "allergi"
   },
   "VT25|3": {
    "key": "VT25|3",
    "session": "VT25",
    "stn": "3",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Neurologi/Angiologi",
    "family": "Stroke och TIA: NIHSS, SBAR och information",
    "topic": "Akut stroke",
    "title": "Misstänkt stroke på akutmottagning",
    "comp": [
     "STAT",
     "SBAR",
     "KOMM"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är läkare på akutmottagningen och blir tillfrågad om att titta på en 69 årig person på triaget. Hen söker på grund av plötsligt påkommen svaghet för 1 timme sedan och har nu fått hjälp av sin partner till akutmottagningen. Patienten är sen tidigare väsentlig frisk förutom mild hypertoni. Står på Enalapril, i övrigt inga läkemedel.\nDu ska: Utföra anvisade delar av nervstatuset NIHSS och rapportera fynden enligt SBAR till din bakjour och föreslå nästa åtgärd.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "1c: Förståelse (dikotomt)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "3: Synfält (graderat)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "4: Facialispares (dikotomt)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "5: Pares i arm (dikotomt)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "6: Pares i ben (dikotomt)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "8: Sensibilitet - smärta (dikotomt)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "SBAR inklusive bedömning (graderat)",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "stroke"
   },
   "VT25|5": {
    "key": "VT25|5",
    "session": "VT25",
    "stn": "5",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Dyspné: hjärtsvikt eller lungsjukdom",
    "topic": "Akut dyspné",
    "title": "Andfåddhet och ödem – triage på medicinakuten",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är läkare på medicinakuten. Där finns många patienter som inte träffat läkare ännu och du försöker få en överblick över dem. Du gör en snabb, första bedömning av en 55-årig patient som söker på grund av andfåddhet och uttalad om bägge benen och som är triagerad som orange.\nTriagesköterskan har dokumenterat följande:\nLuftväg: Fri. Syremättnad: 94% utan extra syrgas Andningsfrekvens: 26/min Blodtryck: 165/85 mmHg Puls: 88/min Vakenhetsgrad: Vaken och alert Kroppstemperatur: 36,8 °C\nDu ska:\n• Ta en kort anamnes som är relevant i situationen\n• Genomföra relevanta statusmoment för att kunna prioritera handläggningen\n• Kommer fram till en plan för initial utredning av patienten under den första timmen på akutmottagningen. Ditt differentialdiagnostiska resonemang och planerad initial utredning skall du kort förklara för patienten (ej för bedömaren)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Anamnes (subjektiva symptom)",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes (objektiva symptom)",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Status",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Differentialdiagnostiskt resonemang",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Planerad utredning",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtalsföring, struktur",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "dyspne"
   },
   "VT25|6": {
    "key": "VT25|6",
    "session": "VT25",
    "stn": "6",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Endokrinologi/Akut",
    "family": "Akut medvetslöshet, intoxikation och svimning",
    "topic": "Intoxikation",
    "title": "Intoxikation",
    "comp": [
     "AKUT",
     "RESON"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är underläkare på medicinakuten. En 22-årig patient har inkommit p.g.a. misstänkt överdos av läkemedel. Patienten är vaken och stabil.\nDin uppgift är att:\n1. Ta en relevant anamnes (4 minuter)\n2. Rapportera till bakjour (2 minuter)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Frågar vad, när och hur mycket av läkemedlet",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Identifierar att det rör sig om tillräckligt hög mängd och att det gått över 10 timmar",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor om andra substanser",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar om vikt och andra relativa omständigheter (fasta, andra sjd)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förstår att acetylcysteinbehandling måste startas direkt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tillämpar SBAR",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "SBAR Rekommendation med provtagning ordination",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Empatiskt bemötande",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "endoakut"
   },
   "VT25|7": {
    "key": "VT25|7",
    "session": "VT25",
    "stn": "7",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Hematologi",
    "family": "Hematologi: lymfkörtelstatus, anemi och blödning",
    "topic": "Järnbristanemi",
    "title": "Järnbristanemi",
    "comp": [
     "STAT",
     "ANAM"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Patient med anemi. På din öppenvårdsmottagning söker en 34-årig tidigare frisk kvinna för trötthet.\nUppgiften är värdera patientens symtom och fastställa sannolik orsak till anemin samt föreslå ett bekräftande laboratorieprov. Därefter ge lämplig ordination med adekvat instruktion till patienten inklusive uppföljning.\nBlodstatus visar:\nUppmätt Parameter Normalvärde Enhet värde Hb 78 134–170 g/L MCV 76 82–98 fL MCHC 296 317–357 g/L RDW 16 12.3–14.3 % LPK 6.0 3.5–8.8 x10⁹/L TPK 250 145–348 x10⁹/L\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Frågor avseende anemisymtom",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor avseende blödningssymtom",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Laboratorieprov",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Diagnos",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordination och information",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Uppföljning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hema"
   },
   "VT25|9": {
    "key": "VT25|9",
    "session": "VT25",
    "stn": "9",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Geriatrik",
    "family": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård",
    "topic": "Utskrivning",
    "title": "Utskrivning och läkemedelsinformation",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "85-åring har varit inlagd fem dagar för lunginflammation och fått intravenösa antibiotika. Idag utskrivning med peroralt penicillin i fem dagar. Har även fått insatt Metformin.\nDin uppgift: genomföra utskrivning samtal med patienten\n• informera om sjukdomar\n• informera om nyinsatta läkemedel\n• informera om planering/uppföljning\nBAKGRUND\nNuvarande sjukdomar: Hypertoni, diabetes typ 2 (tidigare utan läkemedelsbehandling)\nSocialt: ensamboende i eget hem. Hemtjänst två gånger per dag för stöd med läkemedel och mat\nAllergi: Ingen känd\nLäkemedel vid inkomst: Candesartan/hydroklortiazid 16/12,5 mg x 1\nTobak/alkohol: aldrig nyttjat\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Informerar om vårdtiden på ett tydligt och begripligt sätt",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar om läkemedel, syfte och biverkningar (för två poäng behövs råd att ta paus med Metformin vid t ex magsjuka)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Planera för uppföljning (diabetessköterska/remiss distriktsläkare/annat vettigt förslag)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "”Red flags” – vad kan gå snett och hur agerar patienten då (t ex hög feber, höga blodsocker)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kolla att patienten förstått (för 2 p krävs att patienten själv återberättar)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "geriatrik"
   },
   "VT25|10": {
    "key": "VT25|10",
    "session": "VT25",
    "stn": "10",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Bröstsmärta: AKS, perimyokardit och EKG",
    "topic": "Instabil angina",
    "title": "Instabil angina på hälsocentral",
    "comp": [
     "ANAM",
     "RESON",
     "KOMM"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "En 55 årig man som inte haft andra kontakter med hälsocentralen än för COVID-vaccinationer söker akut på vårdcentralen på grund av övergående bröstsmärtor. Mottagningssköterskan har tagit:\nBlodtryck: 170/80 Puls: 90 Saturation: 96% Andningsfrekvens: 14 EKG: finns på rummet\nDin uppgift är att:\n1. Tolka EKG\n2. Genomföra en relevant komplettering av anamnesen avseende bröstsmärtorna\n3. Utifrån din sammanfattande bedömning av EKG och anamnes informera patienten om misstänkt diagnos och ta ställning till adekvat åtgärd\n(Du ska inte göra status på denna station)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tolkar EKG korrekt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att ta smärtanamnes",
       "max": 3,
       "opts": [
        3,
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att identifiera kardiovaskulär riskprofil och hälsoproblem",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      },
      {
       "t": "Formulerar korrekt arbetsdiagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att kommunicera med patient",
       "max": 3,
       "opts": [
        3,
        1.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "aks"
   },
   "VT25|12": {
    "key": "VT25|12",
    "session": "VT25",
    "stn": "12",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Lunga",
    "family": "Astma: inhalationsteknik, ACT och PEF-dagbok",
    "topic": "Inhalationsteknik",
    "title": "Instruktion av inhalationsläkemedel vid astma",
    "comp": [
     "PROC",
     "KOMM"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du träffar en patient med astma som bara har behandlats med kortverkande beta-2-stimulerare (SABA) vid behov. Spirometri visar bibehållen lungfunktion, men patienten har astmasymtom 3–4 gånger per vecka och Astma Control Test (ACT) 12 p Detta motiverar att du sätter in underhållsbehandling med en fast kombination av inhalationssteroid och snabb- och långverkande beta-2- stimulerare (ICS + FABA) samt extra doser med samma inhalator vid behov.\nDu ska:\n1. Välja lämplig inhalator för patientens astma\n2. Informera patienten om inhalatorn och verkan av dom läkemedel som ingår (ICS + FABA regelbundet + vid behov)\n3. Patienten har nu fått instruktion av astmasköterskan om inhalatorteknik. Din uppgift är nu att kontrollera om patienten har bra inhalationsteknik och vet hur medicineringen ska tas\nDu får informera/kommentera verbalt.\nDu ska INTE ta anamnes eller status\nOBS! Av hygienskäl ska endast figuranten/patienten hantera inhalatorerna\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Info 1A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Info 1B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Info 2A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Info 2B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Info 2C",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att ge instruktion",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "astma"
   },
   "VT25|13": {
    "key": "VT25|13",
    "session": "VT25",
    "stn": "13",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "BFM",
    "family": "Bilddiagnostik: akut radiologi",
    "topic": "Thoraxröntgen",
    "title": "Tre lungor – röntgentolkning",
    "comp": [
     "BILD"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du jobbar som underläkare på BFM, och ska titta på 3 lungröntgenbilder. Med dig har du en läkarstudent som du ska undervisa medan du jobbar. Bedöm bilderna på datorn och svara på studentens frågor.\nRemittenterna har gett knapphändig information i remisserna:\n• Fall 1: Fått CVK på höger sida. Optimalt läge nedre 1/3 av vena cava superior/höger förmak. Tacksam rtg på IVA. Läge?\n• Fall 2: Tetrapares. Nedsatt andningsljud dx. Patologi?\n• Fall 3: Frisk. Hälsokontroll via företags-hälsan. Patologi?\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Moment 1",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt diagnos Moment 2",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Anatomi Moment 3",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Undersökningsteknik Moment 4",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Moment 1",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Diagnos Moment 2",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Moment 1",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Diagnostik Moment 2",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Resonemang / bildteknik Moment 3",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "bfm"
   },
   "VT25|14": {
    "key": "VT25|14",
    "session": "VT25",
    "stn": "14",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Endokrinologi",
    "family": "Tyreoidea och endokrin utredning",
    "topic": "Viktnedgång",
    "title": "Ofrivillig viktnedgång",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Din nästa patient på hälsocentralen är en 35-årig kvinna som kommer på grund av viktnedgång sedan 1–2 månader. Ett status har redan tagits av kollega:\nStatus:\nAllmäntillstånd: Ingen dyspné, inga perifera ödem Cor: Regelbunden rytm 95/min Blodtryck: 110/70 mmHg Lungor: Normala andningsljud bilateralt Lymfkörtlar: Inga palpabla förstorade lymfkörtlar Buk: Mjuk, inga palpabla resistenser eller organförstoringar. Ömmar lite i epigastriet.\nDu ska:\n1. Ta en relevant anamnes\n2. Informera patienten möjliga orsaker och fortsatt handläggning\nDu ska INTE komplettera status\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Inleder med öppen fråga relaterat till orsak",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Associerade symtom",
       "max": 3,
       "opts": [
        3,
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Psykosocial situation/psykiskt mående",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Alkohol, droger, tobak",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kost, träning",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att ge information om fortsatt handläggning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att utöva patientcentrerat förhållningssätt",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "tyreoidea"
   },
   "VT25|16": {
    "key": "VT25|16",
    "session": "VT25",
    "stn": "16",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Allmänmedicin",
    "family": "Hypertoni: blodtrycksbedömning och riskbedömning",
    "topic": "Hypertoni",
    "title": "Anamnes och riskbedömning vid hypertoni",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är BT-läkare och träffar en 68-årig man på hälsocentralen. Han har genomgått 24-timmarsblodtrycksmätning och provtagning.\nMedelblodtryck under dygnet: 145/92 mmHg.\nNon-HDL: 5,5 mmol/l.\nSCORE2-risk: 14%.\nPatienten har inte diabetes och ingen läkemedelsbehandling.\nDu ska\n• ta en adekvat anamnes utifrån den patientcentrerade konsultationsmodellen, där de viktigaste riskfaktorerna för hjärt-kärlsjukdom ska vara med.\n• informera patienten om hans SCORE2-risk och förklara vad den innebär.\nDu ska INTE undersöka patienten.\nDu ska INTE ta ställning till eventuell behandling.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Inleder med öppen invit",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Låter patienten berätta ostört inledningsvis, dvs avbryter inte med en riktad fråga inom",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfrågar patientens tanke",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfrågar patientens oro",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfrågar patientens önskan",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Förklarar att SCORE2 handlar om risken att insjukna i eller dö av hjärtkärlsjukdom under de närmaste 10 åren",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "...och att 14% bedöms som hög risk",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Alkohol",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Rökning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Fysisk aktivitet",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kostvanor",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Hereditet",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hypertoni"
   },
   "VT25|17": {
    "key": "VT25|17",
    "session": "VT25",
    "stn": "17",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Infektion",
    "family": "Infektion: handläggning, rond och information",
    "topic": "Meningit/encefalit",
    "title": "Medvetandesänkt infektionspatient",
    "comp": [
     "ANAM",
     "ORD",
     "KOMM"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "En 56-årig man kommer till akutmottagningen på grund av hög feber 39,5°C, huvudvärk, magsmärtor och tilltagande förvirring sedan drygt ett dygn. Patienten har försämrats sista timmarna. Patienten inkommer medvetandesänkt och kan endast svara stönande på frågor. Medföljande patienten är dennes mycket oroliga sambo. Patienten bor i eget boende och arbetar som konsult.\nDu ska:\n• Ta en adekvat anamnes genom att kommunicera med orolig anhörig\n• Bedöma svårighetsgraden av sjukdomen\n• Ge förslag på och förklara din bedömning, initiala handläggning och lämplig behandling (och typ) för anhörig (du behöver INTE ange exakta preparat eller doser).\nDu behöver INTE göra kroppsundersökning\nVitalparametrar finns inne på rummet\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Presenterar sig för patienten och anhörig, kontrollerar med anhörig att det är rätt patient.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att ta strukturerad och relevant anamnes vid svår infektion.",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att kommunicera en korrekt och begriplig diagnos samt behandlingsplan till anhörig.",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Vill diskutera med bakjour kring vårdnivå och behov av IVA-vård eller föreslår sådan vård själv",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": true
      }
     ]
    },
    "guide": "infektion"
   },
   "VT25|18": {
    "key": "VT25|18",
    "session": "VT25",
    "stn": "18",
    "date": "2025-05-28",
    "year": 2025,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "OSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet.\nVad gör du?\n(Patienten är bekräftat COVID-negativ)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kontroll av medvetande (ruska om, ropa)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning. Öppnar luftvägen och håller den öppen genom hela kontrollen",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning: titta, lyssna, känn (ca 10 sek)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Larmar (på larmknapp i rummet, alt ropar på hjälp)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Utfört kompressioner med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört kompressioner med total medelhastighet 100-120/min",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört inblåsningar med minst 80% godkända",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hlr"
   },
   "oVT25|1": {
    "key": "oVT25|1",
    "session": "oVT25",
    "stn": "1",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Allmänmedicin",
    "family": "Hypertoni: blodtrycksbedömning och riskbedömning",
    "topic": "Blodtryck",
    "title": "Kontroll av blodtryck",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "39-åring, tidigare frisk och medicinfri, har testat sitt blodtryck vid snabbtest på stormarknad där hen var och handlade. Blivit skärrad av höga värden (över 150 mmHg i övertryck) och söker nu på hälsocentralen för att få detta kontrollerat.\nDin uppgift är att:\n- Ge instruktioner inför blodtrycksmätning\n- Utför blodtrycksmätning.\n- Rapportera resultat till bedömare.\n- Meddela resultat till patient/figurant och ge instruktioner om fortsatt handläggning\nI uppgiften ingår INTE att ta anamnes. I stationen angår ej annat status.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Instruktion inför blodtrycksmätningen",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Val av manschett-storlek och anbringande av manschett",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Blodtrycksmätning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "≥2 mätningar i samma arm; mätning i båda armarna",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Meddelande av blodtryck till bedömare",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar patient/figurant om att blodtrycket är normalt och lika i båda armarna. Rekommenderar patient/figurant mäta blodtryck igen hemma med egen blodtrycksapparat (helst) eller på HC om några veckor och rapportera uppmätta värden till HC.",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hypertoni"
   },
   "oVT25|2": {
    "key": "oVT25|2",
    "session": "oVT25",
    "stn": "2",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Hematologi",
    "family": "Hematologi: lymfkörtelstatus, anemi och blödning",
    "topic": "Anemi",
    "title": "Anamnes vid orkeslöshet",
    "comp": [
     "STAT",
     "ANAM"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Anamnes nedsatt ork\nEn 46-årig kvinna kommer till akutmottagningen då hon sedan 4-5 dagar inte har orkat anstränga sig lika mycket som tidigare, det känns tungt i bröstet.\nDu ska:\n• Komplettera anamnesen avseende hjärta och lungor\n• Informera patienten om rimliga differentialdiagnoser samt vidare handläggning\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Efterfrågar riskfaktorer för hjärt-kärl sjukdom och lungsjukdom inkl. venös trombo- embolism (VTE)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utför en adekvat hjärt-lunganamnes",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår rimliga differentialdiagnoser utifrån anamnesen",
       "max": 3,
       "opts": [
        3,
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Planerar för initial utredning och handläggning på akuten",
       "max": 3,
       "opts": [
        3,
        1.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hema"
   },
   "oVT25|3": {
    "key": "oVT25|3",
    "session": "oVT25",
    "stn": "3",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Hjärtstatus, blåsljud och EKO-fynd",
    "topic": "Hjärtstatus",
    "title": "Cirkulationsstatus och hjärtstatus",
    "comp": [
     "STAT",
     "RESON"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är underläkare på en hälsocentral.\nEn lätt överviktig 57-årig man kommer till din mottagning efter att hypertoni hittats av företagshälsovården vid hälsokontroll på arbetet. Aktuellt blodtryck 170/110. EKG finns.\nMannen mår bra och har aldrig haft ont i bröstet.\nSom en del i utredningen ska du göra ett hjärtstatus. Redogör under genomförandet vad och vilket område du undersöker och samt vilka eventuella fynd du gör.\nAvsluta med att föreslå och motivera ev. fortsatt utredning relaterade till dina statusfynd.\nIngen ytterligare anamnes ska tas.\nStatus utförs på Harvey-docka.\nKommunikation sker till bedömare som verbalt agerar patient på stationen.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Palperar och inspekterar bröstkorgen",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Auskulterar systematiskt alla positioner",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anger vilken hjärtklaff som hörs var",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Anger korrekt avvikande fynd, 1-2p (carotisblåsljud vä sida 1 p, extraton U.N.S. över apex 1p). Vid tillägg av ett upplevt klaffblåsljud som ej finns, endast 1 p (delvis tillfredställande)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår hjärtultraljud",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår ultraljud carotis",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rimlig motivering till föreslagna undersökningar",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information/motivering på ett för en patient begripligt sätt",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hjartstatus"
   },
   "oVT25|5": {
    "key": "oVT25|5",
    "session": "oVT25",
    "stn": "5",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Geriatrik",
    "family": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård",
    "topic": "Läkemedelsbiverkan",
    "title": "Bedöma läkemedelspåverkan",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "En 75-åring söker för misstänkt biverkan av blodförtunnande Trombyl 75 mg x 1 (Acetylsalicylsyra). Insatt för en månad sedan pga TIA.\nUndersökningsfynd före besöket:\n• Blodtryck: 120/70 mmHg\n• EKG: sinusrytm, puls 70/minut\n• Normala rutinprover inklusive blodvärde (Hb), blodplättar och PK.\nDu ska:\n• Ta en adekvat anamnes, både bakgrund och aktuellt problem\n• Bedöm och informera patienten om det kan vara en läkemedelsbiverkan\n• Bedöm om medicinändring är nödvändig, ändra i så fall i samråd med patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Inledning och struktur",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar upp en anamnes som är relevant avseende bakgrunden",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar upp en anamnes som är relevant avseende den aktuella kliniska situationen",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Gör en rimlig bedömning om det är en läkemedelsbiverkan och informerar begripligt tillpatienten",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Gör en rimlig ändring i patientens läkemedelslista och förankrar med patienten",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "geriatrik"
   },
   "oVT25|6": {
    "key": "oVT25|6",
    "session": "oVT25",
    "stn": "6",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Lunga",
    "family": "Lungstatus och diktat",
    "topic": "Lungstatus",
    "title": "Lungstatus med diktering",
    "comp": [
     "STAT",
     "DOK"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "På hälsocentralen söker en patient med oklara luftvägsbesvär.\nNär du träffar patienten ska du:\n• Genomföra lungstatus\n• Diktera dina fynd\nDu behöver inte ta anamnes\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Perkussion",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Auskultation A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Auskultation B",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Auskultation C",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Systematiskt genomförande",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Inspektion",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Perkussion",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Auskultation",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet – delmoment A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet – delmoment B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet – delmoment C",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "lungstatus"
   },
   "oVT25|7": {
    "key": "oVT25|7",
    "session": "oVT25",
    "stn": "7",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Allmänmedicin",
    "family": "Hypertoni: blodtrycksbedömning och riskbedömning",
    "topic": "Hypertensiv kris",
    "title": "Hypertensiv kris",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är läkare på medicinakuten. Där finns många patienter som inte träffat läkare ännu och du försöker få en överblick över dem. Du gör en snabb, första bedömning av en 24-årig patient som söker på grund av högt blodtryck och som är triagerad som orange.\nTriagesköterskan har dokumenterat följande:\nLuftväg: Fri. Syremättnad: 94% utan extra syrgas Andningsfrekvens: 26/min Blodtryck: 240/110 mmHg, båda armar Puls: 94/min Vakenhetsgrad: Vaken och alert Kroppstemperatur: 36,8 °C\nDu ska:\n• Ta en kort anamnes som är relevant i situationen\n• Genomföra relevanta statusmoment för att kunna prioritera handläggningen\n• Kommer fram till en plan för initial utredning av patienten under den första timmen på akutmottagningen. Ditt differentialdiagnostiska resonemang och planerad initial utredning skall du kort förklara för patienten (ej för bedömaren)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Anamnes (subjektiva symptom)",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes (objektiva symptom)",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Status",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Differentialdiagnostiskt resonemang",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Planerad utredning",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtalsföring, struktur",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hypertoni"
   },
   "oVT25|9": {
    "key": "oVT25|9",
    "session": "oVT25",
    "stn": "9",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Hjärtstatus, blåsljud och EKO-fynd",
    "topic": "Aortastenos",
    "title": "Tät aortastenos",
    "comp": [
     "STAT",
     "RESON"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är underläkare på en vårdcentral. Din nästa patient är 50 år gammal och har pga ett blåsljud gjort en ultraljudsundersökning. Hen är sedan tidigare frisk och äter inga mediciner.\nDu ska inte genomföra någon statusundersökning. Ur journal från föregående besök framgår att patienten har ett tydligt systoliskt blåsljud med PM I2 höger och utstrålning mot carotider. Inga ödem. Normal auskultation av lungor. Blodtryck mätt vid flera tillfällen kring 130/80 mmHg.\nDin uppgift är att:\n• tolka ekoutlåtande\n• ta en riktad anamnes baserad på ekoutlåtandet\n• presentera ett förslag på vidare handledning till patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Adekvat funktionsanamnes",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tillfredställande syntes av eko och anamnes",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt vidare utredningsgång",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förklaring av fynd och vidare handläggning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hjartstatus"
   },
   "oVT25|10": {
    "key": "oVT25|10",
    "session": "oVT25",
    "stn": "10",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Endokrinologi",
    "family": "Tyreoidea och endokrin utredning",
    "topic": "Graves status",
    "title": "Graves – status",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "En 28-årig tidigare frisk patient söker på vårdcentralen för tilltagande besvär med trötthet, hjärtklappning, svettningar, skakningar och humörsvängningar sedan 1–2 månader. Patienten har också gått ner i vikt 3 kg på 6 veckor utan att anstränga sig. Blodtryck 130/85 mmHg. Provtagning inför besöket visar bl.a.:\nTSH <0,005 mIU/L (0,27–4,2) fT4 45 pmol/L (12–22)\nDin uppgift är:\n• Gör ett status för att eftersöka de viktigaste fynden. Berätta för bedömaren vad du gör och vilka fynd du letar efter.\n• Diktera dina statusfynd i en journalanteckning, börja med ”Status:….”\n• Du ska inte ta upp någon anamnes\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Bedömer förekomst av finvågig tremor med utsträckta armar.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Undersöker ögonen efter ev. exoftalmus, periorbitalt ödem, motilitet, rodnad.",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Bedömer hjärtfrekvens och rytm (tachykardi och/eller förmaksflimmer)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Inspektion av tyreoidea",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palpation av tyreoidea bakifrån",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Bimanuell palpation av tyreoidea",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar på rätt lokal",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palpation under sväljning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Dikterar statusfynd korrekt",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Bemötande och information/kommunikation under status på lekmannaspråk.",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "tyreoidea"
   },
   "oVT25|11": {
    "key": "oVT25|11",
    "session": "oVT25",
    "stn": "11",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "BFM",
    "family": "Bilddiagnostik: akut radiologi",
    "topic": "Strokelarm",
    "title": "Strokelarm – bildtolkning",
    "comp": [
     "BILD"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är läkarassistent på röntgenavdelningen på mindre sjukhus. Strokelarmet går och ni får in följande remiss:\n”80-årig kvinna, multisjuk, står på eliquis. Hittad av hemtjänst på golvet. Hemiparetisk vänster sida. Blödning? Ischemi?”\nAT-läkaren som handlagt patienten följer med till DT-labbet och kommer ställa frågor om undersökningen.\nDina uppgifter är att:\n• Läsa och värdera kvaliteten på röntgenremissen.\n• Själv granska en akut DT hjärna, visa och förklara ev. fynd och resonera om uppkomstmekanism med kollegan.\n• Besvara frågeställningarna: Blödning? Ischemi?\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Färdighet 1 (stackorientering)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Färdighet 2 (fönstring)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fynd 1 (identifikation och motivering)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Fynd 1 (lokalisation)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Fynd 1 finns det dense vessel?",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utesluta fynd",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": true
      },
      {
       "t": "Remissuppgift",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "bfm"
   },
   "oVT25|13": {
    "key": "oVT25|13",
    "session": "oVT25",
    "stn": "13",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Gastroenterologi",
    "family": "Gastro: ont i magen, akut buk och IBD",
    "topic": "Dyspepsi",
    "title": "Anamnes vid dyspepsi",
    "comp": [
     "ANAM",
     "STAT"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Patient 74 år söker för besvär med illamående och matleda. Du ska ta anamnes och föreslå initial utredning\n(Du ska INTE göra bukstatus på denna station)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Professionellt bemötande",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kommunikativ förmåga",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår lämplig initial utredning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Får ut rimlig information ur anamnesen",
       "max": 5,
       "opts": [
        5,
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "gastro_buk"
   },
   "oVT25|14": {
    "key": "oVT25|14",
    "session": "oVT25",
    "stn": "14",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Infektion",
    "family": "Basal hygienrutin och personlig skyddsutrustning",
    "topic": "Basala hygienrutiner",
    "title": "Basal hygien och PPE vid klinisk undersökning",
    "comp": [
     "PROC"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är avdelningsläkare på medicinavdelning, januari 2025. Du ska gå in till en patient i 60-års ålder och undersöka lungorna. Patienten har ett dygns anamnes med torrhosta, tungandning, halsont, bröstsmärta och 39 graders feber. Arbetsdiagnosen är virusorsakad respiratorisk infektion. Patienten är medtagen och behöver din hjälp för att orka sätta sig upp i sängen.\nDu ska:\n• På sittande patient lyssna på patientens lungor på ett sätt som skyddar dig själv och andra mot smitta\n• Följ basala hygienrutiner och rutiner för användande av personlig skyddsutrustning\nAnvänd ditt eget stetoskop. Har du inte ett eget stetoskop använd det som finns på stationen ”som om det vore ditt personliga”.\nDu ska INTE undersöka annat i status eller ta anamnes.\nDu ska INTE göra någon värdering av auskultationsfynd.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Korrekt arbetsdress",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekta åtgärder enligt basal hygienrutin inför undersökning i form av handdesinfektion med handsprit",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt vald personlig skyddsutrustning (PPE) för att skydda arbetsdräkten i en situation där det är sannolikt att arbetsdräkten kommer i kontakt med biologiskt material från patienten",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt valt tillägg i personlig skyddsutrustning (PPE) vid misstänkt smittsam virusorsakad respiratorisk infektion",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Vald personlig skyddsutrustning (PPE) är korrekt buren/fastsatt",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt hantering av stetoskop",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt avtagande av personlig skyddsutrustning (PPE)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekta åtgärder enligt basal hygienrutin efter undersökning i form av handdesinfektion med handsprit",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hygien"
   },
   "oVT25|15": {
    "key": "oVT25|15",
    "session": "oVT25",
    "stn": "15",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Lunga",
    "family": "Pneumotorax, pleuravätska och arteriell blodgas",
    "topic": "Blodgas",
    "title": "Arteriell blodgas",
    "comp": [
     "RESON",
     "PROC"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är BT-läkare på en medicinavdelning. En patient som sökt för andnöd har kommit in under natten. Sjuksköterska rapporterar på rond att syremättnad på morgonen är 90% och andningsfrekvensen är 22/min. Ansvarig överläkare på avdelningen ber dig ta en artärgas på patienten.\nI rummet finns förutom en patient även en artärgasattrapp och utrustning för artärgasprovtagning\nDin uppgift är följande:\n• Genomför en arteriell provtagning på patienten.\nBetrakta attrappen som din patients arm. (Patienten/medhjälparen assisterar med pumpning, så att attrappen får palpabel puls.)\nLämna sprutan vid attrappen när du är klar.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Utförande",
       "max": 5,
       "opts": [
        5,
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kommunikation",
       "max": 5,
       "opts": [
        5,
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "lungproc"
   },
   "oVT25|16": {
    "key": "oVT25|16",
    "session": "oVT25",
    "stn": "16",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Allmänmedicin",
    "family": "Trötthet och orkeslöshet: anamnes och differentialdiagnoser",
    "topic": "Trötthet",
    "title": "Trötthet och differentialdiagnoser i primärvård",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du arbetar som läkare på en hälsocentral. På dagens mottagning träffar du en patient som sökt på grund av ökad trötthet sedan ungefär ett halvår tillbaka.\nDet finns aktuella provsvar i journalen (utförda med anledning av annan kontaktorsak än dagens): blodtryck 140/90 mmHg, vilopuls 92/min, HbA1c 42 mmol/mol, totalkolesterol 5,4 mmol/L, HDL 1,1 mmol/L, triglycerider 2,3 mmol/L. Leverprover, Hb, SR/CRP, TSH och kreatinin är normala.\nDin uppgift är att:\n• Ta en relevant anamnes utifrån principerna för den patientcentrerade konsultationsmodellen.\n• Ta en relevant anamnes avseende möjliga orsaker till patientens trötthet.\n• Resonera kring möjliga differentialdiagnoser\n• Kommunicera en preliminär bedömning och plan.\nDu ska INTE undersöka patienten.\nDu ska INTE ta ställning till eventuell behandling eller vidare utredning.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Patientcentrerad konsultation – delmoment A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientcentrerad konsultation – delmoment B",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientcentrerad konsultation – delmoment C",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientcentrerad konsultation – delmoment D",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientcentrerad konsultation – delmoment E",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientcentrerad konsultation – delmoment F",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientcentrerad konsultation – delmoment G",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Riktad anamnes utifrån kontaktorsak trötthet, inkl. levnadsvanor – delmoment A",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Riktad anamnes utifrån kontaktorsak trötthet, inkl. levnadsvanor – delmoment B",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Riktad anamnes utifrån kontaktorsak trötthet, inkl. levnadsvanor – delmoment C",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Riktad anamnes utifrån kontaktorsak trötthet, inkl. levnadsvanor – delmoment D",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Riktad anamnes utifrån kontaktorsak trötthet, inkl. levnadsvanor – delmoment E",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Riktad anamnes utifrån kontaktorsak trötthet, inkl. levnadsvanor – delmoment F",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Råd om levnadsvanor – delmoment A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Råd om levnadsvanor – delmoment B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "trotthet"
   },
   "oVT25|17": {
    "key": "oVT25|17",
    "session": "oVT25",
    "stn": "17",
    "date": "2025-08-29",
    "year": 2025,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "OMOSCE I VT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet.\nVad gör du?\n(Patienten är bekräftat COVID-negativ)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I VT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kontroll av medvetande (ruska om, ropa)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning. Öppnar luftvägen och håller den öppen genom hela kontrollen",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning: titta, lyssna, känn (ca 10 sek)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Larmar (på larmknapp i rummet, alt ropar på hjälp)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Utfört kompressioner med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört kompressioner med total medelhastighet 100-120/min",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört inblåsningar med minst 80% godkända",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hlr"
   },
   "HT25|1": {
    "key": "HT25|1",
    "session": "HT25",
    "stn": "1",
    "date": "2026-01-15",
    "year": 2026,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Kardiologi",
    "family": "Dyspné: hjärtsvikt eller lungsjukdom",
    "topic": "Akut dyspné",
    "title": "Andnöd på akutmottagning",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du arbetar som primärjour på akutmottagning och träffar en 42-årig patient som söker för plötsligt påkommen andnöd och andningskorrelerad bröstsmärta. Från triagesköterskan får du följande uppgifter:\n•  Fri luftväg\n•  Saturation på rumsluft 92%\n•  Andningsfrekvens 31/min\n•  Blodtryck 122/69 mmHg\n•  Puls 110/min\n•  Temperatur 37,1 °C Patienten är helt frisk sedan tidigare, tar inga läkemedel, har aldrig rökt och är inte allergisk mot något. EKG är taget och visar sinustakykardi. I övrigt helt normalt EKG. Hjärta auskulteras med snabb, regelbunden rytm. Inga hörbara bi- eller blåsljud.\nDu ska:\n•  Ta riktad anamnes\n•  Genomföra riktat status utifrån aktuell symptombild\n•  Informera patienten om vilken diagnos som är mest sannolik samt vilken fortsatt utredning du planerar i första hand\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Anamnes kring aktuellt tillstånd",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lungstatus",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Status underben",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Sannolik diagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Plan för fortsatt utredning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "dyspne"
   },
   "HT25|2": {
    "key": "HT25|2",
    "session": "HT25",
    "stn": "2",
    "date": "2026-01-15",
    "year": 2026,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Gastroenterologi",
    "family": "Gastro: ont i magen, akut buk och IBD",
    "topic": "Ulcerös kolit",
    "title": "Ulcerös kolit",
    "comp": [
     "ANAM",
     "STAT"
    ],
    "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du arbetar på akutmottagningen. En patient med ulcerös kolit söker för att hen mår dåligt.\nDu ska:\n•  ta en anamnes\n•  utföra ett riktat status\n•  samt föreslår handläggning för patienten. Kem lab: Hb 101 g/l, CRP 43.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Får ut lämplig information ur anamnesen",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar diarréanamnes inom 1 minut",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Prioriterar statusunderöskning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utför lämpligt status och tolkar detta rätt",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förklarar till patienten planerad utredning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "gastro_buk"
   },
   "HT25|3": {
    "key": "HT25|3",
    "session": "HT25",
    "stn": "3",
    "date": "2026-01-15",
    "year": 2026,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Lunga",
    "family": "KOL, spirometri och obstruktiv/restriktiv lungsjukdom",
    "topic": "Spirometri",
    "title": "Tolka spirometri",
    "comp": [
     "RESON",
     "KOMM"
    ],
    "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är BT-läkare på en vårdcentral och har träffat en 58-årig patient som söker för andnöd och hosta. Patienten är före detta rökare (slutade för 3 år sedan), tidigare frisk. Har andnöd vid ansträngning senaste året och torrhosta. VITALPARAMETRAR\n- Puls: 74/min\n- AF: 16/min\n- SpO₂: 96% (luft)\n- BT: 130/80\n- Temp: 36.7°C UTREDNING REDAN UTFÖRD\n- Spirometri med reversibilitetstest (se utskrift)\nDin uppgift är att:\n1. Tolka spirometrin och reversibilitetstestet\n2. Informera patienten om resultatet på ett sätt som patienten förstår\n3. Förklara vad resultatet betyder\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tolka spirometriresultat",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tolka reversibilitetstest",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar patienten muntligt på god lekmanna-svenska",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bemöta och kommunicera med patient på professionellt sätt",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "kol"
   },
   "HT25|5": {
    "key": "HT25|5",
    "session": "HT25",
    "stn": "5",
    "date": "2026-01-15",
    "year": 2026,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Kardiologi",
    "family": "Bröstsmärta: AKS, perimyokardit och EKG",
    "topic": "Perimyokardit",
    "title": "Perimyokardit",
    "comp": [
     "ANAM",
     "RESON",
     "KOMM"
    ],
    "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är medicinjour på sjukhusets akutmottagning. En sjuksköterska ber dig undersöka en 30-årig man som söker på grund av bröstsmärtor. EKG är taget. Sjuksköterskan har kontrollerat vitalparametrar:\nTemp 37,9 Puls 84/min Saturation 95% Blodtryck 135/85 AF 18/min\nDin uppgift är att:\n•  Ta anamnes\n•  Tolka EKG\n•  Föreslå provtagning och utredning\n•  Informera patienten om den mest sannolika diagnosen och fortsatt handläggning\nDu ska inte utföra status.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Förmåga att ta kompletterande anamnes",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bemötande och kommunikation",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "EKG-tolkning och förslag på utredning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att förmedla adekvat information till patienten",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "aks"
   },
   "HT25|6": {
    "key": "HT25|6",
    "session": "HT25",
    "stn": "6",
    "date": "2026-01-15",
    "year": 2026,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Endokrinologi",
    "family": "Tyreoidea och endokrin utredning",
    "topic": "Hypotyreos/Levaxin",
    "title": "Levaxin – information",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Patient, 39 år, söker hälsocentralen för trötthet och viktuppgång. Puls: regelbunden, 80/minut SpO2 99% Blodtryck 120/80 mmHg Temp 37,0°C Prover inför besöket:\nCRP <3 mg/L (<3) Hb 130 g/L (117–153 g/L) B-glukos 5,6 mmol/L TSH 4,71 mIU/L (0,27–4,2)\nDin uppgift är att:\n1. Ta en riktad anamnes baserat på symtom och provsvar\n2. Palpera sköldkörteln\n3. Ta beslut om fortsatt handläggning och beskriv denna för patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Anamnes - aktuella symtom",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes – tidigare sjukdomar + aktuella läkemedel",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes – psykosocial situation, alkohol, droger",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palpation tyreoidea",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kliniskt resonemang och åtgärd",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Information om fortsatt handläggning på ett för patienten tydligt sätt",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att utöva ett patientcentrerat förhållningssätt",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "tyreoidea"
   },
   "HT25|7": {
    "key": "HT25|7",
    "session": "HT25",
    "stn": "7",
    "date": "2026-01-15",
    "year": 2026,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Klinisk farmakologi",
    "family": "Receptförskrivning",
    "topic": "Receptförskrivning",
    "title": "Receptförskrivning",
    "comp": [
     "ORD",
     "KOMM"
    ],
    "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du arbetar som BT-läkare på en akutmottagning. En patient har sökt för infektionssymptom med feber (mer info om detta finns på rummet). Efter utredning samt konsultation med bakjour har det bestämts att patienten ska behandlas polikliniskt.\nDin uppgift är att\n1. Skriva ett korrekt pappersrecept på det antibiotika- preparat som finns specificerat inne på rummet\n2. Informera patienten muntligt om behandlingen Statusundersökning ska inte utföras.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Receptförskrivning",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Information",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bemötande",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "recept"
   },
   "HT25|8": {
    "key": "HT25|8",
    "session": "HT25",
    "stn": "8",
    "date": "2026-01-15",
    "year": 2026,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Njurmedicin",
    "family": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)",
    "topic": "Elektrolyt/diures",
    "title": "SBAR – samtal med ssk om patient jourtid",
    "comp": [
     "SBAR",
     "ORD"
    ],
    "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är primärjour medicin. Klockan är strax över midnatt och din bakjour har precis meddelat att hen lägger sig. Det finns lagom med patienter kvar på akuten att jobba med. Då går sökaren, du känner igen medicinavdelningens nummer. Inne på rummet finns det en telefon. Ring tillbaka, och hör vad det gäller.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Egen situation",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående bakgrund",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående det akuta (1)",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående det akuta (2)",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt läkemedel",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordination",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Planering",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtalsstruktur",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "njure_ssk"
   },
   "HT25|9": {
    "key": "HT25|9",
    "session": "HT25",
    "stn": "9",
    "date": "2026-01-15",
    "year": 2026,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Allmänmedicin",
    "family": "Levnadsvanor och motiverande samtal",
    "topic": "Tobak",
    "title": "Tobaksanamnes",
    "comp": [
     "KOMM",
     "ANAM"
    ],
    "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du arbetar på hälsocentralen och träffar en patient som är rökare. Hen har nyligen fått diagnosen KOL.\nDin uppgift är att:\n•  Ta en fullständig tobaksanamnes.\n•  Hålla ett kort motiverande/rådgivande samtal om rökning med patienten.\nDu ska inte\n- ta KOL-anamnes eller ge information om KOL.\n- informera om läkemedelsbehandling mot KOL.\n- undersöka patienten.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tobaksanamnes – delmoment A",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tobaksanamnes – delmoment B",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tobaksanamnes – delmoment C",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tobaksanamnes – delmoment D",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtal om rökstopp – delmoment A",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtal om rökstopp – delmoment B",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtal om rökstopp – delmoment C",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtal om rökstopp – delmoment D",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet – delmoment A",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet – delmoment B",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "levnadsvanor"
   },
   "HT25|11": {
    "key": "HT25|11",
    "session": "HT25",
    "stn": "11",
    "date": "2026-01-15",
    "year": 2026,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Allmänmedicin",
    "family": "Hypertoni: blodtrycksbedömning och riskbedömning",
    "topic": "Dygnsblodtryck",
    "title": "24-timmars blodtryck",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "På denna station möter du en patient som genomfört en 24- timmars blodtrycksmätning. Hen kommer till dig på hälsocentralen för att få besked om vad mätningen visade.\nDin uppgift är att:\n•  Tolka mätningen utifrån resultat och validitet\n•  Informera patienten om resultatet\n•  Ta en relevant anamnes utifrån blodtrycksresultatet OBS! Klinisk undersökning och behandlingsförslag ingår INTE i uppgiften\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Inleder med en öppen invitation",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar efter tanke – oro - önskan",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tolkar mätningen korrekt dvs ställer hypertonidiagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Berör mätningens validitet (97% dvs pålitlig mätning)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att ta en relevant anamnes avseende sjukdomshistorik och riskfaktorer ( ex tidigare sjukdomar, läkemedel, kost, motion, nikotin, ärftlighet, alkohol)",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att ta relevant anamnes avseende aktuella symptom",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Förvissar sig om att patienten förstått informationen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hypertoni"
   },
   "HT25|12": {
    "key": "HT25|12",
    "session": "HT25",
    "stn": "12",
    "date": "2026-01-15",
    "year": 2026,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Geriatrik",
    "family": "Kognitiv skattning (MMSE) och demensutredning",
    "topic": "Demensutredning",
    "title": "Basal demensutredning",
    "comp": [
     "PROC",
     "KOMM"
    ],
    "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Din nästa patient på vårdcentralen är en 61-åring som söker för första gången för minnesproblem.\nDin uppgift är att:\n•  Ta anamnes kring aktuellt och bakgrund\n•  Informera patienten om rimlig arbetsdiagnos och föreslå fortsatt utredning\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Anamnes – aktuellt problem",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes – bakgrund",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Fastställa rimlig arbetsdiagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rimlig handläggningsplan",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kunna förklara handläggningsplanens delar",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientcentrerat förhållningssätt",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "kognition"
   },
   "HT25|13": {
    "key": "HT25|13",
    "session": "HT25",
    "stn": "13",
    "date": "2026-01-15",
    "year": 2026,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Infektion",
    "family": "Infektion: handläggning, rond och information",
    "topic": "Rosfeber",
    "title": "Handläggning av rosfeber",
    "comp": [
     "ANAM",
     "ORD",
     "KOMM"
    ],
    "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är AT-läkare vid en hälsocentral. Du ska bedöma och handlägga en 29-årig patient med svullet rött ben. Patienten har varit sjuk i en dag med plötsligt påkommande feber 39,5°, frossa och ett ben som gör ont och är svullet och rött. Patienten är rökare och typ I diabetiker.\nDin uppgift är att:\n•  Göra en riktad klinisk undersökning av det organ du bedömer är infekterat\n•  Ange trolig diagnos och bedöm svårighetsgrad.\n•  Muntligen ordinera: provtagning, vårdnivå och behandling av patienten utifrån din bedömning\n•  Förklara din bedömning för patienten, vad du gör och varför\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Studenten presenterar sig för patienten och förklarar vad han/hon ska göra?",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bedömer patientens allmäntillstånd (konfusion, fråga om vätskeintag, urinproduktion, andningsfrekvens)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Undersöker benet och känner efter artärpulsar i fötterna",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar korrekt provtagning i form av svalgprov för Strep A, ev CRP.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar patienten om diagnosen och sin bedömning (rosfeber)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar om eventuell allergi mot läkemedel (pencillin mfl)?",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Ordinerar korrekt antibiotika – (Klindamycin)?",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar högläge i konvalescensfas",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förklarar adekvat vilket sjukdomsförlopp patienten ska förvänta sig.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kommunikationen med patient är adekvat och för patienten begriplig",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "infektion"
   },
   "HT25|14": {
    "key": "HT25|14",
    "session": "HT25",
    "stn": "14",
    "date": "2026-01-15",
    "year": 2026,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet. Vad gör du? (Patienten är bekräftat COVID-negativ)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kontroll av medvetande (ruska om, ropa)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning. Öppnar luftvägen och håller den öppen genom hela kontrollen",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning: titta, lyssna, känn (ca 10 sek)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Larmar (på larmknapp i rummet, alt ropar på hjälp)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Utfört kompressioner med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört kompressioner med total medelhastighet 100-120/min",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört inblåsningar med minst 80% godkända",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hlr"
   },
   "HT25|16": {
    "key": "HT25|16",
    "session": "HT25",
    "stn": "16",
    "date": "2026-01-15",
    "year": 2026,
    "type": "Ordinarie",
    "term": "HT",
    "spec": "Kardiologi",
    "family": "Dyspné: hjärtsvikt eller lungsjukdom",
    "topic": "Dyspné",
    "title": "Andfåddhet",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "OSCE I HT25 - BEDÖMNINGSMALLAR.pdf",
    "door": {
     "text": "Du är BT-läkare på en hälsocentral. En 46-årig kvinna söker för minst 6 månadernas anamnes på tilltagande andfåddhet. Blodtryck 124/82. Saturation 92 %. EKG är taget.\nDin uppgift är att:\n•  Ta en adekvat anamnes\n•  Tolka EKG\n•  Bestämma fortsatt handläggning\n•  Svara på patientens följdfrågor\nDu skall inte utföra status!\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OSCE I HT25 - DÖRRINFORMATION.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tar adekvat anamnes, inklusive rökning och funktion",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Genomför anamnestagning och kommunicerar om avvikelser på ett strukturerat och adekvat sätt",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tolkar EKG korrekt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar om fortsatt utredning/förslag på utredning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår rimlig diagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "dyspne"
   },
   "oHT25|1": {
    "key": "oHT25|1",
    "session": "oHT25",
    "stn": "1",
    "date": "2026-02-20",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Lunga",
    "family": "Lungstatus och diktat",
    "topic": "Lungstatus",
    "title": "Lungstatus med diktering",
    "comp": [
     "STAT",
     "DOK"
    ],
    "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "door": {
     "text": "Ex-rökande tidigare väsentligen frisk 77-årig kvinna söker på hälsocentralen på grund av successivt tilltagande andfåddhet och rethosta sedan ungefär ett halvår tillbaka. Från att tidigare ha kunnat ta långa promenader, blir hon nu andfådd efter ca 100 meters gång.\nDu ska:\n• Genomföra lungstatus\n• Redogöra för ditt undersökningsfynd samt sannolik diagnos i en journalanteckning, dvs genom ett diktat Du behöver inte ta anamnes eller återkoppla undersökningsfyndet till patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Status",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Diktat",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionalitet",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "lungstatus"
   },
   "oHT25|2": {
    "key": "oHT25|2",
    "session": "oHT25",
    "stn": "2",
    "date": "2026-02-20",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Endokrinologi",
    "family": "Tyreoidea och endokrin utredning",
    "topic": "Graves status",
    "title": "Graves – status",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "door": {
     "text": "En 28-årig tidigare frisk patient söker på vårdcentralen för tilltagande besvär med trötthet, hjärtklappning, svettningar, skakningar och humörsvängningar sedan 1–2 månader. Patienten har också gått ner i vikt 3 kg på 6 veckor utan att anstränga sig. Blodtryck 130/85 mmHg. Provtagning inför besöket visar bl.a.:\nTSH <0,005 mIU/L (0,27–4,2) fT4 45 pmol/L (12–22)\nDin uppgift är att:\n• Göra ett status för att eftersöka de viktigaste fynden. Berätta för bedömaren vad du gör och vilka fynd du letar efter.\n• Diktera dina statusfynd i en journalanteckning, börja med ”Status:….”\nDu ska inte ta upp någon anamnes\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Bedömer förekomst av finvågig tremor med utsträckta armar.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Undersöker ögonen efter ev. exoftalmus, periorbitalt ödem, motilitet, rodnad.",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Bedömer hjärtfrekvens och rytm (tachykardi och/eller förmaksflimmer)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Inspektion av tyreoidea",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palpation av tyreoidea bakifrån",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Bimanuell palpation av tyreoidea",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar på rätt lokal",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palpation under sväljning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Dikterar statusfynd korrekt",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Bemötande och information/kommunikation under status på lekmannaspråk.",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "tyreoidea"
   },
   "oHT25|3": {
    "key": "oHT25|3",
    "session": "oHT25",
    "stn": "3",
    "date": "2026-02-20",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Diabetes/Angiologi",
    "family": "Fotstatus och perifer cirkulation",
    "topic": "Diabetesfot",
    "title": "Undersökning av diabetesfot",
    "comp": [
     "STAT",
     "KOMM"
    ],
    "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "door": {
     "text": "På denna station möter du Johan 70 år som nyligen diagnosticerats med diabetes. Han medicinerar med Metformin samt Salures. HbA1c 50.\nUppgiften är att genomföra fotundersökning vid diabetes samt informera patienten om din bedömning av fotstatus och besvara hennes frågor. Övrig klinisk undersökning och behandlingsförslag ingår ej i uppgiften.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Undersöker patienten utifrån ett patientcentrerat förhållningssätt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Inspektion av fötter",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Cirkulation: palperar a dorsalis pedis bilateralt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Cirkulation: palperar a tibialis posterior bilateralt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar vibrationssinne: tumbas",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar vibrationssinne: fötter",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar känsel: på hand",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar känsel: på fötter",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Samlad slutbedömning till patient",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Besvarar patientens fråga korrekt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "diabetesfot"
   },
   "oHT25|4": {
    "key": "oHT25|4",
    "session": "oHT25",
    "stn": "4",
    "date": "2026-02-20",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Njurmedicin",
    "family": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)",
    "topic": "Diures",
    "title": "Samtal med ssk om diures jourtid",
    "comp": [
     "SBAR",
     "ORD"
    ],
    "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "door": {
     "text": "Du är primärjour medicin. Klockan är strax över midnatt och din bakjour har precis meddelat att hen lägger sig. Det finns lagom med patienter kvar på akuten att jobba med. Då går sökaren, du känner igen medicinavdelnings nummer. Inne på rummet finns det en telefon. Ring tillbaka, och hör vad det gäller.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Egen situation",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående bakgrund",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående det akuta (1)",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga angående det akuta (2)",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt läkemedel",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordination",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Planering",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtalsstruktur",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "njure_ssk"
   },
   "oHT25|5": {
    "key": "oHT25|5",
    "session": "oHT25",
    "stn": "5",
    "date": "2026-02-20",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Infektion",
    "family": "Infektion: handläggning, rond och information",
    "topic": "Gastroenterit/sepsis",
    "title": "Rond av patient med kräkning och feber",
    "comp": [
     "ANAM",
     "ORD",
     "KOMM"
    ],
    "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "door": {
     "text": "Du är underläkare på infektionsavdelningen och ska ronda en patient som lades in under natten med feber och kräkningar. Preliminär diagnos:\ngastroenterit. Patienten har fått 1000 ml Ringer-Acetat. Aktuella vitalparametrar och kemlab-resultat finns utskrivna i rummet.\nDin uppgift är att:\n• Ta en riktad och strukturerad anamnes\n• Värdera och tolka vitalparametrar och kemlab-resultat samt förklara för patienten\n• Informera patienten om\n- din preliminära diagnos\n- planerad utredning och behandling\nDu ska inte undersöka patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Förmåga att fånga detaljer kring aktuella symptom",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att ta epidemiologisk anamnes",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar viktigaste punkterna i bakgrundsanamnes",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Värdera vitalparametrar och kemlab-svar och informerar patienten",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ordinerar blododl x 2 och urinodling samt kontroller x 6–12",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Ordinerar korrekt antibiotika iv efter odlingar (p.o. endast 1p)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar patienten om korrekt diagnos på ett professionellt sätt och efterhör ev frågor",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "infektion"
   },
   "oHT25|6": {
    "key": "oHT25|6",
    "session": "oHT25",
    "stn": "6",
    "date": "2026-02-20",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Kardiologi",
    "family": "Hjärtstatus, blåsljud och EKO-fynd",
    "topic": "Hjärtstatus",
    "title": "Hjärtstatus",
    "comp": [
     "STAT",
     "RESON"
    ],
    "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "door": {
     "text": "Du är BT-läkare på akutmottagningen. En 25-årig man söker på grund av ont i bröstet som har försämrats under några dagar. Temp 38,5°. Blt 115/75. Lungor ua. Troponin T 246 ng/l, proBNP 590 ng/l. CRP 68 mg/l.\nDin uppgift är att:\n• Komplettera anamnes med patienten\n• Gör hjärtstatus (använd Harvey-dockan för det momentet)\n• Tolka EKG\n• Föreslå handläggning\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tar adekvat anamnes",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utför rimligt hjärtstatus och identifierar ev. fynd",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att adekvat och begripligt informera rimlig diagnos och åtgärdsplan",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tolkar EKG korrekt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bjuder in till frågor och svarar adekvat på dessa",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hjartstatus"
   },
   "oHT25|8": {
    "key": "oHT25|8",
    "session": "oHT25",
    "stn": "8",
    "date": "2026-02-20",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Geriatrik",
    "family": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård",
    "topic": "Läkemedelsbiverkan",
    "title": "Läkemedelsbiverkan",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "door": {
     "text": "En 69-åring söker för nydebuterat illamående, kräkning, diarré och buksmärta. Undersökningsfynd före besöket (sjuksköterskemätt):\n• Blodtryck: 145/90 mmHg\n• Temp 37,0\n• Kapilärt Glukos 6,5\nDin uppgift är att:\n• Ta en adekvat anamnes, både bakgrund och aktuellt problem\n• Fastställa rimlig arbetsdiagnos\n• Informera patienten om din handläggningsplan\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Inledning och struktur på samtal",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar upp en anamnes som är relevant avseende bakgrunden",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar upp en anamnes som är relevant avseende den aktuella kliniska situationen",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Gör en rimlig bedömning om det är en läkemedelsbiverkan och informerar begripligt till patienten",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Gör en ändring i patientens läkemedelslista",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "geriatrik"
   },
   "oHT25|9": {
    "key": "oHT25|9",
    "session": "oHT25",
    "stn": "9",
    "date": "2026-02-20",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Gastroenterologi",
    "family": "Gastro: förhöjda leverprover (kolestas)",
    "topic": "Kolestas",
    "title": "Trötthet – förhöjda leverprover",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "door": {
     "text": "Du arbetar på en vårdcentral och har tagit leverprover på en kvinna 60 år gammal som söker för att hon känner sig trött. Proverna visar ALP 6,6 (ref <1,9) µkat/L, ASAT 0,9 µkat/L (ref <0,60), ALAT 0.8 µkat/L (ref<0,70), GT 9.0 µkat/L (ref <1,2). Bilirubin konjugerad 48 µmol/L (ref <1,5).\nDin uppgift på denna station blir att ta en kompletterande anamnes, muntligen beskriva för examinatorn vad du skulle prioritera i status samt att berätta för patienten din initiala utredningsplan\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Balans i samtalet: öppna och riktade frågor, Följsamhet och Lyhördhet",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar anamnes kring det aktuella problemet och relevanta frågor kring bakgrunden",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att prioritera statusmoment",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår lämplig utredning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar på ett sätt som patienten kan förstå",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "gastro_lever"
   },
   "oHT25|10": {
    "key": "oHT25|10",
    "session": "oHT25",
    "stn": "10",
    "date": "2026-02-20",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Lunga",
    "family": "Allergisk rinokonjunktivit och angioödem",
    "topic": "Allergisk rinokonjunktivit",
    "title": "Allergisk rinokonjunktivit – pricktest",
    "comp": [
     "RESON",
     "KOMM"
    ],
    "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "door": {
     "text": "Du är BT-läkare på vårdcentral och ska ge besked om pricktest. PATIENT 20 år, student, återkommande nästäppa, nysningar och tårflöde. Pricktest utfört, se utskrift (finns även på rummet). DIN UPPGIFT\n1. Tolka pricktest-resultaten\n2. Ställ diagnos och förklara för patienten\n3. Diskutera behandling och egenvård\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Delmoment 1: Tolkning och diagnostik",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Delmoment 2: behandling - farmakologisk och icke-farmakologisk",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Delmoment 3: Pedagogisk kommunikation och patientinformation",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Delmoment 4: Professionellt bemötande",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "allergi"
   },
   "oHT25|11": {
    "key": "oHT25|11",
    "session": "oHT25",
    "stn": "11",
    "date": "2026-02-20",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Neurologi/Angiologi",
    "family": "Stroke och TIA: NIHSS, SBAR och information",
    "topic": "Akut stroke",
    "title": "Akuthandläggning stroke – NIHSS och SBAR",
    "comp": [
     "STAT",
     "SBAR",
     "KOMM"
    ],
    "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "door": {
     "text": "Du är jour och kallas till sjukhusets strokeenhet där en 74-årig person lagts in pga en övergående vänstersidig svaghet för 7 timmar sedan. Symtomen satt i ett ca 10 min och hen blev helt återställd men rapporteras nu sedan ca 15 minuter ”känna sig konstig”.\nDin uppgift är att:\nUtföra anvisade delar av nervstatuset NIHSS och rapportera fynden enligt SBAR till din bakjour och föreslå nästa åtgärd.\nDu ska inte ta upp någon ytterligare anamnes.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Testar Ögonmotorik",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar Synfält",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar motorik i armar och ben",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar Ataxi Knä-häl och finger-näs",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Testar utsläckning/neglekt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rapport enligt SBAR till bakjour",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": true
      }
     ]
    },
    "guide": "stroke"
   },
   "oHT25|12": {
    "key": "oHT25|12",
    "session": "oHT25",
    "stn": "12",
    "date": "2026-02-20",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Kardiologi",
    "family": "Hjärtstatus, blåsljud och EKO-fynd",
    "topic": "Aortastenos",
    "title": "Återkoppling av EKO-fynd",
    "comp": [
     "STAT",
     "RESON"
    ],
    "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "door": {
     "text": "Du arbetar på en hälsocentral. Du får till uppgift att gå genom en tidigare kollegas signeringslista och ett svar från en ekokardiografi dyker upp i listan. Ekokardiografin gjordes efter en 50-årskontroll där man för sju månader sedan auskulterade ett systoliskt blåsljud men övriga fynd inklusive blodprover (blodstatus, vätskestatus, lipidstatus, och fastande blodsocker) och blodtryck var normala Ekokardiografiutlåtande Anna Andersson f. 19750101:\nSannolikt bikuspid aortklaff med tät stenos. Max-hastighet över aortaklaffen 4,1 m/s. Li ndrig aortainsufficiens. Välfungerande normalstor vänsterkammare med lindrig hypertrofi. Lätt förstorat vänster förmak. Ordinär högerkammarfunktion.\nDin uppgift är att:\n• Tolka ekosvaret\n• Ring upp patienten och ta reda på hur hon mår\n• Förklara över telefon kortfattat, på en nivå du är bekväm, med ekofynden.\n• Föreslå för patienten vidare uppföljning.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Förmåga att ta kompletterande anamnes",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bemötande och kommunikation",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "EKG-tolkning och förslag på utredning",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att förmedla adekvat information till patienten",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hjartstatus"
   },
   "oHT25|13": {
    "key": "oHT25|13",
    "session": "oHT25",
    "stn": "13",
    "date": "2026-02-20",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Klinisk farmakologi",
    "family": "Receptförskrivning",
    "topic": "Receptförskrivning",
    "title": "Receptförskrivning",
    "comp": [
     "ORD",
     "KOMM"
    ],
    "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "door": {
     "text": "Receptförskrivning Du arbetar som BT-läkare på en akutmottagning och ska förskriva ett recept på omeprazol. Patienten är 52 år och tidigare frisk. Hen har sökt för nytillkomna besvär med halsbränna och sura uppstötningar, framför allt efter måltid och nattetid. Ingen viktnedgång, ingen blodig kräkning eller sväljningssvårigheter föreligger. Patientens tillstånd bedöms som symtomatisk gastroesofageal refluxsjukdom. Det digitala journalsystemet är denna dag ur funktion och du ska därför skriva ett pappersrecept på behandling med omeprazol. På rummet finns en FASS-text till hjälp. Efter receptförskrivning ska du informera patienten muntligt om behandlingen.\nDu ska inte ta ställning till om läkemedelsvalet är adekvat.\nDin uppgift är att:\n• Skriva ett korrekt pappersrecept på omeprazol för symtomatisk gastroesofageal refluxsjukdom\n• Informera patienten muntligt om behandlingen\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Receptskrivning",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Information",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bemötande",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "recept"
   },
   "oHT25|14": {
    "key": "oHT25|14",
    "session": "oHT25",
    "stn": "14",
    "date": "2026-02-20",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "HT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet. Vad gör du? (Patienten är bekräftat COVID-negativ)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "OMOSCE I HT25 - Dörrinformation och bedömningsunderlag.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kontroll av medvetande (ruska om, ropa)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning. Öppnar luftvägen och håller den öppen genom hela kontrollen",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning: titta, lyssna, känn (ca 10 sek)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Larmar (på larmknapp i rummet, alt ropar på hjälp)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Utfört kompressioner med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört kompressioner med total medelhastighet 100-120/min",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört inblåsningar med minst 80% godkända",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hlr"
   },
   "VT26|1": {
    "key": "VT26|1",
    "session": "VT26",
    "stn": "1",
    "date": "2026-06-04",
    "year": 2026,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Diabetes/Angiologi",
    "family": "Fotstatus och perifer cirkulation",
    "topic": "Diabetesfot",
    "title": "Fotstatus vid diabetes",
    "comp": [
     "STAT",
     "KOMM"
    ],
    "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "door": {
     "text": "På denna station möter du en patient på 70 år som haft typ 2-diabetes i 20 år. Patienten medicinerar med metformin, dapagliflozin, atorvastatin och candesartan. Aktuellt HbA1c 62.\nDu ska:\nGenomföra ett fotstatus vid diabetes. Beskriv för bedömaren vad du gör under din fotundersökning. Informera patienten om din bedömning och ge råd om egenvård.\nÖvrig klinisk undersökning och behandlingsförslag ingår ej i uppgiften.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Undersöker patienten utifrån ett patientcentrerat förhållningssätt - är respektfull och lyhörd vid undersökningen (0.5p) samt ber patienten ta av strumporna (0.5p)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Inspektion: tittar på bägge fötters ovansida, fotsula samt mellan tår",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Inspektion: förklarar vad hen tittar efter (sår, förhårdnader, ödem, deformiteter, behåring, hudfärg, infektionstecken - minst 2 för 1p)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Cirkulation: palperar a dorsalis pedis bilateralt korrekt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Cirkulation: palperar a tibialis posterior bilateralt korrekt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Nervfunktion: testar vibrationssinne med stämgaffel korrekt på stortåtoppar, stortåbaser eller malleoler (1 ställe/fot räcker)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Nervfunktion: testar monofilamentkänsel korrekt på 3 positioner per fot",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Nervfunktion: demonstrerar hur vibration respektive monofilament känns genom att testa på patientens tumbas/sternum/handrygg",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger patienten en rimlig sammanfattande bedömning (normala fynd)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger patienten korrekta egenvårdsråd",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "diabetesfot"
   },
   "VT26|2": {
    "key": "VT26|2",
    "session": "VT26",
    "stn": "2",
    "date": "2026-06-04",
    "year": 2026,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Njurmedicin",
    "family": "Njure: anamnes vid hematuri, proteinuri och nefrotiskt syndrom",
    "topic": "Njursvikt/hematuri",
    "title": "Njuranamnes",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "door": {
     "text": "Du är läkare på njurmottagningen. Din första patient inkommer på remiss från företagshälsovården. Det är en 35-årig man där man vid en hälsokontroll för 2 veckor sedan fått följande labsvar:\nKreatinin 210 µmol/L (Ref 60-105) U-Albumin/krea 35 g/mol (Ref <7) U-Sticka +++ Erytrocyter ++Protein 0 Nitrit 0 Leukocyter\nDet är alla labbdata du har. Tag en njurmedicinsk anamnes och föreslå en utredningsplan för patienten! Status skall ej göras.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Egen situation",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor angående det sociala",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor angående hereditet",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga om tidigare sjukdomar",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor angående läkemedel",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor angående miktionssymptom",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor angående övriga symptom",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Plan",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtalsstruktur",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "njure_anam"
   },
   "VT26|3": {
    "key": "VT26|3",
    "session": "VT26",
    "stn": "3",
    "date": "2026-06-04",
    "year": 2026,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Bröstsmärta: AKS, perimyokardit och EKG",
    "topic": "Bröstsmärta",
    "title": "Bröstsmärta på hälsocentral",
    "comp": [
     "ANAM",
     "RESON",
     "KOMM"
    ],
    "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "door": {
     "text": "Du är läkare på en hälsocentral och ska nu träffa en 20-årig patient som söker för återkommande bröstsmärta sedan en längre tid tillbaka. Undersköterskan har registrerat ett EKG samt vitalparametrar.\nTemp: 36,9 grader Puls: 60/min Blodtryck: 110/70 Saturation: 99% Andningsfrekvens: 18/min\nEKG är normalt.\nDin uppgift är att:\nTa anamnes Utföra hjärtauskultation Rekommendera eventuell utredning och behandling Informera patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Bemötande och kommunikation",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att ta anamnes",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att genomföra hjärtauskultation",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår rimlig utredning och behandling",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmedlar adekvat information till patienten",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "aks"
   },
   "VT26|5": {
    "key": "VT26|5",
    "session": "VT26",
    "stn": "5",
    "date": "2026-06-04",
    "year": 2026,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Gastroenterologi",
    "family": "Gastro: ont i magen, akut buk och IBD",
    "topic": "Buksmärta",
    "title": "Ont i magen",
    "comp": [
     "ANAM",
     "STAT"
    ],
    "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "door": {
     "text": "Du arbetar på en hälsocentral och träffar en 25 årig man/kvinna med ont i magen.\nDu ska ta anamnes, riktat status samt informera patienten om din handläggning.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Konsultationsteknik",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Status",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Handläggning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "gastro_buk"
   },
   "VT26|6": {
    "key": "VT26|6",
    "session": "VT26",
    "stn": "6",
    "date": "2026-06-04",
    "year": 2026,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Lunga",
    "family": "Astma: inhalationsteknik, ACT och PEF-dagbok",
    "topic": "PEF",
    "title": "PEF-instruktion och dagboktolkning",
    "comp": [
     "PROC",
     "KOMM"
    ],
    "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "door": {
     "text": "Du är BT-läkare på hälsocentralen och träffar samma patient vid två tillfällen under stationen. Patienten signalerar själv när tiden gått och återbesöket börjar.\nPatient är 38 år, spirometri utförd idag — normal utan signifikant reaktion vid bronkdilatationstest. Misstänkt astma.\nDIN UPPGIFT\n1. Instruera patienten hur PEF-mätning utförs\n2. Instruera patienten hur dagboken ska fyllas i\nInför återbesök 2 veckor senare får du en Exempeldagbok med PEF- kurva\n3. Vid återbesök 2 veckor senare: tolka patientens ifyllda PEF-dagbok och förklara den kliniska innebörden för patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Instruera om PEF-teknik",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Instruera om dagboksregistrering",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tolka PEF-dagbok diagnostiskt",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bemöta och kommunicera professionellt med patienter",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "astma"
   },
   "VT26|7": {
    "key": "VT26|7",
    "session": "VT26",
    "stn": "7",
    "date": "2026-06-04",
    "year": 2026,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Infektion",
    "family": "Infektion: handläggning, rond och information",
    "topic": "Asymtomatisk bakteriuri",
    "title": "Positiv urinodling hos äldre med demens",
    "comp": [
     "ANAM",
     "ORD",
     "KOMM"
    ],
    "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "door": {
     "text": "Du är jourhavande läkare på en hälsocentral. En sjuksköterska på ett särskilt boende (Säbo) kontaktar dig angående en kvinna 86 år med känd demenssjukdom. Aktuellt: successivt försämrat allmäntillstånd sedan några månader. Ätit mycket dåligt senaste veckan.\nUrinodling togs nyligen eftersom patienten har illaluktande urin. Odlingssvar har kommit och sjuksköterskan vill diskutera vidare handläggning.\nDu ska under samtalet med sjuksköterskan:\n1) Inhämta riktad sjukdomsanamnes via sjuksköterskan\n2) Tolka urinodlingssvaret och ta ställning till antibiotikabehandling\n3) Informera sköterskan om din bedömning och fortsatt plan.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Presenterar sig och för dialog med sjuksköterskan på ett respektfullt och begripligt sätt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar en riktad anamnes via sjuksköterskan",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfrågar förekomst och ev byte av KAD",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Tolkar urinodlingsfynd som asymtomatisk bakteriuri",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfrågar relevant läkemedelsinformation (t.ex. antibiotikaallergi)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Förklarar för SSK varför antibiotikabehandling inte är indicerad (utifrån anamnes och odlingsfynd).",
       "max": 3,
       "opts": [
        3,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger besked om fortsatt handläggning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger utrymme för och besvarar motfrågor på ett adekvat sätt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "infektion"
   },
   "VT26|8": {
    "key": "VT26|8",
    "session": "VT26",
    "stn": "8",
    "date": "2026-06-04",
    "year": 2026,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Geriatrik",
    "family": "Kognitiv skattning (MMSE) och demensutredning",
    "topic": "MMSE",
    "title": "MMSE-NR3 och information",
    "comp": [
     "PROC",
     "KOMM"
    ],
    "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "door": {
     "text": "En 75-årig tidigare frisk som arbetat som ingenjör. Personen söker för första gången för minnesproblem som kommit smygande sista två åren. Ingen annan utredning är påbörjad.\nDu har tagit tillräcklig anamnes och status.\nDina uppgifter\n• Genomför kognitiv skattning med MMSE-NR3\n• Förklara fyndet för patienten\n• Förklara och motivera fortsatt handläggning för patienten\nFyll i poäng på respektive fråga, men räkna inte ut totalpoäng. Totalpoäng meddelar läraren i rummet.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Inhämtar och fyller i bakgrundsdata på första sidan",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar adekvat om undersökningen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Omedelbar återgivning – korrekt instruktion och poängsättning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Huvudräkning – korrekt instruktion och poängsättning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Fördröjd återgivning – korrekt instruktion och poängsättning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Skriftlig uppmaning – korrekt instruktion och poängsättning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Skriva egen mening – korrekt instruktion och poängsättning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Strukturerat genomförande av MMSE-NR3",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Undersökningsresultatet informeras på begripligt sätt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt handläggningsförslag",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "kognition"
   },
   "VT26|10": {
    "key": "VT26|10",
    "session": "VT26",
    "stn": "10",
    "date": "2026-06-04",
    "year": 2026,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Dyspné: hjärtsvikt eller lungsjukdom",
    "topic": "Dyspné",
    "title": "Dyspné: kardiell eller pulmonell genes",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "door": {
     "text": "En 65-årig lärare med hypertoni söker på Hälsocentralen för tilltagande andfåddhet sedan ett halvt år tillbaka. Har nu problem att hänga med jämnåriga vid promenad. Status:\nAllmäntillstånd: Opåverkad i vila, BMI 25, SaO2 95 % Blodtryck: 145/85 mmHg. Mycket diskreta pittingödem bilateralt på fötterna. Hjärta: Regelbunden rytm, inga blåsljud. Lungor: Väsentligen normala andningsljud, vid forcerad exspiration något förlängt exspirium utan distinkta ronki.\nDu ska:\n• Ta adekvat anamnes\n• Kommunicera din bedömning och planering för fortsatta åtgärder med patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Adekvat funktionsanamnes och symtombild",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kartläggning av riskfaktorer",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt vidare utredningsgång",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förklaring av fynd och vidare handläggning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "dyspne"
   },
   "VT26|11": {
    "key": "VT26|11",
    "session": "VT26",
    "stn": "11",
    "date": "2026-06-04",
    "year": 2026,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "BFM",
    "family": "Bilddiagnostik: akut radiologi",
    "topic": "Akut radiologi",
    "title": "Akut radiologi",
    "comp": [
     "BILD"
    ],
    "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "door": {
     "text": "Du är jour på akutmottagningen på ett mindre sjukhus. En läkarstudent från termin 8 följer med dig under kvällen. Du har skickat flera patienter till röntgen för akut undersökning. Bilderna har nu kommit på tre av patienterna, men röntgensvaren dröjer. Medan du väntar, gör du en egen tolkning av röntgenbilderna för att snabba på handläggningen.\nDin uppgift är att:\n• Granska tre olika röntgenundersökningar och ställa preliminära diagnoser.\n• För varje undersökning ska du visa för studenten vilka röntgenfynd som gör att du ställer en viss diagnos.\n• Studenten är nyfiken och kan också ställa frågor om undersökningarna som du ska försöka besvara.\nDu behöver inte logga in någonstans. Röntgenbilderna visas i form av en pdf på en bildskärm. Denna information finns även inne i rummet bredvid datorn.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Rätt diagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att adekvat visa på relevanta fynd",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Rätt diagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att adekvat visa på relevanta fynd",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att korrekt beskriva relevanta fynd",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att korrekt beskriva diagnos",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att adekvat visa relevanta fynd.",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "bfm"
   },
   "VT26|12": {
    "key": "VT26|12",
    "session": "VT26",
    "stn": "12",
    "date": "2026-06-04",
    "year": 2026,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Lunga",
    "family": "Astma: inhalationsteknik, ACT och PEF-dagbok",
    "topic": "Astma",
    "title": "Astmakontroll (ACT) och inhalationsteknik",
    "comp": [
     "PROC",
     "KOMM"
    ],
    "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "door": {
     "text": "Du är BT-läkare på astmamottagning, hälsocentral.\nPatient 34 år, känd astma, återbesök för uppföljning.\nDin uppgift\n1. Bedöm astmakontrollen med ACT-formuläret\n2. Välj en inhalator på bordet, kontrollera patientens inhalationsteknik och korrigera eventuella fel\nACT-formulär och inhalatorer finns på bordet.\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Behandla astma — bedöma astmakontroll med ACT",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bedöma inhalationsteknik",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Instruera inhalationsteknik",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bemöta och kommunicera professionellt med patienter",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "astma"
   },
   "VT26|14": {
    "key": "VT26|14",
    "session": "VT26",
    "stn": "14",
    "date": "2026-06-04",
    "year": 2026,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Endokrinologi",
    "family": "Tyreoidea och endokrin utredning",
    "topic": "Hypofystumör",
    "title": "Hypofystumör på DT",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "door": {
     "text": "Du arbetar som läkare på vårdcentral. En 55-årig man kommer på återbesök efter DT av hjärnan som gjordes pga. besvär med huvudvärk, trötthet och yrsel. DT visar en hypofystumör (21 x 23 x 23 mm).\nDin uppgift är:\n1. Informera patienten om röntgenfyndet\n2. Ta kompletterande riktad anamnes baserat på röntgenfyndet\n3. Föreslå och förklara fortsatt utredning för patienten\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Information om DT fyndet",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Öppen fråga om aktuella symtom",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Riktad anamnes relaterad till DT fyndet",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Planerar fortsatt utredning",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Beskriver planerad utredning för patienten tydligt och enkelt",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Empatiskt förhållningssätt – efterfrågar, lyssnar och bekräftar patientens oro",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "tyreoidea"
   },
   "VT26|15": {
    "key": "VT26|15",
    "session": "VT26",
    "stn": "15",
    "date": "2026-06-04",
    "year": 2026,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Neurologi/Angiologi",
    "family": "Stroke och TIA: NIHSS, SBAR och information",
    "topic": "Strokerond",
    "title": "Rond på strokeavdelning",
    "comp": [
     "STAT",
     "SBAR",
     "KOMM"
    ],
    "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "door": {
     "text": "Du är läkare på en strokeavdelning och ska morgonronda en patient. Patienten är 73 år och är sedan tidigare helt frisk och aktiv, inga läkemedel. Sökte igår efter att ha vaknat med svaghet höger arm och ben, partiell central facialispares och lätt dysartri. Sökte sjukhuset för sent och det var ej aktuellt med reperfusionsbehandling. DT-hjärna vid inläggning utan blödning och DT-angio av hjärnan och halsens kärl var utan anmärkning. Lades in med strokekontroller på strokeavdelningen. EKG och telemteri har visat sinusrytm, 70 slag/min. Blodtryck: 150/90 mmHg. Blodsockret har varit normalt och LDL-C visar 3,4 mmol/L.\nDu ska:\n- utföra angivna delar av NIHSS.\n- informera patienten om undersökningar och bedömningar så här långt under vårdtiden samt fortsatt handläggning och åtgärder.\n- Du ska INTE ta anamnes och du ska INTE ge livsstilsråd\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Facialispares",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Pares i arm och ben",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Dysartri",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Övergripande tolkning och info till patient",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Information till patienten om undersökningar och diagnos (graderat)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Information om insatt/planerad sekundärprofylax (graderat)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Språk (graderat)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Struktur och bemötande (graderat)",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "stroke"
   },
   "VT26|16": {
    "key": "VT26|16",
    "session": "VT26",
    "stn": "16",
    "date": "2026-06-04",
    "year": 2026,
    "type": "Ordinarie",
    "term": "VT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet.\nVad gör du?\n(Patienten är bekräftat COVID-negativ)\nDu har 6 minuter för att genomföra uppgiften.",
     "file": "DÖRRINFORMATION OCH BEDÖMNINGSMALLAR KOMBINERAD VT26.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kontroll av medvetande (ruska om, ropa)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning. Öppnar luftvägen och håller den öppen genom hela kontrollen",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning: titta, lyssna, känn (ca 10 sek)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Larmar (på larmknapp i rummet, alt ropar på hjälp)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Utfört kompressioner med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört kompressioner med total medelhastighet 100-120/min",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört inblåsningar med minst 80% godkända",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hlr"
   },
   "oVT26|1": {
    "key": "oVT26|1",
    "session": "oVT26",
    "stn": "1",
    "date": "2026-08-26",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Hjärtstatus, blåsljud och EKO-fynd",
    "topic": "Blåsljud",
    "title": "Blåsljud med Harvey-docka",
    "comp": [
     "STAT",
     "RESON"
    ],
    "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "door": {
     "text": "Du är BT-läkare på en hälsocentral. En 26-årig asylsökande kvinna från Somalia kommer till hälsocentralen för hälsoundersökning. Det har framkommit att vid samtal på boendet att hon har något fel på hjärtat.\nPå rummet finns en Harveydocka och du ska\n- göra komplett hjärtstatus och ange vilken klaff du hör var\n- beskriva eventuellt blåsljud eller biljud\n- ange rimlig genes till ev. klaffel\n- ange preliminär diagnos\n- föreslå fortsatt utredning\nDu har 6 minuter för att genomföra uppgiften",
     "file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Rimligt hjärtstatus (rätt lokalisation och anger rätt klaff)",
       "max": 4,
       "opts": [
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anger om det finns och beskriver ev. blåsljud och biljud",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Auskulterar karotis",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar perifier puls vid auskultation",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anger rimlig genes till ev klaffel",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger förslag på rimlig diagnos",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Ger förslag på rimlig fortsatt utredning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hjartstatus"
   },
   "oVT26|2": {
    "key": "oVT26|2",
    "session": "oVT26",
    "stn": "2",
    "date": "2026-08-26",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Allmänmedicin",
    "family": "Hypertoni: blodtrycksbedömning och riskbedömning",
    "topic": "Hemblodtryck",
    "title": "Bedömning av hemblodtryck",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "door": {
     "text": "På denna station möter du en patient där distriktsköterskan bokat tid på grund av misstänkt nyupptäckt högt blodtryck.\nDin uppgift är att göra en bedömning av de blodtryck som patienten tagit i hemmet, komplettera anamnesen på ett relevant sätt, informera om din bedömning samt föreslå eventuella åtgärder. Du ska också besvara patientens frågor.\nKlinisk undersökning, dvs status, ingår inte i uppgiften.\nPatienten är 52 år gammal. Svar på provtagning för en vecka sedan:\nBlodstatus u.a, kreatinin u.a, Na, K u.a, fP-glukos u.a, total-kolesterol 5. Vilo-EKG: Sinusrytm, 62/min. Normalt EKG.\nDu har 6 minuter för att genomföra uppgiften",
     "file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Patientens anamnes i relation till hypertoni väl belyst",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Patientens symtom i relation till hypertoni väl belyst",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att bedöma hemblodtrycksmätningarna",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kunna uppge korrekt blodtrycksgräns vid hemblodtrycksmätning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att utöva ett patientcentrerat förhållningssätt",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förmåga att utifrån informationen ge en rimlig preliminär bedömning och föreslå åtgärd",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hypertoni"
   },
   "oVT26|3": {
    "key": "oVT26|3",
    "session": "oVT26",
    "stn": "3",
    "date": "2026-08-26",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Lunga",
    "family": "KOL, spirometri och obstruktiv/restriktiv lungsjukdom",
    "topic": "KOL",
    "title": "KOL, spirometri och GOLD",
    "comp": [
     "RESON",
     "KOMM"
    ],
    "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "door": {
     "text": "Du är BT-läkare på en hälsocentral.\nPatienten är 63 år, långvarig rökare (slutat för 2 år sedan), tidigare frisk, söker för tilltagande andnöd vid ansträngning och slemhosta sedan ca ett år. Ingen anamnes på ökad infektionsbenägenhet eller försämringsperioder.\nSpirometri med bronkdilatationstest är utförd (se utskrift på dörren, kopia finns inne på rummet).\nDIN UPPGIFT\n1. Tolka spirometrin och berätta för bedömaren hur du tänker.\n2. Informera patienten om utredningsresultatet och diagnos.\n3. Du behöver INTE ta ytterligare anamnes eller göra status.\nDu har 6 minuter för att genomföra uppgiften",
     "file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tolka spirometriresultat",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Diagnosticera KOL inkl. GOLD-stadium",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informera patient om utredningsresultat och diagnos",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Professionellt bemötande",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "kol"
   },
   "oVT26|4": {
    "key": "oVT26|4",
    "session": "oVT26",
    "stn": "4",
    "date": "2026-08-26",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Angiologi",
    "family": "Ensidig bensvullnad: DVT-misstanke",
    "topic": "DVT",
    "title": "Utredning av ensidig bensvullnad",
    "comp": [
     "ANAM",
     "STAT",
     "RESON"
    ],
    "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "door": {
     "text": "Du arbetar som primärjour på en akutmottagning på ett länsdelssjukhus och träffar en 65-årig man som söker för ensidig smärta och svullnad i höger ben. Du fattar misstanke om DVT.\nDu skall:\n1. Ta en riktad anamnes och göra ett riktat status\n2. Göra en sannolikhetsbedömning\n3. Föreslå eventuell vidare provtagning och utredning.\nDu har 6 minuter för att genomföra uppgiften",
     "file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Adekvat riktad anamnes (duration av symtom, malignitet, hereditet, tid sjukdom, tidigare VTE, immobilisering, kirurgi)",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Mäter omkretsen av underbenet 10 cm nedom tuberositas tibiae",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Palperar kärlsträngen",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Sannolikhetsbedömning (via Wells score eller kliniskt) hög",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår ultraljud alternativt flebografi som utredning",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår INR, APTT, Blodstatus, Krea som prover",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "dvt"
   },
   "oVT26|5": {
    "key": "oVT26|5",
    "session": "oVT26",
    "stn": "5",
    "date": "2026-08-26",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Geriatrik",
    "family": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård",
    "topic": "Statinbiverkan",
    "title": "Läkemedelsinformation – atorvastatin",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "door": {
     "text": "En 82-åring funderar om den nya muskelvärken kan bero på något av de läkemedel som sattes in efter en misstänkt TIA för två månader sedan. Tidigare varit medicinfri.\nUndersökningsfynd före besöket:\n• Blodtryck: 120/70 mmHg\n• EKG: sinusrytm, puls 70/minut\n• Normala rutinprover\n• Blodfettsvärende innan statininsättning o Kolesterol 4,5 o LDL 3,0 o HDL 1,3 o\nDu ska:\n• Ta en adekvat anamnes, både bakgrund och aktuellt problem\n• Bedöm och informera patienten om dennes problem kan relateras till behandlingen\n• Förslag på vidare handläggning\nDu har 6 minuter för att genomföra uppgiften",
     "file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Inledning och struktur (hur anamnes inhämtas)",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar upp en anamnes som är relevant avseende bakgrunden",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar upp en anamnes som är relevant avseende den aktuella kliniska situationen",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Gör en rimlig bedömning om det är en läkemedelsbiverkan och informerar begripligt till patienten",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Involverar patienten i beslut om fortsatt handläggning där nytta vägs mot besvären",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "geriatrik"
   },
   "oVT26|6": {
    "key": "oVT26|6",
    "session": "oVT26",
    "stn": "6",
    "date": "2026-08-26",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Endokrinologi",
    "family": "Tyreoidea och endokrin utredning",
    "topic": "Hypotyreos",
    "title": "Trötthet – anamnes och information (hypotyreos)",
    "comp": [
     "ANAM",
     "KOMM"
    ],
    "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "door": {
     "text": "Till din vårdcentral kommer en 25-årig patient på återbesök.\nHen sökte vårdcentralen förra veckan pga. tilltagande trötthet och frusenhet sedan flera månader. Kapillärt Hb, CRP och glukos var då utan anmärkning, TSH ökat (17 mIU/L). Inför återbesök till dig togs kompletterande prover enligt nedan:\nDin uppgift:\nKomplettera anamnesen Informera tydligt om proverna, diagnosen och starta behandling.\nReceptskrivning ingår inte i momentet.\nBlodprov värde Referensområde\nHemoglobin (Hb) 120 117 – 153 g/L\nLeukocyter (LPK) 6,1 3,5 – 8,8x109/L\nTrombocyter (TPK) 291 165 – 387x109/L\nSänka (SR) 13 <30 mm/h\nNatrium (Na) 140 137 – 145 mmol/L\nKalium (K) 4,0 3,5 – 4,4 mmol/L\nKreatinin (Krea) 61 45 – 90 µmol/L\nP-glukos (fastande) 5,6 <7,0 mmol/L\nTSH 21 0,27 – 4,2 mIU/L\nT4 fritt 7,2 12 – 22 pmol/L\nTPO-antikroppar 350 <50 IU/mL\nDu har 6 minuter för att genomföra uppgiften",
     "file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Börjar med att hälsa och ställa en öppen fråga om hur patienten mår.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfrågar ytterligare symtom på hypotyreos (frusenhet, depression, obstipation, håravfall, torr hud)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfrågar relevant ärftlighet",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar om provsvaren och diagnosen primär hypotyreos.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar att orsaken är autoimmun destruktion av sköldkörteln",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lugnar patienten angående sin oro för cancer.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar om start av ersättningsbehandling med levotyroxin",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar att behandlingen kommer att följas upp med provtagning om 6-8 veckor och därefter eventuell dosjustering av levotyroxin.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Informerar att sköldkörteln inte kommer att återhämta sig och att behandlingen är livslång.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Förklaringar för patienten på enkelt, förståeligt språk, utan facktermer.",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "tyreoidea"
   },
   "oVT26|8": {
    "key": "oVT26|8",
    "session": "oVT26",
    "stn": "8",
    "date": "2026-08-26",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Njurmedicin",
    "family": "Njure: anamnes vid hematuri, proteinuri och nefrotiskt syndrom",
    "topic": "Nefrotiskt syndrom",
    "title": "Nefrotiskt syndrom – njuranamnes",
    "comp": [
     "ANAM",
     "RESON"
    ],
    "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "door": {
     "text": "Du är läkare på medicinmottagningen. Din första patient är en 35-årig kvinna som sedan cirka 1 vecka blivit svullen om anklar och kring ögonen.\nFöljande prover är tagna:\nKreatinin 72 µmol/L (Ref 60-105) U-Albumin/krea 389 g/mol (Ref <7) U-Sticka 0 Erytrocyter +++ Protein 0 Nitrit 0 Leukocyter P-Albumin 22 g/L (Ref 35-45) P-Kalium 4,0 (Ref 3,5-4,5) P-proBNP 35 ng/L (Ref <155) Blodtryck 130/80 Det är alla labdata du har eller kommer att få under besöket.\nDin uppgift:\nTag en anamnes och förklara för patienten vad du tror är problemet och föreslå en utredningsplan och eventuell behandling för patienten! Status skall ej göras.\nDu har 6 minuter för att genomföra uppgiften",
     "file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 9.5,
     "declared": 9.5,
     "items": [
      {
       "t": "Egen situation",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor angående hereditet",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Fråga om tidigare sjukdomar",
       "max": 1.5,
       "opts": [
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor angående läkemedel",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor angående miktionssymptom",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågor angående övriga symptom",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Samtalsstruktur",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Plan",
       "max": 2,
       "opts": [
        2,
        1.5,
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "njure_anam"
   },
   "oVT26|9": {
    "key": "oVT26|9",
    "session": "oVT26",
    "stn": "9",
    "date": "2026-08-26",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Lunga",
    "family": "Allergisk rinokonjunktivit och angioödem",
    "topic": "Angioödem",
    "title": "Angioödem",
    "comp": [
     "RESON",
     "KOMM"
    ],
    "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "door": {
     "text": "Du är BT-läkare på akutmottagningen.\nPATIENT 22 år, akut läppsvullnad sedan 1 timme efter lunch. Orolig. Andas lugnt. Svullen övre och undre läpp, ingen stridor. Puls 88, Andningsfrekvens 16, SpO₂ 98%, Blodtryck 125/78, Temp 36,8°C.\nDIN UPPGIFT\n1. Bedöm den akuta situationen.\n2. Ordinera akutbehandling.\n3. Ta en fokuserad och strukturerad anamnes\n4. Presentera diagnos och uppföljning muntligen för bedömaren\nDu har 6 minuter för att genomföra uppgiften",
     "file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Utesluta anafylaxi, akutbehandling, anamnes och råd angioödem",
       "max": 5,
       "opts": [
        5,
        4,
        3,
        2,
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Bemöta och kommunicera professionellt med patient vid misstänkt angioödem",
       "max": 5,
       "opts": [
        5,
        4,
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "allergi"
   },
   "oVT26|10": {
    "key": "oVT26|10",
    "session": "oVT26",
    "stn": "10",
    "date": "2026-08-26",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Gastroenterologi",
    "family": "Gastro: ont i magen, akut buk och IBD",
    "topic": "Crohn",
    "title": "Ont i magen vid Crohns sjukdom",
    "comp": [
     "ANAM",
     "STAT"
    ],
    "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "door": {
     "text": "Du arbetar på en akutmottagning. Patienten, 32 år med Crohns sjukdom söker för ont i magen. Du ska ta en anamnes, utföra riktat status och föreslå initial utredning för patienten.\nDu har 6 minuter för att genomföra uppgiften",
     "file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Balans öppna och riktade frågor",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Anamnes kring det aktuella problemet och relevanta frågor kring bakgrunden",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Lämpliga vårdhygienåtgärder innan och efter status",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Utför bukstatus enligt struktur för akut buk",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tolkar fynd vid bukstatus",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Föreslår lämplig utredning",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "gastro_buk"
   },
   "oVT26|11": {
    "key": "oVT26|11",
    "session": "oVT26",
    "stn": "11",
    "date": "2026-08-26",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "BFM",
    "family": "Bilddiagnostik: akut radiologi",
    "topic": "Akut radiologi",
    "title": "Akut radiologi",
    "comp": [
     "BILD"
    ],
    "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "door": {
     "text": "Du är jour på akutmottagningen på ett mindre sjukhus. En läkarstudent från termin 8 följer med dig under kvällen. Du har skickat flera patienter till röntgen för akut undersökning. Bilderna har nu kommit på tre av patienterna, men röntgensvaren dröjer. Medan du väntar, gör du en egen tolkning av röntgenbilderna för att snabba på handläggningen.\nDin uppgift är att:\n• Granska tre olika röntgenundersökningar och ställa preliminära diagnoser.\n• För varje undersökning ska du visa för studenten vilka röntgenfynd som gör att du ställer en viss diagnos.\n• Studenten är nyfiken och kan också ställa frågor om undersökningarna som du ska försöka besvara.\nDu behöver inte logga in någonstans. Röntgenbilderna visas i form av en pdf på en bildskärm. Denna information finns även inne i rummet bredvid datorn.\nDu har 6 minuter för att genomföra uppgiften",
     "file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Rätt diagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Demonstration",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Rätt diagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Demonstration",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Rätt diagnos",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Demonstration",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Bildförståelse",
       "max": 1,
       "opts": [
        1,
        0.5,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "bfm"
   },
   "oVT26|12": {
    "key": "oVT26|12",
    "session": "oVT26",
    "stn": "12",
    "date": "2026-08-26",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Infektion",
    "family": "Infektion: handläggning, rond och information",
    "topic": "ESBL",
    "title": "Positiv blododling – ESBL",
    "comp": [
     "ANAM",
     "ORD",
     "KOMM"
    ],
    "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "door": {
     "text": "Du är underläkare på infektionsavdelningen och ska ronda en 76 årig man med KAD som legat inne två dygn. Hen har feber nu på morgonen och ligger på en flersal med fyra sängar. Patientens journal är märkt med Typ I allergi mot penicillin.\nDin uppgift är att:\n1) Ta en riktad anamnes från patienten, du ska INTE utföra status.\n2) Värdera blododlingsresultaten och resistensbestämning\n3) Ta ställning till vidare handläggning och förklara dina beslut för patienten så att patienten förstår din handläggning (en icke medicinskt skolad person) med fokus på:\n- arbetsdiagnos\n- antimikrobiell behandling\n- vårdhygieniska åtgärder\nDu har 6 minuter för att genomföra uppgiften\nMorgonens prover (gårdagens provsvar inom parentes):\nCRP 120 (95) mg/L Hb 96 (99) g/L LPK 14 (16,2) ×10⁹/L TPK 355 (330) ×10⁹/L Krea 130 (108 µmol/L Na 138 (137) mmol/L K 3,7 (3,4) mmol/L\nBlododling visar växt av Klebsiella pneumoniae i 2 av 4 blododlingsflaskor tagna på akuten\nResistensprofil:\nAmpicillin R Piperacillin/Tazobactam I Cefotaxim R Meropenem S Ciprofloxacin R Gentamicin S Trimetoprim/Sulfa R\nTemp: 38,9 grader Celcius Sat 94% O2 på rumsluft Patienten har producerat 1220 ml urin senaste dygnet Patienten står på Cefotaxim 1gx3 iv'\nDenna information finns även inne på rummet\n.\nDu har 6 minuter för att genomföra uppgiften",
     "file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Hälsar på patienten och presenterar sig",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Tar upp en strukturerad anamnes",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Efterfrågar riskfaktorer för bärarskap och spridning till andra av enterobacteriace MRB (KAD, eventuella bukdrän, upprepad antibiotikabehandling, utlandsvistelse), klargör tidsförlopp",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Förklarar att den primära misstanken är febril UVI orsakad av ESBL- producerande tarmbakterier och redogör på ett klart sätt vad det är, inklusive bärarskap.",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Frågar uppföljande frågor om allergi mot antibiotika",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Klargör för patienten att antibiotika måste bytas utifrån misstanke om UVI orsakad av ESBL-kleb (byte till MEM endast p.g.a. Pc överkänslighet. TZP kontraindicerad av både resistensskäl och allergiskäl!)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Patienten ska byta sal till enkelsal då det sannolikt handlar om K. pneumoniae ESBL och han är KAD bärare",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": true
      },
      {
       "t": "Ger tillfälle för motfrågor",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "infektion"
   },
   "oVT26|13": {
    "key": "oVT26|13",
    "session": "oVT26",
    "stn": "13",
    "date": "2026-08-26",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Kardiologi",
    "family": "Bröstsmärta: AKS, perimyokardit och EKG",
    "topic": "Bröstsmärta",
    "title": "Akut koronart syndrom – anamnes och EKG",
    "comp": [
     "ANAM",
     "RESON",
     "KOMM"
    ],
    "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "door": {
     "text": "En 55 årig man som inte haft andra kontakter med hälsocentralen än för COVID-vaccinationer söker akut på vårdcentralen på grund av övergående bröstsmärtor. Mottagningssköterskan har tagit:\nBlodtryck: 170/80 Puls: 90 Saturation: 96% Andningsfrekvens: 14 EKG: finns på rummet\nDin uppgift är att:\n1. Tolka EKG\n2. Komplettera anamnesen avseende bröstsmärtorna\n3. Utifrån din sammanfattande bedömning av EKG och anamnes informera patienten om misstänkt diagnos och ta ställning till adekvat åtgärd\nDu har 6 minuter för att genomföra uppgiften.\nDu har 6 minuter för att genomföra uppgiften\n50mm/s 10mm/mV 150Hz\naVL\nI\n-aVR\nII\naVF\nIII\n06-NOV-2007 14:11:54\n50mm/s 10mm/mV 150Hz\nV1\nV2\nV3\nV4\nV5\nV6\n06-NOV-2007 14:11:54",
     "file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Tolkar EKG korrekt som normalt",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Smärtanamnes",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kardiovaskulär riskprofil och övriga hälsoproblem",
       "max": 2,
       "opts": [
        2,
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Korrekt arbetsdiagnos",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kommunikation med figuranten",
       "max": 3,
       "opts": [
        3,
        2,
        1,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "aks"
   },
   "oVT26|14": {
    "key": "oVT26|14",
    "session": "oVT26",
    "stn": "14",
    "date": "2026-08-26",
    "year": 2026,
    "type": "Om-OSCE",
    "term": "VT",
    "spec": "Medicin",
    "family": "Basal HLR",
    "topic": "HLR",
    "title": "Basal HLR",
    "comp": [
     "PROC",
     "AKUT"
    ],
    "source": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf",
    "door": {
     "text": "Du kommer in på en vårdsal och hittar en till synes livlös person på golvet.\nVad gör du?\nDu har 6 minuter för att genomföra uppgiften",
     "file": "DÖRRINFO OCH BEDÖMNINGSMALLAR OMOSCE VT26 KOMBINERAD.pdf"
    },
    "rubric": {
     "tier": "auto",
     "total": 10,
     "declared": 10,
     "items": [
      {
       "t": "Kontroll av medvetande (ruska om, ropa)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning. Öppnar luftvägen och håller den öppen genom hela kontrollen",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Kontroll av andning: titta, lyssna, känn (ca 10 sek)",
       "max": 1,
       "opts": [
        1,
        0
       ],
       "safety": false
      },
      {
       "t": "Larmar (på larmknapp i rummet, alt ropar på hjälp)",
       "max": 0.5,
       "opts": [
        0.5,
        0
       ],
       "safety": true
      },
      {
       "t": "Utfört kompressioner med minst 80% godkända",
       "max": 2.5,
       "opts": [
        2.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört kompressioner med total medelhastighet 100-120/min",
       "max": 1.5,
       "opts": [
        1.5,
        0
       ],
       "safety": false
      },
      {
       "t": "Utfört inblåsningar med minst 80% godkända",
       "max": 2,
       "opts": [
        2,
        0
       ],
       "safety": false
      }
     ]
    },
    "guide": "hlr"
   }
  },
  "sessions": [
   {
    "code": "VT23",
    "label": "OSCE I VT23",
    "date": "2023-05-26",
    "type": "Ordinarie",
    "term": "VT",
    "year": 2023,
    "n": 12
   },
   {
    "code": "oVT23",
    "label": "Om-OSCE I VT23",
    "date": "2023-08-25",
    "type": "Om-OSCE",
    "term": "VT",
    "year": 2023,
    "n": 13
   },
   {
    "code": "HT23",
    "label": "OSCE I HT23",
    "date": "2024-01-12",
    "type": "Ordinarie",
    "term": "HT",
    "year": 2024,
    "n": 13
   },
   {
    "code": "oHT23",
    "label": "Om-OSCE I HT23",
    "date": "2024-02-16",
    "type": "Om-OSCE",
    "term": "HT",
    "year": 2024,
    "n": 13
   },
   {
    "code": "VT24",
    "label": "OSCE I VT24",
    "date": "2024-05-24",
    "type": "Ordinarie",
    "term": "VT",
    "year": 2024,
    "n": 14
   },
   {
    "code": "oVT24",
    "label": "Om-OSCE I VT24",
    "date": "aug 2024",
    "type": "Om-OSCE",
    "term": "VT",
    "year": 2024,
    "n": 14
   },
   {
    "code": "HT24",
    "label": "OSCE I HT24",
    "date": "2025-01-14",
    "type": "Ordinarie",
    "term": "HT",
    "year": 2025,
    "n": 13
   },
   {
    "code": "oHT24",
    "label": "Om-OSCE I HT24",
    "date": "2025-02-21",
    "type": "Om-OSCE",
    "term": "HT",
    "year": 2025,
    "n": 13
   },
   {
    "code": "VT25",
    "label": "OSCE I VT25",
    "date": "2025-05-28",
    "type": "Ordinarie",
    "term": "VT",
    "year": 2025,
    "n": 14
   },
   {
    "code": "oVT25",
    "label": "Om-OSCE I VT25",
    "date": "2025-08-29",
    "type": "Om-OSCE",
    "term": "VT",
    "year": 2025,
    "n": 14
   },
   {
    "code": "HT25",
    "label": "OSCE I HT25",
    "date": "2026-01-15",
    "type": "Ordinarie",
    "term": "HT",
    "year": 2026,
    "n": 13
   },
   {
    "code": "oHT25",
    "label": "Om-OSCE I HT25",
    "date": "2026-02-20",
    "type": "Om-OSCE",
    "term": "HT",
    "year": 2026,
    "n": 13
   },
   {
    "code": "VT26",
    "label": "OSCE I VT26",
    "date": "2026-06-04",
    "type": "Ordinarie",
    "term": "VT",
    "year": 2026,
    "n": 13
   },
   {
    "code": "oVT26",
    "label": "Om-OSCE I VT26",
    "date": "2026-08-26",
    "type": "Om-OSCE",
    "term": "VT",
    "year": 2026,
    "n": 13
   }
  ],
  "practice": [
   {
    "id": "P1",
    "n": 1,
    "title": "Bröstsmärta på hälsocentral",
    "area": "Bröstsmärta",
    "guide": "aks",
    "minutes": 6,
    "student": [
     "Du är BT-läkare på en hälsocentral. En 58-årig man söker för bröstsmärta vid promenad senaste veckan. Undersköterskan har tagit EKG (finns på rummet): sinusrytm 78/min, inga ST-förändringar.",
     "Din uppgift är att:",
     "• tolka EKG",
     "• ta smärtanamnes och riskprofil",
     "• informera patienten om misstänkt diagnos och åtgärd",
     "Du har 6 minuter."
    ],
    "patient": [
     "Patient (lätt orolig): ”Det tar i bröstet som ett band när jag går uppför backen. I går kom det när jag satt i soffan och höll i sig en kvart.”",
     "Röker 15 cigaretter/dag sedan 40 år, högt blodtryck, pappa fick hjärtinfarkt vid 55 års ålder. Ingen andfåddhet i vila. Har inte tagit något mot smärtan."
    ],
    "expect": [
     "Normalt EKG utesluter inte AKS.",
     "Nytillkommen och vilosmärta = instabil angina tills motsatsen bevisats.",
     "Åtgärd: akut remiss till akutmottagning för troponin och övervakning, ASA om inga kontraindikationer.",
     "Riskfaktorer: rökning, hypertoni, hereditet."
    ],
    "checklist": [
     {
      "t": "Presenterar sig och öppen fråga",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Tolkar EKG korrekt som normalt",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Smärtanamnes: lokal, karaktär, utstrålning, duration",
      "max": 2,
      "opts": [
       2,
       1.0,
       0
      ],
      "safety": false
     },
     {
      "t": "Frågar om vilosmärta/förlopp",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": true
     },
     {
      "t": "Riskprofil: rökning, BT, diabetes, lipider, hereditet",
      "max": 2,
      "opts": [
       2,
       1.0,
       0
      ],
      "safety": false
     },
     {
      "t": "Arbetsdiagnos instabil angina/AKS",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Akut remiss och ASA",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": true
     },
     {
      "t": "Bjuder in till frågor",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     }
    ]
   },
   {
    "id": "P2",
    "n": 2,
    "title": "Fotstatus vid diabetes",
    "area": "Diabetesfot",
    "guide": "diabetesfot",
    "minutes": 6,
    "student": [
     "På denna station möter du en 68-årig kvinna med typ 2-diabetes sedan 15 år. Hon medicinerar med metformin och atorvastatin. HbA1c 58.",
     "Du ska undersöka fötterna, berätta för bedömaren vad du gör, informera patienten om din bedömning och ge egenvårdsråd.",
     "Du har 6 minuter."
    ],
    "patient": [
     "Patient: ”Jag går mycket barfota hemma, det är skönt.”",
     "Fynd: torr hud och en förhårdnad under stortåbasen höger fot, inga sår. Pulsar palpabla bilateralt. Vibration nedsatt på båda stortårna. Monofilament: känner inte 2 av 3 punkter höger fot."
    ],
    "expect": [
     "Neuropati med nedsatt skyddskänsel höger fot = ökad risk för fotsår.",
     "Normal cirkulation.",
     "Egenvård: daglig inspektion, inte gå barfota, ändamålsenliga skor, smörja torr hud, inte själv skära förhårdnader.",
     "Remiss fotterapeut."
    ],
    "checklist": [
     {
      "t": "Respektfull, ber ta av strumporna",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Inspektion ovansida, sula, mellan tår",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Berättar vad hen letar efter",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "A. dorsalis pedis bilateralt",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "A. tibialis posterior bilateralt",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Demonstrerar test på tumbas/handrygg",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Vibration med stämgaffel",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Monofilament 3 platser/fot",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Korrekt bedömning: neuropati, normal cirkulation",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Egenvårdsråd inkl. inte barfota",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": true
     }
    ]
   },
   {
    "id": "P3",
    "n": 3,
    "title": "Spirometri och KOL-besked",
    "area": "KOL",
    "guide": "kol",
    "minutes": 6,
    "student": [
     "Du är BT-läkare på en hälsocentral. Patienten är 66 år, röker 20 cigaretter per dag sedan 45 år och har haft ansträngningsdyspné och morgonhosta i två år.",
     "Spirometri med bronkdilatationstest (efter): FEV1 1,6 L (58 % av förväntat), FVC 3,1 L, FEV1/FVC 0,52. Ökning av FEV1 efter bronkdilatation: 4 %.",
     "1. Tolka spirometrin och berätta för bedömaren hur du tänker.",
     "2. Informera patienten om resultatet och diagnosen.",
     "Du har 6 minuter."
    ],
    "patient": [
     "Patient: ”Är det astma? Min syster har astma.”",
     "Om rökningen: ”Jag har försökt sluta två gånger, men det gick inte.”"
    ],
    "expect": [
     "Kvot 0,52 <0,70 efter bronkdilatation = obstruktion, ingen signifikant reversibilitet.",
     "KOL GOLD 2 (FEV1 50–79 %).",
     "Information: rökstopp viktigast, erbjud stöd; inhalationsbehandling; vaccination; fysisk aktivitet."
    ],
    "checklist": [
     {
      "t": "Tolkar kvoten som obstruktion",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Bedömer reversibilitet korrekt",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Anger GOLD 2",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Förklarar skillnaden mot astma",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Förklarar diagnosen på lekmannaspråk",
      "max": 2,
      "opts": [
       2,
       1.0,
       0
      ],
      "safety": false
     },
     {
      "t": "Rökstopp och erbjudande om stöd",
      "max": 2,
      "opts": [
       2,
       1.0,
       0
      ],
      "safety": false
     },
     {
      "t": "Nämner behandling/vaccin/fysisk aktivitet",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Kontrollerar förståelse, ger tillfälle för frågor",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     }
    ]
   },
   {
    "id": "P4",
    "n": 4,
    "title": "Hyperkalemi – telefon med sjuksköterska",
    "area": "Njure",
    "guide": "njure_ssk",
    "minutes": 6,
    "student": [
     "Du är primärjour medicin. Klockan är strax efter midnatt. Sökaren går från medicinavdelningen.",
     "Ring tillbaka och hör vad det gäller.",
     "Du har 6 minuter."
    ],
    "patient": [
     "Sjuksköterska: ”Jag ringer om en 78-årig kvinna med hjärtsvikt och kronisk njursvikt. Kvällsproverna visar kalium 6,9.”",
     "Om du frågar: står på enalapril, spironolakton och furosemid. Kreatinin 210 (förra veckan 160). Pigg, puls 52, BT 115/70. EKG ej taget. Har kissat lite under kvällen."
    ],
    "expect": [
     "Be om EKG direkt.",
     "Kalciumglukonat iv vid EKG-förändringar, insulin + glukos, inhalation salbutamol, furosemid iv.",
     "Sätt ut enalapril och spironolakton.",
     "Nytt kalium inom 1–2 timmar; ring vid försämring."
    ],
    "checklist": [
     {
      "t": "Presenterar sig och egen situation",
      "max": 0.5,
      "opts": [
       0.5,
       0
      ],
      "safety": false
     },
     {
      "t": "Frågar bakgrund: sjukdomar, läkemedel",
      "max": 1.5,
      "opts": [
       1.5,
       0
      ],
      "safety": false
     },
     {
      "t": "Frågar vitalparametrar och symtom",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Begär EKG",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": true
     },
     {
      "t": "Ordinerar korrekt akutbehandling",
      "max": 2,
      "opts": [
       2,
       1.0,
       0
      ],
      "safety": true
     },
     {
      "t": "Sätter ut K-höjande läkemedel",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Planerar omkontroll och kontaktväg",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Samtalsstruktur och sammanfattning",
      "max": 2,
      "opts": [
       2,
       1.0,
       0
      ],
      "safety": false
     }
    ]
   },
   {
    "id": "P5",
    "n": 5,
    "title": "Hypotyreos – besked och behandling",
    "area": "Tyreoidea",
    "guide": "tyreoidea",
    "minutes": 6,
    "student": [
     "Till din vårdcentral kommer en 34-årig kvinna på återbesök för provsvar. Hon har varit trött och frusen i flera månader.",
     "TSH 24 mIU/L (0,27–4,2), fritt T4 8 pmol/L (12–22), TPO-antikroppar 420 IU/mL (<50).",
     "Komplettera anamnesen, informera om proverna och diagnosen och starta behandling. Receptskrivning ingår inte.",
     "Du har 6 minuter."
    ],
    "patient": [
     "Patient: ”Är det cancer? Min moster hade cancer i sköldkörteln.”",
     "Om du frågar: torr hud, förstoppning, gått upp 3 kg. Mamma har ”sköldkörtelproblem”. Planerar inte graviditet just nu."
    ],
    "expect": [
     "Primär autoimmun hypotyreos (Hashimoto).",
     "Inte cancer.",
     "Levotyroxin livslångt, fastande på morgonen; TSH-kontroll efter 6–8 veckor.",
     "Kontakta vården vid graviditet (dosen behöver ofta höjas)."
    ],
    "checklist": [
     {
      "t": "Öppen fråga om hur patienten mår",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Frågar fler hypotyreossymtom",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Frågar om ärftlighet",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Förklarar diagnosen primär hypotyreos",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Förklarar autoimmun orsak",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Lugnar angående cancer",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Startar levotyroxin och förklarar intag",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "TSH-kontroll efter 6–8 veckor",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Livslång behandling",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Enkelt språk utan facktermer",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     }
    ]
   },
   {
    "id": "P6",
    "n": 6,
    "title": "Ensidig bensvullnad",
    "area": "DVT",
    "guide": "dvt",
    "minutes": 6,
    "student": [
     "Du är primärjour på akuten. En 61-årig kvinna söker för svullnad och värk i vänster vad sedan tre dagar.",
     "1. Ta en riktad anamnes och gör ett riktat status.",
     "2. Gör en sannolikhetsbedömning.",
     "3. Föreslå provtagning och utredning.",
     "Du har 6 minuter."
    ],
    "patient": [
     "Patient: ”Jag flög hem från Thailand för en vecka sedan, tolv timmar.”",
     "Om du frågar: opererad för bröstcancer för ett år sedan, avslutat cytostatika. Inga andningsbesvär. Fynd: vänster vad 4 cm större än höger mätt 10 cm under tuberositas tibiae, pittingödem, öm längs djupa vener."
    ],
    "expect": [
     "Wells ≥2 (omkretsskillnad >3 cm, pittingödem, ömhet längs djupa vener; cancerbehandling under senare tid kan ge ytterligare poäng) → trolig DVT.",
     "Ultraljud direkt.",
     "Prover: blodstatus, kreatinin, INR, APTT.",
     "Fråga efter lungembolisymtom."
    ],
    "checklist": [
     {
      "t": "Riktad anamnes: duration, cancer, immobilisering, tidigare VTE, hereditet",
      "max": 3,
      "opts": [
       3,
       1.5,
       0
      ],
      "safety": false
     },
     {
      "t": "Frågar om symtom på lungemboli",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": true
     },
     {
      "t": "Mäter omkrets 10 cm under tuberositas tibiae",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Palperar kärlsträng/ömhet",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Sannolikhetsbedömning (Wells)",
      "max": 2,
      "opts": [
       2,
       1.0,
       0
      ],
      "safety": false
     },
     {
      "t": "Föreslår ultraljud",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     },
     {
      "t": "Föreslår prover före antikoagulation",
      "max": 1,
      "opts": [
       1,
       0
      ],
      "safety": false
     }
    ]
   }
  ],
  "checklists": [
   {
    "id": "hlr",
    "title": "Basal HLR",
    "guide": "hlr",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Ruska + ropa",
       "Larm/hjälp",
       "Luftväg öppen",
       "Titta-lyssna-känn max 10 s",
       "30 kompressioner (5–6 cm, 100–120/min)",
       "2 inblåsningar",
       "Fortsätt 30:2 och prata högt"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Livlös person utan normal andning = misstänkt hjärtstopp tills motsatsen bevisats.",
       "Kvaliteten på kompressioner och inblåsningar väger tyngst i mallen: 6 av 10 poäng."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Basal HLR 30:2 tills hjärtstartare/team tar över; AED så fort den finns.",
       "Allmänt: följ gällande riktlinjer från Svenska rådet för hjärt-lungräddning och kontrollera att du kan den senaste versionen."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "kol",
    "title": "KOL, spirometri och obstruktiv/restriktiv lungsjukdom",
    "guide": "kol",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Kvot <0,70 efter bronkdilatation",
       "GOLD 1–4 efter FEV1 %",
       "Reversibilitet ≥12 % och ≥200 ml",
       "Rökstopp först",
       "Saturationsmål 88–92 % vid KOL",
       "Exacerbation: bronkdilatation, kortison, ev. antibiotika"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Kvot <0,70 efter bronkdilatation som inte normaliseras = fixerad obstruktion = KOL i rätt klinik (rökare, hosta, dyspné).",
       "Sänkt FVC med normal kvot = restriktivt mönster, tänk lungfibros, extrapulmonär orsak (obesitas, thoraxdeformitet), kräver lungvolymer och DLCO."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "KOL: rökstopp, LAMA ± LABA, SABA vid behov, vaccin (influensa, pneumokock, covid), fysisk aktivitet/KOL-skola, utvärdera syrgasbehov vid saturation <90 %.",
       "Exacerbation: SABA/ipratropium inhalation, prednisolon 30–40 mg i 5 dagar, antibiotika vid purulent sputum, kontrollerad syrgas (mål 88–92 %), blodgas, lungröntgen, sputumodling/virus-PCR."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "astma",
    "title": "Astma: inhalationsteknik, ACT och PEF-dagbok",
    "guide": "astma",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Visa – låt patienten visa",
       "Utandning, kraftig inandning, håll andan",
       "Skölj munnen efter steroid",
       "ACT ≥20 välkontrollerad",
       "PEF-variation >20 % talar för astma"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Daglig variation i PEF över ca 20 % eller ökning över 60 L/min efter bronkdilatation talar för astma.",
       "ACT 20–25 = välkontrollerad, 16–19 = ej välkontrollerad, ≤15 = dåligt kontrollerad."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Inhalationssteroid som basbehandling, SABA/formoterol vid behov; trappa upp vid dålig kontroll efter att tekniken kontrollerats.",
       "Skriftlig handlingsplan; undvik triggers; rökstopp."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "lungstatus",
    "title": "Lungstatus och diktat",
    "guide": "lungstatus",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Inspektion – palpation – perkussion – auskultation",
       "Jämför sidor, bak och fram",
       "Verbalisera fynd",
       "Diktera: Status + tolkning + diagnos"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Dämpning + bronkialandning + rassel talar för pneumoni; dämpning + nedsatt andningsljud för pleuravätska; hypersonor + nedsatt andningsljud för pneumotorax.",
       "Pip och förlängt exspirium talar för obstruktion; basala finvågiga knatterrassel för fibros eller lungödem."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Lungröntgen, spirometri, saturation, labb; behandling efter diagnos."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "lungproc",
    "title": "Pneumotorax, pleuravätska och arteriell blodgas",
    "guide": "lungproc",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Pneumotorax: liten → observera, stor/symtom → dränage",
       "Light: protein >0,5, LDH >0,6",
       "Blodgas: Allen, radialis, tryck 5 min"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Exsudat enligt Light: pleura/serumprotein >0,5, pleura/serum-LDH >0,6 eller pleura-LDH >2/3 av övre referensvärdet i serum.",
       "Transudat ses oftast vid hjärtsvikt, levercirros och nefros; exsudat vid pneumoni, cancer, lungemboli."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Spänningspneumotorax: nåldekompression omedelbart, sedan dränage; lämna inte patienten.",
       "Pleuravätska: tappning vid symtom, odling, cytologi, pH, behandling av orsaken."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "lungutr",
    "title": "Lungcancermisstanke, tobaksanamnes och snarkning",
    "guide": "lungutr",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Paketår = cig/dag ÷ 20 × år",
       "Motivation 0–10",
       "SVF vid misstänkt lungcancer",
       "Epworth och nattliga apnéer"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Misstänkt lungcancer = remiss i standardiserat vårdförlopp (SVF). Besked: ”misstanke”, inte diagnos.",
       "Snarkning med apnéer och dagtrötthet: tänk obstruktiv sömnapné (utredning med nattlig andningsregistrering)."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "SVF-remiss: DT thorax, lungröntgen, bronkoskopi, kontaktsjuksköterska.",
       "Rökstopp: samtalsstöd, nikotinersättning, vareniklin; Sluta-Röka-Linjen."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "allergi",
    "title": "Allergisk rinokonjunktivit och angioödem",
    "guide": "allergi",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Kvaddel ≥3 mm = positivt",
       "Anafylaxi? Hud, luftväg, cirkulation",
       "Nasal steroid först",
       "Adrenalin i muskel vid anafylaxi"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Positivt pricktest + passande symtom = allergi; test utan symtom = sensibilisering.",
       "Angioödem utan nässelutslag och utan effekt av antihistamin: tänk bradykininmedierat (ACE-hämmare, ärftligt)."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Rinokonjunktivit: nasal steroid i första hand, oral antihistamin, ögondroppar; allergenspecifik immunterapi vid svår, välavgränsad allergi.",
       "Angioödem: ABC, antihistamin/kortison, adrenalin vid anafylaxi; ärftligt: C1-esterashämmare/ikatibant; avsluta ACE-hämmare."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "hjartstatus",
    "title": "Hjärtstatus, blåsljud och EKO-fynd",
    "guide": "hjartstatus",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Aorta – pulmonalis – trikuspidalis – mitralis",
       "Karotis och perifer puls",
       "Systoliskt/diastoliskt",
       "Eko + kardiologremiss"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Crescendo–decrescendo, utstrålning mot karotiderna = aortastenos. Vmax >4 m/s = svår stenos.",
       "Holosystoliskt vid apex, utstrålning mot axillen = mitralisinsufficiens."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "EKG och ekokardiografi; remiss kardiolog.",
       "Symtomatisk svår aortastenos: klaffersättning; följ asymtomatiska regelbundet."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "aks",
    "title": "Bröstsmärta: AKS, perimyokardit och EKG",
    "guide": "aks",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Smärtanamnes strukturerat",
       "Riskprofil",
       "EKG + troponin",
       "ASA vid AKS",
       "Farliga differentialdiagnoser: LE, dissektion, pneumotorax"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "ST-lyft eller nytt LBBB + typisk smärta = STEMI: akut PCI.",
       "Ung man, infektion, lägesberoende pleuritisk smärta, diffusa ST-lyft, PR-sänkning, förhöjt troponin/CRP = perimyokardit."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "AKS: ASA, P2Y12-hämmare, LMWH, nitro vid smärta, syrgas vid saturation <90 %; STEMI akut PCI.",
       "Perimyokardit: NSAID och kolchicin, vila från hård träning, ekokardiografi; sjukhusvård vid förhöjt troponin."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "dyspne",
    "title": "Dyspné: hjärtsvikt eller lungsjukdom",
    "guide": "dyspne",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Funktionsanamnes (NYHA)",
       "Riskfaktorer",
       "EKG, proBNP, rtg, spirometri, eko",
       "Akut: syrgas och diuretika vid lungödem"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Ortopné, nattlig dyspné, ödem, förhöjt proBNP talar för hjärtsvikt.",
       "Rökning, slemhosta och förlängt exspirium talar för KOL."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Hjärtsvikt: ACE-hämmare/ARNI, betablockare, MRA, SGLT2-hämmare, diuretika vid symtom.",
       "KOL/astma: spirometri och inhalationsbehandling."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "arytmi",
    "title": "Arytmi, svimning och ortostatism",
    "guide": "arytmi",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "CHA₂DS₂-VASc",
       "Ortostatism: ≥20/10 mmHg",
       "Alkohol och tyreoidea som trigger",
       "AV-block III: pacemaker"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Ortostatism: fall i systoliskt ≥20 eller diastoliskt ≥10 mmHg inom 3 minuter.",
       "Svimning vid ansträngning, plötslig död i släkten eller ST-avvikelser: kardiell orsak tills motsatsen bevisats."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Förmaksflimmer: antikoagulation (NOAK) enligt CHA₂DS₂-VASc, frekvenskontroll (betablockare), ev. elkonvertering, minska alkohol.",
       "AV-block III: pacemaker; PSVT: vagusmanöver/adenosin, ev. ablation."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "hypertoni",
    "title": "Hypertoni: blodtrycksbedömning och riskbedömning",
    "guide": "hypertoni",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Kontor 140/90, hem 135/85, 24 h 130/80",
       "SCORE2 och organpåverkan",
       "Mät rätt: sitt, vila, manschett",
       "Kris: akut sjukhus"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Hemblodtryck ≥135/85 = hypertoni; mät minst 3–7 dagar morgon och kväll.",
       "Dygnsblodtryck är referensmetod vid osäkerhet (vitrockshypertoni, maskerad hypertoni)."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Livsstil: salt, motion, vikt, alkohol, rökstopp; läkemedel efter risk.",
       "Mål typiskt <140/90; individualisera hos äldre."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "levnadsvanor",
    "title": "Levnadsvanor och motiverande samtal",
    "guide": "levnadsvanor",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "OARS",
       "Motivation 0–10",
       "FaR: 150 min/vecka",
       "Små konkreta mål",
       "Boka uppföljning"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Fysisk aktivitet minst 150 min måttlig intensitet per vecka plus styrketräning 2 ggr/vecka.",
       "Riskbruk alkohol: mer än 9 standardglas/vecka för kvinnor och mer än 14 för män (Socialstyrelsen), eller 4–5 vid ett tillfälle."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Skriftlig ordination (FaR), kontakt med dietist/rökavvänjning vid behov, uppföljning efter 4–12 veckor."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "diabetes",
    "title": "Diabetes: debut, kost och motion",
    "guide": "diabetes",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "HbA1c ≥48 / fP-glukos ≥7,0",
       "Livsstil först, metformin",
       "Fot och ögon",
       "Små steg"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Typ 1 misstänks vid ung ålder, snabb viktnedgång, ketoner: GAD-antikroppar.",
       "HbA1c-mål individualiseras (ofta ca 52 mmol/mol vid typ 2)."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Livsstil, metformin, riskfaktorkontroll (blodtryck, statin), regelbunden kontroll.",
       "Allmänt: lokala riktlinjer (NDR, Socialstyrelsen)."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "diabetesfot",
    "title": "Fotstatus och perifer cirkulation",
    "guide": "diabetesfot",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Inspektion: topp, sula, mellan tår",
       "Pulsar: dorsalis pedis + tibialis posterior",
       "Vibration + monofilament (3 platser/fot)",
       "Demonstrera på tumbas",
       "Egenvård"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Nedsatt känsel (monofilament, vibration) = diabetesneuropati = ökad risk för sår.",
       "Svaga/obefintliga pulsar eller ABI <0,9 talar för perifer kärlsjukdom."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Egenvård: daglig inspektion, tvätta och torka mellan tårna, ändamålsenliga skor, ej gå barfota, klippa naglar rakt, söka vid sår.",
       "Riskgradering och remiss till fotterapeut/ortopedtekniker vid högre risk; kärlremiss vid ischemi."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "dvt",
    "title": "Ensidig bensvullnad: DVT-misstanke",
    "guide": "dvt",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Wells ≥2 trolig",
       "Omkrets 10 cm under tuberositas",
       "Ultraljud vid trolig, D-dimer vid osannolik",
       "Prover före behandling"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Omkretsskillnad >3 cm talar för DVT.",
       "D-dimer har högt negativt prediktivt värde men låg specificitet."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Ultraljud (kompression) eller flebografi; antikoagulation med NOAK/LMWH; tid beror på orsak.",
       "Tänk lungemboli vid andfåddhet eller bröstsmärta."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "hema",
    "title": "Hematologi: lymfkörtelstatus, anemi och blödning",
    "guide": "hema",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Nacke – submandibulärt – supraklavikulärt – axill – ljumske",
       "B-symtom",
       "Ferritin <15 = järnbrist",
       "Utred orsaken till järnbrist"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Hård, fast, smärtfri körtel >2 cm eller B-symtom: misstänk lymfom och utred snabbt.",
       "Ferritin <15 µg/L: säker järnbrist; hos män och postmenopausala kvinnor utred GI-blödning."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Körtlar: blodstatus, DT, körtelbiopsi/excision, SVF vid malignitetsmisstanke.",
       "Järnbrist: järnbehandling, utreda orsak (gastro-/gynekologisk), kontroll av Hb efter 4 veckor."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "trotthet",
    "title": "Trötthet och orkeslöshet: anamnes och differentialdiagnoser",
    "guide": "trotthet",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Öppen start",
       "Sömn, humör, kost, läkemedel, alkohol",
       "Röda flaggor",
       "Hb, CRP, glukos, TSH, kalcium, kreatinin, ferritin"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "De flesta har ingen allvarlig somatisk orsak, men tröttheten är verklig; ta alltid depression och sömnproblem på allvar."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Basprover, behandla orsak, uppföljning, egenvård (sömnhygien, aktivitet)."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "stroke",
    "title": "Stroke och TIA: NIHSS, SBAR och information",
    "guide": "stroke",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "NIHSS: medvetande, blick, synfält, facialis, motorik, ataxi, känsel, språk, dysartri, neglekt",
       "SBAR",
       "Trombolys ≤4,5 h",
       "Sekundärprofylax"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Övergående symtom <24 h = TIA, men utreds som stroke.",
       "NIHSS ger en poängsatt bild av neurologiskt bortfall."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Akut: DT hjärna, ev. trombolys/trombektomi; ASA efter utesluten blödning; kontroll av saturation, blodsocker, blodtryck.",
       "Sekundärprofylax: trombocythämmare (vid TIA/mild stroke ev. dubbelbehandling kort tid), statin, blodtryck, antikoagulation vid förmaksflimmer, karotisåtgärd vid stenos."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "tyreoidea",
    "title": "Tyreoidea och endokrin utredning",
    "guide": "tyreoidea",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Tremor – ögon – puls – tyreoidea",
       "Låg TSH/högt fT4 = hyper",
       "Högt TSH/lågt fT4 = hypo",
       "Levotyroxin fastande, TSH efter 6–8 v"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Låg TSH + högt fT4 = tyreotoxikos (Graves vid exoftalmus och diffus struma).",
       "Högt TSH + lågt fT4 + TPO-antikroppar = autoimmun hypotyreos (Hashimoto)."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Graves: tiamazol, betablockad, ev. radiojod/kirurgi; varning för agranulocytos (feber/halsont).",
       "Hypotyreos: levotyroxin (låg startdos hos äldre/hjärtsjuka), kontroll av TSH."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "endoakut",
    "title": "Akut medvetslöshet, intoxikation och svimning",
    "guide": "endoakut",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "ABCDE",
       "Glukos direkt",
       "Små pupiller → naloxon",
       "Övervaka efter antidot"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Små pupiller + långsam andning + medvetandesänkning = opioidpåverkan: naloxon.",
       "Hypoglykemi kan ge medvetslöshet, kramper och fokal neurologi."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "ABCDE, glukos, naloxon vid opioidintoxikation (upprepa vid behov), övervaka tills effekten klingat.",
       "Paracetamolintoxikation: acetylcystein enligt nomogram."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "njure_ssk",
    "title": "Njure: samtal med sjuksköterska om patient (hyperkalemi, natrium, diures)",
    "guide": "njure_ssk",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "SBAR",
       "EKG vid hyperkalemi",
       "Kalcium – insulin/glukos – salbutamol",
       "Omkontroll"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Hyperkalemi med EKG-förändringar (spetsiga T, breddat QRS) är akut.",
       "Hypernatremi: sänk inte för snabbt (risk för hjärnödem)."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Hyperkalemi: kalcium iv, insulin/glukos, salbutamol, diuretika, kaliumbindare; dialys vid refraktär.",
       "Hypernatremi: fritt vatten och vätskekorrektion, långsam sänkning."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "njure_anam",
    "title": "Njure: anamnes vid hematuri, proteinuri och nefrotiskt syndrom",
    "guide": "njure_anam",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Socialt – hereditet – sjukdomar – läkemedel – miktion – övrigt",
       "Sediment och kvot",
       "Serologi + ultraljud",
       "Remiss njurmedicin"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Hematuri + proteinuri + stigande kreatinin = glomerulär sjukdom tills motsatsen bevisats.",
       "Ödem, kraftig proteinuri, låg albumin = nefrotiskt syndrom."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Utredning: sediment, 24-h/kvot, serologi, ultraljud, ev. njurbiopsi.",
       "Nefrotiskt syndrom: diuretika, ACE-hämmare/ARB, saltrestriktion, statin; njurbiopsi via specialist."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "gastro_buk",
    "title": "Gastro: ont i magen, akut buk och IBD",
    "guide": "gastro_buk",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Handhygien",
       "Inspektion – auskultation – perkussion – palpation",
       "Ömma ställen sist",
       "CRP, blodstatus, lever/pankreas, urin",
       "Alarmsymtom"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Släppömhet, defense, rigid buk = peritonit: akut kirurgkontakt.",
       "Nytillkommen dyspepsi >50–60 år eller alarmsymtom (blödning, viktnedgång, dysfagi, anemi): gastroskopi."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Smärtlindring, vätska, antiemetika, fasta vid misstanke om operation, bakjour.",
       "UC-skov: inläggning vid svår sjukdom, intravenöst kortison."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "gastro_lever",
    "title": "Gastro: förhöjda leverprover (kolestas)",
    "guide": "gastro_lever",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Kolestas: ALP, GT, bilirubin",
       "Ultraljud + MRCP",
       "Läkemedel och alkohol",
       "Prioritera status"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Högt ALP/GT och konjugerat bilirubin med måttligt förhöjda transaminaser = kolestas.",
       "Tänk gallstas (sten, tumör), PBC, PSC och läkemedel."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Ultraljud, MRCP/ERCP, serologi, behandling efter orsak; kontakta gastroenterolog.",
       "Allmänt: lokala PM."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "infektion",
    "title": "Infektion: handläggning, rond och information",
    "guide": "infektion",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "CRB-65",
       "Blododlingar ×2 före antibiotika",
       "Allergi: fråga",
       "Asymtomatisk bakteriuri behandlas ej",
       "Enkelrum vid MRB"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "CRB-65: 0–1 poäng hemma, 2 sjukhus, 3–4 allvarligt.",
       "Asymtomatisk bakteriuri hos äldre ska normalt inte behandlas med antibiotika."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Pneumoni: penicillin/cefalosporin ± makrolid efter svårighetsgrad; legionella: makrolid/doxycyklin/fluorokinolon.",
       "Rosfeber: penicillin, klindamycin vid allergi."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "hygien",
    "title": "Basal hygienrutin och personlig skyddsutrustning",
    "guide": "hygien",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Sprita händerna",
       "Förkläde – mask – visir – handskar",
       "Av: handskar – förkläde – sprit",
       "Sprita efteråt"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Droppsmitta: munskydd och visir; kontaktsmitta: förkläde och handskar; luftburen: andningsskydd."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Följ lokala hygienrutiner och Vårdhandboken."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "kognition",
    "title": "Kognitiv skattning (MMSE) och demensutredning",
    "guide": "kognition",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Orientering – återgivning – räkning – fördröjd återgivning – benämning – kommando – skrivning – ritning",
       "Anhöriganamnes",
       "Basprover + bilddiagnostik"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "MMSE 26–30 normalt, 21–25 lätt, 10–20 måttlig, <10 svår nedsättning (riktvärden).",
       "Demens kräver nedsatt funktion i vardagen, inte bara testresultat."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Basal demensutredning: anamnes, status, blodprover, bilddiagnostik, kognitiv test; behandling: kolinesterashämmare vid Alzheimer, stöd till anhöriga, körkortsbedömning.",
       "Allmänt: lokala riktlinjer."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "geriatrik",
    "title": "Geriatrik: läkemedelsbiverkan, utskrivning och personcentrerad vård",
    "guide": "geriatrik",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Tidsrelation",
       "Läkemedelslista uppdatera",
       "Nytta mot besvär",
       "Uppföljning"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Statin + muskelvärk: kontrollera CK, TSH, D-vitamin; överväg paus eller dosreduktion.",
       "Äldre: risk för ortostatism, fall, interaktioner och förskrivningskaskader."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Läkemedelsöversyn, uppdatera läkemedelslista, patientdelaktighet, uppföljning.",
       "Allmänt: Janusmed/Fass och lokala PM."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "bfm",
    "title": "Bilddiagnostik: akut radiologi",
    "guide": "bfm",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Systematik",
       "Diagnos + fynd",
       "Peka och beskriv",
       "Nästa steg"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Pneumotorax: pleuralinje utan lungteckning; pleuravätska: utplånad kostofrenisk vinkel med meniskbild; pneumoni: förtätning med luftbronkogram; lungödem: Kerley B-linjer och kardiomegali."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Akut åtgärd efter bildfynd; kontakta radiolog vid osäkerhet."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   },
   {
    "id": "recept",
    "title": "Receptförskrivning",
    "guide": "recept",
    "phases": [
     {
      "name": "Förberedelse",
      "items": [
       "Läs dörrinformationen noga",
       "Handhygien"
      ]
     },
     {
      "name": "Kommunikation och samtycke",
      "items": [
       "Hälsa, presentera dig, bekräfta identitet",
       "Förklara vad du ska göra"
      ]
     },
     {
      "name": "Genomförande",
      "items": [
       "Namn + pnr",
       "Substans, styrka, form, dos",
       "Mängd/uttag, utbyte",
       "Signera",
       "Informera muntligt"
      ]
     },
     {
      "name": "Tolkning",
      "items": [
       "Kontrollera allergier och interaktioner innan förskrivning."
      ]
     },
     {
      "name": "Handläggning",
      "items": [
       "Följ FASS och gällande föreskrifter."
      ]
     },
     {
      "name": "Avslut och sammanfattning",
      "items": [
       "Sammanfatta och ge plan",
       "Fråga om patienten har frågor",
       "Tacka"
      ]
     }
    ]
   }
  ],
  "comm": [
   {
    "id": "intro",
    "title": "Presentation och inledning",
    "basis": "Presentation och struktur poängsätts i flera T6-mallar (t.ex. geriatrik och infektion).",
    "items": [
     "Hej, jag heter … och är läkare här. Stämmer det att du heter …?",
     "Jag har förstått att du kommer för … – stämmer det?",
     "Vi har ungefär sex minuter. Först vill jag höra hur du har det, sedan ställer jag några frågor och sist pratar vi om hur vi går vidare."
    ]
   },
   {
    "id": "consent",
    "title": "Samtycke till undersökning",
    "basis": "Statusstationer (fotstatus, Graves, lungstatus) belönar respektfullt och förklarande bemötande.",
    "items": [
     "Jag skulle vilja undersöka dina fötter/din hals/dina lungor. Går det bra?",
     "Säg till om något gör ont eller känns obehagligt.",
     "Nu ska jag … – du kommer att känna …"
    ]
   },
   {
    "id": "history",
    "title": "Anamnes: öppet till riktat",
    "basis": "”Balans mellan öppna och riktade frågor” poängsätts i gastro- och endostationer.",
    "items": [
     "Berätta med egna ord vad som har hänt.",
     "Kan du beskriva det närmare? När började det?",
     "Har du märkt något mer? (sedan riktade frågor)",
     "Har du själv funderat på vad det kan vara? Är det något som oroar dig?"
    ]
   },
   {
    "id": "info",
    "title": "Information till patient (förklara – kontrollera – fråga)",
    "basis": "Begriplig information och tillfälle till frågor poängsätts i nästan alla T6-mallar.",
    "items": [
     "Vad vet du redan om …?",
     "Kort sagt innebär det att … (små portioner, inga facktermer)",
     "Kan du berätta med egna ord hur du ska ta medicinen? (teach-back)",
     "Vilka frågor har du?"
    ]
   },
   {
    "id": "mi",
    "title": "Motiverande samtal",
    "basis": "Levnadsvanor, tobak och fysisk aktivitet återkommer i AM-stationerna.",
    "items": [
     "Hur ser du själv på …?",
     "På en skala 0–10, hur viktigt är det för dig att förändra …? Varför inte en lägre siffra?",
     "Det låter som att du vill … men samtidigt …",
     "Vad skulle vara ett första litet steg?"
    ]
   },
   {
    "id": "difficult",
    "title": "Oro och svåra besked",
    "basis": "Empatiskt förhållningssätt poängsätts t.ex. vid hypofystumör, SVF lungcancer och demens.",
    "items": [
     "Jag har tyvärr ett besked som kan vara jobbigt att höra.",
     "Jag förstår att det här väcker oro. Vad tänker du på just nu?",
     "Det är en misstanke, inte en diagnos. Vi utreder snabbt och du får en kontaktperson."
    ]
   },
   {
    "id": "safety",
    "title": "Säkerhetsnät och avslut",
    "basis": "Pedagogiskt allmänt; uppföljning och plan ingår i de flesta mallar.",
    "items": [
     "Om du får … (varningssymtom) ska du söka direkt.",
     "Vi ses igen om … för att följa upp.",
     "Ska vi sammanfatta det vi kommit fram till?"
    ]
   },
   {
    "id": "sbar",
    "title": "SBAR-rapport",
    "basis": "SBAR används i stroke-, njur- och lungstationer (t.ex. HT25, oHT25, VT23).",
    "items": [
     "S: Jag ringer om … år gammal patient med … (aktuellt problem).",
     "B: Bakgrund: tidigare sjukdomar, läkemedel.",
     "A: Aktuellt: vitalparametrar, status, prover, min bedömning.",
     "R: Jag föreslår … Vill du att jag …?"
    ]
   },
   {
    "id": "phone",
    "title": "Telefonsamtal med sjuksköterska",
    "basis": "Telefonstationen med medicinavdelningen nattetid finns i flera tillfällen (njure).",
    "items": [
     "Hej, det är primärjouren. Jag har tid nu – vad gäller det?",
     "Vilka är vitalparametrarna? Finns EKG?",
     "Jag ordinerar … (substans, dos, väg). Kan du läsa tillbaka?",
     "Ta nytt prov om … timmar och ring mig om patienten försämras."
    ]
   }
  ],
  "compNames": {
   "ANAM": "Anamnes",
   "KOMM": "Kommunikation/information",
   "RESON": "Kliniskt resonemang",
   "STAT": "Status/undersökning",
   "PROC": "Procedur/praktisk färdighet",
   "AKUT": "Akut omhändertagande",
   "ORD": "Läkemedelsordination",
   "BILD": "Bildtolkning",
   "DOK": "Dokumentation/diktat",
   "SBAR": "SBAR/telefon"
  },
  "revision": {
   "rules": [
    "Läs dörrinformationen – uppgiften avgör allt.",
    "Presentera dig och säg vad du ska göra.",
    "Berätta högt vad du gör och vad du finner.",
    "Säg slutsatsen – utförande räcker inte.",
    "Tänk handläggning: utredning, behandling, remiss, uppföljning.",
    "Ge aktivt chans att ställa frågor.",
    "Lekmannaspråk till patienten.",
    "Gör inte det dörren säger att du inte ska göra (t.ex. status eller livsstilsråd).",
    "Håll tiden: 6 minuter.",
    "Handhygien in och ut."
   ],
   "numbers": [
    [
     "HLR: kompressionsfrekvens",
     "100–120/min",
     "Bedömningsmall (HLR)"
    ],
    [
     "HLR: godkända kompressioner/inblåsningar",
     "minst 80 %",
     "Bedömningsmall (HLR)"
    ],
    [
     "HLR: kontroll av andning",
     "ca 10 sekunder",
     "Bedömningsmall (HLR)"
    ],
    [
     "Hemblodtryck, gräns för hypertoni",
     "135/85 mmHg",
     "Bedömningsmall oVT26 st. 2 (gränsen efterfrågas); värdet allmän riktlinje"
    ],
    [
     "Levotyroxin: kontroll av TSH",
     "efter 6–8 veckor",
     "Bedömningsmall oVT26 st. 6"
    ],
    [
     "Omkretsmätning vid DVT",
     "10 cm nedom tuberositas tibiae",
     "Bedömningsmall oVT26 st. 4"
    ],
    [
     "Monofilament vid diabetesfot",
     "3 positioner per fot",
     "Bedömningsmall VT26 st. 1"
    ],
    [
     "Kontroller vid misstänkt sepsis/gastroenterit",
     "x 6–12 (tätt)",
     "Bedömningsmall oHT25 st. 5"
    ],
    [
     "Spirometri: obstruktion",
     "FEV1/FVC <0,70 efter bronkdilatation",
     "Allmän riktlinje (GOLD)"
    ],
    [
     "Pricktest positivt",
     "kvaddel ≥3 mm",
     "Allmän riktlinje"
    ],
    [
     "Ortostatism",
     "fall ≥20 systoliskt eller ≥10 diastoliskt inom 3 min",
     "Allmän riktlinje"
    ],
    [
     "Trombolys vid stroke",
     "inom 4,5 timmar",
     "Allmän riktlinje"
    ],
    [
     "KOL: syrgas",
     "saturationsmål 88–92 %",
     "Allmän riktlinje"
    ],
    [
     "Diabetes diagnos",
     "HbA1c ≥48 mmol/mol",
     "Allmän riktlinje"
    ]
   ],
   "mistakes": [
    [
     "Utför men säger inte slutsatsen",
     "Dokumenterat (statusstationer, BFM)",
     "Avsluta varje moment med ”det betyder…”"
    ],
    [
     "Glömmer att ge chans till frågor",
     "Dokumenterat (flera mallar)",
     "Avsätt de sista 20 sekunderna för frågor"
    ],
    [
     "Glömmer larm i HLR",
     "Dokumenterat (0,5 p)",
     "Ropa direkt efter medvetandekontrollen"
    ],
    [
     "Behandlar asymtomatisk bakteriuri",
     "Dokumenterat (VT26 st. 7, 3 p)",
     "Fråga om symtom och förklara varför antibiotika inte behövs"
    ],
    [
     "Ingen allergifråga före antibiotika",
     "Dokumenterat (infektionsmallar)",
     "Fråga alltid och om typ av reaktion"
    ],
    [
     "Saknar saturationsgräns vid syrgas till KOL",
     "Dokumenterat (VT23 st. 1)",
     "Säg målvärdet högt"
    ],
    [
     "Demonstrerar inte monofilament först",
     "Dokumenterat (VT26 st. 1)",
     "Testa på tumbas/handrygg innan foten"
    ],
    [
     "Ingen plan för omkontroll i telefon",
     "Dokumenterat (njure)",
     "Säg när och vad som ska kontrolleras"
    ],
    [
     "Tidsslöseri i anamnesen",
     "Allmänt",
     "Planera tiden: anamnes, bedömning, plan"
    ],
    [
     "Facktermer i besked",
     "Allmänt (mallar belönar lekmannaspråk)",
     "Förklara med vardagsord"
    ]
   ],
   "reasoning": [
    "Sammanfatta problemet i en mening.",
    "Tre differentialdiagnoser: vanligast, farligast, mest atypisk.",
    "Stöd för/emot varje alternativ.",
    "Nästa steg: vilka prover/undersökningar skiljer dem åt – och vad är akut?",
    "Uttala arbetsdiagnosen.",
    "Handläggning och säkerhetsnät."
   ],
   "dangerous": [
    [
     "Bröstsmärta",
     "Akut koronart syndrom, lungemboli, aortadissektion, pneumotorax"
    ],
    [
     "Andnöd",
     "Lungemboli, hjärtsvikt, pneumoni, pneumotorax, anafylaxi"
    ],
    [
     "Ensidig bensvullnad",
     "DVT med risk för lungemboli"
    ],
    [
     "Svimning",
     "Arytmi, aortastenos, lungemboli, blödning"
    ],
    [
     "Akut buksmärta",
     "Perforation, ileus, rupturerat AAA, mesenteriell ischemi"
    ],
    [
     "Feber",
     "Sepsis, meningit, nekrotiserande infektion"
    ],
    [
     "Okontaktbar patient",
     "Hypoxi, hypoglykemi, intox (opioid), stroke, hjärtstopp"
    ],
    [
     "Läppsvullnad",
     "Anafylaxi, luftvägshotande angioödem"
    ],
    [
     "Hyperkalemi",
     "Arytmi, hjärtstopp"
    ]
   ],
   "emergency": [
    "HLR: larm → luftväg → titta–lyssna–känn ≤10 s → 30:2, 100–120/min.",
    "Medvetslös: ABCDE, glukos, naloxon vid misstänkt opioid.",
    "Stroke: tid, NIHSS, DT, trombolys/trombektomi inom tidsfönster.",
    "Hyperkalemi: EKG, kalcium iv, insulin/glukos, salbutamol.",
    "Anafylaxi: adrenalin i muskel, syrgas, vätska.",
    "Sepsis: blododlingar, antibiotika inom en timme, vätska."
   ],
   "timing": [
    [
     "Konsultation",
     "0:00–0:30 inledning • 0:30–3:30 anamnes • 3:30–5:30 bedömning och plan • 5:30–6:00 avslut"
    ],
    [
     "Status",
     "0:00–0:30 information • 0:30–4:30 undersökning med verbalisering • 4:30–6:00 slutsats och information"
    ],
    [
     "Procedur",
     "0:00–1:00 förberedelse/information • 1:00–5:00 utförande • 5:00–6:00 avslut"
    ],
    [
     "Rond",
     "0:00–2:30 anamnes + värden • 2:30–5:00 bedömning och plan • 5:00–6:00 information"
    ]
   ]
  }
 }
};
