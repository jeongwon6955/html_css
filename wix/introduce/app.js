const head = document.querySelector('.header');
let currentscroll = 0;

window.addEventListener('scroll', function() {
    const currentscroll = window.pageYOffset
    if(currentscroll > 100) {
        head.classList.add('show-header')
    }else if(currentscroll === 0) {
        head.classList.remove('show-header')
    }
})