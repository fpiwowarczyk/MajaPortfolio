

/*===================================================
*
*                       NAVBAR
* 
*===================================================*/

// set date
const date = document.getElementById('date')

date.innerHTML = new Date().getFullYear();

//close kubjs 

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener("click",function(){
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    if(containerHeight===0){
        linksContainer.style.height =  `${linksHeight}px`;
    } else {
        linksContainer.style.height=0;
    }
});


//fixed navar

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight>navHeight){
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
    if(scrollHeight>500){
        topLink.classList.add('show-link'); 
    } else {
        topLink.classList.remove('show-link');
    }
});


const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){ // O tym mówie w trello
    link.addEventListener('click',function(e){
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        let containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        if(!fixedNav){
            position=position-navHeight;
        }
        if(navHeight>132){
            position=position+containerHeight;
        }
        window.scrollTo({
            left:0,
            top:position-50,
        });
        linksContainer.style.height=0;
    });
});

/*===================================================
*
*                       CANVAS
* 
*===================================================*/

var canvas = document.getElementById("canvas");
var ctx=canvas.getContext("2d");


window.addEventListener('DOMContentLoaded',init);

function init(){
    canvas.width = 1000;
    canvas.height = 1000;
    drawing = new Drawing();
    drawing.triangle(200,200,200,100,100,100,'rgb(255,165,0)');
    drawing.rectangle();
    drawing.circle();
}

class Drawing{


    rectangle(){
        ctx.beginPath();
        ctx.rect(500, 500, 150, 100);
        ctx.stroke();
    }
    circle(){
        ctx.beginPath();
        ctx.arc(300, 300, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }
    triangle(startX,startY,
            firstVertexX,firstVertexY,
            secondVertexX,secondVertexY,
            color){
        ctx.fillStyle=color;
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(firstVertexX,firstVertexY);
        ctx.lineTo(secondVertexX,secondVertexY);
        ctx.lineTo(startX,startY);
        ctx.fill();
    }
}

