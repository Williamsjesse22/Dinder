import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  leftArrow: {
    marginRight: width * 0.01,
  },
  rightArrow: {
    marginLeft: width * 0.01,
  },
  imageClipper: {
    width: width * 0.85,
    height: "auto", // was 0.3 — increased to fit label
    overflow: "visible", // allow the text to peek outside if needed
  },

  animatedRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  groupImage: {
    width: width * 0.25,
    height: width * 0.3,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  groupItem: {
    width: width * 0.25 + 10, // match FlatList item width
    height: width * 0.38, // consistent height: 0.3 (image) + text + spacing
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 5,
  },

  groupName: {
    marginTop: 4,
    fontSize: 14,
    color: "#333",
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    maxWidth: width * 0.25,
    lineHeight: 16,
  },
});
