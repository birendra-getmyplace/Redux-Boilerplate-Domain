var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
        // js
        {
          test: /\.js$/,
          loaders: ['babel'],
          include: path.join(__dirname, 'client'),
          exclude: /node_modules/
        },
        // SCSS
        {
          test: /\.scss$/,
          include: path.join(__dirname, 'client'),
          exclude: /node_modules/,
          loader: 'style-loader!css-loader!sass-loader?sourceMap'
        },
        {
          test: /\.css$/,
          include: path.join(__dirname, 'client'),
          exclude: /node_modules/,
          loader: 'style-loader!css-loader?sourceMap'
        }
    ]
  }
};
