// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 1500);
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Resume Download Handler
document.getElementById('downloadResume').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Show loading toast
    toast.textContent = 'Preparing your download...';
    toast.classList.add('show');
    
    // Open download link in new tab
    setTimeout(() => {
        window.open('https://drive.google.com/uc?export=download&id=13ZI_tyNipHwAKRkxHvYgwmilwD3ucNJN', '_blank');
        
        // Success message
        setTimeout(() => {
            toast.textContent = 'Resume download started!';
        }, 1000);
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            toast.textContent = 'Message sent successfully!'; // Reset message
        }, 3000);
    }, 500);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
 
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');
 
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
 
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-left, .slide-right').forEach(el => {
    observer.observe(el);
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show toast
    toast.classList.add('show');
    
    // Reset form
    contactForm.reset();
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
});

// Download Resume
document.getElementById('downloadResume').addEventListener('click', (e) => {
    e.preventDefault();
    toast.textContent = 'Resume download started!';
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
        toast.textContent = 'Message sent successfully!'; // Reset original message
    }, 3000);
});


// Typewriter effect reset for mobile
function resetTypewriter() {
    const typewriter = document.querySelector('.typewriter');
    if (window.innerWidth < 768) {
        typewriter.style.animation = 'none';
        setTimeout(() => {
            typewriter.style.animation = '';
        }, 10);
    }
}

window.addEventListener('resize', resetTypewriter);