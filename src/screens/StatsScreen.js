import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';

export default function StatsScreen({ navigation }) {
  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
          </TouchableOpacity>
          <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
            Your Stats
          </Text>
        </View>

        {/* Stats Content */}
        <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10 }}>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>Progress Overview</Text>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: colors.textWhite }}>Courses Completed: 5</Text>
            <Text style={{ color: colors.textWhite, marginTop: 5 }}>Average Quiz Score: 85%</Text>
            <Text style={{ color: colors.textWhite, marginTop: 5 }}>Learning Streak: 12 days</Text>
          </View>
          {/* Add charts here using react-native-chart-kit if desired */}
        </View>
      </ScrollView>
    </View>
  );
}