// src/styles/TimePopupModalStyles.js
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  overlay: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  container: {
    backgroundColor: "#eee",
    width: width * 0.8,
    height: height * 0.8,
    borderRadius: 30,
  },

  scrollWrapper: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: 5
  },

  popupWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1001,
  },

  floatingCloseButton: {
    alignSelf: "flex-end",
    position: "absolute",
    top: "6%",
    right: "2%",
    zIndex: 1002,
  },
  sectionTitle: {
    textAlign: "center",
    color: "#F33534",
  },
  SelectTime: {
    marginBottom: height * -0.025,
  },
  openNowButton: {
    alignSelf: "center",
    justifyContent: "flex-end",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    backgroundColor: "#FFF",
  },
  openNowButtonSelected: {
    backgroundColor: "#F33534",
  },
  openNowText: {
    color: "#F33534",
    fontSize: 30,
  },
  openNowTextSelected: {
    color: "#FFF",
  },
});

export default styles;
