import React from 'react';
import { Col, Row } from 'antd';
import ScaleAnimation from '../../shared/components/ScaleAnimation';
import { reasonSectionModel } from './model/ReasonSection.Model';
import image01 from '../../assets/why-choose-us.jpg';
import './scss/reason_section.scss';

function ReasonSection() {
  return (
    <>
      <section id='why-choose-elixir' className='reason-section'>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <h3 className='section-title text-center'>
              Why Choose Elixir
            </h3>
            <ScaleAnimation>
              <hr className='short text-center' />
            </ScaleAnimation>
          </div>
          <Row gutter={[30, 30]} className=''>
            <Col xl={12} lg={12} md={24} sm={24} xs={24} className='reason-section__image'>
              <img src={image01} alt="why-choose-us" />
            </Col>
            <Col xl={12} lg={12} md={24} sm={24} xs={24} className='reason-section__main'>
              {reasonSectionModel && reasonSectionModel.map(data => (
                <React.Fragment key={data.id}>
                  <div className='reason-section__main__item'>
                    <h5>
                      <span className={data.icon}></span>
                      {data.title}
                    </h5>
                    <p>
                      {data.desc}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </Col>
          </Row>
        </div>
      </section>
      <section className='investment-contact'>
        <div className="container">
          <Row align='middle' justify='space-between'>
            <Col xl={20} lg={20} md={18} sm={24} xs={24}>
              <h4>
                If you have any query related investment...
                <br className='d-none d-sm-block' />
                we are available 24/7
              </h4>
            </Col>
            <Col xl={4} lg={4} md={6} sm={24} xs={24} className='investment-contact-button'>
              <button className='btn btn-white btn-capsule'>Contact Us</button>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default ReasonSection;