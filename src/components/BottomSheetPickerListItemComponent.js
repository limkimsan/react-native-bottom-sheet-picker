import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {LIST_ITEM_FONT_SIZE} from '../constants/font_size_constant';

import PlayAudioComponent from './playAudios/PlayAudioComponent';

const BottomSheetPickerListItemComponent = (props) => {
  const itemColor = (item, defaultColor) => {
    return (item.disabled && item.value != props.selectedItem) ? '#b5b5b5' : defaultColor;
  }

  const renderAudioBtn = (audio, itemUuid) => {
    // console.log(`list item audio = ${audio}, uuid = ${itemUuid}`)

    return <PlayAudioComponent
              iconSize={24}
              audio={audio}
              primaryColor={props.primaryColor}
              secondaryColor={props.secondaryColor}
              btnStyle={{borderWidth: 0, borderRadius: 0}}
              itemUuid={itemUuid}
              playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
           />
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
                <Text style={[{ color: itemColor(item, 'black'), fontSize: LIST_ITEM_FONT_SIZE }, props.itemTextStyle]}>{ item.label }</Text>
              </View>
            }
            {!props.hideAudio && renderAudioBtn(item.audio, item.uuid)}
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