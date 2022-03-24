import { Col, Row } from 'antd';
import React from 'react';
import FadeAnimation from '../../shared/components/FadeAnimation';
import ScaleAnimation from '../../shared/components/ScaleAnimation';
import { advantageModel, featureModel } from './model/IntroSection.Model';
import videobg from '../../assets/video-screenshot-2.jpg';
import './scss/intro_section.scss';
function IntroSection() {
  return (
    <>
      <section id="intro" className='intro-section'>
        <div className="container">
          <Row gutter={[30, 0]} justify='center' align='middle'>
            <Col xl={12} lg={12} md={12} sm={20} xs={20} className='text-center'>
              <h3 className='section-title'>
                Welcome to the Elixir
              </h3>
              <p className='section-desc'>
                Get expert consultancy and support with Elixir, an advisory firm that stand by your side always.
              </p>
              <ScaleAnimation>
                <hr className='short text-center opacity-0' />
              </ScaleAnimation>
            </Col>
          </Row>
          <Row gutter={[30, 30]} align='middle' className='intro-section__feature'>
            {featureModel && featureModel.map(feature => (
              <Col key={feature.id} xl={6} lg={6} md={12} sm={24} xs={24} className='text-center'>
                <FadeAnimation>
                  <div className='intro-section__feature__icon opacity-0'>
                    <span>
                      <i className={feature.icon}></i>
                    </span>
                  </div>
                </FadeAnimation>
                <FadeAnimation>
                  <h5 className='intro-section__feature__title opacity-0'>
                    {feature.title}
                  </h5>
                </FadeAnimation>
                <FadeAnimation>
                  <p className='intro-section__feature__desc opacity-0'>
                    {feature.desc}
                  </p>
                </FadeAnimation>
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <section className="intro-section__video">
        <div className="container">
          <Row gutter={[30, 0]} justify='center' align='middle'>
            <Col xl={24} lg={24} md={24} sm={22} xs={22}>
              <div className='intro-section__video__main'>
                <div className='background-holder' style={{ backgroundImage: `url(${videobg})` }}>

                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className='intro-section__advantage'>
        <div className="container">
          <Row gutter={[30, 30]}>
            {advantageModel && advantageModel.map(data => (
              <Col key={data.id} xl={8} lg={8} md={8} sm={24} xs={24} className='intro-section__advantage__item'>
                <FadeAnimation>
                  <h5 className='opacity-0'>
                    <span className={data.icon} />
                    {data.title}
                  </h5>
                </FadeAnimation>
                <FadeAnimation>
                  <p className='opacity-0'>
                    {data.desc}
                  </p>
                </FadeAnimation>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
}

export default IntroSection;