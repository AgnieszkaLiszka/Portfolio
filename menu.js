function menuBurger(event) {
    event.preventDefault()
    console.log(event)
    const navMenu = document.getElementById('menu__nav');
    
    if(navMenu.className === 'menu') {
        navMenu.className += ' responsive';
    } else {
        navMenu.className = 'menu'
    }
}

document.getElementById('menu__burger').addEventListener('click', menuBurger)




