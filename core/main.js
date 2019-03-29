const { app, Menu, Tray } = require('electron');

const actions = require('@core/actions');
const data = require('@core/data');
const Window = require('@core/window');

var tray, menu;

module.exports = function () {
    var window = Window.create('main', 'login');

    tray = new Tray(`${AssetsPath}/img/icon.ico`);
    data.session.tray = tray;

    menu = Menu.buildFromTemplate([
        {label: 'HQ ERP', enabled: false},
        {label: 'Выход', click: actions.quit}
    ]);

    tray.setContextMenu(menu);
    tray.on('click', function () {
        window.show();
    });

    app.on('window-all-closed', app.quit);
    app.on('quit', function () {
        if (data.session.tray) 
            data.session.tray.destroy();
    });
}