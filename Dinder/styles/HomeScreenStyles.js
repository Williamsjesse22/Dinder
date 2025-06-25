import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  main: {
    flex: 1,
    overflowX: "hidden",
    display: "flex",
  },

  groupHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: height * 0.025,
    paddingBottom: 0,
  },

  locationGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  locationText: {
    marginLeft: 5,
  },

  openNowButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  openNowText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 26,
  },

  groupItem: {
    alignItems: "center",
  },

  groupImage: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 12,
  },

  groupName: {
    fontSize: 12,
    marginTop: 2,
  },

  title: {
    marginLeft: width * 0.125,
  },

  image: {
    height: height * 0.5,
    width: width * 0.75,
    borderRadius: 20,
    alignSelf: "center",
  },

  card: {
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    padding: 10,
  },

  feedbackIcon: {
    position: "absolute",
    top: "40%",
    width: "30%",
    aspectRatio: 1,
    resizeMode: "contain",
    zIndex: 50,
  },

  descriptorList: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: width * 0.025,
    alignItems: "center",
    justifyContent: "center",
  },

  descriptor: {
    backgroundColor: "#F33534",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignSelf: "center",
    marginRight: width * 0.025,
  },

  descriptorText: {
    color: "white",
    textAlign: "center",
  },

  PreferencesReviews: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },

  preferenceButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 10,
  },

  preferencesWord: {
    paddingLeft: width * 0.05,
    paddingRight: width * 0.01,
    paddingBottom: height * 0.003,
  },

  editIcon: {
    resizeMode: "contain",
    paddingRight: width * 0.075,
  },

  groupSelectorOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 99,
  },

  groupSelectorPopup: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    maxWidth: "90%",
    height: height * 0.1,
  },

  groupSelectorPopupWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
});

export default styles;
