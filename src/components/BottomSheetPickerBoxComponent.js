import React from 'react';
import {View, Text} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const BottomSheetPickerBoxComponent = (props) => {
  const getLabel = () => {
    if (!props.items)
      return props.placeholder || '';

    const selectedItem = props.items.filter((item) => item.value === props.selectedItem);
    return selectedItem.length > 0 ? selectedItem[0].label : props.placeholder;
  }

  return (
     <View style={{alignItems: 'center', flexDirection: 'row', height: '100%', paddingHorizontal: 16}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={[{fontSize: 16, flex: 1, textAlignVertical: 'center'}, props.labelStyle]}>{ getLabel() }</Text>

          <FeatherIcon name="chevron-right" color='black' size={28} />
        </View>
      </View>
  )
}

export default BottomSheetPickerBoxComponent;