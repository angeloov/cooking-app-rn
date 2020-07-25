import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CookHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>CookApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2980b9',
    padding: 15,
  },
  headerTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
