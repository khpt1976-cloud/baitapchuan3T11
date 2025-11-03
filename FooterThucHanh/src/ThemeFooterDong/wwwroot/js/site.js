/**
 * FOOTER THEME - Custom JavaScript
 * OrchardCore Theme với focus vào Footer functionality
 */

(function() {
    'use strict';

    // ===== DOM READY =====
    document.addEventListener('DOMContentLoaded', function() {
        initializeTheme();
    });

    // ===== MAIN INITIALIZATION =====
    function initializeTheme() {
        console.log('🎨 Footer Theme initialized');
        
        // Initialize all components
        initSmoothScrolling();
        initFooterAnimations();
        initResponsiveMenu();
        initBackToTop();
        initSocialLinks();
        initFormEnhancements();
        
        // Add fade-in animation to main content
        addFadeInAnimations();
    }

    // ===== SMOOTH SCROLLING =====
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ===== FOOTER ANIMATIONS =====
    function initFooterAnimations() {
        const footer = document.querySelector('footer');
        if (!footer) return;

        // Animate footer sections on scroll
        const footerSections = footer.querySelectorAll('.footer-section');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        footerSections.forEach((section, index) => {
            // Set initial state
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = `all 0.6s ease ${index * 0.1}s`;
            
            observer.observe(section);
        });
    }

    // ===== RESPONSIVE MENU =====
    function initResponsiveMenu() {
        // Create mobile menu toggle if not exists
        const nav = document.querySelector('nav');
        if (!nav) return;

        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.setAttribute('aria-label', 'Toggle menu');
        
        // Insert toggle button
        nav.parentNode.insertBefore(menuToggle, nav);
        
        // Toggle functionality
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('nav-open');
            this.classList.toggle('active');
            this.innerHTML = nav.classList.contains('nav-open') ? '✕' : '☰';
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('nav-open');
                menuToggle.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });
    }

    // ===== BACK TO TOP BUTTON =====
    function initBackToTop() {
        // Create back to top button
        const backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '↑';
        backToTop.setAttribute('aria-label', 'Back to top');
        backToTop.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
        `;

        document.body.appendChild(backToTop);

        // Show/hide on scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        });

        // Scroll to top functionality
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Hover effect
        backToTop.addEventListener('mouseenter', function() {
            this.style.background = '#2980b9';
            this.style.transform = 'scale(1.1)';
        });

        backToTop.addEventListener('mouseleave', function() {
            this.style.background = '#3498db';
            this.style.transform = 'scale(1)';
        });
    }

    // ===== SOCIAL LINKS ENHANCEMENT =====
    function initSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-links a');
        
        socialLinks.forEach(link => {
            // Add ripple effect
            link.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.6);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
                ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add ripple animation CSS
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ===== FORM ENHANCEMENTS =====
    function initFormEnhancements() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            // Add loading state to submit buttons
            const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
            if (submitBtn) {
                form.addEventListener('submit', function() {
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Đang xử lý...';
                    
                    // Re-enable after 3 seconds (fallback)
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Gửi';
                    }, 3000);
                });
            }

            // Add focus effects to inputs
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.style.borderColor = '#3498db';
                    this.style.boxShadow = '0 0 5px rgba(52, 152, 219, 0.3)';
                });

                input.addEventListener('blur', function() {
                    this.style.borderColor = '';
                    this.style.boxShadow = '';
                });
            });
        });
    }

    // ===== FADE IN ANIMATIONS =====
    function addFadeInAnimations() {
        const elements = document.querySelectorAll('.blog-post, .content-wrapper > *, main > *');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = `all 0.6s ease ${index * 0.1}s`;
            
            // Trigger animation
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    // ===== UTILITY FUNCTIONS =====
    
    // Debounce function for performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle function for scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // ===== RESPONSIVE MENU STYLES =====
    // Add responsive menu styles
    if (!document.querySelector('#responsive-menu-styles')) {
        const style = document.createElement('style');
        style.id = 'responsive-menu-styles';
        style.textContent = `
            .menu-toggle {
                display: none;
                background: none;
                border: none;
                color: white;
                font-size: 1.5em;
                cursor: pointer;
                padding: 5px;
            }

            @media (max-width: 768px) {
                .menu-toggle {
                    display: block;
                }
                
                nav {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: #34495e;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                }
                
                nav.nav-open {
                    max-height: 300px;
                }
                
                nav ul {
                    flex-direction: column;
                    padding: 10px;
                }
                
                nav ul li {
                    margin: 5px 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ===== EXPORT FOR GLOBAL ACCESS =====
    window.FooterTheme = {
        init: initializeTheme,
        utils: {
            debounce: debounce,
            throttle: throttle
        }
    };

})();