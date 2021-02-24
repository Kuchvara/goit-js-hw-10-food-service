const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcherRef = document.querySelector('#theme-switch-toggle');

// function setDark() {
//   document.body.classList.add(Theme.DARK);
//     document.body.classList.remove(Theme.LIGHT);
//     localStorage.setItem('theme', Theme.DARK);
//     switcherRef.checked = true;
// }

// function setLight() {
//   document.body.classList.add(Theme.LIGHT);
//     document.body.classList.remove(Theme.DARK);
//     localStorage.setItem('theme', Theme.LIGHT);
//     switcherRef.checked = false;
// }

// function themeChange(event) {
//   if (event.target.checked === false) {setLight()} else {setDark()}
// };

// switcherRef.addEventListener('change', themeChange);

// function defaultTheme() {
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme === Theme.LIGHT) {setLight ()} else {setDark()}
// };

// defaultTheme();


// якщо я правильно зрозумів зауваження

// function themeChange(event) {
//   if (event.target.checked)
//   {
//     document.body.classList.replace(Theme.LIGHT, Theme.DARK);
//     localStorage.setItem('theme', Theme.DARK);
//   }
//   else {
//     document.body.classList.replace(Theme.DARK, Theme.LIGHT);
//     localStorage.setItem('theme', Theme.LIGHT);}
// };

// switcherRef.addEventListener('change', themeChange);

// function defaultTheme() {
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme === Theme.LIGHT || savedTheme === null)
//   {
//     document.body.classList.replace(Theme.DARK, Theme.LIGHT);
//     localStorage.setItem('theme', Theme.LIGHT);
//     switcherRef.checked = false;
//   }
//   else {document.body.classList.replace(Theme.LIGHT, Theme.DARK);
//     localStorage.setItem('theme', Theme.DARK);
//     switcherRef.checked = true; }
// };

// defaultTheme();

// третя спроба (Бог любить трійку)))

function setTheme(themeA, themeB) {
  document.body.classList.replace(themeB, themeA);
  localStorage.setItem('theme', themeA);
}

function themeChange(event) {
  if (event.target.checked === false) {
  setTheme(Theme.LIGHT, Theme.DARK);
  switcherRef.checked = false;
  } else {
  setTheme(Theme.DARK, Theme.LIGHT);
  switcherRef.checked = true;
  }
};

switcherRef.addEventListener('change', themeChange);

function defaultTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.LIGHT || savedTheme === null)
  {  
    setTheme(Theme.LIGHT, Theme.DARK);
    switcherRef.checked = false;
  } else {
    setTheme(Theme.DARK, Theme.LIGHT);
    switcherRef.checked = true;
  }
};

defaultTheme();