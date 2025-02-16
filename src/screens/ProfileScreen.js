import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Your Profile</Text>
      <Text>Manage your account, preferences, and settings.</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
    </View>
  );
}