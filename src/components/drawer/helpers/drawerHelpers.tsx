interface IconSelectProps {
  item: string;
}

export const iconSelect = ({ item }: IconSelectProps): string => {
  switch (item) {
    case "Deployment":
      return "D";
    case "Deployments":
      return "D";
    case "Return":
      return "R";
    case "Returns":
      return "R";
    default:
      return "C";
  }
};
