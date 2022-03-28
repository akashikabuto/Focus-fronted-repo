import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Redux';



const HomePage = lazy(() => import('./pages/Home'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SettingPage = lazy(() => import('./pages/Settings'));


function App() {

  function setDefaultTime() {
    localStorage.setItem('pomodoroTime', 5000);
    localStorage.setItem('shortTime', 5000);
    localStorage.setItem('longTime', 10000);
  }

  useEffect(() => {
    setDefaultTime();
  }, []);

  function loading() {
    return (
      <div className='loading-component' >
        <p>Loading......</p>
      </div>
    );
  }

  return (
    <Provider store={store} >
      <Router>
        <Suspense fallback={loading()} >
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/login' component={LoginPage} exact />
            <Route path='/settings' component={SettingPage} exact />
            <Route path="*" component={NotFoundPage} exact />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
