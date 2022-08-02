let a = document.querySelectorAll("a");

a.forEach((element) => {
  element.setAttribute("target", "_blank");
});
let b = document.querySelectorAll("button");

b.forEach((element) => {
  element.setAttribute("target", "_blank");
});

let logo = document.querySelector(".logo");

logo.onclick = () => {
  location.reload();
};

let navBar = document.querySelector(".nav-bar");
window.addEventListener("scroll", () => {
  if (this.scrollY >= 700) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});




