import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    flex: 1,
    justifyContent: "center",
    margin: "0 0.5rem",
    padding: "0.5rem",
  },
  button: (props) => ({
    textAlign: "center",
    fontSize: "1rem",
    margin: "1rem 0",
    padding: "1rem",
    width: props.isMobile ? "50%" : "25%",
  }),
  mapNames: (props) => ({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "0 0.25rem 0.5rem 0.25rem",
    width: props.isMobile ? "95%" : "100%",
  }),
  mapName: {
    borderRadius: "25rem",
    boxSizing: "border-box",
    cursor: "pointer",
    height: "50%",
    margin: "0 1rem",
    width: "30%",
  },
  playerIcon: (props) => ({
    height: props.isMobile ? "30px" : "44px",
    width: props.isMobile ? "36px" : "48px",
    margin: "0.5rem 0.50rem",

    "&:hover": {
      cursor: "grab",
    },
  }),
  activeMap: {
    border: `0.25rem solid ${theme.buttonTextColor}`,
  },
  wrapper: {
    position: "relative",
  },
}));
