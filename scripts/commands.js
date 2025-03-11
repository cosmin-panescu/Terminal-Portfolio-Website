var youtube = "https://youtube.com/@PierdutInNatura";
var github = "https://github.com/cosmin-panescu";
var linkedin = "https://www.linkedin.com/in/cosmin-panescu/";
var email = "mailto:1panescu.cosmin@gmail.com";

var help = [
  "<br>",
  '<span class="command">aboutme</span>          Who am I?',
  '<span class="command">experience</span>       View my relevant work experience',
  '<span class="command">education</span>        See where and what I study',
  '<span class="command">projects</span>         View my projects',
  '<span class="command">contact</span>          View my socials',
  '<span class="command">romana</span>           Translate into Romanian',
  '<span class="command">clear</span>            Clear terminal',
  "<br>",
];

var aboutme = [
  "<br>",
  "Hello, I'm <span class='white-glow'>Cosmin</span>! 👋",
  "<br>",
  "<span class='white-glow'>My fields of interest are:</span>",
  "  │",
  "  ├─ Cybersecurity",
  "  └─ Web Development",
  "<br>",
  "<span class='white-glow'>About me:</span>",
  "  │",
  "  ├─ Hello there! I am primarily a web developer,",
  "  ├─ but my main goal is to become a Cybersecurity Engineer.",
  "  │",
  "  ├─ I love learning new technologies and using,",
  "  ├─ them to create cool projects.",
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
  "<span class='white-glow'>Junior Web Developer</span>",
  "  ├─ <i>360Advertising (May 2024 - December 2024)</i>",
  "  ├─ Developed 6 websites and optimized 15+ websites, implementing APIs while ensuring",
  "  │  high performance and an excellent user experience; specialized in development and",
  "  │  maintenance, including WooCommerce integration, server administration, security",
  "  │  practices, and ongoing support for website stability and functionality.",
  "  └─ <i> HTML, CSS, JavaScript, PHP, MySQL, WordPress, WooCommerce, git, GitHub, API, SEO.</i>",
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
  "                       Information Technology, Web Technologies, Software Packages, Data Analysis.",
  "<br>",
  "<span class='white-glow'>Google Cybersecurity</span>",
  "  └─ Relevant skills: SIEM tools, linux commands, computer networking & security, cryptography,",
  "                      TCP/IP, security controls, network security, cyber attacks, threat modeling.",
  "<br>",
  "<span class='white-glow'>Frontend Masters</span>",
  "  └─ Relevant classes: Practical Guide to Algorithms, Modern SEO, Web Performance, JavaScript, Python.",
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
  '  └─ <span class="white-glow">youtube</span>         <a href="' +
    youtube +
    '" target="_blank">youtube/@PierdutInNatura' +
    "</a>",
  "<br>",
];

var projects = [
  "<br>",
  "Most of the projects that I've done will be on github/cosmin-panescu and linkedin/cosminpanescu or confidential.",
  "<br>",
];

var banner = [
  `<h1 class="index">Cosmin Panescu</h1>`,

  '<span class="color2">Welcome to my portfolio website with an interactive terminal.</span>',
  '<span class="color2">To get a list of available commands, type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
  "<br>",
];

// ROMANA
var helpRo = [
  "<br>",
  '<span class="command">despremine</span>       Cine sunt eu?',
  '<span class="command">experienta</span>       Experiența mea de muncă relevantă',
  '<span class="command">educatie</span>         Unde și ce studiez',
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
  "  └─ Cursuri relevante: Programare pe calculator, Baze de date, Algoritmi și tehnici de programare,",
  "                        Tehnologia informației, Tehnologii web, Pachete software, Analiza datelor.",
  "<br>",
  "<span class='white-glow'>Google Cybersecurity</span>",
  "  └─ Competențe relevante: Instrumente SIEM, comenzi Linux, rețelistică și securitate informatică,",
  "                           criptografie, TCP/IP, controale de securitate, securitate rețele,",
  "                           atacuri cibernetice, modelarea amenințărilor.",
  "<br>",
  "<span class='white-glow'>Frontend Masters</span>",
  "  └─ Cursuri relevante: Ghid pentru algoritmi, SEO modern, Performanță web, JavaScript, Python.",
  "<br>",
];

var experienceRo = [
  "<br>",
  "Am lucrat la următoarele proiecte în aceste locuri 👨‍💻",
  "<br>",
  "<span class='white-glow'>Junior Web Developer</span>",
  "  ├─ <i>360Advertising (Mai 2024 - Decembrie 2024)</i>",
  "  ├─ Am dezvoltat 6 site-uri web și am optimizat peste 15 site-uri, implementând API-uri",
  "  │  și asigurând performanță ridicată și o experiență excelentă pentru utilizatori;",
  "  │  specializat în dezvoltare și mentenanță, inclusiv integrarea WooCommerce,",
  "  │  administrarea serverelor, practici de securitate și suport continuu pentru",
  "  │  stabilitatea și funcționalitatea site-urilor.",
  "  └─ <i> HTML, CSS, JavaScript, PHP, MySQL, WordPress, WooCommerce, git, GitHub, API, SEO.</i>",
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

var projectsRo = [
  "<br>",
  "Majoritatea proiectelor sunt pe github sau blablabla...",
  "<br>",
];

var bannerRo = [
  '<h1 class="index">Cosmin Panescu | Toate drepturile rezervate.</h1>',

  '<span class="color2">Bine ai venit pe site-ul meu cu un terminal interactiv.</span>',
  '<span class="color2">Pentru a vedea lista de comenzi, tastează</span> <span class="command">\'ajutor\'</span><span class="color2">.</span>',
  "<br>",
];

var aboutmeRo = [
  "<br>",
  "Salut, eu sunt <span class='white-glow'>Cosmin</span>! 👋",
  "<br>",
  "<span class='white-glow'>Domeniile mele de interes sunt:</span>",
  "  │",
  "  ├─ Securitate cibernetică",
  "  └─ Dezvoltare web",
  "<br>",
  "<span class='white-glow'>Despre mine:</span>",
  "  │",
  "  ├─ Salut! Sunt în principal un dezvoltator web,",
  "  ├─ dar obiectivul meu principal este să devin Inginer în Securitate Cibernetică.",
  "  │",
  "  ├─ Îmi place să învăț tehnologii noi și să le folosesc",
  "  ├─ pentru a crea proiecte interesante.",
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
