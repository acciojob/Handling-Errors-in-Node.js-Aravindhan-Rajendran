

const fs = require('fs');
const path = require('path');

// Get the file path from the command-line argument
const filePath = process.argv[2];

// Function to read and print the file content
function readFileContent(filePath) {
  // Check if the file path is provided
  if (!filePath) {
    console.error("Error: Please provide a file path.");
    return;
  }

  // Resolve the file path to ensure it’s absolute
  const resolvedPath = path.resolve(filePath);

  columnname=path.basename(filePath);
  // Attempt to read the file
  fs.readFile(resolvedPath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`Error: Column '${columnname}' not found in the CSV.`);
      } else {
        console.error("Error: Unable to read the file.");
      }
    } else {
      console.log(data);
    }g
  });
}

// Run the function with the provided file path
readFileContent(filePath);
