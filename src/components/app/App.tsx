import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-common";

import "../../sass/base.scss";
import FixedDrawer from "../drawer/FixedDrawer";
import CreateTechPage from "../create-tech/CreateTechPage";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "../../theme";
import CreateDeploymentPage from "../create-deployment/CreateDeploymentPage";
import ViewDeploymentsPage from "../view-deployments/ViewDeploymentsPage";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <FixedDrawer />
          <Switch>
            <Route exact path="/">
              <ViewDeploymentsPage />
            </Route>
            <Route path="/new-deployments">
              <CreateDeploymentPage />
            </Route>
            <Route path="/admin-create-tech">
              <CreateTechPage />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </ApolloProvider>
  );
};

export default App;
