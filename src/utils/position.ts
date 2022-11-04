import type { LayoutRectangle, ViewStyle } from 'react-native';

import type { TooltipWrapperProps } from '../types';

import { getSafeStyle, isVerticalPosition } from './validation';

type WantedProps = Omit<
  TooltipWrapperProps,
  'animatedPresence' | 'children' | 'color'
>;
type PositionType = NonNullable<WantedProps['position']>;

export function getPositionStyles(
  props: WantedProps & { layout?: LayoutRectangle }
): Pick<ViewStyle, PositionType> {
  const {
    position = 'bottom',
    childrenLayout,
    layout,
    offset = 0,
    pointerStyle: pointerStyles,
  } = props;

  const { width: pointerWidth, height: pointerHeight } =
    getSafeStyle(pointerStyles);

  const space =
    offset + (isVerticalPosition(position) ? pointerHeight : pointerWidth);

  const sideWhenVertical =
    (childrenLayout?.x ?? 0) +
    (childrenLayout?.width ?? 0) / 2 -
    (layout?.width ?? 0) / 2;
  const sideWhenHorizontal =
    (childrenLayout?.y ?? 0) +
    (childrenLayout?.height ?? 0) / 2 -
    (layout?.height ?? 0) / 2;

  switch (position) {
    case 'top':
      return {
        top: (childrenLayout?.y ?? 0) - (layout?.height ?? 0) - space,
        left: sideWhenVertical,
      };
    case 'bottom':
      return {
        top: (childrenLayout?.y ?? 0) + (childrenLayout?.height ?? 0) + space,
        left: sideWhenVertical,
      };
    case 'left':
      return {
        left: (childrenLayout?.x ?? 0) - (layout?.width ?? 0) - space,
        top: sideWhenHorizontal,
      };
    case 'right':
      return {
        left: (childrenLayout?.x ?? 0) + (childrenLayout?.width ?? 0) + space,
        top: sideWhenHorizontal,
      };
    default:
      return {};
  }
}
