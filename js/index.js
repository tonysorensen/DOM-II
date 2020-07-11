// Your code goes here
const subhead = document.querySelectorAll("h2");
subhead.forEach((subhead) => {
  subhead.addEventListener("mouseenter", () => {
    subhead.style.transform = "scale(1.25)";
    subhead.addEventListener("mouseleave", () => {
      subhead.style.transform = "scale(1)";
    });
  });
});

const body = document.querySelector("body");

body.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
  
  
});

const button = document.querySelector('.content-pick')
button.addEventListener("click", () => {
   button.style.backgroundColor = "red";
   event.stopPropagation();
})




const links = document.querySelectorAll("a");
links.forEach((links) => {
  links.addEventListener("mouseover", () => {
    links.style.color = "blue";
    links.style.fontSize = "2.5em";
  });
});

const img = document.querySelectorAll('img')
img.forEach((img) => { 
    img.addEventListener('contextmenu', ()=> {
        img.style.transform = "scale(.75)"
    })
})

window.addEventListener('load', () => {
    alert('Page has finished loading.')
})


const head = document.querySelector('.main-navigation')
body.addEventListener('keydown', () => {
    head.style.backgroundColor = "red";
    
})

body.addEventListener("wheel", () => {
    body.style.backgroundColor = "green"
})


const foot = document.querySelector('footer')
    foot.addEventListener('dblclick', (event) => {
       foot.style.backgroundColor = "purple"
})

//resize
window.addEventListener('resize', () => {
    alert('You have resized the window')
});


