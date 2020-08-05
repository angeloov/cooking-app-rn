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
  FlatList,
} from 'react-native';

import Recipe from '../Recipe';
import RecipeScreen from './RecipeScreen';
import * as recipes from '../../recipes/recipes.json';

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
        options={{title: 'Recipe'}}
      />
    </Stack.Navigator>
  );
}

function HomeComponent({navigation}) {
  let recipesList = [];
  let objLen = Object.keys(recipes).length - 1;

  for (let i = 0; i < objLen; i++) {
    recipesList.push({
      id: i,
      name: recipes[i].name,
      img_uri: recipes[i].img_uri,
      short_desc: recipes[i].short_desc,
    });
  }

  const renderItem = ({item}) => (
    <Recipe
      plateName={item.name}
      image={item.img_uri}
      description={item.short_desc}
      navigation={navigation}
    />
  );

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#2980b9" barStyle="light-content" />
      <SafeAreaView style={styles.recipesContainer}>
        <FlatList
           contentContainerStyle={{ paddingBottom: 20}}
          data={recipesList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  recipesContainer: {
    flex: 1,
    height: '85%',
    marginTop: 15,
  },
});

/*
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

*/
