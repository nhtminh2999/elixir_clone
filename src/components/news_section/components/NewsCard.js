import React from 'react';
import FadeAnimation from '../../../shared/components/FadeAnimation';
import ScaleAnimation from '../../../shared/components/ScaleAnimation';
import '../scss/news_card.scss';

function NewsCard(props) {
  return (
    <div className="news-card">
      <img src={props.thumbnail} alt="" />
      <div>
        <a href="/">
          <FadeAnimation>
            <h5 className='opacity-0'>{props.title}</h5>
          </FadeAnimation>
        </a>
        <FadeAnimation>
          <p className='news-card__author opacity-0'>By {props.author}</p>
        </FadeAnimation>
        <FadeAnimation>
          <p className='news-card__excerpt opacity-0'>
            {props.excerpt}
          </p>
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
  )
}

export default NewsCard;
