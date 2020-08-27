import React from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';

export default function VideoScreen() {
  return (
    <View>
        <Video
          source={{ uri: 'https://banzai-pmd-meride-tv.akamaized.net/amets/giallozafferano/2019/12/oosyer/HD/1200_oosyer.m3u8', type:"m3u8" }}
          ignoreSilentSwitch="ignore"
          controls={true}
          style={{
            width: '100%',
            height: '100%',
          }}
          volume={1.0}
        />
    </View>
  );
}
