const path = require('path');
const webpack = require('webpack');

const DIR = process.env.DIR || 'src';

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
    './' + DIR + '/index',
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, DIR),
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
        ],
        include: path.join(__dirname, DIR),
      },
    ],
  },

  postcss() {
    return [
      require('autoprefixer'),
    ];
  },
};
