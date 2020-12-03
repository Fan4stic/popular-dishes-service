import React from 'react';

const bodyStyle = {
  fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif',
  fontWeight: 400,
  fontSize: 14,
  color: '#2b273c'
}

const Body = ({ data }) => {
  return (
    <div style={bodyStyle}>{data.review}</div>
  );
};

export default Body;