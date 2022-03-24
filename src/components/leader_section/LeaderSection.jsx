import { Col, Row } from 'antd';
import React from 'react';
import ScaleAnimation from '../../shared/components/ScaleAnimation';
import LeaderCard from './components/LeaderCard';
import { leaderSectionModel } from './model/LeaderSection.Model';

import './scss/leader_section.scss';
function LeaderSection() {
  return (
    <section id='global-leadership' className='leader-section'>
      <div className="container">
        <div>
          <h3 className='section-title text-center'>
            Global Leadership
          </h3>
          <ScaleAnimation>
            <hr className='short text-center' />
          </ScaleAnimation>
        </div>
        <Row gutter={[30, 30]}>

          {leaderSectionModel && leaderSectionModel.map(data => (
            <Col key={data.id} xl={8} lg={8} md={24} sm={24} xs={24}>
              <LeaderCard {...data} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default LeaderSection;