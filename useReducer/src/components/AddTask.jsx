import { useState, useContext } from 'react';

/* Etape 3 : J'utilise le context pour avoir accès aux tasks et à dispatch() */
import { TasksDispatchContext } from '../contexts/TaskContext';

export default function AddTask(/* { onAddTask } */) {
  const [text, setText] = useState('');

  /* Etape 3 : Je mets le context qui me donne accès à dispatch() dans une variable */
  const dispatch = useContext(TasksDispatchContext);


  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch({
          type: 'ADDED',
          id: nextId++,
          text: text,
        }); 
      }}>Add</button>
    </>
  )
}

let nextId = 3;