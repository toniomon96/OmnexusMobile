import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles, colors, headerStyles } from '../styles/globalStyles';

const communityPosts = [
  { id: '1', user: 'John Doe', content: 'Just finished a HIIT workout, feeling great!' },
  { id: '2', user: 'Jane Smith', content: 'Any tips for improving sleep quality?' },
];

export default function CommunityScreen({ navigation }) {
  return (
    <View style={globalStyles.safeContainer}>
      {/* Header */}
      <View style={[headerStyles.container, { paddingHorizontal: 20 }]}>
        <View style={headerStyles.greetingContainer}>
          <Text style={headerStyles.greeting}>Community</Text>
        </View>
      </View>

      {/* Community Posts */}
      <FlatList
        data={communityPosts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={globalStyles.scrollContainer}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginBottom: 15 }}>
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>{item.user}</Text>
            <Text style={{ color: colors.textWhite, marginTop: 5 }}>{item.content}</Text>
            <TouchableOpacity style={{ marginTop: 10 }}>
              <Text style={{ color: colors.primaryBlue }}>Comment</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}