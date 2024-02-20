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
      setOutput([...output, { type: 'output', text: "Available commands: 'help', 'clear'"}]);
    } else {
      // For simplicity, let's just echo back the command for demonstration
      setOutput([...output, { type: 'output', text: command + " is an unknown command" }]);
    }
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
