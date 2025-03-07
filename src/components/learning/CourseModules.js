import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../../styles/globalStyles';

export default function CourseModuleScreen({ route, navigation }) {
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
            {courseTitle || 'Course Module'}
          </Text>
        </View>

        {/* Module Content */}
        <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10 }}>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>Module 1: Introduction</Text>
          <Text style={{ color: colors.textWhite, marginTop: 10 }}>
            This is the content of the course module. It may include text, videos, or interactive quizzes.
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <TouchableOpacity style={{ backgroundColor: colors.primaryBlue, padding: 10, borderRadius: 5 }}>
              <Text style={{ color: colors.textWhite }}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: colors.primaryBlue, padding: 10, borderRadius: 5 }}>
              <Text style={{ color: colors.textWhite }}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}