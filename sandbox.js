const link = document.querySelector('a');

console.log(link.getAttribute('href')); // https://www.google.com
link.setAttribute('href','https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));// 'error'
msg.setAttribute('class','success');
msg.setAttribute('style','color:red');// new attribute
