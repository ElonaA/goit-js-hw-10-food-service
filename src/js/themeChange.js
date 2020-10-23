const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const lightTheme = bodyRef.className = `${ Theme.LIGHT }`;

themeToggleRef.addEventListener('change', handleCheckboxClick);

function handleCheckboxClick(e) {
    if (e.target.checked) {
        bodyRef.classList.add(`${Theme.DARK}`);
        bodyRef.classList.remove(`${Theme.LIGHT}`); 
        localStorage.setItem('theme', `${Theme.DARK}`);
    }
    else {
        bodyRef.classList.add(`${Theme.LIGHT}`);
        bodyRef.classList.remove(`${Theme.DARK}`); 
        localStorage.setItem('theme', `${Theme.LIGHT}`);
    }
}

const bodyClassNameTheme = localStorage.getItem('theme');

 bodyRef.className = `${bodyClassNameTheme}`;

if (bodyClassNameTheme === `${Theme.DARK}`) {
    themeToggleRef.checked = true;
}
