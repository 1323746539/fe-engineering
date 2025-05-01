'use strict';
const path = require('path');
const glob = require('glob');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader', 'postcss-loader'],
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 10,
            cacheGroups: {
                utils: {
                    test: /utils/,
                    filename: 'js/[name]_utils.js'
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: 'js/[name]_vendors.js'
                }
            }
        },
        minimizer: [
            new CSSMinimizerPlugin({}),
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
            chunkFilename: 'css/[name].[hash:8].css',
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(`${path.resolve(__dirname, '../src')}/**/*`, { nodir: true }),
        }),
        // new CompressionPlugin({
        //     test: /\.(js|css)$/,
        //     algorithm: 'gzip',
        //     minRatio: 0.8,
        // }),
    ],
})