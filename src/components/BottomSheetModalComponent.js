import React, { useCallback } from 'react';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

const BottomSheetModalComponent = (props, ref) => {
  const renderBackdrop = useCallback( props => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
    />
  ), []);

  return (
    <BottomSheetModal
      ref={ref}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      snapPoints={props.snapPoints}
      onDismiss={() => !!props.onDismiss && props.onDismiss()}
      onChange={(index) => !!props.onChange && props.onChange(index)}
    >
      { props.content }
    </BottomSheetModal>
  )
};

export default  React.forwardRef(BottomSheetModalComponent);