const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
});
