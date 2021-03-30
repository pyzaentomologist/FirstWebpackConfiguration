const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/js/main.js',
    },
    output: {
        filename: 'js/[name]-bundle-[contenthash:6].js',
        path: path.resolve(__dirname, '../', 'build'),
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.sass|scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|png|svg|gif|jpeg)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[contenthash:6].[ext]',
                            outputPath: './images',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                quality: 70,
                                progressive: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new MiniCssExtractPlugin({
            filename: './[name]-bundle-[contenthash:6].css'
        }),
        new CopyPlugin({
            patterns: [{
                from: 'src/img',
                to: 'img'
            }]
        })
    ],
};