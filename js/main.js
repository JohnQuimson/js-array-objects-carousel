'use strict';

const arrayObjectCarousel = [
  {
    foto: '01.jpg',
    titolo: 'Titolo 1',
    descrizione:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quas nihil, eveniet omnis illo repudiandae incidunt consequuntur aliquam doloremque, beatae nostrum cumque facere natus perspiciatis architecto odio consequatur ut reprehenderit.',
  },
  {
    foto: '02.jpg',
    titolo: 'Titolo 2',
    descrizione:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quas nihil, eveniet omnis illo repudiandae incidunt consequuntur aliquam doloremque, beatae nostrum cumque facere natus perspiciatis architecto odio consequatur ut reprehenderit.',
  },
  {
    foto: '03.jpg',
    titolo: 'Titolo 3',
    descrizione:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quas nihil, eveniet omnis illo repudiandae incidunt consequuntur aliquam doloremque, beatae nostrum cumque facere natus perspiciatis architecto odio consequatur ut reprehenderit.',
  },
  {
    foto: '04.jpg',
    titolo: 'Titolo 4',
    descrizione:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quas nihil, eveniet omnis illo repudiandae incidunt consequuntur aliquam doloremque, beatae nostrum cumque facere natus perspiciatis architecto odio consequatur ut reprehenderit.',
  },
  {
    foto: '05.jpg',
    titolo: 'Titolo 5',
    descrizione:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quas nihil, eveniet omnis illo repudiandae incidunt consequuntur aliquam doloremque, beatae nostrum cumque facere natus perspiciatis architecto odio consequatur ut reprehenderit.',
  },
];
let slideAttivaIndex = 0;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

// STAMPA IN CONSOLE
const arrayLength = arrayObjectCarousel.length;

for (let i = 0; i < arrayLength; i++) {
  const singleElement = arrayObjectCarousel[i];

  console.log(`Element ${i + 1}`);

  for (let key in singleElement) {
    console.log(`${key}: ${singleElement[key]}`);
  }

  if (!(i === arrayLength - 1)) {
    console.log(``);
  }
}

//estrapolo ul
const raccoglitore = document.querySelector('.raccoglitore');

/*
clone element
*/

const templateCarousel = document.getElementById('carousel-template');

for (let i = 0; i < arrayLength; i++) {
  const singleElement = arrayObjectCarousel[i];

  const liElement = templateCarousel.content.cloneNode(true);

  liElement.querySelector('.item .photo img').src = `img/${singleElement.foto}`;
  liElement.querySelector('.item .photo img').alt = singleElement.titolo;

  liElement.querySelector('.item .name').innerText = singleElement.titolo;

  liElement.querySelector('.item .role').innerText = singleElement.descrizione;

  //assegno la classe active all'elem con indice 0
  if (i === slideAttivaIndex) {
    liElement.querySelector('.item').classList.add('active');
  }

  raccoglitore.append(liElement);
}

const domSlides = document.querySelectorAll('.item');
console.log(domSlides);

/*
-------------------------
Azioni al click del pulsante next
-------------------------
 */
next.addEventListener('click', function () {
  //Di default rimuovo la classe active al primo elemento
  domSlides[slideAttivaIndex].classList.remove('active');
  //Di default rimuovo la classe active-thumbnails al primo elemento
  // domThumbnails[slideAttivaIndex].classList.remove('active-thumbnails');
  //se il contatore del NodeList è minore del num di elementi dei NodeList, crementa il contatore
  if (slideAttivaIndex < domSlides.length - 1) {
    slideAttivaIndex++;
    //se il contatore supera il limite, torna da capo
  } else {
    slideAttivaIndex = 0;
  }
  domSlides[slideAttivaIndex].classList.add('active');
  console.log('next');
  console.log(`Immgine con 'active': domSlides[${slideAttivaIndex}]`);
  // domThumbnails[slideAttivaIndex].classList.add('active-thumbnails');
  console.log(
    `Immgine con 'active-thumbnails': domThumbnails[${slideAttivaIndex}]`
  );
});
