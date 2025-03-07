import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CompletionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You're All Set!</Text>
      <Text style={styles.description}>
        Your account is ready. Start exploring Omnexus now.
      </Text>
      <Button
        title="Start Exploring"
        color="#007BFF"
        onPress={() => navigation.navigate('MainApp')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#162D50',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default CompletionScreen;