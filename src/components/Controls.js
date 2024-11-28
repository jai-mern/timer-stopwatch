import React, { useState } from 'react';
import Timer from './Timer';
import Stopwatch from './Stopwatch';

const Controls = () => {
  const [mode, setMode] = useState('timer');

  return (
    <div>
      <button onClick={() => setMode('timer')}>Timer</button>
      <button onClick={() => setMode('stopwatch')}>Stopwatch</button>
      {mode === 'timer' ? <Timer initialTime={60} /> : <Stopwatch />}
    </div>
  );
};

export default Controls;
