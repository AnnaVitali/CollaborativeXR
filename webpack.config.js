const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'framework.js'),
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'CollaborativeXR',
        libraryTarget: 'umd'
    },
    resolve: {
        fallback: {
            url: require.resolve('url'),
            assert: require.resolve('assert'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            buffer: require.resolve('buffer'),
            stream: require.resolve('stream-browserify')
        }
    },
    module: {
        rules: [{
            test:/\.m?js/,
            type: "javascript/auto",
            resolve:{
                fullySpecified: false
            },
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    mode: 'development'
}