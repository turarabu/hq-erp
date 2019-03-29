global.AppPath = __dirname;
global.AssetsPath = __dirname + '/assets';
global.LibPath = __dirname + '/lib';

module.exports = {
    first: true,
    server: {
        enable: false,
        path: `${__dirname}/interface`,
    }
};