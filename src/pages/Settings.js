import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Settings() {

  const history = useHistory();

  function goToHome() {
    history.push('/');
  }

  const initialState = {
    pomodoroTime: 5000,
    shortTime: 5000,
    longTime: 10000
  };
  const [state, setState] = useState(initialState);

  function setTime(e) {
    e.preventDefault();
    localStorage.setItem('pomodoroTime', state.pomodoroTime);
    localStorage.setItem('shortTime', state.shortTime);
    localStorage.setItem('longTime', state.longTime);
    window.alert('Time Set');
    document.getElementById('form').reset();
  }

  return (
    <div className='setting-container' >
      <h3 className='focus-title' onClick={() => goToHome()} >Focus</h3>
      <div className='setting-sub-container' >
        <h4 className='login-title' >Set time</h4>
        <hr />
        <br />
        <form onSubmit={(e) => setTime(e)} id="form" >
          <div className='inputs-container'>
            <label>Pomodoro time</label>
            <input placeholder='Example 30' className='login-input' onChange={(e) => setState({ ...state, pomodoroTime: e.target.value })} />
          </div>
          <div className='inputs-container' >
            <label>Short break time</label>
            <input placeholder='Example 30' className='login-input' onChange={(e) => setState({ ...state, shortTime: e.target.value })} />
          </div>
          <div className='inputs-container'>
            <label>Long break time</label>
            <input placeholder='Example 30' className='login-input' onChange={(e) => setState({ ...state, longTime: e.target.value })} />
          </div>
          <button className='Login-btn' >SET</button>
        </form>
      </div>
    </div>
  );
}
