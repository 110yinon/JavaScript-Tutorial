const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request,request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.responseText);
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            // console.log('could not fetch the data');
            callback('could not fetch the data', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
};

// promise example
const getSomething = () => {
    return new Promise((resolve, reject) => {
        // fetch something
        resolve('some data');
        // reject('error');
    });
}

// opt 1
// getSomething()
//     .then(data => {
//         console.log(data);
//     }, err => {
//         console.log(err);
//     })

// opt 2 - BETTER
getSomething()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })