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
  return <div>{profile && displayProfile}</div>;
};

const Wrapper = styled.div`
  display: flex;
  border: 1px solid red;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  width: 100%;
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
