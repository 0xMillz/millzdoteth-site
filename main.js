// Set the current year dynamically in the footer
const yearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear.toString();