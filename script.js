// Animation d'apparition au scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', checkSections);

function checkSections() {
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}

// Petite animation avec CSS
document.querySelectorAll('section').forEach(section => {
  section.classList.add('hidden');
});
