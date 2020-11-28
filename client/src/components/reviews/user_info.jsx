import React from 'react';

const friendsIcon = 'https://hackreactorpics.s3-us-west-1.amazonaws.com/people-24px.svg';
const starIcon = 'https://hackreactorpics.s3-us-west-1.amazonaws.com/star-24px.svg';

const nameFormat = (name) => {
  let [firstName, lastName] = name.split(' ')
  return firstName + ' ' + lastName[0] + '.';
};

const avatarStyle = {
  position: 'relative',
  top: 3,
  height: 30,
  width: 30,
  borderRadius: 4,
  overflow: 'hidden'
};

const nameStyle = {fontFamily: "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif", fontWeight: 700, fontSize: 16, color: '#2b273c'};

const dataStyle = {
  display: 'grid',
  gridTemplateColumns: '18px auto',
  maxWidth: 60,
  fontSize: 14,
  fontWeight: 600,
  color: 'rgb(117, 114, 128)',
  fontFamily: "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif"
};

const UserInfo = ({ data }) => {
  return (
    <div style={{display: 'grid', gridTemplateColumns: '35px auto', minWidth: 200, minHeight: 50}}>
      <img id='avatar' style={avatarStyle} src={data.avatar}/>
      <div id='userInfo' style={{marginLeft: 3, display: 'grid', gridTemplateRows: '23px 23px'}}>
        <div style={nameStyle}>
          {nameFormat(data.name)}
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={Object.assign(dataStyle, {marginRight: 8})}>
            <svg xmlns="http://www.w3.org/2000/svg" top="5px" width="16" height="16" fill="rgb(117, 114, 128)" class="icon_svg"><path d="M11.23 1H4.77A3.77 3.77 0 001 4.77v6.46A3.77 3.77 0 004.77 15h6.46A3.77 3.77 0 0015 11.23V4.77A3.77 3.77 0 0011.23 1zM8 8.63a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM7 11h2.1a2 2 0 011.9 2H5a2 2 0 012-2zm6.05.23a1.71 1.71 0 01-.15.71 4 4 0 00-2.17-2.58 3.42 3.42 0 00.82-2.23 3.5 3.5 0 10-7 0 3.46 3.46 0 00.83 2.23 4 4 0 00-2.18 2.58 1.71 1.71 0 01-.2-.71V4.77C3 3.792 3.792 3 4.77 3h6.46c.978 0 1.77.792 1.77 1.77l.05 6.46z"></path></svg>
            {/* <img src={friendsIcon} style={{marginTop: 2, height: 15, width: 15}}/> */}
            {data.friends}
          </div>
          <div style={dataStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="icon_svg" fill="rgb(117, 114, 128)"><path d="M11.23 1A3.77 3.77 0 0115 4.77v6.46A3.77 3.77 0 0111.23 15H4.77A3.77 3.77 0 011 11.23V4.77A3.77 3.77 0 014.77 1h6.46zM13 11.23V4.77A1.77 1.77 0 0011.23 3H4.77A1.77 1.77 0 003 4.77v6.46c0 .978.792 1.77 1.77 1.77h6.46A1.77 1.77 0 0013 11.23zm-2.18-4.34a.51.51 0 01.41.34.51.51 0 01-.13.51L9.91 8.9l.29 1.61a.49.49 0 01-.2.49.51.51 0 01-.3.12.46.46 0 01-.23-.06L8 10.29l-1.47.77a.5.5 0 01-.72-.53l.28-1.63L4.9 7.74a.51.51 0 01-.13-.51.51.51 0 01.41-.34l1.64-.24.73-1.49a.52.52 0 01.9 0l.73 1.49 1.64.24z"></path></svg>
            {/* <img style={{marginTop: 3, height: 15, width: 15}} src={starIcon}/> */}
            {data.ratings}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;