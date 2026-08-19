const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const dotsContainer = document.querySelector(".dots");
const counter = document.querySelector(".counter");

let currentSlide = 0;
let autoPlayTimer;
const autoPlayDelay = 4500;

function closeMobileMenu() {
    navMenu.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
}

function closeDropdown() {
    dropdown.classList.remove("open");
    dropdownToggle.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu() {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function toggleDropdown() {
    const isOpen = dropdown.classList.toggle("open");
    dropdownToggle.setAttribute("aria-expanded", String(isOpen));
}

function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        const isActive = index === currentSlide;
        dot.classList.toggle("active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
}

// Shows the requested slide and wraps around at both ends.
function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("active", slideIndex === currentSlide);
    });

    counter.textContent = `${currentSlide + 1} / ${slides.length}`;
    updateDots();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = window.setInterval(nextSlide, autoPlayDelay);
}

function stopAutoPlay() {
    if (autoPlayTimer) {
        window.clearInterval(autoPlayTimer);
    }
}

// Builds accessible dot controls from the current slide list.
function createDots() {
    slides.forEach((slide, index) => {
        const dot = document.createElement("button");
        dot.className = "dot";
        dot.type = "button";
        dot.setAttribute("aria-label", `Show gallery image ${index + 1}`);
        dot.addEventListener("click", () => {
            showSlide(index);
            startAutoPlay();
        });
        dotsContainer.appendChild(dot);
    });
}

menuToggle.addEventListener("click", toggleMobileMenu);
dropdownToggle.addEventListener("click", toggleDropdown);

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        closeMobileMenu();
        closeDropdown();
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        closeDropdown();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMobileMenu();
        closeDropdown();
    }
});

dropdownMenu.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeDropdown();
        dropdownToggle.focus();
    }
});

previousButton.addEventListener("click", () => {
    previousSlide();
    startAutoPlay();
});

nextButton.addEventListener("click", () => {
    nextSlide();
    startAutoPlay();
});

slider.addEventListener("mouseenter", stopAutoPlay);
slider.addEventListener("mouseleave", startAutoPlay);
slider.addEventListener("focusin", stopAutoPlay);
slider.addEventListener("focusout", startAutoPlay);
slider.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        nextSlide();
    }

    if (event.key === "ArrowLeft") {
        previousSlide();
    }
});

createDots();
showSlide(currentSlide);
startAutoPlay();
