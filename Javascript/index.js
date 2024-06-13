document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-link a");
  const sections = document.querySelectorAll("section");

  // Function to remove 'active' class from all links
  function removeActiveClass() {
      navLinks.forEach(link => link.classList.remove("active"));
  }

  // Function to add 'active' class to the link corresponding to the section in view
  function addActiveClass(sectionId) {
      navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
          }
      });
  }

  // Smooth scrolling
  navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              const offset = 30; // Adjust this value to match navbar height

              window.scrollTo({
                  top: targetElement.offsetTop - offset,
                  behavior: 'smooth'
              });

              removeActiveClass();
              this.classList.add("active");
          }
      });
  });

  // Scroll event to update active class
  window.addEventListener("scroll", function() {
      let currentSection = "";

      sections.forEach(section => {
          const sectionTop = section.offsetTop - 110; // Adjust this value to match navbar height on scrolling
          if (scrollY >= sectionTop) {
              currentSection = section.getAttribute("id");
          }
      });

      removeActiveClass();
      addActiveClass(currentSection);
  });
});
