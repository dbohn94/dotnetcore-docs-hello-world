/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
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

function includeHTMLSnippet() {

	// Traverse the collection of all
	// HTML elements
	id = document.getElementsByTagName("*");
	for (i = 0; i < id.length; i++) {
		element = id[i];

		// Search for elements with
		// specific attributes
		file = element.getAttribute(
			"GFG-include-html-snippet");

		if (file) {

			// Create an HTTP request with
			// the attribute value as the
			// file name
			xmlRequest = new XMLHttpRequest();
			xmlRequest.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) {
						element.innerHTML = this.responseText;
					}

					if (this.status == 404) {
						element.innerHTML = "Page not found.";
					}

					// Delete the attribute and
					// call this function again.
					element.removeAttribute(
						"GFG-include-html-snippet");

					includeHTMLSnippet();
				}
			}
			xmlRequest.open("GET", file, true);
			xmlRequest.send();
			return; // Exit function.
		}
	}
};
