import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admin";
import Loading from "./Components/General/Loading";
import AuthRoute from "./Components/Auth/AuthRoute";
const Login = React.lazy(() => import("./Pages/Login"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route
              path="/login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />
            <Route
              path="/"
              element={
                <AuthRoute>
                  <Admin />
                </AuthRoute>
              }
            />
            <Route path="/main/*" element={<Admin />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
