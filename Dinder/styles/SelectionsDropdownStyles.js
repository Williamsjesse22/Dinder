// src/styles/SelectionsDropdownStyles.js
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: "#f99a99",
    borderRadius: 15,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontFamily: "Roboto",
  },
  clearButton: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  clearButtonText: {
    color: "#F33534",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  pillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  pill: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  pillText: {
    color: "#F33534",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  checkmark: {
    width: 16,
    height: 16,
    marginLeft: 5,
  },
  removeIcon: {
    color: "#F33534",
    fontSize: 16,
    marginLeft: 6,
    fontWeight: "bold",
  },
});

export default styles;
