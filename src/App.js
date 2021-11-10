import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
// import Login from './Pages/Login/Login/Login';
// import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
        <Router>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            {/* <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route> */}
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;