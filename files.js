const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// // output: <Buffer > - package of data, a way of representing binary data output: <Buffer 68 65 6c 6c 6f 2c 20 77 6f 72 6c 64 21>
// // by adding .toString(), we can see the data as a string output: hello, world!(in blog1.txt)

// console.log('last line');
// // output: last line, then hello, world!(in blog1.txt)
// // since the readFile is asynchronous, it will run in the background while the rest of the code runs

// write files
// fs.writeFile('./docs/blog1.txt', 'Hello, Heather!', () => {
//     console.log('file was written');
// });
// // Overwrites existing file output: file was written

// fs.writeFile('./docs/blog2.txt', 'Hello, again!', () => {
//     console.log('file was written');
// });
// Makes the file if doesn't exist output: file was written, file was written

// directories
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');
});
// Creates a folder, output: folder created

// delete files
