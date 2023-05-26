import React from "react";
import { Route } from "../Models/route";
const Home = React.lazy(() => import("../Pages/Home"));
const NotFound = React.lazy(() => import("../Pages/NotFound"));
const Users = React.lazy(() => import("../Pages/User/Users"));
const UserDetail = React.lazy(() => import("../Pages/User/UserDetail"));
const UserEdit = React.lazy(() => import("../Pages/User/UserEdit"));

const routes: Route[] = [
  { path: "/", exact: true, name: "home", component: Home, isPrivate: true },
  {
    path: "/home",
    exact: true,
    name: "home",
    component: Home,
    isPrivate: true,
  },
  {
    path: "/users",
    exact: true,
    name: "users",
    component: Users,
    isPrivate: true,
  },
  {
    path: "/user-detail/:id",
    exact: true,
    name: "detail",
    component: UserDetail,
    isPrivate: true,
  },
  {
    path: "/user-edit/:id",
    exact: true,
    name: "edit",
    component: UserEdit,
    isPrivate: true,
  },
  {
    path: "*",
    exact: false,
    name: "NotFound",
    component: NotFound,
    isPrivate: false,
  },
];

export default routes;
