import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  popupContainer: {
    position: "absolute",
    top: width * 0.05, // float above button
    left: width * 0.05,
    right: width * 0.05,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    zIndex: 100,
  },
  flatListContent: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  groupItem: {
    marginHorizontal: 8,
    borderRadius: 15,
    alignItems: "center",
  },
  groupImage: {
    height: width * 0.125,
    width: width * 0.125,
    borderRadius: 10,
    resizeMode: "cover",
  },

  groupName: {
    marginTop: 4,
    // fontSize: 10,
    textAlign: "center",
    fontFamily: 'robotos'
  },

});

export default styles;
