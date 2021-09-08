/*
 * @Author: zhao - 🍉
 * @Date: 2021-09-03 16:01:12
 * @LastEditTime: 2021-09-03 16:37:11
 * @LastEditors: zhao - 🍉
 * @Description:
 * @FilePath: /your-project-name/src/renderer/utils/request.js
 */
import axios from 'axios';

const request = axios.create({
  timeout: 30000,
  // baseURL: '/api',
  method: 'GET',
});

request.interceptors.request.use((config) => {
  console.log('请求', config);
  return config;
});

request.interceptors.response.use((res) => {
  if (!res || !res.data) {
    throw new Error('请求失败');
  }
  if (res.status === 401) {
    return Promise.reject('无权访问');
  }
  if (res.status !== 200) {
    throw new Error('请求失败');
  }
  if (res.config.autoParse === false) {
    return res.data;
  }
  if (res.data.code !== 0) {
    return Promise.reject(res.data.message);
  }
  return res.data;
});

export default request;
