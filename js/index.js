// Your code goes here
const image = document.getElementsByTagName('img')
image[0].addEventListener('mouseenter', () => {
    image[0].style.transform = 'scale(1.15)'
})


image[0].addEventListener('mouseleave', () => {
    image[0].style.transform = 'scale(1)'
})


const body = document.querySelector('body')

body.addEventListener('click', () => {
    body.style.backgroundColor = "yellow"
    
})

const links = document.querySelectorAll('a')
links.forEach(links => {
    links.addEventListener('mouseover', () => {
    links.style.color = 'blue'
    links.style.fontSize = '2.5em'
})
})
