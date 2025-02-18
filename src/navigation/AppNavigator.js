import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ResearchScreen from "../screens/ResearchScreen";
import StudyScreen from "../screens/StudyScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CommunityScreen from "../screens/CommunityScreen";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import globalStyles from "../styles/globalStyles"; // Import global styles

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            ...globalStyles.navbar,
            borderTopWidth: 0, // ✅ Removes the thin white line
            elevation: 0, // ✅ Removes any shadow on Android
            shadowOpacity: 0, // ✅ Removes shadow on iOS
          },
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Research") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Learn") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === "Community") {
              iconName = focused ? "people" : "people-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={24} color={focused ? "#009EFF" : "gray"} />;
          },
          tabBarLabel: ({ focused, children }) => (
            <Text style={focused ? globalStyles.navTextActive : globalStyles.navTextInactive}>
              {children}
            </Text>
          ),
          headerShown: false, // ✅ Hides default screen headers
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Research" component={ResearchScreen} />
        <Tab.Screen name="Learn" component={StudyScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
