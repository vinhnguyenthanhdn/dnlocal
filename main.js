// Da Nang Local Insider - Scrolling Animations & Interactivity

document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for scroll reveal animations
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after animating
                // observer.unobserve(entry.target);
            }
        });
    }, options);

    // Initial styling for reveal animation
    const revealElements = document.querySelectorAll('.package-card, .polaroid, .hero-text, .text-content');
    
    revealElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.1}s`;
        observer.observe(el);
    });

    // Add a custom class for visibility
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Dynamic WhatsApp Number Handling (Placeholder logic)
    const chatButtons = document.querySelectorAll('a[href^="https://wa.me/"]');
    chatButtons.forEach(btn => {
        btn.onclick = (e) => {
            // Future logic to update WhatsApp number dynamically can go here
            // e.preventDefault();
            // console.log("User clicked chat button: " + btn.innerText);
        }
    });

    // Subtle parallax for polaroids on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const polaroids = document.querySelectorAll('.polaroid');
        polaroids.forEach((p, i) => {
            const speed = 0.05 + (i * 0.02);
            p.style.marginTop = `${scrolled * speed}px`;
        });
    });

});
