var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var commands = [];
var currentLanguage = "en";

const cvPath = "assets/Panescu-Vasile-Cosmin-Resume.pdf";

const commandsRo = {
  help: "ajutor",
  aboutme: "despremine",
  experience: "experienta",
  certifications: "certificari",
  education: "educatie",
  resume: "cv",
  projects: "proiecte",
  banner: "banner",
  contact: "contact",
};

setTimeout(() => {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;

    addLine(
      "<span style='color: var(--title-color); letter-spacing: 0px;'>cosmin@panescu.ro</span>:~$ " +
        command.innerHTML,
      "no-animation",
      0
    );

    commander(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  }

  if (e.keyCode == 38) {
    if (git > 0) {
      git--;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
  }
  if (e.keyCode == 40) {
    if (git < commands.length - 1) {
      git++;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    } else {
      git = commands.length;
      textarea.value = "";
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  if (currentLanguage === "ro") {
    cmd = Object.keys(commandsRo).find((key) => commandsRo[key] === cmd) || cmd;
  }

  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(currentLanguage === "ro" ? helpRo : help, "color2 margin", 80);
      break;
    case "normal":
      addLine(
        currentLanguage === "ro" ? "Către website..." : "Opening website...",
        "color2",
        80
      );
      newTab("/normal");
      break;
    case "aboutme":
      loopLines(
        currentLanguage === "ro" ? aboutmeRo : aboutme,
        "color2 margin",
        80
      );
      break;
    case "contact":
      loopLines(social, "color2 margin", 80);
      break;
    case "projects":
      loopLines(
        currentLanguage === "ro" ? projectsRo : projects,
        "color2 margin",
        80
      );
      break;
    case "experience":
      loopLines(
        currentLanguage === "ro" ? experienceRo : experience,
        "color2 margin",
        80
      );
      break;
    case "certifications":
      loopLines(
        currentLanguage === "ro" ? certificationsRo : certifications,
        "color2 margin",
        80
      );
      break;
    case "education":
      loopLines(
        currentLanguage === "ro" ? educationRo : education,
        "color2 margin",
        80
      );
      break;
    case "resume":
      addLine(
        currentLanguage === "ro"
          ? "Se descarcă CV-ul..."
          : "Downloading resume...",
        "color2",
        80
      );
      downloadCV();
      break;

    case "email":
      addLine(
        currentLanguage === "ro"
          ? 'Deschidem email-ul către: <a href="mailto:1panescu.cosmin@gmail.com">1panescu.cosmin@gmail.com</a>'
          : 'Opening mailto: <a href="mailto:1panescu.cosmin@gmail.com">1panescu.cosmin@gmail.com</a>',
        "color2",
        80
      );
      newTab(email);
      break;
    case "clear":
      setTimeout(() => {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "github":
      addLine(
        currentLanguage === "ro" ? "Către GitHub..." : "Opening GitHub...",
        "color2",
        80
      );
      newTab(github);
      break;
    case "youtube":
      addLine(
        currentLanguage === "ro" ? "Către YouTube..." : "Opening YouTube...",
        "color2",
        80
      );
      newTab(youtube);
      break;
    case "tryhackme":
      addLine(
        currentLanguage === "ro"
          ? "Către TryHackMe..."
          : "Opening TryHackMe...",
        "color2",
        80
      );
      newTab(tryhackme);
      break;
    case "linkedin":
      addLine(
        currentLanguage === "ro" ? "Către LinkedIn..." : "Opening LinkedIn...",
        "color2",
        80
      );
      newTab(youtube);
      break;
    case "banner":
      loopLines(currentLanguage === "ro" ? bannerRo : banner, "", 80);
      break;
    case "romanian":
      currentLanguage = "ro";
      updateLanguage();
      break;
    case "english":
      currentLanguage = "en";
      updateLanguage();
      break;

    default:
      addLine(
        currentLanguage === "ro"
          ? '<span class="inherit">Comandă necunoscută. Pentru o listă de comenzi, tastează <span class="command">\'ajutor\'</span>.</span>'
          : '<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>',
        "error",
        100
      );
  }
}

function downloadCV() {
  setTimeout(function () {
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Panescu-Vasile-Cosmin-Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 500);
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(() => {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}

function $(elid) {
  return document.getElementById(elid);
}

var cursor;
window.onload = init;

function init() {
  let cursor = document.getElementById("cursor");
  cursor.style.left = "0px";
}

function n12br(txt) {
  return txt.replace(/\n/g, "");
}

function typeIt(from, e) {
  e = e || window.event;
  var w = document.getElementById("typer");
  var tw = from.value;

  w.innerHTML = n12br(tw);
}

function moveIt(count, e) {
  e = e || window.event;
  var keycode = e.keycode || e.which;
  if (keycode == 37 && parseInt(cursor.style.left) >= 0 - (count - 1) * 10) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == 39 && parseInt(cursor.style.left) + 10 <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
}

function updateLanguage() {
  if (currentLanguage === "ro") {
    banner = bannerRo;
    help = helpRo;
    aboutme = aboutmeRo;
    projects = projectsRo;

    terminal.innerHTML = '<a id="before"></a>';
    before = document.getElementById("before");
    loopLines(banner, "", 80);
  } else {
    location.reload();
  }
}

function detectMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    )
  ) {
    if (window.location.pathname !== "/normal") {
      window.location.href = "https://cosminpanescu.com/normal";
    }
  }
}

window.onload = detectMobile;
