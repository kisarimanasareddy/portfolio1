// Display the current year in the footer
const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});