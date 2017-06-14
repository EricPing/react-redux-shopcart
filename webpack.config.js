module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env'],
                },
                test: /\.jsx?$/,
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
