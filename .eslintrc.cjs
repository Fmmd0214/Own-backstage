/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true, // 停止在父级目录中寻找
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  'rules': {
    "camelcase": 0, // 强制驼峰法命名
    "no-delete-var": 2,//不能对var声明的变量使用delete操作符
    "no-extra-parens": 2,//禁止非必要的括号
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
