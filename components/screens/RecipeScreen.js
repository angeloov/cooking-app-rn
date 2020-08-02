import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function RecipeScreen() {
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
      <Stack.Screen
        name="RecipeScreen"
        component={RecipeComponent}
        options={{headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
}

function RecipeComponent() {
  return (
    <View>
      <Text>Recipe Screen</Text>
    </View>
  );
}
