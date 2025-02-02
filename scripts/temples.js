// Responsive Navigation (Hamburger Menu)
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('nav');

// Toggle menu visibility on hamburger click
hamburger.addEventListener('click', () => {
  menu.classList.toggle('visible'); // Toggle the visibility of the menu
  hamburger.textContent = menu.classList.contains('visible') ? '✖' : '☰'; // Change button text
});

// Footer Date
const yearElement = document.querySelector('#year');
const lastModifiedElement = document.querySelector('#lastModified');

// Update to copyright year
yearElement.textContent = new Date().getFullYear();

// Update to last modified date
lastModifiedElement.textContent = document.lastModified;