import { React, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import ProgressBar from '../styles/progressBarStyles';
import {
  globalStyles,
  headerStyles,
  insightStyles,
  progressStyles,
  recommendedStyles,
  pointsStyles,
  quickActionStyles,
} from '../styles/globalStyles';

export default function HomeScreen() {
  const navigation = useNavigation();
  const userName = 'Toni';
  const energyCount = 12;
  const [saved, setSaved] = useState(false);

  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={headerStyles.container}>
          <View style={headerStyles.greetingContainer}>
            <Text style={headerStyles.greeting}>Hi, {userName}</Text>
          </View>
          <View style={headerStyles.headerIcons}>
            <View style={headerStyles.energyContainer}>
              <FontAwesome5 name="bolt" size={24} solid color="#32FF00" />
              <Text style={headerStyles.energyCount}>{energyCount}</Text>
            </View>
            <TouchableOpacity>
              <Icon name="bell" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={require('../assets/profile-pic.jpg')} style={headerStyles.profileImage} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Points Container */}
        <View style={pointsStyles.container}>
          <View style={pointsStyles.row}>
            <Text style={pointsStyles.text}>Total Points</Text>
            <View style={pointsStyles.levelBadge}>
              <Text style={pointsStyles.levelText}>Level 8</Text>
            </View>
          </View>
          <Text style={pointsStyles.value}>2,450</Text>
        </View>

        {/* Daily Insight Card */}
        <View style={insightStyles.container}>
          <View style={insightStyles.header}>
            <Text style={insightStyles.title}>Daily Insight</Text>
            <Text style={insightStyles.newText}>New</Text>
          </View>
          <Text style={insightStyles.text}>
            Recent study shows high-intensity interval training (HIIT) improves cognitive function in adults aged 30-45.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('StudyDetail', { studyTitle: 'HIIT and Cognitive Function' })}>
            <Text style={insightStyles.readMore}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSaved(!saved)}
            style={{ position: 'absolute', bottom: 10, right: 10 }}
          >
            <Ionicons
              name={saved ? 'bookmark' : 'bookmark-outline'}
              size={22}
              color={saved ? '#FFD700' : '#B0BEC5'}
            />
          </TouchableOpacity>
        </View>

        {/* Learning Progress */}
        <View style={progressStyles.card}>
          <View style={progressStyles.section}>
            <Text style={progressStyles.heading}>Learning Progress</Text>
            <ProgressBar label="Fitness" percentage={65} color="#1E90FF" />
            <ProgressBar label="Health" percentage={45} color="#32CD32" />
            <ProgressBar label="Nutrition" percentage={80} color="#FFA500" />
          </View>
        </View>

        {/* Recommended Studies */}
        <View style={recommendedStyles.card}>
          <Text style={recommendedStyles.heading}>Recommended Studies</Text>
          <TouchableOpacity
            style={recommendedStyles.studyCard}
            onPress={() =>
              navigation.navigate('StudyDetail', { studyTitle: 'Protein Timing Impact on Muscle Growth' })
            }
          >
            <Text style={recommendedStyles.studyTitle}>Protein Timing Impact on Muscle Growth</Text>
            <Text style={recommendedStyles.studyTime}>15 min read →</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={recommendedStyles.studyCard}
            onPress={() => navigation.navigate('StudyDetail', { studyTitle: 'Sleep Quality and Recovery' })}
          >
            <Text style={recommendedStyles.studyTitle}>Sleep Quality and Recovery</Text>
            <Text style={recommendedStyles.studyTime}>12 min read →</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={quickActionStyles.container}>
          <TouchableOpacity
            style={quickActionStyles.button}
            onPress={() => navigation.navigate('ExpertChat')}
          >
            <Icon name="message-circle" size={24} color="#3AA8F7" />
            <Text style={quickActionStyles.text}>Ask an Expert</Text>
            <Text style={quickActionStyles.subtext}>Get answers from professionals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={quickActionStyles.button} onPress={() => navigation.navigate('Stats')}>
            <Icon name="bar-chart-2" size={24} color="limegreen" />
            <Text style={quickActionStyles.text}>Your Stats</Text>
            <Text style={quickActionStyles.subtext}>Track your progress</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}