// Attendre le chargement complet de la page
window.addEventListener('load', function() {
    // Récupérer l'élément du loader
    var loader = document.querySelector('.spinner');
    
    // Récupérer l'élément du header
    var header = document.querySelector('.header');

    // Ajouter une classe "hidden" au chargement après 2 secondes
    setTimeout(function() {
        loader.classList.add('hidden');
        header.classList.remove('hidden');
    }, 2000);
});

window.addEventListener('load', function() {
    var elements = document.querySelectorAll('.element');
    setTimeout(function() {
      elements.forEach(function(element) {
        element.classList.add('appear');
      });
    }, 2000); // Délai de 2 secondes avant l'apparition des éléments
  });