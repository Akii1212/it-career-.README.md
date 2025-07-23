// IT Career Journey App - Enhanced Interactive JavaScript (Fixed)

// Application Data
const appData = {
    careers: [
        {
            id: 1,
            title: "Full Stack Developer",
            salary_range: "₹8-20 LPA",
            difficulty: "medium",
            learn_time: "6-8 months",
            skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
            description: "Build complete web applications from frontend to backend",
            job_growth: "high",
            companies: ["Zerodha", "Razorpay", "Swiggy", "Flipkart"],
            daily_tasks: ["Code frontend interfaces", "Build APIs", "Database design", "Deploy applications"],
            trending: true,
            icon: "👨‍💻"
        },
        {
            id: 2,
            title: "Backend Developer",
            salary_range: "₹8-20 LPA",
            difficulty: "medium",
            learn_time: "4-6 months",
            skills: ["Python", "Node.js", "Java", "SQL", "APIs"],
            description: "Develop server-side logic and database architecture",
            job_growth: "very high",
            companies: ["IBM", "TCS", "Infosys", "Tech Mahindra"],
            daily_tasks: ["Design APIs", "Optimize databases", "Handle server logic", "Ensure security"],
            trending: false,
            icon: "⚙️"
        },
        {
            id: 3,
            title: "DevOps Engineer",
            salary_range: "₹8-30 LPA",
            difficulty: "hard",
            learn_time: "8-12 months",
            skills: ["Linux", "AWS", "Docker", "Kubernetes", "CI/CD"],
            description: "Manage deployment pipelines and cloud infrastructure",
            job_growth: "extremely high",
            companies: ["Amazon", "Microsoft", "Google", "Accenture"],
            daily_tasks: ["Automate deployments", "Monitor systems", "Manage cloud resources", "Troubleshoot issues"],
            trending: true,
            icon: "🔧"
        },
        {
            id: 4,
            title: "Data Analyst",
            salary_range: "₹8-20 LPA",
            difficulty: "easy",
            learn_time: "3-5 months",
            skills: ["Excel", "SQL", "Python", "Power BI", "Tableau"],
            description: "Analyze data and create insights for business decisions",
            job_growth: "high",
            companies: ["Flipkart", "Ola", "Paytm", "HDFC Bank"],
            daily_tasks: ["Clean data", "Create reports", "Build dashboards", "Present insights"],
            trending: true,
            icon: "📊"
        },
        {
            id: 5,
            title: "UI/UX Designer",
            salary_range: "₹8-20 LPA",
            difficulty: "easy",
            learn_time: "4-6 months",
            skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
            description: "Design user-friendly interfaces and experiences",
            job_growth: "high",
            companies: ["Zomato", "BookMyShow", "MakeMyTrip", "Myntra"],
            daily_tasks: ["Create wireframes", "Design mockups", "User research", "Test prototypes"],
            trending: false,
            icon: "🎨"
        },
        {
            id: 6,
            title: "Cybersecurity Analyst",
            salary_range: "₹8-20 LPA",
            difficulty: "medium",
            learn_time: "6-9 months",
            skills: ["Ethical Hacking", "Network Security", "Security Tools"],
            description: "Protect systems and networks from cyber threats",
            job_growth: "very high",
            companies: ["Wipro", "HCL", "Quick Heal", "K7 Computing"],
            daily_tasks: ["Monitor security", "Test vulnerabilities", "Incident response", "Security audits"],
            trending: true,
            icon: "🔒"
        },
        {
            id: 7,
            title: "AI/ML Engineer",
            salary_range: "₹8-35 LPA",
            difficulty: "hard",
            learn_time: "10-15 months",
            skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Machine Learning"],
            description: "Build intelligent systems and machine learning models",
            job_growth: "extremely high",
            companies: ["Google", "Amazon", "Microsoft", "Nvidia"],
            daily_tasks: ["Train ML models", "Process data", "Deploy AI systems", "Optimize algorithms"],
            trending: true,
            icon: "🤖"
        },
        {
            id: 8,
            title: "Cloud Engineer",
            salary_range: "₹8-25 LPA",
            difficulty: "medium",
            learn_time: "6-8 months",
            skills: ["AWS", "Azure", "GCP", "Terraform", "Cloud Architecture"],
            description: "Design and maintain cloud infrastructure and services",
            job_growth: "extremely high",
            companies: ["AWS", "Microsoft", "IBM", "Deloitte"],
            daily_tasks: ["Architect cloud solutions", "Monitor performance", "Cost optimization", "Security management"],
            trending: true,
            icon: "☁️"
        }
    ],
    quiz_questions: [
        {
            id: 1,
            question: "What type of work excites you most?",
            options: [
                { text: "Creating visual designs and user interfaces", weight: { "ui_ux": 3, "fullstack": 1 } },
                { text: "Building the behind-the-scenes logic", weight: { "backend": 3, "devops": 1 } },
                { text: "Working with data and finding insights", weight: { "data_analyst": 3, "ai_ml": 1 } },
                { text: "Protecting systems from cyber threats", weight: { "cybersecurity": 3 } }
            ]
        },
        {
            id: 2,
            question: "How do you prefer to learn?",
            options: [
                { text: "Visual tutorials and design inspiration", weight: { "ui_ux": 2, "fullstack": 1 } },
                { text: "Hands-on coding and building projects", weight: { "fullstack": 2, "backend": 2 } },
                { text: "Reading documentation and technical guides", weight: { "devops": 2, "cybersecurity": 1 } },
                { text: "Experimenting with algorithms and data", weight: { "ai_ml": 3, "data_analyst": 1 } }
            ]
        },
        {
            id: 3,
            question: "What's your ideal work environment?",
            options: [
                { text: "Creative studio with design tools", weight: { "ui_ux": 3 } },
                { text: "Tech office with multiple monitors", weight: { "fullstack": 2, "backend": 2 } },
                { text: "Security operations center", weight: { "cybersecurity": 3 } },
                { text: "Data lab with powerful computers", weight: { "ai_ml": 2, "data_analyst": 2 } }
            ]
        },
        {
            id: 4,
            question: "Which tools sound most interesting?",
            options: [
                { text: "Figma, Adobe Creative Suite", weight: { "ui_ux": 3 } },
                { text: "VS Code, GitHub, Terminal", weight: { "fullstack": 2, "backend": 2, "devops": 1 } },
                { text: "Excel, SQL, Python notebooks", weight: { "data_analyst": 3, "ai_ml": 1 } },
                { text: "Network scanners, penetration testing tools", weight: { "cybersecurity": 3 } }
            ]
        },
        {
            id: 5,
            question: "How comfortable are you with math and algorithms?",
            options: [
                { text: "Basic math is fine for me", weight: { "ui_ux": 2, "fullstack": 1 } },
                { text: "Some math and logic appeals to me", weight: { "backend": 2, "fullstack": 2 } },
                { text: "Statistics and data analysis excite me", weight: { "data_analyst": 3, "ai_ml": 1 } },
                { text: "Advanced algorithms fascinate me", weight: { "ai_ml": 3 } }
            ]
        }
    ],
    resources: [
        {
            id: 1,
            title: "freeCodeCamp Web Development",
            description: "Complete web development curriculum with certifications",
            url: "https://freecodecamp.org",
            category: "fullstack",
            difficulty: "beginner",
            rating: 5,
            time_estimate: "300 hours",
            features: ["Free certification", "Project-based learning", "Community support"]
        },
        {
            id: 2,
            title: "Kaggle Learn",
            description: "Free micro-courses in data science and machine learning",
            url: "https://kaggle.com/learn",
            category: "data_analyst",
            difficulty: "beginner",
            rating: 5,
            time_estimate: "3-4 hours per course",
            features: ["Hands-on exercises", "Real datasets", "Certificates"]
        },
        {
            id: 3,
            title: "The Odin Project",
            description: "Full-stack web development curriculum",
            url: "https://theodinproject.com",
            category: "fullstack",
            difficulty: "intermediate",
            rating: 5,
            time_estimate: "1000+ hours",
            features: ["Project-based", "Community", "Job preparation"]
        },
        {
            id: 4,
            title: "AWS Cloud Practitioner",
            description: "Free AWS cloud computing fundamentals",
            url: "https://aws.amazon.com/training",
            category: "cloud",
            difficulty: "beginner",
            rating: 4,
            time_estimate: "10-15 hours",
            features: ["Industry certification", "Hands-on labs", "Free tier access"]
        },
        {
            id: 5,
            title: "Google UX Design Certificate",
            description: "Professional UX design training (audit for free)",
            url: "https://coursera.org/professional-certificates/google-ux-design",
            category: "ui_ux",
            difficulty: "beginner",
            rating: 5,
            time_estimate: "3-6 months",
            features: ["Portfolio projects", "Industry recognition", "Job-ready skills"]
        }
    ],
    job_market: {
        cities: [
            { name: "Delhi NCR", avg_salary: "₹12 LPA", job_openings: 15000, growth: "+22%" },
            { name: "Gurgaon", avg_salary: "₹14 LPA", job_openings: 8500, growth: "+18%" },
            { name: "Mumbai", avg_salary: "₹13 LPA", job_openings: 12000, growth: "+20%" }
        ],
        trending_skills: [
            { skill: "Python", demand: 95, growth: "+15%" },
            { skill: "React", demand: 85, growth: "+12%" },
            { skill: "AWS", demand: 90, growth: "+25%" },
            { skill: "Docker", demand: 75, growth: "+30%" },
            { skill: "Machine Learning", demand: 80, growth: "+40%" }
        ],
        skill_first_companies: [
            "Zerodha", "Razorpay", "Swiggy", "Flipkart", "Paytm", "Ola", "Zomato", "BYJU'S"
        ]
    },
    achievements: [
        { id: "explorer", title: "Career Explorer", description: "Viewed 5+ career paths", icon: "🔍", points: 50 },
        { id: "quizmaster", title: "Self-Aware", description: "Completed career assessment", icon: "🎯", points: 100 },
        { id: "planner", title: "Goal Setter", description: "Created learning roadmap", icon: "📋", points: 150 },
        { id: "learner", title: "Knowledge Seeker", description: "Explored 10+ resources", icon: "📚", points: 200 },
        { id: "focused", title: "Laser Focus", description: "Chose specialization path", icon: "⚡", points: 250 }
    ]
};

// Application State
let gameState = {
    currentSection: 'hero',
    points: 0,
    level: 1,
    streak: 0,
    completedSteps: new Set(),
    viewedCareers: new Set(),
    quiz: {
        currentQuestion: 0,
        answers: [],
        results: null,
        careerScores: {}
    },
    achievements: new Set(),
    resources: {
        started: new Set(),
        completed: new Set()
    },
    skills: {
        technical: 0,
        problemSolving: 0,
        communication: 0
    },
    selectedCareer: null,
    roadmap: null,
    comparison: new Set()
};

// Current quiz state
let currentQuiz = {
    currentQuestion: 0,
    answers: [],
    careerScores: {}
};

// DOM Elements
let navTabs, sections;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing IT Career Journey App...');
    initializeApp();
});

function initializeApp() {
    // Get DOM elements
    navTabs = document.querySelectorAll('.nav-tab');
    sections = document.querySelectorAll('.section');
    
    // Initialize navigation
    setupNavigation();
    
    // Initialize hero animations
    initializeHeroAnimations();
    
    // Render sections
    renderCareersSection();
    renderResourcesSection();
    renderInsightsSection();
    renderDashboard();
    
    // Setup career selector
    populateCareerSelector();
    
    // Update UI
    updateUI();
    updateProgressRing();
    
    console.log('✅ App initialized successfully!');
}

// Navigation System (Fixed)
function setupNavigation() {
    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = tab.dataset.section;
            console.log(`Navigating to section: ${targetSection}`);
            showSection(targetSection);
            updateNavigation(tab);
            
            // Award points for exploration
            if (!gameState.viewedCareers.has(targetSection)) {
                awardPoints(10, `Explored ${targetSection} section`);
                gameState.viewedCareers.add(targetSection);
            }
        });
    });
}

function showSection(sectionId) {
    console.log(`Showing section: ${sectionId}`);
    
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        gameState.currentSection = sectionId;
        updateProgressRing();
        
        // Trigger section-specific initialization
        onSectionChange(sectionId);
    }
}

function updateNavigation(activeTab) {
    navTabs.forEach(tab => tab.classList.remove('active'));
    activeTab.classList.add('active');
}

function onSectionChange(sectionId) {
    switch(sectionId) {
        case 'insights':
            setTimeout(() => initializeCharts(), 100);
            break;
        case 'careers':
            setTimeout(() => animateCareers(), 100);
            break;
        case 'dashboard':
            setTimeout(() => updateDashboard(), 100);
            break;
    }
}

// Hero Section Functions
function initializeHeroAnimations() {
    animateStatCounters();
    setupOrbitInteractions();
}

function animateStatCounters() {
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach((item, index) => {
        const target = parseInt(item.dataset.target);
        const numberEl = item.querySelector('.stat-number');
        let current = 0;
        
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (index === 0) {
                numberEl.textContent = Math.floor(current) + '%';
            } else if (index === 1) {
                numberEl.textContent = '₹' + Math.floor(current) + '+ LPA';
            } else {
                numberEl.textContent = Math.floor(current) + '+';
            }
        }, 50);
    });
}

function setupOrbitInteractions() {
    const orbitItems = document.querySelectorAll('.orbit-item');
    
    orbitItems.forEach(item => {
        item.addEventListener('click', () => {
            const career = item.dataset.career;
            showSection('careers');
            updateNavigation(document.querySelector('[data-section="careers"]'));
            
            setTimeout(() => {
                filterCareersByType(career);
            }, 500);
        });
    });
}

function filterCareersByType(careerType) {
    const searchInput = document.getElementById('careerSearch');
    if (searchInput) {
        searchInput.value = careerType;
        filterCareers({ search: careerType });
    }
}

// Career Journey Functions
function startJourney() {
    showSection('quiz');
    updateNavigation(document.querySelector('[data-section="quiz"]'));
    awardPoints(25, 'Started the journey!');
    
    triggerConfetti();
    showNotification('Welcome to your IT career journey! 🚀', 'success');
}

// Quiz System (Fixed)
function startQuiz() {
    console.log('Starting quiz...');
    document.getElementById('quizWelcome').classList.add('hidden');
    document.getElementById('quizContent').classList.remove('hidden');
    
    // Reset quiz state
    currentQuiz = {
        currentQuestion: 0,
        answers: [],
        careerScores: {}
    };
    
    // Initialize career scores
    const careerTypes = ['fullstack', 'backend', 'devops', 'data_analyst', 'ui_ux', 'cybersecurity', 'ai_ml', 'cloud'];
    careerTypes.forEach(career => {
        currentQuiz.careerScores[career] = 0;
    });
    
    showQuizQuestion(0);
    awardPoints(15, 'Started career assessment');
}

function showQuizQuestion(questionIndex) {
    const question = appData.quiz_questions[questionIndex];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('quizOptions');
    const progressFill = document.getElementById('quizProgressFill');
    const progressText = document.getElementById('quizProgressText');
    
    currentQuiz.currentQuestion = questionIndex;
    
    // Update progress
    const progress = ((questionIndex + 1) / appData.quiz_questions.length) * 100;
    if (progressFill) progressFill.style.width = progress + '%';
    if (progressText) progressText.textContent = `Question ${questionIndex + 1} of ${appData.quiz_questions.length}`;
    
    // Show question
    if (questionText) questionText.textContent = question.question;
    
    // Clear and populate options
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'quiz-option';
            optionElement.textContent = option.text;
            optionElement.addEventListener('click', () => selectQuizOption(questionIndex, option));
            optionsContainer.appendChild(optionElement);
        });
    }
}

function selectQuizOption(questionIndex, selectedOption) {
    // Mark option as selected
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    // Record answer
    currentQuiz.answers[questionIndex] = selectedOption;
    
    // Update career scores based on weights
    Object.entries(selectedOption.weight).forEach(([career, weight]) => {
        if (currentQuiz.careerScores[career] !== undefined) {
            currentQuiz.careerScores[career] += weight;
        }
    });
    
    // Move to next question after delay
    setTimeout(() => {
        if (questionIndex + 1 < appData.quiz_questions.length) {
            showQuizQuestion(questionIndex + 1);
        } else {
            showQuizResults();
        }
    }, 600);
}

function showQuizResults() {
    document.getElementById('quizContent').classList.add('hidden');
    document.getElementById('quizResults').classList.remove('hidden');
    
    const resultsGrid = document.getElementById('resultsGrid');
    resultsGrid.innerHTML = '';
    
    // Map career types to actual careers
    const careerMapping = {
        'fullstack': 'Full Stack Developer',
        'backend': 'Backend Developer',
        'devops': 'DevOps Engineer',
        'data_analyst': 'Data Analyst',
        'ui_ux': 'UI/UX Designer',
        'cybersecurity': 'Cybersecurity Analyst',
        'ai_ml': 'AI/ML Engineer',
        'cloud': 'Cloud Engineer'
    };
    
    // Sort and get top 3 matches
    const sortedCareers = Object.entries(currentQuiz.careerScores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3);
    
    const maxScore = Math.max(...Object.values(currentQuiz.careerScores)) || 1;
    
    sortedCareers.forEach(([careerType, score], index) => {
        const percentage = Math.round((score / maxScore) * 100);
        const careerTitle = careerMapping[careerType];
        const career = appData.careers.find(c => c.title === careerTitle);
        
        if (career && percentage > 0) {
            const resultCard = createResultCard(career, percentage, index);
            resultsGrid.appendChild(resultCard);
        }
    });
    
    // Store results
    gameState.quiz.results = currentQuiz.careerScores;
    
    // Award achievement
    awardPoints(50, 'Completed career assessment!');
    unlockAchievement('quizmaster');
    
    triggerConfetti();
    showNotification('Quiz completed! Check your matches! 🎉', 'achievement');
}

function createResultCard(career, percentage, index) {
    const card = document.createElement('div');
    card.className = 'result-card';
    
    card.innerHTML = `
        <div class="match-percentage">${percentage}% Match</div>
        <div class="result-header" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <span class="career-icon" style="font-size: 2rem;">${career.icon}</span>
            <h4 style="margin: 0;">${career.title}</h4>
        </div>
        <p style="margin-bottom: 16px;">${career.description}</p>
        <div class="career-meta" style="display: flex; gap: 8px; margin-bottom: 16px;">
            <span class="salary" style="color: var(--color-success); font-weight: bold;">${career.salary_range}</span>
            <span class="difficulty difficulty-${career.difficulty}" style="padding: 4px 8px; border-radius: 12px; font-size: 12px; background: var(--color-secondary);">${career.difficulty}</span>
        </div>
        <div class="result-actions">
            <button class="btn-cta primary" onclick="exploreCareer(${career.id})" style="padding: 8px 16px; background: var(--color-primary); color: var(--color-btn-primary-text); border: none; border-radius: 8px; cursor: pointer;">
                Explore Career
            </button>
        </div>
    `;
    
    return card;
}

function exploreCareer(careerId) {
    showSection('careers');
    updateNavigation(document.querySelector('[data-section="careers"]'));
    
    setTimeout(() => {
        const career = appData.careers.find(c => c.id === careerId);
        if (career) {
            showCareerDetails(careerId);
        }
    }, 500);
}

function exploreTopMatch() {
    if (gameState.quiz.results) {
        const topCareer = Object.entries(gameState.quiz.results)
            .sort(([,a], [,b]) => b - a)[0][0];
        
        showSection('careers');
        updateNavigation(document.querySelector('[data-section="careers"]'));
    }
}

function retakeQuiz() {
    document.getElementById('quizResults').classList.add('hidden');
    document.getElementById('quizWelcome').classList.remove('hidden');
    currentQuiz = { currentQuestion: 0, answers: [], careerScores: {} };
}

function skipQuestion() {
    if (currentQuiz.currentQuestion + 1 < appData.quiz_questions.length) {
        showQuizQuestion(currentQuiz.currentQuestion + 1);
    } else {
        showQuizResults();
    }
}

// Career Explorer System (Fixed)
function renderCareersSection() {
    const careersGrid = document.getElementById('careersGrid');
    if (!careersGrid) return;
    
    careersGrid.innerHTML = '';
    
    appData.careers.forEach((career, index) => {
        const careerCard = createCareerCard(career, index);
        careersGrid.appendChild(careerCard);
    });
    
    setupCareerSearch();
    setupCareerFilters();
}

function createCareerCard(career, index) {
    const card = document.createElement('div');
    card.className = 'career-card';
    card.dataset.careerType = career.title.toLowerCase().replace(/[^a-z]/g, '');
    card.dataset.difficulty = career.difficulty;
    card.dataset.trending = career.trending;
    
    const salaryNum = parseInt(career.salary_range.match(/\d+/)[0]);
    card.dataset.salary = salaryNum >= 20 ? 'high' : 'medium';
    
    card.innerHTML = `
        <div class="career-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <div class="career-icon" style="font-size: 2.5rem;">${career.icon}</div>
            <div class="career-actions">
                <button class="favorite-btn" onclick="toggleFavorite(${career.id})" data-career-id="${career.id}" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">
                    🤍
                </button>
            </div>
        </div>
        
        <h3 class="career-title" style="margin-bottom: 8px;">${career.title}</h3>
        <p class="career-description" style="color: var(--color-text-secondary); margin-bottom: 16px;">${career.description}</p>
        
        <div class="career-meta" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
            <span class="salary-badge" style="color: var(--color-success); font-weight: bold;">${career.salary_range}</span>
            <span class="difficulty-badge difficulty-${career.difficulty}" style="padding: 4px 8px; border-radius: 12px; font-size: 12px; background: var(--color-secondary);">${career.difficulty}</span>
            <span class="time-badge" style="color: var(--color-text-secondary); font-size: 14px;">⏱️ ${career.learn_time}</span>
            ${career.trending ? '<span class="trending-badge" style="color: var(--color-warning); font-size: 12px;">🔥 Trending</span>' : ''}
        </div>
        
        <div class="skills-preview" style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;">
            ${career.skills.slice(0, 3).map(skill => 
                `<span class="skill-tag" style="background: var(--color-secondary); padding: 4px 8px; border-radius: 12px; font-size: 12px;">${skill}</span>`
            ).join('')}
            ${career.skills.length > 3 ? `<span class="skill-more" style="color: var(--color-text-secondary); font-size: 12px;">+${career.skills.length - 3}</span>` : ''}
        </div>
        
        <div class="career-actions-bottom" style="display: flex; gap: 8px;">
            <button class="btn-cta secondary" onclick="showCareerDetails(${career.id})" style="flex: 1; padding: 8px 16px; background: var(--color-secondary); color: var(--color-text); border: none; border-radius: 8px; cursor: pointer;">
                Learn More
            </button>
            <button class="btn-cta primary" onclick="selectCareerPath(${career.id})" style="flex: 1; padding: 8px 16px; background: var(--color-primary); color: var(--color-btn-primary-text); border: none; border-radius: 8px; cursor: pointer;">
                Choose Path
            </button>
        </div>
    `;
    
    return card;
}

function setupCareerSearch() {
    const searchInput = document.getElementById('careerSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterCareers({ search: searchTerm });
        });
    }
}

function setupCareerFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const filterType = tab.dataset.filter;
            filterCareers({ type: filterType });
        });
    });
}

function filterCareers(filters = {}) {
    const careerCards = document.querySelectorAll('.career-card');
    
    careerCards.forEach(card => {
        let show = true;
        
        if (filters.search) {
            const title = card.querySelector('.career-title').textContent.toLowerCase();
            const description = card.querySelector('.career-description').textContent.toLowerCase();
            if (!title.includes(filters.search) && !description.includes(filters.search)) {
                show = false;
            }
        }
        
        if (filters.type) {
            switch (filters.type) {
                case 'easy':
                    show = card.dataset.difficulty === 'easy';
                    break;
                case 'high-salary':
                    show = card.dataset.salary === 'high';
                    break;
                case 'trending':
                    show = card.dataset.trending === 'true';
                    break;
                case 'all':
                default:
                    show = true;
                    break;
            }
        }
        
        card.style.display = show ? 'block' : 'none';
    });
}

function showCareerDetails(careerId) {
    const career = appData.careers.find(c => c.id === careerId);
    if (!career) return;
    
    const modal = document.getElementById('careerModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (modalTitle) modalTitle.textContent = career.title;
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="career-detail-header" style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                <div class="career-icon-large" style="font-size: 3rem;">${career.icon}</div>
                <div class="career-summary">
                    <h4 style="margin-bottom: 8px;">${career.title}</h4>
                    <p style="color: var(--color-text-secondary);">${career.description}</p>
                </div>
            </div>
            
            <div class="career-detail-stats" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                <div class="detail-stat">
                    <strong>💰 Salary Range:</strong><br>
                    <span>${career.salary_range}</span>
                </div>
                <div class="detail-stat">
                    <strong>⏱️ Time to Learn:</strong><br>
                    <span>${career.learn_time}</span>
                </div>
                <div class="detail-stat">
                    <strong>📊 Difficulty:</strong><br>
                    <span class="difficulty-badge difficulty-${career.difficulty}">${career.difficulty}</span>
                </div>
                <div class="detail-stat">
                    <strong>📈 Job Growth:</strong><br>
                    <span>${career.job_growth}</span>
                </div>
            </div>
            
            <div class="career-detail-section" style="margin-bottom: 24px;">
                <h5 style="margin-bottom: 12px;">🛠️ Required Skills</h5>
                <div class="skills-list" style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${career.skills.map(skill => `<span class="skill-tag" style="background: var(--color-secondary); padding: 6px 12px; border-radius: 16px; font-size: 14px;">${skill}</span>`).join('')}
                </div>
            </div>
            
            <div class="career-detail-section" style="margin-bottom: 24px;">
                <h5 style="margin-bottom: 12px;">📋 Daily Tasks</h5>
                <ul class="tasks-list" style="padding-left: 20px;">
                    ${career.daily_tasks.map(task => `<li style="margin-bottom: 8px;">${task}</li>`).join('')}
                </ul>
            </div>
            
            <div class="career-detail-section" style="margin-bottom: 24px;">
                <h5 style="margin-bottom: 12px;">🏢 Top Companies</h5>
                <div class="companies-list" style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${career.companies.map(company => `<span class="company-tag" style="background: var(--color-bg-1); padding: 6px 12px; border-radius: 16px; font-size: 14px;">${company}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-actions" style="display: flex; gap: 12px; justify-content: center;">
                <button class="btn-cta primary" onclick="selectCareerPath(${career.id}); closeModal();" style="padding: 12px 24px; background: var(--color-primary); color: var(--color-btn-primary-text); border: none; border-radius: 8px; cursor: pointer;">
                    Choose This Path
                </button>
            </div>
        `;
    }
    
    if (modal) {
        modal.style.display = 'block';
    }
    
    // Track view
    if (!gameState.viewedCareers.has(careerId)) {
        gameState.viewedCareers.add(careerId);
        awardPoints(5, `Viewed ${career.title}`);
    }
}

function closeModal() {
    const modal = document.getElementById('careerModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function selectCareerPath(careerId) {
    const career = appData.careers.find(c => c.id === careerId);
    if (!career) return;
    
    gameState.selectedCareer = career;
    
    // Update career selector
    const careerSelect = document.getElementById('careerSelect');
    if (careerSelect) {
        careerSelect.value = career.title;
    }
    
    // Generate roadmap
    generateRoadmap(career.title);
    
    // Switch to roadmap section
    showSection('roadmap');
    updateNavigation(document.querySelector('[data-section="roadmap"]'));
    
    // Award points
    awardPoints(30, `Selected ${career.title} career path`);
    unlockAchievement('focused');
    
    showNotification(`Great choice! ${career.title} roadmap created! 🎯`, 'success');
}

function toggleFavorite(careerId) {
    // Simple favorite toggle for demo
    const btn = event.target;
    if (btn.textContent === '🤍') {
        btn.textContent = '❤️';
        awardPoints(5, 'Added to favorites');
    } else {
        btn.textContent = '🤍';
    }
}

// Roadmap System
function populateCareerSelector() {
    const careerSelect = document.getElementById('careerSelect');
    if (!careerSelect) return;
    
    appData.careers.forEach(career => {
        const option = document.createElement('option');
        option.value = career.title;
        option.textContent = career.title;
        careerSelect.appendChild(option);
    });
    
    careerSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            generateRoadmap(e.target.value);
            awardPoints(20, 'Generated learning roadmap');
        }
    });
}

function generateRoadmap(careerTitle) {
    const roadmapContainer = document.getElementById('roadmapContainer');
    const roadmapActions = document.getElementById('roadmapActions');
    
    if (!roadmapContainer) return;
    
    // Define learning paths for each career
    const learningPaths = {
        "Full Stack Developer": [
            { step: 1, title: "HTML & CSS Fundamentals", duration: "2-3 weeks", resources: ["freeCodeCamp", "MDN Docs"], completed: false },
            { step: 2, title: "JavaScript Essentials", duration: "4-5 weeks", resources: ["JavaScript.info", "freeCodeCamp"], completed: false },
            { step: 3, title: "React Frontend Framework", duration: "6-8 weeks", resources: ["React Docs", "The Odin Project"], completed: false },
            { step: 4, title: "Node.js Backend Development", duration: "6-8 weeks", resources: ["Node.js Docs", "Express.js"], completed: false },
            { step: 5, title: "Database Management", duration: "3-4 weeks", resources: ["MongoDB University", "SQL Tutorial"], completed: false },
            { step: 6, title: "Full Stack Projects Portfolio", duration: "4-6 weeks", resources: ["GitHub", "Portfolio Projects"], completed: false }
        ],
        "Data Analyst": [
            { step: 1, title: "Excel Mastery", duration: "2-3 weeks", resources: ["Microsoft Learn", "ExcelJet"], completed: false },
            { step: 2, title: "SQL Database Querying", duration: "3-4 weeks", resources: ["W3Schools", "SQLBolt"], completed: false },
            { step: 3, title: "Python for Data Analysis", duration: "5-6 weeks", resources: ["Kaggle Learn", "Python.org"], completed: false },
            { step: 4, title: "Data Visualization Tools", duration: "3-4 weeks", resources: ["Tableau Public", "Power BI"], completed: false },
            { step: 5, title: "Statistical Analysis", duration: "4-5 weeks", resources: ["Khan Academy", "Coursera"], completed: false },
            { step: 6, title: "Data Analysis Portfolio", duration: "3-4 weeks", resources: ["Kaggle Datasets", "GitHub"], completed: false }
        ],
        "UI/UX Designer": [
            { step: 1, title: "Design Principles & Theory", duration: "2-3 weeks", resources: ["Design Better", "UX Mastery"], completed: false },
            { step: 2, title: "Figma Tool Mastery", duration: "2-3 weeks", resources: ["Figma Academy", "YouTube"], completed: false },
            { step: 3, title: "User Research Methods", duration: "3-4 weeks", resources: ["UXPin", "NNG"], completed: false },
            { step: 4, title: "Wireframing & Prototyping", duration: "4-5 weeks", resources: ["Figma", "Adobe XD"], completed: false },
            { step: 5, title: "Usability Testing", duration: "2-3 weeks", resources: ["UsabilityHub", "UserTesting"], completed: false },
            { step: 6, title: "Portfolio Development", duration: "4-6 weeks", resources: ["Behance", "Dribbble"], completed: false }
        ]
    };
    
    const roadmap = learningPaths[careerTitle] || [];
    
    if (roadmap.length === 0) {
        roadmapContainer.innerHTML = `
            <div class="roadmap-placeholder">
                <div class="placeholder-icon">🚧</div>
                <h3>Roadmap Coming Soon</h3>
                <p>We're working on creating a detailed learning path for ${careerTitle}. Check back soon!</p>
            </div>
        `;
        if (roadmapActions) roadmapActions.classList.add('hidden');
        return;
    }
    
    // Create roadmap visualization
    const roadmapHTML = `
        <div class="roadmap-timeline">
            <div class="roadmap-steps">
                ${roadmap.map((step, index) => createRoadmapStep(step, index, careerTitle)).join('')}
            </div>
        </div>
    `;
    
    roadmapContainer.innerHTML = roadmapHTML;
    if (roadmapActions) roadmapActions.classList.remove('hidden');
    
    gameState.roadmap = { career: careerTitle, steps: roadmap };
}

function createRoadmapStep(step, index, careerTitle) {
    const stepId = `${careerTitle.replace(/\s+/g, '-')}-step-${step.step}`;
    const isCompleted = gameState.completedSteps.has(stepId);
    
    return `
        <div class="roadmap-step ${isCompleted ? 'completed' : ''}" data-step="${step.step}" style="background: var(--color-surface); padding: 20px; margin-bottom: 16px; border-radius: 12px; border: 1px solid var(--color-border);">
            <div class="step-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <h4 class="step-title">${step.title}</h4>
                <span class="step-duration" style="color: var(--color-text-secondary); font-size: 14px;">${step.duration}</span>
            </div>
            
            <div class="step-resources" style="margin-bottom: 16px;">
                <strong>Resources:</strong>
                ${step.resources.map(resource => `<span class="resource-tag" style="background: var(--color-secondary); padding: 4px 8px; border-radius: 12px; font-size: 12px; margin-left: 6px;">${resource}</span>`).join('')}
            </div>
            
            <div class="step-actions" style="display: flex; align-items: center; justify-content: space-between;">
                <label class="step-checkbox" style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                    <input type="checkbox" ${isCompleted ? 'checked' : ''} 
                           onchange="toggleStepCompletion('${stepId}', '${step.title}')">
                    <span class="checkbox-label">Mark as completed</span>
                </label>
                <button class="btn-step-start" onclick="startLearningStep(${step.step}, '${step.title}')" style="padding: 6px 12px; background: var(--color-primary); color: var(--color-btn-primary-text); border: none; border-radius: 6px; cursor: pointer; font-size: 12px;">
                    Start Step
                </button>
            </div>
        </div>
    `;
}

function toggleStepCompletion(stepId, stepTitle) {
    const checkbox = event.target;
    const stepElement = checkbox.closest('.roadmap-step');
    
    if (checkbox.checked) {
        gameState.completedSteps.add(stepId);
        stepElement.classList.add('completed');
        
        updateSkillProgress('technical', 15);
        updateSkillProgress('problemSolving', 10);
        
        awardPoints(25, `Completed: ${stepTitle}`);
        showNotification(`Step completed: ${stepTitle} 🎉`, 'success');
        
        checkLearningMilestones();
    } else {
        gameState.completedSteps.delete(stepId);
        stepElement.classList.remove('completed');
    }
    
    updateUI();
}

function startLearningStep(stepNumber, stepTitle) {
    showNotification(`Starting: ${stepTitle}`, 'success');
    awardPoints(10, `Started learning step: ${stepTitle}`);
}

function startLearning() {
    showNotification('Starting your learning journey! 🚀', 'success');
    showSection('resources');
    updateNavigation(document.querySelector('[data-section="resources"]'));
}

function customizeRoadmap() {
    showNotification('Roadmap customization coming soon! ⚙️', 'info');
}

// Resources System
function renderResourcesSection() {
    const resourcesGrid = document.getElementById('resourcesGrid');
    if (!resourcesGrid) return;
    
    resourcesGrid.innerHTML = '';
    
    appData.resources.forEach((resource, index) => {
        const resourceCard = createResourceCard(resource, index);
        resourcesGrid.appendChild(resourceCard);
    });
    
    setupResourceFilters();
}

function createResourceCard(resource, index) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    card.dataset.category = resource.category;
    card.dataset.difficulty = resource.difficulty;
    
    const isStarted = gameState.resources.started.has(resource.id);
    const isCompleted = gameState.resources.completed.has(resource.id);
    
    card.innerHTML = `
        <div class="resource-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <div class="resource-badge ${resource.difficulty}" style="padding: 4px 8px; border-radius: 12px; font-size: 12px; background: var(--color-secondary);">${resource.difficulty}</div>
            <div class="resource-rating">
                ${'⭐'.repeat(resource.rating)}
            </div>
        </div>
        
        <h4 class="resource-title" style="margin-bottom: 8px;">${resource.title}</h4>
        <p class="resource-description" style="color: var(--color-text-secondary); margin-bottom: 16px; font-size: 14px;">${resource.description}</p>
        
        <div class="resource-meta" style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 12px; color: var(--color-text-secondary);">
            <span class="resource-time">⏱️ ${resource.time_estimate}</span>
            <span class="resource-category">${resource.category.replace('_', ' ')}</span>
        </div>
        
        <div class="resource-features" style="display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 16px;">
            ${resource.features.map(feature => `<span class="feature-tag" style="background: var(--color-bg-1); padding: 2px 6px; border-radius: 8px; font-size: 11px;">${feature}</span>`).join('')}
        </div>
        
        <div class="resource-progress" style="margin-bottom: 16px;">
            <div class="progress-status ${isCompleted ? 'completed' : isStarted ? 'in-progress' : 'not-started'}" style="padding: 8px; text-align: center; border-radius: 8px; font-size: 12px; font-weight: bold; ${isCompleted ? 'background: var(--color-bg-3); color: var(--color-success);' : isStarted ? 'background: var(--color-bg-2); color: var(--color-warning);' : 'background: var(--color-secondary);'}">
                ${isCompleted ? '✅ Completed' : isStarted ? '🔄 In Progress' : '⭐ Not Started'}
            </div>
        </div>
        
        <div class="resource-actions" style="display: flex; flex-direction: column; gap: 8px;">
            <button class="btn-resource" onclick="handleResourceAction(${resource.id}, '${isCompleted ? 'completed' : isStarted ? 'continue' : 'start'}')" style="padding: 8px 16px; background: var(--color-primary); color: var(--color-btn-primary-text); border: none; border-radius: 8px; cursor: pointer; font-size: 14px;">
                ${isCompleted ? 'View Certificate' : isStarted ? 'Continue Learning' : 'Start Learning'}
            </button>
            <button class="btn-resource-external" onclick="openResourceExternal('${resource.url}')" style="padding: 6px 12px; background: var(--color-secondary); color: var(--color-text); border: none; border-radius: 6px; cursor: pointer; font-size: 12px;">
                Open Resource 🔗
            </button>
        </div>
    `;
    
    return card;
}

function setupResourceFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    
    if (categoryFilter) categoryFilter.addEventListener('change', filterResources);
    if (difficultyFilter) difficultyFilter.addEventListener('change', filterResources);
}

function filterResources() {
    const categoryFilter = document.getElementById('categoryFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    
    const categoryValue = categoryFilter ? categoryFilter.value : '';
    const difficultyValue = difficultyFilter ? difficultyFilter.value : '';
    
    const resourceCards = document.querySelectorAll('.resource-card');
    
    resourceCards.forEach(card => {
        let show = true;
        
        if (categoryValue && card.dataset.category !== categoryValue) {
            show = false;
        }
        
        if (difficultyValue && card.dataset.difficulty !== difficultyValue) {
            show = false;
        }
        
        card.style.display = show ? 'block' : 'none';
    });
}

function handleResourceAction(resourceId, action) {
    const resource = appData.resources.find(r => r.id === resourceId);
    
    switch (action) {
        case 'start':
            gameState.resources.started.add(resourceId);
            awardPoints(15, `Started learning: ${resource.title}`);
            updateSkillProgress('technical', 5);
            showNotification(`Started: ${resource.title} 📚`, 'success');
            break;
        case 'continue':
            showNotification(`Continuing: ${resource.title} 📖`, 'success');
            break;
        case 'completed':
            showNotification(`Certificate for: ${resource.title} 🎓`, 'success');
            break;
    }
    
    if (action === 'start' || action === 'continue') {
        // Simulate completion after some time (for demo)
        setTimeout(() => {
            gameState.resources.completed.add(resourceId);
            updateSkillProgress('technical', 20);
            updateSkillProgress('communication', 10);
            awardPoints(30, `Completed: ${resource.title}`);
            showNotification(`Completed: ${resource.title} 🎉`, 'achievement');
            renderResourcesSection();
        }, 2000);
    }
    
    renderResourcesSection();
    updateUI();
}

function openResourceExternal(url) {
    window.open(url, '_blank');
}

// Market Insights System
function renderInsightsSection() {
    renderTrendingSkills();
    renderTopEmployers();
}

function initializeCharts() {
    if (typeof Chart !== 'undefined') {
        setTimeout(() => {
            initializeSalaryChart();
            initializeOpportunityChart();
        }, 100);
    }
}

function initializeSalaryChart() {
    const ctx = document.getElementById('salaryChart');
    if (!ctx) return;
    
    // Clear existing chart
    if (ctx.chart) {
        ctx.chart.destroy();
    }
    
    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: appData.job_market.cities.map(city => city.name),
            datasets: [{
                label: 'Average Salary (LPA)',
                data: appData.job_market.cities.map(city => parseInt(city.avg_salary.match(/\d+/)[0])),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₹' + value + ' LPA';
                        }
                    }
                }
            }
        }
    });
}

function initializeOpportunityChart() {
    const ctx = document.getElementById('opportunityChart');
    if (!ctx) return;
    
    // Clear existing chart
    if (ctx.chart) {
        ctx.chart.destroy();
    }
    
    ctx.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: appData.job_market.cities.map(city => city.name),
            datasets: [{
                data: appData.job_market.cities.map(city => city.job_openings),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function renderTrendingSkills() {
    const skillTrends = document.getElementById('skillTrends');
    if (!skillTrends) return;
    
    skillTrends.innerHTML = appData.job_market.trending_skills.map(skill => `
        <div class="skill-trend-item" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding: 12px; background: var(--color-surface); border-radius: 8px;">
            <div class="skill-info" style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span class="skill-name" style="font-weight: bold;">${skill.skill}</span>
                    <span class="skill-growth" style="color: var(--color-success); font-size: 12px;">${skill.growth}</span>
                </div>
                <div class="skill-demand-bar" style="height: 6px; background: var(--color-secondary); border-radius: 3px; overflow: hidden;">
                    <div class="demand-fill" style="height: 100%; background: var(--color-primary); width: ${skill.demand}%; transition: width 0.5s;"></div>
                </div>
            </div>
            <span class="demand-percentage" style="font-size: 14px; font-weight: bold; color: var(--color-primary); min-width: 40px;">${skill.demand}%</span>
        </div>
    `).join('');
}

function renderTopEmployers() {
    const employerList = document.getElementById('employerList');
    if (!employerList) return;
    
    employerList.innerHTML = appData.job_market.skill_first_companies.map(company => `
        <div class="employer-item" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding: 12px; background: var(--color-surface); border-radius: 8px;">
            <div class="employer-logo" style="width: 40px; height: 40px; background: var(--color-primary); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--color-btn-primary-text); font-weight: bold;">${company[0]}</div>
            <div style="flex: 1;">
                <div class="employer-name" style="font-weight: bold; margin-bottom: 4px;">${company}</div>
                <span class="employer-badge" style="background: var(--color-bg-3); color: var(--color-success); padding: 2px 8px; border-radius: 12px; font-size: 11px;">Skill-First Hiring</span>
            </div>
        </div>
    `).join('');
}

// Dashboard System
function renderDashboard() {
    renderAchievements();
    updateProgressBars();
    renderActivityStreak();
}

function updateDashboard() {
    renderAchievements();
    updateProgressBars();
    renderActivityStreak();
}

function renderAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    if (!achievementsGrid) return;
    
    achievementsGrid.innerHTML = appData.achievements.map(achievement => {
        const isUnlocked = gameState.achievements.has(achievement.id);
        return `
            <div class="achievement-badge ${isUnlocked ? 'unlocked' : 'locked'}" 
                 title="${achievement.description}"
                 style="text-align: center; padding: 16px; border-radius: 8px; border: 1px solid var(--color-border); ${isUnlocked ? 'background: var(--color-bg-3); color: var(--color-success);' : 'background: var(--color-secondary); opacity: 0.5;'}">
                <div class="badge-icon" style="font-size: 2rem; margin-bottom: 8px;">${achievement.icon}</div>
                <div class="badge-title" style="font-size: 12px; font-weight: bold; margin-bottom: 4px;">${achievement.title}</div>
                ${isUnlocked ? `<div class="badge-points" style="font-size: 11px; color: var(--color-primary);">+${achievement.points}</div>` : ''}
            </div>
        `;
    }).join('');
}

function updateProgressBars() {
    const skills = ['technical', 'problemSolving', 'communication'];
    
    skills.forEach(skill => {
        const progressEl = document.getElementById(skill + 'Progress');
        const percentageEl = progressEl?.parentElement.querySelector('.progress-percentage');
        
        if (progressEl && percentageEl) {
            const progress = gameState.skills[skill];
            progressEl.style.width = `${Math.min(progress, 100)}%`;
            percentageEl.textContent = `${Math.min(progress, 100)}%`;
        }
    });
}

function renderActivityStreak() {
    const streakCalendar = document.getElementById('streakCalendar');
    if (!streakCalendar) return;
    
    // Generate last 30 days
    const days = [];
    for (let i = 29; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const isActive = Math.random() > 0.3; // Random activity for demo
        days.push({
            date: date.getDate(),
            active: isActive
        });
    }
    
    streakCalendar.innerHTML = `
        <div class="streak-grid" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px;">
            ${days.map(day => `
                <div class="streak-day ${day.active ? 'active' : ''}" 
                     title="Day ${day.date}"
                     style="width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 10px; ${day.active ? 'background: var(--color-primary); color: var(--color-btn-primary-text);' : 'background: var(--color-secondary); color: var(--color-text-secondary);'}">
                    ${day.date}
                </div>
            `).join('')}
        </div>
    `;
}

// Utility Functions
function awardPoints(points, reason = '') {
    gameState.points += points;
    
    // Level up calculation
    const newLevel = Math.floor(gameState.points / 100) + 1;
    if (newLevel > gameState.level) {
        gameState.level = newLevel;
        showNotification(`Level Up! You're now level ${newLevel}! 🎉`, 'achievement');
        triggerConfetti();
    }
    
    updateUI();
    
    if (reason) {
        showNotification(`+${points} points: ${reason}`, 'success');
    }
}

function unlockAchievement(achievementId) {
    if (!gameState.achievements.has(achievementId)) {
        gameState.achievements.add(achievementId);
        const achievement = appData.achievements.find(a => a.id === achievementId);
        
        if (achievement) {
            showNotification(`🏆 Achievement Unlocked: ${achievement.title}!`, 'achievement');
            awardPoints(achievement.points, `Achievement: ${achievement.title}`);
            triggerConfetti();
        }
        
        renderAchievements();
    }
}

function updateSkillProgress(skillType, amount) {
    if (gameState.skills[skillType] !== undefined) {
        gameState.skills[skillType] = Math.min(100, gameState.skills[skillType] + amount);
        updateProgressBars();
    }
}

function updateUI() {
    // Update navigation stats
    const userPoints = document.getElementById('userPoints');
    const userLevel = document.getElementById('userLevel');
    const userStreak = document.getElementById('userStreak');
    
    if (userPoints) userPoints.textContent = gameState.points;
    if (userLevel) userLevel.textContent = gameState.level;
    if (userStreak) userStreak.textContent = gameState.streak;
    
    // Update dashboard metrics
    const resourcesStarted = document.getElementById('resourcesStarted');
    const resourcesCompleted = document.getElementById('resourcesCompleted');
    const hoursLearned = document.getElementById('hoursLearned');
    const achievementCount = document.getElementById('achievementCount');
    const currentLevel = document.getElementById('currentLevel');
    const currentXP = document.getElementById('currentXP');
    const nextLevelXP = document.getElementById('nextLevelXP');
    const xpFill = document.getElementById('xpFill');
    
    if (resourcesStarted) resourcesStarted.textContent = gameState.resources.started.size;
    if (resourcesCompleted) resourcesCompleted.textContent = gameState.resources.completed.size;
    if (hoursLearned) hoursLearned.textContent = gameState.resources.completed.size * 5;
    if (achievementCount) achievementCount.textContent = gameState.achievements.size;
    if (currentLevel) currentLevel.textContent = gameState.level;
    
    // XP and level progression
    const currentXPValue = gameState.points % 100;
    const nextLevelXPValue = 100;
    
    if (currentXP) currentXP.textContent = currentXPValue;
    if (nextLevelXP) nextLevelXP.textContent = nextLevelXPValue;
    if (xpFill) xpFill.style.width = `${currentXPValue}%`;
    
    updateProgressRing();
}

function updateProgressRing() {
    const sections = ['hero', 'quiz', 'careers', 'roadmap', 'resources', 'insights', 'dashboard'];
    const completedSections = sections.filter(section => {
        switch(section) {
            case 'quiz': return gameState.quiz.results !== null;
            case 'careers': return gameState.viewedCareers.size >= 3;
            case 'roadmap': return gameState.selectedCareer !== null;
            case 'resources': return gameState.resources.started.size >= 1;
            case 'dashboard': return gameState.achievements.size >= 1;
            default: return true;
        }
    });
    
    const progress = (completedSections.length / sections.length) * 100;
    const circle = document.querySelector('.progress-ring__circle');
    const text = document.getElementById('progressPercent');
    
    if (circle && text) {
        const circumference = 163.36;
        const offset = circumference - (progress / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        text.textContent = `${Math.round(progress)}%`;
    }
}

function showNotification(message, type = 'info') {
    const container = document.getElementById('notifications');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: '✅',
        achievement: '🏆',
        info: 'ℹ️',
        warning: '⚠️'
    };
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <span>${icons[type] || icons.info}</span>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.background = 'var(--color-surface)';
    notification.style.border = '1px solid var(--color-border)';
    notification.style.borderRadius = '8px';
    notification.style.padding = '12px 16px';
    notification.style.marginBottom = '8px';
    notification.style.boxShadow = 'var(--shadow-md)';
    
    container.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (container.contains(notification)) {
            container.removeChild(notification);
        }
    }, 3000);
}

function triggerConfetti() {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];
    
    // Create 50 confetti pieces
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = '8px';
        confetti.style.height = '8px';
        confetti.style.animation = `confetti-fall 3s linear`;
        
        container.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            if (container.contains(confetti)) {
                container.removeChild(confetti);
            }
        }, 3000);
    }
}

function checkLearningMilestones() {
    const completedSteps = gameState.completedSteps.size;
    const resourcesCompleted = gameState.resources.completed.size;
    
    if (completedSteps >= 5 && !gameState.achievements.has('planner')) {
        unlockAchievement('planner');
    }
    
    if (resourcesCompleted >= 3 && !gameState.achievements.has('learner')) {
        unlockAchievement('learner');
    }
    
    if (gameState.viewedCareers.size >= 5 && !gameState.achievements.has('explorer')) {
        unlockAchievement('explorer');
    }
}

function animateCareers() {
    const careerCards = document.querySelectorAll('.career-card');
    careerCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function showHelpGuide() {
    showNotification('Welcome! Navigate through sections, take the quiz, and track your progress! 🚀', 'info');
}

// Event Listeners
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize stats animation on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        if (typeof initializeHeroAnimations === 'function') {
            initializeHeroAnimations();
        }
    }, 500);
});

console.log('🎮 IT Career Journey App loaded successfully!');