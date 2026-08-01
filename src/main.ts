import './styles.css';
import './overrides.css';
import {
  calculate,
  encode,
  initialRecipe,
  type Recipe,
  type Result,
  type Yeast,
} from './core';
import { shareTextWithLink } from './share';

type Lang = 'de' | 'en' | 'it';
type Theme = 'system' | 'light' | 'dark';
type Route = 'calculator' | 'info' | 'version' | 'imprint' | 'privacy';

const version = '0.1.0-beta.9';

const copy = {
  de: {
    amount: 'Teigmenge', balls: 'Teiglinge', weight: 'Gewicht je Teigling', hydration: 'Hydration', yeast: 'Hefeform',
    fresh: 'Frischhefe · Quellenwert', idy: 'Instant-Trockenhefe · 3:1-Praxisnäherung', calc: 'Berechnen', result: 'Dein Teig',
    flour: 'Mehl', water: 'Wasser', salt: 'Salz', process: 'Fester Ablauf', pre: '50 Min. warme Vorphase',
    cold: '24 Std. bei 4–6 °C · als 250-g-Ballen', post: '4–6 Std. warme Schlussphase',
    experimental: 'Vorläufige Praxisreferenz – experimentell', copyAction: 'Kopieren', copy: 'Text kopieren', link: 'Link kopieren', share: 'Teilen',
    copyQuestion: 'Was möchtest du kopieren?', shareQuestion: 'Was möchtest du teilen?', shareText: 'Text teilen', shareLink: 'Link teilen', cancel: 'Abbrechen',
    lang: 'Sprache', theme: 'Darstellung', menu: 'Menü öffnen', system: 'System', light: 'Hell', dark: 'Dunkel',
  },
  en: {
    amount: 'Dough amount', balls: 'Dough balls', weight: 'Weight per ball', hydration: 'Hydration', yeast: 'Yeast form',
    fresh: 'Fresh yeast · source value', idy: 'Instant dry yeast · declared 3:1 approximation', calc: 'Calculate', result: 'Your dough',
    flour: 'Flour', water: 'Water', salt: 'Salt', process: 'Fixed process', pre: '50 min warm pre-phase',
    cold: '24 h at 4–6 °C · as 250 g balls', post: '4–6 h warm final phase',
    experimental: 'Preliminary practice reference – experimental', copyAction: 'Copy', copy: 'Copy text', link: 'Copy link', share: 'Share',
    copyQuestion: 'What would you like to copy?', shareQuestion: 'What would you like to share?', shareText: 'Share text', shareLink: 'Share link', cancel: 'Cancel',
    lang: 'Language', theme: 'Appearance', menu: 'Open menu', system: 'System', light: 'Light', dark: 'Dark',
  },
  it: {
    amount: 'Quantità d’impasto', balls: 'Panetti', weight: 'Peso per panetto', hydration: 'Idratazione', yeast: 'Tipo di lievito',
    fresh: 'Lievito fresco · valore della fonte', idy: 'Lievito secco istantaneo · approssimazione pratica 3:1', calc: 'Calcola', result: 'Il tuo impasto',
    flour: 'Farina', water: 'Acqua', salt: 'Sale', process: 'Procedimento fisso', pre: '50 min di riposo iniziale al caldo',
    cold: '24 ore a 4–6 °C · in panetti da 250 g', post: '4–6 ore finali a temperatura ambiente',
    experimental: 'Riferimento pratico preliminare – sperimentale', copyAction: 'Copia', copy: 'Copia testo', link: 'Copia link', share: 'Condividi',
    copyQuestion: 'Cosa vuoi copiare?', shareQuestion: 'Cosa vuoi condividere?', shareText: 'Condividi testo', shareLink: 'Condividi link', cancel: 'Annulla',
    lang: 'Lingua', theme: 'Aspetto', menu: 'Apri menu', system: 'Sistema', light: 'Chiaro', dark: 'Scuro',
  },
} as const;

const ui = {
  de: {
    intro: 'Ein Pizza-Rechner in Entwicklung, der dir hilft, Pizza zu Hause Schritt für Schritt verlässlicher zu machen.',
    profile: 'Profil', profileName: 'Napoletana Verace', noAutomaticYeast: 'Noch keine allgemeine automatische Hefeaussage.',
    reference: 'Aktuelle Praxisreferenz: Canotto · 24 h Kaltgare', info: 'Allgemeine Informationen', versions: 'Versionshinweise',
    imprint: 'Impressum', privacy: 'Datenschutz', back: 'Zurück zum Rechner', toTop: 'Ganz nach oben', toBottom: 'Ganz nach unten', pageNavigation: 'Seitennavigation',
    about: 'Allgemeine Informationen', model: 'Aktuell verwendete Praxisreferenz',
    modelText: 'Renato Bosco – Canotto: 0,50 % Frischhefe, 70–75 % Hydration, 2 % Salz, 50 Minuten warme Vorphase, 24 Stunden bei 4–6 °C als 250-g-Ballen und 4–6 Stunden warme Schlussphase. Instant-Trockenhefe ist nur eine deklarierte 3:1-Praxisnäherung.',
    limits: 'Referenz und Grenzen',
    limitsText: 'Eine feste, skalierbare Praxisreferenz nach Renato Bosco – keine wissenschaftlich validierte Hefeberechnung. Erlaubt sind 70–75 % Hydration und reine Skalierung; Zeit, Temperatur, Salz und Prozess bleiben unverändert.',
    versionTitle: 'Versionshinweise',
    responsible: 'Verantwortlich für dieses Internetangebot', project: 'Projekt',
    projectText: 'PizzaCalc ist ein privat betriebenes, quelloffenes Webprojekt.', sourceLicense: 'Quellcode und Lizenz',
    sourceLicenseText: 'Der Quellcode ist im GitHub-Repository verfügbar und steht unter der Mozilla Public License 2.0.',
    moreInfo: 'Hinweise zu Berechnungsgrundlagen, Praxisreferenzen und fachlichen Grenzen stehen unter „Allgemeine Informationen“.',
    privacyIntro: 'PizzaCalc benötigt kein Benutzerkonto und betreibt keine eigene serverseitige Speicherung von Rezepten.',
    localTitle: 'Lokale Einstellungen', localText: 'Sprache, Darstellung und die zuletzt gewählte Hefeform werden ausschließlich im Browser gespeichert. Du kannst diese Daten jederzeit über die Website-Daten deines Browsers löschen.',
    recipeTitle: 'Rezeptlinks', recipeText: 'Ein erzeugter Rezeptlink enthält die gewählten Rezeptparameter in seiner URL. Beim Öffnen wird die vollständige URL an die Hosting-Infrastruktur übermittelt; an andere Personen gibst du sie nur weiter, wenn du den Link selbst kopierst oder teilst.',
    hostingTitle: 'Bereitstellung und Verbindungsdaten', hostingText: 'Die Seite wird statisch über GitHub Pages bereitgestellt. Beim Aufruf können technisch notwendige Verbindungsdaten, insbesondere IP-Adresse, Zeitpunkt und angeforderte Datei, durch den Hostinganbieter verarbeitet werden.',
    externalTitle: 'Externe Links', externalText: 'Links zum Quellenmaterial und zum GitHub-Repository führen zu externen Angeboten, für deren Datenverarbeitung die jeweiligen Betreiber verantwortlich sind.',
    noTracking: 'PizzaCalc verwendet keine Analyse-, Werbe- oder Social-Media-Tracking-Skripte.', contact: 'Kontakt',
  },
  en: {
    intro: 'A pizza calculator in development, helping you make pizza at home more reliably, one step at a time.',
    profile: 'Profile', profileName: 'Napoletana Verace', noAutomaticYeast: 'No general automatic yeast recommendation yet.',
    reference: 'Current practice reference: Canotto · 24 h cold fermentation', info: 'General information', versions: 'Release notes',
    imprint: 'Legal notice', privacy: 'Privacy', back: 'Back to calculator', toTop: 'Go to top', toBottom: 'Go to bottom', pageNavigation: 'Page navigation',
    about: 'General information', model: 'Current practice reference',
    modelText: 'Renato Bosco – Canotto: 0.50% fresh yeast, 70–75% hydration, 2% salt, 50 minutes warm pre-phase, 24 hours at 4–6°C as 250 g balls and 4–6 hours warm final phase. Instant dry yeast is only a declared 3:1 practical approximation.',
    limits: 'Reference and limits',
    limitsText: 'A fixed, scalable practice reference based on Renato Bosco – not a scientifically validated yeast calculation. Only 70–75% hydration and proportional scaling are allowed; time, temperature, salt and process remain fixed.',
    versionTitle: 'Release notes',
    responsible: 'Responsible for this website', project: 'Project',
    projectText: 'PizzaCalc is a privately operated open-source web project.', sourceLicense: 'Source code and licence',
    sourceLicenseText: 'The source code is available in the GitHub repository and is licensed under the Mozilla Public License 2.0.',
    moreInfo: 'Information about calculation principles, practice references and technical limits is available under “General information”.',
    privacyIntro: 'PizzaCalc requires no account and does not operate its own server-side storage for recipes.',
    localTitle: 'Local settings', localText: 'Language, appearance and the most recently selected yeast form are stored only in your browser. You can delete this data at any time through your browser’s site-data controls.',
    recipeTitle: 'Recipe links', recipeText: 'A generated recipe link contains the selected recipe parameters in its URL. Opening it sends the full URL to the hosting infrastructure; you share it with other people only when you copy or share the link yourself.',
    hostingTitle: 'Hosting and connection data', hostingText: 'The site is served statically through GitHub Pages. When you visit, technically necessary connection data, particularly IP address, time and requested file, may be processed by the hosting provider.',
    externalTitle: 'External links', externalText: 'Links to source material and the GitHub repository lead to external services whose operators are responsible for their respective data processing.',
    noTracking: 'PizzaCalc uses no analytics, advertising or social-media tracking scripts.', contact: 'Contact',
  },
  it: {
    intro: 'Un calcolatore per pizza in sviluppo, pensato per aiutarti a preparare a casa pizze sempre più affidabili, passo dopo passo.',
    profile: 'Profilo', profileName: 'Napoletana Verace', noAutomaticYeast: 'Non è ancora disponibile un’indicazione automatica generale del lievito.',
    reference: 'Riferimento pratico attuale: Canotto · 24 h di maturazione a freddo', info: 'Informazioni generali', versions: 'Note di versione',
    imprint: 'Note legali', privacy: 'Privacy', back: 'Torna al calcolatore', toTop: 'Vai all’inizio', toBottom: 'Vai alla fine', pageNavigation: 'Navigazione della pagina',
    about: 'Informazioni generali', model: 'Riferimento pratico attualmente utilizzato',
    modelText: 'Renato Bosco – Canotto: 0,50% di lievito fresco, 70–75% di idratazione, 2% di sale, 50 minuti di fase iniziale al caldo, 24 ore a 4–6 °C in panetti da 250 g e 4–6 ore finali al caldo. Il lievito secco istantaneo è solo un’approssimazione pratica dichiarata di 3:1.',
    limits: 'Riferimento e limiti',
    limitsText: 'Un riferimento pratico fisso e scalabile secondo Renato Bosco, non un calcolo del lievito convalidato scientificamente. Sono consentite solo un’idratazione del 70–75% e la scalatura proporzionale; tempi, temperatura, sale e procedimento restano invariati.',
    versionTitle: 'Note di versione',
    responsible: 'Responsabile di questo sito', project: 'Progetto',
    projectText: 'PizzaCalc è un progetto web open source gestito privatamente.', sourceLicense: 'Codice sorgente e licenza',
    sourceLicenseText: 'Il codice sorgente è disponibile nel repository GitHub ed è distribuito secondo la Mozilla Public License 2.0.',
    moreInfo: 'Le informazioni sui principi di calcolo, i riferimenti pratici e i limiti tecnici sono disponibili in “Informazioni generali”.',
    privacyIntro: 'PizzaCalc non richiede un account e non gestisce un proprio archivio server delle ricette.',
    localTitle: 'Impostazioni locali', localText: 'Lingua, aspetto e ultimo tipo di lievito selezionato vengono salvati esclusivamente nel browser. Puoi cancellare questi dati in qualsiasi momento tramite le impostazioni dei dati del sito del browser.',
    recipeTitle: 'Link delle ricette', recipeText: 'Un link generato contiene nella propria URL i parametri selezionati. All’apertura, l’URL completo viene trasmesso all’infrastruttura di hosting; lo comunichi ad altre persone solo se copi o condividi personalmente il link.',
    hostingTitle: 'Hosting e dati di connessione', hostingText: 'Il sito viene pubblicato staticamente tramite GitHub Pages. Durante l’accesso il fornitore di hosting può trattare i dati di connessione tecnicamente necessari, in particolare indirizzo IP, orario e file richiesto.',
    externalTitle: 'Link esterni', externalText: 'I link alle fonti e al repository GitHub conducono a servizi esterni, i cui operatori sono responsabili del rispettivo trattamento dei dati.',
    noTracking: 'PizzaCalc non utilizza script di analisi, pubblicità o tracciamento dei social media.', contact: 'Contatto',
  },
} as const;

type Copy = { [K in keyof typeof copy.de]: string };

const releases = {
  de: [
    ['0.1.0-beta.9', 'Veröffentlichungszeit wird nachgereicht', 'Profilhinweis übersichtlicher getrennt, Kopier- und Teilen-Aktionen mit klassischen Symbolen jederzeit verfügbar gemacht, Auswahl zwischen Rezepttext und Link ergänzt, den Link im geteilten Rezepttext abgesetzt und die Kopfzeile kompakter gestaltet.'],
    ['0.1.0-beta.8', '1. August 2026, 16:54:48 MESZ', 'Sprachwahl auf Italienisch, Deutsch und Englisch geordnet, nach der Berechnung zum Ergebnis gesprungen, Scrollsteuerung auf der Rechnerseite ergänzt und den Kopfbereich beim Scrollen sichtbar gehalten.'],
    ['0.1.0-beta.7', '1. August 2026, 15:41:15 MESZ', 'Seitentitel und Einleitungstexte auf schmalen Bildschirmen wieder korrekt untereinander angeordnet.'],
    ['0.1.0-beta.6', '1. August 2026, 14:56:23 MESZ', 'Footer-Links auf schmalen Bildschirmen getrennt, „Fester Ablauf“ unter „Teigmenge“ angeordnet, die Seitenbreite auf einheitliche 800 px gesetzt und interne Seitenwechsel an den Seitenanfang geführt.'],
    ['0.1.0-beta.5', '1. August 2026, 14:18:45 MESZ', 'Instant-Trockenhefe als Standard für neue Seiten eingeführt, gespeicherte Auswahlen und Rezeptlinks berücksichtigt sowie Navigation, Seitenlayout, Sprachsymbole, Theme-Voreinstellung und rechtliche Informationen vereinheitlicht.'],
    ['0.1.0-beta.4', '1. August 2026, 13:22:10 MESZ', 'Versionshinweise von der Tabelle in eine übersichtliche chronologische Liste umgestellt. Alle Einträge zeigen nun den vollständigen Veröffentlichungszeitstempel.'],
    ['0.1.0-beta.3', '1. August 2026, 13:02:01 MESZ', 'Versionshistorie eingeführt und die bisherigen öffentlichen Beta-Stände rückwirkend dokumentiert.'],
    ['0.1.0-beta.2', '1. August 2026, 12:43:44 MESZ', 'Hamburger-Menü, Flaggenwahl sowie System-, Hell- und Dunkelmodus ergänzt. Informationsseite und anklickbare Versionsanzeige eingeführt.'],
    ['0.1.0-beta.1', '31. Juli 2026, 20:47:16 MESZ', 'Erste öffentliche Praxis-Beta mit skalierbarer Canotto-Praxisreferenz, Zutatenberechnung, Ergebnisanzeige sowie Kopier-, Link- und Teilen-Funktionen veröffentlicht.'],
  ],
  en: [
    ['0.1.0-beta.9', 'Publication time to follow', 'Separated the profile note more clearly, made icon-based copy and share actions available at all times, added a choice between recipe text and link, separated the link in shared recipe text, and made the header more compact.'],
    ['0.1.0-beta.8', '1 August 2026, 16:54:48 CEST', 'Ordered the language selection as Italian, German, and English, scrolled calculations to their result, added scroll controls to the calculator page, and kept the header visible while scrolling.'],
    ['0.1.0-beta.7', '1 August 2026, 15:41:15 CEST', 'Restored stacked page titles and introductory text on narrow screens.'],
    ['0.1.0-beta.6', '1 August 2026, 14:56:23 CEST', 'Separated the footer links on narrow screens, placed the fixed process below dough amount, standardized the page width at 800 px, and made internal page changes start at the top.'],
    ['0.1.0-beta.5', '1 August 2026, 14:18:45 CEST', 'Made instant dry yeast the default for new visits while respecting saved choices and recipe links, and standardized navigation, page layout, language icons, the theme default, and legal information.'],
    ['0.1.0-beta.4', '1 August 2026, 13:22:10 CEST', 'Changed the release notes from a table to a clear chronological list. Every entry now includes the full release timestamp.'],
    ['0.1.0-beta.3', '1 August 2026, 13:02:01 CEST', 'Introduced the release history and retrospectively documented the previous public beta releases.'],
    ['0.1.0-beta.2', '1 August 2026, 12:43:44 CEST', 'Added the hamburger menu, flag selection, and system, light and dark themes. Introduced the information page and clickable version label.'],
    ['0.1.0-beta.1', '31 July 2026, 20:47:16 CEST', 'Published the first public practice beta with a scalable Canotto reference, ingredient calculation, result display, and copy, link and share actions.'],
  ],
  it: [
    ['0.1.0-beta.9', 'Orario di pubblicazione da aggiungere', 'Separata più chiaramente la nota del profilo, rese sempre disponibili le azioni di copia e condivisione con icone, aggiunta la scelta tra testo della ricetta e link, separato il link nel testo condiviso e resa più compatta l’intestazione.'],
    ['0.1.0-beta.8', '1 agosto 2026, 16:54:48 CEST', 'Ordinata la selezione delle lingue come italiano, tedesco e inglese, aggiunto il salto al risultato dopo il calcolo, estesi i comandi di scorrimento alla pagina del calcolatore e mantenuta visibile l’intestazione durante lo scorrimento.'],
    ['0.1.0-beta.7', '1 agosto 2026, 15:41:15 CEST', 'Ripristinata la disposizione verticale dei titoli di pagina e dei testi introduttivi sugli schermi stretti.'],
    ['0.1.0-beta.6', '1 agosto 2026, 14:56:23 CEST', 'Separati i link del piè di pagina sugli schermi stretti, collocato il procedimento fisso sotto la quantità d’impasto, uniformata la larghezza delle pagine a 800 px e riportati all’inizio i cambi di pagina interni.'],
    ['0.1.0-beta.5', '1 agosto 2026, 14:18:45 CEST', 'Impostato il lievito secco istantaneo come valore predefinito per le nuove visite, rispettando le scelte salvate e i link delle ricette, e uniformati navigazione, layout, simboli delle lingue, tema predefinito e informazioni legali.'],
    ['0.1.0-beta.4', '1 agosto 2026, 13:22:10 CEST', 'Trasformate le note di versione da tabella a elenco cronologico chiaro. Ogni voce mostra ora il timestamp completo della pubblicazione.'],
    ['0.1.0-beta.3', '1 agosto 2026, 13:02:01 CEST', 'Introdotta la cronologia delle versioni e documentate retroattivamente le precedenti beta pubbliche.'],
    ['0.1.0-beta.2', '1 agosto 2026, 12:43:44 CEST', 'Aggiunti il menu hamburger, la selezione tramite bandiere e i temi sistema, chiaro e scuro. Introdotte la pagina informativa e la versione cliccabile.'],
    ['0.1.0-beta.1', '31 luglio 2026, 20:47:16 CEST', 'Pubblicata la prima beta pratica con riferimento Canotto scalabile, calcolo degli ingredienti, risultati e funzioni di copia, link e condivisione.'],
  ],
} as const;

function safeGet(key: string) {
  try { return localStorage.getItem(`pc-${key}`); } catch { return null; }
}

function safeSet(key: string, value: string) {
  try { localStorage.setItem(`pc-${key}`, value); } catch { /* storage remains optional */ }
}

let lang = (['de', 'en', 'it'].includes(safeGet('lang') ?? '') ? safeGet('lang') : 'de') as Lang;
let theme = (['system', 'light', 'dark'].includes(safeGet('theme') ?? '') ? safeGet('theme') : 'system') as Theme;
let recipe: Recipe = initialRecipe(location.search, safeGet('yeast'));
let result: Result | null = null;

const number = (value: number, digits = 0) => new Intl.NumberFormat(lang, {
  minimumFractionDigits: digits,
  maximumFractionDigits: digits,
}).format(value);

function route(): Route {
  if (location.hash === '#info') return 'info';
  if (location.hash === '#version') return 'version';
  if (location.hash === '#imprint') return 'imprint';
  if (location.hash === '#privacy') return 'privacy';
  return 'calculator';
}

function flagSvg(value: Lang) {
  if (value === 'de') return '<svg class="flag" viewBox="0 0 30 20" aria-hidden="true"><path fill="#000" d="M0 0h30v6.67H0z"/><path fill="#d00" d="M0 6.67h30v6.66H0z"/><path fill="#ffce00" d="M0 13.33h30V20H0z"/></svg>';
  if (value === 'it') return '<svg class="flag" viewBox="0 0 30 20" aria-hidden="true"><path fill="#009246" d="M0 0h10v20H0z"/><path fill="#fff" d="M10 0h10v20H10z"/><path fill="#ce2b37" d="M20 0h10v20H20z"/></svg>';
  return '<svg class="flag" viewBox="0 0 30 20" aria-hidden="true"><path fill="#b22234" d="M0 0h30v20H0z"/><path stroke="#fff" stroke-width="1.55" d="M0 2.3h30M0 5.4h30M0 8.5h30M0 11.6h30M0 14.7h30M0 17.8h30"/><path fill="#3c3b6e" d="M0 0h13v10.8H0z"/><g fill="#fff"><circle cx="2" cy="2" r=".55"/><circle cx="5" cy="2" r=".55"/><circle cx="8" cy="2" r=".55"/><circle cx="11" cy="2" r=".55"/><circle cx="3.5" cy="4.5" r=".55"/><circle cx="6.5" cy="4.5" r=".55"/><circle cx="9.5" cy="4.5" r=".55"/><circle cx="2" cy="7" r=".55"/><circle cx="5" cy="7" r=".55"/><circle cx="8" cy="7" r=".55"/><circle cx="11" cy="7" r=".55"/><circle cx="3.5" cy="9.4" r=".55"/><circle cx="6.5" cy="9.4" r=".55"/><circle cx="9.5" cy="9.4" r=".55"/></g></svg>';
}

function iconSvg(name: 'back' | 'up' | 'down' | 'copy' | 'share' | 'text' | 'link' | 'close') {
  const paths = {
    back: '<path d="M15 18l-6-6 6-6"/><path d="M9 12h12"/>',
    up: '<path d="M7 14l5-5 5 5"/>',
    down: '<path d="M7 10l5 5 5-5"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"/>',
    text: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
  } as const;
  const path = paths[name];
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

function menuView() {
  const t = copy[lang];
  const u = ui[lang];
  const flags = (['it', 'de', 'en'] as Lang[]).map((value) => `<button type="button" data-lang="${value}" aria-label="${value === 'de' ? 'Deutsch' : value === 'it' ? 'Italiano' : 'English'}" aria-pressed="${lang === value}">${flagSvg(value)}</button>`).join('');
  return `<details class="menu"><summary aria-label="${t.menu}"><span class="hamburger" aria-hidden="true"></span></summary><div class="menu-panel"><fieldset><legend>${t.lang}</legend><div class="flag-picker">${flags}</div></fieldset><label>${t.theme}<select id="theme"><option value="system">${t.system}</option><option value="light">${t.light}</option><option value="dark">${t.dark}</option></select></label><nav><a href="#info">${u.info}</a><a href="#version">${u.versions}</a><a href="#imprint">${u.imprint}</a><a href="#privacy">${u.privacy}</a></nav></div></details>`;
}

function pageNavigation(showBack = true, showVersion = false) {
  const u = ui[lang];
  const back = `<a class="icon-button" href="${location.pathname}${location.search}" aria-label="${u.back}" title="${u.back}">${iconSvg('back')}</a>`;
  const badge = `<a class="pill version-link" href="#version">v${version}</a>`;
  return `<div class="page-navigation">${showBack ? back : '<span class="navigation-spacer"></span>'}${showVersion ? badge : '<span class="navigation-spacer"></span>'}</div>`;
}

function bottomBack() {
  const u = ui[lang];
  return `<div class="page-bottom-navigation"><a class="icon-button" href="${location.pathname}${location.search}" aria-label="${u.back}" title="${u.back}">${iconSvg('back')}</a></div>`;
}

function scrollControls() {
  const u = ui[lang];
  return `<div class="scroll-controls" aria-label="${u.pageNavigation}"><button type="button" id="scroll-top" class="icon-button scroll-control" aria-label="${u.toTop}" title="${u.toTop}" hidden>${iconSvg('up')}</button><button type="button" id="scroll-bottom" class="icon-button scroll-control" aria-label="${u.toBottom}" title="${u.toBottom}" hidden>${iconSvg('down')}</button></div>`;
}

function calculatorView() {
  const t = copy[lang];
  const u = ui[lang];
  return `<main class="page-shell calculator-page">${pageNavigation(false, true)}<header class="page-heading"><h1 class="page-title">PizzaCalc</h1><p class="page-intro">${u.intro}</p></header><aside class="profile"><label>${u.profile}<select id="profile" aria-label="${u.profile}"><option>${u.profileName}</option></select></label><small><span>${u.noAutomaticYeast}</span><a href="#info">${u.reference}</a></small></aside><div class="grid"><form id="form" class="card"><h2>${t.amount}</h2><div class="fields"><label>${t.balls}<input id="balls" type="number" min="1" max="50" step="1" value="${recipe.balls}" required></label><label>${t.weight}<span class="unit"><input id="weight" type="number" min="100" max="500" step="1" value="${recipe.ballWeight}" required><b>g</b></span></label><label>${t.hydration}<span class="unit"><input id="hydration" type="number" min="70" max="75" step="0.1" value="${recipe.hydration}" required><b>%</b></span></label><label>${t.yeast}<select id="yeast"><option value="fresh">${t.fresh}</option><option value="idy">${t.idy}</option></select></label></div><button>${t.calc}</button></form><section class="card process"><h2>${t.process}</h2><ol><li>${t.pre}</li><li>${t.cold}</li><li>${t.post}</li></ol></section></div>${resultView(t)}${choiceDialogView(t)}${scrollControls()}</main>`;
}

function infoView() {
  const u = ui[lang];
  return `<main class="page-shell page-shell--subpage">${pageNavigation()}<header class="page-heading"><h1 class="page-title">${u.about}</h1></header><section class="card"><h2>${u.model}</h2><p>${u.modelText}</p></section><section class="card"><h2>${u.limits}</h2><p>${u.limitsText}</p><a href="https://boscorenato.it/la-pizza-tonda-affittiamoci-un-canotto/" target="_blank" rel="noreferrer">Renato Bosco ↗</a></section>${bottomBack()}${scrollControls()}</main>`;
}

function versionView() {
  const u = ui[lang];
  const items = releases[lang].map(([release, timestamp, changes]) => `<article class="release-item"><div><h2>v${release}</h2><time>${timestamp}</time></div><p>${changes}</p></article>`).join('');
  return `<main class="page-shell page-shell--subpage">${pageNavigation(true, true)}<header class="page-heading"><h1 class="page-title">${u.versionTitle}</h1></header><section class="release-list">${items}</section>${bottomBack()}${scrollControls()}</main>`;
}

function imprintView() {
  const u = ui[lang];
  return `<main class="page-shell page-shell--subpage">${pageNavigation()}<header class="page-heading"><h1 class="page-title">${u.imprint}</h1></header><section class="card legal-card"><h2>${u.responsible}</h2><p><strong>Gunnar Teutsch</strong><br>${u.contact}: <a href="mailto:pizzacalc@teutsch.it">pizzacalc@teutsch.it</a></p></section><section class="card legal-card"><h2>${u.project}</h2><p>${u.projectText}</p><h3>${u.sourceLicense}</h3><p>${u.sourceLicenseText} <a href="https://github.com/gengener/pizzacalc">GitHub</a> · <a href="https://www.mozilla.org/MPL/2.0/">MPL 2.0</a></p><p><a href="#info">${u.moreInfo}</a></p></section>${bottomBack()}${scrollControls()}</main>`;
}

function privacyView() {
  const u = ui[lang];
  return `<main class="page-shell page-shell--subpage">${pageNavigation()}<header class="page-heading"><h1 class="page-title">${u.privacy}</h1><p class="page-intro">${u.privacyIntro}</p></header><section class="card legal-card"><h2>${u.localTitle}</h2><p>${u.localText}</p></section><section class="card legal-card"><h2>${u.recipeTitle}</h2><p>${u.recipeText}</p></section><section class="card legal-card"><h2>${u.hostingTitle}</h2><p>${u.hostingText}</p></section><section class="card legal-card"><h2>${u.externalTitle}</h2><p>${u.externalText}</p></section><p class="privacy-summary">${u.noTracking}</p>${bottomBack()}${scrollControls()}</main>`;
}

function resultView(t: Copy) {
  if (!result) return `<section class="card share-card">${sharingActionsView(t)}</section>`;
  const yeast = recipe.yeast === 'fresh' ? t.fresh : t.idy;
  return `<section id="result" class="result" aria-live="polite"><div><span class="pill">${t.experimental}</span><h2>${t.result}</h2><p>${recipe.balls} × ${number(recipe.ballWeight)} g · ${number(recipe.hydration, 1)} % · ${yeast}</p></div><dl><div><dt>${t.flour}</dt><dd>${number(result.flour)} g</dd></div><div><dt>${t.water}</dt><dd>${number(result.water)} g</dd></div><div><dt>${t.salt}</dt><dd>${number(result.salt, 1)} g</dd></div><div><dt>${t.yeast}</dt><dd>${number(result.yeast, 2)} g</dd></div></dl>${sharingActionsView(t)}</section>`;
}

function sharingActionsView(t: Copy) {
  return `<div class="actions sharing-actions"><button type="button" id="copy-action" class="action-button">${iconSvg('copy')}<span>${t.copyAction}</span></button><button type="button" id="share-action" class="action-button">${iconSvg('share')}<span>${t.share}</span></button></div>`;
}

function choiceDialogView(t: Copy) {
  return `<dialog id="share-choice" class="choice-dialog" aria-labelledby="choice-title"><form method="dialog"><div class="choice-header"><h2 id="choice-title"></h2><button class="icon-button" value="cancel" aria-label="${t.cancel}" title="${t.cancel}">${iconSvg('close')}</button></div><div class="choice-options"><button type="button" id="choice-text" class="choice-option">${iconSvg('text')}<span id="choice-text-label"></span></button><button type="button" id="choice-link" class="choice-option">${iconSvg('link')}<span id="choice-link-label"></span></button></div></form></dialog>`;
}

function render() {
  document.documentElement.lang = lang;
  document.documentElement.dataset.theme = theme;
  const activeRoute = route();
  const body = activeRoute === 'info' ? infoView()
    : activeRoute === 'version' ? versionView()
      : activeRoute === 'imprint' ? imprintView()
        : activeRoute === 'privacy' ? privacyView()
          : calculatorView();
  const u = ui[lang];
  document.querySelector('#app')!.innerHTML = `<header class="site-header">${menuView()}<a class="brand" href="${location.pathname}${location.search}">PizzaCalc</a></header>${body}<footer class="footer-links"><a href="#imprint">${u.imprint}</a><a href="#privacy">${u.privacy}</a></footer>`;
  setValues();
  bind();
  requestAnimationFrame(updateScrollControls);
}

function setValues() {
  const themeElement = document.querySelector<HTMLSelectElement>('#theme');
  if (themeElement) themeElement.value = theme;
  const yeastElement = document.querySelector<HTMLSelectElement>('#yeast');
  if (yeastElement) yeastElement.value = recipe.yeast;
}

function bind() {
  document.querySelectorAll<HTMLElement>('[data-lang]').forEach((element) => {
    element.onclick = () => {
      lang = element.dataset.lang as Lang;
      safeSet('lang', lang);
      render();
    };
  });
  document.querySelector<HTMLSelectElement>('#theme')!.onchange = (event) => {
    theme = (event.target as HTMLSelectElement).value as Theme;
    safeSet('theme', theme);
    render();
  };
  const yeastElement = document.querySelector<HTMLSelectElement>('#yeast');
  if (yeastElement) {
    yeastElement.onchange = () => {
      recipe = {...recipe, yeast: yeastElement.value as Yeast};
      safeSet('yeast', recipe.yeast);
    };
  }
  document.querySelector<HTMLButtonElement>('#scroll-top')?.addEventListener('click', () => scrollToEdge('top'));
  document.querySelector<HTMLButtonElement>('#scroll-bottom')?.addEventListener('click', () => scrollToEdge('bottom'));
  const form = document.querySelector<HTMLFormElement>('#form');
  if (!form) return;
  form.onsubmit = (event) => {
    event.preventDefault();
    recipe = {
      balls: Number(document.querySelector<HTMLInputElement>('#balls')!.value),
      ballWeight: Number(document.querySelector<HTMLInputElement>('#weight')!.value),
      hydration: Number(document.querySelector<HTMLInputElement>('#hydration')!.value),
      yeast: document.querySelector<HTMLSelectElement>('#yeast')!.value as Yeast,
    };
    safeSet('yeast', recipe.yeast);
    result = calculate(recipe);
    history.replaceState(null, '', `${location.pathname}?${encode(recipe)}`);
    render();
    requestAnimationFrame(scrollResultIntoView);
  };
  bindSharingActions();
}

function recipeText() {
  if (!result) return '';
  return `${ui[lang].reference}\n${copy[lang].flour}: ${number(result.flour)} g\n${copy[lang].water}: ${number(result.water)} g\n${copy[lang].salt}: ${number(result.salt, 1)} g\n${copy[lang].yeast}: ${number(result.yeast, 2)} g`;
}

function bindSharingActions() {
  document.querySelector<HTMLButtonElement>('#copy-action')!.onclick = () => {
    if (result) openChoiceDialog('copy');
    else void navigator.clipboard.writeText(location.href);
  };
  document.querySelector<HTMLButtonElement>('#share-action')!.onclick = () => {
    if (result) openChoiceDialog('share');
    else void shareLink();
  };
  document.querySelector<HTMLButtonElement>('#choice-text')!.onclick = () => void applyChoice('text');
  document.querySelector<HTMLButtonElement>('#choice-link')!.onclick = () => void applyChoice('link');
}

function openChoiceDialog(mode: 'copy' | 'share') {
  const t = copy[lang];
  const dialog = document.querySelector<HTMLDialogElement>('#share-choice')!;
  dialog.dataset.mode = mode;
  document.querySelector<HTMLElement>('#choice-title')!.textContent = mode === 'copy' ? t.copyQuestion : t.shareQuestion;
  document.querySelector<HTMLElement>('#choice-text-label')!.textContent = mode === 'copy' ? t.copy : t.shareText;
  document.querySelector<HTMLElement>('#choice-link-label')!.textContent = mode === 'copy' ? t.link : t.shareLink;
  dialog.showModal();
}

async function applyChoice(kind: 'text' | 'link') {
  const dialog = document.querySelector<HTMLDialogElement>('#share-choice')!;
  const mode = dialog.dataset.mode;
  try {
    if (mode === 'copy') {
      await navigator.clipboard.writeText(kind === 'text' ? recipeText() : location.href);
    } else if (kind === 'text') {
      await shareRecipeText();
    } else {
      await shareLink();
    }
  } finally {
    dialog.close();
  }
}

async function shareRecipeText() {
  const text = shareTextWithLink(recipeText(), location.href);
  if (navigator.share) {
    try {
      await navigator.share({ title: 'PizzaCalc', text });
      return;
    } catch (error) {
      if (isShareCancellation(error)) return;
    }
  }
  await navigator.clipboard.writeText(text);
}

async function shareLink() {
  if (navigator.share) {
    try {
      await navigator.share({ title: 'PizzaCalc', url: location.href });
      return;
    } catch (error) {
      if (isShareCancellation(error)) return;
    }
  }
  await navigator.clipboard.writeText(location.href);
}

function isShareCancellation(error: unknown) {
  return error instanceof DOMException && error.name === 'AbortError';
}

function closeMenuOnOutsidePointer(event: PointerEvent) {
  const menu = document.querySelector<HTMLDetailsElement>('.menu[open]');
  if (menu && !menu.contains(event.target as Node)) menu.open = false;
}

function scrollToEdge(edge: 'top' | 'bottom') {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({
    top: edge === 'top' ? 0 : document.documentElement.scrollHeight,
    behavior: reducedMotion ? 'auto' : 'smooth',
  });
}

function scrollResultIntoView() {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelector<HTMLElement>('#result')?.scrollIntoView({
    block: 'start',
    behavior: reducedMotion ? 'auto' : 'smooth',
  });
}

function updateScrollControls() {
  const topButton = document.querySelector<HTMLButtonElement>('#scroll-top');
  const bottomButton = document.querySelector<HTMLButtonElement>('#scroll-bottom');
  if (!topButton || !bottomButton) return;
  const scrollable = document.documentElement.scrollHeight > window.innerHeight + 1;
  const nearTop = window.scrollY < 160;
  const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
  topButton.hidden = !scrollable || nearTop;
  bottomButton.hidden = !scrollable || nearBottom;
}

function renderRouteFromHash() {
  render();
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    updateScrollControls();
  });
}

document.addEventListener('pointerdown', closeMenuOnOutsidePointer);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const menu = document.querySelector<HTMLDetailsElement>('.menu[open]');
    if (menu) menu.open = false;
  }
});
window.addEventListener('hashchange', renderRouteFromHash);
window.addEventListener('scroll', updateScrollControls, { passive: true });
window.addEventListener('resize', updateScrollControls);
render();
