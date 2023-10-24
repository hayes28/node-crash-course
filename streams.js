// Run: node streams.js
// file system module (built-in)
const fs = require('fs');

// reading files - Streams
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
// utf8 is the default encoding

// data is an event that fires when we receive data
readStream.on('data', (chunk) => {
    console.log('----- NEW CHUNK -----');
    // outputs the data in chunks
    // output: ----- NEW CHUNK -----
    // <Buffer 4c 6f 72 65 6d 20 6e 69 6e 6a 61 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 65 72 20 61 64 69 ... 65486 more bytes >
    console.log(chunk);
});
