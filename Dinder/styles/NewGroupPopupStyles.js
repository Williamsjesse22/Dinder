import { StyleSheet, Dimensions } from "react-native";
import ProfileStyles from "./ProfileStyles";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    height: height,
    width: width,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },

  popup: {
    width: width * 0.9,
    height: height * 0.85,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  headerContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "95%",
  },

  heading: {
    color: "#fff",
  },

  textbox: {
    backgroundColor: "#fff",
  },

  subHeading: {
    fontSize: 34,
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 10,
  },

  imageWrapper: {
    position: "relative",
    width: 80, // or whatever your image size is
    height: 80,
  },

  checkmarkWrapper: {
  position: "absolute",
  top: 0,
  right: 0,
  padding: 4, // ⬅️ Controls spacing between border and icon
  backgroundColor: "#fff", // Optional: adds contrast
  borderColor: "green",
  borderWidth: 2,
  borderRadius: 20, // Must be > (iconSize + padding) / 2
  zIndex: 10,
},

checkmarkIcon: {
  width: 20, // Smaller than before
  height: 20,
  resizeMode: "contain",
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

  cancelText: {
    color: '#F33534',
  },

  disabledButton: {
    backgroundColor: "#eee",
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
