import React, { useState } from 'react';

const hoverCSS = {
  overflow: "hidden",
  height: 192, width: 192,
  "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
  "border": "1px solid #c9c9c9",
  "border-radius": "5px",
  "margin": "0px 10px"
};

const noHoverCSS = {
  overflow: "hidden",
  height: 192, width: 192,
  "border": "1px solid #c9c9c9",
  "border-radius": "5px",
  "margin": "0px 10px"
};

const Card = ({ content }) => {
  const [hasShadow, setHasShadow] = useState(false);

  return (
    <div
      onMouseEnter={() => {setHasShadow(true)}}
      onMouseLeave={() => {setHasShadow(false)}}
      style={hasShadow ? hoverCSS : noHoverCSS}
    >
      {content}
    </div>
  );
};

export default Card;