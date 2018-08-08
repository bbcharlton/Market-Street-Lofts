window.onload = function() {
  var main_menu_toggle = document.getElementById('main-menu-toggle');
  var main_menu_items = document.getElementsByClassName('main-menu-item');
  var main_menu_titles = document.getElementsByClassName('main-menu-title');
  var info_btns = document.getElementsByClassName('btn-info');
  var body_overlay = document.getElementById('overlay');
  var pathArray = window.location.pathname.split( '/' );
  var tax = document.getElementsByClassName('taxonomy-wrapper');
  var tax_card = document.getElementsByClassName('taxonomy-card');
  var history_imgs = document.getElementsByClassName('history');

  // Sets the active class for the main menu since Drupal's way
  // of doing so seems to be broken
  for (var i = 0; i < main_menu_items.length; i++) {
    if (main_menu_items[i].getAttribute('href') == ('/' + pathArray[1])) {
      main_menu_items[i].classList.add('active');
    }
  }

  // Removes Bootstrap's unnecessary form classes
  for (var i = 0; i < info_btns.length; i++) {
    if (info_btns[i].classList.contains('btn-info')) {
      info_btns[i].classList.remove('btn-info');
    }
  }

  // Links the resource taxonomy to the resource collapse list
  for (var i = 0; i < tax.length; i++) {
    var title = tax[i].firstElementChild;
    var list = title.nextElementSibling;
    var data_target = title.firstElementChild.getAttribute('data-target').replace(/\./g,'');
    list.classList.add(data_target);
  }

  // Toggles dropdown icon for Resource categories
  for (var i = 0; i < tax_card.length; i++) {
    (function() {
      var anchor = tax_card[i];

      anchor.addEventListener('click', function() {
        if (anchor.classList.contains('collapsed')) {
          anchor.firstElementChild.classList.remove('fa-chevron-right');
          anchor.firstElementChild.classList.add('fa-chevron-down');
        } else {
          anchor.firstElementChild.classList.remove('fa-chevron-down');
          anchor.firstElementChild.classList.add('fa-chevron-right');
        }
      });
    }());
  }

  // Applies background images for the history view
  for (var i = 0; i < history_imgs.length; i++) {
    history_imgs[i].style.backgroundImage = "url('" + history_imgs[i].getAttribute('data-bg') + "')";
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
      main_menu_toggle.lastElementChild.classList.remove('fa-bars');
      main_menu_toggle.classList.add('opened');
      main_menu_toggle.lastElementChild.classList.add('fa-times');
    } else if (main_menu_toggle.classList.contains('opened')) {
      document.getElementById('navbar').style.width = '60px';

      for (var i = 0; i < main_menu_items.length; i++) {
        main_menu_titles[i].style.display = "none";
      }

      body_overlay.style.display = 'none';
      main_menu_toggle.classList.remove('opened');
      main_menu_toggle.lastElementChild.classList.remove('fa-times');
      main_menu_toggle.classList.add('closed');
      main_menu_toggle.lastElementChild.classList.add('fa-bars');
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
    main_menu_toggle.lastElementChild.classList.remove('fa-times');
    main_menu_toggle.classList.add('closed');
    main_menu_toggle.lastElementChild.classList.add('fa-bars');
  });
};
