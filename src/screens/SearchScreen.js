import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';

const mockResults = [
  { id: '1', title: 'HIIT and Cognitive Function', type: 'Study' },
  { id: '2', title: 'Nutrition Fundamentals', type: 'Course' },
];

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={globalStyles.safeContainer}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20, paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
        </TouchableOpacity>
        <TextInput
          style={{
            flex: 1,
            backgroundColor: colors.cardDark,
            borderRadius: 20,
            padding: 10,
            color: colors.textWhite,
            marginLeft: 20,
          }}
          placeholder="Search courses, studies..."
          placeholderTextColor="#B0BEC5"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Search Results */}
      <FlatList
        data={mockResults}
        keyExtractor={(item) => item.id}
        contentContainerStyle={globalStyles.scrollContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginBottom: 15 }}
            onPress={() =>
              navigation.navigate(item.type === 'Study' ? 'StudyDetail' : 'CourseDetail', {
                studyTitle: item.title,
                courseTitle: item.title,
              })
            }
          >
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ color: '#aaa', marginTop: 5 }}>{item.type}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}