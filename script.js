document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".ProjectCard");
    const viewMoreBtn = document.querySelector(".ViewMoreProjectsBtn");

    // Show only the first 6 cards initially
    const visibleCount = 6;

    function showInitialCards() {
        projectCards.forEach((card, index) => {
            if (index < visibleCount) {
                card.classList.add("visible");
            } else {
                card.classList.remove("visible");
            }
        });
        viewMoreBtn.textContent = "View More"; // Reset button text
    }

    function showAllCards() {
        projectCards.forEach((card) => card.classList.add("visible"));
        viewMoreBtn.textContent = "View Less"; // Update button text
    }

    // Initially show only the first 6 cards
    showInitialCards();

    // Add click event to toggle between "View More" and "Show Less"
    viewMoreBtn.addEventListener("click", () => {
        const allVisible = Array.from(projectCards).every((card) =>
            card.classList.contains("visible")
        );

        if (allVisible) {
            showInitialCards(); // If all are visible, revert to initial view
        } else {
            showAllCards(); // If not all are visible, show all cards
        }
    });
});
//footer script
fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
});
//header script

        // Load the header.html content into the #header-placeholder div
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-placeholder').innerHTML = data;
            });

            // Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing function
      once: false, // Whether animation should happen only once
      mirror: true // Whether elements should animate out while scrolling past them
    });
  });

  //header menu toggle javascript
  
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const primaryMenu = document.getElementById('primary-menu');
  
    menuToggle.addEventListener('click', () => {
      // Toggle the 'show' class
      primaryMenu.classList.toggle('show');
  
      // Update aria-expanded for accessibility
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
  });
  


  