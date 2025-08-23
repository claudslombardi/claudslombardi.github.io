// This script handles the single-page navigation logic and the mobile menu.

document.addEventListener('DOMContentLoaded', () => {
    // --- Page Navigation Logic ---
    const navButtons = document.querySelectorAll('.nav-button');
    const pageSections = document.querySelectorAll('.page-section');
    const homeButton = document.getElementById('home-button');

    // Function to switch to a specific page
    const showPage = (pageId) => {
        // Hide all page sections first
        pageSections.forEach(section => {
            if (!section.classList.contains('hidden')) {
                section.classList.add('hidden');
            }
        });

        // Show the target page section
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
        }
    };

    // Add click event listeners to all navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageId = button.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Add click event listener to the main name/logo to go back to the "About" page
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            showPage('About');
        });
    }

    // --- Mobile Menu Logic ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Toggle the mobile menu visibility when the button is clicked
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Hide the mobile menu after a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });


    // By default, show the "About" page when the site loads
    showPage('About');
});

