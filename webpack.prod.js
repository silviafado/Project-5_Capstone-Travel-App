const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output: {
        libraryTarget: 'var',
        library: 'Client',
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'assets/images/'
                    }
                  }
                ]
            },
            {
                test: /\.ttf$/,
                use: [
                  {
                    loader: 'ttf-loader',
                    options: {
                      name: './assets/fonts/[hash].[ext]',
                    },
                  },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new WorkboxPlugin.GenerateSW()
    ],
    optimization: {
        minimize: true,
        minimizer: [
          new OptimizeCSSAssetsPlugin(),
          new CssMinimizerPlugin(),
        ]
    } 
}  