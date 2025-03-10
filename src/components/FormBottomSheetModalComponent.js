import React from 'react';
import BottomSheetModalComponent from './BottomSheetModalComponent';

class FormBottomSheetModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyContent: null,
      snapPoints: props.snapPoints
    }
  }

  setBodyContent(bodyContent) {
    this.setState({ bodyContent });
  }

  setSnapPoints(snapPoints) {
    this.setState({ snapPoints });
  }

  onDismissModal() {
    !!this.props.onDismissModal && this.props.onDismissModal()
  }

  render() {
    return (
      <BottomSheetModalComponent
        ref={this.props.formModalRef}
        content={this.state.bodyContent}
        snapPoints={this.state.snapPoints}
        enableDynamicSizing={this.props.enableDynamicSizing}
        onDismiss={() => this.onDismissModal()}
        onChange={(index) => !!this.props.onChange && this.props.onChange(index)}
      />
    )
  }
}

export default FormBottomSheetModalComponent;