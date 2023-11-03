import { useReducer } from 'react';

// Import des composants
//------------------------------
import AddTask from './AddTask';
import TaskList from './TaskList';

// Etape 2 : Import de mes 2 context dans mon app
//------------------------------
import { TasksContext, TasksDispatchContext } from '../contexts/TaskContext';

export default function TaskApp() {

  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'ADDED',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'CHANGED',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'DELETED',
      id: taskId
    });
  }

  return (
    <>
    {/* Etape 2 : Je mets le state “tasks”et la fonction dispatch() dans les valeurs des Providers des contexts */}
    <TasksContext.Provider value = {tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>ToDo List</h1>
       {/*  Etape 3 : Je peux supprimer le passage de props de mes composants !
        <AddTask
          onAddTask={handleAddTask}
        /> */}
         <AddTask/>
        {/* Initialement : TaskApp passe une liste de taches (via le state "tasks") et des gestionnaires d'evenements au composant TaskList */}
      {/*   <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        /> */}
          <TaskList/>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
    </>
  );
}

// Reducer : TaskReducer
//------------------------------
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'ADDED': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'CHANGED': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'DELETED': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// Liste de tache et ID "en dur" dans une variable et un objet ci dessous. Pas de BDD dans cet exemple
// -----------------------------------------------------------------------------------------------------
/* Etape 3 : Je mets cette variable directement dans le composant AddTask */
/* let nextId = 3; */
const initialTasks = [
  { id: 0, text: 'Faire la vaisselle', done: true },
  { id: 1, text: 'Changer ampoule sdb', done: false },
  { id: 2, text: 'Acheter croquettes chat', done: false }
];
