import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import useWordGame from './hooks/useWordGame'

function App() {

  const {textAreaRef, 
        text, 
        handleChange, 
        isTimeRuning, 
        timeRemaining, 
        startGame, 
        wordCount} = useWordGame(1)

  return (
    <>
      <div>
            <h1>How fast do you type?</h1>
            <textarea
              ref={textAreaRef}
              value={text}
              onChange={handleChange}
              disabled={!isTimeRuning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={startGame} disabled={isTimeRuning}>Start</button>
            <h1>Word count: {wordCount} </h1>
        </div>
    </>
  );
}

export default App;
