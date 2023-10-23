const { people, ages } = require('./people');

console.log(people, ages);
// output: [ 'John', 'Doe', 'Jane', 'Doe' ] [ 20, 25, 30, 35 ]


// Built-in modules
const os = require('os');

// info about current user
console.log(os.platform(), os.homedir());
