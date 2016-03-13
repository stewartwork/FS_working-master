/* =Header shrink
-------------------------------------------------------------- */
function init() {
        window.addEventListener('scroll', function(e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 40,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header, "smaller");
            } else {
                if (classie.has(header, "smaller")) {
                    classie.remove(header, "smaller");
                }
            }
        });
    }
    window.onload = init();


/* =Mobile Nav
-------------------------------------------------------------- */
