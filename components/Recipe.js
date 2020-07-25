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
          <View style={{flex: 1, flexDirection: 'row'}}>
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
    flex: 0.3,
    flexDirection: 'column',
    alignItems: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
  recipeContainer: {
    paddingTop: 10,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    justifyContent: 'center',
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
    marginBottom: 10,
  },
  recipeDescription: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  recipeDescriptionView: {
    marginLeft: 10,
    width: '70%',
  },
});

export default Recipe;
