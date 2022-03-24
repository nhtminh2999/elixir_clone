import React from 'react';
import FadeAnimation from '../../../shared/components/FadeAnimation';

import '../scss/leader_card.scss'
function LeaderCard(props) {
  return (
    <div className='leader-card'>
      <img src={props.image} alt={props.name || ''} />
      <div>
        <FadeAnimation>
          <h5 className='opacity-0'>{props.name || ''}</h5>
        </FadeAnimation>
        <FadeAnimation>
          <h6 className='opacity-0'>{props.title || ''}</h6>
        </FadeAnimation>
        <FadeAnimation>
          <p className='opacity-0'>{props.desc || ''}</p>
        </FadeAnimation>
      </div>
    </div>
  );
}

export default LeaderCard;