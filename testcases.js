/*
10
5
2
1 0
0 3
2 1
1 1
0 5
*/

let testCases = [
  {
    input: {
      size: 10,
      actions: [
        { type: 1, pos: 0 },
        { type: 0, pos: 3 },
        { type: 2, pos: 1 },
        { type: 1, pos: 1 },
        { type: 0, pos: 5 },
      ]
    },
    output: 0.5
  },
  {
    input: {
      size: 20,
      actions: [
        { type: 1, pos: 0 },
        { type: 0, pos: 3 },
        { type: 2, pos: 1 },
        { type: 1, pos: 1 },
        { type: 0, pos: 5 },
      ]
    },
    output: 0.25
  },
  {
    input: {
      size: 10,
      actions: [
        { type: 1, pos: 0 },
        { type: 0, pos: 3 },
        { type: 2, pos: 1 },
        { type: 1, pos: 1 },
        { type: 0, pos: 5 },
        { type: 2, pos: 3 },
        { type: 2, pos: 8 },
      ]
    },
    output: 0.5
  },
  {
    input: {
      size: 10,
      actions: [
        { type: 1, pos: 1 },
        { type: 0, pos: 3 },
        { type: 2, pos: 1 },
        { type: 1, pos: 1 },
        { type: 0, pos: 5 },
      ]
    },
    output: 0.4
  },
  {
    input: {
      size: 10,
      actions: [
        { type: 2, pos: 4 },
        { type: 2, pos: 2 },
        { type: 2, pos: 3 },
        { type: 1, pos: 3 },
        { type: 0, pos: 5 },
        { type: 2, pos: 3 },
        { type: 2, pos: 8 },
      ]
    },
    output: 0.2
  },
  {
    input: {
      size: 10,
      actions: [
        { type: 2, pos: 4 },
        { type: 2, pos: 3 },
        { type: 0, pos: 3 },
        { type: 0, pos: 3 },
        { type: 1, pos: 3 },
        { type: 0, pos: 5 },
        { type: 2, pos: 3 },
        { type: 2, pos: 8 },
      ]
    },
    output: 0.2
  },
];

function testInputToString(input) {
  const lines = [];
  lines.push(input.size);
  lines.push(input.actions.length);
  lines.push(2);

  input.actions.forEach(action => {
    lines.push(action.type + " " + action.pos);
  });

  return lines.join('\r\n');
}

function testOutputToString(output) {
  return "" + output;
}

let fs = require('fs');
testCases.forEach((test, id) => {
  fs.writeFileSync('./tests/input0' + id + '.txt', testInputToString(test.input));
  fs.writeFileSync('./tests/output0' + id + '.txt', testOutputToString(test.output));
});
