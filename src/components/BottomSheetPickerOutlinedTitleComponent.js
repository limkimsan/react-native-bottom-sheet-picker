import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BottomSheetPickerOutlinedTitleComponent = (props) => {
  return (
    <View style={[styles.container, props.outlinedTitleContainerStyle]}>
      <Text style={[styles.titleLabel, props.titleFontFamily && {fontFamily: props.titleFontFamily}, props.titleStyle]}>
        {props.title}
        {props.required && <Text style={[{color: props.requiredColor || "#d50000", fontSize: 12}, props.titleFontFamily && {fontFamily: props.titleFontFamily}, props.requiredTitleStyle]}> *</Text>}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleLabel: {
    color: '#7a7a7a',
    fontSize: 12,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    top: -6,
    paddingHorizontal: 6,
    marginLeft: 12,
    zIndex: 1,
    height: 25,
  },
});

export default BottomSheetPickerOutlinedTitleComponent;