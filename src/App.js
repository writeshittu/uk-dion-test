import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/Routes";
import NotFoundpage from "./pages/errorPage";
import LoginPage from "./pages/LoginPage";
import ConfirmPasswordChange from "./pages/confirmPasswordChange";
import ResetPassword from "./pages/resetPasswordPage";
import SuccessfulPasswordChange from "./pages/OnSuccessfulPasswordChange";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Cookies from "js-cookie";
import setAuthToken from "./utility/SetGlobalAuthToken";
import PrivateRoute from "./components/PrivateRoute";

if (Cookies.get("accessToken")) {
  setAuthToken(Cookies.get("accessToken"));
}

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>please wait...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} exact component={LoginPage} />
          <Route
            path={ROUTES.CHANGE_PASSWORD}
            exact
            component={ConfirmPasswordChange}
          />
          <Route path={ROUTES.RESET_PASSWORD} exact component={ResetPassword} />
          <Route
            path={ROUTES.SUCCESSFUL_PAGE}
            exact
            component={SuccessfulPasswordChange}
          />
          <PrivateRoute path={ROUTES.DASHBOARD} exact component={Dashboard} />

          <Route component={NotFoundpage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
