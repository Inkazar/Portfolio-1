document.addEventListener('DOMContentLoaded', function() {
// Detta skript gör att sidan scrollar smidigt när du klickar på länkar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  const cvToggle = document.getElementById('cv-toggle');
  const cvOptions = document.getElementById('cv-options');

  cvToggle.addEventListener('click', function(e) {
    e.preventDefault();
    cvOptions.classList.toggle("show");
  });
});


  