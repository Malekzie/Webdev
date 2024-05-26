const imagesFile = [
      {
            src: '../../../assets/images/index/travel1.jpg',
            alt: 'Morocco',
            name: 'Morocco',
            description: 'Morocco is a country located in North Africa, it has a population of over 36 million people and is known for its rich culture and history. The country is home to the Atlas Mountains, the Sahara Desert, and the Mediterranean Sea. The country is a popular tourist destination, attracting millions of visitors each year who come to explore its ancient ruins, stunning landscapes, and vibrant cities.'
      },
      {
            src: '../../../assets/images/index/travel2.jpg',
            alt: 'Saudi Arabia',
            name: 'Saudi Arabia',
            description: 'Saudi Arabia is a country located in the Middle East, it is known for its vast deserts, ancient ruins, and rich culture. The country is home to the two holiest cities in Islam, Mecca and Medina, and is a popular destination for Muslim pilgrims. Saudi Arabia is also home to the world\'s largest oil reserves, making it one of the wealthiest countries in the world.'
      },
      {
            src: '../../../assets/images/index/travel3.jpg',
            alt: 'Syria',
            name: 'Syria',
            description: 'Syria is a country located in the Middle East, it is known for its ancient ruins, stunning landscapes, and rich history. The country is home to some of the oldest cities in the world, including Damascus and Aleppo, and is a popular destination for history buffs and archaeology enthusiasts. Syria is also home to a diverse range of cultures and religions, making it a fascinating place to visit.'
      },
      {
            src: '../../../assets/images/index/travel4.jpg',
            alt: 'Jordan',
            name: 'Jordan',
            description: 'Jordan is a country located in the Middle East, it is known for its ancient ruins, stunning landscapes, and rich history. The country is home to the famous archaeological site of Petra, as well as the Dead Sea, the lowest point on Earth. Jordan is also home to a diverse range of cultures and religions, making it a fascinating place to visit.'
      },
      {
            src: '../../../assets/images/index/travel5.jpg',
            alt: 'Yemen',
            name: 'Yemen',
            description: 'Yemen is a country located in the Middle East, it is known for its ancient ruins, stunning landscapes, and rich history. The country is home to the historic city of Sana\'a, which is a UNESCO World Heritage Site. Yemen is also known for its unique architecture, including its towering mud-brick skyscrapers. Despite its challenges, Yemen offers a glimpse into a rich and vibrant culture.'
      },
      {
            src: '../../../assets/images/index/travel6.jpg',
            alt: 'Egypt',
            name: 'Egypt',
            description: 'Egypt is a country located in North Africa, it is known for its ancient ruins, stunning landscapes, and rich history. The country is home to the famous pyramids of Giza, the Sphinx, and the Nile River. Egypt is also home to a diverse range of cultures and religions, making it a fascinating place to visit.'
      },
      {
            src: '../../../assets/images/index/travel7.jpg',
            alt: 'Lebanon',
            name: 'Lebanon',
            description: 'Lebanon is a country located in the Middle East, it is known for its ancient ruins, stunning landscapes, and rich history. The country is home to the famous archaeological site of Baalbek, as well as the vibrant capital city of Beirut. Lebanon is also known for its delicious cuisine, diverse culture, and warm hospitality, making it a popular destination for tourists.'
      },
      {
            src: '../../../assets/images/index/travel8.jpg',
            alt: 'Iraq',
            name: 'Iraq',
            description: 'Iraq is a country located in the Middle East, it is known for its ancient ruins, stunning landscapes, and rich history. The country is home to the ancient city of Babylon, which was once one of the greatest cities in the world. Iraq is also known for its diverse cultural heritage, including its contributions to art, literature, and science. Despite its challenges, Iraq offers a unique and fascinating experience for travelers.'
      },
      {
            src: '../../../assets/images/index/travel9.jpg',
            alt: 'Iran',
            name: 'Iran',
            description: 'Iran is a country located in the Middle East, it is known for its ancient ruins, stunning landscapes, and rich history. The country is home to the ancient city of Persepolis, which was once the capital of the Persian Empire. Iran is also known for its vibrant culture, delicious cuisine, and warm hospitality. From the bustling streets of Tehran to the serene beauty of Isfahan, Iran offers a unique and unforgettable experience for travelers.'
      },

]


// Image Gallery
const carouselStyle = 'relative h-[100vh] -mt-12 overflow-hidden';





// Carousel
// Logic
const nextBtn = document.getElementById('next'),
      prevBtn = document.querySelector('.prev'),
      carousel = document.querySelector('.carousel'),
      list = document.querySelector('.list'),
      item = document.querySelectorAll('.item'),
      runningTime = document.querySelector('.timeRunning');


let timeRunning = 3000;
let timeAutoNext = 7000;

nextBtn.onclick = () => {
      showSlider('next')
}

prevBtn.onclick = () => {
      showSlider('prev')
}

let runTimeout
let runNextAuto = setTimeout(() => {
      nextBtn.click();
}, timeAutoNext)

function resetTimeAnimation() {
      runningTime.style.animation = 'none';
      runningTime.offsetHeight;
      runningTime.style.animation = null;
      runningTime.style.animation = 'run 7s linear 1 forwards';
}

function showSlider(type) {
      let sliderItemsDom = document.querySelectorAll('.carousel .list .item');
      if (type === 'next') {
            list.appendChild(sliderItemsDom[0])
            carousel.classList.add('next');
      } else {
            list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
            carousel.classList.add('prev');
      }

      // Clears timeout, allowing the carousel to run manually without interference
      clearTimeout(runTimeout);
      runTimeout = setTimeout(() => {
            carousel.classList.remove('next');
            carousel.classList.remove('prev');
      }, timeRunning)

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
            nextBtn.click();
      }, timeAutoNext)

      
      resetTimeAnimation();
}

resetTimeAnimation();