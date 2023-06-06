const pickerHelper = (() => {
  return {
    getSelectedValue
  }

  function getSelectedValue(selectedFieldName, item) {
    return !!selectedFieldName ? item[selectedFieldName] : item.value
  }
})()

export default pickerHelper