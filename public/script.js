document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    const faqBtn = document.getElementById('btn-faq');
    const modal = document.getElementById('faq-modal');
    const closeBtn = document.querySelector('.close-modal');

    // Open Modal
    faqBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scroll
    });

    // Close Modal
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);

    // Close on outside click
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Button Hover Sound or micro-interaction (Optional polish)
    const buttons = document.querySelectorAll('.btn-cta');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            // Potential for haptic or audio feedback here
        });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px" // Slight offset so it doesn't trigger at the very bottom edge
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
