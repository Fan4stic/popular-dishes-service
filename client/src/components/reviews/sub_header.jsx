import React from 'react';

const starsStyle = {
  height: 20,
  width: 108
};

const subHeaderStyle = {display: 'grid', gridTemplateColumns: '115px auto', height: 30, border: '1px solid purple', fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 400, fontSize: 14, color: '#757280'};

const SubHeader = ({ data }) => {

  const stars = `https://s3-us-west-1.amazonaws.com/fec.yelp/yelpStyle/Imageye+-+Styleguide/yelp_stars/web_and_ios/regular/regular_${data.rating}.png`;

  return (
    <div style={subHeaderStyle}>
      <div style={{marginTop: 5}}><img syle={starsStyle} src={stars}/></div>
      <div style={{marginTop: 7}}>{data.date}</div>
    </div>
  );
};

export default SubHeader;