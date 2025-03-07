import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';

export default function NotificationSettingsScreen({ navigation }) {
  const [achievementsEnabled, setAchievementsEnabled] = useState(true);
  const [remindersEnabled, setRemindersEnabled] = useState(false);

  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
          </TouchableOpacity>
          <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
            Notification Settings
          </Text>
        </View>

        {/* Settings */}
        <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>Achievements</Text>
            <Switch
              value={achievementsEnabled}
              onValueChange={setAchievementsEnabled}
              trackColor={{ false: '#767577', true: colors.primaryBlue }}
              thumbColor={achievementsEnabled ? colors.textWhite : '#f4f3f4'}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>Reminders</Text>
            <Switch
              value={remindersEnabled}
              onValueChange={setRemindersEnabled}
              trackColor={{ false: '#767577', true: colors.primaryBlue }}
              thumbColor={remindersEnabled ? colors.textWhite : '#f4f3f4'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}