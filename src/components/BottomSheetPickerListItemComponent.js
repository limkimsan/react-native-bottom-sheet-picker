import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {LIST_ITEM_FONT_SIZE} from '../constants/font_size_constant';
import PlayAudioComponent from './playAudios/PlayAudioComponent';
import pickerHelper from '../helpers/picker_helper';

const BottomSheetPickerListItemComponent = (props) => {
  const itemColor = (item, defaultColor) => {
    return (item.disabled && pickerHelper.getSelectedValue(props.selectedFieldName, item) != props.selectedItem) ? '#b5b5b5' : defaultColor;
  }

  const renderAudioBtn = (audio, itemUuid) => {
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

  const renderRightIcon = (item) => {
    if (props.showCheckIcon && props.selectedItem == pickerHelper.getSelectedValue(props.selectedFieldName, item))
      return <Icon name='check' size={props.checkIconSize || 24} color={props.secondaryColor} style={{marginLeft: !props.hideListItemAudio ? 24 : 0}}/>
    else if (props.showRadioStyle)
      return <View style={styles.roundContainer}>
              {props.selectedItem == pickerHelper.getSelectedValue(props.selectedFieldName, item) && <View style={{width: 14, height: 14, borderRadius: 14, backgroundColor: props.primaryColor}} />}
            </View>
  }

  const renderLeftCheckIcon = (item) => {
    const containerStyle = {backgroundColor: props.primaryColor, borderWidth: 0};
    return <View style={[styles.roundContainer, {marginRight: 10, height: 22, width: 22}, item.value == props.selectedItem && containerStyle]}>
              {(item.value == props.selectedItem) && <FontAwesomeIcon name='check' size={13} color={props.leftCheckIconColor || '#ffffff'}/>}
           </View>
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
              <View style={{flex: 1, flexDirection: 'row'}}>
                { (props.showLeftCheckIcon && !props.showCheckIcon && !props.showRadioStyle) && renderLeftCheckIcon(item)}
                <Text style={[{ color: itemColor(item, 'black'), fontSize: LIST_ITEM_FONT_SIZE }, props.itemFontFamily && {fontFamily: props.itemFontFamily}, props.itemTextStyle]}>{ item.label }</Text>
              </View>
            }
            {!props.hideListItemAudio ? renderAudioBtn(item.audio, item.uuid) : renderRightIcon(item)}
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
  },
  roundContainer: {
    alignItems: 'center',
    alignItems: 'center',
    borderColor: '#D3D3D3',
    borderRadius: 20,
    borderWidth: 1.5,
    justifyContent: 'center',
    height: 24,
    width: 24,
  }
});

export default BottomSheetPickerListItemComponent;