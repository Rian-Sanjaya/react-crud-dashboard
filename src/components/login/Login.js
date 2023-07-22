import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4} from 'uuid';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import "./login.scss";

function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    localStorage.setItem('accessToken', uuidv4())
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-form-box">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item className="login-form-remember" name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <button type="button" className="login-form-forgot">
              Forgot password
            </button>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <button type="button" className="login-form-register">register now!</button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;