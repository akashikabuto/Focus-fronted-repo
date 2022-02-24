import { useRef, useState } from 'react';
import Countdown from 'react-countdown';


function Pomodoro() {


  const initialState = {
    isCounting: false,
    date: Date.now() + 1500000
  };

  const countDown = useRef(null);

  const [state, setState] = useState(initialState);


  const toogle = () => {
    if (!(state.isCounting)) {
      setState({ ...state, isCounting: true });
      countDown.current.start();
    }
    else {
      setState({ ...state, isCounting: false });
      countDown.current.pause();
    }
  };





  return (
    <div className='card-items' >
      <Countdown date={state.date} autoStart={false} className="countdown"
        controlled={false}
        ref={countDown} />
      {state.isCounting ? <button className='start-button' onClick={() => toogle()}  >Pause</button>
        : <button className='start-button' onClick={() => toogle()}  >Start</button>
      }
    </div>
  );
}

export default Pomodoro;