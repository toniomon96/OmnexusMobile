import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';

export default function CourseDetailScreen({ route, navigation }) {
  const { courseTitle } = route.params || {};

  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
          </TouchableOpacity>
          <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
            {courseTitle || 'Course Details'}
          </Text>
        </View>

        {/* Course Content */}
        <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10 }}>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>{courseTitle}</Text>
          <Text style={{ color: colors.textWhite, marginTop: 10 }}>
            This course covers the fundamentals of {courseTitle}. It includes modules on theory, practical applications, and assessments.
          </Text>
          <Text style={{ color: '#aaa', marginTop: 10 }}>Duration: 4 weeks</Text>
          <TouchableOpacity
            style={{ backgroundColor: colors.primaryBlue, padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center' }}
            onPress={() => navigation.navigate('CourseModule', { courseTitle })}
          >
            <Text style={{ color: colors.textWhite, fontWeight: 'bold' }}>Start Course</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}