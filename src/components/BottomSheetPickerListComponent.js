import React, {useState} from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Pressable, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import DashedLineComponent from './DashedLineComponent';
import BottomSheetPickerListItemComponent from './BottomSheetPickerListItemComponent';

const BottomSheetPickerListComponent = (props) => {
  const [selectedItem, setSelectedItem] = useState(props.selectedItem);
  const [playingUuid, setPlayingUuid] = useState(null);

  React.useEffect(() => {
    console.log('== picker list playing uuid = ', playingUuid);
    console.log('=======================================================')
  }, [props.playingUuid]);

  const renderTitle = () => {
    return <React.Fragment>
              <Text style={{fontSize: 18, marginBottom: 20, paddingHorizontal: 16, fontWeight: 'bold', color: 'black'}}>{props.title}</Text>
              <DashedLineComponent/>
           </React.Fragment>
  }

  const onSelectItem = (item) => {
    if (item.disabled)
      return;

    setSelectedItem(item.value);
    props.onSelectItem(item.value);
  }

  const renderList = () => {
    return (
      <ScrollView contentContainerStyle={[{flexGrow: 1, padding: 16, paddingTop: 0, paddingBottom: 20}, props.scrollViewStyle]}>
        <Pressable>
          <BottomSheetPickerListItemComponent
            items={props.items}
            selectedItem={selectedItem}
            onSelectItem={(item) => onSelectItem(item)}
            showConfirmDelete={props.showConfirmDelete}
            isDeletable={props.isDeletable}
            defaultSelectedItem={props.selectedItem}
            customListItem={props.customListItem}
            listItemStyle={props.listItemStyle}
            itemTextStyle={props.itemTextStyle}
            primaryColor={props.primaryColor}
            secondaryColor={props.secondaryColor}
            hideAudio={props.hideAudio}
            // playingUuid={props.playingUuid}
            // updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
            playingUuid={playingUuid}
            updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
          />
        </Pressable>
      </ScrollView>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{backgroundColor: 'white', height: props.pickerContentHeight || 425}}>
        { !!props.customBottomSheetTitle ? props.customBottomSheetTitle : renderTitle() }
        { renderList() }
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BottomSheetPickerListComponent;