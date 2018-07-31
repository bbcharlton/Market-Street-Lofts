// Place your custom JavaScript here.
window.onload = function() {
  var main_menu = document.getElementsByClassName('main-menu-item');
  var pathArray = window.location.pathname.split( '/' );

  // Sets the active class for the main menu since Drupal's way
  // of doing so seems to be broken.
  for (var i = 0; i < main_menu.length; i++) {
    if (main_menu[i].getAttribute('href') == ('/' + pathArray[1])) {
      main_menu[i].classList.add('active');
    }
  }
};