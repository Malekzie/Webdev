
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