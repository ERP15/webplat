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
})
