import React from "react";
import { View, Text, ScrollView } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function ProfileScreen() {
  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* User Info */}
        <View style={globalStyles.card}>
          <Text style={globalStyles.cardTitle}>Sarah Mitchell</Text>
          <Text style={globalStyles.cardSubtitle}>Member since Jan 2025</Text>
        </View>

        {/* Recent Activity */}
        <Text style={globalStyles.sectionTitle}>Recent Activity</Text>
        <View style={globalStyles.card}>
          <Text style={globalStyles.cardTitle}>Completed Research Module</Text>
          <Text style={globalStyles.cardSubtitle}>2 hours ago</Text>
        </View>
      </ScrollView>
    </View>
  );
}
