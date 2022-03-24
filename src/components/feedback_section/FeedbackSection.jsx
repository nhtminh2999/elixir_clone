import React from 'react'
import FeedbackSlider from './components/FeedbackSlider';

import './scss/feedback_section.scss';
function FeedbackSection() {
  return (
    <section className='feedback-section'>
      <div className="container">
        <FeedbackSlider />
      </div>
    </section>
  );
}

export default FeedbackSection;