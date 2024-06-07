//Background link navbar
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove("active"));
        
        // Add 'active' class to the clicked link
        this.classList.add("active");
      });
    });
  });
  
//Smooth scrolling + navbar don't hide titles section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offset = 100; // Adjust this value to match navbar height

      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});