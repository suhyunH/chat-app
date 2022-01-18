import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import Home from './pages/Home';
import SignIn from './pages/SignIn';


function App() {

  // const refreshUser =()=>{
  //   const user = authService.currentUser;

  //   setUserObj({
  //     displayName :user.displayName,
  //     uid:user.uid,
  //     photoURL:user.photoURL,
  //     updateProfile:(args) =>user.updateProfile(args),
  //   });
  //}
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
