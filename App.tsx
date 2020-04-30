import React from 'react';
import { View, Text } from 'react-native';
import Constants from 'expo-constants';

export default function() {
  console.log(Constants.manifest.extra)
  // undefined
  return (
    <View>
      <Text> Expo issue - 8090</Text>
    </View>
  )
}
