import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./components/user/User";
import NewUser from "./components/newUser/NewUser";
import Product from "./components/product/Product";
import ProductList from "./components/productList/ProductList";
import NewProduct from "./components/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { Redirect } from "react-router";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      <Route path="/">{user ? <Redirect to="/" /> : <Login />}</Route>
      {user && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/lists">
                <UserList />
              </Route>
              <Route path="/list/:listId">
                <User />
              </Route>
              <Route path="/newList">
                <NewUser />
              </Route>
              <Route path="/movies">
                <ProductList />
              </Route>
              <Route path="/movie/:movieId">
                <Product />
              </Route>
              <Route path="/newmovie">
                <NewProduct />
              </Route>
            </Switch>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
