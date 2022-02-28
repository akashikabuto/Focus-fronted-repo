import { useEffect, useState } from "react";
import { FaEllipsisV, FaPlusCircle } from "react-icons/fa";


function AddTask({ isShort, round, long }) {

  const token = localStorage.getItem('token');

  function setInputColor() {
    let _inputStyle;
    if (isShort) {
      _inputStyle = 'short-time-add-input';
    }
    else if (long) {
      _inputStyle = 'long-time-add-input';
    }
    else _inputStyle = 'pomodoro-add-input';
    return _inputStyle;
  }

  const [Token, setToken] = useState('');

  function seeToken() {
    setToken(token);
  }

  useEffect(() => {
    seeToken();
    //eslint-disable-next-line
  }, [token]);

  const setColor = setInputColor();

  return (
    <div className='add-task' >
      <p># {round} </p>
      <p>Time to focus</p>
      <div className='form-container'>
        <form className='add-task-form'>
          <input placeholder='Task' className={setColor} />
          <div className='elipse' >
            <FaEllipsisV color='white' />
          </div>
        </form>
      </div>
      {!Token ? <button className='add-task-button' disabled >
        <FaPlusCircle color='white' className='add-icon' />
        <p>Login in to add task</p>
      </button> :
        <button className='add-task-button'>
          <FaPlusCircle color='white' className='add-icon' />
          <p>Add task</p>
        </button>}

    </div>
  );
}

export default AddTask;