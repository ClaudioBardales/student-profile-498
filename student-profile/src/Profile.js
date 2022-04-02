import React from 'react';
import styled from 'styled-components';
import Student from './Student';

const Profile = () => {
  return (
    <ProfileContainer>
      <Student />
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  border-radius: 10px;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  width: 900px;
  height: 650px;
  align-items: center;
  background-color: white;
  &::-webkit-scrollbar {
    border-radius: 5px;
    display: none;
  }
`;

export default Profile;
