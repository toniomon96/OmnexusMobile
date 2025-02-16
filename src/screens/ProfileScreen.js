import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";

export default function ProfileScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Profile</Text>
      <View style={globalStyles.profileContainer}>
        <Ionicons name="person-circle-outline" size={80} color="gray" />
        <Text style={globalStyles.username}>Alex</Text>
        <Text style={globalStyles.email}>alex@example.com</Text>
        <View style={globalStyles.infoBox}>
          <Ionicons name="calendar-outline" size={20} color="gray" />
          <Text>Member since: January 2024</Text>
        </View>
        <View style={globalStyles.infoBox}>
          <Ionicons name="barbell-outline" size={20} color="gray" />
          <Text>Fitness Level: Intermediate</Text>
        </View>
        <View style={globalStyles.infoBox}>
          <Ionicons name="time-outline" size={20} color="gray" />
          <Text>Preferred Workout Time: Evenings</Text>
        </View>
        <TouchableOpacity style={globalStyles.editButton}>
          <Ionicons name="create-outline" size={20} color="white" />
          <Text style={globalStyles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
