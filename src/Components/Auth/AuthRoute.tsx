import { Navigate } from "react-router-dom";
import { storage } from "../../Utilities/storage";

type AuthRouteProps = {
  children: JSX.Element;
};

const AuthRoute: React.FC<AuthRouteProps> = (props) => {
  const { children } = props;
  const isLoggedIn = !!storage.getToken();

  if (isLoggedIn) {
    return <Navigate to="/main" replace />;
  }

  return children;
};
export default AuthRoute;
