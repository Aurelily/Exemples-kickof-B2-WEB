import { useRef } from 'react'
import { useEffect } from 'react';

function Demo03() {


  const isButtonClickedRef = useRef(false)
  console.log(isButtonClickedRef);


  const handleClick = () =>{
    if(isButtonClickedRef.current){
      console.log("already clicked");
      return;
    }
    console.log("Clicked");
    isButtonClickedRef.current = true;
  }


  return (
    <>
      <button onClick={handleClick}>Cliquez moi</button>
    </>
  )
}

export default Demo03
