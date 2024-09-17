
let navbar = document.querySelector('#navbar'); 
let navLinks = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelectorAll('#logoNavbar');
let collapse = document.querySelector('#collapse');
let firstNumber = document.querySelector('#firstNumb');
let secondNumber = document.querySelector('#secondNumb');
let thirdNumber = document.querySelector('#thirdNumb');
let swiperWrapper = document.querySelector('.swiper-wrapper')

let confirm = true;
let check = false;

window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    
    if(scrolled > 0){
        navbar.classList.remove('bg-green');
        navbar.classList.add('bg-red');
        collapse.classList.remove('bg-green');
        collapse.classList.add('bg-red');
        navbar.style.height = '70px';
       
            logoNavbar.src = ''; 
            
        }else{
            navbar.classList.add('bg-green');
            navbar.classList.remove('bg-red');
            collapse.classList.add('bg-green');
            collapse.classList.remove('bg-red');
            
                navbar.style.height = '140px';
            }
            
        });
        
let lightSaber = document.querySelector('#lightSaber');
let spada = document.querySelector('#spada');
        
lightSaber.addEventListener('click', ()=> {
    if ( check == false){
        spada.classList.add('d-none');
        lightSaber.style.transform = 'rotate(-70deg)';
        lightSaber.style.filter = 'brightness(300%)';
        check = true;
    }else{
        spada.classList.remove('d-none');
        lightSaber.style.transform = 'rotate(+0)';
        lightSaber.style.filter = 'brightness(100%)';
        check = false;
    }

});




