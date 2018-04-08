const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        'path': path.resolve(__dirname, 'public'),
        'filename': 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                "text": /\.js$/,
                "exlude": /node_modules/
            }
        ]
    }
}