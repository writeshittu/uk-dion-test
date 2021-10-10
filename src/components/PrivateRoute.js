import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  //   isAuthenticated,
  //   loading,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        // !isAuthenticated && !loading ? (
        !Cookies.get("accessToken") ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
