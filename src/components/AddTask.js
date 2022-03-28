import { useEffect, useState } from "react";
import { FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../Redux/actions/Tasks";


function AddTask({ isShort, round, long }) {

  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const history = useHistory();
  let url = `https://focus250-api.herokuapp.com/`;

  const { allTasks } = useSelector(store => store.tasks);

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
  }, [token, allTasks]);

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const setColor = setInputColor();

  async function postTask(e) {
    e.preventDefault();
    setLoading(true);
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(name)
    };
    console.log(name);
    try {
      const res = await (await fetch(`${url}api/task/new`, config)).json();
      if (res.status === 201) {
        setLoading(false);
        dispatch(getAllTasks());
      }
      else if (res.status === 422) {
        setLoading(false);
        setMessage(res.error);
      }
      else if (res.status === 401) {
        setLoading(false);
        history.push('/login');
      }
    } catch (error) {
      setLoading(false);
      console.log("error", error);
      window.alert("Server error occured");
    }
  }

  return (
    <div className='add-task' >
      <p># {round} </p>
      <p>Time to focus</p>
      {message ? <p style={{ color: "red" }} > {message} </p> : ""}
      <div className='form-container'>
        <form className='add-task-form'>
          <input placeholder='Task' className={setColor}
            onChange={(e) => setName(e.target.value)}
          />
          <div className='elipse' >
            <FaEllipsisV color='white' />
          </div>
        </form>
      </div>
      {!Token ? <button className='add-task-button' disabled >
        <FaPlusCircle color='white' className='add-icon' />
        <p>Login in to add task</p>
      </button> :
        (loading ? <button className='add-task-button' disabled >
          <FaPlusCircle color='white' className='add-icon' />
          <p>Loading....</p>
        </button> : <button className='add-task-button'
          onClick={(e) => postTask(e)}
        >
          <FaPlusCircle color='white' className='add-icon' />
          <p>Add task</p>
        </button>
        )
      }
      <div className="all-tasks" >
        {allTasks.length > 0 ? allTasks.map(({ id, name }) => {
          return (
            <div key={id} >
              <p>{name}</p>
            </div>
          );
        }) : ""}
      </div>
    </div>
  );
}

export default AddTask;