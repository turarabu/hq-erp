module.exports = {
    filenameHashing: false,
    assetsDir: `${__dirname}/assets`,
    outputDir: `${__dirname}/interface`,
    publicPath: `./`,
    configureWebpack: {
        resolve: {
            alias: {
                '@component': `${__dirname}/vue/components`,
                '@font': `${__dirname}/assets/font`,
                '@img': `${__dirname}/assets/img`,
                '@script': `${__dirname}/vue/js`,
                '@style': `${__dirname}/vue/style`,
                '@view': `${__dirname}/vue/view`,
                '@vue': `${__dirname}/vue`
            }
        },
        entry: {
            app: `${__dirname}/vue/main.js`
        }
    }
}