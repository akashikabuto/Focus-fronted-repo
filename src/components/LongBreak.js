import { useRef, useState } from 'react';
import Countdown from 'react-countdown';
import { useDispatch } from 'react-redux';
import { switchFromLongBreak } from '../Redux/actions/Tasks';



function LongBreak() {

  const dispatch = useDispatch();
  const initialState = {
    isCounting: false,
    date: Date.now() + 10000
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

  function onComplete() {
    dispatch(switchFromLongBreak());
  }
  //rgb(69, 124, 163)

  return (
    <div className='card-items' >
      <Countdown date={state.date} autoStart={false}
        controlled={false}
        ref={countDown}
        onComplete={onComplete}
        className="countdown" />
      {state.isCounting ? <button className='start-button-short-break' onClick={() => toogle()}  >Pause</button>
        : <button className='start-button-short-break' onClick={() => toogle()}  >Start</button>}
    </div>
  );
}

export default LongBreak;