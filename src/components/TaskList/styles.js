import { makeStyles, createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    taskList: {
      padding: "1rem",
    },
  });

const useStyles = makeStyles(styles);

export default useStyles;
