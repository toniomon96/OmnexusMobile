import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';

export default function ModuleDetailScreen({ navigation }) {
  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
          </TouchableOpacity>
          <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
            Module Details
          </Text>
        </View>

        {/* Module Content */}
        <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10 }}>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>
            Completed: Research Module
          </Text>
          <Text style={{ color: colors.textWhite, marginTop: 10 }}>
            You completed this module 2 hours ago. It covered advanced research techniques.
          </Text>
          <Text style={{ color: '#aaa', marginTop: 10 }}>Completion Date: Today</Text>
        </View>
      </ScrollView>
    </View>
  );
}