import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';

export default function VideoScreen() {
  let videoWidth = 422;
  return (
    <View>
      <Video
        source={{
          uri:
            'https://banzai-pmd-meride-tv.akamaized.net/amets/giallozafferano/2019/12/oosyer/HD/1200_oosyer.m3u8',
          type: 'm3u8',
        }}
        ignoreSilentSwitch="ignore"
        controls={true}
        style={{
          width: "100%",
          height: (Dimensions.get("window").width/16)*9,
        }}
        volume={1.0}
      />
    </View>
  );
}
