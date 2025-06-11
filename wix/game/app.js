const btn = document.querySelector('.toggle-btn')
const rotate = document.querySelector('.bar1')
const rotate1 = document.querySelector('.bar2')
const rotate2 = document.querySelector('.bar3')
const submenu = document.querySelector('.submenu')
const header = document.querySelector('.header-box1')
const subbtn = document.querySelector('.subbtn')
// console.log(header)
// console.log(rotate)

btn.addEventListener('click', function() {
    // console.log('hello')
    rotate.classList.toggle('show-bar1')
    rotate1.classList.toggle('show-bar2')
    rotate2.classList.toggle('show-bar3')
    btn.classList.toggle('show-toggle')
    header.classList.toggle('show-header-box1')
})


subbtn.addEventListener('click', function() {
    submenu.classList.toggle('show-submenu')
})