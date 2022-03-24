import React from 'react'
import { Row, Col, Form, Input } from 'antd';

import '../scss/sign_up_form.scss';
function SignUpForm() {
  const [form] = Form.useForm();
  return (
    <div className='sign-up-form'>
      <h4>Sign up for email alerts</h4>
      <p>Stay current with our latest insights</p>
      <Form form={form} colon={false}>
        <Row gutter={[15, 0]}>
          <Col xl={14} lg={14} md={24} sm={24} xs={24}>
            <Form.Item
              name='Email'
              rules={[{ required: true, type: 'email', message: '' }]}
            >
              <Input className='sign-up-form__input' placeholder='Enter email here' />
            </Form.Item>
          </Col>
          <Col xl={10} lg={10} md={24} sm={24} xs={24}>
            <button type='submit' className='btn btn-warning sign-up-form__action'>Submit</button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default SignUpForm;