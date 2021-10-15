import './App.css';
import Api_Info from './Api_Info';
import { useUserState } from './UserContext';
import Header from './Header';
import Login from './Login';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import SignUp from './SignUp';
import { UserProvider } from './UserContext';

function App() {
  const {user} = useUserState();

  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        {user ? (
          <Switch>
           <Route exact path="/" component={Home}/>
            <Route path="/mypage" component={Api_Info}/>
            <Route path="/404" component={NotFound}/>
            <Redirect from="*" to="/404" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/404" component={NotFound}/>
            <Redirect from="*" to="/404" />
          </Switch>
        )}
      </BrowserRouter>
    </UserProvider>
    
  );
}
export default App;
