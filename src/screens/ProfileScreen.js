import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* User Info */}
        <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10 }}>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>Sarah Mitchell</Text>
          <Text style={{ color: '#aaa', marginTop: 5 }}>sarah.mitchell@email.com</Text>
          <Text style={{ color: '#aaa', marginTop: 5 }}>Member since Jan 2025</Text>
          <TouchableOpacity
            style={{ backgroundColor: colors.primaryBlue, padding: 10, borderRadius: 5, marginTop: 10, alignItems: 'center' }}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Text style={{ color: colors.textWhite, fontWeight: 'bold' }}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginTop: 20 }}>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>Stats</Text>
          <TouchableOpacity onPress={() => navigation.navigate('StatsDetail')}>
            <Text style={{ color: colors.textWhite, marginTop: 10 }}>Goals Met: 85%</Text>
            <Text style={{ color: colors.textWhite, marginTop: 5 }}>Day Streak: 12 Days</Text>
            <Text style={{ color: colors.textWhite, marginTop: 5 }}>Health Score: 4.8</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>Recent Activity</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ActivityHistory')}>
              <Text style={{ color: colors.primaryBlue, fontSize: 14 }}>See All</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginTop: 10 }}
            onPress={() => navigation.navigate('ModuleDetail')}
          >
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>
              Completed Research Module
            </Text>
            <Text style={{ color: '#aaa', marginTop: 5 }}>2 hours ago</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginTop: 10 }}
            onPress={() => navigation.navigate('AchievementDetail')}
          >
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>
              Earned Achievement: Fitness Master
            </Text>
            <Text style={{ color: '#aaa', marginTop: 5 }}>Yesterday</Text>
          </TouchableOpacity>
        </View>

        {/* AI Recommendations */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>AI Recommendations</Text>
          <TouchableOpacity
            style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginTop: 10 }}
            onPress={() => navigation.navigate('StudyDetail', { studyTitle: 'Cardiovascular Health' })}
          >
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>
              Cardiovascular Health
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginTop: 10 }}
            onPress={() => navigation.navigate('TopicList')}
          >
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>Sleep Patterns</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Settings */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>Quick Settings</Text>
          <TouchableOpacity
            style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginTop: 10 }}
            onPress={() => navigation.navigate('NotificationSettings')}
          >
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginTop: 10 }}
            onPress={() => navigation.navigate('ConnectedApps')}
          >
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>Connected Apps</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}