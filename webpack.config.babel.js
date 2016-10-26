/**
 * @author Gustavo García
 * 
 */

import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';
import postcssImport from 'postcss-import';
import cssnano from 'cssnano';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


export default {
  entry: {
    index: './src/main'
  },
  output: {
    path: './dist',
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  externals: {
    'react': {
      'commonjs': 'react',
      'commonjs2': 'react',
      'amd': 'react',
      'root': 'React'
    },
    'react-dom': {
      'commonjs': 'react-dom',
      'commonjs2': 'react-dom',
      'amd': 'react-dom',
      'root': 'ReactDOM'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      /*{
        test: /\.css?$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss'
      },*/
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss')
      },
      {
        test: /\.gif?$/,
        loader: "url-loader?mimetype=image/gif"
      },
      {
        test: /\.png?$/,
        loader: "url-loader?mimetype=image/png"
      }
    ]
  },
  resolve: {
    root: [path.resolve('./src')],
    extensions: ['', '.js', '.jsx']
  },
  postcss: (webpack) => {
    return [
      autoprefixer,
      postcssImport({
        addDependencyTo: webpack
      }),
      postcssNesting,
      cssnano({ zindex: false })
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'exports?global.Promise!es6-promise',
      'fetch': 'exports?self.fetch!whatwg-fetch'
    }),
    new ExtractTextPlugin('./react-artwork.min.css')
  ],
  devtool: 'source-map',
  stats: { colors: true },
  watch: true
}
