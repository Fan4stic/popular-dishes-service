import React, { useState } from 'react';

const hoverCSS = {
  overflow: "hidden",
  height: 192, width: 192,
  "min-width": 192,
  "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
  "border": "1px solid #eeeeef",
  "border-radius": "5px"
};

const noHoverCSS = {
  overflow: "hidden",
  height: 192, width: 192,
  "min-width": 192,
  "border": "1px solid #eeeeef",
  "border-radius": "5px"
};

const Card = ({ children, style, className }) => {
  const [hasShadow, setHasShadow] = useState(false);

  const divStyle = Object.assign(hasShadow ? hoverCSS : noHoverCSS, style);

  return (
    <div
      onMouseEnter={() => {setHasShadow(true)}}
      onMouseLeave={() => {setHasShadow(false)}}
      style={divStyle}
      className={className}
    >
      {children}
    </div>
  );
};

export default Card;