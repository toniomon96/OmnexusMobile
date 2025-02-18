import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles"; // Ensure correct path

const communityData = [
  { id: "1", title: "Discussions", icon: "comments", iconLib: FontAwesome5 },
  { id: "2", title: "Q&A", icon: "help-circle-outline", iconLib: Ionicons },
  { id: "3", title: "Challenges", icon: "trophy", iconLib: FontAwesome5 },
  { id: "4", title: "Mentorship", icon: "account-tie", iconLib: MaterialCommunityIcons },
  { id: "5", title: "Events", icon: "calendar", iconLib: FontAwesome5 },
];

export default function CommunityScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={globalStyles.communityItem} accessibilityLabel={`Open ${item.title}`}>
      <item.iconLib name={item.icon} size={28} color="#009EFF" style={globalStyles.communityIcon} />
      <Text style={globalStyles.communityItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Community</Text>
      <FlatList
        data={communityData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={globalStyles.list}
      />
    </View>
  );
}
