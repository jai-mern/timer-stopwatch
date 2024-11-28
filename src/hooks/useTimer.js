import { useState, useEffect } from 'react';

const useTimer = (initialTime, step = 1, isCountdown = false) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => (isCountdown ? prevTime - step : prevTime + step));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isCountdown, step]);

  const reset = () => setTime(initialTime);
  return { time, isRunning, setIsRunning, reset };
};

export default useTimer;
