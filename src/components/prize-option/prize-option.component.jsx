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
      
    <div className='quiz-title-top'style={{
      //  backgroundImage: `url(https://imgs.bigtop40.com/images/31596?crop=16_9&width=660&relax=1&signature=lxbxcRTWQtjzftEU7eZBZ05Bqwo=)`
      }}> WIN A £250 AMAZON GIFT CARD! </div>
      <div className="bottom-title-container">
      <div className='quiz-title-bottom'> {title} </div>
      <div className='quiz-price'> £2.99 </div>
      </div>
    </div>


    <div className='content'>
      <h1 className='title'> ENTER </h1>
      <span className='subtitle'> {userCount} / {maxUsers} </span>
    </div>

  </div>


);

export default withRouter(PrizeOption);