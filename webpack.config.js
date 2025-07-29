const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const entries = {};
// Grab all JS and CSS files in the assets folder
glob.sync('./docs/website/website-v1/assets/**/*.{js,css}').forEach(file => {
  const ext = path.extname(file);
  const name = path.basename(file, ext);
  entries[name] = './' + file;
});

module.exports = {
  mode: 'production',
  entry: entries,
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist/assets'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].min.css' }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};
