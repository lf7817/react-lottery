/*
 * @Author: lifan
 * @Date: 2019-01-26 08:47:36
 * @Last Modified by:   lifan
 * @Last Modified time: 2019-01-26 08:47:36
 */
const { override, addBundleVisualizer, disableChunk } = require('customize-cra');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const addStylint = () => (config) => {
  config.plugins.push(
    new StyleLintPlugin({
      context: 'src',
      configFile: path.resolve(__dirname, './.stylelintrc.json'),
      files: '**/*.scss',
      failOnError: false,
      quiet: true,
      syntax: 'scss',
      fix: false,
    }),
  );

  return config;
};


module.exports = override(
  isProduction && addBundleVisualizer(),
  addStylint(),
  disableChunk()
);
