const path = require('path');

module.exports = {
  entry: {
    bound: './src/index.js',
  },
  devtool: '#source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // symlinks: false,
  },
  module: {
    rules: [
      {
        test: /((\.(js|jsx)$)|(@lzshow))/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192',
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 9901,
  },
  mode: 'development',
};
