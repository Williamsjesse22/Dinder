import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // or use your global background
  },
  infoContainer: {
    paddingHorizontal: width * 0.08,
    paddingVertical: 20,
  },
  backButton: {
    justifyContent: 'flex-start'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: "#333",
  },
  accommodationItem: {
    fontSize: 16,
    color: "#333",
    marginVertical: 2,
  },
});

export default styles;
