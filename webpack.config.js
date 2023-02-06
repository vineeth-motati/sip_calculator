const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app.html',
    }),
  ],
  mode: 'development',
  devServer: {
    // configuration for webpack-dev-server
    historyApiFallback: true,
    contentBase: './public', //source of static assets
    port: 9992, // port to run dev-server
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              'babel-plugin-styled-components',
            ],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
    ],
  },
  devtool: 'cheap-module-source-map',
};
