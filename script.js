const darkModeToggle = document.getElementById('darkModeToggle');
const container = document.querySelector('.container');

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked){
        container.classList.add('dark-mode')
    } else {
        container.classList.remove('dark-mode');
    }
});