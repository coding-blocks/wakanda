const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './frontend/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist/frontend'),
    filename: "bundle-[contenthash].js",
    chunkFilename: "[id]-[chunkhash].js",
    publicPath: "/"
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json'
          }
        }],
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html",
      filename: "index.html",
      inject: "body",
    })
  ]
}
