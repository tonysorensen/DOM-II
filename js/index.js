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








    // let scale = 1;
//     img.addEventListener("wheel", () => {
//         //this prevents the wheel from scrolling the page when it is centered on the image
//         event.preventDefault();
//         //this sets the min and max of the image size
//         scale = Math.min(Math.max(.125, scale), .947);
//         //this sets the sensitivity of the scroll wheel
//         scale += event.deltaY * .001;
// img.style.transform = `scale(${scale})`;
//     } )
// })