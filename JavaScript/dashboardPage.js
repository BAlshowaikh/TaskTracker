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

  // Code for the modes (dark mode, light mode)
  const lightModeBtn = document.querySelector('.lightMode');
  const darkModeBtn = document.querySelector('.darkMode');
  const body = document.body;
  
  // Function to set the active button
  function setActiveButton(activeButton, inactiveButton) {
    activeButton.classList.add('active'); // Add active class to the clicked button
    inactiveButton.classList.remove('active'); // Remove active class from the other button
  }
  
  // Light Mode Button
  lightModeBtn.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    setActiveButton(lightModeBtn, darkModeBtn); // Set light mode button as active
  });
  
  // Dark Mode Button
  darkModeBtn.addEventListener('click', () => {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    setActiveButton(darkModeBtn, lightModeBtn); // Set dark mode button as active
  });
  
  // Check localStorage for saved theme and set the active button
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    setActiveButton(darkModeBtn, lightModeBtn); // Set dark mode button as active
  } else {
    setActiveButton(lightModeBtn, darkModeBtn); // Set light mode button as active
  }