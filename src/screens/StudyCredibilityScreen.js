import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../styles/globalStyles';

export default function StudyCredibilityScreen({ navigation }) {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (rating) => {
    setExpanded(expanded === rating ? null : rating);
  };

  const chartData = {
    labels: ['Platinum', 'Gold', 'Silver', 'Bronze'],
    datasets: [{ data: [10, 30, 40, 20] }],
  };

  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
          </TouchableOpacity>
          <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold' }}>Study Credibility</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Ionicons name="search" size={24} color={colors.textWhite} />
          </TouchableOpacity>
        </View>

        {/* Introduction */}
        <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10 }}>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>
            Understanding Study Credibility
          </Text>
          <Text style={{ color: colors.textWhite, marginTop: 10 }}>
            Scientific research varies in quality. We categorize studies into credibility tiers based on their methodology, bias control, and evidence strength.
          </Text>
        </View>

        {/* Platinum Rating */}
        <TouchableOpacity
          style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginTop: 15 }}
          onPress={() => toggleExpand('Platinum')}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="diamond-outline" size={20} color={colors.primaryGreen} style={{ marginRight: 10 }} />
              <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>Platinum Rating</Text>
            </View>
            <Ionicons name={expanded === 'Platinum' ? 'chevron-down' : 'chevron-forward'} size={20} color={colors.textWhite} />
          </View>
          {expanded === 'Platinum' && (
            <>
              <Text style={{ color: colors.textWhite, marginTop: 10 }}>
                - Large-scale randomized controlled trials{'\n'}
                - Multiple independent validations{'\n'}
                - Rigorous methodology{'\n'}
                - Minimal bias risk
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('StudyDetail', { studyTitle: 'Example Platinum Study' })}>
                <Text style={{ color: colors.primaryBlue, marginTop: 10 }}>View Example Study</Text>
              </TouchableOpacity>
            </>
          )}
        </TouchableOpacity>

        {/* Gold Rating */}
        <TouchableOpacity
          style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginTop: 15 }}
          onPress={() => toggleExpand('Gold')}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="star" size={20} color="#FFD700" style={{ marginRight: 10 }} />
              <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>Gold Rating</Text>
            </View>
            <Ionicons name={expanded === 'Gold' ? 'chevron-down' : 'chevron-forward'} size={20} color={colors.textWhite} />
          </View>
          {expanded === 'Gold' && (
            <Text style={{ color: colors.textWhite, marginTop: 10 }}>
              - Well-designed studies with strong evidence{'\n'}
              - Moderate bias control{'\n'}
              - Independent validation
            </Text>
          )}
        </TouchableOpacity>

        {/* Silver and Bronze Ratings (similar structure) */}
        {/* ... Add similar sections for Silver and Bronze ... */}

        {/* Rating Distribution */}
        <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10, marginTop: 15 }}>
          <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>Rating Distribution</Text>
          <BarChart
            data={chartData}
            width={300}
            height={220}
            chartConfig={{
              backgroundColor: colors.cardDark,
              backgroundGradientFrom: colors.cardDark,
              backgroundGradientTo: colors.cardDark,
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={{ marginVertical: 8, borderRadius: 16 }}
          />
        </View>

        {/* Learn More Button */}
        <TouchableOpacity
          style={{ backgroundColor: colors.primaryBlue, padding: 15, borderRadius: 10, marginTop: 15, alignItems: 'center' }}
          onPress={() => navigation.navigate('RatingSystemDetail')}
        >
          <Text style={{ color: colors.textWhite, fontSize: 16, fontWeight: 'bold' }}>
            Learn More About Our Rating System
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}