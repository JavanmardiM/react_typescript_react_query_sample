import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../Routes";
import DrawerMenu from "./Layout/DrawerMenu";
import MenuAppBar from "./Layout/MenuAppBar";
import PrivateRoute from "./Auth/PrivateRoute";

const Admin: React.FC = () => {
  // const isLoggedIn = !!storage.getToken();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/login");
  //   }
  // }, [isLoggedIn, navigate]);
  return (
    <Fragment>
      <MenuAppBar />
      <DrawerMenu />
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                element={
                  route.isPrivate ? (
                    <PrivateRoute>
                      <route.component />
                    </PrivateRoute>
                  ) : (
                    <route.component />
                  )
                }
              />
            )
          );
        })}
      </Routes>
    </Fragment>
  );
};
export default Admin;
