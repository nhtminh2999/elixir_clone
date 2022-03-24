import React from 'react';
import { Row, Col, Form, Input } from 'antd';

import '../scss/contact_form.scss';
function ContactForm() {
  const [form] = Form.useForm();
  return (
    <Form form={form}
      requiredMark={false}
      colon={false} className='contact-form'
      name='contact-form'
    >
      <Row gutter={[30, 0]}>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Form.Item
            colon={false}
            name='Customer_Name'
            rules={[{ required: true, message: '' }]}
          >
            <Input className='contact-form__input' placeholder={'Your Name'} maxLength={200} />
          </Form.Item>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Form.Item
            colon={false}
            name='Customer_Phone'
            rules={[{ required: true, message: '' }]}
          >
            <Input className='contact-form__input' placeholder={'Phone Number'} maxLength={200} />
          </Form.Item>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Form.Item
            colon={false}
            name='Customer_Guest_Number'
            rules={[{ required: false, message: '' }]}
          >
            <Input className='contact-form__input' placeholder={'Subject'} maxLength={200} />
          </Form.Item>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <button type='submit' className='btn btn-warning contact-form__action'>Submit</button>
        </Col>
      </Row>
    </Form>
  );
}

export default ContactForm;
