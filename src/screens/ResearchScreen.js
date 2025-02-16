import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function ResearchScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Research Hub</Text>
        <TouchableOpacity>
          <Image source={require("../assets/bell.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
      
      <TextInput style={styles.searchBar} placeholder="Search research..." />
      
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Fitness</Text>
        <Text style={styles.tab}>Nutrition</Text>
        <Text style={styles.tab}>Health</Text>
      </View>
      
      <View style={styles.researchCard}>
        <Text style={styles.badge}>Platinum</Text>
        <Text style={styles.cardTitle}>Impact of High-Intensity Interval Training on Muscle Growth</Text>
        <Text style={styles.cardDescription}>A comprehensive meta-analysis of 50 studies examining the effectiveness of HIIT...</Text>
        <Text style={styles.cardDate}>📅 Published Jan 2025</Text>
        <View style={styles.cardActions}>
          <TouchableOpacity>
            <Image source={require("../assets/bookmark.png")} style={styles.actionIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/share.png")} style={styles.actionIcon} />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.researchCard}>
        <Text style={styles.badgeGold}>Gold ⭐</Text>
        <Text style={styles.cardTitle}>Protein Timing and Muscle Recovery</Text>
        <Text style={styles.cardDescription}>Double-blind randomized controlled trial investigating optimal protein intake...</Text>
        <Text style={styles.cardDate}>📅 Published Feb 2025</Text>
        <View style={styles.cardActions}>
          <TouchableOpacity>
            <Image source={require("../assets/bookmark.png")} style={styles.actionIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/share.png")} style={styles.actionIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  title: { fontSize: 20, fontWeight: "bold" },
  icon: { width: 24, height: 24 },
  searchBar: { backgroundColor: "#f0f0f0", padding: 10, borderRadius: 8, marginBottom: 15 },
  tabs: { flexDirection: "row", marginBottom: 15 },
  tab: { fontSize: 16, color: "#777", marginRight: 20 },
  activeTab: { fontWeight: "bold", textDecorationLine: "underline" },
  researchCard: { backgroundColor: "#1A1A2E", padding: 15, borderRadius: 10, marginBottom: 15 },
  badge: { color: "#fff", backgroundColor: "#3b5998", padding: 5, borderRadius: 5, alignSelf: "flex-start" },
  badgeGold: { color: "#FFD700", fontWeight: "bold", alignSelf: "flex-start" },
  cardTitle: { color: "#fff", fontSize: 18, fontWeight: "bold", marginVertical: 5 },
  cardDescription: { color: "#B0B0B0", fontSize: 14 },
  cardDate: { color: "#B0B0B0", fontSize: 12, marginTop: 5 },
  cardActions: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  actionIcon: { width: 20, height: 20, tintColor: "#fff" },
});
