import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function RecipeScreen({route, navigation}) {
  const {plateName} = route.params;
  return (
    <>
      <View style={{alignItems: 'center'}}>
        <View>
          <Text style={styles.recipeTitle}>{plateName}</Text>
          <View>
            <View style={styles.videoView}></View>
          </View>
        </View>
      </View>
      <View style={styles.finishedPlateView}>
        <Text style={styles.finishedPlateTitle}>Piatto finito:</Text>
      </View>
    </>
  );
}

let styles = StyleSheet.create({
  recipeTitle: {
    marginTop: 25,
    marginBottom: 25,
    color: 'black',
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 24,
    textAlign: 'center',
  },
  videoView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 370,
    height: 200,
    borderRadius: 15,
    backgroundColor: 'gray',
  },
  finishedPlateView: {
    marginTop: 35,
    marginLeft: 25,
  },
  finishedPlateTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
  },
});
