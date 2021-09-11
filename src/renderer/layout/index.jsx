/*
 * @Author: zhao - 🍉
 * @Date: 2021-09-03 14:41:17
 * @LastEditTime: 2021-09-11 16:04:56
 * @LastEditors: zhao - 🍉
 * @Description:
 * @FilePath: /deepSea-diagnosis/src/renderer/layout/index.jsx
 */

import React from 'react';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import LayoutHeader from './components/LayoutHeader';
import styles from './index.scss';
import LayoutSlide from './components/LayoutSlide';

const cx = classNames.bind(styles);
class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={cx('layout')}>
        <LayoutHeader />
        <div className={cx('content')}>
          <div className={cx('slide-menu')}>
            <LayoutSlide />
          </div>
          <div className={cx('children')}>{children}</div>
        </div>
      </div>
    );
  }
}
export default withRouter(Layout);
