/*
 * @Author: zhao - 🍉
 * @Date: 2021-09-03 16:05:35
 * @LastEditTime: 2021-09-03 16:37:26
 * @LastEditors: zhao - 🍉
 * @Description:
 * @FilePath: /your-project-name/src/renderer/services/user.js
 */

const { default: request } = require('renderer/utils/request');

export function fetchUserList() {
  return request({ url: 'http://7pou.com', autoParse: false });
}
