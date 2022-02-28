import { switchToBreak } from '../Redux/actions/Tasks';
import { useRef, useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { useDispatch } from 'react-redux';


//1500000

function Pomodoro({ pomodoro }) {

  let k = parseInt(pomodoro);

  let pomodoroValue = Date.now() + k;

  const initialState = {
    isCounting: false,
    date: Date.now() + pomodoroValue
  };

  function getTime() {
    setState({ ...state, date: pomodoroValue });
  }

  useEffect(() => {
    getTime();
    //eslint-disable-next-line
  }, []);

  const dispatch = useDispatch();
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

  const onComplete = () => {
    dispatch(switchToBreak());
  };


  return (
    <div className='card-items'>
      <Countdown date={state.date} autoStart={false} className="countdown"
        controlled={false}
        ref={countDown}
        onComplete={onComplete}
      />
      {state.isCounting ? <button className='start-button-pomodoro' onClick={() => toogle()}  >Pause</button>
        : <button className='start-button-pomodoro' onClick={() => toogle()}  >Start</button>
      }
    </div>
  );
}

export default Pomodoro;