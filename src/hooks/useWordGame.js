import {useState, useEffect, useRef} from 'react';

function useWordGame(startTime = 10){

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(startTime)
  const [isTimeRuning, setIsTimeRuning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textAreaRef = useRef(null)

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
    setTimeRemaining(startTime)
    setText('')
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
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

  return {textAreaRef, text, handleChange, isTimeRuning, timeRemaining, startGame, wordCount}
}

export default useWordGame