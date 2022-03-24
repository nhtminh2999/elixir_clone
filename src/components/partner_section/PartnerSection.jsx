import React from 'react';
import { Col, Row } from 'antd';

import './scss/partner_section.scss';
import { partnerSectionModel } from './model/PartnerSection.Model';
import FadeAnimation from '../../shared/components/FadeAnimation';
function PartnerSection() {
  return (
    <section className='partner-section'>
      <div className="container">
        <Row gutter={[30, 30]} align='middle'>
          {partnerSectionModel && partnerSectionModel.map(data => (
            <Col key={data.id} xl={4} lg={4} md={8} sm={8} xs={8} className='partner-section__col text-center'>
              <FadeAnimation>
                <img src={data.image} alt={`partner-${data.id}`} className='opacity-0' />
              </FadeAnimation>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default PartnerSection;