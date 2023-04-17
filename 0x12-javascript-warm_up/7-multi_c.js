#!/usr/bin/node
const args = process.argv.slice(2);
const occurrences = Number(args[0]);
if (!occurrences) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < occurrences; i++) {
    console.log('C is fun');
  }
}
