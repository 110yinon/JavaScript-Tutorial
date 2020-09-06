const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value,];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    // console.log(score);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
});


// window object (global object)

console.log('hello');
window.console.log('hello'); // same

console.log(document.querySelector('form'));
console.log(window.document.querySelector('form'));

alert('hello');
window.alert('hello');// same

setTimeout(() => { alert('hey'); }, 3000);
window.setTimeout(() => { alert('hey'); }, 3000);