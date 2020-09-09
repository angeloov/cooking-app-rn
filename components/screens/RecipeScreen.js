import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import VideoComponent from '../VideoComponent';
import RecipeCard from '../RecipeCard';

const DATA = [
  {
    img: 'https://cdn.cook.stbm.it/thumbnails/ricette/1/1259/hd750x421.jpg',
    id: 1,
  },
  {
    img: 'https://cdn.cook.stbm.it/thumbnails/ricette/1/1259/hd750x421.jpg',
    id: 2,
  },
  {
    img: 'https://cdn.cook.stbm.it/thumbnails/ricette/1/1259/hd750x421.jpg',
    id: 3,
  },
];

export default function RecipeScreen({ route, navigation }) {
  const { plateName } = route.params;
  const renderItem = ({ item }) => <RecipeCard src={item.img} />;
  return (
    <>
      <View style={{ alignItems: 'center' }}>
        <View>
          <Text style={styles.recipeTitle}>{plateName}</Text>
          <VideoComponent src="https://banzai-pmd-meride-tv.akamaized.net/amets/giallozafferano/2019/12/oosyer/HD/1200_oosyer.m3u8" />
        </View>
      </View>
      <View style={styles.finishedPlateView}>
        <Text style={styles.finishedPlateTitle}>Piatto finito:</Text>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
    position: 'relative',
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
