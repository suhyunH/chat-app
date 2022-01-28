import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import Home from './pages/home/index';
import SignIn from './pages/SignIn';
import { Container } from './main.styled';
function App() {

  return (
    <Container>
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
      <footer style={{position:"fixed", bottom : '0',fontSize:'15px',color: 'darkgray'}}>&copy;{new Date().getFullYear()} suhyunHan</footer>
    </Container>
  );
}

export default App;
