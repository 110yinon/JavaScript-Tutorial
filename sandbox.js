// recieve parameter
const speak = function(name){
    console.log(`good day ${name}`);
}
// pass in argument
speak('mario');

// give the parameter a default value:
const speak2 = function(name = 'sara'){
    console.log(`good day ${name}`);
}

speak2();