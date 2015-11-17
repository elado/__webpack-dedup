import webpack from 'webpack'
import fs from 'fs'
import path from 'path'

export default {
  entry: './src/index.js',

  output: {
    libraryTarget: 'var',
    library: 'Product',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?' + JSON.stringify({ stage: 0, optional: ['runtime'] }),
        include: path.join(__dirname, 'src')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  }
}
