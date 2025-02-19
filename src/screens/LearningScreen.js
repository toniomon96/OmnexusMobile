import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import globalStyles from "../styles/globalStyles";

export default function LearningPathsScreen() {
  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={globalStyles.header}>
          <Text style={globalStyles.sectionTitle}>Learning Paths</Text>
          <View style={globalStyles.headerIcons}>
            <Icon name="bell" size={24} color="#fff" />
            <Icon name="settings" size={24} color="#fff" style={{ marginLeft: 15 }} />
          </View>
        </View>

        {/* Progress Section */}
        <View style={globalStyles.progressBarContainer}>
          <Text style={globalStyles.cardTitle}>Your Progress</Text>
          <Text style={globalStyles.cardSubtitle}>Level 3 - Advanced Beginner</Text>
          <View style={globalStyles.progressBar}>
            <View style={[globalStyles.progressFill, { width: "65%" }]} />
          </View>
          <Text style={globalStyles.cardSubtitle}>65% Complete  |  35% Remaining</Text>
        </View>

        {/* Continue Learning */}
        <Text style={globalStyles.sectionTitle}>Continue Learning</Text>
        <View style={globalStyles.card}>
          <Text style={globalStyles.cardTitle}>Advanced Strength Training</Text>
          <Text style={globalStyles.cardSubtitle}>Module 4 of 8</Text>
          <TouchableOpacity style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>Resume Learning</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
