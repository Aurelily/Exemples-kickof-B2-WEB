import { createContext } from 'react';

/* Etape 1 : Je créer deux Contextes pour plus de lisibilité :
    - TasksContext qui s’occupe de faire passer la liste de tâches
    - TasksDispatchContext qui fera passer les actions de la fonction dispatch du reducer */


export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

/* Les valeurs par defaut sont à null mais seront fournie par le composant principal TaskApp */