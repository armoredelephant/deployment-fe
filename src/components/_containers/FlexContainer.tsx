import React from "react";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  center?: string;
  flow: string;
  margin?: string;
  mb?: string;
  width?: string;
  height?: string;
  minHeight?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: ({ flow }: Props): string => flow,
    margin: ({ margin }: Props): string | undefined => margin,
    justifyContent: ({ center }: Props): string | undefined =>
      center && "center",
    marginBottom: ({ mb }: Props): string | undefined => mb,
    width: ({ width }: Props): string | undefined => width,
    height: ({ height }: Props): string | undefined => height,
    minHeight: ({ minHeight }: Props): string | undefined => minHeight
  }
});

const FlexContainer: React.FC<Props> = (props: Props) => {
  const { root } = useStyles(props);
  return <div data-testid="flex" className={root} {...props} />;
};

export default FlexContainer;
