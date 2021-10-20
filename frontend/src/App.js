import "./App.scss";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Watch from "./components/watch/Watch";
import Home from "./home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {/* <Register /> */}
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">
          {/* <Login /> */}
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route exact path="/movies">
              <Home type="movies" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
