import { Dimensions, StyleSheet } from "react-native";
const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  pickerColumn: {
    alignItems: "center",
    height: height * 0.2,
    width: width * 0.2,
    paddingBottom: 30
  },
  scrollContainer: {
  },
  timeOption: {
    height: height * 0.075,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedOption: {
    zIndex: 1,
  },
  timeText: {
    fontFamily: 'VinaSans_400Regular',
    fontSize: 60,
    color: '#333',
  },
  selectedText: {
    color: "#000",
  },
  colon: {
    fontSize: 80,
    alignSelf: "center",
    marginBottom: 25,
  },
  arrowButton: {
    paddingVertical: 4,
  },
  arrow: {
    fontSize: 30,
    color: "#bbb",
  },

  meridiemToggle: {
  marginLeft: 10,
  // justifyContent: "center",
  // alignItems: "center",
  gap: 10,
},

meridiemButton: {
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 20,
  backgroundColor: "#fff",
},

selectedMeridiemButton: {
  backgroundColor: "#F33534",
},

meridiemText: {
  fontFamily: "VinaSans_400Regular",
  fontSize: 32,
},

selectedMeridiemText: {
  color: "#fff",
},

});

export default styles;
