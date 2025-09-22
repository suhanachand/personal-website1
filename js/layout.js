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


