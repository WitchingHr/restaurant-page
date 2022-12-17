const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg)$/i,
          type: 'asset/resource',
        },
      ],
    },
}