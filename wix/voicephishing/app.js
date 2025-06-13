const btn = document.querySelector('#scroll1')
const btn1 = document.querySelector('#scroll2')
// console.log('btn')
btn.addEventListener('click', function() {
    const target = document.querySelector('#main1')

    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

btn1.addEventListener('click', function() {
    const target = document.querySelector('#main2')

    target.scrollIntoView({
        behavior: 'smooth',
        black: 'start'
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
    slide.style.transform = `translateX(-${currenttarget * 445}px)`
};


next.addEventListener('click', function() {
    if(currenttarget < 2) {
        currenttarget++
    }
    if(currenttarget === 2) {
        next.style.visibility = 'hidden'
    }
    prev.style.visibility = 'visible'
    slideshow();
});

prev.addEventListener('click', function() {
    currenttarget--
    if(currenttarget === 0) {
      prev.style.visibility = 'hidden'   
    }
    next.style.visibility = 'visible'
    slideshow();
});

if(currenttarget === 0) {
    prev.style.visibility = 'hidden'
}