// Variabili Catturate
let opener = document.querySelector('.opener');
let circle = document.querySelector('.circle');

// Mi creo un Array di Docenti così da facilitarmi le cose

// Array Teachers 
let teachers = [
    {
        name: 'Matteo', description : 'Docente Frontend', url: './immagini/teacher_photo.jpeg'
    },
    
    {
        name: 'Davide', description : 'Docente Frontend', url: './immagini/foto-profilo-attrice.webp'
    },
    
    {
        name: 'Marco', description : 'Docente Frontend', url: './immagini/teacher_photo.jpeg'
    },
    
    {
        name: 'Luca', description : 'Docente Frontend', url: './immagini/foto-profilo-attrice.webp'
    },
];

// Voglio eliminate i moved da HTML ed inserirli in javascript così che mi si allaccino ad ogni oggetto dell' Array 
teachers.forEach((teacher) => {
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${teacher.url})`;
    circle.appendChild(div);
    // Il Wrapper deve essere SEMPRE DATO AL PADRE dell' elemneto in cui è contenuto (in questo caso circle)
    
});



// Cattura dei nuovi 'div' creati - NON POSSO METTRLO PRIMA ALRIMENTI NON FUNZIONA - 
let movedDivs = document.querySelectorAll('.moved');

// Variabile di controllo 
let check = false;

let flipCard = document.querySelector('.flip-card');


opener.addEventListener('click', ()=> {

    if (check == false){
        movedDivs.forEach((moved, i) => {    
            opener.style.transform = 'rotate(45deg)';
            // Creo la variabile angle perchè mi consente di lavorare con + chiarezza;
            let angle = (360 * i)/ movedDivs.length; // Ho reso dinamici i pallini e differenziati su 4 angoli. 
            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`; // Durante il posizionamento, aggiungiamo un'ulteriore rotazione per mantenere orientati i div correttamente
             // al translate devo aggiungere rotate

        });
        check = true;
    }else{
        movedDivs.forEach((moved, ) => {
            opener.style.transform = '';
            moved.style.transform = ``; 
            flipCard.classList.add('d-none');
        });
        check = false;

    }


});

let innerFace = document.querySelector('.inner-face');
let cardName = document.querySelector('#cardName');
let cardDescription = document.querySelector('#cardDescription')

// I MovedDivs hanno in comune l' indice quindi utilizzalo 

movedDivs.forEach((moved, i) => {
    moved.addEventListener('click', () =>{
        flipCard.classList.remove('d-none');
        let docente = teachers[i]; // Attravesro la variabile mi risulta + facile scrivere ed accedere al codice;
       innerFace.style.backgroundImage = `url(${docente.url})`;
       cardName.innerHTML = docente.name;
       cardDescription.innerHTML = docente.description;
    });
});


