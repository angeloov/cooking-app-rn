import React from 'react';
import { View, Image } from 'react-native';

export default function RecipeCard({ src }) {
  return (
    <View>
      <Image
        source={{ uri: src }}
        style={{
          marginTop: 16,
          width: '80%',
          height: 200,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
