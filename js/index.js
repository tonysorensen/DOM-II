// Your code goes here
const subhead = document.querySelectorAll('h2')
subhead.forEach(subhead => {
    subhead.addEventListener('mouseenter', (event) => {
        subhead.style.transform = 'scale(1.25)'
    subhead.addEventListener('mouseleave', () => {
        subhead.style.transform = 'scale(1)'
        
})
    })

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
