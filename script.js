document.addEventListener("DOMContentLoaded", function () {
    console.log("PPF & Detailing World Website Loaded");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.08)";
        });

        btn.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});
