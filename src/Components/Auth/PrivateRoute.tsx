import { Navigate } from "react-router-dom";
import { storage } from "../../Utilities/storage";

type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { children } = props;
  const isLoggedIn = !!storage.getToken();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default PrivateRoute;
