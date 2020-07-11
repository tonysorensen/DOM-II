// Your code goes here

// 1 & 2 mouse enter and leave
const subhead = document.querySelectorAll("h2");
subhead.forEach((subhead) => {
  subhead.addEventListener("mouseenter", () => {
    subhead.style.transform = "scale(1.25)";
    subhead.addEventListener("mouseleave", () => {
      subhead.style.transform = "scale(1)";
    });
  });
});

// 3 mouse click & stop propagatiion
const body = document.querySelector("body");

body.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
  
  
});

const button = document.querySelector('.content-pick')
button.addEventListener("click", () => {
   button.style.backgroundColor = "red";
   event.stopPropagation();
})

// 4 double click
const foot = document.querySelector('footer')
    foot.addEventListener('dblclick', (event) => {
       foot.style.backgroundColor = "purple"
})

// 5 mouseover
const links = document.querySelectorAll("a");
links.forEach((links) => {
  links.addEventListener("mouseover", () => {
    links.style.color = "blue";
    links.style.fontSize = "2.5em";
    event.preventDefault();
  });
});

// 6 right mouse click
const img = document.querySelectorAll('img')
img.forEach((img) => { 
    img.addEventListener('contextmenu', ()=> {
        img.style.transform = "scale(.75)"
    })
})

//7 on page load
window.addEventListener('load', () => {
    alert('Page has finished loading.')
})

// 8 keydown
const head = document.querySelector('.main-navigation')
body.addEventListener('keydown', () => {
    head.style.backgroundColor = "red";
    
})

// 9 scroll wheel
body.addEventListener("wheel", () => {
    body.style.backgroundColor = "green"
})

// 10 resize window
window.addEventListener('resize', () => {
    alert('You have resized the window')
});


