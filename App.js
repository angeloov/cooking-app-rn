import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {SafeAreaView, View, Text, Image, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './components/screens/HomeScreen';
import DetailsScreen from './components/screens/DetailsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitleAlign: 'left',
            }}
          />
          <Tab.Screen name="Details" component={DetailsScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
/*
<Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {backgroundColor: '#2980b9'},
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Poppins-Regular',
            },
          }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitleAlign: 'left',
              headerRight: () => (
                <Button
                  onPress={() => alert('Bottone cliccato')}
                  title="btn"
                  color="#fff"
                />
              ),
            }}
          />*/