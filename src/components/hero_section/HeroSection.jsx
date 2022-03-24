import React from 'react'
import HeroSlider from './components/HeroSlider';
import { heroSectionModel } from './model/HeroSection.Model';
import './scss/hero_section.scss';
function HeroSection() {
  return (
    <section id='#hero' className='hero-section'>
      <HeroSlider dataSource={heroSectionModel} />
    </section>
  );
}

export default HeroSection;