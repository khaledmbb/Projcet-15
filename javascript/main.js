/* Start Header */

const myBtns = document.querySelectorAll("button");

myBtns.forEach((b) => {
  b.onclick = function () {
    b.style.cssText = "animation:zoomOutLeft; animation-duration: 1s;";
    setTimeout(() => {
      location.href = "https://www.instagram.com/khaled_mbb/";
      b.style.display = "none";
    }, 1000);
  };
});

let logo = (document.querySelector("header img").onclick = () => {
  location.reload();
});

/* Start Sticky Header */

const header = document.querySelector("header");

/* End Sticky Header */

let headerLinks = document.querySelectorAll("header .links ul li");

headerLinks.forEach((el) => {
  el.onclick = () => {
    document.querySelector(el.dataset.go).scrollIntoView({
      behavior: "smooth",
    });
    headerLinks.forEach((e) => {
      e.classList.remove("active");
    });
    el.classList.add("active");
  };
});

let section = document.querySelector("section");
let sectionOne = document.querySelector(".section-one");
let sectionTwo = document.querySelector(".section-one");
let sectionThree = document.querySelector(".section-three");
let sectionFour = document.querySelector(".section-four");
let sectionFive = document.querySelector(".section-five");
let sectionSix = document.querySelector(".section-six");
let sectionSeven = document.querySelector(".section-seven");
let sectionEight = document.querySelector(".section-eight");
let sectionNine = document.querySelector(".section-nine");

/* End Header */

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* Start Sections */

/* Start Section Two */

let shuffle = document.querySelectorAll("section .section-two .shuffle ul li");
let shuffleImg = document.querySelectorAll(
  "section .section-two .gallery .image"
);

shuffle.forEach((element) => {
  element.onclick = () => {
    shuffle.forEach((el) => {
      el.classList.remove("active");
    });
    element.classList.add("active");
    shuffleImg.forEach((e) => {
      e.style.display = "none";
    });
    document.querySelectorAll(element.dataset.work).forEach((end) => {
      end.style.display = "block";
    });
  };
});

/* End Section Two */

/* Start Section three */

/* Start Slider */

let slideBox = document.querySelectorAll(".section-three .box");
let slideBtns = document.querySelectorAll(".section-three .btns .button");
let currentSlide = 1;

let manualNav = function (manual) {
  slideBox.forEach((slideBo) => {
    slideBo.classList.remove("activeBox");
    slideBtns.forEach((slideBtn) => {
      slideBtn.classList.remove("activeBox");
    });
  });

  slideBox[manual].classList.add("activeBox");
  slideBtns[manual].classList.add("activeBox");
};

slideBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

let repeat = function (activeBoxClass) {
  let activeBox = document.getElementsByClassName("activeBox");
  let i = 1;
  let repeater = () => {
    setTimeout(() => {
      [...activeBox].forEach((removeActive) => {
        removeActive.classList.remove("activeBox");
      });
      slideBox[i].classList.add("activeBox");
      slideBtns[i].classList.add("activeBox");
      i++;
      if (slideBox.length == i) {
        i = 0;
      }
      if (i >= slideBox.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();

/* Start Slider */

/* End Section three */

/* Start Section Six */

let myNumAdd = document.querySelectorAll(".section-eight .box h2");
let onTime = false;

window.addEventListener("scroll", () => {
  if (this.scrollY >= sectionFive.offsetTop + 400) {
    if (!onTime) {
      myNumAdd.forEach((element) => {
        let maxNum = element.dataset.num;
        let startAdd = setInterval(() => {
          element.textContent++;
          if (element.textContent == maxNum) {
            clearInterval(startAdd);
          }
        }, 1);
      });
      onTime = true;
    }
  }
});

/* End Section eight */

let myForm = document.querySelector("form");
let inputN = document.querySelector("form #name");
let inputE = document.querySelector("form #email");
let validT = document.querySelector(".invalid h2");
let valid = document.querySelector(".invalid");

myForm.onsubmit = (e) => {
  if (inputN.value === "") {
    e.preventDefault();
    validT.innerHTML = "write a valid name";
    valid.style.left = "0";
  } else if (inputN.value.length > 20) {
    e.preventDefault();
    validT.innerHTML = "the name should be less than 20 character";
    valid.style.left = "0";
  } else if (inputE.value.length > 40) {
    e.preventDefault();
    validT.innerHTML = "the email should be less than 30 character";
    valid.style.left = "0";
  } else if (inputE.value === "") {
    e.preventDefault();
    validT.innerHTML = "write a valid email";
    valid.style.left = "0";
  } else if (inputE.value.length < 15) {
    e.preventDefault();
    validT.innerHTML = "the email should be more than 15 character";
    valid.style.left = "0";
  }
  window.addEventListener("click", () => {
    valid.style.left = "-100%";
  });
  window.addEventListener("scroll", () => {
    valid.style.left = "-100%";
  });
};

/* End Sections eight */

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */



