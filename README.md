# react-native-bottom-sheet-picker

Bottom sheet picker for react native

## Installation

```sh
npm install react-native-bottom-sheet-picker
```

## Usage

```js
import {BottomSheetPicker} from 'react-native-bottom-sheet-picker';

// ...
<BottomSheetPicker
  title="Title of the picker"
  placeholder="Placeholder"
  bottomSheetTitle="Title on the bottom sheet"
  items={[label: '', value: '']}
  selectedItem={}
  onSelectItem={(item) => {}}
  containerStyle={{}}
  pickerStyle={{}}
  labelStyle={{}}
  listItemStyle={{}}
  itemTextStyle={{}}
  customTitle={component} (optional)
  customListItem={component} (optional)
  customPickerContent={component} (optional)
/>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

<!-- ## License

MIT -->

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
