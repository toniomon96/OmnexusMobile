import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import globalStyles from "../styles/globalStyles";

export default function CommunityScreen() {
  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={globalStyles.header}>
          <Text style={globalStyles.sectionTitle}>Community</Text>
          <View style={globalStyles.headerIcons}>
            <Icon name="search" size={24} color="#fff" />
            <Icon name="bell" size={24} color="#fff" style={{ marginLeft: 15 }} />
          </View>
        </View>

        {/* Active Discussions */}
        <Text style={globalStyles.sectionTitle}>Active Discussions</Text>
        <View style={globalStyles.card}>
          <Text style={globalStyles.cardTitle}>Best Post-Workout Nutrition</Text>
          <Text style={globalStyles.cardSubtitle}>Started by Dr. James • 2h ago</Text>
          <TouchableOpacity>
            <Text style={globalStyles.buttonText}>Join Discussion</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
