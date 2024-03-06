const darkModeToggle = document.getElementById('darkModeToggle');
const container = document.querySelector('.container');
const body = document.querySelector('body')

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked){
        container.classList.add('dark-mode')
        body.classList.add('dark-mode')
    } else {
        container.classList.remove('dark-mode');
    }
});