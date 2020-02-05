import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import List from "@material-ui/core/List";
import NavList from "../navlist/NavList";

const StyledDrawer = styled(Drawer)`
  && {
    flexshrink: 0;
    min-width: 15rem;
  }

  .MuiDrawer-paperAnchorDockedLeft {
    min-width: 15rem;
  }
`;

const navItemsNew = ["Deployment", "Return"];

const navItemsView = ["Deployments", "Returns"];

const navItemsAdmin = ["Create Tech"];

const FixedDrawer: React.FC = () => {
  return (
    <StyledDrawer variant="permanent" anchor="left">
      <List>
        <NavList list={navItemsNew} category="new" />
        <Divider />
        <NavList list={navItemsView} category="view" />
        <Divider />
        <NavList list={navItemsAdmin} category="admin" />
      </List>
    </StyledDrawer>
  );
};

export default FixedDrawer;
