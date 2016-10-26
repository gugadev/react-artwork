/**
 * @author Gustavo García
 * 
 * This webpack file is used to test the component as package.
 * The entry point (main.jsx) uses the react-portrait package
 * to create a component and test it.
 */

import path from 'path';
import webpack from 'webpack';
import postcssNesting from 'postcss-nesting';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';


export default {
  entry: {
    example: './src/test',
    ghexample: './src/ghtest'
  },
  output: {
    path: './public',
    filename: '[name].min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: (webpack) => {
    return [
      postcssNesting,
      autoprefixer,
      cssnano({ zindex: false })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
        semicolons: true,
      },
    })
  ],
  devtool: 'source-map',
  stats: { colors: true },
  watch: true
}
