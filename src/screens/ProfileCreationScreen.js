import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProfileCreationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Build Your Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Bio"
        placeholderTextColor="#888"
        multiline
        value={bio}
        onChangeText={setBio}
      />
      <Button
        title="Save Profile"
        color="#007BFF"
        onPress={() => navigation.navigate('Completion')}
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
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
});

export default ProfileCreationScreen;