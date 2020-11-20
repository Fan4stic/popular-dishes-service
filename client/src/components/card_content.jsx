import React from 'react';

const imgStyle = {
  height: 120,
  width: 192
};

const nameStyle = {
  "white-space": "nowrap",
  "overflow": "hidden",
  "text-overflow": "ellipsis",
  "margin-bottom": 5,
  "font-weight": "700",
  "font-size": "14px",
  color: "#2b273c",
  "font-family": "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif"
};

const reviewsStyle = {
  "margin-top": 5,
  "font-size": "12px",
  "font-weight": "400",
  color: "#757280",
  "font-family": "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif"
};

const CardContent = ({ image, name, reviews, dish, changeDish }) => {
  return (
    <div onClick={() => {console.log(dish); changeDish(dish);}}>
      <img src={image} style={imgStyle}></img>
      <div style={{"padding-left": 16, "padding-right": 16}}>
        <p style={nameStyle}>{name}</p>
        <p style={reviewsStyle}>{`${reviews} Reviews`}</p>
      </div>
    </div>
  );
};

export default CardContent;