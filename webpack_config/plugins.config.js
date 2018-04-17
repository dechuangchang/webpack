const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const pluginsConfig = [
    new webpack.ProvidePlugin({
        $:'jquery'
    }),
    new HtmlWebpackPlugin({
        minify: {
            removeAttributeQuotes: true
        },
        hash: true,
        filename: 'index.html',
        chunks: ['index'],
        template: './app/index.html'
    }),
    new ExtractTextPlugin('./css/[name][hash].css'),
    new CopyWebpackPlugin([{
        from:path.resolve(__dirname,'../app/static'),
        to:path.resolve(__dirname,'../output/static')
    }])
];

module.exports = pluginsConfig;
console.log('pluginsConfig----->')

