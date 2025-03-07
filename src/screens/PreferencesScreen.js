import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

const PreferencesScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Your Preferences</Text>
      <View style={styles.preferenceItem}>
        <Text style={styles.label}>Enable Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ false: '#767577', true: '#007BFF' }}
          thumbColor={notifications ? '#FFFFFF' : '#F4F3F4'}
        />
      </View>
      <Button
        title="Next"
        color="#007BFF"
        onPress={() => navigation.navigate('ProfileCreation')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#162D50',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
});

export default PreferencesScreen;