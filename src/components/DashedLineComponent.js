import React from 'react';
import { View, Dimensions } from 'react-native';

const DashedLine = (props: any) => {
  const screenWidth = parseInt(Dimensions.get('screen').width);
  let dashedLine = [];
    for(let i = 0; i < screenWidth; i++) {
      dashedLine.push(<View key={i} style={{backgroundColor: '#D3D3D3', width: 7, height: 1.5, marginRight: 3}} />);
    }

  return (
    <View style={[{flex: 1, flexDirection: 'row'}, props.containerStyle]}>
      { dashedLine }
    </View>
  )
}

export default DashedLine;