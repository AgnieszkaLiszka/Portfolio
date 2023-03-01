function menuBurger() {
    let x = document.getElementById('menu__burger');
    if(x.className === 'menu') {
        x.className += ' responsive';
    } else {
        x.className = 'menu'
    }
}

document.getElementById('menu__burger').addEventListener('click', menuBurger)



