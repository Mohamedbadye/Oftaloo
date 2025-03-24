/*document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    // Smooth scrolling for navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});*/


document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    // Smooth scrolling for navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Scroll animation for services section
    const servicesSection = document.getElementById("services");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                servicesSection.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(servicesSection);
});





document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    // Smooth scrolling for navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Scroll animation for services section
    const servicesSection = document.getElementById("about");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                servicesSection.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(servicesSection);
});

