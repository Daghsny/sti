
// ------ MOBILE MENU LOGIC ------
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    let sidebarOverlay = document.getElementById('sidebar-overlay');
    const mobileHomeBtn = document.getElementById('mobile-home-btn');

    // General function to go home
    function goHome() {
        if (typeof switchView === 'function') {
            switchView('home');

            // Close menu if open
            if (sidebar && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                if (sidebarOverlay) sidebarOverlay.classList.remove('active');
            }
        }
    }

    // Attach to main home button
    if (mobileHomeBtn) {
        mobileHomeBtn.addEventListener('click', goHome);
    }

    // Attach to all mobile return triggers (in any view)
    const mobileTriggers = document.querySelectorAll('.mobile-home-trigger');
    mobileTriggers.forEach(btn => {
        btn.addEventListener('click', goHome);
    });

    if (menuToggle && sidebar) {
        function toggleMenu() {
            sidebar.classList.toggle('active');
            if (sidebarOverlay) sidebarOverlay.classList.toggle('active');
        }

        function closeMenu() {
            sidebar.classList.remove('active');
            if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        }

        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        if (sidebarOverlay) {
            sidebarOverlay.addEventListener('click', closeMenu);
        }

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 1024) {
                    closeMenu();
                }
            });
        });

        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('active') &&
                !sidebar.contains(e.target) &&
                !menuToggle.contains(e.target)) {
                closeMenu();
            }
        });
    }
});
