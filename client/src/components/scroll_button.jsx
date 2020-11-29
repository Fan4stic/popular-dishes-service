import React, { useState } from 'react';
const arrow = require('../styles/arrow.js');

const hoverCSS = {
  backgroundColor: "white",
  height: 34,
  width: 34,
  border: "1px solid #e6e6e6",
  borderRadius: "20px",
  margin: "0px 10px",
  cursor: 'pointer',
  zIndex: 500,
  marginRight: 0
};

const noHoverCSS = {
  backgroundColor: "white",
  height: 34,
  width: 34,
  boxShadow: "0 2px 6px 0 rgba(0,0,0,0.15)",
  border: "1px solid #e6e6e6",
  borderRadius: "20px",
  margin: "0px 10px",
  cursor: 'pointer',
  zIndex: 500,
  marginRight: 0
};

const imageStyle = {
  position: "relative",
  left: "8px",
  top: "8px"
};

const ScrollButton = ({ elementId, direction, ammount, style }) => {
  const [hasShadow, setHasShadow] = useState(false);
  const [buttonColor, setButtonColor] = useState('grey');

  const scroll = () => {
    if (direction === 'left') {
      document.getElementById(elementId).scrollLeft -= ammount;
    } else if (direction === 'right') {
      document.getElementById(elementId).scrollLeft += ammount;
    }
  };

  const divStyle = Object.assign(hasShadow ? hoverCSS : noHoverCSS, style);

  return (
    <div
      onMouseEnter={() => {setHasShadow(true); setButtonColor('black');}}
      onMouseLeave={() => {setHasShadow(false); setButtonColor('grey');}}
      onClick={() => {scroll();}}
      style={divStyle}
    >
      {
        (
          direction === 'left' && <img style={imageStyle} src={arrow.[buttonColor].left}></img> ||
          direction === 'right' && <img style={imageStyle} src={arrow.[buttonColor].right}></img>
        )
      }
    </div>
  );
};

export default ScrollButton;