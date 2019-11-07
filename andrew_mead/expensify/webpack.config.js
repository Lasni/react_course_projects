// entry point --> output file

const path = require('path')

// console.log(path.join(__dirname, 'public'))
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js' // standard naming, can be anything
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, // check if file getting loaded ends with .js
      exclude: /node_modules/ // exclude the entire node_modules folder (already processed)
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'), // configuring webpack-dev-server to find public files
    historyApiFallback: true // react-router relevant - returns index.html for all routes
  }
}

