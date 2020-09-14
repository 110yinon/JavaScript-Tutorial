const getTodos = resource => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request,request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                // console.log(request.responseText);
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                // console.log('could not fetch the data');
                reject('could not fetch the data');
            }
        });

        request.open('GET', resource);
        request.send();
    });
};

getTodos('todos/luigi.json')
    .then(data => {
        console.log(data);
        return getTodos('todos/mario.json');
    })
    .then(data => {
        console.log(data);
        return getTodos('todos/shaun.json');
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err))