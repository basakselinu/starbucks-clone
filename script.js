const menu = document.getElementById("menu-icon");
const menuIcon = document.querySelector(".menu-icon i");
const navLeft = document.querySelector(".navbar-left ul");
const navRight = document.querySelector(".navbar-right");
const logo = document.querySelector(".navbar-left img");

menu.addEventListener("click", () => {
  navLeft.classList.toggle("show");
  navRight.classList.toggle("show");

  if (navLeft.classList.contains("show")) {
    logo.style.display = "none";
  } else {
    logo.style.display = "block";
  }

  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times"); 
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars"); 
  }
});
var acc = document.getElementsByClassName("accordion");
const icon = document.querySelector(".accordion i");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    if (icon.classList.contains("fa-chevron-down")) {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up"); 
    } else {
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down"); 
    }

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
