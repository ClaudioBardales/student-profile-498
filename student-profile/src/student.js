import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StudentProfiles = () => {
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

  const displayProfile = profile
    .filter((item) => {
      if (searchInput === '') {
        return item;
      } else {
        item.students.firstName
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      }
    })
    .map((students) => {
      return (
        <Container>
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
        </Container>
      );
    });
  return <div>{profile && displayProfile}</div>;
};

export const Student = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <Test>
        <input type="text" onChange={(e) => setSearchInput(e.target.value)} />
      </Test>
      <StudentProfiles />
    </>
  );
};

const Test = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  min-height: 10vh;
  position: sticky;
  top: 0;
  input {
    width: 100%;
    padding: 1rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    outline: none;
    font-size: 30px;
  }
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
