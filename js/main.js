window.onload = function() {
  var main_menu_toggle = document.getElementById('main-menu-toggle');
  var main_menu_items = document.getElementsByClassName('main-menu-item');
  var main_menu_titles = document.getElementsByClassName('main-menu-title');
  var body_overlay = document.getElementById('overlay');
  var pathArray = window.location.pathname.split( '/' );

  // Sets the active class for the main menu since Drupal's way
  // of doing so seems to be broken
  for (var i = 0; i < main_menu_items.length; i++) {
    if (main_menu_items[i].getAttribute('href') == ('/' + pathArray[1])) {
      main_menu_items[i].classList.add('active');
    }
  }

  // Toggles the main navigation
  main_menu_toggle.addEventListener('click', function() {
    if (main_menu_toggle.classList.contains('closed')) {
      document.getElementById('navbar').style.width = '300px';

      for (var i = 0; i < main_menu_items.length; i++) {
        main_menu_titles[i].style.display = "inline-block";
      }

      body_overlay.style.display = 'block';
      main_menu_toggle.classList.remove('closed');
      main_menu_toggle.classList.add('opened');
    } else if (main_menu_toggle.classList.contains('opened')) {
      document.getElementById('navbar').style.width = '60px';

      for (var i = 0; i < main_menu_items.length; i++) {
        main_menu_titles[i].style.display = "none";
      }

      body_overlay.style.display = 'none';
      main_menu_toggle.classList.remove('opened');
      main_menu_toggle.classList.add('closed');
    }
  });

  // Overlay of the body content when main navigation is toggled
  // that toggles the main navigation
  body_overlay.addEventListener('click', function() {
    document.getElementById('navbar').style.width = '60px';

    for (var i = 0; i < main_menu_items.length; i++) {
      main_menu_titles[i].style.display = "none";
    }

    body_overlay.style.display = 'none';
    main_menu_toggle.classList.remove('opened');
    main_menu_toggle.classList.add('closed');
  });
};