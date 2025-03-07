import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../../styles/globalStyles';

export default function StatsDetailScreen({ navigation }) {
  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
          </TouchableOpacity>
          <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
            Detailed Stats
          </Text>
        </View>

        {/* Detailed Stats */}
        <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10 }}>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>Goals Met</Text>
          <Text style={{ color: colors.textWhite, marginTop: 10 }}>85% of your goals have been achieved.</Text>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Day Streak</Text>
          <Text style={{ color: colors.textWhite, marginTop: 10 }}>Current Streak: 12 days</Text>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Health Score</Text>
          <Text style={{ color: colors.textWhite, marginTop: 10 }}>Your health score is 4.8 out of 5.</Text>
        </View>
      </ScrollView>
    </View>
  );
}