import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';

const mockMessages = [
  { id: '1', sender: 'Expert', message: 'Hello! How can I help you today?' },
];

export default function ExpertChatScreen({ navigation }) {
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: String(messages.length + 1), sender: 'User', message: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <View style={globalStyles.safeContainer}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20, paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
        </TouchableOpacity>
        <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
          Ask an Expert
        </Text>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: item.sender === 'User' ? colors.primaryBlue : colors.cardDark,
              padding: 10,
              borderRadius: 10,
              marginBottom: 10,
              alignSelf: item.sender === 'User' ? 'flex-end' : 'flex-start',
              maxWidth: '80%',
            }}
          >
            <Text style={{ color: colors.textWhite }}>{item.message}</Text>
          </View>
        )}
      />

      {/* Input Field */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
        <TextInput
          style={{
            flex: 1,
            backgroundColor: colors.cardDark,
            borderRadius: 20,
            padding: 10,
            color: colors.textWhite,
          }}
          placeholder="Type your question..."
          placeholderTextColor="#B0BEC5"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity onPress={sendMessage} style={{ marginLeft: 10 }}>
          <Ionicons name="send" size={24} color={colors.primaryBlue} />
        </TouchableOpacity>
      </View>
    </View>
  );
}