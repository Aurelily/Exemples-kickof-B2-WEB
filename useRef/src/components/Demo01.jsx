import { useRef, useState } from 'react'

let variable = 0;

const Demo01 = () => {
  const [state, setState] = useState(0);
  const ref = useRef(0);

  const incrementState = () => {
    setState(state + 1);
  };

  const incrementRef = () => {
    ref.current += 1;
    console.log('ref : ' + ref.current);
  };

  const incrementVariable = () => {
    variable += 1;
    console.log('variable : ' + variable);
  };

  return (
    <div>
      <button onClick={incrementState}>Increment state ({state})</button>
      <button onClick={incrementRef}>Increment ref ({ref.current})</button>
      <button onClick={incrementVariable}>Increment variable ({variable})</button>
    </div>
  );
};

export default Demo01
