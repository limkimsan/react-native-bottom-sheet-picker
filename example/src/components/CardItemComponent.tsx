import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';


const CardItemComponent = () => {
  const renderDeleteAction = () => {
    return (
      <RectButton style={{backgroundColor: 'red', width: '30%', marginTop: 16, justifyContent: 'center', alignItems: 'center', marginLeft: -20}}>
        <Text style={[{color: 'white', fontSize: 18,  marginLeft: 20}]}>Delete</Text>
      </RectButton>
    )
  }

  const renderInfo = () => {
    return <Text>Card item</Text>
  }

  return (
    <Swipeable renderRightActions={renderDeleteAction}>
      <View style={[styles.container]}>
        { renderInfo() }
      </View>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginTop: 16,
    padding: 16,
    backgroundColor: 'gray',
    width: '90%',
    height: 70
  },
});

export default CardItemComponent;