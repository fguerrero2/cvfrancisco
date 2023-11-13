
//
// Scripts
/*seleccionamos en el menu de la izquierda NAV y con ello usando el comando
scrollspy nos movemos en el contenido a la seccion segun su nombre*/
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activamos Bootstrap scrollspy en el elemento princial de nav
    const sideNav = document.body.querySelector('#lateralNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#lateralNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar 
    // Hacemos menu hamburguesa al reducir la pantalla (reponsive)
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
