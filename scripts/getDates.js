// getDates.js
document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById("year");
    const lastModifiedElement = document.getElementById("lastModified");

    // Get the current year
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Get the last modified date
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = lastModifiedDate.toLocaleDateString();
});