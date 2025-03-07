import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';

const recommendedItems = [
  { id: '1', title: 'Protein Timing Impact on Muscle Growth', type: 'Study', duration: '15 min read' },
  { id: '2', title: 'Advanced Weight Training', type: 'Course', duration: '4 weeks' },
];

export default function RecommendedListScreen({ navigation }) {
  return (
    <View style={globalStyles.safeContainer}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20, paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
        </TouchableOpacity>
        <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
          Recommended
        </Text>
      </View>

      {/* Recommended Items */}
      <FlatList
        data={recommendedItems}
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
            <Text style={{ color: '#aaa', marginTop: 5 }}>{item.duration}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}