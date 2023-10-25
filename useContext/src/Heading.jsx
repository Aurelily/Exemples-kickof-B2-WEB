import { useContext } from 'react';
import { LevelContext } from './context/LevelContext';

// Avec useContext plus besoin de passer le props "level" dans ce compo. On va juste importer le context crée et le lire
// Par contre ça ne fonctionne pas encore si on ne fourni pas le context à Section grâce à un provider (fournisseur)
// Tant qu'il n'y a pas de provider, la valeur de level sera la valeur par defaut donnée dans le context (soit 1)

export default function Heading({ children }) {
   const level = useContext(LevelContext); 

    switch (level) {
      case 1:
        return <h1>{children}</h1>;
      case 2:
        return <h2>{children}</h2>;
      case 3:
        return <h3>{children}</h3>;
      case 4:
        return <h4>{children}</h4>;
      case 5:
        return <h5>{children}</h5>;
      case 6:
        return <h6>{children}</h6>;
      default:
        throw Error('Unknown level: ' + level);
    }
  }
  