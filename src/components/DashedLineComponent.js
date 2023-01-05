import React from 'react';
import { View } from 'react-native';

const DashedLine = () => {
  return (
    <View style={{position: 'relative'}}>
      <View style={{flex: 1, borderColor: '#D3D3D3', borderWidth: 2, borderStyle: 'dashed', borderRadius: 1}}/>
      <View style={{position: 'absolute', width: '100%', backgroundColor: 'white', height: 4, bottom: -1.2}}/>
    </View>
  )
}

export default DashedLine;