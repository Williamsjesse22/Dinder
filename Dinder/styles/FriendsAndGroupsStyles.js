import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  friendsAndGroups: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titles: {
    marginLeft: width * 0.0625,
    color: "#F33534",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: width * 0.15,
    paddingHorizontal: width * 0.05,
    position: "relative", // lets us absolutely position the back button
  },

  addFriendsTitle: {
    color: "#F33534",
    textAlign: "center",
  },

  backButtonWrapper: {
    position: "absolute",
    left: width * 0.05,
    top: height * 0.095, // match the paddingTop of container
    zIndex: 10,
  },

  backButton: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: "contain",
  },

  search: {
    alignItems: "center",
    marginTop: height * 0.05,
  },

  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 0, // remove bottom margin to allow overlap
    zIndex: 4, // ensure it's above the dropdown
    width: "90%",
  },

  searchBar: {
    flex: 1,
    fontSize: 24,
    paddingHorizontal: 10,
    fontFamily: "Roboto_400Regular",
  },
  magnifyingGlass: {
    width: width * 0.075,
    height: width * 0.075,
  },

  searchWrapper: {
    position: "relative",
    zIndex: 3,
    alignItems: "center", // center search bar & dropdown horizontally
  },

  searchDropdown: {
    marginTop: -height * 0.05, // overlap behind search bar
    width: "90%",
    height: height * 0.3,
    backgroundColor: "#F33534",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 8,
    zIndex: 2,
    paddingTop: height * 0.04,
  },

  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },

  dropdownText: {
    fontSize: 20,
    color: "white",
    fontFamily: "Roboto_400Regular",
  },

  TitlePlusAdd: {
    flexDirection: "row",
    alignItems: "center",
  },

  addButton: {
    backgroundColor: "#F33534",
    borderRadius: 50,
    width: width * 0.06,
    height: width * 0.06,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10, // spacing between text and button
  },

  plusIcon: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },

  friendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7.5,
  },

  friendImage: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: (width * 0.12) / 2,
    marginLeft: width * 0.0625,
    marginRight: width * 0.05,
  },

  friendName: {
    fontSize: 24,
    fontFamily: "Roboto_400Regular",
  },

  friendsList: {
    flex: 1,
  },

  friendsListContent: {
    paddingBottom: 100,
  },
});

export default styles;
