var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './index.js',
  output: {
    path:'./public/',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('public/main.css')
  ],
  module: {
    loaders: [
      {
        loader: ExtractTextPlugin.extract('css'),
        test: /\.css$/
      }
    ]
  }
};
