import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthProvider from './context/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Menubar from './Pages/Shared/Menubar/Menubar';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Menubar/>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="*">
          <NotFound></NotFound>
        </Route>
          </Switch>
        <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;