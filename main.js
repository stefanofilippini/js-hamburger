const element = document.querySelector ('.fas.fa-bars')
const element_1 = document.querySelector ('.hamburger-menu')
const element_2 = document.querySelector ('.fas.fa-times')


element.addEventListener ( 'click',
    function() {
        element_1.className = element_1.classList + " active"
    }
)

/* element_2.addEventListener ( 'click',
    function() {
        element_1.className = "hamburger-menu"
    }
) */

element_2.addEventListener ( 'click',
    function() {
        element_1.classList.remove("active")
    }
)