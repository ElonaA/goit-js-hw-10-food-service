const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    themeToggle: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
};


const lightTheme = refs.body.className = `${ Theme.LIGHT }`;

refs.themeToggle.addEventListener('change', handleCheckboxClick);

function handleCheckboxClick(e) {
    if (e.target.checked) {
        refs.body.classList.add(`${Theme.DARK}`);
        refs.body.classList.remove(`${Theme.LIGHT}`); 
        localStorage.setItem('theme', `${Theme.DARK}`);
    }
    else {
        refs.body.classList.add(`${Theme.LIGHT}`);
        refs.body.classList.remove(`${Theme.DARK}`); 
        localStorage.setItem('theme', `${Theme.LIGHT}`);
    }
}

const bodyClassNameTheme = localStorage.getItem('theme');

 refs.body.className = `${bodyClassNameTheme}`;

if (bodyClassNameTheme === `${Theme.DARK}`) {
    refs.themeToggle.checked = true;
}
