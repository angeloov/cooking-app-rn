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
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {getStatusBarHeight} from 'react-native-status-bar-height';
import Recipe from '../Recipe';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <SafeAreaView>
        <StatusBar backgroundColor="#2980b9" barStyle="light-content" />
        <View style={styles.recipesContainer}>
          <Recipe
            plateName="Spaghetti cacio e pepe"
            image="https://www.giallozafferano.it/images/ricette/219/21989/foto_hd/hd360x300.jpg"
            description="Il Cacio e pepe è un piatto caratteristico del Lazio. Gli ingredienti sono molto semplici."
          />
          <Recipe
            plateName="Spaghetti alla carbonara"
            image="https://www.giallozafferano.it/images/ricette/219/21928/foto_hd/hd360x300.jpg"
            description="La ricetta degli spaghetti alla carbonara è tipica del Lazio ed è apprezzata in tutto il mondo."
          />
          <Recipe
            plateName="Riso alla cantonese"
            image="https://www.giallozafferano.it/images/ricette/179/17990/foto_hd/hd360x300.jpg"
            description="È il più popolare tra i risi fritti cinesi e il piatto più conosciuto della cucina huaiyang in Occidente."
          />
        </View>
        <Button
          title="Vai a Details"
          onPress={() => navigation.navigate('Details')}
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
