'use strict';

function fnNext() {
  //Di default rimuovo la classe active al primo elemento
  domSlides[slideAttivaIndex].classList.remove('active');
  //Di default rimuovo la classe active-thumbnails al primo elemento
  domThumbnails[slideAttivaIndex].classList.remove('active-thumbnails');
  //se il contatore del NodeList è minore del num di elementi dei NodeList, crementa il contatore
  if (slideAttivaIndex < lunghDomSlides) {
    slideAttivaIndex++;
    //se il contatore supera il limite, torna da capo
  } else {
    slideAttivaIndex = 0;
  }
  domSlides[slideAttivaIndex].classList.add('active');
  console.log('next');
  console.log(`Immgine con 'active': domSlides[${slideAttivaIndex}]`);
  domThumbnails[slideAttivaIndex].classList.add('active-thumbnails');
  console.log(
    `Immgine con 'active-thumbnails': domThumbnails[${slideAttivaIndex}]`
  );
}

function fnPrev() {
  domSlides[slideAttivaIndex].classList.remove('active');
  domThumbnails[slideAttivaIndex].classList.remove('active-thumbnails');

  if (slideAttivaIndex > 0) {
    slideAttivaIndex--;
  } else {
    slideAttivaIndex = lunghDomSlides;
  }
  domSlides[slideAttivaIndex].classList.add('active');
  console.log('prev');
  console.log(`Immgine con 'active': domSlides[${slideAttivaIndex}]`);

  domThumbnails[slideAttivaIndex].classList.add('active-thumbnails');

  console.log(
    `Immgine con 'active-thumbnails': domThumbnails[${slideAttivaIndex}]`
  );
}

const arrayObjectCarousel = [
  {
    foto: '01.jpg',
    titolo: 'Model S',
    descrizione: 'Accelerazione 0-100 km/h: da 2,6 a 3,9 secondi',
  },
  {
    foto: '02.jpg',
    titolo: 'Model 3',
    descrizione: 'Accelerazione 0-100 km/h: da 3,3 a 6,1 secondi',
  },
  {
    foto: '03.jpg',
    titolo: 'Model X',
    descrizione: 'Accelerazione 0-100 km/h: da 2,6 a 3,9 secondi',
  },
  {
    foto: '04.jpg',
    titolo: 'Model Y',
    descrizione: 'Accelerazione 0-100 km/h: da 3,7 a 6,9 secondi',
  },
  {
    foto: '05.jpg',
    titolo: 'All Models',
    descrizione:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quas nihil.',
  },
];

// DICHIARAZIONE VARIABILI
const slider = document.querySelector('.items');
const contThumbnails = document.querySelector('.items-thumbnails');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const container = document.querySelector('.container');
const stop = document.querySelector('.stop');
const play = document.querySelector('.play');
const reverse = document.querySelector('.reverse');
const stato = document.querySelector('.stato');
const domStato = document.querySelectorAll('.stato-elem');

//dichiaro quale slide[i] deve avere la class 'active'
let slideAttivaIndex = 0;

//estrapolazione template
const templatePrinc = document.getElementById('template-princ');
const templateTN = document.getElementById('template-thumbnails');

/*
-------------------------
AGGIUNTA ELEMENTI ALL'HTML
-------------------------
 */

//AGGIUNTA DIV CON IMG
arrayObjectCarousel.forEach((element, index, arr) => {
  const itemElement = templatePrinc.content.cloneNode(true);

  itemElement.querySelector('img').src = `img/${element.foto}`;
  itemElement.querySelector('img').alt = `elemento ${index + 1}`;
  itemElement.querySelector('h3').textContent = element.titolo;
  itemElement.querySelector('.item div p').textContent = element.descrizione;

  //assegno la classe active all'elem con indice 0
  if (index === slideAttivaIndex) {
    itemElement.querySelector('.item').classList.add('active');
  }

  slider.append(itemElement);
});

//aggiungo gli elemen img a thumbnails
arrayObjectCarousel.forEach((element, index, arr) => {
  const itemThumbnails = templateTN.content.cloneNode(true);

  itemThumbnails.querySelector('img').src = `img/${element.foto}`;
  itemThumbnails.querySelector('img').alt = `elemento ${index + 1}`;

  //assegno la classe active all'elem con indice 0
  if (index === slideAttivaIndex) {
    itemThumbnails
      .querySelector('.elem-raccolta')
      .classList.add('active-thumbnails');
  }

  contThumbnails.append(itemThumbnails);
});

//prendo in considerazione tutti gli elementi con class 'item', i quali vanno a finire in una specie di 'array'
const domSlides = document.querySelectorAll('.item');
let lunghDomSlides = domSlides.length - 1;
//prendo in considerazione tutti gli elementi con class 'elem-raccolta', i quali vanno a finire in una specie di 'array'
const domThumbnails = document.querySelectorAll('.elem-raccolta');
let lunghDomThumbnails = domThumbnails.lenght - 1;

// AZIONI AL CLICK
next.addEventListener('click', fnNext);
prev.addEventListener('click', fnPrev);

/* 
---------------------
Al Click su un elemento del thumbails, mi mostra quell img
---------------------
*/
//Utilizzo un ciclo for per accedere a tutti gli elementi di domThumbnails, e per ognuno di essi, aggiungo un EventListener 'click'
for (let i = 0; i < domThumbnails.length; i++) {
  domThumbnails[i].addEventListener('click', function () {
    // Rimuovo la classe 'active' e 'active-thumbnails' con indice 0
    domSlides[slideAttivaIndex].classList.remove('active');
    domThumbnails[slideAttivaIndex].classList.remove('active-thumbnails');

    // Aggiungo la classe 'active-thumbnails' all'elemento cliccato
    domThumbnails[i].classList.add('active-thumbnails');

    // Aggiorno il contatore degli indici delle slide attive con il contatore i del ciclo for
    slideAttivaIndex = i;

    //Aggiungo e rimuovo 'active' agli item del carosello
    domSlides[slideAttivaIndex].classList.remove('active');
    domSlides[slideAttivaIndex].classList.add('active');

    //stampe in console.log
    console.log(`Hai cliccato sull'elemento: thumbnails[${i}]`);
  });
}

// AUTOPLAY INIZIALE
let autoplay = setInterval(autoplayNext, 3_000);

function autoplayNext() {
  //Di default rimuovo la classe active al primo elemento
  domSlides[slideAttivaIndex].classList.remove('active');
  //Di default rimuovo la classe active-thumbnails al primo elemento
  domThumbnails[slideAttivaIndex].classList.remove('active-thumbnails');

  //se il contatore del NodeList è minore del num di elementi dei NodeList, incrementa il contatore
  if (slideAttivaIndex < lunghDomSlides) {
    slideAttivaIndex++;

    //se il contatore supera il limite, torna da capo
  } else {
    slideAttivaIndex = 0;
  }

  domSlides[slideAttivaIndex].classList.add('active');

  console.log(`Immgine attiva: ${slideAttivaIndex + 1}`);

  domThumbnails[slideAttivaIndex].classList.add('active-thumbnails');
}

let myFnNext;
let autoplayActive = false;
let varStato = '';
play.addEventListener('click', function () {
  //condizione per non far attivare una seconda volta il setInterval
  if (!autoplayActive) {
    clearInterval(autoplay);
    myFnNext = setInterval(autoplayNext, 3_000);
    autoplayActive = true;
    varStato = 'play';
    domStato[0].classList.remove('stato-active');
    domStato[2].classList.remove('stato-active');
    domStato[1].classList.add('stato-active');
    console.log('Avviato autoplay');
  } else {
    console.log('Non puoi cliccare di nuovo!');
  }
});
reverse.addEventListener('click', function () {
  clearInterval(myFnNext);
  myFnNext = setInterval(fnPrev, 3_000);
  domStato[0].classList.remove('stato-active');
  domStato[1].classList.remove('stato-active');
  domStato[2].classList.add('stato-active');
  console.log('Avviato reverse');
});
stop.addEventListener('click', function () {
  domStato[1].classList.remove('stato-active');
  domStato[2].classList.remove('stato-active');
  domStato[0].classList.add('stato-active');
  console.log('Autoplay STOP');
  autoplayActive = false;

  clearInterval(autoplay);
});
