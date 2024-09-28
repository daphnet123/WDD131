const themeSelector = document.querySelector('#themeSelector');
const logo = document.querySelector('.logo');

function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        logo.src = 'byui-logo_white.webp';
    } else {
        document.body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);

changeTheme();