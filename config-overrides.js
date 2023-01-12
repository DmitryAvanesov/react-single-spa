const ASSET_PATH = process.env.ASSET_PATH || 'http://localhost:3000/';

module.exports = {
    webpack(config, env) {
        // comment this line to launch the app in standalone mode
        config.entry = './src/single-spa-entry.js';

        config.output = {
            ...config.output,
            filename: "main.js",
            libraryTarget: "umd",
            publicPath:ASSET_PATH
        };
        delete config.optimization;
        return config;
    },
    devServer(configFunction) {
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            // config.disableHostCheck = true;
            config.headers = config.headers || {};
            config.headers["Access-Control-Allow-Origin"] = "*";
            return config;
        };
    },
};
