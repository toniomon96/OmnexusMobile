import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../../styles/globalStyles';

const activities = [
  { id: '1', title: 'Completed Research Module', time: '2 hours ago', type: 'Module' },
  { id: '2', title: 'Earned Achievement: Fitness Master', time: 'Yesterday', type: 'Achievement' },
];

export default function ActivityHistoryScreen({ navigation }) {
  return (
    <View style={globalStyles.safeContainer}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20, paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
        </TouchableOpacity>
        <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
          Activity History
        </Text>
      </View>

      {/* Activity List */}
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        contentContainerStyle={globalStyles.scrollContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginBottom: 15 }}
            onPress={() => navigation.navigate(item.type === 'Module' ? 'ModuleDetail' : 'AchievementDetail')}
          >
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ color: '#aaa', marginTop: 5 }}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}