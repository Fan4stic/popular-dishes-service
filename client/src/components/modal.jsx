import React, { useState } from 'react';
import Reviews from './reviews/reviews.jsx';
const sampleDishes = require('../sample_data/sample_dishes.js');
const sampleReviews = require('../sample_data/sample_reviews.js');

const menuButtonURL = 'https://hackreactorpics.s3-us-west-1.amazonaws.com/Screen+Shot+2020-11-27+at+6.34.17+PM.png';

const modalBackgroundStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 998,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'stretch',
  boxSizing: 'border-box',
  paddingLeft: 80,
  paddingRight: 80,
  paddingTop: 40,
  paddingBottom: 40
};

const modalStyle = {
  backgroundColor: 'white',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) 390px',
  gridTemplateRows: '100%',
  width: '100%',
  height: '100%',
  borderRadius: 4,
  overflow: 'hidden'
};

const modalBannerStyle = {
  position: 'absolute',
  color: '#fff',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  fontFamily: 'Poppins,Helvetica Neue,Helvetica,Arial,sans-serif',
  fontSize: 12,
  fontWeight: 300,
  marginLeft: 30
};

const titleStyle = {
  fontSize: 28,
  fontWeight: 900,
  fontFamily: 'Poppins,Helvetica Neue,Helvetica,Arial,sans-serif',
  color: '#2b273c',
  marginBottom: 10,
  marginTop: 10
};

const priceStyle = {
  fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif',
  fontWeight: 900,
  fontSize: 14,
  marginBottom: 20
};

const descriptionStyle = {
  fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif',
  fontWeight: 900,
  fontSize: 14,
  height: 34
};

const closeStyle = {
  cursor: 'pointer',
  right: 80,
  top: 0,
  position: 'absolute',
  height: 20,
  width:20,
  color: 'white',
  fontSize: 35
};

const menuButtonStyle = {
  width: 360,
  height: 'auto'
};

const Modal = ({ shown, toggle, data, dish }) => {
  return (
    shown && (
      <div id="modal" style={modalBackgroundStyle}>
          <span style={closeStyle} onClick={() => {toggle()}}>&times;</span>
          <div style={modalStyle}>
            <div style={{position: 'relative', backgroundColor: 'black', display: 'flex'}}>
              {/* <div style={modalBannerStyle}>{`1 of ${dish.num_pics} ${dish.name}`}</div> */}
              <img style={{objectFit: 'contain', flexGrow: 1, minWidth: 0}} src={dish.picture}/>
            </div>
            <div style={{marginLeft: 20, marginRight: 20, width: 350, height: '100%'}}>
              <p style={titleStyle}>{dish.name}</p>
              <p style={priceStyle}>{`$${dish.price}.00`}</p>
              <p style={descriptionStyle}>{dish.description}</p>
              <Reviews reviews={dish.reviews}/>
              <img style={menuButtonStyle} src={menuButtonURL}></img>
            </div>
          </div>
      </div>
    )
  );
};

export default Modal;