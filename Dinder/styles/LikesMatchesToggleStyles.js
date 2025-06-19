// src/styles/LikesMatchesToggleStyles.js
import { StyleSheet, Dimensions } from "react-native";
import GlobalStyles from "./Global";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 30,
    width: width * 0.65,
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
  },
  wrapper: {
    marginTop: 40,
    justifyContent: "center",
  },

  animatedHighlight: {
    position: "absolute",
    height: "100%",
    width: "50%",
    backgroundColor: "#f99a99",
    borderRadius: 30,
    zIndex: 0,
  },

  toggleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
  toggleText: {
    fontSize: 40,
  },
  leftRounded: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  rightRounded: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  active: {
    backgroundColor: "#F99a99",
  },
  inactive: {
    backgroundColor: "#FFF",
  },
  activeText: {
    color: "#FFF",
  },
  inactiveText: {
    color: "#F33534",
  },
});

export default styles;
