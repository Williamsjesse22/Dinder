import { Dimensions, StyleSheet, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    overflowX: "none",
  },

  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  profileHeaderWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  backButton: {
    position: "absolute",
    top: width * 0.15,
    left: width * 0.05,
    zIndex: 10, // make sure it floats on top
  },

  backButtonWrapper: {
    position: "absolute",
    top: width * 0.15,
    left: 20,
    zIndex: 10,
  },

  editIcon: {
    position: "absolute",
    top: width * 0.15,
    right: width * 0.05,
    width: width * 0.1,
    height: width * 0.1,
    backgroundColor: "#FFF",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FFF",
    resizeMode: "contain",
  },

  titlesText: {
    color: "#F33534",
    marginLeft: width * 0.125,
    marginTop: height * 0.05,
  },

  descriptorList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8, // for newer RN; if unsupported, use marginRight + marginBottom
    marginTop: 10,
  },

  descriptor: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: "#F33534",
    borderRadius: 9999,
    margin: width * 0.01,
  },

  descriptorText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 24,
    color: "#FFF",
  },

  memberCardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
    marginTop: height * 0.01,
  },

  memberCard: {
    alignItems: "center",
    margin: 8,
  },

  memberImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 40,
    resizeMode: "cover",
  },

  memberName: {
    marginTop: height * 0.01,
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    color: "#333",
  },
});

export default styles;
