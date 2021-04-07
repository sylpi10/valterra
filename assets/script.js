const navbar = document.querySelector('.vertical');
const burger = document.querySelector('.burger-icon');

const onScroll = () => {
    if (window.scrollY > 300) {
        navbar.style.marginLeft = '-400px';
        navbar.style.opacity = '0.4';
        burger.style.opacity = '1';
    }else{
        navbar.style.marginLeft = '0';
        navbar.style.opacity = '1';
        // burger.style.marginLeft = '0';
    }
}

window.addEventListener('scroll', onScroll);
onScroll();

/*show hide menu*/
const menu = document.querySelector('.menu');
const nav = document.querySelector('#header-nav');
const body = document.querySelector('body')

burger.addEventListener('click', ()  => {
    // expand nav
    nav.classList.toggle('full-nav');
    // show menu
    menu.classList.toggle('show-menu');
    navbar.style.marginLeft = '0';
    navbar.style.opacity = '1';
    
    if (burger.classList.contains("fa-stream")) {
        burger.className = 'fas fa-times';
    }else{
        burger.className = "fas fa-stream burger-icon";
    }
      // disable scroll
    //   if (window.innerWidth > '992px') {
        body.classList.toggle('no-scroll');
    // }

});

//    if (window.innerWidth < '992px') {
//     body.classList.remove('no-scroll');
// }