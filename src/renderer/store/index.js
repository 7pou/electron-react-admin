/*
 * @Author: zhao - 🍉
 * @Date: 2021-09-03 14:48:00
 * @LastEditTime: 2021-09-03 15:14:59
 * @LastEditors: zhao - 🍉
 * @Description:
 * @FilePath: /your-project-name/src/renderer/store/index.js
 */

import { observable } from 'mobx';

class Store {
  @observable name;

  @observable list;

  constructor() {
    this.name = 'zhao';
    this.list = [];
  }
}

export default Store;
