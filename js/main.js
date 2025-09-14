// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('navbarMenu');
    const btn = document.querySelector('.mobile-menu-btn');
    
    menu.classList.toggle('active');
    btn.classList.toggle('active');
}

// Dropdown Toggle for Mobile
function toggleDropdown(event) {
    event.preventDefault();
    
    // Only toggle on mobile
    if (window.innerWidth <= 968) {
        const navItem = event.target.closest('.nav-item');
        
        // Close other dropdowns
        document.querySelectorAll('.nav-item').forEach(item => {
            if (item !== navItem) {
                item.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        navItem.classList.toggle('active');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!navbar.contains(event.target)) {
        document.getElementById('navbarMenu').classList.remove('active');
        if (menuBtn) {
            menuBtn.classList.remove('active');
        }
    }
});

// Close dropdowns when resizing
window.addEventListener('resize', function() {
    if (window.innerWidth > 968) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.intake-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Form will submit normally to Getform
            console.log('Form submitted');
        });
    }
});
