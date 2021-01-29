require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './frontend/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist/frontend'),
    filename: 'bundle-[contenthash].js',
    chunkFilename: '[id]-[chunkhash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce((acc, curr) => {
        acc[curr] = JSON.stringify(process.env[curr]);
        return acc;
      }, {}),
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
