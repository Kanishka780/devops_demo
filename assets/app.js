// ===============================
// Navigation & DOM Elements
// ===============================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.style.display = 'none';
    });
});

// ===============================
// Scroll Effects
// ===============================
// Smooth scroll function
function scrollToSection() {
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
        featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===============================
// Project Filtering
// ===============================
function filterProjects(category) {
    const projectItems = document.querySelectorAll('.project-item');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter projects
    projectItems.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
            }, 0);
        } else {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 0);
            } else {
                item.style.opacity = '0';
                item.style.display = 'none';
            }
        }
    });
}

// ===============================
// Progress Bar Animation
// ===============================
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0';
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
}

// Call on page load
window.addEventListener('load', animateProgressBars);

// ===============================
// Active Navigation Link
// ===============================
function setActiveNavLink() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentLocation.split('/').pop() || 
            (currentLocation.includes('index') && link.getAttribute('href') === 'index.html') ||
            (currentLocation.endsWith('/') && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Set active link on page load
window.addEventListener('load', setActiveNavLink);

// ===============================
// Fade In Animation on Scroll
// ===============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards and timeline items on load
window.addEventListener('load', () => {
    const projectCards = document.querySelectorAll('.project-card, .timeline-item, .skill-item');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.animation = 'none';
        observer.observe(card);
    });
});

// ===============================
// Smooth Scroll for Internal Links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===============================
// Load More Animation (Optional)
// ===============================
function addLoadMoreAnimation() {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animation = `slideUp 0.6s ease ${index * 0.1}s forwards`;
    });
}

window.addEventListener('load', addLoadMoreAnimation);

// ===============================
// Contact Form Handling (Placeholder)
// ===============================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// ===============================
// Utility Functions
// ===============================
// Log page info for debugging
console.log('Portfolio website loaded successfully!');
console.log('Current page:', location.pathname);

// Dark mode toggle (optional feature for future)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ===============================
// Responsive Mobile Menu
// ===============================
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});

// Initialize on page load
window.addEventListener('load', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});
