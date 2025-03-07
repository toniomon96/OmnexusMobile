import React, { useEffect, useState } from 'react'; // Added React
import { View, Text } from 'react-native'; // Added View and Text for the loading state
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import WelcomeScreen from '../components/landing/WelcomePage';
import AccountCreationScreen from '../components/onboarding/AccountCreationForm';
import PreferencesScreen from '../components/onboarding/PreferencesForm';
import ProfileCreationScreen from '../components/onboarding/ProfileCreationForm';
import CompletionScreen from '../components/onboarding/OnboardingCompletion';
import LoginScreen from '../components/auth/Login';
import HomeScreen from '../screens/HomeScreenDraft';
import ResearchScreen from '../screens/ResearchScreen';
import StudyScreen from '../components/study/Study';
import ProfileScreen from '../screens/ProfileScreen';
import CommunityScreen from '../screens/CommunityScreen';
import StudyCredibilityScreen from '../components/study/StudyCredibilityMatrix';
import RatingSystemDetailScreen from '../components/research/RatingSystemDetails';
import StudyDetailScreen from '../components/study/StudyDetails';
import ExpertChatScreen from '../components/learning/ExpertChat';
import StatsScreen from '../components/user/StatsOverview';
import SearchScreen from '../components/research/SearchBar';
import RecommendedListScreen from '../components/research/RecommendedList';
import CourseModuleScreen from '../components/learning/CourseModules';
import CourseDetailScreen from '../components/learning/CourseDetails';
import EditProfileScreen from '../components/profile/EditProfile';
import StatsDetailScreen from '../components/user/StatsDetails';
import ModuleDetailScreen from '../components/learning/ModuleDetails';
import AchievementDetailScreen from '../components/user/AchievementDetails';
import NotificationSettingsScreen from '../components/profile/NotificationSettings';
import ConnectedAppsScreen from '../components/profile/ConnectedApps';
import ActivityHistoryScreen from '../components/user/ActivityHistory';
import TopicListScreen from '../components/research/TopicListsjs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ResearchStack = createStackNavigator();
const LearnStack = createStackNavigator();
const CommunityStack = createStackNavigator();
const ProfileStack = createStackNavigator();

// Home Stack (unchanged)
const HomeStackNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="StudyDetail" component={StudyDetailScreen} />
    <HomeStack.Screen name="ExpertChat" component={ExpertChatScreen} />
    <HomeStack.Screen name="Stats" component={StatsScreen} />
    <HomeStack.Screen name="Search" component={SearchScreen} />
    <HomeStack.Screen name="RecommendedList" component={RecommendedListScreen} />
    <HomeStack.Screen name="StudyCredibility" component={StudyCredibilityScreen} />
    <HomeStack.Screen name="RatingSystemDetail" component={RatingSystemDetailScreen} />
  </HomeStack.Navigator>
);

// Research Stack (unchanged)
const ResearchStackNavigator = () => (
  <ResearchStack.Navigator screenOptions={{ headerShown: false }}>
    <ResearchStack.Screen name="Research" component={ResearchScreen} />
    <ResearchStack.Screen name="StudyDetail" component={StudyDetailScreen} />
    <ResearchStack.Screen name="StudyCredibility" component={StudyCredibilityScreen} />
    <ResearchStack.Screen name="RatingSystemDetail" component={RatingSystemDetailScreen} />
  </ResearchStack.Navigator>
);

// Learn Stack (commented out)
// const LearnStackNavigator = () => (
//   <LearnStack.Navigator screenOptions={{ headerShown: false }}>
//     <LearnStack.Screen name="Study" component={StudyScreen} />
//     <LearnStack.Screen name="CourseModule" component={CourseModuleScreen} />
//     <LearnStack.Screen name="CourseDetail" component={CourseDetailScreen} />
//     <LearnStack.Screen name="Search" component={SearchScreen} />
//     <LearnStack.Screen name="RecommendedList" component={RecommendedListScreen} />
//     <LearnStack.Screen name="StudyCredibility" component={StudyCredibilityScreen} />
//     <LearnStack.Screen name="RatingSystemDetail" component={RatingSystemDetailScreen} />
//   </LearnStack.Navigator>
// );

// Community Stack (commented out)
// const CommunityStackNavigator = () => (
//   <CommunityStack.Navigator screenOptions={{ headerShown: false }}>
//     <CommunityStack.Screen name="Community" component={CommunityScreen} />
//   </CommunityStack.Navigator>
// );

// Profile Stack (unchanged)
const ProfileStackNavigator = () => (
  <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} />
    <ProfileStack.Screen name="StatsDetail" component={StatsDetailScreen} />
    <ProfileStack.Screen name="ModuleDetail" component={ModuleDetailScreen} />
    <ProfileStack.Screen name="AchievementDetail" component={AchievementDetailScreen} />
    <ProfileStack.Screen name="StudyDetail" component={StudyDetailScreen} />
    <ProfileStack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
    <ProfileStack.Screen name="ConnectedApps" component={ConnectedAppsScreen} />
    <ProfileStack.Screen name="ActivityHistory" component={ActivityHistoryScreen} />
    <ProfileStack.Screen name="TopicList" component={TopicListScreen} />
  </ProfileStack.Navigator>
);

// Main App with Bottom Tabs
const MainApp = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarStyle: {
        backgroundColor: '#204065',
        height: 75,
        borderTopWidth: 0,
        paddingBottom: 20,
        paddingTop: 5,
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Research') {
          iconName = focused ? 'search' : 'search-outline';
        } 
        // Commented out Learn and Community icon logic
        // else if (route.name === 'Learn') {
        //   iconName = focused ? 'book' : 'book-outline';
        // } else if (route.name === 'Community') {
        //   iconName = focused ? 'people' : 'people-outline';
        // }
        else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }
        return (
          <Ionicons
            name={iconName}
            size={24}
            color={focused ? '#009EFF' : '#B0BEC5'}
            style={{ marginBottom: 2 }}
          />
        );
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 25,
      },
      tabBarActiveTintColor: '#009EFF',
      tabBarInactiveTintColor: '#B0BEC5',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeStackNavigator} />
    <Tab.Screen name="Research" component={ResearchStackNavigator} />
    {/* Commented out Learn and Community tabs */}
    {/* <Tab.Screen name="Learn" component={LearnStackNavigator} /> */}
    {/* <Tab.Screen name="Community" component={CommunityStackNavigator} /> */}
    <Tab.Screen name="Profile" component={ProfileStackNavigator} />
  </Tab.Navigator>
);

// Main Navigator with Authentication Check
export default function AppNavigator() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#162D50' }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="MainApp" component={MainApp} />
        ) : (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="AccountCreation" component={AccountCreationScreen} />
            <Stack.Screen name="Preferences" component={PreferencesScreen} />
            <Stack.Screen name="ProfileCreation" component={ProfileCreationScreen} />
            <Stack.Screen name="Completion" component={CompletionScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}