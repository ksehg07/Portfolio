const menuBtn = document.querySelector(".menu-btn");
const naviGation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    naviGation.classList.toggle("active");
})