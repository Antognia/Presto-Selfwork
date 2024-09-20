let opener = document.querySelector('.opener');
let circle = document.querySelector('.circle');

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

teachers.forEach((teacher) => {
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${teacher.url})`;
    circle.appendChild(div);
});

let movedDivs = document.querySelectorAll('.moved');
let check = false;
let flipCard = document.querySelector('.flip-card');

opener.addEventListener('click', () => {
    if (!check) {
        movedDivs.forEach((moved, i) => {
            opener.style.transform = 'rotate(45deg)';
            let angle = (360 * i) / movedDivs.length;
            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
        });
        check = true;
    } else {
        movedDivs.forEach((moved) => {
            opener.style.transform = '';
            moved.style.transform = '';
            flipCard.classList.add('d-none');
        });
        check = false;
    }
});

let innerFace = document.querySelector('.inner-face');
let cardName = document.querySelector('#cardName');
let cardDescription = document.querySelector('#cardDescription');

movedDivs.forEach((moved, i) => {
    moved.addEventListener('click', () => {
        flipCard.classList.remove('d-none');
        let docente = teachers[i];
        innerFace.style.backgroundImage = `url(${docente.url})`;
        cardName.innerHTML = docente.name;
        cardDescription.innerHTML = docente.description;
    });
});
