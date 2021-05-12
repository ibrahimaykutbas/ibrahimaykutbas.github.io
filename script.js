const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help: 'Supported commands: <span class="code">about</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">experience</span>, <span class="code">projects</span>, <span class="code">interests</span>, <span class="code">contact</span>',
  about:
    "Hello!<br>I'm İbrahim Aykut. I graduated but I'm still a student, I am a curious and open minded software developer. <br>" +
    "I love to learn and share. <br>" +
    "I love developing and improving. <br>" +
    "I'm all open to new technologies and new tools to make. <br>" +
    "I admire the Matrix and the Star Wars universe.",
  education:
    "<a href='https://www.ayvansaray.edu.tr/' class='success link' target='_blank'> İstanbul Ayvansaray Üniversitesi</a>, Istanbul <br> Bachelor of Computer Programming <br> <a href='https://ist-fef.omu.edu.tr/tr' class='success link' target='_blank'> Ondokuz Mayıs Üniversitesi</a>, Samsun <br> Statistics Student",
  skills:
    '<span class="code">Turkish(Native)<br><span class="code">Languages:</span> C#, HTML/CSS/JavaScript, Microsoft SQL Server, Object Oriented Programming<br><span class="code">Technologies:</span> ASP.Net MVC, SQL<br><span class="code">Frameworks:</span> React.JS',
  experience: "i10 Bilişim & Danışmanlık<br>2014-2017",
  projects:
    "<b> Smart Parking System </b> <br> Languages ​​And Technologies Used: C# Windows Form, Arduino <br> <br> <b> Stock Tracking Automation </b> <br> Version 1<br> Languages ​​And Technologies Used: C# Windows Form, Entity Framework, Report Viewer, MSSQL <br> Version 2<br> Languages ​​And Technologies Used: C# ASP.NET MVC, Entity Framework, MSSQL",
  interests:
    "To follow the latest software and hardware developments in technology, to consume the music and movies of the past, to follow the developments in space, to play video games.",
  contact:
    "You can contact me on any of following links: <a href='https://www.instagram.com/ibrahimaykutbas/' class='success link' target='_blank'>Instagram</a>, <a href='https://www.twitter.com/ibrahimaykutbas/' class='success link' target='_blank'>Twitter</a>, <a href='https://github.com/ibrahimaykutbas' class='success link' target='_blank'>GitHub</a>, <a href='https://linkedin.com/in/ibrahimaykutbas' class='success link' target='_blank'>LinkedIn</a>",
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">?</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
