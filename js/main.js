'use strict';

const arrayImages = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const slider = document.querySelector('.items');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const container = document.querySelector('.container');
const stop = document.querySelector('.stop');
const play = document.querySelector('.play');

//dichiaro quale slide[i] deve avere la class 'active'
let slideAttivaIndex = 0;

/*
-------------------------
AGGIUNTA ELEMENTI ALL'HTML
-------------------------
 */

//AGGIUNTA DIV CON IMG
for (let i = 0; i < arrayImages.length; i++) {
  const elementSlide = document.createElement('div');
  elementSlide.classList.add('item');

  if (i === slideAttivaIndex) {
    elementSlide.classList.add('active');
  }

  const elementImg = document.createElement('img');
  elementImg.src = `img/${arrayImages[i]}`;
  elementImg.alt = `img ${arrayImages[i + 1]}`;

  slider.append(elementSlide);
  elementSlide.append(elementImg);
}
//AGGIUNTA THUMBNAILS
//creo un elemento div con classe raccolta-thumbnails dentro container
const raccoltaThumbnailsDiv = document.createElement('div');
raccoltaThumbnailsDiv.classList.add('raccolta-thumbnails');

//aggiungo il div al container
container.append(raccoltaThumbnailsDiv);

//dichiaro una variabile in cui estraggo raccolta-thumbnails
const raccoltaTn = document.querySelector('.raccolta-thumbnails');

//aggiungo gli elemen img
for (let i = 0; i < arrayImages.length; i++) {
  const elementThumbnails = document.createElement('div');
  elementThumbnails.classList.add('elem-raccolta');

  if (i === slideAttivaIndex) {
    elementThumbnails.classList.add('active-thumbnails');
  }

  const elementImgRaccolta = document.createElement('img');
  elementImgRaccolta.src = `img/${arrayImages[i]}`;
  elementImgRaccolta.alt = `img ${arrayImages[i + 1]}`;

  raccoltaTn.append(elementThumbnails);
  elementThumbnails.append(elementImgRaccolta);
}

//prendo in considerazione tutti gli elementi con class 'item', i quali vanno a finire in una specie di 'array'
const domSlides = document.querySelectorAll('.item');
let lunghDomSlides = domSlides.length - 1;
//prendo in considerazione tutti gli elementi con class 'elem-raccolta', i quali vanno a finire in una specie di 'array'
const domThumbnails = document.querySelectorAll('.elem-raccolta');
let lunghDomThumbnails = domThumbnails.lenght - 1;

/*
-------------------------
Azioni al click del pulsante next
-------------------------
 */
next.addEventListener('click', function () {
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
});

/*
-------------------------
Azioni al click del pulsante prev
-------------------------
 */
prev.addEventListener('click', function () {
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
});

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
play.addEventListener('click', function () {
  //condizione per non far attivare una seconda volta il setInterval
  if (!autoplayActive) {
    myFnNext = setInterval(autoplayNext, 3_000);
    autoplayActive = true;
    console.log('Avviato autoplay');
  } else {
    console.log('Non puoi cliccare di nuovo!');
  }
});
stop.addEventListener('click', function () {
  console.log('Autoplay STOP');
  autoplayActive = false;
  clearInterval(myFnNext);
});
