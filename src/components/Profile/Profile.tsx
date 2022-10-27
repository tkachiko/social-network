import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
  return (
    <div>
      <div>
        <ProfileInfo/>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;