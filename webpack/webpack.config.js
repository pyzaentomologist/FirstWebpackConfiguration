const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/main.js',
    },
    output: {
        filename: '[name]-bundle-[contenthash:6].js',
        path: path.resolve(__dirname, '../', 'build'),
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '../src', 'assets'),
        port: 5001,


    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
    ],
};