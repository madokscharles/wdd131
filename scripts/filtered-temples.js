const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
];

function displayTemples(templeArray) {
  const templeContainer = document.getElementById('album');
  templeContainer.innerHTML = '';

  templeArray.forEach((temple) => {
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');

    templeCard.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${new Date(temple.dedicated).toLocaleDateString()}</p>
      <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
    `;
    templeContainer.appendChild(templeCard);
  });
}

displayTemples(temples);

document.getElementById('filter-old').addEventListener('click', () => {
  const filteredTemples = temples.filter((temple) => new Date(temple.dedicated).getFullYear() < 1900);
  displayTemples(filteredTemples);
});

document.getElementById('filter-new').addEventListener('click', () => {
  const filteredTemples = temples.filter((temple) => new Date(temple.dedicated).getFullYear() > 2000);
  displayTemples(filteredTemples);
});

document.getElementById('filter-large').addEventListener('click', () => {
  const filteredTemples = temples.filter((temple) => temple.area > 90000);
  displayTemples(filteredTemples);
});

document.getElementById('filter-small').addEventListener('click', () => {
  const filteredTemples = temples.filter((temple) => temple.area < 10000);
  displayTemples(filteredTemples);
});

document.getElementById('filter-home').addEventListener('click', () => {
  displayTemples(temples);
});

// Responsive Navigation (Hamburger Menu)
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('nav');

// Toggle menu visibility on hamburger click
hamburger.addEventListener('click', () => {
  menu.classList.toggle('visible');
  hamburger.textContent = menu.classList.contains('visible') ? '✖' : '☰';
});

// Footer Date
const yearElement = document.querySelector('#year');
const lastModifiedElement = document.querySelector('#lastModified');

// Update to copyright year
yearElement.textContent = new Date().getFullYear();

// Update to last modified date
lastModifiedElement.textContent = document.lastModified;