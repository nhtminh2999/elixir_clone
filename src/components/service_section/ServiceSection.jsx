import React from 'react';
import { Col, Row } from 'antd';
import FadeAnimation from '../../shared/components/FadeAnimation';
import ScaleAnimation from '../../shared/components/ScaleAnimation';
import { featureModel, serviceSectionModel } from './model/ServiceSection.Model';
import './scss/service_section.scss';

function ServiceSection() {
  return (
    <section id='service' className='service-section'>
      <div className='container'>
        <h3 className='section-title text-center'>
          Our Services
        </h3>
        <ScaleAnimation>
          <hr className='short text-center' />
        </ScaleAnimation>
        <div style={{ marginTop: '4rem' }} />
        {serviceSectionModel && serviceSectionModel.map(data => {
          if (data.id % 2 === 0) {
            return (
              <Row key={data.id} className='service-section__row sm-col-reverse'>
                <div className='elixir-caret d-sm-none d-block' />
                <Col xl={12} lg={12} md={12} sm={24} xs={24} className='service-section__col service-section__col--content'>
                  <div>
                    <div>
                      <FadeAnimation><h5 className='opacity-0'>{data.title}</h5></FadeAnimation>
                      <FadeAnimation><p className='opacity-0'>{data.desc}</p></FadeAnimation>
                      <FadeAnimation>
                        <a className='learn-more opacity-0' href='/'>
                          Learn more
                          <ScaleAnimation>
                            <span className='opacity-0'>⟶</span>
                          </ScaleAnimation>
                        </a>
                      </FadeAnimation>
                    </div>
                  </div>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24} className='service-section__col service-section__col--image'>
                  <div className='background-holder' style={{ backgroundImage: `url(${data.image})` }} />
                </Col>
              </Row>
            );
          }
          return (
            <Row key={data.id} className='service-section__row'>
              <div className='elixir-caret d-sm-none d-block' />
              <Col xl={12} lg={12} md={12} sm={24} xs={24} className='service-section__col service-section__col--image'>
                <div className='background-holder' style={{ backgroundImage: `url(${data.image})` }} />
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24} className='service-section__col service-section__col--content'>
                <div>
                  <div>
                    <FadeAnimation><h5 className='opacity-0'>{data.title}</h5></FadeAnimation>
                    <FadeAnimation>
                      <p className='opacity-0'>{data.desc}</p>
                    </FadeAnimation>
                    <FadeAnimation>
                      <a className='learn-more opacity-0' href='/'>
                        Learn more
                        <ScaleAnimation>
                          <span className='opacity-0'>⟶</span>
                        </ScaleAnimation>
                      </a>
                    </FadeAnimation>
                  </div>
                </div>
              </Col>
            </Row>
          );
        })}
        <Row gutter={[30, 30]} className='service-section__feature'>
          {featureModel && featureModel.map(data => (
            <Col key={data.id} xl={8} lg={8} md={8} sm={24} xs={24} className='service-section__feature__col'>
              <FadeAnimation>
                <h5>
                  <span className={data.icon} />
                  {data.title}
                </h5>
              </FadeAnimation>
              <FadeAnimation>
                <p>{data.desc}</p>
              </FadeAnimation>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default ServiceSection;