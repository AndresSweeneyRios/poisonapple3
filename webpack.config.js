const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.pug'
    }),
  ],

  module: {
    rules: [
      { 
        test: /\.pug$/i,
        use: ['pug-loader']
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'config': path.resolve(__dirname, 'config.js'),
      'scss': path.resolve(__dirname, 'src', 'sass'),
      'assets': path.resolve(__dirname, 'src', 'assets'),
    },
    extensions: ['.js'],
  },
  
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].bundle.js",
    chunkFilename: '[name].bundle.js',
  },

  devtool: 'source-map',

  devServer: {
    port: 3000,
  }
})
