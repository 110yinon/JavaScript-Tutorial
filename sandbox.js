
const myfunc = (callbackFunc) => {
    // do something inside myfunc
    let number = 50;
    callbackFunc(number); // pass-in number to the callback function
}

// invoke myfunc
myfunc(
    value => {// pass-in callback function
        // do something inside myfunc
        console.log('the number is:', value);
    }
);