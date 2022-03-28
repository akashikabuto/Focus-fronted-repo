import { useEffect, useState, lazy, Suspense } from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';


const ShortBreakComponent = lazy(() => import('./ShortBreak'));
const PomodoroCoponent = lazy(() => import('./Pomodoro'));
const LongBreakComponent = lazy(() => import('./LongBreak'));
const AddTaskComponent = lazy(() => import('./AddTask'));



function Card() {

  const pomodoroTime = localStorage.getItem('pomodoroTime');
  const shortTime = localStorage.getItem('shortTime');
  const longTime = localStorage.getItem('longTime');

  const { shortBreak, count } = useSelector(store => store.tasks);
  const [isShortBreak, setIsShortBreak] = useState(false);
  const [_count, _setCount] = useState('');
  const [_long, _setLong] = useState(false);



  const setTheState = () => {
    if (shortBreak) {
      setIsShortBreak(true);
    }
    else setIsShortBreak(false);
  };

  function getCountNumber() {
    _setCount(count);
    if (count === 5) {
      _setLong(true);
    }
    if (count === 0) {
      _setLong(false);
    }
  }

  function setColors() {
    let className;
    if (isShortBreak) {
      className = 'short-break-card';
    }
    else if (_long) {
      className = 'long-break-card';
    }
    else className = 'pomodoro-card';
    return className;
  }

  const isSetColor = setColors();

  useEffect(() => {
    setTheState();
    getCountNumber();
    //eslint-disable-next-line
  }, [shortBreak, count, pomodoroTime, longTime, shortTime]);





  return (
    <div className={isSetColor}>
      <Header />
      <div className='card-container' >
        <div className='card-nav-bar' >
          {!(isShortBreak) && (!_long) ? <p className='wrapper' >Pomodoro</p> : <p>Pomodoro</p>}
          {isShortBreak ? <p className='wrapper'>Short break</p> : <p>Short break</p>}
          {_long ? <p className='wrapper'>Long break</p> : <p>Long break</p>}
        </div>
        <Suspense fallback={<div className='loader' >loading.......</div>} >
          {isShortBreak ? <ShortBreakComponent shortBreak={shortTime} /> : (_long ? <LongBreakComponent longBreak={longTime} /> : <PomodoroCoponent pomodoro={pomodoroTime} />)}
        </Suspense>
      </div>
      <Suspense fallback={<div className='loader' >loading.......</div>} >
        <AddTaskComponent isShort={isShortBreak} round={_count} long={_long} />
      </Suspense>
    </div>
  );
}

export default Card;