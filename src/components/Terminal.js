import React, { useState } from 'react';
import '../TerminalInput.css'; // Import CSS file for styling

const TerminalInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    // Add command to output
    setOutput([...output, { type: 'input', text: inputValue }]);
    // Handle command execution
    handleCommand(inputValue);
    // Clear input field
    setInputValue('');
  };

  const handleCommand = (command) => {
    // Convert command to lowercase and remove leading/trailing whitespace
    const trimmedCommand = command.trim().toLowerCase();

    // Here you can implement logic to handle different commands
    if (trimmedCommand === 'clear' || trimmedCommand === 'cls') {
        // Clear command
        setOutput([]);
    } else if (trimmedCommand === 'help') {
        // Display available commands
        setOutput([...output, { type: 'output', text: "Available commands: 'help', 'clear', 'creator'"}]);
    } else if (trimmedCommand === 'creator') {
        // Display information about the creator
        const creatorInfo = getCreatorInfo();
        const asciiArt = (
          <pre>
                _________<br/>
              / ======= \<br/>
             / __________\<br/>
            | ___________ |<br/>
            | | -       | |<br/>
            | |         | |<br/>
            | |_________| |<br/>
            \=____________/ {"art by brian macdonald" })<br/>
            / """"""""""" \ <br/>
           / ::::::::::::: \<br/>
          (_________________)
          </pre>
        );
        setOutput([
            ...output,
            { type: 'output', text: `Creator: ${creatorInfo.name}` },
            { type: 'output', text: `Description: ${creatorInfo.description}` },
            { type: 'output', text: `Age: ${creatorInfo.age}` },
            { type: 'output', text: 'ASCII art:' },
            { type: 'output', text: asciiArt },
        ]);
    } else {
        // For simplicity, let's just echo back the command for demonstration
        setOutput([...output, { type: 'output', text: command + " is an unknown command" }]);
    }
};



  const getCreatorInfo = () => {
    // Information about the creator
    const name = "Yannick Mueller";
    const description = "A description about the creator";

    // Calculate age based on birthdate
    const birthdate = new Date('2006-01-03'); 
    const currentDate = new Date();
    const ageDiffMs = currentDate - birthdate;
    const ageDate = new Date(ageDiffMs); // miliseconds from epoch
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    return { name, description, age };
  };

  return (
    <div className="terminal">
      <div className="terminal-window">
        <div className="user-info">Type 'help' to see list of commands</div>
        {output.map((item, index) => (
          <div key={index} className={item.type}>
            {item.text}
          </div>
        ))}
        <form onSubmit={handleInputSubmit}>
          <span>$</span>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default TerminalInput;
