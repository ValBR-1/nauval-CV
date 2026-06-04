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



    //Type writter feature
    const targetName = document.querySelector('#typing-name');
    let typedInstance = null;
    if (targetName) {
        const typeObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!typedInstance) {
                        typedInstance = new Typed('#typing-name', {
                            strings: ['Nauval <span class="text-primary">Abdi Rahman</span>'],
                            typeSpeed: 100,
                            showCursor: true,
                            cursorChar: '|',
                            contentType: 'html',
                        });
                    }
                }else{
                    if (typedInstance) {
                        typedInstance.destroy();
                        typedInstance = null;
                        targetName.innerHTML = '';
                    }
                }
            });
            },{
                threshold: 0.3
        });
        typeObserver.observe(targetName);
    }

    //Scroll reveal feature
    const galleryItems = document.querySelectorAll('.hidden-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-scroll');
            } 
            else {
                entry.target.classList.remove('show-scroll');
            }
        });
    }, {
        threshold: 0.2 
    });

    galleryItems.forEach((item) => {
        observer.observe(item);
    });
});
