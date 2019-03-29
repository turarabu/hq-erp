const fs = require('fs');
const config = require('@app/config');
const file = `${__dirname}/storage/data.json`;

var data;
var session = {};

module.exports = { get, set, session };

if ( config.first || !fs.existsSync(file)) {
    data = defaults();
    update();
}

function get (key) {
    return (data[key] === undefined)
        ? null : data[key];
}

function set (key, value) {
    data[key] = value;
    update();
}

function update () {
    fs.writeFileSync(file, JSON.stringify(data));
}

function defaults () {
    return {
        hide_on_close: true,
        ask_on_quit: true,
        lang: 'ru',
        notifications: true
    };
}