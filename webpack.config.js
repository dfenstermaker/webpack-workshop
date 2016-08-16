var commonsChunkPlugin = CommonsChunkPlugin = require( "webpack/lib/optimize/CommonsChunkPlugin" ),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        index: ['./src/index.js'],
        styles: ['./src/main.css'],
        vendors: [
            'lodash'
        ]
    },

    externals: {
        'angular': 'angular'
    },

    output: {
        path: __dirname + "/dist",
        filename: '[name].js'
    },

    module: {
        loaders: [

            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: "babel",
                 query: {
                    presets: ['es2015']
                }
            },

            {
                test: /\.css$/,
                exclude: [/node_modules/],
                loader: "style!css"
            },

            {
                test: /\.html$/,
                exclude: [/node_modules/],
                loader: "html"
            }

        ]
    },

    plugins: [
        new CommonsChunkPlugin( "vendors", "vendors.js" ),
        new HtmlWebpackPlugin({
            title: 'Webpack',
            template: 'index.ejs',
            filename: 'index.html',
            inject: 'true'
        })
    ]
}
