// Simple interactions: smooth scroll and helpful tips
document.addEventListener('DOMContentLoaded', ()=>{
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    })
  })

  // Keyboard shortcut: press 's' to open slides (report.html)
  document.addEventListener('keydown', (e)=>{
    if(e.key.toLowerCase()==='s'){
      window.location.href='report.html';
    }
  })

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('.cards-section, .members-section, .quiz-section, .card, .member-card, .quiz-question').forEach(el => {
    observer.observe(el);
  });
})

