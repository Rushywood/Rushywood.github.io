document.addEventListener('DOMContentLoaded', () => {

    // 1. TYPING ANIMATION (Updated Text)
    if (document.getElementById('typing-container')) {
        new Typed('#typing-container', {
            strings: [
                `<p>Hello, I'm</p>
                 <h1 >Nitesh Kaushal</h1>
                 <p class="role-text">A creative Web Designer Specialist </p>
                 <p>building things for the internet.</p>`
            ],
            typeSpeed: 50,
            backSpeed: 15,
            startDelay: 500,
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