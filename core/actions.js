const { app, dialog } = require('electron');

const $ = require('@core/translator');
const data = require('@core/data');
const Window = require('@core/window');

module.exports = {quit};

function quit () {
    dialog.showMessageBox({
        type: 'question',
        title: $('confirm_action'),
        message: $('do_you_want_close_app') + '?',
        buttons: $.array('yes_close', 'no_wait'),
        defaultId: 1
    }, (response) => {
        if (response === 0) {
            data.session.confirmedQuit = true;
            app.quit();
        }
    });
}