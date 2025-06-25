import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginBottom: -5
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 10,
  },
  dayButton: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 8,
    minHeight: height * 0.045,
    width: width * 0.3,
    alignItems: "center",
  },
  selectedDay: {
    backgroundColor: "#F33534",
  },
  dayText: {
    fontFamily: "roboto",
    fontSize: 22,
  },
  selectedText: {
    color: "white",
  },
});

export default styles;
