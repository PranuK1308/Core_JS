// File Handling Basics in JavaScript
// Note: JavaScript in the browser does not have direct access to the file system for security reasons.
// However, in Node.js, you can use the 'fs' module to handle file operations.

// Reading Files with FileReader (Browser)

// const reader = new FileReader();

// reader.onload = function(event) {
//     const fileContent = event.target.result;
//     console.log(fileContent);
// }

// reader.readAsText(file);

// Example

// import { readFile } from "fs";

// readFile("C://Users//LENOVO//Downloads//123.pdf", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(data);
// });

// FileWriter

import fs from 'fs';

const files = ['./files/q.txt', './filesee/q.txt'];

fs.writeFileSync(files[0], 'Hello, this is my first file!');

console.log('File created successfully');


// Appending to file

fs.appendFileSync(files[1], '\nThis is an appended line.');

console.log('Content appended successfully');

// Deleting file

fs.unlinkSync(files[0]);

console.log('File deleted successfully');
