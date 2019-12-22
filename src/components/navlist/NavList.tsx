import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { ListItemIcon } from "@material-ui/core";

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
  return (
    <>
      <ListItem key={listKey}>
        <ListItemText primary={category} />
      </ListItem>
      <List>
        {list.map(item => {
          const rdmKey = Math.random()
            .toString(36)
            .substring(7);
          return (
            <ListItem button key={rdmKey}>
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
