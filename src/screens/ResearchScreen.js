import React from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import globalStyles from "../styles/globalStyles";

export default function ResearchScreen() {
  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={globalStyles.researchHeader}>
          <Text style={globalStyles.sectionTitle}>Research Hub</Text>
          <View style={globalStyles.headerIcons}>
            <Icon name="bell" size={24} color="#fff" />
          </View>
        </View>

        {/* Search Bar */}
        <View style={globalStyles.searchBarContainer}>
          <Icon name="search" size={20} color="#A0A0A0" style={globalStyles.searchIcon} />
          <TextInput 
            placeholder="Search research articles..." 
            placeholderTextColor="#A0A0A0"
            style={globalStyles.searchInput} 
          />
        </View>

        {/* Filters */}
        <View style={globalStyles.filterContainer}>
          <TouchableOpacity style={globalStyles.filterButtonActive}>
            <Text style={globalStyles.filterTextActive}>Fitness</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.filterButtonInactive}>
            <Text style={globalStyles.filterTextInactive}>Nutrition</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.filterButtonInactive}>
            <Text style={globalStyles.filterTextInactive}>Health</Text>
          </TouchableOpacity>
        </View>

        {/* Sorting Options */}
        <View style={globalStyles.sortContainer}>
          <TouchableOpacity style={globalStyles.sortButton}>
            <Text style={globalStyles.sortText}>Relevance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.sortButton}>
            <Text style={globalStyles.sortText}>Latest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.sortButton}>
            <Text style={globalStyles.sortText}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.sortButton}>
            <Text style={globalStyles.sortText}>Credibility</Text>
          </TouchableOpacity>
        </View>

        {/* Research Articles */}
        <View style={globalStyles.researchCard}>
          <View style={globalStyles.articleHeader}>
            <View style={globalStyles.tagPlatinum}>
              <Text style={globalStyles.tagText}>Platinum</Text>
              <Icon name="microscope" size={14} color="#fff" />
            </View>
            <View style={globalStyles.articleIcons}>
              <Icon name="bookmark" size={20} color="#fff" style={globalStyles.iconSpacing} />
              <Icon name="share-2" size={20} color="#fff" style={globalStyles.iconSpacing} />
            </View>
          </View>
          <Text style={globalStyles.articleTitle}>Impact of HIIT on Muscle Growth</Text>
          <Text style={globalStyles.articleSubtitle}>Latest systematic review analyzing the effectiveness of HIIT...</Text>
          <TouchableOpacity style={globalStyles.readMoreButton}>
            <Text style={globalStyles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
