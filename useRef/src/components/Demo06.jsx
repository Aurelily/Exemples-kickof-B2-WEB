import { useRef } from 'react';

function Demo06() {
  const squareRef = useRef(null);

  const moveSquare = () => {
    const square = squareRef.current;
    console.log(square);

    if (square) {
        
      // Calculez la nouvelle position en ajoutant 100 pixels à la position actuelle
      const newPosition = square.offsetLeft + 100;

      // Déplacez le carré en modifiant la propriété offsetLeft
      square.style.left = `${newPosition}px`;
    }
  };

  return (
    <div>
      <button onClick={moveSquare}>Déplacer le carré</button>
      <div ref={squareRef} className="square"></div>
    </div>
  );
}

export default Demo06;
