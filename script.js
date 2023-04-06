const menu_icon = document.getElementById('menu-icon'),
      menu_close = document.getElementById('menu-close'),
      header_menu = document.getElementById('header-menu');





menu_icon.addEventListener( 'click' , ()=> {
    if (header_menu.classList.contains('show-menu') == false) {
        header_menu.classList.add('show-menu');
    }
})


menu_close.addEventListener( 'click' , ()=> {
    if (header_menu.classList.contains('show-menu') == true) {
        header_menu.classList.remove('show-menu');
    }
})


      


