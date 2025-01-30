// Hamburger Menu Toggle
document.getElementById('menu').addEventListener('click', function() {
    const nav = document.querySelector('.navigation');
    const isHidden = nav.getAttribute('aria-hidden') === 'true';
    nav.setAttribute('aria-hidden', !isHidden);
});

// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // Save user preference in localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
});

// Apply Dark Mode Preference on Page Load
window.addEventListener('load', function() {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

// Dynamic Date Display
document.addEventListener('DOMContentLoaded', function() {
    // Display current year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Display last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});