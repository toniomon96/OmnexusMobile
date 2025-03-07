import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';

const connectedApps = [
  { id: '1', name: 'Google Fit', connected: true },
  { id: '2', name: 'Apple Health', connected: false },
];

export default function ConnectedAppsScreen({ navigation }) {
  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
          </TouchableOpacity>
          <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
            Connected Apps
          </Text>
        </View>

        {/* Apps List */}
        {connectedApps.map((app) => (
          <View
            key={app.id}
            style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>{app.name}</Text>
            <TouchableOpacity>
              <Text style={{ color: app.connected ? colors.primaryGreen : colors.primaryBlue }}>
                {app.connected ? 'Disconnect' : 'Connect'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}