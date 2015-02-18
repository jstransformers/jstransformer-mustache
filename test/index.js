'use strict';

var assert = require('assert');
var fs = require('fs');

var transform = require('../');

var failed = false;

function assertEqual(output, expected) {
  console.log('\tOutput:  ', JSON.stringify(output));
  console.log('\tExpected:', JSON.stringify(expected));
  if (output !== expected) {
    console.log('\tFAILED');
    failed = true;
  } else {
    console.log('\tPASSED');
  }
}

var input = fs.readFileSync(__dirname + '/input.mustache', 'utf8');
var expected = fs.readFileSync(__dirname + '/expected.txt', 'utf8');

var options = {
  "name": {
    "first": "Michael",
    "last": "Jackson"
  },
  "age": "RIP"
};

var output = transform.render(input, options);
fs.writeFileSync(__dirname + '/output.txt', output);
assertEqual(output, expected);

console.log('test passed');