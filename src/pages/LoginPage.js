import { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function LoginPage() {

  let url = `https://focus250-api.herokuapp.com/`;

  const [isSignUp, setIsSignUp] = useState(false);

  function toogle() {
    if (!isSignUp) {
      setIsSignUp(true);
    }
    else setIsSignUp(false);
  }

  const history = useHistory();

  function goToHome() {
    history.push('/');
  }

  const initialState = {
    email: "",
    password: "",
    loading: false,
    message: false
  };

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');


  async function Register(e) {
    e.preventDefault();
    setLoading(true);
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state)
    };
    try {
      console.log(state);
      const res = await (await fetch(`${url}api/user/signup`, config)).json();
      if (res.status === 201) {
        setLoading(false);
        setState({ ...state, message: true });
        document.getElementById('form').reset();
      }
    } catch (error) {
      setLoading(false);
      console.log("Error", error);
      window.alert("Server error occured");
    }

  }
  async function Login(e) {
    e.preventDefault();
    setState({ ...state, loading: true });
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state)
    };

    try {
      const res = await (await fetch(`${url}api/user/login`, config)).json();
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        setState({ ...state, loading: false });
        document.getElementById('login-id').reset();
        history.push('/');
      }
      else if (res.status === 400) {
        setState({ ...state, loading: false });
        setMessage(res.error);
      }
      else if (res.status === 404) {
        setState({ ...state, loading: false });
        setMessage(res.error);
      }

    } catch (error) {
      window.alert("Server Error");
    }
  }

  return (
    <div className='login-container' >
      {isSignUp ? (
        <>
          <div>
            <h3 className='focus-title' onClick={() => goToHome()}  >Focus</h3>
            <p className='loginOrSignUp-title' >Register</p>
          </div>
          <div className='sub-container' >
            {state.message ? <p className='sent-credentials' >
              Credentials sent to your Email
            </p> : <h4 className='login-title' >Credentials</h4>}
            <hr />
            <br />
            <form id='form' onSubmit={(e) => Register(e)}  >
              <div className='inputs-container' >
                <label>Email</label>
                <input placeholder='example@mail.com' type='email' className='login-input'
                  required
                  onChange={(e) => setState({ ...state, email: e.target.value })}
                />
              </div>
              {loading ? <button className='Login-btn' disabled  >Loading....</button> :
                <button className='Login-btn' >Register</button>
              }
            </form>
          </div>
          <p className='login-p' >Have account? </p>
          <p className='login-p' onClick={() => toogle()}>Login</p>
        </>
      ) : (
        <>
          <div>
            <h3 className='focus-title' onClick={() => goToHome()}  >Focus</h3>
            <p className='loginOrSignUp-title' >Login</p>
          </div>
          <div className='sub-container' >
            {message ? <p className='error-credentials' > {message} </p> : <h4 className='login-title' >Credentials</h4>}
            <hr />
            <br />
            <form id='login-id' onSubmit={(e) => Login(e)}  >
              <div className='inputs-container' >
                <label>Email</label>
                <input placeholder='example@mail.com' type='email' className='login-input'
                  required
                  onChange={(e) => setState({ ...state, email: e.target.value })} />
              </div>
              <div className='inputs-container'>
                <label>Password</label>
                <input placeholder='Password' type='password' className='login-input'
                  required
                  onChange={(e) => setState({ ...state, password: e.target.value })} />
              </div>
              {state.loading ? <button className='Login-btn' disabled >Loading....</button> :
                <button className='Login-btn' >Login</button>
              }
            </form>
          </div>
          <p className='login-p' >Do not have account? </p>
          <p className='login-p' onClick={() => toogle()} >Create account</p>
        </>
      )}
    </div>
  );
}