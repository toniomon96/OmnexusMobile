import { StyleSheet } from "react-native";

const colors = {
  primaryDark: "#002B5B", 
  primaryBlue: "#009EFF", 
  primaryGreen: "#32FF00", 
  primaryDarkBlue: "#1A3D68", 
  textWhite: "#FFFFFF",
  backgroundDark: "#152A4E",
  cardDark: "#1E3C72",
};

export default StyleSheet.create({
  safeContainer: { 
    flex: 1, 
    backgroundColor: colors.backgroundDark, 
    paddingTop: 70, // ✅ Added more space above the header
  },
  scrollContainer: { 
    flexGrow: 1, 
    paddingHorizontal: 20, 
    paddingBottom: 80, 
  },

  // Header Section (Lowered & Justified)
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    marginBottom: 30, // ✅ Creates space below the header
  },
  greeting: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: colors.textWhite, 
    position: "absolute", 
    top: 15, // ✅ Lowered slightly
    left: 5, // ✅ Justified to match "Ready to learn" & "Recommended Studies"
  },
  headerIcons: { 
    flexDirection: "row", 
    position: "absolute", 
    right: 20, 
    top: 15, // ✅ Lowered slightly
  },
  profileIcon: { marginLeft: 15 },

  // Subheading (Matches Justification)
  subheading: { 
    fontSize: 18, 
    color: "#D3D3D3", 
    alignSelf: "flex-start", // ✅ Left-aligns
    marginTop: 30, // ✅ Moves it slightly lower
    marginLeft: 5, // ✅ Matches "Hello, Alex"
    marginBottom: 25, 
  },

  // Insight Card (No Changes Needed)
  insightCard: { backgroundColor: colors.cardDark, padding: 15, borderRadius: 12, marginBottom: 20 },
  insightTitle: { fontSize: 12, fontWeight: "bold", color: colors.primaryGreen, marginBottom: 5 },
  insightHeading: { fontSize: 20, fontWeight: "bold", color: colors.textWhite, marginBottom: 5 },
  insightDescription: { fontSize: 14, color: "#D3D3D3", marginBottom: 10 },
  readMore: { color: colors.primaryBlue, fontSize: 14, fontWeight: "bold" },

  // Progress Section (No Changes Needed)
  progressContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 25 },
  progressCard: { flex: 1, padding: 20, borderRadius: 10, alignItems: "center", marginHorizontal: 5 },
  studiesReadCard: { backgroundColor: colors.primaryBlue },
  studyStreakCard: { backgroundColor: colors.primaryGreen },
  progressText: { fontSize: 16, fontWeight: "bold", color: colors.textWhite, marginTop: 5 },
  progressNumber: { fontSize: 28, fontWeight: "bold", color: colors.textWhite, marginTop: 5 },

  // Recommended Studies (No Changes Needed)
  recommendedContainer: { marginBottom: 20 },
  recommendedHeading: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: colors.textWhite, 
    marginBottom: 15,
    marginLeft: 5, // ✅ Matches alignment with "Hello, Alex"
  },
  studyCard: { backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginBottom: 15 },
  category: { fontSize: 14, fontWeight: "bold", color: colors.primaryBlue, marginBottom: 5 },
  studyTitle: { fontSize: 18, fontWeight: "bold", color: colors.textWhite, marginBottom: 5 },
  studyDescription: { fontSize: 14, color: "#D3D3D3" },

  // Navigation Bar (No Changes Needed)
  navbar: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    backgroundColor: "#0A1931", 
    paddingVertical: 10, 
    borderTopWidth: 0, 
    elevation: 0, 
    shadowOpacity: 0, 
  },
  navItem: { alignItems: "center" },
  navTextActive: { fontSize: 12, color: colors.primaryBlue, marginTop: 2 },
  navTextInactive: { fontSize: 12, color: "#D3D3D3", marginTop: 2 },
});
