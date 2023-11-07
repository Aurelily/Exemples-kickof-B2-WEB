// INITIALEMENT

/* export default function Section({children }) {
    return (
      <section>
            {children}
      </section>
    );
}  */


// DEMO 1 : Je dois donc créer un provider pour mon context. J'importe donc mon context
// J'entoure ensuite ce qui contiendra tous les enfants de ma section par un provider et je lui fait passer en valeur la props "level" afin qu'elle la diffuse
import { LevelContext } from "./context/LevelContext";

export default function Section({level, children }) {
    return (
      <section>
        <LevelContext.Provider value={level}>
            {children}
        </LevelContext.Provider>
      </section>
    );
  }


//DEMO 2 : Ici on utilise useContext AUSSI dans Section. Le context étant au dessus de tout, il peut même être lu comme ici dans le composant principal et diffusé dans toutes les section qui vont s'enchainer dedans
//-------------------------------------------------------------------------------------------------------
/* import { useContext } from 'react';
import { LevelContext } from "./context/LevelContext";

export default function Section({children }) {
    const level = useContext(LevelContext);
    return (
      <section>
        <LevelContext.Provider value={level + 1}>
            {children}
        </LevelContext.Provider>
      </section>
    );
  } */