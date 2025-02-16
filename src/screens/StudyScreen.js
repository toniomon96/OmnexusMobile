import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function StudyScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Learning Progress</Text>
      <FlatList
        data={[{ title: "Intermittent Fasting Science", progress: "75%" }, { title: "Strength Training Protocols", progress: "40%" }]}
        renderItem={({ item }) => (
          <View style={globalStyles.studyItem}>
            <Text style={globalStyles.studyTitle}>{item.title}</Text>
            <Text style={globalStyles.studyProgress}>{item.progress}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}