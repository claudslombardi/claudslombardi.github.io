// This script handles the single-page navigation logic.

document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation buttons and page sections
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

    // By default, show the "About" page when the site loads
    showPage('About');
});
