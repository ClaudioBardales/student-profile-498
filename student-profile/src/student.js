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
      console.log(response.data.students);
      setProfiles(response.data.students);
    };
    studentProfile();
  }, []);

  //   const gradeAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  const displayProfile = profile.map((students) => {
    return (
      <div>
        <img src={students.pic} alt="img" />
        <h1>
          {students.firstName} {students.lastName}
        </h1>
        <p>Email: {students.email}</p>
        <p>Company: {students.company}</p>
        <p>Skill: {students.skill}</p>
        <p>Average: {students.grade}%</p>
      </div>
    );
  });
  return <Profile>{profile && displayProfile}</Profile>;
}

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

export default Student;
