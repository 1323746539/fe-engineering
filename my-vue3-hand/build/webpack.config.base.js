const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[contenthash:8].js',
        chunkFilename: 'chunks/[name].[contenthash:8].js',
        clean: true,
        sourceMapFilename: 'maps/[name].[contenthash:8].map',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 1 * 1024 * 1024,
                    },
                },
                generator: {
                    filename: 'images/[hash:10][ext][query]',
                },
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
        }),
        new DefinePlugin({
            __VUE_OPTIONS_API__: 'true',
            __VUE_PROD_DEVTOOLS__: 'false',
        }),
        new VueLoaderPlugin(),
    ],
};
