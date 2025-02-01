// Code for date-navigation div 
document.addEventListener("DOMContentLoaded", function () {
    const months = [
      "January, 2025",
      "February, 2025",
      "March, 2025",
      "April, 2025",
      "May, 2025",
      "June, 2025",
      "July, 2025",
      "August, 2025",
      "September, 2025",
      "October, 2025",
      "November, 2025",
      "December, 2025",
    ];
  
    let currentMonthIndex = 0; // Start with January, 2025
  
    const monthDisplay = document.querySelector(".date-navigation__text");
    const leftArrow = document.querySelector(".date-navigation__arrow--left");
    const rightArrow = document.querySelector(".date-navigation__arrow--right");
  
    function updateMonthDisplay() {
      monthDisplay.textContent = months[currentMonthIndex];
    }
  
    // If user clicks the left arrow
    leftArrow.addEventListener("click", function () {
      if (currentMonthIndex > 0) {
        currentMonthIndex--;
        updateMonthDisplay();
      }
    });
  
    // If user clicks the right arrow
    rightArrow.addEventListener("click", function () {
      if (currentMonthIndex < months.length - 1) {
        currentMonthIndex++;
        updateMonthDisplay();
      }
    });
  
    // Initialize the display
    updateMonthDisplay();
  });