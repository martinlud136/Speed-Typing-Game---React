import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const START_TIME = 5

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(START_TIME)
  const [isTimeRuning, setIsTimeRuning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(e){
    const {value} = e.target
    setText(value)
  }

  function countTotalWords(text){
    const wordsArr = text.trim().split(' ')
    const arrFiltered = wordsArr.filter(word => word === '' ? 0 : word)
    return arrFiltered.length
  }

  function startGame(){
    setIsTimeRuning(true)
    setTimeRemaining(START_TIME)
    setText('')
  }

  function endGame(){
    setIsTimeRuning(false)
    setWordCount(countTotalWords(text))
  }

  useEffect(()=>{
    if(timeRemaining > 0 && isTimeRuning){
      setTimeout(() =>{
        setTimeRemaining( prevTime => prevTime - 1)
      }, 1000)
    } else if( timeRemaining === 0 ) {
      endGame()
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
            <button onClick={startGame}>Start</button>
            <h1>Word count: {wordCount} </h1>
        </div>
    </>
  );
}

export default App;
