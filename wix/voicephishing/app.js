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
