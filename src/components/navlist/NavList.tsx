import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
import { iconSelect } from "../drawer/helpers/drawerHelpers";
import NavIcon from "../drawer/atoms/NavIcon";
import { makeStyles } from "@material-ui/core/styles";

interface NavListItems {
  list: string[];
  category: string;
  drawerOpen: boolean;
}

const useStyles = makeStyles({
  innerList: {
    paddingTop: "0"
  },
  itemText: {
    paddingLeft: "1.5rem"
  }
});

const NavList: React.FC<NavListItems> = ({
  list,
  category,
  drawerOpen
}: NavListItems) => {
  const classes = useStyles();
  const listKey = Math.random()
    .toString(36)
    .substring(7);

  const formatedList = [...list].map(item =>
    item.replace(/ /g, "-").toLowerCase()
  );

  const lowerCaseCategory = category.toLowerCase();

  return (
    <>
      <ListItem key={listKey}>
        <ListItemText primary={category} />
      </ListItem>
      <List className={classes.innerList}>
        {list.map((item, index) => {
          const route = `/${lowerCaseCategory}-${formatedList[index]}`;

          const disabledRoute = route.match(/return/g);
          const iconContent = iconSelect({ item: item });

          return (
            <ListItem
              component={Link}
              to={route !== "/view-deployments" ? route : "/"}
              button
              disabled={!!disabledRoute}
              key={`${item}-${index}`}
            >
              {!drawerOpen && (
                <ListItemIcon>
                  <NavIcon content={iconContent} />
                </ListItemIcon>
              )}
              <ListItemText className={classes.itemText} primary={item} />
              {/* {drawerOpen && (
                <ListItemIcon>
                  <ArrowForwardIcon />
                </ListItemIcon>
              )} */}
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default NavList;
