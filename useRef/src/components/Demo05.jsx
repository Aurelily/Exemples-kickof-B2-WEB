import React, { useRef } from 'react';

function Demo05() {

  // Créez une référence pour l'élément DOM de la boîte de dialogue modale
  const modalRef = useRef();


  return (
    <div className='container'>
      
      {/* Div de la modal avec la référence modalRef */}
      <div ref={modalRef} className="modal-content">
        <button className="close" onClick={()=>{modalRef.current.style.display = 'none';}}>CLOSE</button>
        <p>Contenu de la modal</p>
      </div>

      <button onClick={()=>{modalRef.current.style.display = 'block';}}>OPEN</button>
    </div>
  );
}

export default Demo05;
