#!/usr/bin/node
// get an array of all command line arguments passed to the script, excluding the first two arguments
const args = process.argv.slice(2);
const x = args.length;
if (x === 0) {
  console.log('No argument');
} else if (x === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
