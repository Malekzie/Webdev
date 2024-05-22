const imageFile = [
      {
            image: '../../../assets/images/index/travel1.jpg',
            alt: 'Morocco',
            name: 'Morocco'
      },
      {
            image: '../../../assets/images/index/travel2.jpg',
            alt: 'Saudi Arabia',
            name: 'Saudi Arabia'
      },
      {
            image: '../../../assets/images/index/travel3.jpg',
            alt: 'Syria',
            name: 'Syria'
      },
      {
            image: '../../../assets/images/index/travel4.jpg',
            alt: 'Jordan',
            name: 'Jordan'
      },
      {
            image: '../../../assets/images/index/travel5.jpg',
            alt: 'Yemen',
            name: 'Yemen'
      },
      {
            image: '../../../assets/images/index/travel6.jpg',
            alt: 'Egypt',
            name: 'Egypt'
      },
      {
            image: '../../../assets/images/index/travel7.jpg',
            alt: 'Lebanon',
            name: 'Lebanon'
      },
      {
            image: '../../../assets/images/index/travel8.jpg',
            alt: 'Iraq',
            name: 'Iraq'
      },
]

const imgStyle = 'rounded-lg h-auto w-[10rem] max-h-[500px]';
const nameStyle = 'text-center text-white text-lg font-bold my-8';


async function carouselItems() {
      let currentIndex = 0;
      const carousel = document.getElementById('carousel')

      // Preload images
      const images = imageFile.map(item => {
            const img = new Image();
            img.src = item.image;
            return img;
      });

      // Wait for all images to load
      await Promise.all(images.map(img => new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
      })));

      // Display the carousel within the file with innerHTML and createElement.
      // Do them accordingly and seperately to avoid confusion.
      // Display the carousel item
      // Set an interval to display the next carousel item every 3 seconds

      function displayCarouselItem() {
            carousel.innerHTML = ''; // Clear the carousel
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            carouselItem.innerHTML = `
              <img src="${imageFile[currentIndex].image}" alt="${imageFile[currentIndex].alt}" class="${imgStyle}">
              <p class="${nameStyle}">${imageFile[currentIndex].name}</p>
            `;
            carousel.appendChild(carouselItem);
          }
        
          // Display the first carousel item
          displayCarouselItem();
        
          // Set an interval to display the next carousel item every 3 seconds
          setInterval(function() {
            currentIndex = (currentIndex + 1) % imageFile.length; // Cycle through the images
            displayCarouselItem();
          }, 3000);

}
document.addEventListener('DOMContentLoaded', carouselItems);