const path = require('path')

const env = process.env.PROD ? 'production' : 'development'
module.exports = {
  devServer: {
    contentBase: path.join(__dirname),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    host: '0.0.0.0',
    publicPath: '/dist/',
    port: 4000
  },

  devtool: 'source-maps',

  entry: {
    bundle: path.join(__dirname, 'index')
  },

  module: {
    rules: [
      {
        test: /\.css$/,

        use: [
          {
            loader: 'style-loader',

            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader'
          }
        ]
      },

      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        ]
      }
    ]
  },

  mode: env,

  output: {
    // chunkFilename: '[name].js',
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      path.join(__dirname)
    ]
  }

}
