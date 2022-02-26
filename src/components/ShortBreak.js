import { useRef, useState } from 'react';
import Countdown from 'react-countdown';
import { useDispatch } from 'react-redux';
import { switchToPomodoro, increaseCounter } from '../Redux/actions/Tasks';



function ShortBreak() {

  const dispatch = useDispatch();
  const initialState = {
    isCounting: false,
    date: Date.now() + 5000
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
    dispatch(switchToPomodoro());
    dispatch(increaseCounter());
  }


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

export default ShortBreak;