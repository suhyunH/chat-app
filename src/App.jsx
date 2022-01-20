import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import Chat from './pages/home/Chat';
import Home from './pages/home/index';
import SignIn from './pages/SignIn';


function App() {

  return (
    <ProfileProvider>
      <Switch>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
