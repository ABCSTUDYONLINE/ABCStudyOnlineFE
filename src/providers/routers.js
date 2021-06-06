import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "../components/comon/footer/footer";
import Header from "../components/comon/header/header";
import { HomePage, LoginPage } from "../pages/index";

export function Routers() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
