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

getTodos('todos/luigi.json', (err, data) => {
    console.log(data);// all of Luigi's todos
    getTodos('todos/mario.json', (err, data) => {
        console.log(data);// all of Mario's todos
        getTodos('todos/shaun.json', (err, data) => {
            console.log(data);// all of Shaun's todos            
        })
    })
});