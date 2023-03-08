const logo = document.getElementById('header__main');

function scrollPage(event) {

   if (window.scrollY > 0) {
        document.getElementById('header__main').classList.add('header__main--scroll')
        return 
    }
    document.getElementById('header__main').classList.remove('header__main--scroll')   
}


document.addEventListener('scroll', scrollPage);
