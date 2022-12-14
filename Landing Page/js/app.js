// Global Variables

const sections = document.querySelectorAll("section");
const menu = document.querySelector("#navbar__list");

const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const logo = document.querySelector(".logo");
const form = document.querySelector("form");

// dynamically added li  with a tag in header

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

// mobile menu open and close function, which adds/removes class to apply style

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

// indication for header's sections added while scrolling thru the sreen based on the viewport

window.addEventListener("scroll", (e) => {
  e.preventDefault();

  const sections = document.querySelectorAll("section");

  sections.forEach((section, i) => {
    const topDistance = section.getBoundingClientRect().top;

    if (topDistance > -500 && topDistance < 142) {
      section.classList.add("your-active-section");

      document.querySelectorAll("nav a")[i].classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-section");
      document
        .querySelectorAll("nav a")
        [i].classList.remove("your-active-class");
    }
  });
});

// return to the top of the landing page when pressed on logo icon

logo.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// delete class that shows hamburger-menu when section is selected

menuItems.forEach((e) =>
  e.addEventListener("click", () => {
    menu.classList.remove("showMenu");

    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  })
);

// alert window when form submitted

form.addEventListener("submit", (e) => {
  // e.preventDefault();
  alert("Thanks! Your response was submitted");
});
