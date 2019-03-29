const { app } = require('electron');
const { autoUpdater } = require("electron-updater");

global.updateStatus = 1;

const Window = require('@core/window');

var waits;

module.exports = { check, done };

function check () {
    if ( !app.isPackaged ) {
        var window = Window.create('update', 'update', {
            frame: false,
            transparent: true,
            height: 150,
            width: 350
        });
    }

    else setTimeout(() => waits(), 100);
}

function done (func) {
    waits = func;
}