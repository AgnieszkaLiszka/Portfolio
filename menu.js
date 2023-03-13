// When the user clicks on the bars, function shows the dropdown content
const navMenu = document.getElementById('menu__nav');
const menuButton = document.getElementById('menu__burger');

function menuBurger(event) {
    event.preventDefault()
    console.log(event)
        
    if(navMenu.className === 'menu') {
        navMenu.className += ' responsive';
    } else {
        navMenu.className = 'menu'
    }
}

document.getElementById('menu__burger').addEventListener('click', menuBurger)


// Close the dropdown if the user clicks outside of it




