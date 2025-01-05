const tabMenuContainer = document.querySelector(".tab-menu");
const swiperContainers = document.querySelectorAll(".swiper");
const swipers = [];

// Inicialize os Swipers
swiperContainers.forEach((swiperContainer) => {
  const swiperInstance = new Swiper(swiperContainer, {
    pagination: {
      el: swiperContainer.querySelector(".swiper-pagination"),
      clickable: true,
    },
    navigation: {
      nextEl: swiperContainer.querySelector(".swiper-button-next"),
      prevEl: swiperContainer.querySelector(".swiper-button-prev"),
    },
    breakpoints: {
      
      1400: {
        slidesPerView: 3.1,
      },
      1200: {
        slidesPerView: 2.5,
      },
      1000: {
        slidesPerView: 2.2,
      },
      700: {
        slidesPerView: 1.5,
      },
      0: {
        spaceBetween: 20,
        slidesPerView: 1.2,
      }
    },
  });
  swipers.push(swiperInstance);
});

const buttonNext = document.querySelector(".buttons-left-right .right")
const buttonPrev = document.querySelector(".buttons-left-right .left")

function nextPrevModal(classSwiper){
  const swiper = document.querySelector(`.swiper.${classSwiper}`)

  buttonNext.addEventListener("click", () => {
    swiper.querySelector(".swiper-button-next").click()
  })

  buttonPrev.addEventListener("click", () => {
    swiper.querySelector(".swiper-button-prev").click()
  })
}
document.querySelectorAll(".swiper").forEach((el) => {
  if(!el.classList.contains("hidden")){
    buttonNext.addEventListener("click", () => {
      el.querySelector(".swiper-button-next").click()
    })
    buttonPrev.addEventListener("click", () => {
      el.querySelector(".swiper-button-prev").click()
    })
  }
})

function setActiveButton(clickedButton) {
  document.querySelectorAll(".tab-menu button").forEach((button) => {
    button.classList.toggle("active", button === clickedButton);
  });
}

function toggleVisibility(targetClass) {
  swiperContainers.forEach((swiper) => {
    swiper.classList.toggle("hidden", !swiper.classList.contains(targetClass));
  });

  // Atualize o Swiper visível para garantir funcionalidade
  const activeSwiper = swipers.find(
    (swiperInstance) =>
      swiperInstance.el.classList.contains(targetClass) && 
      !swiperInstance.el.classList.contains("hidden")
  );
  if (activeSwiper) {
    activeSwiper.update();
  }
}

tabMenuContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const clickedButton = event.target;
    setActiveButton(clickedButton);
    toggleVisibility(clickedButton.innerText.trim().toLowerCase());
    nextPrevModal(clickedButton.innerText.trim().toLowerCase())
  }
});


const menuMobile = document.querySelector(".desktopHidden")


document.querySelectorAll(".menuActive").forEach((el) => {
  el.addEventListener("click", () => {
    menuMobile.classList.toggle("active")
  })
})
