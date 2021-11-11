import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Menubar from "./Pages/Shared/Menubar/Menubar";
import NotFound from "./Pages/NotFound/NotFound";
import Details from "./Pages/Details/Details";
import AddProperties from "./Pages/AddProperties/AddProperties";
import Services from "./Pages/Services/Services";
import Properties from "./Pages/Properties/Properties";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/properties">
              <Properties />
            </Route>
            <Route path="/properties/:propertyId">
              <Details></Details>
            </Route>
            <Route path="/addProperties">
              <AddProperties></AddProperties>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
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
