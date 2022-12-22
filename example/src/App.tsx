import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { BottomSheetPicker } from 'react-native-bottom-sheet-picker';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export default function App() {
  // const [result, setResult] = React.useState<number | undefined>();
  const [selectedAge, setSelectedAge] = React.useState(null);
  const pickerItems = [
    {label: '13 years old', value: 13},
    {label: '14 years old', value: 14},
    {label: '15 years old', value: 15},
    {label: '16 years old', value: 16},
    {label: '17 years old', value: 17},
    {label: '18 years old', value: 18},
    {label: '19 years old', value: 19},
    {label: '20 years old', value: 20},
    {label: '21 years old', value: 21},
    {label: '22 years old', value: 22},
  ];

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <BottomSheetPicker
            label="Select your age"
            items={pickerItems}
            selectedItem={selectedAge}
            onSelectItem={(item: any) => setSelectedAge(item)}
          />
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
