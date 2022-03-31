import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Student = () => {
  const [profile, setProfiles] = useState([]);

  useEffect(() => {
    const studentProfile = async () => {
      const response = await axios(
        'https://api.hatchways.io/assessment/students'
      );
      setProfiles(response.data.students);
    };
    studentProfile();
  }, []);

  const gradeAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  const displayProfile = profile.map((students) => {
    return (
      <Wrapper>
        <Image>
          <img src={students.pic} alt="img" />
        </Image>
        <Information>
          <h1>
            {students.firstName} {students.lastName}
          </h1>
          <p>Email: {students.email}</p>
          <p>Company: {students.company}</p>
          <p>Skill: {students.skill}</p>
          <p>Average: {Math.round(gradeAverage(students.grades))}%</p>
        </Information>
      </Wrapper>
    );
  });
  return <Profile>{profile && displayProfile}</Profile>;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  width: 80%;
`;

const Profile = styled.div`
  border-radius: 10px;
  overflow: scroll;
  display: flex;
  width: 900px;
  height: 750px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 25px;
  background-color: white;
  &::-webkit-scrollbar {
    border-radius: 5px;
  }
`;

const Information = styled.div`
  h1 {
    font-size: 2.5rem;
  }
`;

const Image = styled.div`
  border: 1px solid grey;
  border-radius: 50%;
  img {
    width: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export default Student;
