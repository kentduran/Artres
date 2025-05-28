document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.paddingTop = '0';
                content.style.paddingBottom = '0';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.paddingTop = '15px';
                content.style.paddingBottom = '15px';
            }
        });
    });

    // Highlight active navigation link
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav-links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active-nav-link');
        }
    });

    // Mobile navigation functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavLinks = document.querySelector('.main-nav-links');

    // Adjust nav display based on window size
    function adjustNavDisplay() {
        if (window.innerWidth <= 1200) {
            mainNavLinks.style.display = 'none';
            menuToggle.style.display = 'flex';
            mainNavLinks.style.maxHeight = '0';
            mainNavLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        } else {
            mainNavLinks.style.display = 'flex';
            menuToggle.style.display = 'none';
            mainNavLinks.style.maxHeight = null;
            mainNavLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }

    adjustNavDisplay();
    window.addEventListener('resize', adjustNavDisplay);

    // Toggle mobile menu on click
    menuToggle.addEventListener('click', function() {
        mainNavLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');

        if (mainNavLinks.classList.contains('active')) {
            mainNavLinks.style.display = 'flex';
            mainNavLinks.style.maxHeight = mainNavLinks.scrollHeight + 'px';
        } else {
            mainNavLinks.style.maxHeight = '0';
            setTimeout(() => {
                if (!mainNavLinks.classList.contains('active')) {
                    mainNavLinks.style.display = 'none';
                }
            }, 300);
        }
    });

    // Close mobile menu when a link is clicked
    mainNavLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1200) {
                mainNavLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                mainNavLinks.style.maxHeight = '0';
                setTimeout(() => {
                    mainNavLinks.style.display = 'none';
                }, 300);
            }
        });
    });

    console.log("Artres Website JavaScript Loaded!");
});