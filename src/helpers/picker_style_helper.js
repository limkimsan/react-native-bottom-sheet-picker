import {defaultDisabledColor, defaultOutlinedColor} from '../constants/color_constant'

const pickerStyleHelper = (() => {
  return {
    getContainerStyleByType,
    getColor
  }

  function getContainerStyleByType(isOutlined, disabled, disabledColor) {
    if (isOutlined) {
      return {
        backgroundColor: 'white',
        borderRadius: 3,
        marginTop: 5,
        height: 56,
        borderWidth: 1,
        borderColor: getColor(disabled, disabledColor, defaultOutlinedColor),
        paddingLeft: 16,
        paddingRight: 4
      }
    }

    return {
      backgroundColor: 'white',
      borderRadius: 10,
      marginTop: 5,
      height: 56,
    }
  }

  function getColor(disabled, disabledColor, enabledColor) {
    return disabled ? disabledColor || defaultDisabledColor : enabledColor
  }
})()

export default pickerStyleHelper;