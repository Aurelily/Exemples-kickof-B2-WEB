import { useState, useRef } from 'react';

export default function Demo04() {
  // État initial pour le moment de départ (startTime) et le moment actuel (now)
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  // Créez une référence pour stocker l'identifiant de l'intervalle
  const intervalRef = useRef(null);


  function handleStart() {
    if (startTime === null) {
      // Lorsque le bouton "Start" est cliqué pour la première fois
      setStartTime(Date.now());
    } else {
      // Lorsque le bouton "Start" est cliqué à nouveau
      const currentTime = Date.now();
      // Ajustez startTime pour tenir compte du temps écoulé
      setStartTime(startTime + (currentTime - now));
    }
  
    setNow(Date.now());
  
    clearInterval(intervalRef.current);
  
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  
  

  function handleStop() {
    // Lorsque le bouton "Stop" est cliqué, arrêtez l'intervalle en cours
    clearInterval(intervalRef.current);
    console.log('intervalRef :' + intervalRef.current);
  }


  // Calculez le temps écoulé en secondes, s'il y a un moment de départ et un moment actuel valides
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  // Fonction qui recharge la page complètement (et du coup réinitialise ref, composants, states ...)
  function handleReset(){
    window.location.reload();
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
