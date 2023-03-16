const header = document.getElementById('header__main');

function scrollPage(event) {
    
   if (window.scrollY > 0 || window.scrollY === 0 && navMenu.classList.contains('responsive')) {
        header.classList.add('header__main--scroll')
        return 
    }
    header.classList.remove('header__main--scroll')   

    // if () {
    //     logo.classList.add('header__main--scroll')
    // } else {
    //     return
    // }
}


document.addEventListener('scroll', scrollPage);
