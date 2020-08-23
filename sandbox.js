// get reference to the UI
const ui = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`
});

console.log(html);
ui.innerHTML = html;