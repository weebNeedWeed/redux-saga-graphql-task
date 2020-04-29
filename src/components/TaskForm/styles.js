import { createStyles, makeStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    input: {
      width: "80%",
    },
    inputWrapper: {
      textAlign: "center",
      "&:not(:last-child)": {
        marginBottom: "1rem",
      },
    },
  });

const useStyles = makeStyles(styles);

export default useStyles;
