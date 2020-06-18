import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRuning, setIsTimeRuning] = useState(false)

  function handleChange(e){
    const {value} = e.target
    setText(value)
  }

  function countTotalWords(text){
    const wordsArr = text.trim().split(' ')
    const arrFiltered = wordsArr.filter(word => word === '' ? 0 : word)
    return arrFiltered.length
  }

  useEffect(()=>{
    if(timeRemaining > 0 && isTimeRuning){
      setTimeout(() =>{
        setTimeRemaining( prevTime => prevTime - 1)
      }, 1000)
    }else if(isTimeRuning === 0){
      setIsTimeRuning(false)
    }
  },[timeRemaining, isTimeRuning])

  return (
    <>
      <div>
            <h1>How fast do you type?</h1>
            <textarea
              value={text}
              onChange={handleChange}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={() => setIsTimeRuning(true)}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    </>
  );
}

export default App;
