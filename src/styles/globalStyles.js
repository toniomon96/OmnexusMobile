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

  profileImage: { width: 35, height: 35, borderRadius: 50, marginLeft: 10 },

  // Subheading
  subheading: { 
    fontSize: 18, 
    color: "#D3D3D3", 
    alignSelf: "flex-start", 
    marginTop: 30, 
    marginLeft: 5, 
    marginBottom: 25, 
  },

  insightCard: {
    backgroundColor: "#1A2D50",
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
  progressSection: { marginTop: 15 },
  progressHeading: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  progressBarContainer: { marginTop: 10 },
  progressLabel: { color: "#fff", marginBottom: 5 },
  progressBar: { height: 6, borderRadius: 5 },

  // Recommended Studies
  recommendedCard: {
    backgroundColor: "#1A2D50",
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
    backgroundColor: "#243A5E", // Slightly darker than the card background
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
    backgroundColor: "#0A1931", 
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
    backgroundColor: "#1A2D50",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
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
    backgroundColor: "#1A2D50",
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
    backgroundColor: "#1A2D50",
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
