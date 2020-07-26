import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Recipe extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.containter}>
        <View style={styles.recipeContainer}>
          <Text style={styles.recipeTitle}>{this.props.plateName}</Text>
          <View style={styles.innerContainer}>
            <Image source={{uri: this.props.image}} style={styles.plateImage} />
            <View style={styles.recipeDescriptionView}>
              <Text style={styles.recipeDescription}>
                {this.props.description}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
  recipeContainer: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  plateImage: {
    height: 100,
    width: 100,
    marginLeft: 10,
  },
  recipeTitle: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  recipeDescription: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'Poppins-Medium',
  },
  recipeDescriptionView: {
    marginLeft: 10,
    marginRight: 10,
    width: '70%',
  },
});

export default Recipe;
