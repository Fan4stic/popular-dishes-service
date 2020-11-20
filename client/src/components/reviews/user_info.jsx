import React from 'react';

const friendsIcon = 'https://hackreactorpics.s3-us-west-1.amazonaws.com/people-24px.svg';
const starIcon = 'https://hackreactorpics.s3-us-west-1.amazonaws.com/star-24px.svg';

const nameFormat = (name) => {
  let [firstName, lastName] = name.split(' ')
  return firstName + ' ' + lastName[0] + '.';
};

const avatarStyle = {
  height: 30,
  width: 30,
  borderRadius: 4,
  overflow: 'hidden'
};

const nameStyle = {border: '1px solid green', fontFamily: "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 16, color: '#2b273c'};

const userStyle = {display: 'flex', flexDirection: 'row', border: '1px solid red', fontFamily: "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif", fontWeight: 600, fontSize: 14, color: '#757280'};

const UserInfo = ({ data }) => {
  return (
    <div style={{display: 'grid', gridTemplateColumns: '35px auto', minWidth: 200, minHeight: 50}}>
      <img id='avatar' style={avatarStyle} src={data.avatar}/>
      <div id='userInfo' style={{marginLeft: 3, display: 'grid', gridTemplateRows: '25px 25px', border: '1px solid black'}}>
        <div style={nameStyle}>
          {nameFormat(data.name)}
        </div>
        <div style={userStyle}>
          <div>
            <img src={friendsIcon} style={{marginTop: 2, height: 15, width: 15}}/>
            {data.friends}
          </div>
          <div style={{marginLeft: 7}}>
            <img style={{marginTop: 3, height: 15, width: 15}} src={starIcon}/>
            {data.ratings}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;