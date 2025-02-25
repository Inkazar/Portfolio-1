// Detta skript gör att sidan scrollar smidigt när du klickar på länkar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Hämta knappen och dropdown-listan
const cvToggle = document.getElementById('cv-toggle');
const cvOptions = document.getElementById('cv-options');

// Lägg till en klick-händelse på knappen
cvToggle.addEventListener('click', function(e) {
  e.preventDefault();
  // Toggle: Om listan är synlig, göm den; annars visa den
  if (cvOptions.style.display === 'block') {
    cvOptions.style.display = 'none';
  } else {
    cvOptions.style.display = 'block';
  }
});

  