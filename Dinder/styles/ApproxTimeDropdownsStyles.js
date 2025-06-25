import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  dropdownSection: {
    marginBottom: 12.5,
  },
  dropdownHeader: {
    alignItems: "center",
    paddingVertical: 5,
  },
  dropdownLabel: {
    fontSize: 32,
    color: "#F33534",
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 8,
  },

  timeOption: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 6,
    flexBasis: "45%", // ensures 2 columns, with spacing
    alignItems: "center",
  },

  selectedOption: {
    backgroundColor: "#F33534",
  },
  timeOptionText: {
    fontFamily: "roboto",
    fontSize: 22,
  },
  selectedOptionText: {
    color: "#fff",
  },

  // 🔽 NEW: Optional floating mode styling if needed later
  focusedDropdown: {
    // Optional visual tweaks when a single dropdown is open
    marginTop: 0,
    paddingTop: 10,
    alignItems: "center",
  },

  backButton: {
    marginBottom: 10,
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#F33534",
  },

  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;
