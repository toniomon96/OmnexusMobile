import { StyleSheet } from "react-native";

// Define a central colors object for consistency across styles
const colors = {
  primaryDark: "#002B5B",
  primaryBlue: "#009EFF",
  primaryGreen: "#28CC00", // ✅ Darker Green (Less Bright)
  primaryDarkBlue: "#1A3D68",
  textWhite: "#FFFFFF",
  backgroundDark: "#162D50",
  cardDark: "#204065",
};

// Global Styles
const globalStyles = StyleSheet.create({
  safeContainer: {
    flexGrow: 1,
    backgroundColor: colors.backgroundDark,
    paddingTop: 70,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    paddingHorizontal: 20,
  },
});

// Header Styles
const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
    marginBottom: 20,
  },
  greetingContainer: {
    flex: 1, // Ensures greeting stays fully left-aligned
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
    justifyContent: "flex-end",
    gap: 15,
  },
  energyContainer: {
    flexDirection: "row", // Ensures icon and number are inline
    alignItems: "center",
  },
  energyCount: {
    color: "#32FF00",
    fontSize: 16,
    marginLeft: 5, // Adds spacing between the icon and number
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});

// Insight Section
const insightStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardDark,
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: colors.textWhite,
    fontSize: 18,
    fontWeight: "bold",
  },
  newText: {
    color: "#32CD32",
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    color: colors.textWhite,
    marginTop: 10,
  },
  readMore: {
    color: "#007BFF",
    marginTop: 5,
  },
});

// Progress Section
const progressStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardDark,
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  section: {
    marginTop: 5,
  },
  heading: {
    color: colors.textWhite,
    fontSize: 18,
    fontWeight: "bold",
  },
  progressBarContainer: {
    marginTop: 10,
  },
  label: {
    color: colors.textWhite,
    marginBottom: 5,
  },
  progressBar: {
    height: 6,
    borderRadius: 5,
  },
});

// Recommended Studies
const recommendedStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardDark,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  heading: {
    color: colors.textWhite,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  studyCard: {
    backgroundColor: colors.backgroundDark,
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  studyTitle: {
    color: colors.textWhite,
    fontSize: 16,
    fontWeight: "bold",
  },
  studyTime: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 5,
  },
});

// Points Card
const pointsStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardDark,
    padding: 15,
    borderRadius: 10,
    marginTop: 0,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: colors.textWhite,
    fontSize: 16,
  },
  value: {
    color: colors.textWhite,
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
    color: colors.textWhite,
    fontSize: 14,
    fontWeight: "bold",
  },
});

// Quick Actions
const quickActionStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: colors.cardDark,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  text: {
    color: colors.textWhite,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  subtext: {
    color: "#B0BEC5",
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
    paddingHorizontal: 10,
  },
});

// Export styles
export {
  colors,
  globalStyles,
  headerStyles,
  insightStyles,
  progressStyles,
  recommendedStyles,
  pointsStyles,
  quickActionStyles,
};

export default globalStyles;
