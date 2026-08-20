document.addEventListener('DOMContentLoaded', () => {
    // Reveal elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay based on index for staggered effect
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                }, index * 150);
                
                // Unobserve after revealing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all items to reveal
    const revealItems = document.querySelectorAll('.reveal-item');
    revealItems.forEach(item => {
        observer.observe(item);
    });
});
