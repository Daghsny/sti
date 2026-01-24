const coursesData = [
    {
        id: 1,
        title: "Concept Fondamentaux d'une Base de données Relationnelle",
        category: "Cours",
        icon: "ph-book-open",
        colorClass: "card-green",
        rating: 4.8,
        students: "9,530 students",
        type: "Course",
        dateAdded: "2025-11-05",
        pdfUrl: "https://daghsny.github.io/sti/assets/Les concepts fondamentaux d’une BDR.pdf",
        thumbnail: "https://picsum.photos/id/1/600/350"
    },
        {
        id: 2,
        title: "PHP",
        category: "Cours",
        icon: "ph-book-open",
        colorClass: "card-purple",
        rating: 4.8,
        students: "9,530 students",
        type: "Course",
        dateAdded: "2026-01-24",
        pdfUrl: "https://daghsny.github.io/sti/assets/PHP_Cour.pdf",
        thumbnail: "https://picsum.photos/id/1/600/350"
    },
    {
        id: 10,
        title: "PhP",
        category: "Annexe",
        icon: "ph-paperclip",
        colorClass: "card-purple",
        rating: 4.9,
        students: "1,463 students",
        type: "Annexe",
        dateAdded: "2025-11-01",
        pdfUrl: "https://daghsny.github.io/sti/assets/Php.pdf",
        thumbnail: "https://daghsny.github.io/sti/assets/images/php_logo.png"
    },
     {
        id: 11,
        title: "JavaScript",
        category: "Annexe",
        icon: "ph-paperclip",
        colorClass: "card-green",
        rating: 4.9,
        students: "1,463 students",
        type: "Annexe",
        dateAdded: "2025-11-01",
        pdfUrl: "https://daghsny.github.io/sti/assets/Js.pdf",
        thumbnail: "https://daghsny.github.io/sti/assets/images/js_logo.png"
    },
     {
        id: 12,
        title: "CSS",
        category: "Annexe",
        icon: "ph-paperclip",
        colorClass: "card-purple",
        rating: 4.9,
        students: "1,463 students",
        type: "Annexe",
        dateAdded: "2025-11-01",
        pdfUrl: "https://daghsny.github.io/sti/assets/Css.pdf",
        thumbnail: "https://daghsny.github.io/sti/assets/images/css_logo.png"
    },
     {
        id: 13,
        title: "HTML",
        category: "Annexe",
        icon: "ph-paperclip",
        colorClass: "card-orange",
        rating: 4.9,
        students: "1,463 students",
        type: "Annexe",
        dateAdded: "2025-11-01",
        pdfUrl: "https://daghsny.github.io/sti/assets/Hmtl.pdf",
        thumbnail: "https://daghsny.github.io/sti/assets/images/html_logo.png"
    },
     {
        id: 14,
        title: "SQL",
        category: "Annexe",
        icon: "ph-paperclip",
        colorClass: "card-green",
        rating: 4.9,
        students: "1,463 students",
        type: "Annexe",
        dateAdded: "2025-11-01",
        pdfUrl: "https://daghsny.github.io/sti/assets/SQL.pdf",
        thumbnail: "https://daghsny.github.io/sti/assets/images/sql_logo.png"
    },
    // {
    //     id: 3,
    //     title: "Certified Six Sigma Yellow Belt Training",
    //     category: "TP",
    //     icon: "ph-flask",
    //     colorClass: "card-purple",
    //     rating: 4.9,
    //     students: "6,726 students",
    //     type: "TD",
    //     dateAdded: "2023-11-05",
    //     pdfUrl: "assets/six_sigma.pdf",
    //     thumbnail: "https://picsum.photos/id/3/600/350"
    // },
    // {
    //     id: 4,
    //     title: "How to Design a Room in 10 Easy Steps",
    //     category: "Cours",
    //     icon: "ph-cube",
    //     colorClass: "card-green",
    //     rating: 5.0,
    //     students: "8,735 students",
    //     type: "Course",
    //     dateAdded: "2023-11-10",
    //     pdfUrl: "assets/interior_design.pdf",
    //     thumbnail: "https://picsum.photos/id/4/600/350"
    // },
    // {
    //     id: 5,
    //     title: "Introduction to Psychology",
    //     category: "Annexe",
    //     icon: "ph-brain",
    //     colorClass: "card-orange",
    //     rating: 4.7,
    //     students: "2,100 students",
    //     type: "Correction",
    //     dateAdded: "2023-11-12",
    //     pdfUrl: "assets/psychology_intro.pdf",
    //     thumbnail: "https://picsum.photos/id/5/600/350"
    // },
    // {
    //     id: 6,
    //     title: "Advanced CSS Animations",
    //     category: "Examen Bac",
    //     icon: "ph-code",
    //     colorClass: "card-pink",
    //     rating: 4.9,
    //     students: "3,250 students",
    //     type: "Quiz",
    //     dateAdded: "2023-11-15",
    //     pdfUrl: "assets/css_animations.pdf",
    //     thumbnail: "https://picsum.photos/id/6/600/350"
    // },
    // {
    //     id: 7,
    //     title: "Advanced CSS Animations",
    //     category: "Examen Bac",
    //     icon: "ph-paperclip",
    //     colorClass: "card-pink",
    //     rating: 4.9,
    //     students: "3,250 students",
    //     type: "Quiz",
    //     dateAdded: "2022-11-15",
    //     pdfUrl: "assets/css_animations.pdf",
    //     thumbnail: "https://picsum.photos/id/6/600/350"
    // }
];

const coursesGrid = document.getElementById('coursesGrid');
const filterChips = document.querySelectorAll('.category-chip');
const recentFilesList = document.getElementById('recentFilesList');

// Modal Elements (Global Scope)
const modal = document.getElementById('courseModal');
const closeModal = document.getElementById('closeModal');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalType = document.getElementById('modalType');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const startLearningBtn = document.querySelector('.btn-primary'); // The start button

// Close Modal Logic
if (closeModal) {
    closeModal.onclick = () => modal.classList.remove('open');
}

// const recentFilesList = document.getElementById('recentFilesList'); // Moved inside renderRecentFiles

// Modal Elements (Global Scope) - REMOVED as per instructions
// const modal = document.getElementById('courseModal');
// const closeModal = document.getElementById('closeModal');
// const modalIcon = document.getElementById('modalIcon');
// const modalTitle = document.getElementById('modalTitle');
// const modalType = document.getElementById('modalType');
// const modalCategory = document.getElementById('modalCategory');
// const modalDescription = document.getElementById('modalDescription');
// const startLearningBtn = document.querySelector('.btn-primary'); // The start button

// Close Modal Logic - REMOVED as per instructions
// if (closeModal) {
//     closeModal.onclick = () => modal.classList.remove('open');
// }

// window.onclick = (e) => {
//     if (e.target === modal) modal.classList.remove('open');
// }

// ------ RENDER FUNCTIONS ------

function renderCourses(courses) {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) return;

    coursesGrid.innerHTML = '';

    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = `course-card ${course.colorClass}`;

        card.innerHTML = `
            <div class="card-header">
                <div class="course-icon">
                    <i class="ph-fill ${course.icon}"></i>
                </div>
                <div class="rating-chip">
                    <i class="ph-fill ph-star" style="color: #FFB547"></i> ${course.rating}
                </div>
            </div>
            
            <!-- Thumbnail Image -->
            <div class="course-thumbnail-wrapper">
                 <img src="${course.thumbnail}" alt="${course.title}" class="course-thumb" loading="lazy">
            </div>

            <div class="course-type-badge" style="font-size: 0.7rem; font-weight: 700; opacity: 0.6; text-transform: uppercase; margin-bottom: 4px;">
                ${course.type}
            </div>

            <h3 class="course-title">${course.title}</h3>
            
            <div class="course-footer">
                <span class="student-count">${course.students}</span>
            </div>
        `;

        // Direct Logic - Open Content Page
        card.addEventListener('click', () => {
            window.location.href = `content.html?id=${course.id}`;
        });

        coursesGrid.appendChild(card);
    });
}

function renderContentDetail(id) {
    const container = document.getElementById('detailContainer');
    const headerTitle = document.getElementById('detailTitle');

    if (!container) return;

    const course = coursesData.find(c => c.id == id);

    if (!course) {
        container.innerHTML = "<h3>Content not found</h3><p>The requested content ID does not exist.</p><a href='index.html' class='btn-primary' style='display:inline-block; margin-top:1rem; text-decoration:none;'>Return Home</a>";
        return;
    }

    if (headerTitle) headerTitle.textContent = course.title;

    container.innerHTML = `
        <div class="detail-header" style="text-align: center; margin-bottom: 2rem;">
            <div class="course-icon ${course.colorClass}" style="width: 80px; height: 80px; font-size: 2.5rem; margin: 0 auto 1rem; border-radius: 20px;">
                <i class="ph-fill ${course.icon}"></i>
            </div>
            <span class="category-chip" style="display: inline-flex; background: rgba(0,0,0,0.05);">${course.type}</span>
            <h2 style="margin-top: 1rem; font-size: 1.8rem;">${course.title}</h2>
            <p style="color: var(--text-secondary);">Category: ${course.category} • Added: ${course.dateAdded}</p>
        </div>
        
        <div class="detail-body" style="line-height: 1.6; color: var(--text-secondary); margin-bottom: 2rem;">
            <p><strong>Description:</strong></p>
            <p>Learn properly with our <strong>${course.title}</strong> module. This comprehensive ${course.type} covers all essential topics to help you master the subject.</p>
            <p style="margin-top: 1rem;">Join ${course.students} who are already learning from this material.</p>
        </div>
        
        <div class="detail-actions" style="display: flex; gap: 1rem; justify-content: center;">
            <button class="btn-primary" onclick="window.open('${course.pdfUrl}', '_blank')" style="max-width: 200px;">
                Open ${course.type === 'Quiz' ? 'Quiz' : 'PDF'}
            </button>
            <button class="btn-secondary" style="max-width: 200px;">
                Save for Later
            </button>
        </div>
    `;
}

function renderRecentFiles() {
    const recentFilesList = document.getElementById('recentFilesList');
    if (!recentFilesList) return;

    // Sort by date descending
    const sorted = [...coursesData].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    // Take top 5
    const recent = sorted.slice(0, 5);

    recentFilesList.innerHTML = '';
    recent.forEach(course => {
        const item = document.createElement('div');
        item.className = 'course-mini-card';
        // Check local theme for mini card style adjustment if needed, but CSS vars handle most

        item.onclick = () => {
            window.location.href = `content.html?id=${course.id}`;
        };

        let iconBg = '';
        // if (course.category === 'IT & Software' || course.category === 'Media Training') iconBg = 'p-pink';
        // else iconBg = 'p-orange';

        // Manually mapping bg colors from main class
        if (course.colorClass.includes('pink')) iconBg = 'background: var(--accent-pink)';
        if (course.colorClass.includes('orange')) iconBg = 'background: var(--accent-orange)';
        if (course.colorClass.includes('purple')) iconBg = 'background: var(--accent-purple)';
        if (course.colorClass.includes('green')) iconBg = 'background: var(--accent-green)';


        item.innerHTML = `
            <div class="mini-icon" style="${iconBg}; color: #1C1C1E;">
                <i class="ph-fill ${course.icon}"></i>
            </div>
            <div class="mini-details">
                <span class="cat">${course.dateAdded}</span>
                <h5>${course.title}</h5>
                <div class="mini-meta">${course.type}</div>
            </div>
        `;
        recentFilesList.appendChild(item);
    });
}


// ------ FILTERING ------
filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const category = chip.getAttribute('data-filter');
        if (category === 'all') {
            renderCourses(coursesData);
        } else {
            const filtered = coursesData.filter(course => course.category === category);
            renderCourses(filtered);
        }
    });
});




// ------ INIT ------

// ------ CALENDAR DATA (Upcoming Key Dates) ------
const upcomingEvents = [
    { title: "Devoir de Synthese N°01", type: "Examen", date: "Dec 08, 2025", color: "#FFD54F", icon: "ph-warning" },
    { title: "Devoir de Controle N°03", type: "Pratique", date: "Jan 29, 2026", color: "#E0E0E0", icon: "ph-projector-screen" },
    { title: "Devoir de Controle N°04", type: "Théorique", date: "Fev 10, 2026", color: "var(--accent-pink)", icon: "ph-chalkboard-teacher" },
    { title: "Devoir de Synthese N°02", type: "Examen", date: "Mars 06, 2024", color: "var(--accent-purple)", icon: "ph-code" },
    // { title: "Graduation Ceremony", type: "Event", date: "Jun 15, 2024", color: "var(--accent-green)", icon: "ph-graduation-cap" }
];

// ------ CALENDAR LOGIC ------
const navHome = document.getElementById('nav-home');
const navCalendar = document.getElementById('nav-calendar');
const navInfo = document.getElementById('nav-info');
const dashboardView = document.getElementById('dashboard-view');
const calendarView = document.getElementById('calendar-view');
const infoView = document.getElementById('info-view');
const calendarGrid = document.getElementById('calendarGrid');

// ------ VIEW NAVIGATION (REMOVED: Now using separate HTML pages) ------
// Functions renderCalendar etc are now called directly by their respective pages


function renderCalendar() {
    const calendarContainer = document.getElementById('calendarGrid');
    if (calendarContainer.children.length > 0) return; // Already rendered

    calendarContainer.innerHTML = '';
    calendarContainer.className = ''; // Remove grid class

    // Use a wrapper constraints the width for better readability
    const wrapper = document.createElement('div');
    wrapper.style.maxWidth = '800px';
    wrapper.style.margin = '0 auto';

    upcomingEvents.forEach(event => {
        const item = document.createElement('div');
        item.className = 'course-mini-card'; // Reuse existing card style
        item.style.marginBottom = '1rem';
        item.style.cursor = 'default'; // No click action

        let iconBg = 'background: ' + event.color;
        // Adjust text color for light backgrounds if needed, but default is dark text handles most

        item.innerHTML = `
            <div class="mini-icon" style="${iconBg}; color: #1C1C1E; width: 60px; height: 60px; font-size: 1.5rem;">
                <i class="ph-fill ${event.icon}"></i>
            </div>
            <div class="mini-details" style="padding-left: 1rem;">
                <span class="cat" style="font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">${event.type}</span>
                <h5 style="font-size: 1.2rem; margin: 4px 0;">${event.title}</h5>
                <div class="mini-meta" style="font-size: 0.9rem; font-weight: 500;">
                    <i class="ph-bold ph-calendar-blank" style="margin-right: 4px;"></i> ${event.date}
                </div>
            </div>
            <div class="action-btn">
                <button class="btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.8rem;">Details</button>
            </div>
        `;
        wrapper.appendChild(item);
    });

    calendarContainer.appendChild(wrapper);
}

// ------ INIT ------
// initTheme(); // Removed
renderCourses(coursesData);
renderRecentFiles();



















