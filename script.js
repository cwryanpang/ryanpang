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

// 1. Select the element where the typing occurs
const typewriter = document.getElementById("typewriter");

// 2. Array of job titles to cycle
const roles = [
  "Business Analyst",
  "UX Designer",
  "System Analyst",
  "Data Analyst",
  "Project Manager"
  "Digital Marketer"
];

// 3. Define variables to track
let roleIndex = 0;    // which role we're on
let charIndex = 0;    // which character we're typing
let isDeleting = false; // whether we are currently deleting text

// Customize speeds (in milliseconds)
const TYPING_SPEED = 100;   // speed of typing each letter
const ERASING_SPEED = 80;   // speed of erasing each letter
const PAUSE_AFTER_TYPING = 1500; // pause before start erasing
const PAUSE_AFTER_ERASING = 300;  // pause before start typing next title

function typeAnimation() {
  // Current role we’re working on
  const currentRole = roles[roleIndex];
  
  if (!isDeleting) {
    // Typing forward
    typewriter.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;

    // If we've reached the full length of the currentRole
    if (charIndex === currentRole.length) {
      // Pause, then start erasing
      setTimeout(() => {
        isDeleting = true;
        typeAnimation();
      }, PAUSE_AFTER_TYPING);
    } else {
      // Continue typing
      setTimeout(typeAnimation, TYPING_SPEED);
    }
  } else {
    // Erasing
    typewriter.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;

    // If the text is fully erased
    if (charIndex === 0) {
      isDeleting = false;
      // Move to the next role, wrap around if at the end
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeAnimation, PAUSE_AFTER_ERASING);
    } else {
      // Continue erasing
      setTimeout(typeAnimation, ERASING_SPEED);
    }
  }
}

// Start the typing effect
typeAnimation();
