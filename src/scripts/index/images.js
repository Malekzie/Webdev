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

const imgStyle = 'rounded-lg h-auto w-[12rem] hover:scale-110';
const nameStyle = 'text-center text-white text-lg font-bold mb-3';


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

      // Function to display a carousel item
      function displayCarouselItem() {
            if (carousel.children.length >= 3) {
                  carousel.children[0].classList.add('translate-x-full', 'opacity-0');
                  setTimeout(() => carousel.removeChild(carousel.children[0]), 1000);
            }

            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item', 'transform', 'transition-transform', 'duration-300', 'transition-opacity', 'duration-300', 'w-48', 'h-auto', 'mr-4');
            carouselItem.innerHTML = `
            <p class="${nameStyle}">${imageFile[currentIndex].name}</p>
              <img src="${imageFile[currentIndex].image}" alt="${imageFile[currentIndex].alt}" class="${imgStyle}">
            `;
            carousel.appendChild(carouselItem);
      }
      // Set an interval to display the next carousel item every 3 seconds
      setInterval(function () {
            currentIndex = (currentIndex + 1) % imageFile.length; // Cycle through the images
            displayCarouselItem();
      }, 3000);

      // Display the first three carousel items
      for (let i = 0; i < 3; i++) {
            displayCarouselItem();
            currentIndex = (currentIndex + 1) % imageFile.length;
      }

}

window.onload = carouselItems;