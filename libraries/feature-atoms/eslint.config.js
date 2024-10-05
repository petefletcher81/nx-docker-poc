const vue = require('eslint-plugin-vue');
const baseConfig = require('../../eslint.config.js');

module.exports = [
  ...baseConfig,
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.vue'],
  },
];
