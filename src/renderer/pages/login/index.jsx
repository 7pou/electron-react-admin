/*
 * @Author: zhao - 🍉
 * @Date: 2021-09-03 14:13:03
 * @LastEditTime: 2021-09-07 17:02:30
 * @LastEditors: zhao - 🍉
 * @Description:
 * @FilePath: /your-project-name/src/renderer/pages/login/index.jsx
 */
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import React from 'react';
import classNames from 'classnames/bind';
import { fetchUserList } from 'renderer/services/user';
import styles from './index.scss';

const cx = classNames.bind(styles);

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Login1',
    };
  }

  onFinish = (values) => {
    console.log('Success:', values);

    fetchUserList().then((res) => {});
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div className="container">
        <div className={cx('form-block')}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" className={cx('submit')} htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default Login;
