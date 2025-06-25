import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  profileImage: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: (width * 0.35) / 2,
    borderWidth: 4,
    borderColor: "white",
    marginTop: height * 0.05,
  },

  name: {
    fontSize: 38,
    color: "white",
    marginTop: 12,
  },

});

export default styles;
