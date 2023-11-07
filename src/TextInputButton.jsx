import React, { useState } from 'react';
import './TextInputButton.css';

function TextInputButton() {
  const [text, setText] = useState('');
  
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    // You can perform some action with the text here
    console.log('Text entered:', text);
  };

  return (

    <div className='textInputButton'>
      <h1>Welcome to the chatbot communication interface</h1>
      <input
        type="text"
        placeholder="Write message to a chatbot..."
        value={text}
        onChange={handleTextChange}
      />
      <button onClick={handleButtonClick}>Send</button>
    </div>
  );
}

export default TextInputButton;
