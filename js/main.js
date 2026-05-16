// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function () {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // --- Mobile menu toggle ---
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('menu-open');
      mobileNav.classList.toggle('nav-open');
    });

    // Close menu on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuBtn.classList.remove('menu-open');
        mobileNav.classList.remove('nav-open');
      });
    });
  }

  // --- Skill bar animation on scroll ---
  var skillFills = document.querySelectorAll('.skill-fill');
  if (skillFills.length > 0) {
    var skillObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    skillFills.forEach(function (bar) {
      skillObserver.observe(bar);
    });
  }

  // --- Fade-in sections on scroll ---
  var sections = document.querySelectorAll('.section:not(.hero)');
  if (sections.length > 0) {
    sections.forEach(function (s) { s.classList.add('fade-section'); });

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href*="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      var hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      var hash = href.substring(hashIndex);
      var target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, null, hash);
      }
    });
  });

  // --- Header scroll effect ---
  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
});