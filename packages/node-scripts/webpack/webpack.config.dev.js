'use strict';

const fs = require('fs');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const config = require('../config/paths');
const path = require('path');

module.exports = options => {
  const babelRcPath = path.resolve('.babelrc');
  const mainBabelOptions = {
    babelrc: true,
    cacheDirectory: true,
    presets: [],
  };

  mainBabelOptions.presets.push(require.resolve('babel-preset-node-app'));

  return {
    mode: 'development',
    target: 'node',
    devtool: 'source-map',
    externals: nodeExternals({
      modulesFromFile: true,
      whitelist: [
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico|webm)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|less|styl)$/,
      ],
    }),
    performance: {
      hints: false,
    },
    resolve: {
      extensions: ['.js', '.json'],
    },
    resolveLoader: {},
    node: {
      __filename: true,
      __dirname: true,
    },
    entry: {
      main: [`${config.serverSrcPath}/index.js`],
    },
    output: {
      path: config.serverBuildPath,
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      publicPath: config.publicPath,
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          loader: require.resolve('babel-loader'),
          exclude: [/node_modules/, config.buildPath],
          options: mainBabelOptions,
        },
      ],
    },
    optimization: {
      noEmitOnErrors: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(options.env),
        __DEV__: options.env === 'development',
      }),
      new webpack.BannerPlugin({
        raw: true,
        entryOnly: false,
        banner: `require('${
          require.resolve('source-map-support').indexOf(process.cwd()) === 0
            ? 'source-map-support/register'
            : require.resolve('source-map-support/register')
        }')`,
      }),
      new FriendlyErrorsWebpackPlugin({
        clearConsole: options.env === 'development',
      }),
    ],
  };
};
