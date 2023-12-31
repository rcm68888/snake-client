const { IP, PORT } = require('./constants');
const net = require('net');

/**
 * Establishes connection w/ game server
 */
const connect = function(){
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: RcM');
  })

  conn.on('data', (data) => {
    console.log(data)
  })

  return conn;
}

module.exports = { connect };