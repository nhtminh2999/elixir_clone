import { Col, Row } from 'antd';
import React from 'react';
import FadeAnimation from '../../shared/components/FadeAnimation';
import ScaleAnimation from '../../shared/components/ScaleAnimation';
import { thingSectionModel } from './model/ThingSection.Model';

import './scss/thing_section.scss';
function ThingSection() {
  return (
    <section id='things-you-get' className='thing-section'>
      <div className="container">
        <h3 className='section-title text-center'>
          Things You Get
        </h3>
        <ScaleAnimation>
          <hr className='short text-center' />
        </ScaleAnimation>
        <Row gutter={[30, 0]}>
          {thingSectionModel && thingSectionModel.map(data => (
            <Col key={data.id} xl={8} lg={8} md={12} sm={24} xs={24} className='thing-section__col'>
              <div>
                <FadeAnimation>
                  <span className={`${data.icon} opacity-0`}></span>
                </FadeAnimation>
                <FadeAnimation>
                  <h5 className='opacity-0'> {data.title}</h5>
                </FadeAnimation>
                <FadeAnimation>
                  <p className='opacity-0'>{data.desc}</p>
                </FadeAnimation>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default ThingSection;