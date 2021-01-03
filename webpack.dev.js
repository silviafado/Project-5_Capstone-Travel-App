const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
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
    mode: 'development',
    devtool: 'source-map',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    stats: 'verbose',
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
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
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
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
    ] 
}    