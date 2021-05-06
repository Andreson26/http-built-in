//console.log('hi')
//console.log("Hello");
//console.log('it\'s me');


//process variable : equivalent of document inside the browser
//console.log(process);
//console.log(global);
//console.log(module);

//const greeting = require('./lib/greet.js');
//greeting();

////const average = require('./lib/school').average;
//console.log(average([70, 55, 90, 100]));
//console.log(require('./lib/school.js').grades)
const http = require('http');

//connection settings
// a port is an end point of communication
const port = 3000;
 // hostname: IP which is associate with any device connected to a computer network
 const hostname = '127.0.0.1'; // localhost
  // callback function to be executed when a user makes a request to our server
  const respond = (request, response) => {
      console.log(request.url);

      //response.setHeader(header name, value)
      response.setHeader('Content-Type', 'text/plain');
      //writeHead (status code, {headers})
      response.writeHead(200, {'Content-Type': 'text/html'});
      //response.write send the body of the response
      response.write(`<!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>JS Bin</title>
      </head>
      <body>`);
      response.write(`<p> Node is fun!</p>`);
      response.end(` </body>
      </html>`);
      
    
  };

  //create a server
  const server = http.createServer(respond);

  // listen to user request
  server.listen(port, hostname, () => {
      console.log(`listening on port: ${port}, hostname: ${hostname}`)})
  
