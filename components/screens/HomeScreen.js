import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Appearance,
  Button,
  TouchableHighlight,
} from 'react-native';

import Recipe from '../Recipe';
import RecipeScreen from './RecipeScreen';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#2980b9'},
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeComponent}
        options={{headerTitleAlign: 'left'}}
      />
      <Stack.Screen
        name="RecipeScreen"
        component={RecipeScreen}
        options={{title: "Recipe"}}
      />
    </Stack.Navigator>
  );
}

function HomeComponent({navigation}) {
  return (
    <View>
      <StatusBar backgroundColor="#2980b9" barStyle="light-content" />
      <SafeAreaView style={styles.recipesContainer}>
        <Recipe
          plateName="Spaghetti cacio e pepe"
          image="https://www.giallozafferano.it/images/ricette/219/21989/foto_hd/hd360x300.jpg"
          description="Il Cacio e pepe è un piatto caratteristico del Lazio. Gli ingredienti sono molto semplici."
          navigation={navigation}
        />

        <Recipe
          plateName="Spaghetti alla carbonara"
          image="https://www.giallozafferano.it/images/ricette/219/21928/foto_hd/hd360x300.jpg"
          description="La ricetta degli spaghetti alla carbonara è tipica del Lazio ed è apprezzata in tutto il mondo."
          navigation={navigation}
        />
        <Recipe
          plateName="Riso alla cantonese"
          image="https://www.giallozafferano.it/images/ricette/179/17990/foto_hd/hd360x300.jpg"
          description="È il più popolare tra i risi fritti cinesi e il piatto più conosciuto della cucina huaiyang in Occidente."
          navigation={navigation}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  recipesContainer: {
    height: '85%',
    marginTop: 15,
  },
});
