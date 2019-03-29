require('module-alias').addAliases({
    '@app': __dirname,
    '@core': `${__dirname}/core`
});

const { app } = require('electron');

const main = require('@core/main');
const server = require('@core/server');
const update = require('@core/update');

server.run()
    .then(function () {
        app.on('ready', update.check);
        update.done(main);
    });