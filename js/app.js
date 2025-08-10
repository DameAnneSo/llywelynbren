const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// ********** smooth scroll ************
// select links
// const scrollLinks = document.querySelectorAll(".scroll-link");
// scrollLinks.forEach(link => {
//   link.addEventListener("click", e => {
//     // prevent default
//     e.preventDefault();
//     links.classList.remove("show-links");

//     const id = e.target.getAttribute("href").slice(1);
//     const element = document.getElementById(id);
//     //
//     let position = element.offsetTop - 62;

//     window.scrollTo({
//       left: 0,
//       // top: element.offsetTop,
//       top: position,
//       behavior: "smooth"
//     });
//   });
// });