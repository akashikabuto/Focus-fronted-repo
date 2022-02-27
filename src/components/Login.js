import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Login() {

  const [isSignUp, setIsSignUp] = useState(false);

  const toogle = () => {
    if (!isSignUp) {
      setIsSignUp(true);
    }
    else setIsSignUp(false);
  };

  const { seeLogin } = useSelector(store => store.tasks);

  function setLogin() {
    if (!seeLogin) {
      document.querySelector('.login-class').classList.remove('open');
    }
    else {
      document.querySelector('.login-class').classList.add('open');
    }
  }

  useEffect(() => {
    setLogin();
    //eslint-disable-next-line
  }, [seeLogin]);

  return (
    <>
      {
        isSignUp ? (<div className='login-class'>
          {/* <p className='close' >Close</p> */}
          <p className='l-header' >Sign up</p>
          <form>
            <input placeholder='Email' type='email' className='login-input' />
            <input placeholder='Password' type='password' className='login-input' />
            <button className='Login-btn' >Sign up</button>
          </form>
          <div className='switch-to' >
            <p>Have account?</p>
            <p onClick={() => toogle()} className="hover" >Login</p>
          </div>
        </div>) :
          <div className='login-class'>
            {/* <p className='close' >Close</p> */}
            <p className='l-header' >Login</p>
            <form>
              <input placeholder='Email' type='email' className='login-input' />
              <input placeholder='Password' type='password' className='login-input' />
              <button className='Login-btn' >Login</button>
            </form>
            <div className='switch-to' >
              <p>Do not have account?</p>
              <p onClick={() => toogle()} className="hover" >Sign up</p>
            </div>
          </div>
      }
    </>
  );
}
