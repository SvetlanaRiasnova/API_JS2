const arrowLeft = document.querySelector(".slider-button-prev");
const arrowRight = document.querySelector(".slider-button-next");
const slides = document.querySelectorAll(".slider__img");
const pagination = document.querySelector(".slider-pagination");

let currentSlideIndex = 0;
const paginationCircles = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    pagination.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    slides[currentSlideIndex].classList.add("block");
}

function hideSlide() {
    slides[currentSlideIndex].classList.remove("block");
}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let nextSlideIndex = currentSlideIndex + 1;
    if(nextSlideIndex > slides.length - 1) {
        nextSlideIndex = 0;
    }
    changeSlide(nextSlideIndex);
}

function previousSlide() {
    let nextSlideIndex = currentSlideIndex - 1;
    if(nextSlideIndex < 0) {
        nextSlideIndex = slides.length - 1;
    }
    changeSlide(nextSlideIndex);
}

addPagination();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);
