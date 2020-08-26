import React from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';

export default function VideoScreen() {
  return (
    <View>
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        shouldPlay
        useNativeControls
        style={{
           width: "500%", height: "50%"
        }}
      />
    </View>
  );
}
