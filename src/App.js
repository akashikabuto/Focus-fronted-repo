import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './Redux';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
