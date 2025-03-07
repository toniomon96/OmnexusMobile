import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';

const topics = [
  { id: '1', title: 'Cardiovascular Health', type: 'Study' },
  { id: '2', title: 'Sleep Patterns', type: 'Study' },
];

export default function TopicListScreen({ navigation }) {
  return (
    <View style={globalStyles.safeContainer}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20, paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
        </TouchableOpacity>
        <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
          Topic: Health
        </Text>
      </View>

      {/* Topic Studies */}
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id}
        contentContainerStyle={globalStyles.scrollContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginBottom: 15 }}
            onPress={() => navigation.navigate('StudyDetail', { studyTitle: item.title })}
          >
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ color: '#aaa', marginTop: 5 }}>{item.type}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}