import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  likesmatches: {
    flex: 1,
    overflowX: "hidden",
    margin: "none",
  },
  animatedHighlight: {
    backgroundColor: "#FFF",
    borderRadius: 999,
    width: "50%",
    height: "100%",
    position: "absolute", // this is key!
    left: "25%",
  },
});

export default styles;
