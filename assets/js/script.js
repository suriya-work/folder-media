// function for arrow
function goToPage() {
  window.location.href = "index.html"
}
// pagainttion

const link = document.getElementsByClassName('link');
const currentValue = 1;

function activeLink() {
  for (l of link) {
    l.classList.remove('active-numb');
  }

  event.target.classList.add('active-numb');
  currentValue = event.target.value;
}

function backBtn() {
  if (currentValue > 1) {
    for (l of link) {
      l.classList.remove('active-numb');
    }
    currentValue--;
    link[currentValue - 1].classList.add('active-numb');
  }
}

function nextBtn() {
  if (currentValue < 6) {
    for (l of link) {
      l.classList.remove('active-numb');
    }
    currentValue++;
    link[currentValue - 1].classList.add('active-numb');
  }
}


// swiper

const swiper = new Swiper(".card-slider", {
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

