const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './index.js',
    },
    context: path.resolve(__dirname, "app_src"),
    output: {
        path: path.resolve(__dirname, "app", "build"),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "app_src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', '@babel/react'],
                }
            },
        ],
    },
};