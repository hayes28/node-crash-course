const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});
// output: <Buffer > - package of data, a way of representing binary data

// write files


// directories


// delete files
