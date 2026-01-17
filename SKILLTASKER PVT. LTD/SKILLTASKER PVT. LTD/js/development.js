  // Navbar animation
  window.addEventListener('load', () => document.querySelector('.navbar').classList.add('visible'));

  // Header animation
  const headerTitle = document.querySelector('header h2');
  const headerSub = document.querySelector('header p');
  setTimeout(() => headerTitle.classList.add('visible'), 300);
  setTimeout(() => headerSub.classList.add('visible'), 600);

  // Animate course cards on scroll
  const cards = document.querySelectorAll('.course-card-wrapper');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });
  cards.forEach(card => observer.observe(card));

  // Animate footer and footer-bottom on scroll
  const footer = document.querySelector('.footer');
  const footerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        footer.classList.add('visible');
        setTimeout(() => { document.querySelector('.footer-bottom').classList.add('visible'); }, 300);
      }
    });
  }, { threshold: 0.1 });
  footerObserver.observe(footer);