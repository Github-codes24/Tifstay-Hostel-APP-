import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

const reviews = [
  {
    id: '1',
    name: 'Autumn Phillips',
    date: 'Monday, June 16, 2025',
    rating: 5,
    text: 'Stayed for 3 weeks—rooms were spotless, staff was responsive, and Wi-Fi was fast. Highly recommend for students!',
  },
  {
    id: '2',
    name: 'Rhonda Rhodes',
    date: 'Tuesday, March 12, 2025',
    rating: 4,
    text: 'Budget-friendly with 24/7 security. Shared kitchen was a plus. Minor plumbing issue, but it was fixed quickly.',
  },
  {
    id: '3',
    name: 'Patricia Sanders',
    date: 'Friday, April 11, 2025',
    rating: 4,
    text: 'Only 5 mins from my institute. Lots of food options nearby and peaceful environment for studying.',
  },
  {
    id: '4',
    name: 'Wade Warren',
    date: 'Friday, April 11, 2025',
    rating: 5,
    text: 'Staff treated me like family. Home-cooked meals were amazing, rooms were cozy and well-lit.',
  },
];

const breakdown = [
  { stars: 5, count: 80 },
  { stars: 4, count: 15 },
  { stars: 3, count: 5 },
  { stars: 2, count: 3 },
  { stars: 1, count: 2 },
];

const ReviewScreen = () => {
  const [filter, setFilter] = useState('All');

  const filteredReviews = reviews.filter((r) => {
    if (filter === 'Positive') return r.rating >= 4;
    if (filter === 'Negative') return r.rating <= 2;
    if (filter === '5★') return r.rating === 5;
    if (filter === '4★') return r.rating === 4;
    return true;
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Image
            source={require('../screens/Assets/Images/Backarrow.png')}
            style={styles.backArrow}
          />
          <Text style={styles.headerTitle}>Reviews</Text>
        </View>

        {/* Rating Summary */}
        <View style={styles.ratingRow}>
          <View style={styles.ratingLeft}>
            <Text style={styles.ratingScore}>4.9</Text>
            <Text style={styles.ratingStars}>★★★★★</Text>
            <Text style={styles.ratingSubtitle}>(105)</Text>
          </View>
          <View style={styles.ratingRight}>
            {breakdown.map(({ stars, count }) => (
              <View key={stars} style={styles.breakdownRow}>
                <Text style={styles.starLabel}>{stars}★</Text>
                <View style={styles.bar}>
                  <View style={[styles.fillBar, { width: `${count}%` }]} />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Filter Tabs */}
        <View style={styles.filterContainer}>
          {['All', 'Positive', 'Negative', '5★', '4★'].map((label) => (
            <TouchableOpacity
              key={label}
              style={[
                styles.filterButton,
                filter === label && styles.activeFilter,
              ]}
              onPress={() => setFilter(label)}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === label && styles.activeFilterText,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Review Cards */}
        <FlatList
          data={filteredReviews}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardDate}>{item.date}</Text>
              </View>
              <Text style={styles.cardStars}>{'★'.repeat(item.rating)}</Text>
              <Text style={styles.cardText}>{item.text}</Text>
            </View>
          )}
          scrollEnabled={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    paddingTop: 34,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
  },
  backArrow: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  ratingLeft: {
    flex: 1,
    paddingLeft: 10,
  },
  ratingScore: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginLeft:30
  },
  ratingStars: {
    fontSize: 18,
    color: '#f5a623',
    marginTop: 4,
    marginLeft:20
  },
  ratingSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    marginLeft:40
  },
  ratingRight: {
    flex: 1,
    justifyContent: 'center',
  },
  breakdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    justifyContent: 'flex-start',
  },
  starLabel: {
    width: 40,
    fontSize: 14,
    color: '#333',
  },
  bar: {
    flex: 1,
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    marginRight: 8,
  },
  fillBar: {
    height: 8,
    backgroundColor: '#f5a623',
    borderRadius: 4,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  activeFilter: {
    backgroundColor: '#f5a623',
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
  activeFilterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fafafa',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  cardName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
  },
  cardDate: {
    fontSize: 12,
    color: '#888',
  },
  cardStars: {
    fontSize: 14,
    color: '#f5a623',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});

export default ReviewScreen;