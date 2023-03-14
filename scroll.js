const logo = document.getElementById('header__main');

function scrollPage(event) {
   if (window.scrollY > 0) {
        logo.classList.add('header__main--scroll')
        return 
    }
    logo.classList.remove('header__main--scroll')   
}


document.addEventListener('scroll', scrollPage);
