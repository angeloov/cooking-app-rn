import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function SettingsScreen() {
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
      <Stack.Screen name="Settings" component={SettingsComponent} />
    </Stack.Navigator>
  );
}

function SettingsComponent() {
  return (
    <View style={styles.settingsView}>
      <View style={{flexDirection: 'row'}}>
        <Text>Settings Page</Text>
        <Text>Created by Angelo Voicu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
