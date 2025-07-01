document.addEventListener('DOMContentLoaded', () => {

    // 1. TYPING ANIMATION (Updated Text)
    if (document.getElementById('typing-container')) {
        new Typed('#typing-container', {
            strings: [
                // UPDATED: All text is now in one block for a continuous animation
                `<div>Hello, I'm<br><span class="typed-name">Nitesh Kaushal</span><br><span class="role-text">An inquisitive Quant professional</span><br>building things for the market.</div>`
            ],
            typeSpeed: 10, // You can keep this faster speed
            backSpeed: 15,
            startDelay: 0,
            loop: false,
            showCursor: true,
            cursorChar: '_',
            contentType: 'html',
        });
    }

    // 2. SCROLL-TRIGGERED FADE-IN ANIMATION
    const animatedSections = document.querySelectorAll('.animated-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15 // Trigger a bit later for a smoother feel
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // 3. NAVIGATION MENU FUNCTIONALITY
    const menuOverlay = document.getElementById('menu-overlay');
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const menuLinks = document.querySelectorAll('.menu-link');

    const openMenu = () => {
        menuOverlay.classList.add('open');
    };

    const closeMenu = () => {
        menuOverlay.classList.remove('open');
    };

    openMenuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});

document.getElementById('scrollToNext').addEventListener('click', () => {
    const sections = document.querySelectorAll('section'); // Assumes your sections use <section> tag
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
  
    for (let i = 0; i < sections.length; i++) {
      const top = sections[i].offsetTop;
  
      if (top > scrollPosition + 10) {
        sections[i].scrollIntoView({ behavior: 'smooth' });
        break;
      }
    }
  });