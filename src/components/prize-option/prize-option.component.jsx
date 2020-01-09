import React from 'react';
import { withRouter } from 'react-router-dom';
import './prize-option.styles.scss';

const PrizeOption = ({ title, imageUrl, size, history, id, userCount, maxUsers }) => (
  <div
    onClick={() => history.push(`quiz/${title}/${id}`)}
    className={`${size} menu-item`}>

    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <div className='quiz-title-top'       style={{
        backgroundImage: `url(https://www.listenmoneymatters.com/wp-content/uploads/2018/10/FREE-Gift-Box-or-Card.jpg)`
      }}> £250 AMAZON GIFT CARD </div>
      <div className='quiz-title-bottom'> {title.toUpperCase()} </div>
    </div>


    <div className='content'>
      <h1 className='title'> ENTER </h1>
      <span className='subtitle'> {userCount} / {maxUsers} </span>
    </div>


  </div>
);

export default withRouter(PrizeOption);