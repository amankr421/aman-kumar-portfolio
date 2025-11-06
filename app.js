// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 1500);
});

// Typewriter effect reset for mobile
function resetTypewriter() {
    const typewriter = document.querySelector('.typewriter');
    if (typewriter && window.innerWidth < 768) {
        typewriter.style.animation = 'none';
        setTimeout(() => {
            typewriter.style.animation = '';
        }, 10);
    }
}

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
    const toast = document.getElementById('toast');
    toast.textContent = 'Preparing your download...';
    toast.classList.add('show');
    
    // Open download link in new tab
    setTimeout(() => {
        window.open('https://drive.google.com/file/d/1zM7eifN1Pq1SICg6C7noZVk9QyIN1Rxi/view?usp=sharing', '_blank');
        
        // Success message
        setTimeout(() => {
            toast.textContent = 'Resume download started!';
        }, 1000);
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            toast.textContent = 'Message sent successfully!';
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

//  EmailJS Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    emailjs.init("LLA1N4LKleD6kwkhw");
    
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const messageContainer = document.getElementById('messageContainer');
    const toast = document.getElementById('toast');
    
    function showMessage(message, type) {
        messageContainer.innerHTML = `<div class="message ${type}">${message}</div>`;
        messageContainer.style.display = 'block';
        
        setTimeout(() => {
            messageContainer.style.display = 'none';
        }, 5000);
    }
    
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    if (contactForm) {
    
        contactForm.addEventListener('submit', function(e) {
           
            e.preventDefault();
            e.stopPropagation();
            
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showMessage('Please fill in all fields.', 'error');
                return false;
            }
            
            // Show loading state
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<div class="loading"></div> Sending...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS
            emailjs.send("service_oxvt4pr", "template_sucy6rr", {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                reply_to: email
            })
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showMessage('Your message has been sent successfully! I will get back to you soon.', 'success');
                showToast('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                showMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
                showToast('Failed to send message. Please try again.');
            })
            .finally(function() {
                // Reset button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
            
            return false;
        });
    }
});

window.addEventListener('resize', resetTypewriter);