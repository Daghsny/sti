const coursesData = 
[
// ******** assets ************
    {
        id: 0,
        title: "Assets",
        category: "Repository",
        icon: "ph-book-open",
        colorClass: "card-green",
        rating: "Assets",
        students: "9,530 students",
        type: "Repository",
        dateAdded: "2026-09-27",
        pdfUrl: "https://drive.google.com/drive/folders/1qAJwyMIiKKfOLxI5vbfN1GZ34sQH39A1?usp=sharing",
        thumbnail: "https://lorem-picsum.netlify.app/img/photo.png"
    },
    // ******** CORSES  ********   
    // {
    //     id: 1,
    //     title: "Concept Fondamentaux d'une Base de données Relationnelle",
    //     category: "Cours",
    //     icon: "ph-book-open",
    //     colorClass: "card-green",
    //     rating: "Cours",
    //     students: "9,530 students",
    //     type: "Course",
    //     dateAdded: "2025-11-05",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/Les concepts fondamentaux d’une BDR.pdf",
    //     thumbnail: "https://picsum.photos/id/1/600/350"
    // },
    //     {
    //     id: 2,
    //     title: "PHP",
    //     category: "Cours",
    //     icon: "ph-book-open",
    //     colorClass: "card-purple",
    //     rating: "Cours",
    //     students: "9,530 students",
    //     type: "Course",
    //     dateAdded: "2026-01-24",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/PHP_Cour.pdf",
    //     thumbnail: "https://picsum.photos/id/1/600/351"
    // },
    {
        id: 3,
        title: "Transformation CSS",
        category: "Cours",
        icon: "ph-book-open",
        colorClass: "card-orange",
        rating: "Cours",
        students: "6,726 students",
        type: "Course",
        dateAdded: "2026-04-15",
        pdfUrl: "https://daghsny.github.io/sti/transformation.html",
        thumbnail: "https://miro.medium.com/v2/1*_6MfwckxNfQTca9SiG8MdQ.png"
    },
             // ******** ANNEXES  ********  
    {
        id: 10,
        title: "PhP",
        category: "Annexe",
        icon: "ph-paperclip",
        colorClass: "card-purple",
        rating: "Annexe",
        students: "1,463 students",
        type: "Annexe",
        dateAdded: "2026-09-26",
        pdfUrl: "https://daghsny.github.io/sti/assets/annexe/Php.pdf",
        thumbnail: "https://daghsny.github.io/sti/assets/images/php_logo.png"
    },
     {
        id: 11,
        title: "JavaScript",
        category: "Annexe",
        icon: "ph-paperclip",
        colorClass: "card-yellow",
        rating: "Annexe",
        students: "1,463 students",
        type: "Annexe",
        dateAdded: "2026-09-26",
        pdfUrl: "https://daghsny.github.io/sti/assets/annexe/Js.pdf",
        thumbnail: "https://daghsny.github.io/sti/assets/images/js_logo.png"
    },
     {
        id: 12,
        title: "CSS",
        category: "Annexe",
        icon: "ph-paperclip",
        colorClass: "card-purple",
        rating: "Annexe",
        students: "1,463 students",
        type: "Annexe",
        dateAdded: "2026-09-26",
        pdfUrl: "https://daghsny.github.io/sti/assets/annexe/Css.pdf",
        thumbnail: "https://daghsny.github.io/sti/assets/images/css_logo.png"
    },
     {
        id: 13,
        title: "HTML",
        category: "Annexe",
        icon: "ph-paperclip",
        colorClass: "card-orange",
        rating: "Annexe",
        students: "1,463 students",
        type: "Annexe",
        dateAdded: "2026-09-26",
        pdfUrl: "https://daghsny.github.io/sti/assets/annexe/Hmtl.pdf",
        thumbnail: "https://daghsny.github.io/sti/assets/images/html_logo.png"
    },
     {
        id: 14,
        title: "SQL",
        category: "Annexe",
        icon: "ph-paperclip",
        colorClass: "card-green",
        rating: "Annexe",
        students: "1,463 students",
        type: "Annexe",
        dateAdded: "2026-09-26",
        pdfUrl: "https://daghsny.github.io/sti/assets/annexe/SQL.pdf",
        thumbnail: "https://daghsny.github.io/sti/assets/images/sql_logo.png"
    },
      // ******** TDs  ********  
    //    {
    //     id: 60,
    //     title: "PhPMySqli",
    //     category: "TP",
    //     icon: "ph-hard-drives",
    //     colorClass: "card-yellow",
    //     rating: "TP",
    //     students: "6,726 students",
    //     type: "TD",
    //     dateAdded: "2026-01-28",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/TP/TP_PhPMySqli.pdf",
    //     thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVmSxWgLK75JUuv89TOMu3_S7EeTMwMwCbw&s"
    // },
    // {
    //     id: 61,
    //     title: "Règles de Gestion BD",
    //     category: "TP",
    //     icon: "ph-hard-drives",
    //     colorClass: "card-green",
    //     rating: "TP",
    //     students: "6,726 students",
    //     type: "TD",
    //     dateAdded: "2026-02-26",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/TP/Regles_SQL.pdf",
    //     thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVmSxWgLK75JUuv89TOMu3_S7EeTMwMwCbw&s"
    // },
    //     {
    //     id: 62,
    //     title: "PHP Shopping",
    //     category: "TP",
    //     icon: "ph-hard-drives",
    //     colorClass: "card-green",
    //     rating: "TP",
    //     students: "6,726 students",
    //     type: "TD",
    //     dateAdded: "2026-02-25",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/TP/PHP_Shopping.pdf",
    //     thumbnail: "https://static.vecteezy.com/ti/photos-gratuite/p1/3528838-petit-panier-avec-ordinateur-portable-pour-achat-en-ligne-concept-gratuit-photo.jpg"
    // },
    //    {
    //     id: 63,
    //     title: "PHP Date",
    //     category: "TP",
    //     icon: "ph-hard-drives",
    //     colorClass: "card-green",
    //     rating: "TP",
    //     students: "6,726 students",
    //     type: "TD",
    //     dateAdded: "2026-05-07",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/TP/Excercises Php.pdf",
    //     thumbnail: "https://fieldnotesbrand.imgix.net/images/FN-18-Calendar-2026-Pages.jpg?ixlib=php-4.1.0&s=37f07777f7f3f0b07cc3f960b62df9d3"
    // },{
    //     id: 64,
    //     title: "App Puce",
    //     category: "TP",
    //     icon: "ph-hard-drives",
    //     colorClass: "card-yellow",
    //     rating: "TP",
    //     students: "6,726 students",
    //     type: "TD",
    //     dateAdded: "2026-01-28",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/TP/Enoncé.pdf",
    //     thumbnail: "https://www.techno.rn.tn/images/2017/10/02/Visuel-Sim-Data.png"
    // },
 // ******** PROJECTS  ********  
    {
        id: 40,
        title: "Projet Le Traditionnel",
        category: "Repository",
        icon: "ph-hard-drives",
        colorClass: "card-orange",
        rating: "Repository",
        students: "6,726 students",
        type: "TD",
        dateAdded: "2025-10-05",
        pdfUrl: "https://github.com/Daghsny/LeTraditionnel",
        thumbnail: "https://daghsny.github.io/sti/assets/images/cafe.jpg"
    },
     
    // ********* EXAM BAC **********
    // {
    //     id: 30,
    //     title: "Bac 2023 Session Principale",
    //     category: "Examen Bac",
    //     icon: "ph-cube",
    //     colorClass: "card-red",
    //     rating: "Examen Bac",
    //     students: "8,735 students",
    //     type: "Examen Bac",
    //     dateAdded: "2026-02-01",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/Bac/Bac_STi_2023_SP.pdf",
    //     thumbnail: "https://scoala9.ro/img/0de12d43-0385-4b60-9631-df0195b07c33/shutterstock-1446860474-djh2.jpg?fm=webp&q=95&fit=crop&crop=1160%2C700%2C0%2C0&w=1160&s=26fff5470fab6289a5a6b9f0ec7973c0"
    // },
    //  {
    //     id: 31,
    //     title: "Bac 2023 Session Controle",
    //     category: "Examen Bac",
    //     icon: "ph-cube",
    //     colorClass: "card-red",
    //     rating: "Examen Bac",
    //     students: "8,735 students",
    //     type: "Examen Bac",
    //     dateAdded: "2026-02-01",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/Bac/Bac_STi_2023_SC.pdf",
    //     thumbnail: "https://scoala9.ro/img/0de12d43-0385-4b60-9631-df0195b07c33/shutterstock-1446860474-djh2.jpg?fm=webp&q=95&fit=crop&crop=1160%2C700%2C0%2C0&w=1160&s=26fff5470fab6289a5a6b9f0ec7973c0"
    // },
    //  {
    //     id: 32,
    //     title: "Bac 2024 Session Principale",
    //     category: "Examen Bac",
    //     icon: "ph-cube",
    //     colorClass: "card-red",
    //     rating: "Examen Bac",
    //     students: "8,735 students",
    //     type: "Examen Bac",
    //     dateAdded: "2026-02-01",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/Bac/Bac_STi_2024_SP.pdf",
    //     thumbnail: "https://scoala9.ro/img/0de12d43-0385-4b60-9631-df0195b07c33/shutterstock-1446860474-djh2.jpg?fm=webp&q=95&fit=crop&crop=1160%2C700%2C0%2C0&w=1160&s=26fff5470fab6289a5a6b9f0ec7973c0"
    // },
    //  {
    //     id: 33,
    //     title: "Bac 2024 Session Controle",
    //     category: "Examen Bac",
    //     icon: "ph-cube",
    //     colorClass: "card-red",
    //     rating: "Examen Bac",
    //     students: "8,735 students",
    //     type: "Examen Bac",
    //     dateAdded: "2026-02-01",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/Bac/Bac_STi_2024_SC.pdf",
    //     thumbnail: "https://scoala9.ro/img/0de12d43-0385-4b60-9631-df0195b07c33/shutterstock-1446860474-djh2.jpg?fm=webp&q=95&fit=crop&crop=1160%2C700%2C0%2C0&w=1160&s=26fff5470fab6289a5a6b9f0ec7973c0"
    // },
    //  {
    //     id: 34,
    //     title: "Bac 2025 Session Principale",
    //     category: "Examen Bac",
    //     icon: "ph-cube",
    //     colorClass: "card-red",
    //     rating: "Examen Bac",
    //     students: "8,735 students",
    //     type: "Examen Bac",
    //     dateAdded: "2026-02-01",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/Bac/Bac_STi_2025_SP.pdf",
    //     thumbnail: "https://scoala9.ro/img/0de12d43-0385-4b60-9631-df0195b07c33/shutterstock-1446860474-djh2.jpg?fm=webp&q=95&fit=crop&crop=1160%2C700%2C0%2C0&w=1160&s=26fff5470fab6289a5a6b9f0ec7973c0"
    // },
    //  {
    //     id: 35,
    //     title: "Bac 2025 Session Controle",
    //     category: "Examen Bac",
    //     icon: "ph-cube",
    //     colorClass: "card-red",
    //     rating: "Examen Bac",
    //     students: "8,735 students",
    //     type: "Examen Bac",
    //     dateAdded: "2026-02-01",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/Bac/Bac_STi_2025_SC.pdf",
    //     thumbnail: "https://scoala9.ro/img/0de12d43-0385-4b60-9631-df0195b07c33/shutterstock-1446860474-djh2.jpg?fm=webp&q=95&fit=crop&crop=1160%2C700%2C0%2C0&w=1160&s=26fff5470fab6289a5a6b9f0ec7973c0"
    // },
    // {
    //     id: 36,
    //     title: "Exams Bac Autrement",
    //     category: "Examen Bac",
    //     icon: "ph-cube",
    //     colorClass: "card-green",
    //     rating: "Examen Bac",
    //     students: "6,726 students",
    //     type: "Examen Bac",
    //     dateAdded: "2026-05-07",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/ExamBacAutrement.pdf",
    //     thumbnail: "https://k8school.com/wp-content/uploads/2023/11/Why-Are-Exams-Important-How-Do-They-Improve-Learning.jpg"
    // },

     // ******** BAC TP SOLUTIONS ********  
    //   {
    //     id: 37,
    //     title: "Bac Pratique 2025",
    //     category: "Solution Bac Pratique",
    //     icon: "ph-cube",
    //     colorClass: "card-green",
    //     rating: "Solution Bac Pratique",
    //     students: "6,726 students",
    //     type: "Solution Bac Pratique",
    //     dateAdded: "2026-05-07",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/Bac/Correction/Solution Bac Pratique 2025.pdf",
    //     thumbnail: "https://k8school.com/wp-content/uploads/2023/11/Why-Are-Exams-Important-How-Do-They-Improve-Learning.jpg"
    // },
    //  {
    //     id: 38,
    //     title: "Bac Pratique REssources",
    //     category: "Solution Bac Pratique",
    //     icon: "ph-cube",
    //     colorClass: "card-green",
    //     rating: "Solution Bac Pratique",
    //     students: "6,726 students",
    //     type: "Solution Bac Pratique",
    //     dateAdded: "2026-05-07",
    //     pdfUrl: "https://drive.google.com/drive/folders/1WTlLHROafyxa-uiaWgDCDu1Ow9KgsfX0",
    //     thumbnail: "https://k8school.com/wp-content/uploads/2023/11/Why-Are-Exams-Important-How-Do-They-Improve-Learning.jpg"
    // },
    // {
    //     id: 39,
    //     title: "Bac Pratique 2026",
    //     category: "Solution Bac Pratique",
    //     icon: "ph-cube",
    //     colorClass: "card-green",
    //     rating: "Solution Bac Pratique",
    //     students: "6,726 students",
    //     type: "Solution Bac Pratique",
    //     dateAdded: "2026-05-07",
    //     pdfUrl: "https://daghsny.github.io/sti/assets/Bac/Correction/Proposition Correction Sti Pratique S01 2026 .pdf",
    //     thumbnail: "https://k8school.com/wp-content/uploads/2023/11/Why-Are-Exams-Important-How-Do-They-Improve-Learning.jpg"
    // },
];

const coursesGrid = document.getElementById('coursesGrid');
const filterChips = document.querySelectorAll('.category-chip');
const recentFilesList = document.getElementById('recentFilesList');

// Modal Elements
const modal = document.getElementById('courseModal');
const closeModal = document.getElementById('closeModal');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalType = document.getElementById('modalType');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const startLearningBtn = document.querySelector('.btn-primary');

// Close Modal Logic
if (closeModal) {
    closeModal.onclick = () => modal.classList.remove('open');
}
window.onclick = (e) => {
    if (e.target === modal) modal.classList.remove('open');
};

// ------ RENDER FUNCTIONS ------

function renderCourses(courses) {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) return;

    coursesGrid.innerHTML = '';

    if (courses.length === 0) {
        coursesGrid.innerHTML = `
            <div class="course-card" style="text-align: center; padding: 3rem; grid-column: 1 / -1;">
                <p class="ho-mono" style="color: var(--accent-purple-light); font-size: 1.1rem; margin-bottom: 0.5rem;">// No items found</p>
                <p style="color: var(--text-secondary);">No courses found for this category. Try selecting "All".</p>
            </div>
        `;
        return;
    }

    courses.forEach(course => {
        const card = document.createElement('article');
        card.className = `course-card ${course.colorClass}`;

        card.innerHTML = `
            <!-- Top Metadata Row -->
            

            <!-- Tags Row -->
            <div class="ws-tags-row">
                <span class="ho-badge ho-badge-free">
                    <i class="ph-fill ${course.icon}"></i> ${course.category}
                </span>
                
                <span class="ho-badge ho-badge-rating">
                    <i class="ph-fill ph-star"></i> 
                </span>
            </div>

            <!-- Thumbnail Image -->
            ${course.thumbnail ? `
                <div class="course-thumbnail-wrapper" style="border-radius: var(--br-md); overflow: hidden; height: 140px; border: 1px solid var(--border-subtle);">
                    <img src="${course.thumbnail}" alt="${course.title}" style="width: 100%; height: 100%; object-fit: cover;" class="course-thumb" loading="lazy">
                </div>
            ` : ''}

            <!-- Title -->
            <h3 class="ws-title">${course.title}</h3>

            <!-- Action Bar -->
            <div class="ws-actions-row">
                <div class="ws-date-group">
                    <div class="ws-date-pill">
                        <i class="ph-bold ph-calendar-blank"></i>
                        <span>${course.dateAdded}</span>
                    </div>
                </div>
                <div style="display: flex; gap: 0.6rem; align-items: center;">
                  
                    <button class="ho-btn-primary" onclick="event.stopPropagation(); window.location.href='content.html?id=${course.id}';">
                        <span>Détails </span>
                        <i class="ph-bold ph-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;

        // Direct Click -> Open Content Page
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
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <p class="ho-mono" style="color: var(--accent-purple-light);">// Error</p>
                <h3 style="margin: 0.5rem 0 1rem; color: #fff;">Content not found</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">The requested content ID does not exist.</p>
                <a href='index.html' class='ho-btn-primary' style='text-decoration:none;'>Return Home</a>
            </div>
        `;
        return;
    }

    if (headerTitle) headerTitle.textContent = course.title;

    container.innerHTML = `
        <div class="detail-header" style="text-align: center; margin-bottom: 2rem;">
                     
            <div class="ws-tags-row" style="justify-content: center; margin-bottom: 1rem;">
                <div class="mini-icon" style="width: 15px; height: 15px; ">
                <i class="ph-fill ${course.icon}"></i></div>
                <span class="ho-badge ho-badge-free">${course.category}</span>   
                
         
            </div>
            <h2 class="ho-display" style="font-size: 2rem; margin-top: 0.5rem; color: #fff;">${course.title}</h2>
            <p style="color: var(--text-secondary); margin-top: 0.5rem; font-family: var(--font-mono); font-size: 0.85rem;">
                
               Ajoutée le : <br><strong style="color: #fff;">${course.dateAdded}</strong>
            </p>
        </div>
        
        
        
        <div class="detail-actions" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <button class="ho-btn-primary" onclick="window.open('${course.pdfUrl}', '_blank')" style="min-width: 180px;">
                <i class="ph-bold ph-file-text"></i>
                <span>Lire ${course.type === 'Quiz' ? 'Quiz' : '  PDF'}</span>
            </button>
            
        </div>
    `;
}

function renderRecentFiles() {
    const recentFilesList = document.getElementById('recentFilesList');
    if (!recentFilesList) return;

    // Sort by date descending
    const sorted = [...coursesData].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    const recent = sorted.slice(0, 5);

    recentFilesList.innerHTML = '';
    recent.forEach(course => {
        const item = document.createElement('div');
        item.className = 'course-mini-card';

        item.onclick = () => {
            window.location.href = `content.html?id=${course.id}`;
        };

        item.innerHTML = `
            <div class="mini-icon">
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
if (filterChips && filterChips.length > 0) {
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
}

// ------ CALENDAR DATA (Original Upcoming Key Dates) ------
const upcomingEvents = [
    { title: "Devoir de synthese 01 ", type: "DS", date: "15 Decembre 2026", color: "#FFD54F", icon: "ph-warning" },
    { title: "Devoir de Controle 01", type: "Pratique", date: "Octobre 20, 2026", color: "#E0E0E0", icon: "ph-projector-screen" },
    { title: "Algorithmics Advanced Session", type: "Cours", date: "Jan 22, 2024", color: "var(--accent-pink)", icon: "ph-chalkboard-teacher" },
    { title: "Java OOP Workshop", type: "TP", date: "Jan 25, 2024", color: "var(--accent-purple)", icon: "ph-code" },
    { title: "Graduation Ceremony", type: "Event", date: "Jun 15, 2024", color: "var(--accent-green)", icon: "ph-graduation-cap" }
];

function renderCalendar() {
    const calendarContainer = document.getElementById('calendarGrid');
    if (!calendarContainer) return;
    if (calendarContainer.children.length > 0) return;

    calendarContainer.innerHTML = '';
    calendarContainer.className = '';

    const wrapper = document.createElement('div');
    wrapper.style.maxWidth = '800px';
    wrapper.style.margin = '0 auto';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '1rem';

    upcomingEvents.forEach(event => {
        const item = document.createElement('div');
        item.className = 'course-card';
        item.style.cursor = 'default';

        item.innerHTML = `
            <div class="ws-meta-row">
                <div class="ws-date-group">
                    <div class="ws-date-pill">
                        <i class="ph-bold ph-calendar-blank"></i>
                        <span>${event.date}</span>
                    </div>
                </div>
                <span class="ho-badge ho-badge-free">${event.type}</span>
            </div>

            <div style="display: flex; align-items: center; gap: 1rem; margin: 0.5rem 0;">
                <div class="mini-icon" style="width: 48px; height: 48px; font-size: 1.4rem;">
                    <i class="ph-fill ${event.icon}"></i>
                </div>
                <div>
                    <h3 class="ws-title" style="font-size: 1.25rem;">${event.title}</h3>
                    <span class="ho-mono" style="font-size: 0.78rem; color: var(--text-muted);">${event.type} session</span>
                </div>
            </div>

            <div class="ws-actions-row">
                <span class="ws-students-count">
                    <i class="ph-bold ph-calendar-check" style="color: var(--accent-purple-light);"></i> 4 eme Si 01
                </span>
                <button class="ho-btn-ghost" onclick="alert('Details for: ' + '${event.title}');">
                    <span>Details</span>
                </button>
            </div>
        `;
        wrapper.appendChild(item);
    });

    calendarContainer.appendChild(wrapper);
}

// ------ INIT ------
document.addEventListener('DOMContentLoaded', () => {
    renderCourses(coursesData);
    renderRecentFiles();
});
