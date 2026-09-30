var youtube = "https://youtube.com/@PierdutInNatura";
var github = "https://github.com/cosmin-panescu";
var linkedin = "https://www.linkedin.com/in/cosmin-panescu/";
var email = "mailto:1panescu.cosmin@gmail.com";
var tryhackme = "https://tryhackme.com/p/panescu";

var help = [
  "<br>",
  '<span class="command">normal</span>             The "normal" version of the website',
  '<span class="command">aboutme</span>            Who am I?',
  '<span class="command">experience</span>         View my relevant work experience',
  '<span class="command">certifications</span>     Display my professional achievements',
  '<span class="command">education</span>          See where and what I study',
  '<span class="command">resume</span>             Did you save my CV?',
  '<span class="command">projects</span>           View my projects',
  '<span class="command">contact</span>            View my socials',
  '<span class="command">romanian</span>           Translate into Romanian',
  '<span class="command">clear</span>              Clear terminal',
  "<br>",
];

var aboutme = [
  "<br>",
  "Hello, I'm <span class='white-glow'>Cosmin</span>! 👋",
  "<br>",
  "<span class='white-glow'>My fields of interest are:</span>",
  "  │",
  "  ├─ Web Development",
  "  ├─ Artificial Intelligence & LLMs",
  "  └─ Process Automation",
  "<br>",
  "<span class='white-glow'>About me:</span>",
  "  │",
  "  ├─ Hello there! I am a Web Developer passionate about AI and automations,",
  "  ├─ building modern web experiences, intelligent tools, and automated pipelines.",
  "  │",
  "  ├─ I love combining modern web frameworks with cutting-edge AI technologies",
  "  ├─ to build clean, interactive, fast, and highly efficient digital solutions.",
  "  │",
  "  ├─ You can learn about some of my projects",
  "  ├─ using the <span class='green-glow'>'projects'</span> command.",
  "  │",
  "  ├─ Check out my GitHub account to see more of what I've made",
  "  ├─ using the <span class='green-glow'>'github'</span> command.",
  "  │",
  "  └─ Contact me at <a href='mailto:1panescu.cosmin@gmail.com'><span class='green-glow'>'1panescu.cosmin@gmail.com'</span></a>.",
  "<br>",
];

var experience = [
  "<br>",
  "I've worked on some of the following at these places 👨‍💻",
  "<br>",
  "<span class='white-glow'>Data Operator</span>",
  "  ├─ <i>UNIQA (December 2024 - present)</i>",
  "  ├─ Collaborated with the automation team to define document logic and structure,",
  "  │  enabling automatic integration of PDF data into internal systems and reducing",
  "  │  manual entry by over 40%; I created various scripts in Python to automate repetitive",
  "  │  actions and to increase the speed of document operation in the system for Data entry",
  "  │  and Validation team members.",
  "  └─ <i> Python, git.</i>",

  "<br>",
  "<span class='white-glow'>Junior Web Developer</span>",
  "  ├─ <i>360Advertising (May 2024 - February 2025)</i>",
  "  ├─ Developed 6 websites and optimized 20+ websites, implementing APIs while ensuring",
  "  │  high performance and an excellent user experience; specialized in development and",
  "  │  maintenance, including WooCommerce integration, server administration, security",
  "  │  practices, and ongoing support for website stability and functionality.",
  "  └─ <i> HTML, CSS, JavaScript, PHP, MySQL, WordPress, git, GitHub, API, SEO.</i>",
  "<br>",
  "<span class='white-glow'>Database Services Analyst</span>",
  "  ├─ <i>Regina Maria (June 2023 - February 2024)</i>",
  "  ├─ Developed and deployed an AI assistant using Azure OpenAI Playground",
  "  │  in collaboration with Microsoft, enhancing employee efficiency and work speed;",
  "  │  additionally, managed and maintained customer databases, resolving tickets and",
  "  │  updating information using Microsoft SQL Server, SysAdmin, Excel, CRM, and CMS.",
  "  └─ <i> SQL, Azure OpenAI, SysAdmin, CRM, ERP, CMS, git, Excel.</i>",
  "<br>",
];

var education = [
  "<br>",
  "My educational journey 🎓",
  "<br>",
  "<span class='white-glow'>University of Bucharest</span>",
  "  ├─ Bachelor's program: Cybernetics, statistics and economic informatics. (2022-2025)",
  "  └─ Relevant classes: Computer Programming, Databases, Algorithms and programming techniques",
  "                       Information Technology, Computational Intelligence, Software Packages.",
  "<br>",
  "<span class='white-glow'>TryHackMe</span>",
  "  ├─ TryHackMe : Cyber Security Learning Roadmap",
  "  └─ Ranking: top 2% worldwide.",
  "<br>",
  "<span class='white-glow'>Frontend Masters Bootcamp</span>",
  "  └─ Relevant classes: Practical Guide to Algorithms, Web Performance, JavaScript, Python.",
  "<br>",
];

var certifications = [
  "<br>",
  "My professional certifications and achievements 🏆",
  "<br>",
  "<span class='white-glow'>CompTIA A+ </span>",
  "  └─ <a target='_blank' href='https://www.certmetrics.com/comptia/public/verification.aspx?code=XHPLYGNYTFV1163Y'><span class='green-glow'>View certification &#x2197;</span></a>",
  "<br>",
  "<span class='white-glow'>Google Cybersecurity Certificate</span>",
  "  └─ <a target='_blank' href='https://www.coursera.org/account/accomplishments/specialization/C5X9ZQQRE3B1'><span class='green-glow'>View certification &#x2197;</span></a>",
  "<br>",
  "<span class='white-glow'>First Step in Business (Hackathon)</span>",
  "  ├─ <a target='_blank' href='https://drive.google.com/drive/folders/1w5FfBu2JRW9DVSzZraYcvJPCXlEO8n-7?usp=sharing'><span class='green-glow'>2nd Place Winner &#x2197;</span></a>",
  "  └─ Built a complete business plan during a 2-month program at University of Bucharest,",
  "     presented to and evaluated by four real-world entrepreneurs. The project required",
  "     deep market analysis, detailed financial planning, and a solid execution strategy.",
  "<br>",
];

var social = [
  "<br>",
  "Write me:",
  "  │",
  '  ├─ <span class="white-glow">email</span>           <a href="' +
  email +
  '" target="_blank">1panescu.cosmin@gmail.com' +
  "</a>",
  '  ├─ <span class="white-glow">linkedin</span>        <a href="' +
  linkedin +
  '" target="_blank">linkedin/in/cosmin-panescu' +
  "</a>",
  '  ├─ <span class="white-glow">github</span>          <a href="' +
  github +
  '" target="_blank">github/cosmin-panescu' +
  "</a>",
  '  ├─ <span class="white-glow">tryhackme</span>       <a href="' +
  tryhackme +
  '" target="_blank">tryhackme/p/panescu' +
  "</a>",
  '  └─ <span class="white-glow">youtube</span>         <a href="' +
  youtube +
  '" target="_blank">youtube/@PierdutInNatura' +
  "</a>",
  "<br>",
];

var projects = [
  "<br>",
  "Most of my projects are on GitHub... ⚙️",
  "<br>",
  "<span class='white-glow'>WebX - Web Vulnerability Scanner & AI</span>",
  "  ├─ Web security scanning tool designed to identify vulnerabilities in websites,",
  "  │  The application consists of a full-stack architecture with Python/Flask",
  "  │  backend and JavaScript frontend.",
  "  └─ <i> Python, Flask, JavaScript, OpenAI API</i>",
  "<br>",
  "<span class='white-glow'>Server Status Check</span>",
  "  ├─ Python-based server monitoring tool for real-time website status checks",
  "  │  and automated email alerts on downtime, with advanced user preferences",
  "  │  management for the configuration file.",
  "  └─ <i>Python, Email Alert, JSON</i>",
  "<br>",
  "<span class='white-glow'>Python XOR Encryption</span>",
  "  ├─ Implements XOR encryption and decryption using Python. The project",
  "  │  consists of two main scripts (encryption.py and decryption.py) ",
  "  │  that process text files using a user-provided key.",
  "  └─ <i>Python, XOR, Files</i>",
  "<br>",
];

var banner = [
  `<h1 class="index">Cosmin Panescu</h1>`,

  '<span class="color2">Welcome to my portfolio website with an interactive terminal.</span>',
  '<span class="color2">To get a list of available commands, type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
  '<span class="color2">To visit the \'normal\' version of this website, type</span> <span class="command">\'normal\'</span><span class="color2">.</span>',
  "<br>",
];

// ROMANA
var helpRo = [
  "<br>",
  '<span class="command">normal</span>           Versiunea "normală" a site-ului',
  '<span class="command">despremine</span>       Cine sunt eu?',
  '<span class="command">experienta</span>       Experiența mea de muncă relevantă',
  '<span class="command">certificari</span>      Afișează realizările mele profesionale',
  '<span class="command">educatie</span>         Unde și ce studiez',
  '<span class="command">CV</span>               Ai salvat CV-ul meu?',
  '<span class="command">proiecte</span>         Vezi proiectele mele',
  '<span class="command">contact</span>          Vezi rețelele mele sociale',
  '<span class="command">english</span>          Website in English',
  '<span class="command">clear</span>            Curăță terminalul',
  "<br>",
];

var educationRo = [
  "<br>",
  "Parcursul meu educațional 🎓",
  "<br>",
  "<span class='white-glow'>Universitatea din București</span>",
  "  ├─ Program de licență: Cibernetică, statistică și informatică economică. (2022-2025)",
  "  └─ Cursuri relevante: Programarea calculatoarelor, Baze de date, Algoritmi & tehnici de programare,",
  "                        Tehnologia informației, Inteligenţă computaţională, Pachete software.",
  "<br>",
  "<span class='white-glow'>TryHackMe</span>",
  "  ├─ TryHackMe : Cyber Security Learning Roadmap",
  "  └─ Ranking: top 2%.",
  "<br>",
  "<span class='white-glow'>Frontend Masters Bootcamp</span>",
  "  └─ Cursuri relevante: Ghid pentru algoritmi, Performanță web, JavaScript, Python.",
  "<br>",
];

var experienceRo = [
  "<br>",
  "Am lucrat la următoarele proiecte în aceste locuri 👨‍💻",
  "<br>",
  "<span class='white-glow'>Data Operator</span>",
  "  ├─ <i>UNIQA (Decembrie 2024 - prezent)</i>",
  "  ├─ Am colaborat cu echipa de automatizare pentru a defini logica și structura",
  "  │  documentelor, permițând integrarea automată a datelor PDF în sistemele interne",
  "  │  și reducând introducerea manuală cu peste 40%; am creat diverse scripturi in Python",
  "  │  pentru a automatiza actiuni repetitive, simple si pentru a crește viteza de operare",
  "  │  a documentelor in sistem pentru membrii echipei de Introducere si Validare date.",
  "  └─ <i> Python, git.</i>",
  "<br>",
  "<span class='white-glow'>Junior Web Developer</span>",
  "  ├─ <i>360Advertising (Mai 2024 - Februarie 2025)</i>",
  "  ├─ Am dezvoltat 6 site-uri web și am optimizat peste 20 de site-uri, implementând API-uri",
  "  │  și asigurând performanță ridicată și o experiență excelentă pentru utilizatori;",
  "  │  specializat în dezvoltare și mentenanță, inclusiv integrarea WooCommerce,",
  "  │  administrarea serverelor, practici de securitate și suport continuu pentru",
  "  │  stabilitatea și funcționalitatea site-urilor.",
  "  └─ <i> HTML, CSS, JavaScript, PHP, MySQL, WordPress, git, GitHub, API, SEO.</i>",
  "<br>",
  "<span class='white-glow'>Database Services Analyst</span>",
  "  ├─ <i>Regina Maria (Iunie 2023 - Februarie 2024)</i>",
  "  ├─ Am dezvoltat și implementat un asistent AI folosind Azure OpenAI Playground",
  "  │  în colaborare cu Microsoft, îmbunătățind eficiența angajaților și viteza de lucru;",
  "  │  de asemenea, am gestionat și întreținut baze de date ale clienților,",
  "  │  rezolvând tichete și actualizând informații folosind Microsoft SQL Server,",
  "  │  SysAdmin, Excel, CRM și CMS.",
  "  └─ <i> SQL, Azure OpenAI, SysAdmin, CRM, ERP, CMS, git, Excel.</i>",
  "<br>",
];

var certificationsRo = [
  "<br>",
  "Certificări profesionale și realizări 🏆",
  "<br>",
  "<span class='white-glow'>CompTIA A+ </span>",
  "  └─ <a target='_blank' href='https://www.certmetrics.com/comptia/public/verification.aspx?code=XHPLYGNYTFV1163Y'><span class='green-glow'>Vezi certificarea &#x2197;</span></a>",
  "<br>",
  "<span class='white-glow'>Google Cybersecurity Certificate</span>",
  "  └─ <a target='_blank' href='https://www.coursera.org/account/accomplishments/specialization/C5X9ZQQRE3B1'><span class='green-glow'>Vezi certificarea &#x2197;</span></a>",
  "<br>",
  "<span class='white-glow'>First Step in Business (Hackathon)</span>",
  "  ├─ <a target='_blank' href='https://drive.google.com/drive/folders/1w5FfBu2JRW9DVSzZraYcvJPCXlEO8n-7?usp=sharing'><span class='green-glow'>Locul 2 &#x2197;</span></a>",
  "  └─ Am dezvoltat un plan de afaceri complet în cadrul unui program de 2 luni",
  "     la Universitatea din București, prezentat și evaluat de patru antreprenori .",
  "     reali. Proiectul a necesitat o analiză aprofundată a pieței, planificare  ",
  "     financiară detaliată și o strategie solidă de implementare.",
  "<br>",
];

var projectsRo = [
  "<br>",
  "Majoritatea proiectelor mele sunt pe GitHub... ⚙️",
  "<br>",
  "<span class='white-glow'>WebX - Scanner de Vulnerabilități Web & AI</span>",
  "  ├─ Instrument de scanare a vulnerabilitatilor web, conceput pentru a identifica",
  "  │  vulnerabilitățile site-urilor web. Aplicația constă într-o arhitectură",
  "  │   full-stack cu backend Python/Flask și frontend JavaScript.",
  "  └─ <i> Python, Flask, JavaScript, OpenAI API</i>",
  "<br>",
  "<span class='white-glow'>Verificare Stare Server</span>",
  "  ├─ Instrument de monitorizare a serverelor bazat pe Python, pentru verificarea în timp real",
  "  │  a stării site-urilor web + alerte automate prin e-mail în caz de întreruperi,",
  "  │  cu gestionarea avansată a preferințelor utilizatorului pentru fișierul de configurare.",
  "  └─ <i>Python, Alerte prin Email, JSON</i>",
  "<br>",
  "<span class='white-glow'>Criptare XOR în Python</span>",
  "  ├─ Implementează criptarea și decriptarea XOR folosind Python. Proiectul",
  "  │  presupune două scripturi principale (encryption.py și decryption.py)",
  "  │  care procesează fișiere text utilizând o cheie furnizată de utilizator.",
  "  └─ <i>Python, XOR, Fișiere</i>",
  "<br>",
];

var bannerRo = [
  '<h1 class="index">Cosmin Panescu</h1>',

  '<span class="color2">Bine ai venit pe site-ul meu cu un terminal interactiv.</span>',
  '<span class="color2">Pentru a vedea lista de comenzi, tastează</span> <span class="command">\'ajutor\'</span><span class="color2">.</span>',
  '<span class="color2">Vizitează versiunea \'normală\' a site-ului, tastează</span> <span class="command">\'normal\'</span><span class="color2">.</span>',
  "<br>",
];

var aboutmeRo = [
  "<br>",
  "Salut, eu sunt <span class='white-glow'>Cosmin</span>! 👋",
  "<br>",
  "<span class='white-glow'>Domeniile mele de interes sunt:</span>",
  "  │",
  "  ├─ Dezvoltare Web",
  "  ├─ Inteligență Artificială & LLM-uri",
  "  └─ Automatizări de Procese",
  "<br>",
  "<span class='white-glow'>Despre mine:</span>",
  "  │",
  "  ├─ Salut! Sunt un dezvoltator web pasionat de AI și automatizări,",
  "  ├─ creez aplicații web moderne, unelte inteligente și fluxuri automatizate.",
  "  │",
  "  ├─ Îmi place să îmbin tehnologiile web moderne cu puterea AI-ului",
  "  ├─ pentru a construi proiecte rapide, interactive și extrem de eficiente.",
  "  │",
  "  ├─ Poți afla mai multe despre proiectele mele",
  "  ├─ folosind comanda <span class='green-glow'>'projects'</span>.",
  "  │",
  "  ├─ Vezi contul meu de GitHub pentru a descoperi mai multe din ceea ce am realizat,",
  "  ├─ folosind comanda <span class='green-glow'>'github'</span>.",
  "  │",
  "  └─ Contactează-mă la <a href='mailto:1panescu.cosmin@gmail.com'><span class='green-glow'>'1panescu.cosmin@gmail.com'</span></a>.",
  "<br>",
];
