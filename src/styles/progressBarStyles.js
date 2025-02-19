import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProgressBar = ({ label, percentage, color }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.progressBackground}> 
        <View style={[styles.progressFill, { width: `${percentage}%`, backgroundColor: color }]} />
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  label: { color: "#fff", fontSize: 16, marginBottom: 5, fontWeight: "bold" },
  
  progressBackground: {
    width: "100%",
    height: 16,
    borderRadius: 10,
    backgroundColor: "#2D3E5E", // Darker background for full bar
    justifyContent: "center",
    position: "relative",
  },

  progressFill: {
    height: "100%",
    borderRadius: 10,
  },

  percentageText: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProgressBar;
