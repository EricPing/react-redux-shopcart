let webpack = require('webpack');
let colors = require('colors/safe');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION = 'production';
const DEVELOPMENT = 'development'

let mode = process.env.NODE_ENV ? process.env.NODE_ENV : DEVELOPMENT;
console.log(colors.red(`CURRENT MODE: ${mode.toUpperCase()}`));

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: './bundle.js',
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        mode == PRODUCTION? new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }) : null
    ],
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-3', 'react'],
                    plugins: [
                        "styled-jsx/babel"
                    ]
                },
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss|sass)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loaders: ['file-loader'],
            }
        ],
    },
};
