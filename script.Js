window.addEventListener('DOMContentLoaded', function() {
  // Récupérer l'élément du loader
  var loader = document.querySelector('.spinner');
  
  // Récupérer l'élément du header
  var header = document.querySelector('.header');

  // Ajouter une classe "hidden" au chargement
  header.classList.add('hidden');

  // Afficher le loader pendant 2 secondes avant de montrer la page
  setTimeout(function() {
    loader.style.display = 'none';
    header.classList.remove('hidden');
  }, 2000);
});