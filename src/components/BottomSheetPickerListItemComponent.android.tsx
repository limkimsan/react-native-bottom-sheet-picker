import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const BottomSheetPickerListItemComponent = (props: any) => {
  const itemColor = (item: any, defaultColor: string) => {
    return (item.disabled && item.value != props.selectedItem) ? '#b5b5b5' : defaultColor;
  }

  const renderListItem = () => {
    return props.items.map((item: any, index: number) => {
      return (
        <React.Fragment key={index}>
          <TouchableOpacity
            onPress={() => props.onSelectItem(item)}
            style={{flexDirection: 'row', height: 56, alignItems: 'center'}}
          >
            { props.customListItem ? props.customListItem(item)
              :
              <View style={{flex: 1}}>
                <Text style={{ color: itemColor(item, 'black'), fontSize: 16 }}>{ item.label }</Text>
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

export default BottomSheetPickerListItemComponent;