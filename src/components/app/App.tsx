import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-common";

import "../../sass/base.scss";
import FixedDrawer from "../drawer/FixedDrawer";
// import CreateTechPage from "../create-tech/CreateTechPage";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "../../theme";
import CreateDeploymentPage from "../create-deployment/CreateDeploymentPage";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <FixedDrawer />
        <CreateDeploymentPage />
        {/* <CreateTechPage /> */}
      </MuiThemeProvider>
    </ApolloProvider>
  );
};

export default App;
