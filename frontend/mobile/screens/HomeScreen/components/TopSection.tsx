import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { docDetailsStore } from '@emedico/shared';

const styles = StyleSheet.create({
  root: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
});

interface TopSectionProps {}

const TopSection: React.FC<TopSectionProps> = () => {
  const { name } = docDetailsStore((state) => state);

  return (
    <View style={styles.root}>
      <Text style={styles.subTitle}>Home</Text>
      <Text style={styles.title}>Hello, {name}</Text>
      <Text style={styles.subTitle}>Here's some quick information</Text>
    </View>
  );
};
export default TopSection;
