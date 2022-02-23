import Countdown from 'react-countdown';
import React from 'react';


function Pomodoro() {
  return (
    <div className='card-items' >
      <Countdown date={Date.now() + 1500000} autoStart={false} className="countdown" />
      <button className='start-button' >Start</button>
    </div>
  );
}

export default Pomodoro;