// async & await
const getTodos = async () => {
    let vals = ['kuku'];// some init value

    let response = await fetch('todos/luigi.json');
    vals = [...vals, await response.json()];

    response = await fetch('todos/mario.json');
    vals = [...vals, await response.json()];

    return vals;

}

console.log(1);
console.log(2);

getTodos()
    .then(data => {
        console.log(data);
    })

console.log(3);
console.log(4);