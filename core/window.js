const { app, BrowserWindow } = require('electron');

const config = require('@app/config');

module.exports = { create, exists, setUrl, externalUrl };

var opened = {};
var autoOption = {
    resizable: false,
    show: false,
    height: 550, 
    width: 350
};

function create (name, autoURL = true, option = autoOption) {
    var window = new BrowserWindow( Object.assign(option) );

    setDevs();

    window.on('ready-to-show', window.show);
    window.on('closed', function () {
        delete opened[name];
    });

    if (autoURL === true)
        setUrl(window, name);
    else if (typeof autoURL === 'string')
        setUrl(window, autoURL);

    return window;
}

function exists (name) {
    return opened[name]
        ? opened[name]
        : false;
}

function setUrl (window, path) {
    var server = config.server;

    if (server.enable === true)
        window.loadURL(`${server.use}://${server.host}:${server.port}#/${path}`);
    else window.loadURL(`file:///${server.path}/index.html#/${path}`);
}

function externalUrl (window, url) {
    window.loadURL(url);
}

function setDevs () {
    if (app.isPackaged !== true) {
        BrowserWindow.addDevToolsExtension(`${LibPath}/vue-dev-tools`);
    }
}