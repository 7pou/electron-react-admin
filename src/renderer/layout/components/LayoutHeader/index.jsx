/*
 * @Author: zhao - 🍉
 * @Date: 2021-09-04 18:31:29
 * @LastEditTime: 2021-09-07 18:21:04
 * @LastEditors: zhao - 🍉
 * @Description:
 * @FilePath: /your-project-name/src/renderer/layout/components/LayoutHeader/index.jsx
 */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.scss';
import LayoutHeaderMenu from './Menu';

const cx = classNames.bind(styles);
class LayoutHeader extends React.Component {
  render() {
    return (
      <div className={cx('container')}>
        <div>
          <LayoutHeaderMenu />
        </div>
        <div>222</div>
      </div>
    );
  }
}
export default LayoutHeader;
