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
        <NavList list={navItemsNew} category="New" />
        <Divider />
        <NavList list={navItemsView} category="View" />
        <Divider />
        <NavList list={navItemsAdmin} category="Admin" />
      </List>
    </StyledDrawer>
  );
};

export default FixedDrawer;
