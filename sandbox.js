// the fetch API
fetch('todos/luigi.json')// wrong resource
    .then(response => {
        if (response.status === 404) {
            console.log('404 error, source not found');
        }
        else {
            console.log('resolve', response);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(err => { console.log('reject', err) })