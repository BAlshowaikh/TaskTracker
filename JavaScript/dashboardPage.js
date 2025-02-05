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
const lightModeBtn = document.querySelector(".lightMode");
const darkModeBtn = document.querySelector(".darkMode");
const body = document.body;

// Function to set the active button
function setActiveButton(activeButton, inactiveButton) {
  activeButton.classList.add("active"); // Add active class to the clicked button
  inactiveButton.classList.remove("active"); // Remove active class from the other button
}

// Light Mode Button
lightModeBtn.addEventListener("click", () => {
  body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
  setActiveButton(lightModeBtn, darkModeBtn); // Set light mode button as active
});

// Dark Mode Button
darkModeBtn.addEventListener("click", () => {
  body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
  setActiveButton(darkModeBtn, lightModeBtn); // Set dark mode button as active
});

// Check localStorage for saved theme and set the active button
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  setActiveButton(darkModeBtn, lightModeBtn); // Set dark mode button as active
} else {
  setActiveButton(lightModeBtn, darkModeBtn); // Set light mode button as active
}

// Code for displaying the add task form when the plus icon been clicked
document.addEventListener("DOMContentLoaded", function(){
  const addTaskBtn = document.querySelector(".addTaskButton");
  const addTaskForm = document.querySelector("#addTaskForm");

  addTaskBtn.addEventListener("click", () =>{
    if (addTaskForm.style.display === "none" || addTaskForm.style.display === "") {
      addTaskForm.style.display = "flex";
    } else {
      addTaskForm.style.display = "none";
    }
  })
});

// Code for choosing the priority of the added task
document.addEventListener("DOMContentLoaded", function () {
  const prioritybuttons = document.querySelectorAll(".priorityOptions button");

  prioritybuttons.forEach((button) => {
    button.addEventListener("click", () => {
      prioritybuttons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
    });
  });
});


// Code for choosing the time
document.addEventListener("DOMContentLoaded", function() {
  const chooseTimeDiv = document.querySelector(".chooseTimeDiv");
  const buttons = chooseTimeDiv.querySelectorAll("button");

  // Function to handle button clicks
  function handleButtonClick(event) {
    buttons.forEach(button => button.classList.remove("active"));

    event.target.classList.add("active");

    const timeInput = document.getElementById("timeInput");
    if (event.target.id === "timeSelection") {
      timeInput.style.display = timeInput.style.display === "none" ? "inline" : "none";
    } else {
      timeInput.style.display = "none";
    }
  }

  buttons.forEach(button => button.addEventListener("click", handleButtonClick));
});