import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../../styles/globalStyles";

export default function GoalsScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Goals & Progress</Text>
      <View style={globalStyles.statsContainer}>
        <View style={globalStyles.statBox}><Text style={globalStyles.statValue}>87%</Text><Text>Progress</Text></View>
        <View style={globalStyles.statBox}><Text style={globalStyles.statValue}>12</Text><Text>Day Streak</Text></View>
        <View style={globalStyles.statBox}><Text style={globalStyles.statValue}>4</Text><Text>Goals</Text></View>
      </View>
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>Active Goals</Text>
        <TouchableOpacity style={globalStyles.newGoalButton}><Ionicons name="add" size={20} color="white" /><Text> New Goal</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}