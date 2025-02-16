import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/avatar.png")} style={styles.avatar} />
        <Text style={styles.username}>Hi, Alex</Text>
        <TouchableOpacity>
          <Image source={require("../assets/bell.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.insightCard}>
        <Text style={styles.insightTitle}>Daily Research Insight</Text>
        <Text style={styles.insightHeading}>Impact of Sleep Quality on Cognitive Performance</Text>
        <Text style={styles.insightText}>New research suggests that consistent 7-9 hour sleep patterns significantly improve memory retention and decision-making capabilities.</Text>
        <TouchableOpacity>
          <Text style={styles.readMore}>Read More →</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.progressSection}>
        <Text style={styles.sectionTitle}>Your Learning Progress</Text>
        <View style={styles.progressCard}>
          <Text style={styles.progressLabel}>Weekly Goal</Text>
          <Text style={styles.progressValue}>4/5 Studies Reviewed</Text>
          <View style={styles.progressBarBackground}>
            <View style={styles.progressBarFill}></View>
          </View>
          <Text style={styles.progressPercentage}>80%</Text>
        </View>
      </View>
      
      <View style={styles.recommendSection}>
        <Text style={styles.sectionTitle}>Recommended for You</Text>
        <View style={styles.recommendCard}>
          <Text style={styles.recommendTitle}>Neuroscience Basics</Text>
          <Text style={styles.recommendText}>Understanding Brain Function</Text>
        </View>
        <View style={styles.recommendCard}>
          <Text style={styles.recommendTitle}>Genetics & Performance</Text>
          <Text style={styles.recommendText}>Latest Research Findings</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  username: { fontSize: 18, fontWeight: "bold" },
  icon: { width: 24, height: 24 },
  insightCard: { backgroundColor: "#1A1A2E", padding: 15, borderRadius: 10, marginBottom: 20 },
  insightTitle: { color: "#B0B0B0", fontSize: 14 },
  insightHeading: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold", marginVertical: 5 },
  insightText: { color: "#B0B0B0", fontSize: 14 },
  readMore: { color: "#FFD700", fontSize: 14, marginTop: 10 },
  progressSection: { marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  progressCard: { backgroundColor: "#FFFFFF", padding: 15, borderRadius: 10 },
  progressLabel: { fontSize: 14, color: "#777" },
  progressValue: { fontSize: 16, fontWeight: "bold" },
  progressBarBackground: { height: 6, backgroundColor: "#E0E0E0", borderRadius: 3, marginVertical: 5 },
  progressBarFill: { height: 6, backgroundColor: "#007BFF", borderRadius: 3, width: "80%" },
  progressPercentage: { textAlign: "right", fontSize: 14, fontWeight: "bold" },
  recommendSection: { marginBottom: 20 },
  recommendCard: { backgroundColor: "#FFFFFF", padding: 15, borderRadius: 10, marginBottom: 10 },
  recommendTitle: { fontSize: 16, fontWeight: "bold" },
  recommendText: { fontSize: 14, color: "#777" },
});
