// *********************************************************************
// exercise:
// give any tag a class of 'error' where error is inside the text
// give any tag a class of 'success' where success is inside the text
// *********************************************************************

const paras = document.querySelectorAll('p');

paras.forEach(para=>{
    if(para.innerText.includes('error')){
        para.classList.add('error');
    }
    else if(para.innerText.includes('success')){
        para.classList.add('success');
    }
});
