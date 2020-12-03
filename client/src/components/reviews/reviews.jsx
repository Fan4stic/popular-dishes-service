import React from 'react';
import Review from './review.jsx';

const headerStyle = {
  fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif',
  fontSize: 16,
  fontWeight: 700
};

const Reviews = ({ reviews }) => {
  return (
    <div style={{overflow: 'auto', height: '68%'}}>
      <p style={headerStyle}>{`Reviews(${reviews.length})`}</p>
      {
        reviews &&
        reviews.map((review, index) => {
          return (
            <div style={{marginTop: 20, marginBottom: 20}}>
              <Review key={index} data={review}/>
            </div>
          )
        })
      }
    </div>
  );
};

export default Reviews;