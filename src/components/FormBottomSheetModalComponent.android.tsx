import React from 'react';
import BottomSheetModalComponent from './BottomSheetModalComponent';

class FormBottomSheetModalComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      bodyContent: null,
      snapPoints: props.snapPoints
    }
  }

  setBodyContent(bodyContent: any) {
    this.setState({ bodyContent });
  }

  setSnapPoints(snapPoints: any) {
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
        onDismiss={() => this.onDismissModal()}
        onChange={(index: any) => !!this.props.onChange && this.props.onChange(index)}
      />
    )
  }
}

export default FormBottomSheetModalComponent;