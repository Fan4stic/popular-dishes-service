import React, { useState } from 'react';
import Reviews from './reviews/reviews.jsx';
const sampleDishes = require('../sample_data/sample_dishes.js');
const sampleReviews = require('../sample_data/sample_reviews.js');

const modalStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 998,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  height: '90%',
  width: '90%',
  paddingLeft: 80,
  paddingRight: 80,
  paddingTop: 40,
  paddingBottom: 40
};

const innerDivStyle = {
  backgroundColor: 'white',
  display: 'grid',
  gridTemplateColumns: 'auto 390px',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: 10,
  height: '100%',
  width: '90%',
  overflow: 'hidden'
};

const titleStyle = {
  fontSize: 28,
  fontWeight: 900,
  fontFamily: 'Poppins,Helvetica Neue,Helvetica,Arial,sans-serif',
  color: '#2b273c'
};

const closeStyle = {
  right: 135,
  top: 0,
  position: 'absolute',
  height: 20,
  width:20,
  color: 'white',
  fontSize: 35
};

const Modal = ({ shown, toggle, data, dish }) => {
  console.log(dish);
  return (
    shown && (
      <div id="modal" style={modalStyle}>
        <span style={closeStyle} onClick={() => {toggle()}}>&times;</span>
        <div style={innerDivStyle}>
          <div style={{backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img style={{objectFit: 'contain', width: '100%'}} src={dish.picture}/>
          </div>
          <div style={{marginLeft: 20, marginRight: 20, width: 350}}>
            <p style={titleStyle}>{sampleDishes[0].name}</p>
            <Reviews reviews={sampleReviews}/>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;