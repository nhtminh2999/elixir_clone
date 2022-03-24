import React from 'react';
import Slider from 'react-slick';
import HeroSliderItem from './HeroSliderItem';
import '../scss/hero_slider.scss';

const NextArrow = (props) => {
  return (
    <div className='hero__slider__arrow hero__slider__arrow--next' onClick={props.onClick}>
      <i className="fas fa-chevron-right" />
    </div>
  );
};

const PrevArrow = (props) => {
  return (
    <div className='hero__slider__arrow hero__slider__arrow--prev' onClick={props.onClick}>
      <i className="fas fa-chevron-left" />
    </div>
  );
}

const settings = {
  dots: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  infinite: true,
  fade: true,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 10000,
};

function HeroSlider(props) {
  return (
    <Slider {...settings} className='hero__slider'>
      {props.dataSource && props.dataSource.map(data => (
        <HeroSliderItem key={data.id} data={data} />
      ))}
      {/* <HeroSliderItem activeSlide={activeSlide} data={props.dataSource[0]} /> */}
    </Slider>
  );
}

export default HeroSlider