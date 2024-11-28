import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  return (
    <div>
      <h2>Timer</h2>
      <p>{time} seconds</p>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => setTime(initialTime)}>Reset</button>
    </div>
  );
};

export default Timer;
