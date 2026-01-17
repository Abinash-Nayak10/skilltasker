
// Course card animation
const cardWrappers = document.querySelectorAll('.course-card-wrapper');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });
cardWrappers.forEach(card => observer.observe(card));

// Search filter
const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();
  cardWrappers.forEach(card => {
    const title = card.querySelector('h5 a').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
});

// Footer animation
const footer = document.querySelector('.footer');
const footerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      footer.classList.add('visible');
      setTimeout(() => {
        document.querySelector('.footer-bottom').classList.add('visible');
      }, 300);
    }
  });
}, { threshold: 0.1 });
footerObserver.observe(footer);

// ✅ Animated icons: full rotation on scroll, then back to normal
const icons = document.querySelectorAll('#animatedIcons .icon img');

window.addEventListener('scroll', () => {
  icons.forEach(icon => {
    const rect = icon.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom > 0){
      // Rotate full 360°
      icon.style.transition = "transform 0.6s ease";
      icon.style.transform = "rotate(360deg)";
      // Reset to 0 after rotation finishes
      setTimeout(() => {
        icon.style.transition = "none"; // remove transition to avoid jump
        icon.style.transform = "rotate(0deg)";
      }, 600); // match duration
    }
  });
});

// Animate icons when they first come into view (optional initial animation)
const iconsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      icons.forEach((icon, index) => {
        setTimeout(() => {
          icon.parentElement.classList.add('visible');
        }, index * 200);
      });
    }
  });
}, { threshold: 0.3 });
iconsObserver.observe(document.getElementById('animatedIcons'));
