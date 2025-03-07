import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, colors } from '../../styles/globalStyles';

export default function StudyDetailScreen({ route, navigation }) {
  const { study, studyTitle } = route.params || {};

  return (
    <View style={globalStyles.safeContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={colors.textWhite} />
          </TouchableOpacity>
          <Text style={{ color: colors.textWhite, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
            Study Details
          </Text>
        </View>

        {/* Study Content */}
        <View style={{ backgroundColor: colors.cardDark, padding: 15, borderRadius: 10 }}>
          <Text style={{ color: colors.textWhite, fontSize: 18, fontWeight: 'bold' }}>
            {study?.title || studyTitle || 'Study Title'}
          </Text>
          <Text style={{ color: colors.textWhite, marginTop: 10 }}>
            {study?.description || 'Full content of the study goes here. This is a detailed view of the study, including methodology, results, and references.'}
          </Text>
          {study?.published && (
            <Text style={{ color: '#aaa', marginTop: 10 }}>Published: {study.published}</Text>
          )}
          {study?.tier && (
            <TouchableOpacity
              onPress={() => navigation.navigate('StudyCredibility')}
              style={{
                backgroundColor: study.tierColor,
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 5,
                alignSelf: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 13, marginRight: 5 }}>
                {study.tier}
              </Text>
              {study.tier === 'Platinum' ? (
                <Ionicons name="diamond-outline" size={14} color="#000" />
              ) : study.tier === 'Gold' ? (
                <Ionicons name="star" size={14} color="#000" />
              ) : null}
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}