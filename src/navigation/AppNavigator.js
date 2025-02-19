import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ResearchScreen from "../screens/ResearchScreen";
import StudyScreen from "../screens/StudyScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CommunityScreen from "../screens/CommunityScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "#204065",
            height: 60, // ✅ Adjusted height for alignment
            borderTopWidth: 0, 
            paddingBottom: 8, // ✅ Prevents text from cutting off
          },
          tabBarIcon: ({ focused, color, size }) => {
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
            return <Ionicons name={iconName} size={24} color={focused ? "#009EFF" : "#B0BEC5"} />;
          },
          tabBarLabelStyle: {
            fontSize: 12, 
            fontWeight: "600", 
            marginTop: 0, // ✅ Prevents text misalignment
          },
          tabBarActiveTintColor: "#009EFF",
          tabBarInactiveTintColor: "#B0BEC5",
          headerShown: false,
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
