import type { ViewStyle } from 'react-native';

import type { PositionProp } from '../types';

type PositionType = PositionProp['position'];

export function isVerticalPosition(position?: PositionType): boolean {
  return position === 'top' || position === 'bottom';
}

export function isValidNumber(value?: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value);
}

export function getSafeStyle(style?: ViewStyle) {
  const { width, height } = style ?? {};
  const safeWidth = (isValidNumber(width) && width) || 0;
  const safeHeight = (isValidNumber(height) && height) || 0;

  return {
    ...style,
    width: safeWidth,
    height: safeHeight,
  };
}
