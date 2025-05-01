const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
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
        }
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
                test: /\.css$/,
                // use: ['style-loader', 'css-loader', 'postcss-loader'],
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'],
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
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
            chunkFilename: 'css/[name].[hash:8].css',
        }),
    ],
    devServer: {
        host: '127.0.0.1',
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
        compress: true,
    },
};
