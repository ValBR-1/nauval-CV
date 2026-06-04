/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
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

document.addEventListener('DOMContentLoaded', function () {
    const target = document.querySelector('#typing-name');
    let typedInstance = null;

    function startTyping() {
        if (typedInstance) return;

        typedInstance = new Typed('#typing-name', {
            strings: [
                'Nauval <span class="text-primary">Abdi Rahman</span>'
            ],
            typeSpeed: 80,
            showCursor: true,
            cursorChar: '|',
            contentType: 'html'
        });
    }

    function stopTyping() {
        if (typedInstance) {
            typedInstance.destroy();
            typedInstance = null;
            target.innerHTML = '';
        }
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startTyping();
                } else {
                    stopTyping();
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    observer.observe(target);
});