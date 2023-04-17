#!/usr/bin/node
const args = process.argv.slice(2);
const toNumber = Number(args[0]);
if (!toNumber) {
  console.log('Not a number');
} else {
  console.log('My number: ' + toNumber);
}
