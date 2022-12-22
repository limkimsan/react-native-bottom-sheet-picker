import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import FormBottomSheetModalComponent from '../FormBottomSheetModalComponent';
import BottomSheetPickerListComponent from '../BottomSheetPickerListComponent';

const BottomSheetPickerComponent = (props: any) => {
  let pickerRef = React.createRef();
  let pickerModalRef = React.createRef();
  const getLabel = () => {
    if (!props.items)
      return props.placeholder || '';

    const selectedItem = props.items.filter((item: any) => item.value === props.selectedItem);
    return selectedItem.length > 0 ? selectedItem[0].label : props.placeholder;
  }

  const onSelectItem = (item: any) => {
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
                        onSelectItem={onSelectItem}
                      />

    pickerRef.current?.setBodyContent(content);
    pickerModalRef.current?.present();
  }

  return (
    <View style={[{width: '90%'}, props.containerStyle]}>
      <Text style={[styles.titleLabel, props.titleStyle]}>{props.title}</Text>

      <View style={[styles.mainContainer, props.pickerStyle]}>
        <TouchableOpacity onPress={() => showPicker()} style={{height: '100%'}}>
          <View style={styles.textContainer}>
            <View style={{flex: 1}}>
              <Text style={[{fontSize: 16}, props.labelStyle]}>{ getLabel() }</Text>
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
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    paddingHorizontal: 16,
  },
});

export default BottomSheetPickerComponent;

// How to use the component
{/* <BottomSheetPicker
  title="Your age"
  placeholder="Select your age"
  bottomSheetTitle="Select you age"
  items={pickerItems}
  selectedItem={selectedAge}
  onSelectItem={(item: any) => setSelectedAge(item)}
  containerStyle={{}}
  pickerStyle={{}}
  labelStyle={{}}
  listItemStyle={{}}
  itemTextStyle={{}}
  customTitle={component} (optional)
  customListItem={component} (optional)
  customPickerContent={component} (optional)
/> */}
