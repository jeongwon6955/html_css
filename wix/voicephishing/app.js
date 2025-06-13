const btn = document.querySelector('#scroll1')
// console.log('btn')
btn.addEventListener('click', function() {
    const target = document.querySelector('.main')

    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

const topbtn = document.querySelector('.top-scroll')

topbtn.addEventListener('click', function() {
    const target = document.querySelector('.header')
    
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

//버튼 슬라이드
;
const slide = document.querySelector('.cases');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currenttarget = 0;

function slideshow(){
    slide.style.transform = `translateX(-${currenttarget * 450}px)`
};

next.addEventListener('click', function() {
    currenttarget++
    slideshow();
});

prev.addEventListener('click', function() {
    currenttarget--
    slideshow();
});