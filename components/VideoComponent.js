import React from 'react';
import Video from 'react-native-video';
import { Dimensions } from 'react-native';

export default function VideoComponent({src}) {
  return (
    <Video
      source={{
        uri: src
      }}
      ignoreSilentSwitch="ignore"
      controls={true}
      style={{
        width: Dimensions.get("window").width,
        height: (Dimensions.get('window').width / 16) * 9,
      }}
      volume={1.0}
    />
  );
}
