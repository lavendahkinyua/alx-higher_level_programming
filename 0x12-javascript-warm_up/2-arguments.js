#!/usr/bin/node
// get an array of all command line arguments passed to the script, excluding the first two arguments
const args = process.argv.slice(2);
const x = args.length;
if (x === 2) {
  console.log('ArgumentS found');
} else if (x === 1) {
  console.log('Argument found');
} else {
  console.log('No argument');
}
