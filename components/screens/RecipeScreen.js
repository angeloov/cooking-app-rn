import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import VideoComponent from '../VideoComponent';
import RecipeCard from '../RecipeCard';

export default function RecipeScreen({ route, navigation }) {
  const { plateName } = route.params;
  const { images } = route.params;
  const { videoUrl } = route.params;

  const renderItem = ({ item }) => <RecipeCard src={item.img} />;
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={{ alignItems: 'center' }}>
              <View>
                <Text style={styles.recipeTitle}>{plateName}</Text>
                <VideoComponent src={videoUrl} />
              </View>
            </View>
            <View style={styles.bottomPart}>
              <Text style={styles.finishedPlateTitle}>Piatto finito:</Text>
              <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                style={{ marginBottom: 25 }}
              />
            </View>
          </>
        }
      />
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
  bottomPart: {
    marginTop: 35,
    marginLeft: 16,
  },
  finishedPlateTitle: {
    fontFamily: 'Poppins-Bold',
    textDecorationLine: 'underline',
    fontSize: 17,
  },
});
