/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll("section");
const menu = document.querySelector("#navbar__list");

const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const logo = document.querySelector(".logo");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

for (let i = 0; i < sections.length; i++) {
  addLi(menu, sections[i].id, sections[i]);
}

function addLi(ul, text, section) {
  const li = document.createElement("li");
  const anchor = document.createElement("a");

  anchor.textContent = text;
  anchor.href = "#" + section.id;

  li.classList.add("menuItem");
  li.addEventListener("click", function () {
    section.scrollIntoView({ behavior: "smooth" });
  });

  li.appendChild(anchor);
  menu.appendChild(li);
}

// Add class 'active' to section when near top of viewport

function openMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", openMenu);

window.addEventListener("scroll", (e) => {
  e.preventDefault();

  const sections = document.querySelectorAll("section");

  sections.forEach((section, i) => {
    const topDistance = section.getBoundingClientRect().top;

    if (topDistance > -500 && topDistance < 142) {
      section.classList.add("your-active-class");
      document.querySelectorAll("nav a")[i].classList.add("active-li");
    } else {
      section.classList.remove("your-active-class");
      document.querySelectorAll("nav a")[i].classList.remove("active-li");
    }
  });
});

logo.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
