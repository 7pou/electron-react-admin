/*
 * @Author: zhao - 🍉
 * @Date: 2021-09-03 11:24:42
 * @LastEditTime: 2021-09-03 15:50:59
 * @LastEditors: zhao - 🍉
 * @Description:
 * @FilePath: /your-project-name/src/renderer/App.tsx
 */
import React from 'react';

import './App.global.scss';
import Router from './router';
// import { Provider } from "mobx-react";
// import store from "./store";

export default function App() {
  return <Router />;
}
