import React, { useState } from 'react';

const hoverCSS = {
  overflow: "hidden",
  height: 192, width: 192,
  minWidth: 192,
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  border: "1px solid #eeeeef",
  borderRadius: "5px",
  cursor: 'pointer'
};

const noHoverCSS = {
  overflow: "hidden",
  height: 192, width: 192,
  minWidth: 192,
  border: "1px solid #eeeeef",
  borderRadius: "5px",
  cursor: 'pointer'
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