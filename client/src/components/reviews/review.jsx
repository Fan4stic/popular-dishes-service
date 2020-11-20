import React from 'react';
import UserInfo from './user_info.jsx';
import SubHeader from './sub_header.jsx';
import Body from './body.jsx';

const Review = ({ data }) => {
  return (
    <div>
      <UserInfo data={data}/>
      <SubHeader data={data}/>
      <Body data={data}/>
    </div>
  );
};

export default Review;