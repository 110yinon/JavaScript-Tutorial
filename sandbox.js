const title = document.querySelector('h1');

// append border to style
// opt 1
let styleContent = title.getAttribute('style');
title.setAttribute('style',styleContent + ';border: 5px solid black');

// opt 2
console.log(title.style);
title.style.border = '5px solid blue';
title.style.color = 'red';
title.style.fontSize = '70px';
