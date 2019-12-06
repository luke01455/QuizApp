import React from 'react';
import { withRouter } from 'react-router-dom';

import './prize-option.styles.scss';

const PrizeOption = ({ title, imageUrl, size, history }) => (
  <div
  onClick={() => history.push(`quiz/${title}`)}
  className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>ENTER NOW</span>
    </div>
  </div>
);

export default withRouter(PrizeOption);