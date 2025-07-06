// Wait for DOM to load before running JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.getElementById('contactTrigger');
    const modal = document.getElementById('contactModal');
    const closeBtn = modal.querySelector('.close');

    console.log('Elements found:', { contactBtn, modal, closeBtn });

    contactBtn.addEventListener('click', (e) => {
        e.preventDefault(); // prevent page reload
        console.log('Contact button clicked, showing modal');
        modal.classList.add('show');
    });

    function showCloseModel() {
        console.log('Toggle modal function called');
        if (modal.classList.contains('show')) {
            modal.classList.remove('show');
        } else {
            modal.classList.add('show');
        }
    }

    closeBtn.addEventListener('click', () => {
        console.log('Close button clicked');
        modal.classList.remove('show');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            console.log('Modal backdrop clicked');
            modal.classList.remove('show');
        }
    });
});






const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close all first
        faqItems.forEach(i => {
            i.classList.remove('active');
            const ans = i.querySelector('.faq-answer');
            ans.style.height = 0;
        });

        if (!isOpen) {
            item.classList.add('active');
            answer.style.height = answer.scrollHeight + 'px';
        } else {
            item.classList.remove('active');
            answer.style.height = 0;
        }
    });
});




// Smooth scroll to sections based on hash links
document.addEventListener('DOMContentLoaded', function() {
    
    // Handle clicks on anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1); // Remove #
            const targetSection = document.querySelector(`.${targetId}-section`);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL hash
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
    
    // Handle direct URL navigation (when page loads with hash)
    function scrollToHashSection() {
        const hash = window.location.hash.substring(1); // Remove #
        if (hash) {
            const targetSection = document.querySelector(`.${hash}-section`);
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        }
    }
    
    // Scroll to section on page load if hash exists
    scrollToHashSection();
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', scrollToHashSection);
    
});


window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    
    setTimeout(() => {
        preloader.classList.add('hide');
        preloader.classList.remove('active');
    }, 500);
});