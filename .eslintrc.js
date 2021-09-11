/*
 * @Author: zhao - 🍉
 * @Date: 2021-09-03 11:24:42
 * @LastEditTime: 2021-09-11 16:16:59
 * @LastEditors: zhao - 🍉
 * @Description:
 * @FilePath: /deepSea-diagnosis/.eslintrc.js
 */
module.exports = {
  extends: 'erb',
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'react/prefer-stateless-function': 'off', // 无状态时必须用function
    'import/prefer-default-export': 'off', // 文件中只有一个export时必须export default
    'promise/catch-or-return': 'off', // 必须捕获异常
    'promise/always-return': 'off', // promise必须有返回值
    'prefer-template': 'off',
    'react/prop-types': 'off', //
    'react/destructuring-assignment': 'off', // 必须解构取值
    'react/jsx-fragments': 'off', // 必须使用空标签 而非 React.Fragment
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.js'),
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
