import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function DetailsScreen({navigation}) {
  return (
    <View style={styles.detailsView}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri:
              'https://www.giallozafferano.it/images/ricette/219/21928/foto_hd/hd360x300.jpg',
          }} style={{ width: 100, height: 100}}
        />
        <Text>Ciaociao</Text>
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
