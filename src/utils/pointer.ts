import type { LayoutRectangle, ViewStyle } from 'react-native';
import type { PointerProps } from '../types';

import { getSafeStyle, isVerticalPosition } from './validation';

export function getPointerStyles(props: PointerProps) {
  const {
    position = 'top',
    pointerStyle: pointerStyles,
    pointerColor: color,
  } = props;

  const { width, height } = getSafeStyle(pointerStyles);

  switch (position) {
    case 'bottom': {
      return {
        borderTopWidth: 0,
        borderRightWidth: width / 2.0,
        borderBottomWidth: height,
        borderLeftWidth: width / 2.0,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: color,
        borderLeftColor: 'transparent',
      };
    }
    case 'left': {
      return {
        borderTopWidth: height / 2.0,
        borderRightWidth: 0,
        borderBottomWidth: height / 2.0,
        borderLeftWidth: width,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: color,
      };
    }
    case 'top': {
      return {
        borderTopWidth: height,
        borderRightWidth: width / 2.0,
        borderBottomWidth: 0,
        borderLeftWidth: width / 2.0,
        borderTopColor: color,
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
      };
    }
    case 'right': {
      return {
        borderTopWidth: height / 2.0,
        borderRightWidth: width,
        borderBottomWidth: height / 2.0,
        borderLeftWidth: 0,
        borderTopColor: 'transparent',
        borderRightColor: color,
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
      };
    }
    default: {
      return {};
    }
  }
}

export function getPointerWrapperStyle(
  props: PointerProps,
  layout: LayoutRectangle
): ViewStyle {
  const { position = 'top', pointerStyle: pointerStyles } = props;
  const { width, height } = getSafeStyle(pointerStyles);

  const size = isVerticalPosition(position) ? height : width;

  const sideWhenVertical = layout.width / 2.0 - width / 2.0;
  const sideWhenHorizontal = layout.height / 2.0 - height / 2.0;

  switch (position) {
    case 'bottom': {
      return {
        top: -size,
        left: sideWhenVertical,
      };
    }
    case 'left': {
      return {
        right: -size,
        top: sideWhenHorizontal,
      };
    }
    case 'top': {
      return {
        bottom: -size,
        left: sideWhenVertical,
      };
    }
    case 'right': {
      return {
        left: -size,
        top: sideWhenHorizontal,
      };
    }
    default: {
      return {};
    }
  }
}
