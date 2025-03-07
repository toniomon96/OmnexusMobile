import React from 'react';
import { View, Text, TouchableOpacity, SectionList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import globalStyles, { colors } from "../styles/globalStyles"; // Import colors for consistency

const LearningScreen = () => {
  const progressData = {
    coursesInProgress: 4,
    modulesCompleted: 12,
    quizAverage: "85%",
    streak: 7
  };

  const continueLearning = [
    { id: '1', title: 'The Science of Intermittent Fasting', module: 'Module 3 of 8', progress: 0.4 },
    { id: '2', title: 'Muscle Growth & Recovery', module: 'Module 2 of 6', progress: 0.2 }
  ];

  const recommendedCourses = [
    { id: '3', title: 'Advanced Weight Training', modules: '6 modules • 3.5 hours', icon: 'barbell-outline' },
    { id: '4', title: 'Nutrition Fundamentals', modules: '8 modules • 4 hours', icon: 'nutrition-outline' }
  ];

  const sections = [
    { title: "Continue Learning", data: continueLearning, type: "continue" },
    { title: "Recommended For You", data: recommendedCourses, type: "recommended" }
  ];

  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Learn</Text>
        <Ionicons name="search-outline" size={24} color="white" />
      </View>
      <Text style={styles.subHeader}>Your learning journey</Text>

      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBox}>
          <Text style={styles.progressNumber}>{progressData.coursesInProgress}</Text>
          <Text style={styles.progressLabel}>Courses In Progress</Text>
        </View>
        <View style={styles.progressBox}>
          <Text style={[styles.progressNumber, { color: '#32CD32' }]}>{progressData.modulesCompleted}</Text>
          <Text style={styles.progressLabel}>Modules Completed</Text>
        </View>
        <View style={styles.progressBox}>
          <Text style={styles.progressNumber}>{progressData.quizAverage}</Text>
          <Text style={styles.progressLabel}>Quiz Average</Text>
        </View>
      </View>
      <Text style={styles.streakText}>🔥 {progressData.streak} Day Streak!</Text>
    </>
  );

  const renderItem = ({ item, section }) => {
    if (section.type === "continue") {
      return (
        <View style={styles.courseCard}>
          <View style={styles.courseHeader}>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Ionicons name="bookmark-outline" size={16} color="#007BFF" />
          </View>
          <Text style={styles.moduleText}>{item.module}</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${item.progress * 100}%` }]} />
          </View>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (section.type === "recommended") {
      return (
        <TouchableOpacity style={styles.recommendedCard}>
          <Ionicons name={item.icon} size={24} color="#007BFF" />
          <View style={styles.recommendedTextContainer}>
            <Text style={styles.recommendedTitle}>{item.title}</Text>
            <Text style={styles.recommendedSubtitle}>{item.modules}</Text>
          </View>
          <Ionicons name="play-circle-outline" size={24} color="#32CD32" />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.sectionListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark, // Matches the dark blue background
  },
  sectionListContent: {
    paddingTop: 70, // Matches the header offset
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: colors.backgroundDark,
  },
  headerTitle: {
    fontSize: 28, // Larger title as in the image
    fontWeight: 'bold',
    color: 'white',
  },
  subHeader: {
    fontSize: 16, // Slightly larger for better readability
    color: '#B0BEC5', // Light gray text
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.cardDark, // Darker blue for cards
    paddingVertical: 20,
    borderRadius: 12, // Rounded corners
    marginHorizontal: 20,
    marginBottom: 15,
    elevation: 4, // Slight shadow for depth
  },
  progressBox: {
    alignItems: 'center',
  },
  progressNumber: {
    fontSize: 24, // Larger numbers
    fontWeight: 'bold',
    color: 'white',
  },
  progressLabel: {
    fontSize: 14, // Slightly larger labels
    color: '#B0BEC5',
    marginTop: 5,
  },
  streakText: {
    fontSize: 16, // Slightly larger for emphasis
    color: '#32CD32', // Green for streak
    textAlign: 'center',
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 20, // Larger section headers
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  courseCard: {
    backgroundColor: colors.cardDark, // Darker blue for cards
    borderRadius: 12, // Rounded corners
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    elevation: 4, // Slight shadow
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  courseTitle: {
    fontSize: 18, // Larger title
    fontWeight: 'bold',
    color: 'white',
  },
  moduleText: {
    fontSize: 14, // Slightly larger
    color: '#B0BEC5',
    marginBottom: 10,
  },
  progressBarContainer: {
    height: 8, // Thicker progress bar
    backgroundColor: '#333',
    borderRadius: 4,
    marginVertical: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#007BFF', // Blue progress bar to match design
    borderRadius: 4,
  },
  continueButton: {
    backgroundColor: '#007BFF', // Blue button
    paddingVertical: 12,
    borderRadius: 8, // More rounded
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16, // Larger text
    fontWeight: 'bold',
  },
  recommendedCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardDark, // Darker blue for cards
    borderRadius: 12, // Rounded corners
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    elevation: 4, // Slight shadow
  },
  recommendedTextContainer: {
    flex: 1,
    marginLeft: 15, // More spacing between icon and text
  },
  recommendedTitle: {
    fontSize: 16, // Slightly larger
    fontWeight: 'bold',
    color: 'white',
  },
  recommendedSubtitle: {
    fontSize: 14, // Slightly larger
    color: '#B0BEC5',
    marginTop: 5,
  },
});

export default LearningScreen;