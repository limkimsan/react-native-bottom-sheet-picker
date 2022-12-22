import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BottomSheetPickerListItemComponent = (props) => {
  const itemColor = (item, defaultColor) => {
    return (item.disabled && item.value != props.selectedItem) ? '#b5b5b5' : defaultColor;
  }

  const renderListItem = () => {
    return props.items.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <TouchableOpacity
            onPress={() => props.onSelectItem(item)}
            style={[styles.container, props.listItemStyle]}
          >
            { props.customListItem ? props.customListItem(item)
              :
              <View style={{flex: 1}}>
                <Text style={[{ color: itemColor(item, 'black'), fontSize: 16 }, props.itemTextStyle]}>{ item.label }</Text>
              </View>
            }
          </TouchableOpacity>
          <View style={{ borderColor: '#D3D3D3', borderBottomWidth: index == props.items.length - 1 ? 0 : 0.6 }} />
        </React.Fragment>
      )
    })
  }

  return renderListItem();
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 56,
  }
});

export default BottomSheetPickerListItemComponent;