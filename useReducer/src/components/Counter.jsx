import { useReducer } from 'react'

// Étape 1 : Définir le reducer
// Le reducer est une fonction qui prend deux arguments : l'état actuel et l'action
const counterReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

function Counter() {

// Étape 2 : Utiliser useReducer
// useReducer prend deux arguments : le reducer et l'état initial
// Ici, l'état initial est un objet avec une propriété "count" initialisée à 0
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
     
      <h1>Counter : useReducer</h1>
      <div>
      <p>Compteur : {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrémenter</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Décrémenter</button>
    </div>
     
    </>
  )
}

export default Counter