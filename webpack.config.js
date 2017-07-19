const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            APP_DIR + '/index'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                include: APP_DIR
            },
            {
                test: /\.(gif|png|svg|jpe?g)$/,
                use: ['file-loader'],
                include: APP_DIR
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
                include: APP_DIR
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            title: 'React Redux Tutorial',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin() // Enable HMR
    ],
    devtool: 'eval-source-map',
    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
};