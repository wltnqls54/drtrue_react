import './App.css';
import Api_Info from './Api_Info';
import { useUserState } from './UserContext';
import Header from './Header';
import Login from './Login';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import SignUp from './SignUp';

function App() {
  const {user} = useUserState();

  return (
      <BrowserRouter>
        <Header />
        {user ? (
          //회원일 경우
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/page" component={Api_Info}/>
            <Route path="/404" component={NotFound}/>
            <Redirect from="*" to="/404" />
          </Switch>
        ) : (
          //비회원일 경우
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/404" component={NotFound}/>
            <Route path="/page" component={Api_Info}/>
            <Redirect from="*" to="/404" />
          </Switch>
        )}
      </BrowserRouter>
  );
}
export default App;
