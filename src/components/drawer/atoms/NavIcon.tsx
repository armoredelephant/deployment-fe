import React from "react";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  content: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    textAlign: "center"
  },
  icon: {
    marginLeft: "10px",
    "&::before": {
      fontSize: "16px",
      fontWeight: "bold",
      fontFamily: "Josefin Sans, sans-serif",
      content: (props: Props): string => `"${props.content}"`
    },
    color: "black"
  }
});

const NavIcon: React.FC<Props> = ({ content }: Props) => {
  const { icon, root } = useStyles({ content });
  return (
    <div className={root}>
      <span className={icon} />
    </div>
  );
};

export default NavIcon;
