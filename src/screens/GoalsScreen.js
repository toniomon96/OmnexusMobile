import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function GoalsScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Your Goals</Text>
      <Text>Set and track your fitness and nutrition goals.</Text>
      <Button title="Set New Goal" onPress={() => navigation.navigate("GoalDetails")} />
    </View>
  );
}