import { StyleSheet } from "react-native";

const colors = {
  primaryDark: "#002B5B", // Deep Navy Blue
  primaryBlue: "#009EFF", // Bright Blue
  primaryGreen: "#32FF00", // Neon Green
  primaryDarkBlue: "#1A3D68", // Darker Navy Blue
  textWhite: "#FFFFFF"
};

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primaryDark, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 15, color: colors.textWhite },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 10, color: colors.textWhite },
  button: { padding: 10, backgroundColor: colors.primaryBlue, borderRadius: 5, alignItems: "center" },
  buttonText: { color: colors.textWhite, fontWeight: "bold" },
  statsContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  statBox: { alignItems: "center", padding: 10, backgroundColor: colors.primaryDarkBlue, borderRadius: 10, flex: 1, marginHorizontal: 5 },
  statValue: { fontSize: 24, fontWeight: "bold", color: colors.primaryGreen },
  section: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", color: colors.textWhite },
  newGoalButton: { flexDirection: "row", alignItems: "center", backgroundColor: colors.primaryBlue, padding: 10, borderRadius: 8 },
  studyItem: { padding: 15, backgroundColor: colors.primaryDarkBlue, borderRadius: 8, marginBottom: 10 },
  studyTitle: { fontSize: 16, fontWeight: "bold", color: colors.textWhite },
  studyProgress: { fontSize: 14, color: colors.primaryGreen },
  profileContainer: { alignItems: "center", marginTop: 20 },
  username: { fontSize: 18, fontWeight: "bold", marginTop: 10, color: colors.textWhite },
  email: { fontSize: 14, color: colors.primaryGreen, marginBottom: 10 },
  infoBox: { flexDirection: "row", alignItems: "center", backgroundColor: colors.primaryDarkBlue, padding: 10, borderRadius: 8, width: "90%", marginBottom: 10 },
  editButton: { flexDirection: "row", alignItems: "center", backgroundColor: colors.primaryBlue, padding: 10, borderRadius: 8, marginTop: 20 },
  editButtonText: { color: colors.textWhite, marginLeft: 5 },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.primaryDark },
  brand: { fontSize: 24, fontWeight: "bold", color: colors.textWhite, marginBottom: 20 },
  loadingText: { color: colors.textWhite, marginTop: 10 }
});
