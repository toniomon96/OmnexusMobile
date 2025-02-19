import { StyleSheet } from "react-native";

const colors = {
  primaryDark: "#002B5B", 
  primaryBlue: "#009EFF", 
  primaryGreen: "#28CC00", // ✅ Darker Green (Less Bright)
  primaryDarkBlue: "#1A3D68", 
  textWhite: "#FFFFFF",
  backgroundDark: "#152A4E",
  cardDark: "#1E3C72",
};

export default StyleSheet.create({
  safeContainer: { 
    flex: 1, 
    backgroundColor: colors.backgroundDark, 
    paddingTop: 70, 
  },
  scrollContainer: { 
    flexGrow: 1, 
    paddingHorizontal: 20, 
    paddingBottom: 80, 
  },

  // Header Section
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    marginBottom: 30, 
  },
  greeting: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: colors.textWhite, 
    position: "absolute", 
    top: 15, 
    left: 5, 
  },
  headerIcons: { 
    flexDirection: "row", 
    position: "absolute", 
    right: 20, 
    top: 15, 
  },
  profileIcon: { marginLeft: 15 },

  // Subheading
  subheading: { 
    fontSize: 18, 
    color: "#D3D3D3", 
    alignSelf: "flex-start", 
    marginTop: 30, 
    marginLeft: 5, 
    marginBottom: 25, 
  },

  // Insight Card
  insightCard: { backgroundColor: colors.cardDark, padding: 15, borderRadius: 12, marginBottom: 20 },
  insightTitle: { fontSize: 12, fontWeight: "bold", color: colors.primaryGreen, marginBottom: 5 },
  insightHeading: { fontSize: 20, fontWeight: "bold", color: colors.textWhite, marginBottom: 5 },
  insightDescription: { fontSize: 14, color: "#D3D3D3", marginBottom: 10 },
  readMore: { color: colors.primaryBlue, fontSize: 14, fontWeight: "bold" },

  // Progress Section
  progressContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 25 },
  progressCard: { flex: 1, padding: 20, borderRadius: 10, alignItems: "center", marginHorizontal: 5 },
  studiesReadCard: { backgroundColor: colors.primaryBlue },
  studyStreakCard: { backgroundColor: colors.primaryGreen }, // ✅ Updated to use the darker green
  progressText: { fontSize: 16, fontWeight: "bold", color: colors.textWhite, marginTop: 5 },
  progressNumber: { fontSize: 28, fontWeight: "bold", color: colors.textWhite, marginTop: 5 },

  // Recommended Studies
  recommendedContainer: { marginBottom: 20 },
  recommendedHeading: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: colors.textWhite, 
    marginBottom: 15,
    marginLeft: 5, 
  },
  studyCard: { backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginBottom: 15 },
  category: { fontSize: 14, fontWeight: "bold", color: colors.primaryBlue, marginBottom: 5 },
  studyTitle: { fontSize: 18, fontWeight: "bold", color: colors.textWhite, marginBottom: 5 },
  studyDescription: { fontSize: 14, color: "#D3D3D3" },

  // Navigation Bar
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

  researchHeader: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    marginBottom: 20, // ✅ More spacing below
    marginTop: 20, // ✅ Adds space from the top
  },
  sectionTitle: {
    fontSize: 24, // ✅ Made larger for HiFi match
    fontWeight: "bold",
    color: colors.textWhite,
  },

  // Search Bar (Proper Spacing & Sizing)
  searchBarContainer: {
    flexDirection: "row",
    backgroundColor: "#1F497D",
    paddingVertical: 12, // ✅ Increased padding slightly
    paddingHorizontal: 15,
    borderRadius: 12, // ✅ More rounded corners
    alignItems: "center",
    marginBottom: 15, // ✅ More spacing below
    borderWidth: 1,
    borderColor: "#007BFF",
  },

  // Filters & Sorting (Bigger, More Bold)
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  filterButtonActive: {
    backgroundColor: colors.primaryBlue,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 12, // ✅ Bigger, more rounded
  },
  filterButtonInactive: {
    backgroundColor: "#2A4D7A",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  filterTextActive: {
    color: colors.textWhite,
    fontWeight: "bold",
    fontSize: 15, // ✅ Slightly larger
  },
  filterTextInactive: {
    color: "#D3D3D3",
    fontSize: 15,
  },

  // Research Article Cards
  researchCard: {
    backgroundColor: "#1E3C72",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15, // ✅ More spacing between cards
  },
  articleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  articleTitle: {
    fontSize: 18, // ✅ Slightly larger
    fontWeight: "bold",
    color: colors.textWhite,
    marginBottom: 5,
  },
  articleSubtitle: {
    fontSize: 14,
    color: "#D3D3D3",
    lineHeight: 20, // ✅ More readable
    marginBottom: 8,
  },
  articleDate: {
    color: "#A0A0A0",
    fontSize: 12,
    marginBottom: 5,
  },

  // Research Article Tags
  tagPlatinum: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00FF7F",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  tagGold: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD700",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  tagText: {
    color: colors.textWhite,
    fontWeight: "bold",
    fontSize: 14, // ✅ Bolder & Larger
    marginRight: 5,
  },

  // Icons for Research Articles (Bookmark & Share)
  articleIcons: {
    flexDirection: "row",
  },
  iconSpacing: {
    marginLeft: 10, // ✅ Space between icons
  },

  // Read More Button (Bigger & Aligned)
  readMoreButton: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.primaryBlue,
    borderRadius: 8,
    marginTop: 10, // ✅ Better spacing
  },
  readMoreText: {
    color: colors.textWhite,
    fontSize: 15, // ✅ Slightly larger
    fontWeight: "bold",
  },
});
