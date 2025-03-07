import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../../styles/globalStyles';

export default function EditProfileScreen({ navigation }) {
  const [name, setName] = useState('Sarah Mitchell');
  const [email, setEmail] = useState('sarah.mitchell@email.com');

  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
          </TouchableOpacity>
          <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
            Edit Profile
          </Text>
        </View>

        {/* Edit Form */}
        <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10 }}>
          <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>Name</Text>
          <TextInput
            style={{
              backgroundColor: colors.backgroundDark,
              borderRadius: 5,
              padding: 10,
              color: colors.textWhite,
              marginTop: 5,
            }}
            value={name}
            onChangeText={setName}
          />
          <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Email</Text>
          <TextInput
            style={{
              backgroundColor: colors.backgroundDark,
              borderRadius: 5,
              padding: 10,
              color: colors.textWhite,
              marginTop: 5,
            }}
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity
            style={{ backgroundColor: colors.primaryBlue, padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center' }}
          >
            <Text style={{ color: colors.textWhite, fontWeight: 'bold' }}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}