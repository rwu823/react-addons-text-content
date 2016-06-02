const webpack = require('webpack')

const isDev = process.env.NODE_ENV !== 'production'
const libName = 'react-addons-text-content'

module.exports = {
  entry: {
    [libName]: isDev
      ? ['babel-polyfill', './dev/client.js']
      : ['./src/index.js'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    library: '',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'React',
      commonjs2: 'React',
      amd: 'react',
    }
  },
  watch: isDev ,
  devtool: isDev ? 'eval' : ''
}
