import { useState } from 'react';

export default function LoginPage() {

  const [isSignUp, setIsSignUp] = useState(false);

  function toogle() {
    if (!isSignUp) {
      setIsSignUp(true);
    }
    else setIsSignUp(false);
  }

  return (
    <div className='login-container' >
      {isSignUp ? (
        <>
          <div>
            <h3 className='focus-title' >Focus</h3>
            <p className='loginOrSignUp-title' >Register</p>
          </div>
          <div className='sub-container' >
            <h4 className='login-title' >Credentials</h4>
            <hr />
            <br />
            <form>
              <div className='inputs-container' >
                <label>Email</label>
                <input placeholder='Example@mail.com' type='email' className='login-input' />
              </div>
              <div className='inputs-container'>
                <label>Password</label>
                <input placeholder='Password' type='password' className='login-input' />
              </div>
              <button className='Login-btn' >Register</button>
            </form>
          </div>
          <p className='login-p' >Have account? </p>
          <p className='login-p' onClick={() => toogle()}>Login</p>
        </>
      ) : (
        <>
          <div>
            <h3 className='focus-title' >Focus</h3>
            <p className='loginOrSignUp-title' >Login</p>
          </div>
          <div className='sub-container' >
            <h4 className='login-title' >Credentials</h4>
            <hr />
            <br />
            <form>
              <div className='inputs-container' >
                <label>Email</label>
                <input placeholder='Example@mail.com' type='email' className='login-input' />
              </div>
              <div className='inputs-container'>
                <label>Password</label>
                <input placeholder='Password' type='password' className='login-input' />
              </div>
              <button className='Login-btn' >Login</button>
            </form>
          </div>
          <p className='login-p' >Do not have account? </p>
          <p className='login-p' onClick={() => toogle()} >Create account</p>
        </>
      )}
    </div>
  );
}
