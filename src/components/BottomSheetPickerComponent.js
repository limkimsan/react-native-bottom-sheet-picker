import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import BottomSheetPickerBoxComponent from './BottomSheetPickerBoxComponent';
import FormBottomSheetModalComponent from './FormBottomSheetModalComponent';
import BottomSheetPickerListComponent from './BottomSheetPickerListComponent';
import {TITLE_FONT_SIZE} from '../constants/font_size_constant';

const BottomSheetPickerComponent = (props) => {
  let pickerRef = React.createRef();
  let pickerModalRef = React.createRef();

  const onSelectItem = (item) => {
    props.onSelectItem(item);
    pickerModalRef.current?.dismiss();
  }

  const showPicker = () => {
    if (props.disabled)
      return

    !!props.onBottomSheetShow && props.onBottomSheetShow();
    const content = !!props.customPickerContent ? props.customPickerContent
                    : <BottomSheetPickerListComponent
                        title={props.bottomSheetTitle}
                        items={props.items}
                        customBottomSheetTitle={props.customBottomSheetTitle}
                        customListItem={props.customListItem}
                        listItemStyle={props.listItemStyle}
                        itemTextStyle={props.itemTextStyle}
                        pickerContentHeight={props.pickerContentHeight}
                        primaryColor={props.primaryColor}
                        secondaryColor={props.secondaryColor}
                        onSelectItem={onSelectItem}
                        hideAudio={props.hideAudio}
                      />

    pickerRef.current?.setBodyContent(content);
    pickerModalRef.current?.present();
  }

  const onDismissModal = () => {
    !!props.onDismiss && props.onDismiss();
    pickerRef.current?.setBodyContent(null);
  }

  const renderTitle = () => {
    return <Text style={[styles.titleLabel, props.titleStyle]}>
              {props.title}
              {props.required && <Text style={{color: props.requiredColor || "#d50000"}}> *</Text>}
           </Text>
  }

  return (
    <View style={[{width: '100%'}, props.containerStyle]}>
      { !!props.title && renderTitle() }

      <View style={[styles.mainContainer, props.pickerStyle]}>
        <TouchableOpacity onPress={() => showPicker()} style={{height: '100%'}}>
          { !!props.customPicker ? props.customPicker
            : <BottomSheetPickerBoxComponent
                items={props.items}
                selectedItem={props.selectedItem}
                placeholder={props.placeholder}
                placeholderStyle={props.placeholderStyle}
                primaryColor={props.primaryColor}
                secondaryColor={props.secondaryColor}
                customIcon={props.customIcon}
                pickerUuid={props.pickerUuid}
                placeholderAudio={props.placeholderAudio}
                playingUuid={props.playingUuid}
                updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              />
          }
        </TouchableOpacity>
      </View>

      <FormBottomSheetModalComponent ref={pickerRef} formModalRef={pickerModalRef} snapPoints={props.snapPoints || ['60%']} onDismissModal={() => onDismissModal()} />
    </View>
  )
}

const styles = StyleSheet.create({
  titleLabel: {
    color: 'white',
    fontSize: TITLE_FONT_SIZE,
    marginBottom: 10
  },
  mainContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    height: 56,
  },
});

export default BottomSheetPickerComponent;

// How to use the component
{/* <BottomSheetPicker
  title="Your age"   // title on top of the picker box
  placeholder="Select your age"   // placeholder inside the picker box
  bottomSheetTitle="Select you age"   // title on the bottom sheet
  required={boolean} (optional)
  requiredColor={default = '#d50000'} (optional)
  primaryColor={default = 'black'} (optional)
  secondaryColor={deafult = '#b5b5b5'} (optional)
  items={pickerItems}
  selectedItem={selectedAge}
  snapPoints={default = ['60%']} (optional)   // snapPoint of the bottom sheet
  pickerContentHeight={default = 425} (optional)   // height of the content on the bottom sheet
  titleStyle={{}} (optional)   // style the title of the picker
  containerStyle={{}} (optional)   // style of the wrapper
  pickerStyle={{}} (optional)   // style of the picker box container
  placeholderStyle={{}} (optional)   // style of the placeholder label of the picker box
  listItemStyle={{}} (optional)   // style of the list item on bottom sheet
  itemTextStyle={{}} (optional)   // style of the label of list item on bottom sheet
  customPicker={{}} (optional)   // custom component for the picker box
  customBottomSheetTitle={component} (optional)   // custom component for the bottom sheet title
  customIcon={component} (optional)   // custom component for the icon of the picker box
  customListItem={component} (optional)   // custom component for the bottom sheet list item
  customPickerContent={component} (optional)   // custom component for the whole item on the bottom sheet
  onSelectItem={(item) => setSelectedAge(item)}
  onBottomSheetShow={() => {}} (optional)   // event on bottom sheet show
  onDismiss={() => {}} (optional)   // event on bottom sheet close
  pickerUuid=''
  placeholderAudio={audio}
  playingUuid=''
  updatePlayingUuid={(uuid) => function}
  placeholderAudioAccessibilityLabel=''
/> */}
