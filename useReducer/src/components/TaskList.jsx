import { useState, useContext } from 'react';

/* Etape 3 : J'utilise le context pour avoir accès aux tasks et à dispatch() */
import { TasksContext, TasksDispatchContext } from '../contexts/TaskContext';

/* export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask
}) { */
export default function TaskList() {

  /* Etape 3 : Je mets le context qui me donne accès à la liste de tâches dans une variable */
  const tasks = useContext(TasksContext);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
        {/* Initialement : TaskList passe des gestionnaires d'evenements au composant Task */}
       {/*    <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          /> */}
        <Task task={task}/>
        </li>
      ))}
    </ul>
  );
}

// Composant Task
//-------------------

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  // Etape 3 : J'utilise le context pour avoir accès à la méthode dispatch() et aux méthodes du CRUD qu'il y a dedans
  const dispatch = useContext(TasksDispatchContext);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            /* onChange({
              ...task,
              text: e.target.value */
              dispatch({
                type: 'CHANGED',
                task: {
                  ...task,
                  text: e.target.value
                }
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          /* onChange({
            ...task,
            done: e.target.checked */
            dispatch({
              type: 'CHANGED',
              task: {
                ...task,
                done: e.target.checked
              }
          });
        }}
      />
      {taskContent}
      <button onClick={() => /* onDelete(task.id) */
    {
      dispatch({
        type: 'DELETED',
        id: task.id
      });
    }}>
        Delete
      </button>
    </label>
  );
}
