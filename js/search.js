// const search = document.querySelector('.media-list__input-wrap');
const btn = document.querySelector('.media-list__link--button');
const input = document.querySelector('.media-list__input');
btn.addEventListener('click', () => {
    input.classList.toggle('active');
    input.focus();
    input.value = '';
    // console.log(currentTarget);
});




document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === 'Escape' || e.key === 'Enter') {
        input.classList.remove('active');
        input.value = '';
    }
});