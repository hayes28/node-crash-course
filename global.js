// Global object

// Gives a list of all the global objects
// console.log(global);

// The global object is the window object in the browser
// the global onject is assumed in node.js, but leaving it for clarity
global.setTimeout(() => {
    console.log('In the timeout');
}, 3000);
