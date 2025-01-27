// Responsive Navigation (Hamburger Menu)
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  hamburger.textContent = menu.classList.contains('hidden') ? '☰' : '✖';
});

// Update to Footer Date
const yearElement = document.querySelector('#year');
const lastModifiedElement = document.querySelector('#lastModified');

// Update to copyright year
yearElement.textContent = new Date().getFullYear();

// Update to last modified date
lastModifiedElement.textContent = document.lastModified;
