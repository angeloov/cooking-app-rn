import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CookHeader from './components/CookHeader';
import Recipe from './components/Recipe';

const App = () => {
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;
  return (
    <SafeAreaView style={{marginTop: STATUSBAR_HEIGHT}}>
      <CookHeader />
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  recipesContainer: {
    height: '85%',
    marginTop: 15,
  },
});

export default App;
