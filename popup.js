const button = document.querySelector('button');
const popupWrapper = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');

button.addEventListener('click', () => {
    popupWrapper.style.display = 'block';
});

close.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
});

popupWrapper.addEventListener('click', (e) => {
    popupWrapper.style.display = 'none';
});

popup.addEventListener('click', e => {
    e.stopPropagation();
});