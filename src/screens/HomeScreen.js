import React from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather"; 
import { FontAwesome5 } from "@expo/vector-icons";
import ProgressBar from "../styles/progressBarStyles"; // Import updated ProgressBar component
import {
  globalStyles,
  headerStyles,
  insightStyles,
  progressStyles,
  recommendedStyles,
  pointsStyles,
  quickActionStyles
} from "../styles/globalStyles"; // Import modular styles

export default function HomeScreen() {
  const navigation = useNavigation();
  const userName = "Toni"; 
  const energyCount = 12;

  return (
    <SafeAreaView style={globalStyles.safeContainer}> 
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>

        {/* Header */}
        <View style={headerStyles.container}>
          {/* Left Side - Greeting */}
          <View style={headerStyles.greetingContainer}>
            <Text style={headerStyles.greeting}>Hi, {userName}</Text>
          </View>

          {/* Right Side - Icons */}
          <View style={headerStyles.headerIcons}>
            {/* Energy Icon & Count */}
            <View style={headerStyles.energyContainer}>
              <FontAwesome5 name="bolt" size={24} solid color="#32FF00" />
              <Text style={headerStyles.energyCount}>{energyCount}</Text>
            </View>

            {/* Bell Icon */}
            <TouchableOpacity>
              <Icon name="bell" size={24} color="#fff" />
            </TouchableOpacity>

            {/* Profile Image */}
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image source={require("../assets/profile-pic.jpg")} style={headerStyles.profileImage} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Points Container */}
        <View style={pointsStyles.container}>
          <View style={pointsStyles.row}>
            <Text style={pointsStyles.text}>Total Points</Text>
            <View style={pointsStyles.levelBadge}>
              <Text style={pointsStyles.levelText}>Level 8</Text>
            </View>
          </View>
          <Text style={pointsStyles.value}>2,450</Text>
        </View>

        {/* Daily Insight Card */}
        <View style={insightStyles.container}>
          <View style={insightStyles.header}>
            <Text style={insightStyles.title}>Daily Insight</Text>
            <Text style={insightStyles.newText}>New</Text> 
          </View>
          <Text style={insightStyles.text}>
            Recent study shows high-intensity interval training (HIIT) improves 
            cognitive function in adults aged 30-45.
          </Text>
          <TouchableOpacity>
            <Text style={insightStyles.readMore}>Read More</Text>
          </TouchableOpacity>
        </View>

        {/* Learning Progress */}
        <View style={progressStyles.card}>
          <View style={progressStyles.section}>
            <Text style={progressStyles.heading}>Learning Progress</Text>
            <ProgressBar label="Fitness" percentage={65} color="#1E90FF" />
            <ProgressBar label="Health" percentage={45} color="#32CD32" />
            <ProgressBar label="Nutrition" percentage={80} color="#FFA500" />
          </View>
        </View>

        {/* Recommended Studies */}
        <View style={recommendedStyles.card}>
          <Text style={recommendedStyles.heading}>Recommended Studies</Text>
          
          <TouchableOpacity style={recommendedStyles.studyCard}>
            <Text style={recommendedStyles.studyTitle}>Protein Timing Impact on Muscle Growth</Text>
            <Text style={recommendedStyles.studyTime}>15 min read →</Text>
          </TouchableOpacity>

          <TouchableOpacity style={recommendedStyles.studyCard}>
            <Text style={recommendedStyles.studyTitle}>Sleep Quality and Recovery</Text>
            <Text style={recommendedStyles.studyTime}>12 min read →</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={quickActionStyles.container}>
          <TouchableOpacity style={quickActionStyles.button}>
            <Icon name="message-circle" size={24} color="#3AA8F7" />
            <Text style={quickActionStyles.text}>Ask an Expert</Text>
            <Text style={quickActionStyles.subtext}>Get answers from professionals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={quickActionStyles.button}>
            <Icon name="bar-chart-2" size={24} color="limegreen" />
            <Text style={quickActionStyles.text}>Your Stats</Text>
            <Text style={quickActionStyles.subtext}>Track your progress</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
