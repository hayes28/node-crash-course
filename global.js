// Global object

// Gives a list of all the global objects
// console.log(global);

// The global object is the window object in the browser
// the global onject is assumed in node.js, but leaving it for clarity
global.setTimeout(() => {
    console.log('In the timeout');
    // Stops the interval
    clearInterval(int);
}, 3000);

// Runs every second
const int = setInterval(() => {
    console.log('In the interval');
}, 1000);

// Gives the directory name
console.log(__dirname);
// Gives the file name
console.log(__filename);
