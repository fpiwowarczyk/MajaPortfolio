

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

    console.log(containerHeight);
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
    console.log(scrollHeight);
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