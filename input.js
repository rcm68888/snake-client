// Stores the active TCP connection object.
const { connect } = require('./client');
let connection;
const stdin = process.stdin;

const mappings = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
};

const handleUserInput = (key) => {
  // Short circuit if user does the Ctrl-C key
  if (key === "\u0003") {
    return process.exit();
  }

  // handles all other key strokes
  if (mappings[key]) {
    connection.write(mappings[key]);
  }
};
const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // handleUserInput(stdin);
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = { setupInput };