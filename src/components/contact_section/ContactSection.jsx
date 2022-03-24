import { Col, Row } from 'antd';
import React from 'react';
import ContactForm from './components/ContactForm';

import './scss/contact_section.scss';
function ContactSection() {
  return (
    <section id='contact' className='contact-section'>
      <div className="container">
        <Row gutter={[30, 30]} align='middle'>
          <Col xl={8} lg={8} md={24} sm={24} xs={24} className='col--left'>
            <div>
              <h4>Request a call back</h4>
              <p>
                Would you like to speak to one of our financial advisers over the phone?
                Just submit your details and we'll be in touch shortly.
                You can also email us if you would prefer.
              </p>
            </div>
          </Col>
          <Col xl={16} lg={16} md={24} sm={24} xs={24} className='col--right'>
            <h5>I would like to discuss:</h5>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default ContactSection