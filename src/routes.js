import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import TaskPage from "./pages/Task/Index";

export const ROUTES = [
  { path: "/task", key: "Task", exact: true, component: () => <TaskPage /> },
];

const RouteWithSubRoutes = function (route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>404</h1>} />
    </Switch>
  );
}
RenderRoutes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      key: PropTypes.string,
      exact: PropTypes.bool,
      component: PropTypes.func,
      routes: PropTypes.array,
    }),
  ),
};

export const topMenu = [
  {
    path: "/task",
    name: "task",
  },
];
