import React from 'react';
import { Col, Row } from 'antd';
import Slider from 'react-slick';

import '../scss/feedback_slider.scss';
import { feedbackSectionModel } from '../model/FeedbackSection.Model';

const PrevArrow = (props) => {
  return (
    <div className='feedback__slider__arrow feedback__slider__arrow--prev' onClick={props.onClick}>
      <span className="fa fa-angle-left" />
    </div>
  );
};

const NextArrow = (props) => {
  return (
    <div className='feedback__slider__arrow feedback__slider__arrow--next' onClick={props.onClick}>
      <span className="fa fa-angle-right" />
    </div>
  );
};

const settings = {
  dots: false,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
};

const FeedBackSliderItem = (props) => {
  return (
    <Row gutter={[30, 30]} className='feedback__slider__item'>
      <Col xl={6} lg={6} md={6} sm={24} xs={24} className='feedback__slider__item__image'>
        <img src={props.image} alt={props.name} />
      </Col>
      <Col xl={18} lg={18} md={18} sm={24} xs={24} className='feedback__slider__item__detail'>
        <p className='lead'>
          {props.feedback || ''}
        </p>
        <h6>{props.name || ''}</h6>
        <p>{props.title || ''}</p>
      </Col>
    </Row>
  );
};

function FeedbackSlider() {
  return (
    <Slider {...settings} className='feedback__slider'>
      {feedbackSectionModel && feedbackSectionModel.map(data => (
        <FeedBackSliderItem key={data.id} name={data.name} title={data.title} image={data.image} feedback={data.feedback} />
      ))}
    </Slider>
  )
}

export default FeedbackSlider;