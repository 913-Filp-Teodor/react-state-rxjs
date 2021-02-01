import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import Login from "./views/login";
import Header from "./components/header";
import Friends from "./views/friends";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/friends" exact>
          <Friends />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
