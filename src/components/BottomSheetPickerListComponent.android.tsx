import React, {useState} from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Pressable, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import DashedLineComponent from './DashedLineComponent';
import BottomSheetPickerListItemComponent from './BottomSheetPickerListItemComponent';

const BottomSheetPickerListComponent = (props: any) => {
  const [selectedItem, setSelectedItem] = useState(props.selectedItem);

  const renderTitle = () => {
    return <React.Fragment>
              <Text style={{fontSize: 18, marginBottom: 16, paddingHorizontal: 16}}>{props.title}</Text>
              <DashedLineComponent/>
           </React.Fragment>
  }

  const onSelectItem = (item: any) => {
    if (item.disabled)
      return;

    setSelectedItem(item.value);
    props.onSelectItem(item.value);
  }

  const renderList = () => {
    return (
      <ScrollView contentContainerStyle={[{flexGrow: 1, padding: 16, paddingTop: 10, paddingBottom: 20}, props.scrollViewStyle]}
        scrollEnabled={true}
      >
        <Pressable>
          <BottomSheetPickerListItemComponent
            items={props.items}
            selectedItem={selectedItem}
            onSelectItem={(item: any) => onSelectItem(item)}
            showConfirmDelete={props.showConfirmDelete}
            isDeletable={props.isDeletable}
            defaultSelectedItem={props.selectedItem}
            customListItem={props.customListItem}
          />
        </Pressable>
      </ScrollView>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{backgroundColor: 'white', height: 425}}>
        { renderTitle() }
        { renderList() }
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BottomSheetPickerListComponent;