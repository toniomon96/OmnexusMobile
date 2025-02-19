import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProgressBar = ({ label, percentage, color }) => {
  return (
    <View style={styles.container}>
      {/* Label and Percentage in a Row */}
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.percentage}>{percentage}%</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBackground}>
        <View style={[styles.progressFill, { width: `${percentage}%`, backgroundColor: color }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },

  // Label and Percentage Row
  labelContainer: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 5, 
  },

  label: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "bold" 
  },

  percentage: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "bold" 
  },

  // Progress Bar
  progressBackground: {
    width: "100%",
    height: 16,
    borderRadius: 10,
    backgroundColor: "#2D3E5E",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 10,
  },
});

export default ProgressBar;
