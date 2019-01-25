import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/home";

import PrivateRoute from "./Components/authRoutes/privateRoutes";
import PublicRoute from "./Components/authRoutes/publicRoutes";

import SignIn from "./Components/signin";
import Dashboard from "./Components/admin/Dashboard";
import TheTeam from "./Components/theTeam";
import TheMatches from "./Components/theMatches";
import NotFound from "./Components/ui/not_found";

import AdminMatches from "./Components/admin/matches";
import AddEditMatch from "./Components/admin/matches/addEditMatch";
import AdminPlayers from "./Components/admin/players";
import AddEditPlayers from "./Components/admin/players/addEditPlayers";

const Routes = props => {
  console.log(props);
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/admin_players/add_players"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_players/add_players/:id"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_players"
          exact
          component={AdminPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match"
          exact
          component={AddEditMatch}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={AddEditMatch}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />

        <PublicRoute
          {...props}
          restricted={true}
          component={SignIn}
          path="/sign_in"
          exact
        />
        <PublicRoute
          {...props}
          restricted={false}
          component={TheTeam}
          path="/the_team"
          exact
        />
        <PublicRoute
          {...props}
          restricted={false}
          component={TheMatches}
          path="/the_matches"
          exact
        />
        <PublicRoute
          {...props}
          restricted={false}
          component={Home}
          path="/"
          exact
        />
        <PublicRoute {...props} restricted={false} component={NotFound} exact />
      </Switch>
    </Layout>
  );
};

export default Routes;
