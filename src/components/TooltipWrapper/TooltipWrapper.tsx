import React, { useMemo } from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { useLayout } from '../../hooks';
import { getPositionStyles } from '../../utils';
import type { TooltipWrapperProps } from '../../types';

import PointerWrapper from '../PointerWrapper';

import styles from './styles';

const TooltipWrapperComponent: React.FC<TooltipWrapperProps> = (props) => {
  const {
    children,
    position = 'bottom',
    animatedPresence,
    ...pointerProps
  } = props;

  const { onLayout, ...layout } = useLayout();

  const stylez = useAnimatedStyle(
    () => ({ opacity: animatedPresence?.value }),
    [animatedPresence]
  );

  const positionStyles = useMemo(() => {
    const { offset, childrenLayout, pointerStyle: pointerStyles } = props;

    return getPositionStyles({
      offset,
      childrenLayout,
      pointerStyle: pointerStyles,
      position,
      layout,
    });
  }, [layout, position, props]);

  return (
    <Animated.View
      onLayout={onLayout}
      style={[styles.tooltipWrapper, positionStyles, stylez]}
    >
      {children}
      <PointerWrapper
        {...pointerProps}
        tooltipLayout={layout}
        position={position}
      />
    </Animated.View>
  );
};

const TooltipWrapper = React.memo<TooltipWrapperProps>(TooltipWrapperComponent);
export default TooltipWrapper;
