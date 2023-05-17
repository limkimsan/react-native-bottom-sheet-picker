const pickerStyleHelper = (() => {
  return {
    getContainerStyleByType
  }

  function getContainerStyleByType(isOutlined) {
    if (isOutlined) {
      return {
        backgroundColor: 'white',
        borderRadius: 3,
        marginTop: 5,
        height: 56,
        borderWidth: 1,
        borderColor: '#7a7a7a',
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
})()

export default pickerStyleHelper;