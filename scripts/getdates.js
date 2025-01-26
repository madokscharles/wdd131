// Get the current year
const currentYearSpan = document.getElementById("currentyear");
currentYearSpan.textContent = new Date().getFullYear();

// Get the last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Updated: ${document.lastModified}`;
