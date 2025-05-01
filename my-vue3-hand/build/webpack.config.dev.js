'use strict';
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base.js');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        host: '127.0.0.1',
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
            },
        ],
    },
})