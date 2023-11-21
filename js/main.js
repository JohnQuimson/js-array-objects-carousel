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
