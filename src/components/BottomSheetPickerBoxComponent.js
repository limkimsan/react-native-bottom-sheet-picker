import React from 'react';
import {View, Text} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import PlayAudioComponent from './playAudios/PlayAudioComponent';
import {PLACEHOLDER_FONT_SIZE} from '../constants/font_size_constant';
import pickerStyleHelper from '../helpers/picker_style_helper';

const BottomSheetPickerBoxComponent = (props) => {
  const getLabel = () => {
    if (!props.items)
      return props.placeholder || '';

    const fieldName = !!props.selectedFieldName ? props.selectedFieldName : 'value';
    const selectedItem = props.items.filter((item) => item[fieldName] === props.selectedItem);
    return selectedItem.length > 0 ? selectedItem[0].label : props.placeholder;
  }

  const renderPlaceholderAudio = () => {
    return <PlayAudioComponent
              iconSize={24}
              audio={props.placeholderAudio}
              primaryColor={props.primaryColor}
              secondaryColor={props.secondaryColor}
              btnStyle={{borderWidth: 0, borderRadius: 0}}
              itemUuid={props.pickerUuid}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
           />
  }

  const pressableColor = pickerStyleHelper.getColor(props.disabled, props.disabledColor, props.primaryColor);

  return (
     <View style={[{alignItems: 'center', flexDirection: 'row', height: '100%'}, props.pickerBoxStyle]}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          {!!props.placeholderAudio && renderPlaceholderAudio()}
          <Text numberOfLines={1}
            style={[{fontSize: props.pickerFontSize || PLACEHOLDER_FONT_SIZE, flex: 1, textAlignVertical: 'center', color: pickerStyleHelper.getColor(props.disabled, props.disabledColor, 'black')}, props.fontFamily && {fontFamily: props.fontFamily}, props.placeholderStyle]}
          >
            { getLabel() }
          </Text>
          { !!props.indicatorLabel ? <Text style={[{color: pressableColor, fontSize: props.pickerFontSize, marginRight: 8}, props.fontFamily && {fontFamily: props.fontFamily}, props.indicatorLabelStyle]}>{props.indicatorLabel}</Text>
            : !!props.customIcon ? props.customIcon
            : <View style={{justifyContent: 'center'}}><FeatherIcon name="chevron-right" color={pressableColor || 'black'} size={28} /></View>
          }
        </View>
      </View>
  )
}

export default BottomSheetPickerBoxComponent;