import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ResearchScreen from "../screens/ResearchScreen";
import GoalsScreen from "../screens/GoalsScreen";
import StudyScreen from "../screens/StudyScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
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
            return <Ionicons name={iconName} size={24} color={focused ? "#007BFF" : "gray"} />;
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Research" component={ResearchScreen} />
        <Tab.Screen name="Learn" component={StudyScreen} />
        <Tab.Screen name="Community" component={GoalsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
