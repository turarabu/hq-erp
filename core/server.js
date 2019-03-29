const http = require('http');
const fs = require('fs');

const config = require('@app/config');
const types = {
    'js': 'text/javascript',
    'css': 'text/css',
    'jpg': 'image/jpg',
    'map': 'text/json',
    'png': 'image/png',
    'html': 'text/html'
};

module.exports = { run };
async function run () {
    if (config.server.enable === true)
        return await server();
}

function server () {
    const server = http.createServer(handler);
    server.listen(config.server.port, config.server.host);

    server.on('error', function (error) {
        console.log(`Не могу запустить сервер ${config.server.host}:${config.server.port}`);
        console.log('Нет права на запуск или порт уже заянт');
        process.exit();
    });

    return new Promise(function (resolve) {
        var interval = setInterval(function () {
            if (server.listening === true) {
                clearInterval(interval);
                resolve();
            }
        });
    });
}

function handler (request, response) {
    const url = request.url.split('.');

    switch ( url[url.length - 1] ) {
        case 'css':
            return file(response, request.url, 'css');
        case 'js':
            return file(response, request.url, 'js');
        case 'map':
            return file(response, request.url, 'map');
        case 'woff2':
            return file(response, request.url, 'font');
        case 'png':
            return file(response, request.url, 'png');
        case 'jpg':
            return file(response, request.url, 'jpg');
        default:
            return file(response, '/index.html', 'html');
    }
}

function file (response, path, format) {
    var type = types[format];
    var exists = fs.existsSync(config.server.path + path);

    if (exists) {
        var content = fs.readFileSync(config.server.path + path);

        response.writeHead(200, { 'Content-Type': type });
        response.end(content, 'utf-8');
    }

    else {
        response.writeHead(404);
        response.end();
    }
}