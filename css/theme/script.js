const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// get the theme

let saveTheme = localStorage.getItem("theme");

if (saveTheme === "dark") {
  body.classList.add("dark");
}

// theme toggle button

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");

  // set the current theme to localstorage

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
