
// function activate(button){
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
//     const activeSlide = slides.querySelector("[data-active]")

//     let newIndex = [...slides.children].indexOf(activeSlide) + offset

//     if (newIndex < 0) newIndex = slides.children.length - 1

//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
// }


// function carousel() {
//     // const carousel = document.querySelector("[data-carousel]")
//     const buttons =document.querySelectorAll("[data-carousel-button]");
    

//     // const items = document.querySelectorAll('.carousel__list--slide')
//     // const nav_buttons = Array.from(items, ()=>{
//     //     return `<span class="carousel__nav--button" data-carousel-nav-button></span>`
//     // })

//     // carousel.insertAdjacentHTML("afterbegin", `
//     //     <div class="carousel__nav" data-nav>
//     //         ${ nav_buttons.join("") }
//     //     </div>
//     // `)

//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             activate(button);
//         })
//     })
// }

// export default carousel


let touchStartX = 0;
let touchEndX = 0;
const minSwipeDistance = 50; // Minimum distance for a swipe to be recognized



function activate(button) {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
  
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
  
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  }
  
  function carousel() {
    const buttons = document.querySelectorAll("[data-carousel-button]");
  
    let intervalId; // Define a variable to hold the interval ID
  
    // Function to automatically advance to the next slide
    function autoAdvance() {
      intervalId = setInterval(() => {
        const nextButton = document.querySelector("[data-carousel-button='next']");
        activate(nextButton);
      }, 5000); // 5000 milliseconds (5 seconds)
    }
  
    // Start automatic slide transitions when the page loads
    autoAdvance();
  
    // Clear the interval and restart it when a button is clicked
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        clearInterval(intervalId); // Clear the previous interval
        autoAdvance(); // Start a new interval
        activate(button);
      });
    });




    const carouselContainer = document.querySelector(".carousel"); // Change this to your actual container element

    // Track the starting position of the touch event
    carouselContainer.addEventListener("touchstart", (event) => {
      touchStartX = event.touches[0].clientX;
    });
  
    // Detect the end of the touch event and determine if it's a swipe
    carouselContainer.addEventListener("touchend", (event) => {
      touchEndX = event.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX;
  
      if (Math.abs(deltaX) > minSwipeDistance) {
        // Swipe detected, determine whether it's left or right
        if (deltaX > 0) {
          // Right swipe
          const prevButton = document.querySelector("[data-carousel-button='prev']");
          activate(prevButton);
        } else {
          // Left swipe
          const nextButton = document.querySelector("[data-carousel-button='next']");
          activate(nextButton);
        }
      }
    });
  }
  
  export default carousel;
  
  