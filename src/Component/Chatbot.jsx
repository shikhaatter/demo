import React, { useState } from 'react'

const Chatbot = () => {
    const [text,setText]=useState([]);
    const [input,setInput]=useState('');
    const handleChange=(e)=>{
        setInput(e.target.value)
    }
    const handlesubmit=(e)=>{
      e.preventDefault();


      const newtext = {
        id: messages.length,
        content: inputValue,
        sender: 'user',
      };
      
    }
    setText([...text,newtext])
  return (
    <>
      <form onSubmit={handlesubmit}>
        <input type="text" 
            onChange={handleChange}
            value={input}
        />
        <input type="submit" value="send" />
      </form>
    </>
  )
}

export default Chatbot
