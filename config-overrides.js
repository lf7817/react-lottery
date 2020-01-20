/*
 * @Author: lifan
 * @Date: 2019-01-26 08:47:36
 * @Last Modified by: lifan
 * @Last Modified time: 2020-01-20 10:17:47
 */
const { override, addBundleVisualizer, disableChunk } = require('customize-cra');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

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

const injectManifest = () => (config) => {
  let plugins = config.plugins.filter(p => {
    return p.constructor.name !== 'GenerateSW';
  });

  plugins.push(
    new InjectManifest({
      swSrc: './public/service-worker.js',
      exclude: [/\.map$/, /asset-manifest\.json$/],
      importWorkboxFrom: 'cdn',
    }),
  );

  config.plugins = plugins;

  return config;
};

module.exports = override(
  isProduction && addBundleVisualizer(),
  addStylint(),
  disableChunk(),
  injectManifest()
);
