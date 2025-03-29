function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    // Toggle menu visibility when clicking the button
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    // Close menu when a link is clicked (for better UX)
    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
        });
    });
});
