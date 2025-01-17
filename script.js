  <!-- JavaScript -->
  <script>
    // --------------------------
    // 1. Current Year in Footer
    // --------------------------
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }

    // --------------------------
    // 2. Hamburger Menu
    // --------------------------
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger) {
      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
      });
    }

    // --------------------------
    // 3. Typing Animation
    // --------------------------
    const typewriter = document.getElementById("typewriter");
    const roles = [
      "Business Analyst",
      "UX Designer",
      "System Analyst",
      "Data Analyst",
      "Project Manager",
      "Digital Marketer"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const TYPING_SPEED = 100;
    const ERASING_SPEED = 80;
    const PAUSE_AFTER_TYPING = 1500;
    const PAUSE_AFTER_ERASING = 300;

    function typeAnimation() {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        // Typing forward
        typewriter.textContent = currentRole.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
          setTimeout(() => {
            isDeleting = true;
            typeAnimation();
          }, PAUSE_AFTER_TYPING);
        } else {
          setTimeout(typeAnimation, TYPING_SPEED);
        }
      } else {
        // Erasing backward
        typewriter.textContent = currentRole.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          // Move to the next role
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(typeAnimation, PAUSE_AFTER_ERASING);
        } else {
          setTimeout(typeAnimation, ERASING_SPEED);
        }
      }
    }

    // Start the typing effect
    typeAnimation();
  </script>
