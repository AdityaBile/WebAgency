"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * heroVideo
 */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("heroVideo").defaultPlaybackRate = 0.5;
  document.getElementById("heroVideo").play();
});

/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * Popup Project Details
 */

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-primary");
  const closeButtons = document.querySelectorAll(".close-popup");

  // Handle popup open and close
  buttons.forEach((button) => {
    const targetId = button.getAttribute("data-target");
    if (targetId) {
      button.addEventListener("click", () => {
        const popup = document.getElementById(targetId);
        popup.style.display = "flex";
      });
    }
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".popup").style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup")) {
      event.target.style.display = "none";
    }
  });

  // Handle PDF download
  const pdfButtons = document.querySelectorAll(".pdf-download .btn-primary");
  pdfButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const pdfUrl = button.getAttribute("data-pdf");
      if (pdfUrl) {
        window.location.href = pdfUrl;
      }
    });
  });
});
