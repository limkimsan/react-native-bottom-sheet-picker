import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import FormBottomSheetModalComponent from '../FormBottomSheetModalComponent';
import BottomSheetPickerListComponent from '../BottomSheetPickerListComponent';

const BottomSheetPickerComponent = (props: any) => {
  let pickerRef = React.createRef();
  let pickerModalRef = React.createRef();
  const getLabel = () => {
    if (!props.items)
      return props.label || '';

    const selectedItem = props.items.filter((item: any) => item.value === props.selectedItem);
    return selectedItem.length > 0 ? selectedItem[0].label : props.label;
  }

  const onSelectItem = (item) => {
    props.onSelectItem(item);
    pickerModalRef.current?.dismiss();
  }

  const showPicker = () => {
    if (props.disabled)
      return

    pickerRef.current?.setBodyContent(
      <BottomSheetPickerListComponent
        title="Select your age"
        items={props.items}
        onSelectItem={onSelectItem}
      />
    );

    pickerModalRef.current?.present();
  }

  return (
    <View style={{width: '90%'}}>
      <Text style={styles.titleLabel}>Picker title</Text>

      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => showPicker()} style={{height: '100%'}}>
          <View style={styles.textContainer}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 16}}>{ getLabel() }</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <FormBottomSheetModalComponent ref={pickerRef} formModalRef={pickerModalRef} snapPoints={['60%']} onDismissModal={() => pickerRef.current?.setBodyContent(null)} />
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
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
});

export default BottomSheetPickerComponent;