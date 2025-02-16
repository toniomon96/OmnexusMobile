import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function StudyScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.heading}>Research Hub</Text>
      <Text>Explore evidence-based studies on fitness, nutrition, and health.</Text>
      {/* List of studies can be mapped here */}
    </ScrollView>
  );
}