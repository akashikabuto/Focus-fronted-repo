import { useEffect, useState } from 'react';
import Pomodoro from './Pomodoro';
import Header from '../components/Header';
import AddTask from './AddTask';
import ShortBreak from './ShortBreak';
import { useSelector } from 'react-redux';

function Card() {

  const { shortBreak } = useSelector(store => store.tasks);

  const [isShortBreak, setIsShortBreak] = useState(false);


  const setTheState = () => {
    if (shortBreak) {
      setIsShortBreak(true);
    }
  };

  function setColors() {
    let className;
    if (isShortBreak) {
      className = 'short-break-card';
    }
    else className = 'pomodoro-card';
    return className;
  }

  const isSetColor = setColors();

  useEffect(() => {
    setTheState();
    //eslint-disable-next-line
  }, [shortBreak]);

  return (
    <div className={isSetColor}>
      <Header />
      <div className='card-container' >
        <div className='card-nav-bar' >
          <p>Pomodoro</p>
          <p>Short break</p>
          <p>Long break</p>
        </div>
        {isShortBreak ? <ShortBreak /> : <Pomodoro />}
      </div>
      <AddTask isShort={isShortBreak} />
    </div>
  );
}

export default Card;