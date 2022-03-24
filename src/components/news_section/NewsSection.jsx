import React from 'react';
import { Row, Col } from 'antd';
import ScaleAnimation from '../../shared/components/ScaleAnimation';
import NewsCard from './components/NewsCard';
import './scss/news_section.scss';
import { newsSectionModel } from './model/NewsSection.Model';

function NewsSection() {
  return (
    <section id='news' className='news-section'>
      <div className="container">
        <h3 className='section-title text-center'>
          Latest News
        </h3>
        <ScaleAnimation>
          <hr className='short text-center' />
        </ScaleAnimation>
        <Row gutter={[30, 30]} className='news-section__row'>
          {newsSectionModel && newsSectionModel.map(data => (
            <Col key={data.id} xl={8} lg={8} md={24} sm={24} xs={24}>
              <NewsCard {...data} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default NewsSection;