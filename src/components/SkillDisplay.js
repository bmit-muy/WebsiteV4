import React from 'react';
import { ProgressBar, ListGroup } from 'react-bootstrap';

const SkillDisplay = ({ skillList }) => {
  return (
    <div className="skill-display">
      <h2 className="text-white">Skill Levels</h2>
      <ListGroup variant="flush">
        {skillList.map((skill, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-around align-items-center">
            <span className='skill-name'>{skill.name}</span>
            <ProgressBar now={skill.level} label={`${skill.level}%`} variant="dark" style={{ width: `${(2 / 3) * 100}%` }} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SkillDisplay;
