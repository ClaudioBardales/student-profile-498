import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Student() {
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

  //   const gradeAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  const displayProfile = profile.map((students) => {
    return (
      <StudentContainer>
        <Image>
          <img src={students.pic} alt="img" />
        </Image>
        <div>
          <h1>
            {students.firstName} {students.lastName}
          </h1>
          <p>Email: {students.email}</p>
          <p>Company: {students.company}</p>
          <p>Skill: {students.skill}</p>
          <p>Average: {students.grade}%</p>
        </div>
      </StudentContainer>
    );
  });
  return <Profile>{profile && displayProfile}</Profile>;
}

const StudentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 35px;
  justify-content: flex-start;
  align-items: center;
`;

const Profile = styled.div`
  border-radius: 10px;
  overflow: scroll;
  display: flex;
  width: 900px;
  height: 700px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 25px;
  background-color: white;
  &::-webkit-scrollbar {
    border-radius: 5px;
  }
`;

const Image = styled.div`
  border: 1px solid grey;
  border-radius: 50%;
  img {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Student;
