import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import FormBottomSheetModalComponent from './FormBottomSheetModalComponent';
import BottomSheetPickerListComponent from './BottomSheetPickerListComponent';

const BottomSheetPickerComponent = (props) => {
  let pickerRef = React.createRef();
  let pickerModalRef = React.createRef();
  const getLabel = () => {
    if (!props.items)
      return props.placeholder || '';

    const selectedItem = props.items.filter((item) => item.value === props.selectedItem);
    return selectedItem.length > 0 ? selectedItem[0].label : props.placeholder;
  }

  const onSelectItem = (item) => {
    props.onSelectItem(item);
    pickerModalRef.current?.dismiss();
  }

  const showPicker = () => {
    if (props.disabled)
      return

    const content = !!props.customPickerContent ? props.customPickerContent
                    : <BottomSheetPickerListComponent
                        title={props.bottomSheetTitle}
                        items={props.items}
                        customTitle={props.customTitle}
                        customListItem={props.customListItem}
                        listItemStyle={props.listItemStyle}
                        itemTextStyle={props.itemTextStyle}
                        pickerContentHeight={props.pickerContentHeight}
                        onSelectItem={onSelectItem}
                      />

    pickerRef.current?.setBodyContent(content);
    pickerModalRef.current?.present();
  }

  const onDismissModal = () => {
    !!props.onDimiss && props.onDimiss();
    pickerRef.current?.setBodyContent(null);
  }

  return (
    <View style={[{width: '90%'}, props.containerStyle]}>
      { !!props.title && <Text style={[styles.titleLabel, props.titleStyle]}>{props.title}</Text> }

      <View style={[styles.mainContainer, props.pickerStyle]}>
        <TouchableOpacity onPress={() => showPicker()} style={{height: '100%'}}>
          <View style={styles.textContainer}>
            <View style={{flex: 1}}>
              <Text style={[{fontSize: 16}, props.labelStyle]}>{ getLabel() }</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <FormBottomSheetModalComponent ref={pickerRef} formModalRef={pickerModalRef} snapPoints={props.snapPoints || ['60%']} onDismissModal={() => onDismissModal()} />
    </View>
  )
}

const styles = StyleSheet.create({
  titleLabel: {
    color: 'black',
    fontSize: 16,
  },
  mainContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    height: 56,
  },
  textContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    paddingHorizontal: 16,
  },
});

export default BottomSheetPickerComponent;

// How to use the component
{/* <BottomSheetPicker
  title="Your age"   // title on top of the picker box
  placeholder="Select your age"   // placeholder inside the picker box
  bottomSheetTitle="Select you age"   // title on the bottom sheet
  items={pickerItems}
  selectedItem={selectedAge}
  titleStyle={{}} (optional)   // style the title of the picker
  snapPoints={default = ['60%']} (optional)   // snapPoint of the bottom sheet
  pickerContentHeight={default = 425} (optional)   // height of the content on the bottom sheet
  onSelectItem={(item) => setSelectedAge(item)}
  containerStyle={{}} (optional)   // style of the wrapper
  pickerStyle={{}} (optional)   // style of the picker box container
  labelStyle={{}} (optional)   // style of the label of the picker box
  listItemStyle={{}} (optional)   // style of the list item on bottom sheet
  itemTextStyle={{}} (optional)   // style of the label of list item on bottom sheet
  customTitle={component} (optional)   // custom component for the bottom sheet title
  customListItem={component} (optional)   // custom component for the bottom sheet list item
  customPickerContent={component} (optional)   // custom component for the whole item on the bottom sheet
/> */}
