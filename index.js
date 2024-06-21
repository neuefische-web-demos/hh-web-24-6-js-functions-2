const toggleCheckbox = getByDataJS("switch-checkbox");
const toggle = getByDataJS("switch");
const icon = getByDataJS("icon");
const buttonDark = getByDataJS("button-dark");
const buttonLight = getByDataJS("button-light");
const body = document.body;

function getByDataJS(dataJsAttribute) {
  const element = document.querySelector(`[data-js='${dataJsAttribute}']`);
  return element;
}

function toggleDarkMode() {
  body.classList.toggle("dark");
  updateToggle();
}

function checkIsDarkMode() {
  const isDark = body.classList.contains("dark");
  return isDark;
}

function updateToggle() {
  const isDark = checkIsDarkMode(); // returns a boolean (true if class exists)

  if (isDark) {
    toggle.classList.add("switch--active");
    icon.textContent = "🌒";
  } else {
    toggle.classList.remove("switch--active");
    icon.textContent = "☀️";
  }
}

function setTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }

  updateToggle();
}

toggleCheckbox.addEventListener("input", () => {
  toggleDarkMode(); // function call
});

buttonDark.addEventListener("click", () => {
  setTheme("dark");
});

buttonLight.addEventListener("click", () => {
  setTheme("light");
});

toggleDarkMode();

// ===
console.clear();

// 1. return statements
function add3(n1, n2, n3) {
  const sum = n1 + n2 + n3;
  return sum;
}

const returnValue = add3(1, 2, 3);
// const returnValue = "hello from Felix"
console.log(returnValue);

const returnValue2 = add3(4, 5, 6) + add3(1, 2, 3);
// const returnValue2 = 15 + 6
console.log(returnValue2);
console.log(`The sum is: ${add3(7, 8, 9)}`);

// 2. early returns
function checkUserName(name) {
  //1. longer than 6 characters
  if (name.length < 6) {
    return false;
  }

  //2. shorter than 255 characters
  if (name.length > 255) {
    return false;
  }

  console.log("all checks have passed!");
  return true;
}

console.log(checkUserName("1234"));
console.log(
  checkUserName(
    "123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
  )
);

console.log(checkUserName("peter123"));

// 3. arrow function
toggleCheckbox.addEventListener("input", () => {
  toggleDarkMode(); // function call
});

// function checkIsDarkMode() {
//   const isDark = body.classList.contains("dark");
//   return isDark;
// }

const checkIsDarkModeArrow = () => {
  const isDark = body.classList.contains("dark");
  return isDark;
};

checkIsDarkModeArrow();

// function getByDataJS(dataJsAttribute) {
//   const element = document.querySelector(`[data-js='${dataJsAttribute}']`);
//   return element;
// }

const getByDataJsArrow = (dataJsAttribute) =>
  document.querySelector(`[data-js='${dataJsAttribute}']`);

console.log(getByDataJsArrow("icon"));
