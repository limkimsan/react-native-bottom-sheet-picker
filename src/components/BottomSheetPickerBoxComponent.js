import React from 'react';
import {View, Text} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import PlayAudioComponent from './playAudios/PlayAudioComponent';
import {PLACEHOLDER_FONT_SIZE} from '../constants/font_size_constant';

const BottomSheetPickerBoxComponent = (props) => {
  const getLabel = () => {
    if (!props.items)
      return props.placeholder || '';

    const selectedItem = props.items.filter((item) => item.value === props.selectedItem);
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
              isSpeakerIcon={true}
              updatePlayingUuid={props.updatePlayingUuid}
              accessibilityLabel={props.placeholderAudioAccessibilityLabel}
           />
  }

  return (
     <View style={{alignItems: 'center', flexDirection: 'row', height: '100%', paddingHorizontal: 16}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          {!!props.placeholderAudio && renderPlaceholderAudio()}

          <Text style={[{fontSize: PLACEHOLDER_FONT_SIZE, flex: 1, textAlignVertical: 'center'}, props.placeholderStyle]}>{ getLabel() }</Text>

          { !!props.customIcon ? props.customIcon
            : <FeatherIcon name="chevron-right" color={props.primaryColor || 'black'} size={28} />
          }
        </View>
      </View>
  )
}

export default BottomSheetPickerBoxComponent;