import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import MessengerCustomerChat from 'react-messenger-customer-chat';

export function Routers() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route path="/verify">
              <VerifyPage />
            </Route>
            <Route path="/forget-password">
              <ForgetPasswordPage />
            </Route>
            <Route path="*">
              <Header />
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/search/:keyWord?/:categoryName?">
                  <CategoryPage />
                </Route>
                <Route exact path="/course-detail/:id">
                  <CourseDetailPage />
                </Route>
                <Route path="/myDashboardPage">
                  <MyDashboardPage />
                </Route>
                <Route path="/instructor/:id">
                  <InstructorDetailPage />
                </Route>
              </Switch>
            </Route>
          </Switch>
        </div>
      </Router>
      
      <MessengerCustomerChat
        pageId="101052528872104"
        appId="324581205839872"
      />
      <Footer />
      <ButtonScrollTop />
    </div>
  );
}
