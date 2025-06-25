import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: width * 0.2,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 25,
    width: width * 0.9,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  icon: {
    width: width * 0.06,
    height: width * 0.06,
    tintColor: "#F33534",
  },
  input: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    fontFamily: "Roboto_400Regular",
  },
});

export default styles;
