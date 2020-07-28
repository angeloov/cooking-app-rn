import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';

export default function Recipe(props, {navigation}) {
  return (
    <View style={styles.containter}>
      <TouchableHighlight
        onPress={() => {
          alert('Ciao');
        }}
        underlayColor="gray">
        <View style={styles.recipeContainer}>
          <Text style={styles.recipeTitle}>{props.plateName}</Text>
          <View style={styles.innerContainer}>
            <Image source={{uri: props.image}} style={styles.plateImage} />
            <View style={styles.recipeDescriptionView}>
              <Text style={styles.recipeDescription}>{props.description}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  containter: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 10,
    borderRadius: 15,
    borderColor: 'black',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  recipeContainer: {
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  plateImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  recipeTitle: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  recipeDescription: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  recipeDescriptionView: {
    marginLeft: 10,
    marginRight: 5,
    width: '70%',
  },
});
