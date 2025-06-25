import { StyleSheet, Dimensions } from "react-native";
import ProfileStyles from "./ProfileStyles";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalOverlay: {
  height: "100%",
  // justifyContent: "center",
  // alignItems: "center",
},

popup: {
  width: width * 0.9,
  height: height * 0.85,
  backgroundColor: "#fff",
  borderRadius: 20,
  padding: 20,
  alignItems: "center",
},


  headerContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    paddingVertical: 10,
  },

  heading: {
    color: "#fff",
  },

  textbox: {
    backgroundColor: "#fff",
    marginBottom: 10,
  },

  subHeading: {
    fontSize: 34,
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 10,
  },

  memberList: {
    paddingBottom: 10,
  },

  // Reuse from ProfileStyles
  memberCard: ProfileStyles.memberCard,
  memberImage: ProfileStyles.memberImage,
  memberName: ProfileStyles.memberName,

  selectedMember: {
    opacity: 0.4,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },

  cancelButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: "#F33534",
    borderWidth: 2,
  },

  createButton: {
    backgroundColor: "#F33534",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  createText: {
    color: "#fff",
  },
});

export default styles;
