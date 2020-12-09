import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { login, logout } from '@/store/actions';

import './Login.less';

class Login extends Component {
  onFinish = values => {
    let _this = this;
    _this.props.dispatch(login(values)).then((res) => {
      message.success(res);
      _this.props.history.push('/');
    }).catch(err => {
      message.success(err);
    })

  };
  render() {
    return (
      <div className="login">
        <div className="login-inner">
          <h2>教材管理系统</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
          </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              {/* Or <a href="">register now!</a> */}
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
Login.propTypes = {
  userInfo: propTypes.object,
};

function select(state) {
  return {
    userInfo: state.userInfo
  }
}
export default withRouter(connect(select)(Login));

