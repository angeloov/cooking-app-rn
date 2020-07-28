import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();


export default function DetailsScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#2980b9'},
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <Stack.Screen name="Details" component={DetailsComponent} />
    </Stack.Navigator>
  );
}

function DetailsComponent() {
  return (
    <View style={styles.detailsView}>
      <View style={{flexDirection: 'row'}}>
        <Text>Created by Angelo Voicu</Text>
      </View>
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
