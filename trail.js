const fs = require('fs');

const filePath = 'example.txt';
const dataToAppend = 'This is some new content.\n';

fs.open(filePath, 'a', (err, fd) => {
    if (err) {
        console.error('Error opening file:', err);
    } else {
        // File is opened successfully, now append data
        fs.appendFile(fd, dataToAppend, (appendErr) => {
            if (appendErr) {
                console.error('Error appending to file:', appendErr);
            } else {
                console.log('Data appended to file successfully.');
            }

            // Close the file descriptor
            fs.close(fd, (closeErr) => {
                if (closeErr) {
                    console.error('Error closing file:', closeErr);
                } else {
                    console.log('File closed successfully.');
                }
            });
        });
    }
});
