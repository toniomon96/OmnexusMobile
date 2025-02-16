import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";

export default function LoadingScreen() {
  return (
    <View style={globalStyles.loadingContainer}>
      <Text style={globalStyles.brand}>OMNEXUS</Text>
      <Ionicons name="reload-circle-outline" size={80} color="white" />
      <Text style={globalStyles.loadingText}>Optimizing Your Health Journey...</Text>
    </View>
  );
}