import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors, headerStyles } from '../styles/globalStyles';

const continueLearning = [
  { id: '1', title: 'The Science of Intermittent Fasting', progress: 60 },
  { id: '2', title: 'Muscle Growth & Recovery', progress: 30 },
];

const recommendedCourses = [
  { id: '1', title: 'Advanced Weight Training', duration: '4 weeks' },
  { id: '2', title: 'Nutrition Fundamentals', duration: '3 weeks' },
];

export default function StudyScreen({ navigation }) {
  return (
    <View style={globalStyles.safeContainer}>
      {/* Header */}
      <View style={[headerStyles.container, { paddingHorizontal: 20 }]}>
        <View style={headerStyles.greetingContainer}>
          <Text style={headerStyles.greeting}>Learn</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={24} color={colors.textWhite} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Continue Learning */}
        <View style={{ marginTop: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>Continue Learning</Text>
            <TouchableOpacity onPress={() => navigation.navigate('StudyCredibility')}>
              <Text style={{ color: colors.primaryBlue, fontSize: 14 }}>Study Credibility</Text>
            </TouchableOpacity>
          </View>
          {continueLearning.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginBottom: 10 }}
              onPress={() => navigation.navigate('CourseModule', { courseTitle: item.title })}
            >
              <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
              <Text style={{ color: '#aaa', marginTop: 5 }}>Progress: {item.progress}%</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recommended Courses */}
        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>Recommended For You</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RecommendedList')}>
              <Text style={{ color: colors.primaryBlue, fontSize: 14 }}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={recommendedCourses}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginRight: 10, width: 200 }}
                onPress={() => navigation.navigate('CourseDetail', { courseTitle: item.title })}
              >
                <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ color: '#aaa', marginTop: 5 }}>{item.duration}</Text>
                <Ionicons name="play-circle" size={24} color={colors.primaryBlue} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}