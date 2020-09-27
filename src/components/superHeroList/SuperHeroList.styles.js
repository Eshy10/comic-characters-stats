import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(5),
  },
  circular: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export { useStyles };
