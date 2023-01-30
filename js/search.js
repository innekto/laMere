// const search = document.querySelector('.media-list__input-wrap');
const btn = document.querySelector('.media-list__link--button');
const input = document.querySelector('.media-list__input');
btn.addEventListener('click', ({ currentTarget }) => {
    input.classList.toggle('active');
    input.focus();

    // console.log(currentTarget);
});



document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === 'Escape' && input.classList.contains('active')) {
        input.classList.toggle('active');
        input.value = '';
    }
    if (e.key === 'Enter' && input.classList.contains('active')) {
        input.classList.toggle('active');
        input.value = '';
    }


});