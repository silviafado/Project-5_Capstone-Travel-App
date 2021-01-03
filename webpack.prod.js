const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const buffer = require ('buffer')
const vm = require('vm');
const http = require('http');
const https = require('https');
const assert = require('assert');
const stream = require ('stream-browserify');
const os = require('os');
const worker = require('worker_threads');
const fs = require('fs');
const child = require('child_process');



module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    resolve: {
        fallback: {
            util: require.resolve('util/'),
            path: require.resolve('path-browserify'),
            buffer: false,
            crypto: false,
            vm: require.resolve('vm-browserify'),
            stream: require.resolve('stream-browserify'),
            https: require.resolve('https-browserify'),
            http: require.resolve('http-browserify'),
            os: require.resolve('os-browserify/browser'),
            constants: require.resolve('constants-browserify')
        },
        aliasFields: ['browser', 'browser.esm'], 
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