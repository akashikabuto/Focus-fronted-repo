import { useEffect, useState } from 'react';
import Pomodoro from './Pomodoro';
import Header from '../components/Header';
import AddTask from './AddTask';
import ShortBreak from './ShortBreak';
import LongBreak from './LongBreak';
import { useSelector } from 'react-redux';

function Card() {

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
  }, [shortBreak, count]);


  return (
    <div className={isSetColor}>
      <Header />
      <div className='card-container' >
        <div className='card-nav-bar' >
          {!(isShortBreak) && (!_long) ? <p className='wrapper' >Pomodoro</p> : <p >Pomodoro</p>}
          {isShortBreak ? <p className='wrapper'>Short break</p> : <p>Short break</p>}
          {_long ? <p className='wrapper'>Long break</p> : <p>Long break</p>}
        </div>
        {isShortBreak ? <ShortBreak /> : (_long ? <LongBreak /> : <Pomodoro />)}
      </div>
      <AddTask isShort={isShortBreak} round={_count} long={_long} />
    </div>
  );
}

export default Card;