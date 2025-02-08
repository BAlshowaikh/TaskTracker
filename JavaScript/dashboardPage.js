document.addEventListener("DOMContentLoaded", function () {
  // Month navigation
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

  let currentMonthIndex = 0;
  const monthDisplay = document.querySelector(".date-navigation__text");
  const leftArrow = document.querySelector(".date-navigation__arrow--left");
  const rightArrow = document.querySelector(".date-navigation__arrow--right");

  function updateMonthDisplay() {
    monthDisplay.textContent = months[currentMonthIndex];
  }

  leftArrow.addEventListener("click", function () {
    if (currentMonthIndex > 0) {
      currentMonthIndex--;
      updateMonthDisplay();
    }
  });

  rightArrow.addEventListener("click", function () {
    if (currentMonthIndex < months.length - 1) {
      currentMonthIndex++;
      updateMonthDisplay();
    }
  });

  updateMonthDisplay();

  // Theme management
  const lightModeBtn = document.querySelector(".lightMode");
  const darkModeBtn = document.querySelector(".darkMode");
  const body = document.body;

  function setActiveButton(activeButton, inactiveButton) {
    activeButton.classList.add("active");
    inactiveButton.classList.remove("active");
  }

  lightModeBtn.addEventListener("click", () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    setActiveButton(lightModeBtn, darkModeBtn);
  });

  darkModeBtn.addEventListener("click", () => {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    setActiveButton(darkModeBtn, lightModeBtn);
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    setActiveButton(darkModeBtn, lightModeBtn);
  } else {
    setActiveButton(lightModeBtn, darkModeBtn);
  }

  // Add task form toggle
  const addTaskBtn = document.querySelector(".addTaskButton");
  const addTaskForm = document.querySelector("#addTaskForm");

  addTaskBtn.addEventListener("click", () => {
    addTaskForm.style.display =
      addTaskForm.style.display === "flex" ? "none" : "flex";
  });

  // Priority selection
  const priorityButtons = document.querySelectorAll(".priorityOptions button");
  priorityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      priorityButtons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // Time selection
  const chooseTimeDiv = document.querySelector(".chooseTimeDiv");
  const timeButtons = chooseTimeDiv.querySelectorAll("button");
  const timeInput = document.getElementById("timeInput");

  timeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      timeButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      timeInput.style.display =
        button.id === "timeSelection" ? "inline" : "none";
    });
  });

  // Category selection
  const categories = [
    { name: "Work", color: "#ffcccb" },
    { name: "Health", color: "#90ee90" },
    { name: "Family", color: "#add8e6" },
    { name: "Spirituality", color: "#dda0dd" },
  ];

  const categoryOptions = document.querySelector(".categoryOptions");
  categories.forEach((category) => {
    const button = createCategoryButton(category);
    categoryOptions.appendChild(button);
  });

  function createCategoryButton(category) {
    const button = document.createElement("button");
    button.className = "categoryBtn";
    button.textContent = category.name;
    button.style.backgroundColor = category.color;
    button.setAttribute("data-category", category.name.toLowerCase());

    button.addEventListener("click", () => {
      document
        .querySelectorAll(".categoryBtn")
        .forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
    });

    return button;
  }

  // Task management
  const addTaskSubmitBtn = document.querySelector(".addTaskSubmitBtn");
  const upcomingTasksDiv = document.querySelector(".upcoimgTasksDiv");

  function deleteTask(taskItem, task) {
    // Remove task from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((t) => t.name !== task.name);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Remove task from UI
    taskItem.remove();
  }

  function createTaskItem(task) {
    const taskItem = document.createElement("div");
    taskItem.className = "taskItem";

    const taskTime = document.createElement("span");
    taskTime.className = "taskTime";
    taskTime.textContent = task.time || "Open";
    taskItem.appendChild(taskTime);

    const seperator = document.createElement("div");
    seperator.className = "task-seperator";
    taskItem.appendChild(seperator);

    const taskName = document.createElement("span");
    taskName.className = "taskName";
    taskName.textContent = task.name;
    taskItem.appendChild(taskName);

    const priorityCircle = document.createElement("div");
    priorityCircle.className = `priorityCircle ${task.priority}`;
    taskItem.appendChild(priorityCircle);

    const binIconContainer = document.createElement("div");
    binIconContainer.className = "icon-container";

    const binIcon = document.createElement("img");
    binIcon.src = "../Images/bin_icon.png";
    binIcon.alt = "Delete task icon";
    binIconContainer.appendChild(binIcon);
    taskItem.appendChild(binIconContainer);

    binIcon.addEventListener("click", () => {
      deleteTask(taskItem, task);
    });

    return taskItem;
  }

  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
      const taskItem = createTaskItem(task);
      upcomingTasksDiv.appendChild(taskItem);
    });
  }

  loadTasks();

  addTaskSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const taskName = document.getElementById("taskName").value;
    const taskDesc = document.getElementById("taskDesc").value;
    const taskDate = document.getElementById("dateInput").value;
    const taskTime = document.getElementById("timeInput").value;
    const priority =
      document
        .querySelector(".priorityOptions button.active")
        ?.id.replace("Btn", "") || "low";
    const category =
      document
        .querySelector(".categoryBtn.selected")
        ?.getAttribute("data-category") || "work";

    if (!taskName || !taskDesc || !taskDate) {
      alert("Please fill in all required fields.");
      return;
    }

    const task = {
      name: taskName,
      description: taskDesc,
      date: taskDate,
      time: taskTime,
      priority: priority,
      category: category,
    };

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    saveTasks(tasks);

    const taskItem = createTaskItem(task);
    upcomingTasksDiv.appendChild(taskItem);

    document.getElementById("addTaskForm").reset();
    document.getElementById("addTaskForm").style.display = "none";
    document
      .querySelectorAll(".priorityOptions button, .categoryBtn")
      .forEach((btn) => btn.classList.remove("active", "selected"));
  });

});
