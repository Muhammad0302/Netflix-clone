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

function App() {
  const user = true;
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
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
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
