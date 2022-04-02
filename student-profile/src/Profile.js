import React from 'react';
import styled from 'styled-components';
import SearchBar1 from './SearchBar/SearchBar1';
import Student from './Student';

const Profile = () => {
  return (
    <ProfileContainer>
      <SearchBar1 />
      <Student />
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  border-radius: 10px;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  width: 900px;
  height: 750px;
  align-items: center;
  background-color: white;
  &::-webkit-scrollbar {
    border-radius: 5px;
  }
`;

export default Profile;
