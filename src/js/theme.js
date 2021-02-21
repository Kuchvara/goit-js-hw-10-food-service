const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcherRef = document.querySelector('#theme-switch-toggle');


function setDark() {
  document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    switcherRef.checked = true;
}

function setLight() {
  document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    switcherRef.checked = false;
}

function themeChange(event) {
  if (event.target.checked === false) {setLight()} else {setDark()}
};

switcherRef.addEventListener('change', themeChange);

function defaultTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.LIGHT) {setLight ()} else {setDark()}
};

defaultTheme();

