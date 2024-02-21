import './App.css';
import { Route } from 'react-router-dom'
import Register from './components/Register';
import Username from './components/Username';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import PageNotFound from './components/PageNotFound';
import Reset from './components/Reset';
import Password from './components/Password';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Register} exact/>
      <Route path="/username" component={Username} exact/>
      <Route path="/profile" component={Profile} exact/>
      <Route path="/recovery" component={Recovery} exact/>
      <Route path="/reset" component={Reset} exact />
      <Route path="/password" component={Password} exact />
      <Route path="/*" component={PageNotFound} exact />
    </div>
  );
}

export default App;
