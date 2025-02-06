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

// Code for choosing a category
// Array of categories with their colors
const categories = [
  { name: 'Work', color: '#ffcccb' }, // Light red
  { name: 'Health', color: '#90ee90' }, // Light green
  { name: 'Family', color: '#add8e6' }, // Light blue
  { name: 'Spirituality', color: '#dda0dd' }, // Light purple
  // Add more categories as needed
];

// Get the container for category buttons
const categoryOptions = document.querySelector('.categoryOptions');

// Function to create a category button
function createCategoryButton(category) {
  const button = document.createElement('button');
  button.className = 'categoryBtn';
  button.textContent = category.name;
  button.style.backgroundColor = category.color; // Set the background color
  button.setAttribute('data-category', category.name.toLowerCase()); // Add data attribute

  // Add click event listener
  button.addEventListener('click', () => {
    // Remove the selected class from all buttons
    document.querySelectorAll('.categoryBtn').forEach(btn => btn.classList.remove('selected'));

    // Add the selected class to the clicked button
    button.classList.add('selected');

    // Optionally, save the selected category to a hidden input or variable
    const selectedCategory = button.getAttribute('data-category');
    console.log('Selected Category:', selectedCategory);
  });

  return button;
}

// Dynamically add category buttons to the form
categories.forEach(category => {
  const button = createCategoryButton(category);
  categoryOptions.appendChild(button);
});