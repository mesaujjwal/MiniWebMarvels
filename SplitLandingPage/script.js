// const container = document.querySelector('.container')

// window.addEventListener('mousemove', expand)

// function expand(e) {

//     if(e.clientX > window.innerWidth/2) {
//         container.classList.remove('hover-left')
//         container.classList.add('hover-right')
//     } else {
//         container.classList.remove('hover-right')
//         container.classList.add('hover-left')
//     }
 
// }

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', ()=> container.classList.add('hover-left'))
left.addEventListener('mouseleave', ()=> container.classList.remove('hover-left'))

right.addEventListener('mouseenter', ()=> container.classList.add('hover-right'))
right.addEventListener('mouseleave', ()=> container.classList.remove('hover-right'))
