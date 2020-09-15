const http = require('http');

http.createServer((request, response) => {
    // response.write('Hola mundo');
    response.writeHead(200, { 'Content-Type': 'application/JSON' });

    let salida = {
        nombre: 'Francisco',
        edad: 26,
        url: request.url
    }

    response.write(JSON.stringify(salida));

    response.end();
}).listen(8080);

console.log('Escuchando puerto 8080');