// Current Year in Footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

// 1. Grab the target element
const animatedRole = document.getElementById("animated-role");

// 2. List of roles you want to rotate through
const roles = [
  "Business Analyst",
  "UX Designer",
  "System Analyst",
  "Data Analyst",
  "Project Manager"
];

// 3. Set an initial index
let currentIndex = 0;

// 4. Function to rotate roles
function rotateRole() {
  // Fade out
  animatedRole.classList.remove("fade-in");
  animatedRole.classList.add("fade-out");

  // After fade-out completes (0.5s), change the text and fade in
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % roles.length;
    animatedRole.textContent = roles[currentIndex];

    animatedRole.classList.remove("fade-out");
    animatedRole.classList.add("fade-in");
  }, 500);
}

// 5. Start the rotation at an interval of 3 seconds
setInterval(rotateRole, 3000);

