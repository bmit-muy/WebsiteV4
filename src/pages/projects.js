import React from 'react';
import CardDisplay from '../components/CardDisplay';


const cardData = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    image: 'https://via.placeholder.com/150',
    link: 'https://example.com/project1',
    buttonText: 'Visit Project 1',
    additionalText: 'Additional details for Project 1...'
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    image: 'https://via.placeholder.com/150',
    link: 'https://example.com/project2',
    buttonText: 'Visit Project 2',
    additionalText: 'Additional details for Project 2...'
  },
  {
    title: 'Project 3',
    description: 'Description for Project 3',
    image: 'https://via.placeholder.com/150',
    link: 'https://example.com/project3',
    buttonText: 'Visit Project 3',
    additionalText: 'Additional details for Project 3...'
  },
  // Add more projects as needed...
];

const Projects = () => {
  return ( 
    <div>
      <h1 className="App-quotes-title">Projects</h1>
      <CardDisplay cardData={cardData} />
    </div>
  );
}

export default Projects;
