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
    window.scrollTo(0,0); // opt 1
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
    // opt 2
    // document.querySelector('.intro').id = 'topPage';// grab the first div on page
    // window.location.href = '#topPage';
});