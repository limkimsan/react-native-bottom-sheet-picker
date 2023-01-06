# react-native-bottom-sheet-picker
<span><img src="https://user-images.githubusercontent.com/18114944/210942114-e2ed3f10-6dc7-46b9-b061-1fb27a282864.png" width="250" height="500" /></span>
<span><img src="https://user-images.githubusercontent.com/18114944/210942121-0357bd06-deff-4730-a9db-e6099f97d018.png" width="250" height="500" /></span>


React native bottom sheet picker is a picker component that uses the bottom sheet to show the list item instead of using the dropdown.

## Support
iOS & Android

## Installation

```sh
npm install react-native-bottom-sheet-picker
```

## Installing dependencies
```sh
npm install @gorhom/bottom-sheet@^4 react-native-gesture-handler react-native-reanimated react-native-vector-icons
```

- [@gorhom/bottom-sheet](https://gorhom.github.io/react-native-bottom-sheet/)
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler)
- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## Usage

```js
import {BottomSheetPicker} from 'react-native-bottom-sheet-picker';

// ...
let selectedLocation = null;
const locations = [{label: 'Siem Reap', value: 1}, {label: 'Phnom Penh', value: 2}, {label: 'Battambang', value: 3}];

<BottomSheetPicker
  title="Your location"
  placeholder="Select your location"
  bottomSheetTitle="Select you location"
  primaryColor={'green'}
  items={locations}
  selectedItem={selectedLocation}
  snapPoints={['60%']}
  pickerContentHeight={425}
  titleStyle={{}}
  containerStyle={{}}
  pickerStyle={{}}
  placeholderStyle={{}}
  listItemStyle={{}}
  itemTextStyle={{}}
  customPicker={{}}
  customBottomSheetTitle={component}
  customIcon={component}
  customListItem={component}
  customPickerContent={component}
  onSelectItem={(item) => selectedLocation = item}
  onBottomSheetShow={() => {}}
  onDismiss={() => {}}
/>
```

## Extra step
Add `GestureHandlerRootView` and `BottomSheetModalProvider` on the `App.js`
```
import {BottomSheetPicker} from 'react-native-bottom-sheet-picker';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
...

<GestureHandlerRootView style={{flex: 1}}>
  <BottomSheetModalProvider>
    ...
  </BottomSheetModalProvider>
</GestureHandlerRootView>
```

## Properties

#### Basic
| Prop               |    Default    |   Type   | Description                                                                                                 |
| :----------------- | :-----------: | :------: | :---------------------------------------------------------------------------------------------------------- |
| title              |       ''      | `string` | Title on top of the picker box                                                                              |
| placeholder        |       ''      | `string` | Placeholder inside the picker box                                                                           |
| bottomSheetTitle   |       ''      | `string` | Title on the bottom sheet                                                                                   |
| primaryColor       |    'black'    | `string` | Color for the arrow icon                                                                                    |
| items              |       []      | `Array`  | Array of item for selections.(Ex: [{label: 'example', value: 1}])                                           |
| selectedItem       |     null      |          | The selected value                                                                                          |
| snapPoints         |    ['60%']    | `Array`  | The height of the bottom sheet                                                                              |
| pickerContentHeight|      425      | `number` | The height of the content inside the bottom sheet                                                           |

#### Custom styles

| Prop              |    Default    |   Type    | Description                                                                |
| :---------------- | :-----------: | :-------: | :------------------------------------------------------------------------- |
| titleStyle        |     {...}     |  `style`  | Style of the picker title                                                  |
| containerStyle    |     {...}     |  `style`  | Style of the picker wrapper                                                |
| pickerStyle       |     {...}     |  `style`  | Style of the picker box                                                    |
| placeholderStyle  |     {...}     |  `style`  | Style of the placeholder label in the picker box                           |
| listItemStyle     |     {...}     |  `style`  | Style of the list item on bottom sheet                                     |
| itemTextStyle     |     {...}     |  `style`  | Style of the label of the list item on bottom sheet                        |

#### Custom components
| Prop                    |    Default    |  Type  | Description                                                                |
| :---------------------- | :-----------: | :----: | :------------------------------------------------------------------------- |
| customPicker            |     {...}     | `comp` | Custom component of the picker box                                         |
| customBottomSheetTitle  |     {...}     | `comp` | Custom component of the bottom sheet title                                 |
| customIcon              |     {...}     | `comp` | Custom component of the icon on the picker box                             |
| customListItem          |     {...}     | `comp` | Custom component of the list item on the bottom sheet                      |
| customPickerContent     |     {...}     | `comp` | Custom content inside the bottom sheet (whole content)                     |

#### Events

| Prop              |    Default    |   Type    | Description                                                                |
| :---------------- | :-----------: | :-------: | :------------------------------------------------------------------------- |
| onSelectItem      |     {...}     |  `event`  | On selecting an item                                                       |
| onBottomSheetShow |     {...}     |  `event`  | On the bottom sheet show                                                   |
| onDismiss         |     {...}     |  `event`  | On the bottom sheet close                                                  |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

<!-- ## License

MIT -->

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
