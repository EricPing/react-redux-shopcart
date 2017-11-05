let webpack = require('webpack');
module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js',
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
       })
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
            },
        ],
    },
};
