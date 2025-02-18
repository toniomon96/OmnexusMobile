import React from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather"; 
import globalStyles from "../styles/globalStyles"; 

export default function HomeScreen() {
  const navigation = useNavigation();
  const userName = "Alex"; 

  return (
    <SafeAreaView style={globalStyles.safeContainer}> {/* ✅ Prevents content from touching the top */}
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={globalStyles.header}>
          <Text style={globalStyles.greeting}>Hello, {userName}</Text>
          <View style={globalStyles.headerIcons}>
            <TouchableOpacity>
              <Icon name="bell" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Icon name="user" size={28} color="#fff" style={globalStyles.profileIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={globalStyles.subheading}>Ready to learn something new?</Text>

        {/* Daily Insight Card */}
        <View style={globalStyles.insightCard}>
          <Text style={globalStyles.insightTitle}>DAILY INSIGHT</Text>
          <Text style={globalStyles.insightHeading}>Impact of Sleep Quality on Cognitive Performance</Text>
          <Text style={globalStyles.insightDescription}>
            New research suggests that consistent 7-9 hour sleep patterns can improve memory retention by up to 40%.
          </Text>
          <TouchableOpacity>
            <Text style={globalStyles.readMore}>Read Full Study →</Text>
          </TouchableOpacity>
        </View>

        {/* Progress Section */}
        <View style={globalStyles.progressContainer}>
          <View style={[globalStyles.progressCard, globalStyles.studiesReadCard]}>
            <Icon name="book-open" size={28} color="#fff" />
            <Text style={globalStyles.progressText}>Studies Read</Text>
            <Text style={globalStyles.progressNumber}>24</Text>
          </View>
          <View style={[globalStyles.progressCard, globalStyles.studyStreakCard]}>
            <Icon name="award" size={28} color="#fff" />
            <Text style={globalStyles.progressText}>Study Streak</Text>
            <Text style={globalStyles.progressNumber}>7 days</Text>
          </View>
        </View>

        {/* Recommended Studies */}
        <View style={globalStyles.recommendedContainer}>
          <Text style={globalStyles.recommendedHeading}>Recommended Studies</Text>
          
          <View style={globalStyles.studyCard}>
            <Text style={globalStyles.category}>NUTRITION</Text>
            <Text style={globalStyles.studyTitle}>Protein Timing and Muscle Growth</Text>
            <Text style={globalStyles.studyDescription}>Meta-analysis of 23 studies on protein consumption patterns...</Text>
          </View>

          <View style={globalStyles.studyCard}>
            <Text style={globalStyles.category}>EXERCISE SCIENCE</Text>
            <Text style={globalStyles.studyTitle}>Recovery Methods Effectiveness</Text>
            <Text style={globalStyles.studyDescription}>Comparative study of various recovery techniques...</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
