import { useRef } from 'react'
import { useEffect } from 'react';

function Demo02() {

  const inputRef = useRef()

  console.log(inputRef);

  

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

    </>
  )
}

export default Demo02
