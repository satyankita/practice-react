import { useState, useRef } from "react";

export function Stopwatch() {
  const [start, setStart] = useState(null);
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef(null);

  if(start != null){
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const timer = (Date.now() - start) /1000;
      setTimer(timer);
    }, 10);
  }

  const handleStart = () => {
    setStart(Date.now());
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setStart(null);
  };

  return (
    <div>
      <h1>{timer.toFixed(2)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Stopwatch />
    </div>
  );
}

export default App;