import React from 'react'
import { Col, Row } from 'antd';
import FadeAnimation from '../../../shared/components/FadeAnimation';
import '../scss/hero_slider_item.scss';

function HeroSliderItem(props) {
  return (
    <div className='hero__slider__item'>
      <div className='background-holder' style={{ backgroundImage: `url(${props.data.bg})` }} />
      <div className="container">
        <Row gutter={[30, 30]} align='middle' className='hero__slider__item__content'>
          <Col lg={14} sm={16}>
            <FadeAnimation >
              <h1>{props.data.title}</h1>
            </FadeAnimation>
            <FadeAnimation>
              <p>{props.data.desc}</p>
            </FadeAnimation>
            <Row gutter={[0, 15]} >
              <Col xl={7} lg={7} md={24} sm={24} xs={24}>
                <FadeAnimation>
                  <button className='btn btn-primary'>
                    Read more
                    <i className='fa fa-chevron-right ml-2' />
                  </button>
                </FadeAnimation>
              </Col>
              <Col xl={17} lg={17} md={24} sm={24} xs={24}>
                <FadeAnimation>
                  <button className='btn btn-warning'>
                    Contact us
                    <i className='fa fa-chevron-right ml-2' />
                  </button>
                </FadeAnimation>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default React.memo(HeroSliderItem);