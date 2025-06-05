// ---------------------------------------
// 1. Light/Dark Mode Toggle
// ---------------------------------------
(function() {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // On load, check localStorage for saved theme
  if (localStorage.getItem('preferred-theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = 'Light Mode';
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('preferred-theme', isDark ? 'dark' : 'light');
  });
})();


// ---------------------------------------
// 2. Scroll Progress Bar
// ---------------------------------------
(function() {
  const progressBar = document.getElementById('progress-bar');

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progressPercent + '%';
  });
})();


// ---------------------------------------
// 3. Back-to-Top Button
// ---------------------------------------
(function() {
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    // Show button after scrolling down 300px
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


// ---------------------------------------
// 4. Fade-In Sections (IntersectionObserver)
// ---------------------------------------
(function() {
  const faders = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
})();


// ---------------------------------------
// 5. FAQ Accordion Functionality
// ---------------------------------------
(function() {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

      // Close any open accordion before toggling this one
      document.querySelectorAll('.accordion-content').forEach(panel => {
        panel.style.maxHeight = null;
      });

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });
})();
