// Toggle dropdown menus
document.querySelectorAll('.dropdown > a').forEach(menuLink => {
  menuLink.addEventListener('click', e => {
    e.preventDefault();
    const parent = menuLink.parentElement;
    parent.classList.toggle('open');
  });
});

const cursor = document.getElementById("custom-cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Total Clicks
let totalClicks = localStorage.getItem("totalClicks") || 0;
totalClicks++;
localStorage.setItem("totalClicks", totalClicks);
document.getElementById("total-clicks").textContent = totalClicks;

// Currently Online (approximation using sessionStorage)
const now = Date.now();
let onlineUsers = JSON.parse(localStorage.getItem("onlineUsers") || "[]");

// Remove users inactive for 5 minutes
onlineUsers = onlineUsers.filter(ts => now - ts < 5 * 60 * 1000);

// Add current session
onlineUsers.push(now);
localStorage.setItem("onlineUsers", JSON.stringify(onlineUsers));
document.getElementById("online-users").textContent = onlineUsers.length;

// Most ever online
let mostOnline = localStorage.getItem("mostOnline") || 0;
let mostOnlineDate = localStorage.getItem("mostOnlineDate") || "";
if (onlineUsers.length > mostOnline) {
  mostOnline = onlineUsers.length;
  mostOnlineDate = new Date().toLocaleDateString();
  localStorage.setItem("mostOnline", mostOnline);
  localStorage.setItem("mostOnlineDate", mostOnlineDate);
}
document.getElementById("most-online").textContent = mostOnline;
document.getElementById("most-online-date").textContent = mostOnlineDate;


function updateClock() {
  const options = { timeZone: "America/Phoenix", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const timeString = new Intl.DateTimeFormat('en-US', options).format(new Date());
  document.getElementById("arizona-time").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();
const piecesContainer = document.getElementById("pieces-container");
const submitPieceBtn = document.getElementById("submit-piece");

// Custom cursor
const cursor = document.getElementById("custom-cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Pixel counter
let counter = 0;
const pixelBoxes = document.querySelectorAll("#pixel-counter .pixel-box");
function updatePixelCounter(value) {
  let strVal = value.toString().padStart(6, "0");
  pixelBoxes.forEach((box,i) => box.textContent = strVal[i]);
}
updatePixelCounter(counter);
document.body.addEventListener("click", () => { counter++; updatePixelCounter(counter); });

// Arizona Time
function updateArizonaTime() {
  const options = { timeZone: 'America/Phoenix', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
  document.getElementById("arizona-time").textContent = new Date().toLocaleTimeString('en-US', options);
}
setInterval(updateArizonaTime, 1000);
updateArizonaTime();

// Dropdown menus
document.addEventListener("DOMContentLoaded", function() {
  const menu = document.querySelector('.sidebar.left .menu');
  if(menu) {
    menu.querySelectorAll('.dropdown > a').forEach(drop => {
      drop.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.parentElement;
        menu.querySelectorAll('.dropdown').forEach(d => { if(d!==parent) d.classList.remove('open'); });
        parent.classList.toggle('open');
      });
    });
  }
});

// Channel Buttons Interactivity
document.querySelectorAll(".channel-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const channel = btn.dataset.channel;
    document.querySelectorAll(".article").forEach(article => {
      if(channel==="coding" && article.dataset.title!=="Coding Projects") article.style.display="none";
      else if(channel==="diy" && article.dataset.title!=="Creative DIY") article.style.display="none";
      else if(channel==="fun" && article.dataset.title!=="Fun Facts") article.style.display="none";
      else article.style.display="block";
    });
  });
});

// Random broadcast static overlay
setInterval(() => {
  const static = document.createElement("div");
  static.style.position = "fixed";
  static.style.top=0; static.style.left=0;
  static.style.width="100%"; static.style.height="100%";
  static.style.background="url('https://i.imgur.com/3C1D2UN.gif')";
  static.style.opacity=0.2; static.style.zIndex=9999;
  document.body.appendChild(static);
  setTimeout(() => static.remove(), 500);
}, 15000); // every 15s


