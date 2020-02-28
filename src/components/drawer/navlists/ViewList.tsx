import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PageViewOutlinedIcon from "@material-ui/icons/PageviewOutlined";

interface NavListItems {
  list: string[];
  category: string;
  drawerOpen: boolean;
}

interface ListItemProps {
  visibility: "hidden" | "collapse" | "visible";
}

const useStyles = makeStyles({
  innerList: {
    paddingTop: "0"
  },
  itemText: {
    display: (props: ListItemProps): "hidden" | "collapse" | "visible" =>
      props.visibility
  }
});

const ViewList: React.FC<NavListItems> = ({
  list,
  category,
  drawerOpen
}: NavListItems) => {
  let hide: ListItemProps;

  if (drawerOpen) {
    hide = {
      visibility: "visible"
    };
  } else {
    hide = {
      visibility: "hidden"
    };
  }

  const classes = useStyles({ visibility: hide.visibility });

  const formatedList = [...list].map(item =>
    item.replace(/ /g, "-").toLowerCase()
  );

  const lowerCaseCategory = category.toLowerCase();

  return (
    <List className={classes.innerList}>
      {list.map((item, index) => {
        const route = `/${lowerCaseCategory}-${formatedList[index]}`;

        const disabledRoute = route.match(/return/g);

        return (
          <ListItem
            component={Link}
            to={route !== "/view-deployments" ? route : "/"}
            button
            disabled={!!disabledRoute}
            key={`${item}-${index}`}
          >
            <ListItemIcon>
              <PageViewOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.itemText}
              primary={`View ${item}`}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ViewList;
