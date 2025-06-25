// src/styles/PreferencesPopupStyles.js
import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  popupWindow: {
    display: "flex",
    backgroundColor: "transparent",
    width: width * 0.85,
    height: height * 0.6,
  },

  blurContainer: {
    flex: 1,
    position: "relative",
  },

  blurBackground: {
    ...StyleSheet.absoluteFillObject, // fills the entire screen
    zIndex: -1,
  },

  popupWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    marginTop: height * -0.15,
    alignItems: "center",
    zIndex: 1001,
  },

  overlay: {
    width: "80%",
    alignSelf: "center",
    padding: 20,
    backgroundColor: "#F33534",
    borderRadius: 15,
  },

  closeButton: {
    alignItems: "flex-end",
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: height * 0.06,
    borderRadius: 15,
    marginBottom: height * 0.025,
  },

  searchInput: {
    flex: 1,
    fontSize: 20,
    color: "#000",
    fontFamily: "Roboto",
  },

  magnifyingGlass: {
    marginHorizontal: 5,
  },

  dropdownContainer: {
    marginBottom: 15,
  },

  dropdown: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: height * 0.05,
    backgroundColor: "#FFF",
    borderRadius: 15,
  },

  dropdownOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  dropdownText: {
    marginHorizontal: 15,
    alignSelf: "center",
    textAlign: "left",
    color: "#F33534",
    fontSize: 32,
  },

  dropdownOptionContainer: {
    backgroundColor: "#f99a99",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },

  optionText: {
    fontFamily: "Roboto",
    color: "#FFF",
    fontSize: 24,
    marginLeft: width * 0.05,
    padding: 2,
  },

  optionContainer: {
    alignItems: "center",
    backgroundColor: "#f99a99",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },

  slider: {
    marginTop: height * 0.01,
    width: "90%",
    height: 12, // makes the track visually thicker
  },

  sliderValue: {
    color: "#FFF",
    fontSize: 24,
    marginTop: 5,
    textAlign: "center",
    fontFamily: "Roboto",
  },

  fakeTrack: {
    marginTop: height * 0.01,
    position: "absolute",
    width: "90%",
    height: 12,
    backgroundColor: "#FFF",
    borderRadius: 6,
  },

  separator: {
    height: 1,
    width: "90%",
    backgroundColor: "#FFF",
    alignSelf: "center",
  },

  dropdownArrowOpen: {
    transform: [{ rotate: "180deg" }],
  },

  optionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f99a99",
    paddingVertical: 5,
    paddingRight: 10,
    borderRadius: 10,
  },

  selectedOption: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#bbb",
  },

  selectedOptionText: {
    color: "#F33534",
    fontFamily: "Roboto",
    fontSize: 24,
  },

  selectionCheckmark: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },

  selectionsContainer: {
    height: height * 0.08, // enough for 2 rows
    marginBottom: 10,
  },

  selectionsScroll: {
    flexGrow: 0,
  },

  selectionsScrollContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 6, // vertical spacing between the two rows
    columnGap: 8,
    alignItems: "flex-start",
    paddingVertical: 4,
  },

  selectionPill: {
    backgroundColor: "#FFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  selectionText: {
    fontFamily: "roboto",
  },

  twoRowScrollWrapper: {
    flexDirection: "row",
    gap: 12,
  },

  twoRowColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 60, // Enough for 2 pills
  },
});

export default styles;
