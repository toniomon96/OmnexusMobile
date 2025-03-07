import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../../styles/globalStyles';

export default function RatingSystemDetailScreen({ navigation }) {
  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
          </TouchableOpacity>
          <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
            Rating System Details
          </Text>
        </View>

        {/* Content */}
        <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10 }}>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>
            Our Rating System
          </Text>
          <Text style={{ color: colors.textWhite, marginTop: 10 }}>
            Our rating system evaluates studies based on several criteria, including methodology, sample size, bias control, and independent validation. Studies are categorized into four tiers: Platinum, Gold, Silver, and Bronze. Each tier reflects the strength and reliability of the research, helping you make informed decisions.
          </Text>
          {/* Add more detailed content as needed */}
        </View>
      </ScrollView>
    </View>
  );
}