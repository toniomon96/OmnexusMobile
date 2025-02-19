import React from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather"; 
import globalStyles from "../styles/globalStyles"; 
import ProgressBar from "../styles/progressBarStyles"; // Import updated ProgressBar component

export default function HomeScreen() {
  const navigation = useNavigation();
  const userName = "Toni"; 
  const energyCount = 12;

  return (
    <SafeAreaView style={globalStyles.safeContainer}> 
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>

        {/* Header */}
        <View style={globalStyles.header}>
          <Text style={globalStyles.greeting}>Hi, {userName}</Text>
          <View style={globalStyles.headerIcons}>
            <View style={globalStyles.energyContainer}>
              <Icon name="zap" size={18} color="green" />
              <Text style={globalStyles.energyCount}>{energyCount}</Text>
            </View>
            <TouchableOpacity>
              <Icon name="bell" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image source={require("../assets/profile-pic.jpg")} style={globalStyles.profileImage} />
            </TouchableOpacity>
          </View>
        </View>


        <View style={globalStyles.pointsContainer}>
          <View style={globalStyles.pointsRow}>
            <Text style={globalStyles.pointsText}>Total Points</Text>
            <View style={globalStyles.levelBadge}>
              <Text style={globalStyles.levelText}>Level 8</Text>
            </View>
          </View>
          <Text style={globalStyles.pointsValue}>2,450</Text>
        </View>

        {/* Daily Insight Card */}
        <View style={globalStyles.insightCard}>
          <View style={globalStyles.insightHeader}>
            <Text style={globalStyles.insightTitle}>Daily Insight</Text>
            <Text style={globalStyles.newText}>New</Text> 
          </View>
          <Text style={globalStyles.insightText}>
            Recent study shows high-intensity interval training (HIIT) improves 
            cognitive function in adults aged 30-45.
          </Text>
          <TouchableOpacity>
            <Text style={globalStyles.readMore}>Read More</Text>
          </TouchableOpacity>
        </View>


        {/* Total Points */}
        <View style={globalStyles.pointsContainer}>
          <Text style={globalStyles.pointsText}>Total Points</Text>
          <Text style={globalStyles.pointsValue}>2,450</Text>
          <View style={globalStyles.levelBadge}>
            <Text style={globalStyles.levelText}>Level 8</Text>
          </View>
        </View>

        {/* Learning Progress */}
        <View style={globalStyles.progressSection}>
          <Text style={globalStyles.progressHeading}>Learning Progress</Text>
          <ProgressBar label="Fitness" percentage={65} color="#1E90FF" />
          <ProgressBar label="Health" percentage={45} color="#32CD32" />
          <ProgressBar label="Nutrition" percentage={80} color="#FFA500" />
        </View>

        {/* Recommended Studies */}
        <View style={globalStyles.recommendedCard}>
          <Text style={globalStyles.recommendedHeading}>Recommended Studies</Text>
          
          <TouchableOpacity style={globalStyles.studyCard}>
            <Text style={globalStyles.studyTitle}>Protein Timing Impact on Muscle Growth</Text>
            <Text style={globalStyles.studyTime}>15 min read →</Text>
          </TouchableOpacity>

          <TouchableOpacity style={globalStyles.studyCard}>
            <Text style={globalStyles.studyTitle}>Sleep Quality and Recovery</Text>
            <Text style={globalStyles.studyTime}>12 min read →</Text>
          </TouchableOpacity>
        </View>

        <View style={globalStyles.quickActionsContainer}>
          <TouchableOpacity style={globalStyles.quickActionButton}>
            <Icon name="message-circle" size={24} color="#3AA8F7" />
            <Text style={globalStyles.quickActionText}>Ask an Expert</Text>
            <Text style={globalStyles.quickActionSubtext}>Get answers from professionals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={globalStyles.quickActionButton}>
            <Icon name="bar-chart-2" size={24} color="limegreen" />
            <Text style={globalStyles.quickActionText}>Your Stats</Text>
            <Text style={globalStyles.quickActionSubtext}>Track your progress</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
