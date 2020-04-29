import { makeStyles, createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    cardActions: {
      display: "flex",
      justifyContent: "flex-end",
    },
    taskItem: {
      "&:not(:last-child)": {
        marginBottom: "1rem",
      },
    },
    deleteFormText: {
      fontSize: "1.4rem",
    },
  });
const useStyles = makeStyles(styles);

export default useStyles;
