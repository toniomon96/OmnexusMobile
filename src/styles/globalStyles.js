import { StyleSheet } from "react-native";

const colors = {
  primaryDark: "#002B5B", 
  primaryBlue: "#009EFF", 
  primaryGreen: "#28CC00", // ✅ Darker Green (Less Bright)
  primaryDarkBlue: "#1A3D68", 
  textWhite: "#FFFFFF",
  backgroundDark: "#162D50",
  cardDark: "#204065",
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
    alignItems: "center",  
    paddingHorizontal: 0,  
    paddingTop: 10,  
    marginBottom: 20,  
    width: "100%",  
  },
  
  greetingContainer: { 
    flex: 1,  // Ensures greeting stays fully left-aligned
  },
  
  greeting: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: colors.textWhite,
    textAlign: "left",
  },
  
  headerIcons: { 
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "flex-end",  // Ensures icons stay fully right-aligned
    gap: 15, 
  },
  
  energyContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  
  energyCount: {
    color: "#32CD32",
    fontSize: 16,
    marginLeft: 5,
  },
  
  profileImage: { 
    width: 35, 
    height: 35, 
    borderRadius: 50, 
  },  
  
  
  insightHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  insightTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  
  newText: {
    color: "#32CD32",
    fontSize: 16,
    fontWeight: "bold",
  },
  
  insightText: {
    color: "#fff",
    marginTop: 10,
  },
  
  readMore: {
    color: "#007BFF",
    marginTop: 5,
  },

  // Progress Section
  progressCard: {
    backgroundColor: colors.cardDark,
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  progressSection: { marginTop: 5 },
  progressHeading: { color: "#fff", fontSize: 18, fontWeight: "bold", marginTop: 0 },
  progressBarContainer: { marginTop: 10 },
  progressLabel: { color: "#fff", marginBottom: 5 },
  progressBar: { height: 6, borderRadius: 5 },

  // Recommended Studies
  recommendedCard: {
    backgroundColor: colors.cardDark,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  
  recommendedHeading: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  
  studyCard: {
    backgroundColor: "#162D50", // Slightly darker than the card background
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  
  studyTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  
  studyTime: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 5,
  },

  // Navigation Bar
  navbar: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    backgroundColor: colors.cardDark, 
    paddingVertical: 10, 
    borderTopWidth: 0, 
    elevation: 0, 
    shadowOpacity: 0, 
  },
  navItem: { alignItems: "center" },
  navTextActive: { fontSize: 12, color: colors.primaryBlue, marginTop: 2 },
  navTextInactive: { fontSize: 12, color: "#D3D3D3", marginTop: 2 },


  // Points Card
  pointsContainer: {
    backgroundColor: colors.cardDark,
    padding: 15,
    borderRadius: 10,
    marginTop: 0,
    justifyContent: "space-between",
  },
  
  pointsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  pointsText: {
    color: "#fff",
    fontSize: 16,
  },
  
  pointsValue: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  
  levelBadge: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  
  levelText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  

  insightCard: {
    backgroundColor: colors.cardDark,
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  
  insightHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  insightTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  
  
  insightText: {
    color: "#fff",
    marginTop: 10,
  },
  
  readMore: {
    color: "#007BFF",
    marginTop: 5,
  },

  quickActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  
  quickActionButton: {
    flex: 1,
    backgroundColor: colors.cardDark,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  
  quickActionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  
  quickActionSubtext: {
    color: "#B0BEC5",
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  
});
