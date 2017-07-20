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
        ],
        bootstrap: [
            'jquery',
            'bootstrap/dist/css/bootstrap.css',
            'bootstrap/dist/js/bootstrap',
        ]
    },
    output: {
        filename: '[name].bundle.js',
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
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.(gif|png|svg|jpe?g|woff2?|ttf|eot)$/,
                use: ['file-loader'],
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
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
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