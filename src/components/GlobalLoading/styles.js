import { makeStyles, createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    globalLoading: {
      position: "fixed",
      backgroundColor: "rgba(0,0,0,.5)",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 99999,
      filter: "brightness(60) blur(5)",
    },
    globalLoading__image: {
      position: "fixed",
      top: "50%",
      left: "50%",
      width: "30%",
      transform: "translate(-50%,-50%)",
      zIndex: 99999,
    },
  });

const useStyles = makeStyles(styles);

export default useStyles;
