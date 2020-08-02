import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function RecipeScreen({route, navigation}) {
  const {plateName} = route.params;
  return (
    <View>
      <Text style={styles.recipeTitle}>{plateName}</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  recipeTitle: {
    marginTop: 10,
    color: 'black',
    fontSize: 24,
    // fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});
