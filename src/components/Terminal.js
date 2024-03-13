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
      setOutput([
        ...output,
        { type: 'output', text: "Available commands: 'help', 'clear', 'creator'" }
      ]);
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
        { type: 'output', text: creatorInfo.description },
        { type: 'output', text: `Age: ${creatorInfo.age}` },
        { type: 'output', text: 'ASCII art:' },
        { type: 'output', text: asciiArt },
      ]);
    } else {
      // For simplicity, let's just echo back the command for demonstration
      setOutput([
        ...output,
        { type: 'output', text: command + " is an unknown command" }
      ]);
    }
  };

  // Information about the creator
  const getCreatorInfo = () => {
    const name = "Yannick Mueller";
    const description = (
      <pre >
        Hey there! I'm Yannick Müller, a programmer who loves bringing ideas to life with code.<br /><br />
        Since I first started coding, I've been hooked on the challenge of solving problems and making things work. I'm always learning and trying out new techniques to improve my skills.<br /><br />
        I enjoy building websites, writing programs, and figuring out how things work behind the scenes. Whether it's creating a new app or fixing bugs in existing software, I'm always up for the challenge.<br /><br />
        Outside of coding, I like to explore new technologies and stay up-to-date with the latest trends in the tech world. I believe in the importance of sharing knowledge and helping others learn, so I'm always happy to lend a hand or share what I know.<br /><br />
        Join me as we explore the exciting world of programming together. Let's build something amazing!<br />
      </pre>
    );

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
