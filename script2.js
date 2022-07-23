// script without unnessery comment
const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const navItems = document.querySelectorAll(".navItem");

function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(
            `slide-${direction1}-${i + 1}`,
            `slide-${direction2}-${i + 1}`
        );
    });
}

function toggleNav() {
    // Toggle: menu Bars Open/Closed
    menuBars.classList.toggle("change");
    // Toggle: Menu active
    overlay.classList.toggle("overlay-active");
    if (overlay.classList.contains("overlay-active")) {
        //Animate In - Overlay
        overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
        // animate in - nav items
        navAnimation("out", "in");
    } else {
        //Animate out - Overlay
        overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
        // animate out - nav items
        navAnimation("in", "out");
    }
}

// Event Listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
});
