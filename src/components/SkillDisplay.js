import React from 'react';
import { ListGroup, ProgressBar } from 'react-bootstrap';

const SkillDisplay = ({ skillList }) => {
  return (
    <div className="skill-display-container">
      <div className="skill-display">
        <h2 className="text-white">Skill Levels</h2>
        <ListGroup variant="flush">
          {skillList.map((skill, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center skill-item">
              <span className='skill-name'>{skill.name}</span>
              <div className="progress-container">
                <ProgressBar 
                  now={skill.level} 
                  label={`${skill.level}%`} 
                  variant="dark" 
                  className="custom-progress-bar"
                />
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default SkillDisplay;
