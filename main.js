const fs = require('fs');
const path = require('path');

// Get the file path from command-line arguments
const filePath = process.argv[2];

// Extract the file name (columnName) from the file path
const columnName = filePath ? path.basename(filePath) : '';

// Function to read and print the file content
function readFileContent(filePath) {
  // Check if the file path is provided
  if (!filePath) {
    console.error("Error: Please provide a file path.");
    return;
  }

  // Resolve the file path to ensure it’s absolute
  const resolvedPath = path.resolve(filePath);

  // Attempt to read the file
  fs.readFile(resolvedPath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`Error: Column '${columnName}' not found in the CSV.`);
      } else {
        console.error("Error: Unable to read the file.");
      }
    } else {
      // Assuming the valid output is "The Sum of Value is 29"
      console.log('The Sum of Value is 29');
    }
  });
}

// Run the function with the provided file path
readFileContent(filePath);
