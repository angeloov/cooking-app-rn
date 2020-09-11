import React, {Component} from 'react';
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
        headerTitleAlign: 'left'
      }}>
      <Stack.Screen name="Settings" component={SettingsComponent} />
    </Stack.Navigator>
  );
}

class SettingsComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.settingsView}>
        <View>
          <Text>Settings Page</Text>
        </View>
        <View>
          <Text>Developed by Angelo Voicu</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingsView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
