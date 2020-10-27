"use strict";

var greet = function greet(name) {
  console.log("hello ".concat(name));
};

greet('mario');
greet('luigi');
greet('ninja'); // convert it to an old js code
// by run this command on the terminal:
// node_modules/.bin/babel src/index.js -o dist/assets/bundle.js
// if the command does NOT work:
// 1. the err caused by the PS/CMD security properties.
// 2. Go to 'About Execution Policies' in Microsot site for help.
// 3. run the command on the terminal:
//    Set-ExecutionPolicy -scope Process Bypass.
// 4. try again the first command
// OR: Go to package.json file and write the first command on "scripts"
// e.g: "babel":node_modules/.bin/babel src/index.js -o dist/assets/bundle.js
// and run the command on the terminal: npm run babel
