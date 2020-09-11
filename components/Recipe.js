import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';

export default class Recipe extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.containter}>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate('RecipeScreen', {
              plateName: this.props.plateName,
              images: this.props.images,
              videoUrl: this.props.videoUrl
            });
          }}
          underlayColor="#bdc3c7">
          <View style={styles.recipeContainer}>
            <Text style={styles.recipeTitle}>{this.props.plateName}</Text>
            <View style={styles.innerContainer}>
              <Image
                source={{uri: this.props.image}}
                style={styles.plateImage}
              />
              <View style={styles.recipeDescriptionView}>
                <Text style={styles.recipeDescription}>
                  {this.props.description}
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
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
    backgroundColor: '#fff',
    shadowColor: '#3754AA',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

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
