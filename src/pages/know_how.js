import React from 'react';
import SkillDisplay from '../components/SkillDisplay'; // Assuming SkillDisplay component is in the same directory

const KnowHow = () => {
  // Define an array of skills with names and proficiency levels
  const skillList = [
    { name: 'HTML', level: 30 },
    { name: 'CSS', level: 30 },
    { name: 'JavaScript', level: 40 },
    { name: 'React', level: 35 },
    { name: 'Node.js', level: 38 },
    { name: 'Rust', level: 10 },
    { name: 'Python', level: 43 },
    { name: 'PHP', level: 20 },
    { name: 'Laravel', level: 12 },
    // Add more skills as needed
  ];

  return (
    <div>
      <h1>Know How</h1>
      <SkillDisplay skillList={skillList} />
    </div>
  );
};

export default KnowHow;
