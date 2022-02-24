import Countdown from 'react-countdown';

function ShortBreak() {
  return (
    <div className='card-items' >
      <Countdown date={Date.now() + 1500000} autoStart={false} className="countdown" />
      <button className='start-button' >Start</button>
    </div>

  );
}

export default ShortBreak;