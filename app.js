const section = document.querySelectorAll('section');
const navLink = document.querySelectorAll('header nav a');

window.onscroll=()=>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top>=offset && top< offset + height) {
            navLink.forEach(links=> {
                links.classLis.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    });

    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY>100);

    menubar.classList.remove('bx-x');
    navbar.classList.remove('acive');
};

let menubar = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menubar.onclick= ()=>{
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// var type= new Typed('.textline',{
//     strings:['Frontend Devloper', 'Blogger', 'Youtuber'],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:100,
//     loop:true
// });