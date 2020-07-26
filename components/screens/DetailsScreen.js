import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.detailsView}>
      <Text>Details Page</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
