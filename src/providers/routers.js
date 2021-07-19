import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ButtonScrollTop } from "../components/comon/ButtonScrollToTop";
import Footer from "../components/comon/footer/footer";
import Header from "../components/comon/header/header";
import {
  HomePage,
  LoginPage,
  CategoryPage,
  RegisterPage,
  CourseDetailPage,
  MyDashboardPage,
  VerifyPage,
  InstructorDetailPage,
  ForgetPasswordPage,
} from "../pages/index";

export function Routers() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/verify">
              <VerifyPage />
            </Route>
            <Route path="/categoryPage">
              <CategoryPage />
            </Route>
            <Route exact path="/course-detail/:id">
              <CourseDetailPage />
            </Route>
            <Route path="/myDashboardPage">
              <MyDashboardPage />
            </Route>
            <Route path="/instructorPage">
              <InstructorDetailPage />
            </Route>
            <Route path="/forget-password">
              <ForgetPasswordPage />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
      <ButtonScrollTop />
    </div>
  );
}
