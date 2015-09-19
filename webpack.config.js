const path = require('path');
const webpack = require('webpack');

const DIR = process.env.DIR || 'src';

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
    './' + DIR + '/index'
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
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, DIR)
    }]
  }
};
