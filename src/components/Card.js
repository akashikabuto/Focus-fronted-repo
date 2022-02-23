import Pomodoro from './Pomodoro';
import Header from '../components/Header';
import AddTask from './AddTask';

function Card() {
  return (
    <div className='Card'>
      <Header />
      <div className='card-container' >
        <div className='card-nav-bar' >
          <p>Pomodoro</p>
          <p>Short break</p>
          <p>Long break</p>
        </div>
        <Pomodoro />
      </div>
      <AddTask />
    </div>
  );
}

export default Card;