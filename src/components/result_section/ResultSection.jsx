import { Col, Row } from 'antd';
import React from 'react';
import FadeAnimation from '../../shared/components/FadeAnimation';
import { resultSectionModel } from './model/ResultSection.Model';
import bg from '../../assets/background-15.jpg';
import './scss/result_section.scss';

function ResultSection() {
  return (
    <section className='result-section'>
      <div className='background-holder overlay overlay-elixir' style={{ backgroundImage: `url(${bg})` }} />

      <div className="container">
        <Row gutter={[30, 0]}>
          <Col span={24}>
            <div className='media'>
              <span className="fad fa-check-double"></span>
              <div className="media-body">
                <h2>
                  Take the right step,<br />
                  <span>do the big things.</span>
                </h2>
                <Row gutter={[30, 30]} align='bottom' className='media-body-row'>
                  {resultSectionModel && resultSectionModel.map(data => (
                    <Col key={data.id} xl={6} lg={6} md={12} sm={24} xs={24} className='media-body-col'>
                      <FadeAnimation>
                        <div className='opacity-0'>{data.number}</div>
                      </FadeAnimation>
                      <FadeAnimation>
                        <h6 className='opacity-0'>{data.title}</h6>
                      </FadeAnimation>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ResultSection;