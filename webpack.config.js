const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: './src/pages/index.js', 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },

  module: {
    rules: [
      { //js
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {//img
        test: /\.(png|jpe?g|gif|svg|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {//html
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        // применять это правило только к CSS-файлам
          test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use:  [ MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            // добавьте объект options
            options: { importLoaders: 1 }
          },
          'postcss-loader']
      }
      
    ]
  },
 
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
      new MiniCssExtractPlugin() // подключение плагина для объединения файлов
  ] ,

  devtool: 'inline-source-map',

  
};