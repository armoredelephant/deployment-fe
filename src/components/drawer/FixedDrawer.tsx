import React, { useState } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddList from "./navlists/AddList";
import AdminList from "./navlists/AdminList";
import ViewList from "./navlists/ViewList";

const drawerWidth = "15rem";

const navItemsNew = ["Deployments", "Returns"];

const navItemsView = ["Deployments", "Returns"];

const navItemsAdmin = ["Create Tech"];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    mainList: {
      padding: "0"
    }
  })
);

const FixedDrawer: React.FC = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerChange = (): void => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerChange}>
            {drawerOpen ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.mainList}>
          <AddList list={navItemsNew} drawerOpen={drawerOpen} category="New" />
          <Divider />
          <ViewList
            list={navItemsView}
            drawerOpen={drawerOpen}
            category="View"
          />
          <Divider />
          <AdminList
            list={navItemsAdmin}
            drawerOpen={drawerOpen}
            category="Admin"
          />
        </List>
      </Drawer>
    </div>
  );
};

export default FixedDrawer;
