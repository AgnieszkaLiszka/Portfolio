// When the user clicks on the bars, function shows the dropdown content
const navMenu = document.getElementById('menu__nav');
//const header = document.getElementById('header__main');

function menuBurger(event) {
    event.preventDefault()
    console.log(event)

    if (!navMenu.classList.contains('responsive')) {
        navMenu.classList.add('responsive');
        header.classList.add('header__main--scroll');
    } else {
        navMenu.classList.remove('responsive')
        header.classList.remove('header__main--scroll');
    }

    // if (navMenu.classList.contains('responsive')) {
    //     header.classList.add('header__main--scroll');
    // } else {
    //     header.classList.remove('header__main--scroll')
    // }
}

document.getElementById('menu__burger').addEventListener('click', menuBurger)


// Close the dropdown if the user clicks outside of it

const burger = document.getElementById('menu__burger')

function closeMenu(event) {
    console.log(event.target === burger)
    //console.log(event.target.contains(navMenu))
    
    if (burger.contains(event.target)) {
        return
    }

    if (!event.target.contains(navMenu) && !event.target.contains(burger)) {
        navMenu.classList.remove('responsive');
    } 
}

window.addEventListener('click', closeMenu)



