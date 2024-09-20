
let navbar = document.querySelector('#navbar'); 
let navLinks = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelectorAll('#logoNavbar');
let collapse = document.querySelector('#collapse');
let firstNumber = document.querySelector('#firstNumb');
let secondNumber = document.querySelector('#secondNumb');
let thirdNumber = document.querySelector('#thirdNumb');


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

function createInterval(n, element, interval) {
let counter = 0;
    let time = setInterval(()=>{
        
        if (counter < n) {
        counter++
        element.innerHTML = counter;
    
    }else{
        clearInterval(time)
    }
}, interval);


// Mi serve per far in modo che l' incremento riparta dopo 8sec dallo scorrere della Pagina - Utilizzando la variabile d' appoggio (confirm);
setTimeout(() => {
    confrim = true;
}, 8000);
    
};



 // Classe Pre-IMPOSTATA del Browser denominata:
 // IntersectionObserver: è una Classe del Browser che si occupa di far scattare un Evento/Funzione nel momento in cui sul Browser è visibile l'elemento HTML da NOI INDICATO!!

 let observer = new IntersectionObserver ( (entries)=>{
    entries.forEach( (entry) => {
        if(entry.isIntersecting && confirm){
            createInterval(100, firstNumber, 100);
            createInterval(200, secondNumber, 50);
            createInterval(300, thirdNumber, 30);
            confirm = false;
        }
    });
 });
 
 // new : serve per richimare le classi KEYWORD 


 // Questo metodo mi permette di utilizzare la variabile sopra creata ed utilizzare la funzione al suo interno!
 // tra le () metto il Parametro ovvero l'elemento per il quale la pagina esegue l'azione quando l' utente lo raggiunge 
 observer.observe(firstNumber);


//  Swiper - recenzioni


let reviews = [
    {user: 'Matteo', description: 'IL sito più bello del mondo', rank: 5},
    {user: 'Carlo', description: 'Brutto', rank: 1},
    {user: 'Francesca', description: 'Mediocre', rank: 3},
    {user: 'Alina', description: 'Meglio di altri', rank: 4},
]


let swiperWrapper = document.querySelector('.swiper-wrapper')
reviews.forEach( (recensione) => {
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `<div class= "card-review">
            <p class="lead text-center">${recensione.description}</p>
            <p class="h4 text-center">${recensione.user}</p>   
            <div class="d-flex justify-content-center star">
            
            </div> 
            </div>`;
    swiperWrapper.appendChild(div);
});
    
    let stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        for(let i = 1; i <= reviews[index].rank; i++ ){
            let icon = document.createElement('i');
            icon.classList.add('fa-solid', 'fa-star', 'fa-3x');
            star.appendChild(icon);
        }
        
        let difference =  5 - reviews[index].rank;
        for(let i = 1; i <= difference; i++ ){
            let icon = document.createElement('i');
            icon.classList.add('fa-regular', 'fa-star', 'fa-3x');
            star.appendChild(icon);
        }
        
        
    });
    
    
    
    




// initialize Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 2000,
    }
    
  
    
});