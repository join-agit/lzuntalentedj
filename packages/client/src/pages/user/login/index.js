import React from 'react';
import {
  Form, Input, Icon, Button, Col, Row,
} from 'antd';

import './index.scss';

function Login(props) {
  const { form } = props;
  const { getFieldDecorator } = form;
  const handleSubmit = () => {

  };
  return (
    <div className="page-login">
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <Row type="flex" justify="space-between">
          <Col>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Col>
          <Col>
            <a href="#/register">register now!</a>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Form.create()(Login);
