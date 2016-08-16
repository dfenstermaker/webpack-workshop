module.exports = {

    entry: {
        index: ['./src/index.js'],
        styles: ['./src/main.css']
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
    }
}
