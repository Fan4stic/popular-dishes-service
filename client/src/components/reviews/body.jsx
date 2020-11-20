import React from 'react';

const Body = ({ data }) => {
  return (
    <div style={{border: '1px solid black', fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 400, fontSize: 14, color: '#2b273c'}}>{data.review}</div>
  );
};

export default Body;