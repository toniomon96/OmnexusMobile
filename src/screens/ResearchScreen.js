import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Share,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors, headerStyles } from '../styles/globalStyles';

const researchArticles = [
  {
    id: '1',
    title: 'Impact of High-Intensity Interval Training on Muscle Growth',
    description:
      'Latest systematic review analyzing the effectiveness of HIIT on muscle hypertrophy compared to traditional training methods.',
    published: 'Mar 15, 2025',
    tier: 'Platinum',
    tierColor: colors.primaryGreen,
  },
  {
    id: '2',
    title: 'Protein Timing and Muscle Recovery',
    description:
      'Double-blind RCT examining optimal protein intake windows for maximizing post-workout muscle protein synthesis.',
    published: 'Mar 10, 2025',
    tier: 'Gold',
    tierColor: '#FFD700',
  },
];

const categories = ['Fitness', 'Nutrition', 'Health'];
const sortOptions = ['Relevance', 'Latest', 'Popular', 'Credibility'];

const ResearchScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Fitness');
  const [selectedSort, setSelectedSort] = useState('Relevance');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedArticles, setSavedArticles] = useState({});

  const toggleSave = (id) => {
    setSavedArticles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const onShare = async (item) => {
    try {
      await Share.share({
        message: `Check out this study: ${item.title}\n\n${item.description}\n\nPublished: ${item.published}`,
      });
    } catch (error) {
      console.error('Error sharing study:', error);
    }
  };

  return (
    <View style={globalStyles.safeContainer}>
      {/* Header */}
      <View style={[headerStyles.container, { paddingHorizontal: 20 }]}>
        <View style={headerStyles.greetingContainer}>
          <Text style={headerStyles.greeting}>Research Hub</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color={colors.textWhite} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.cardDark,
          borderRadius: 8,
          paddingHorizontal: 15,
          alignItems: 'center',
          marginHorizontal: 20,
          marginBottom: 10,
          height: 45,
        }}
      >
        <Ionicons name="search" size={20} color={colors.textWhite} />
        <TextInput
          style={{
            flex: 1,
            paddingLeft: 10,
            color: colors.textWhite,
          }}
          placeholder="Search research articles..."
          placeholderTextColor="#B0BEC5"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Category Filters */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={{
              backgroundColor: selectedCategory === category ? colors.primaryBlue : colors.cardDark,
              paddingVertical: 10,
              paddingHorizontal: 8,
              borderRadius: 10,
              flex: 1,
              marginHorizontal: 4,
              alignItems: 'center',
            }}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={{ color: colors.textWhite, fontSize: 14 }}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Sorting Options */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20, marginBottom: 10 }}>
        {sortOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={{
              backgroundColor: selectedSort === option ? colors.primaryDarkBlue : colors.cardDark,
              paddingVertical: 6,
              paddingHorizontal: 10,
              borderRadius: 8,
              flex: 1,
              maxWidth: 100,
              alignItems: 'center',
              marginHorizontal: 3,
            }}
            onPress={() => setSelectedSort(option)}
          >
            <Text style={{ color: colors.textWhite, fontSize: 13 }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Research Articles List */}
      <FlatList
        data={researchArticles}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 20, marginTop: 10 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: colors.cardDark,
              padding: 15,
              borderRadius: 10,
              marginBottom: 15,
              position: 'relative',
            }}
          >
            {/* Share & Save Icons */}
            <View
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                flexDirection: 'row',
                gap: 10,
              }}
            >
              <TouchableOpacity onPress={() => toggleSave(item.id)}>
                <Ionicons
                  name={savedArticles[item.id] ? 'bookmark' : 'bookmark-outline'}
                  size={20}
                  color={savedArticles[item.id] ? '#FFD700' : '#B0BEC5'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onShare(item)}>
                <Ionicons name="share-outline" size={20} color="#B0BEC5" />
              </TouchableOpacity>
            </View>

            {/* Credibility Tier */}
            <TouchableOpacity
              onPress={() => navigation.navigate('StudyCredibility')}
              style={{
                backgroundColor: item.tierColor,
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 5,
                alignSelf: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
              }}
            >
              <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 13, marginRight: 5 }}>
                {item.tier}
              </Text>
              {item.tier === 'Platinum' ? (
                <Ionicons name="diamond-outline" size={14} color="#000" />
              ) : item.tier === 'Gold' ? (
                <Ionicons name="star" size={14} color="#000" />
              ) : null}
            </TouchableOpacity>

            {/* Study Title & Description */}
            <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>
              {item.title}
            </Text>
            <Text style={{ color: colors.textWhite, marginTop: 5, fontSize: 14 }}>{item.description}</Text>

            {/* Published Date & Read More */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ color: '#aaa', fontSize: 13 }}>Published: {item.published}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('StudyDetail', { study: item })}>
                <Text style={{ color: colors.primaryBlue, fontWeight: 'bold', fontSize: 14 }}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ResearchScreen;