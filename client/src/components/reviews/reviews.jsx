import React from 'react';
import Review from './review.jsx';

const Reviews = ({ reviews }) => {
  return (
    <div>
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