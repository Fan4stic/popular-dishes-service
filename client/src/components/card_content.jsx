import React from 'react';

const imgStyle = {
  height: 120,
  width: 192
};

const nameStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  marginBottom: 5,
  fontWeight: "700",
  fontSize: "14px",
  color: "#2b273c",
  fontFamily: "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif"
};

const reviewsStyle = {
  marginTop: 5,
  fontSize: "12px",
  fontWeight: "400",
  color: "#757280",
  fontFamily: "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif"
};

const priceStyle = {
  textAlign: 'right',
  padding: '3px 6px',
  marginRight: 5,
  borderRadius: 4,
  backgroundColor: 'rgba(51,51,51,.75)',
  color: '#fff',
  fontSize: 14,
  fontWeight: 400,
  fontFamily: "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
  zIndex: 499
};

const priceDivStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row-reverse',
  left: 0,
  bottom: 94,
  zIndex: 499
};

const CardContent = ({ image, name, reviews, dish, changeDish }) => {
  return (
    <div style={{position: 'relative'}} onClick={() => {changeDish(dish)}}>
      <img src={image} style={imgStyle}></img>
      <div style={{paddingLeft: 16, paddingRight: 16}}>
        <p style={nameStyle}>{name}</p>
        <p style={reviewsStyle}>{`${Math.floor(Math.random() * 50) + 1} Photos · ${reviews} Reviews`}</p>
      </div>
      <div style={priceDivStyle}>
        <span style={priceStyle}>{`$${dish.price}.00`}</span>
      </div>
    </div>
  );
};

export default CardContent;