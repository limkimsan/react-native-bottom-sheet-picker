import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBoxComponent = (props) => {
  const [searchedText, setSearchedText] = useState('');
  const onTextChange = (text) => {
    setSearchedText(text);
    props.onSearchChange(text);
  }

  return (
    <View style={{justifyContent: 'center', marginHorizontal: 16, marginTop: 12, marginBottom: 6}}>
      <TextInput
        value={searchedText}
        placeholder={props.placeholder || 'Search for item'}
        style={[{borderWidth: 1, borderColor: '#D3D3D3', borderRadius: 6, paddingLeft: 48, paddingRight: 52}, props.itemTextStyle, props.searchInputStyle]}
        onChangeText={(text) => onTextChange(text)}
      />
      <Icon name="search" size={23} style={{position: 'absolute', left: 12, color: '#808080'}} />
      
      { searchedText &&
        <TouchableOpacity onPress={() => onTextChange('')}
          style={{position: 'absolute', right: 0, height: 48, width: 48, justifyContent: 'center', alignItems: 'center'}}
        >
          <Icon name="close-circle" size={30} color='#808080' />
        </TouchableOpacity>
      }
    </View>
  )
}

export default SearchBoxComponent;