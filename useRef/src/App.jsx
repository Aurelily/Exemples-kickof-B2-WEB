import { useRef } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const inputRef = useRef(0)

  const isButtonClicked = useRef(false)

  console.log(inputRef);

  const handleClick = () =>{
    if(isButtonClicked.current){
      console.log("already clicked");
      return;
    }
    console.log("Clicked");
    isButtonClicked.current = true;
  }

  useEffect(()=>{
    inputRef.current.focus()
    inputRef.current.style.background = "red"
  }, [])

  return (
    <>
      <input type="text" ref={inputRef}/>

      {/* ref peut aussi etre une fonction callback concernant l'élément sur lequel il se trouve afin de le manipuler à son premier render. Pas besoin d'un useEffect*/}
      <input type="text" ref={(input)=>{
        console.log(input);
        input.style.background = "green"
      }}/>

      <button onClick={handleClick}>Cliquez moi</button>
    </>
  )
}

export default App
