const b = true;


const myfunc = (callbackFunc) => {
    // do something inside myfunc
    let number = 50;
    callbackFunc();
}

// invoke myfunc
myfunc(
    ()=>{// pass-in callback function
        // do something inside myfunc
        console.log('hello');
    } 
);