import {isLowPixelDensityDevice} from './responsive_util';

const defaultItemSize = 48;

const componentUtil = (() => {
  return {
    pressableItemSize,
    mediumPressableItemSize,
  }

  function pressableItemSize(padding = 0) {
    return defaultItemSize + padding;
  }

  function mediumPressableItemSize() {
    return isLowPixelDensityDevice() ? pressableItemSize() : pressableItemSize(8);
  }
})();

export default componentUtil;