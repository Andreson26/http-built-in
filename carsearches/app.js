const http = require('http');
const url = require('url');

const port = 3000;

const hostname = '127.0.0.1';

const cars = [
    {
        make: 'Audi',
        model: 'A3',
        year: '2015',
        price: 10000,
        transmission: 'Automatic',
        url: 'https://images.pexels.com/photos/1687147/pexels-photo-1687147.jpeg?cs=srgb&dl=pexels-julio-nery-1687147.jpg&fm=jpg'

    },
    {
        make: 'Mercedes',
        model: 'B Class',
        year: '2018',
        price: 20000,
        transmission: 'Manual',
        url: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?cs=srgb&dl=pexels-garvin-st-villier-3311574.jpg&fm=jpg'
    },
    {
        make: 'Ford',
        model: 'Focus',
        year: '2018',
        price: 13000,
        transmission: 'Manual',
        url: 'https://images.pexelsjpeg.com/photos/3156482/pexels-photo-3156482.?cs=srgb&dl=pexels-arnie-watkins-3156482.jpg&fm=jpg;<Mhh;oju '


    }
];

//call back function executed when a user makes a request to our server
const respond = (request, response) => {
    if(request.url !== '/favicon.ico') {
        console.log(request.url);
        const query = url.parse(request.url, true);
        console.log(query);
        const pathname = url.parse(request.url, true);
        console.log(pathname);

        //response.setHeader(header name, value)
    response.setHeader('Content-Type', 'text/plain');
    //writeHead status (status code, {Headers})
    response.writeHeader(200, {'Content-Type': 'text.html'});
    //response.write sends the body of the response
    response.write(`<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>Node</title>
    </head>
    <body>`);
    response.write(`<p>Node is fun</p>`);
        const check = car => (query.make === undefined || query.make.toLowerCase() === car.make.toLowerCase()) &&
        (query.model === undefined || query.model.toLowerCase() === car.model.toLowerCase()) &&
        (query.year === undefined || query.year === car.year) &&
        (query.transmission === undefined || query.transmission.toLowerCase() === car.transmission.toLowerCase()) &&
        (query.minprice === undefined || parseInt(query.minprice) <= car.price) &&
        (query.maxprice === undefined || parseInt(query.maxprice) >= car.price)
        if(pathname === '/cars') {
        cars.filter().forEach(car => {
            response.write(`ca
            <hr>
            <image src = '${car.url}' height='200' alt='car'>
            <p>Make: ${car.make}</p>
            <p>Model: ${car.model}</p>
            <p>Year: ${car.year}</p>
            <p>Transmission: ${car.transmission}</p>
            <p>Price: ${car.price}</p>
            `);
        });
        // make, mode, year, transmission, max price, min price


    }
    response.end(`</body>
    </html>`);  
}

};
   
// create a server
const server = http.createServer(respond);

// listen to the user request
server.listen(port, hostname, () => {
    console.log(`listening on port: ${port}, hostname: &{hostname}`)});

