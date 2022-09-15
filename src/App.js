import React from 'react';
import './App.css';

function App() {
  const userName = 'Алексей'
  const theme = "dark"
  
  return (
    <div className="App">
      <Message theme = {theme} />
      <MessageUser name = {userName} />
    </div>
  );
}

export default App;

const Message = ({theme}) =>{
  return(
    <div style={{background: theme === "dark" ? "#222222" : "#fff"}}>
      <h1>Привет, Алексей</h1>
    </div>
  )
}

const MessageUser = ({name}) =>{
  return(
    <div>
      <h1>Привет, {name}</h1>
    </div>
  )
}