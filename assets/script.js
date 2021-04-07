const navbar = document.querySelector('nav');

const onScroll = () => {
    if (window.scrollY > 300) {
        console.log(window.scrollY);
        navbar.style.marginLeft = '-200px';
        navbar.style.opacity = '0.4';
    }else{
        navbar.style.marginLeft = '0';
        navbar.style.opacity = '1';
    }
}

window.addEventListener('scroll', onScroll);
onScroll();

/*show hide menu*/
const burger = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
burger.addEventListener('click', ()  => {
    menu.classList.toggle('show-menu');
    nav.classList.toggle('full-nav');
});