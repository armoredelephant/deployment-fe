import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";

interface NavListItems {
  list: string[];
  category: string;
}

const CustomListItemText = styled(ListItemText)`
  && {
    padding-left: 1.5rem;
  }
`;

const NavList: React.FC<NavListItems> = ({ list, category }: NavListItems) => {
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
      <List>
        {list.map((item, index) => {
          const rdmKey = Math.random()
            .toString(36)
            .substring(7);

          const route = `/${lowerCaseCategory}-${formatedList[index]}`;

          const disabledRoute = route.match(/return/g);

          return (
            <ListItem
              component={Link}
              to={route !== "/view-deployments" ? route : "/"}
              button
              disabled={!!disabledRoute}
              key={rdmKey}
            >
              <CustomListItemText primary={item} />
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default NavList;
