import React, { useState } from 'react';
const arrow = require('../styles/arrow.js');

const hoverCSS = {
  "background-color": "white",
  "height": 34,
  "width": 34,
  "border": "1px solid #e6e6e6",
  "border-radius": "20px",
  "margin": "0px 10px"
};

const noHoverCSS = {
  "background-color": "white",
  "height": 34,
  "width": 34,
  "box-shadow": "0 2px 6px 0 rgba(0,0,0,0.15)",
  "border": "1px solid #e6e6e6",
  "border-radius": "20px",
  "margin": "0px 10px"
};

const imageStyle = {
  "position": "relative",
  "left": "8px",
  "top": "8px"
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